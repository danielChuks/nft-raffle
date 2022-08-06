'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const [isOutcome, WINNER, STALEMATE, CONTINUE, TICKETS_FINISHED] = makeEnum(4);

  const Alice = Participant('Alice', {
    supplyRaffle: Fun([], Tuple(Token, UInt)),
    provideWinningNumber: Fun([UInt], UInt),
    displayWinner: Fun([Address], Null),
    informOfNoWinner: Fun([], Null),
    check: Fun([], Null),
    displayWinnerBalance: Fun([Address], Null),
    getRegInfo: Fun([Address, UInt], Null),
    displayHash: Fun([Digest], Null),
  
    ...hasRandom,
  });
  const Bob = API('Bob', {
    subscribeToNFT: Fun([], Token),
    drawRaffleTicket: Fun([UInt], Null),
    getNumberOfTicketsAvailable: Fun([], UInt),
    checkStatus: Fun([], Tuple(Bool, Bool))
  });
  init();

  // The first one to publish deploys the contract
  Alice.only(() => {
    const [NFT, numberOfTickets] = declassify(interact.supplyRaffle());
    const _winningNumber = interact.provideWinningNumber(numberOfTickets);
    const [_commitAlice, _saltAlice ] = makeCommitment(interact, _winningNumber);
    const commitAlice = declassify(_commitAlice);
    interact.displayHash(commitAlice);
  })
  Alice.publish(NFT, numberOfTickets, commitAlice);
  commit();

  Alice.pay([[1, NFT]]);

  commit();

  Alice.publish();

  const submissions = new Map(Address, UInt);
  const contestants = new Set();

  commit();

  Alice.only(() => {
    const winningNumber = declassify(_winningNumber);
    const saltAlice = declassify(_saltAlice);
  });

  Alice.publish(saltAlice, winningNumber);
  checkCommitment(commitAlice, saltAlice, winningNumber);

  const [ numOfDraws, outcome, addressToPay, numOfChecks ] = 
    parallelReduce([ 0, CONTINUE, Alice, 0 ])
      .invariant( balance(NFT) ==  1)
      .while((numOfDraws < numberOfTickets) || (numOfChecks < numberOfTickets) || (outcome == CONTINUE)) 
      .api_(Bob.subscribeToNFT, () => {
        check(this != Alice, "Not deployer");

        return [0, (resolve) => {
          resolve(NFT)

          return [numOfDraws, CONTINUE, Alice, numOfChecks]
        }]
      })
      .api_(Bob.getNumberOfTicketsAvailable, () => {
        check(this != Alice, "Not deployer");

        return [0, (resolve) => {
          resolve(numberOfTickets)

          return [numOfDraws, CONTINUE, Alice, numOfChecks]
        }]
      })
      .api_(Bob.drawRaffleTicket, (draw) => {
        check(this != Alice, "Not Deployer");
        check(isNone(submissions[this]), "Already made a draw")

        return [ 0, (resolve) => {
          resolve(null);

          submissions[this] = draw;

          Alice.interact.getRegInfo(this, draw);

          if ((numOfDraws + 1) == numberOfTickets) {
            return [numOfDraws + 1, TICKETS_FINISHED, Alice, numOfChecks];
          }
          else {
            return [ numOfDraws + 1, CONTINUE, Alice, numOfChecks];
          }
        }]
      })
      .api_(Bob.checkStatus, () => {
        check(this != Alice, "Not Deployer");
        check(isSome(submissions[this]), "No draw has been made by you yet !!!");
        check(!contestants.member(this), "Your status has been checked by you already !!!");

        return [0, (resolve) => {
          if (outcome == CONTINUE) {
            resolve([false, false]);
            return [numOfDraws, outcome, addressToPay, numOfChecks]
          }
          else {
            contestants.insert(this);

            return submissions[this].match({
              Some: (value) => {
                if (outcome == WINNER) {      
                  resolve([true, false]);
                  return [numOfDraws, WINNER, addressToPay, numOfChecks + 1];
                }
                else if (value == winningNumber) {
                  resolve([true, true]);
                  return [numOfDraws, WINNER, this, numOfChecks + 1];
                }
                else {
                  resolve([true, false]);
                  return [numOfDraws, TICKETS_FINISHED, addressToPay, numOfChecks + 1]
                }
              },
              None: () => {
                resolve([false, false]);
                return [numOfDraws, TICKETS_FINISHED, addressToPay, numOfChecks]
              }
            })
          }
        }]
      })
  commit();

  if (addressToPay == Alice) {
    Alice.interact.informOfNoWinner();
  }
  else {
    Alice.interact.displayWinner(addressToPay);
  }

  Alice.publish();

  transfer(balance(NFT), NFT).to(addressToPay);

  transfer(balance()).to(Alice);

  Alice.interact.displayWinnerBalance(addressToPay);

  commit();

  exit();
});