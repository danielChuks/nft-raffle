// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc9;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      3: [ctc0, ctc1, ctc2, ctc3, ctc6],
      5: [ctc0, ctc1, ctc0, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc2, ctc2, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Bob_checkStatus0_83: ctc8,
    Bob_drawRaffleTicket0_83: ctc9,
    Bob_getNumberOfTicketsAvailable0_83: ctc8,
    Bob_subscribeToNFT0_83: ctc8
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc11]);
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc11]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v1094 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1095 = [v1094];
  const v1101 = stdlib.protect(ctc5, await interact.supplyRaffle(), {
    at: './index.rsh:30:68:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'supplyRaffle',
    who: 'Alice'
    });
  const v1102 = v1101[stdlib.checkedBigNumberify('./index.rsh:30:68:application', stdlib.UInt_max, '0')];
  const v1103 = v1101[stdlib.checkedBigNumberify('./index.rsh:30:68:application', stdlib.UInt_max, '1')];
  const v1106 = stdlib.protect(ctc1, await interact.provideWinningNumber(v1103), {
    at: './index.rsh:31:57:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'provideWinningNumber',
    who: 'Alice'
    });
  const v1107 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:32:55:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v1108 = stdlib.digest(ctc6, [v1107, v1106]);
  stdlib.protect(ctc0, await interact.displayHash(v1108), {
    at: './index.rsh:34:25:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'displayHash',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1102, v1103, v1108],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1111, v1112, v1113], secs: v1115, time: v1114, didSend: v38, from: v1110 } = txn1;
      
      const v1116 = v1095[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0')];
      const v1118 = v1116[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '1')];
      const v1119 = v1116[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '2')];
      const v1120 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1118, v1119];
      const v1121 = stdlib.Array_set(v1095, stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'), v1120);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1111
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1111, v1112, v1113], secs: v1115, time: v1114, didSend: v38, from: v1110 } = txn1;
  const v1116 = v1095[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0')];
  const v1118 = v1116[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '1')];
  const v1119 = v1116[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '2')];
  const v1120 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1118, v1119];
  const v1121 = stdlib.Array_set(v1095, stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'), v1120);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1113, v1121],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1114,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:39:15:decimal', stdlib.UInt_max, '1'), v1111]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1125, time: v1124, didSend: v45, from: v1123 } = txn2;
      
      ;
      const v1126 = v1121[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0')];
      const v1127 = v1126[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0')];
      const v1128 = stdlib.add(v1127, stdlib.checkedBigNumberify('./index.rsh:39:15:decimal', stdlib.UInt_max, '1'));
      const v1131 = v1126[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '1')];
      const v1132 = v1126[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '2')];
      const v1133 = [v1128, v1131, v1132];
      const v1134 = stdlib.Array_set(v1121, stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0'), v1133);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:39:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v1111
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1125, time: v1124, didSend: v45, from: v1123 } = txn2;
  ;
  const v1126 = v1121[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0')];
  const v1127 = v1126[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0')];
  const v1128 = stdlib.add(v1127, stdlib.checkedBigNumberify('./index.rsh:39:15:decimal', stdlib.UInt_max, '1'));
  const v1131 = v1126[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '1')];
  const v1132 = v1126[stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '2')];
  const v1133 = [v1128, v1131, v1132];
  const v1134 = stdlib.Array_set(v1121, stdlib.checkedBigNumberify('./index.rsh:39:9:dot', stdlib.UInt_max, '0'), v1133);
  ;
  const v1135 = stdlib.addressEq(v1110, v1123);
  stdlib.assert(v1135, {
    at: './index.rsh:39:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1113, v1134],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1124,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1138, time: v1137, didSend: v50, from: v1136 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1138, time: v1137, didSend: v50, from: v1136 } = txn3;
  ;
  const v1139 = stdlib.addressEq(v1110, v1136);
  stdlib.assert(v1139, {
    at: './index.rsh:43:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1113, v1134, v1107, v1106],
    evt_cnt: 2,
    funcNum: 3,
    lct: v1137,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1143, v1144], secs: v1146, time: v1145, didSend: v61, from: v1142 } = txn4;
      
      ;
      const v1150 = v1110;
      const v1151 = stdlib.checkedBigNumberify('./index.rsh:59:42:decimal', stdlib.UInt_max, '0');
      const v1152 = stdlib.checkedBigNumberify('./index.rsh:59:22:decimal', stdlib.UInt_max, '0');
      const v1153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v1154 = v1145;
      const v1160 = v1134;
      const v1161 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1165 = stdlib.lt(v1152, v1112);
        const v1166 = stdlib.lt(v1151, v1112);
        const v1167 = v1165 ? true : v1166;
        const v1168 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v1169 = v1167 ? true : v1168;
        
        return v1169;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v2051 = stdlib.addressEq(v1150, v1110);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1143, v1144], secs: v1146, time: v1145, didSend: v61, from: v1142 } = txn4;
  ;
  const v1147 = stdlib.addressEq(v1110, v1142);
  stdlib.assert(v1147, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v1148 = stdlib.digest(ctc6, [v1143, v1144]);
  const v1149 = stdlib.digestEq(v1113, v1148);
  stdlib.assert(v1149, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:56:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v1150 = v1110;
  let v1151 = stdlib.checkedBigNumberify('./index.rsh:59:42:decimal', stdlib.UInt_max, '0');
  let v1152 = stdlib.checkedBigNumberify('./index.rsh:59:22:decimal', stdlib.UInt_max, '0');
  let v1153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v1154 = v1145;
  let v1160 = v1134;
  let v1161 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1165 = stdlib.lt(v1152, v1112);
    const v1166 = stdlib.lt(v1151, v1112);
    const v1167 = v1165 ? true : v1166;
    const v1168 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v1169 = v1167 ? true : v1168;
    
    return v1169;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn5;
    switch (v1268[0]) {
      case 'Bob_checkStatus0_83': {
        const v1271 = v1268[1];
        undefined /* setApiDetails */;
        const v1276 = stdlib.addressEq(v1267, v1110);
        const v1277 = v1276 ? false : true;
        stdlib.assert(v1277, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v1279 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1267), null);
        let v1280;
        switch (v1279[0]) {
          case 'None': {
            const v1281 = v1279[1];
            v1280 = false;
            
            break;
            }
          case 'Some': {
            const v1282 = v1279[1];
            v1280 = true;
            
            break;
            }
          }
        stdlib.assert(v1280, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'No draw has been made by you yet !!!',
          who: 'Alice'
          });
        const v1284 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1267), null);
        let v1285;
        switch (v1284[0]) {
          case 'None': {
            const v1286 = v1284[1];
            v1285 = false;
            
            break;
            }
          case 'Some': {
            const v1287 = v1284[1];
            v1285 = true;
            
            break;
            }
          }
        const v1288 = v1285 ? false : true;
        stdlib.assert(v1288, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'Your status has been checked by you already !!!',
          who: 'Alice'
          });
        ;
        let v1313;
        switch (v1279[0]) {
          case 'None': {
            const v1314 = v1279[1];
            v1313 = false;
            
            break;
            }
          case 'Some': {
            const v1315 = v1279[1];
            v1313 = true;
            
            break;
            }
          }
        stdlib.assert(v1313, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
          msg: 'No draw has been made by you yet !!!',
          who: 'Alice'
          });
        let v1318;
        switch (v1284[0]) {
          case 'None': {
            const v1319 = v1284[1];
            v1318 = false;
            
            break;
            }
          case 'Some': {
            const v1320 = v1284[1];
            v1318 = true;
            
            break;
            }
          }
        const v1321 = v1318 ? false : true;
        stdlib.assert(v1321, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
          msg: 'Your status has been checked by you already !!!',
          who: 'Alice'
          });
        const v1323 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        if (v1323) {
          const v1324 = [false, false];
          await txn5.getOutput('Bob_checkStatus', 'v1324', ctc12, v1324);
          const cv1150 = v1150;
          const cv1151 = v1151;
          const cv1152 = v1152;
          const cv1153 = v1153;
          const cv1154 = v1269;
          const cv1160 = v1160;
          const cv1161 = v1161;
          
          v1150 = cv1150;
          v1151 = cv1151;
          v1152 = cv1152;
          v1153 = cv1153;
          v1154 = cv1154;
          v1160 = cv1160;
          v1161 = cv1161;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v1267, null);
          switch (v1279[0]) {
            case 'None': {
              const v1340 = v1279[1];
              const v1341 = [false, false];
              await txn5.getOutput('Bob_checkStatus', 'v1341', ctc12, v1341);
              const cv1150 = v1150;
              const cv1151 = v1151;
              const cv1152 = v1152;
              const cv1153 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
              const cv1154 = v1269;
              const cv1160 = v1160;
              const cv1161 = v1161;
              
              v1150 = cv1150;
              v1151 = cv1151;
              v1152 = cv1152;
              v1153 = cv1153;
              v1154 = cv1154;
              v1160 = cv1160;
              v1161 = cv1161;
              
              continue;
              break;
              }
            case 'Some': {
              const v1357 = v1279[1];
              const v1358 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v1358) {
                const v1359 = [true, false];
                await txn5.getOutput('Bob_checkStatus', 'v1359', ctc12, v1359);
                const v1367 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:116:75:decimal', stdlib.UInt_max, '1'));
                const cv1150 = v1150;
                const cv1151 = v1367;
                const cv1152 = v1152;
                const cv1153 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
                const cv1154 = v1269;
                const cv1160 = v1160;
                const cv1161 = v1161;
                
                v1150 = cv1150;
                v1151 = cv1151;
                v1152 = cv1152;
                v1153 = cv1153;
                v1154 = cv1154;
                v1160 = cv1160;
                v1161 = cv1161;
                
                continue;}
              else {
                const v1376 = stdlib.eq(v1357, v1144);
                if (v1376) {
                  const v1377 = [true, true];
                  await txn5.getOutput('Bob_checkStatus', 'v1377', ctc12, v1377);
                  const v1385 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:120:67:decimal', stdlib.UInt_max, '1'));
                  const cv1150 = v1267;
                  const cv1151 = v1385;
                  const cv1152 = v1152;
                  const cv1153 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
                  const cv1154 = v1269;
                  const cv1160 = v1160;
                  const cv1161 = v1161;
                  
                  v1150 = cv1150;
                  v1151 = cv1151;
                  v1152 = cv1152;
                  v1153 = cv1153;
                  v1154 = cv1154;
                  v1160 = cv1160;
                  v1161 = cv1161;
                  
                  continue;}
                else {
                  const v1394 = [true, false];
                  await txn5.getOutput('Bob_checkStatus', 'v1394', ctc12, v1394);
                  const v1402 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:124:85:decimal', stdlib.UInt_max, '1'));
                  const cv1150 = v1150;
                  const cv1151 = v1402;
                  const cv1152 = v1152;
                  const cv1153 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
                  const cv1154 = v1269;
                  const cv1160 = v1160;
                  const cv1161 = v1161;
                  
                  v1150 = cv1150;
                  v1151 = cv1151;
                  v1152 = cv1152;
                  v1153 = cv1153;
                  v1154 = cv1154;
                  v1160 = cv1160;
                  v1161 = cv1161;
                  
                  continue;}}
              break;
              }
            }}
        break;
        }
      case 'Bob_drawRaffleTicket0_83': {
        const v1466 = v1268[1];
        undefined /* setApiDetails */;
        const v1487 = stdlib.addressEq(v1267, v1110);
        const v1488 = v1487 ? false : true;
        stdlib.assert(v1488, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:81:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v1490 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1267), null);
        let v1491;
        switch (v1490[0]) {
          case 'None': {
            const v1492 = v1490[1];
            v1491 = true;
            
            break;
            }
          case 'Some': {
            const v1493 = v1490[1];
            v1491 = false;
            
            break;
            }
          }
        stdlib.assert(v1491, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'Already made a draw',
          who: 'Alice'
          });
        ;
        const v1607 = v1466[stdlib.checkedBigNumberify('./index.rsh:80:12:spread', stdlib.UInt_max, '0')];
        let v1612;
        switch (v1490[0]) {
          case 'None': {
            const v1613 = v1490[1];
            v1612 = true;
            
            break;
            }
          case 'Some': {
            const v1614 = v1490[1];
            v1612 = false;
            
            break;
            }
          }
        stdlib.assert(v1612, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:84:31:application call to [unknown function] (defined at: ./index.rsh:84:31:function exp)'],
          msg: 'Already made a draw',
          who: 'Alice'
          });
        const v1617 = null;
        await txn5.getOutput('Bob_drawRaffleTicket', 'v1617', ctc0, v1617);
        await stdlib.mapSet(map0, v1267, v1607);
        stdlib.protect(ctc0, await interact.getRegInfo(v1267, v1607), {
          at: './index.rsh:89:36:application',
          fs: ['at ./index.rsh:89:36:application call to [unknown function] (defined at: ./index.rsh:89:36:function exp)', 'at ./index.rsh:89:36:application call to "liftedInteract" (defined at: ./index.rsh:89:36:application)', 'at ./index.rsh:84:31:application call to [unknown function] (defined at: ./index.rsh:84:31:function exp)'],
          msg: 'getRegInfo',
          who: 'Alice'
          });
        
        const v1625 = stdlib.add(v1152, stdlib.checkedBigNumberify('./index.rsh:91:29:decimal', stdlib.UInt_max, '1'));
        const v1626 = stdlib.eq(v1625, v1112);
        if (v1626) {
          const cv1150 = v1110;
          const cv1151 = v1151;
          const cv1152 = v1625;
          const cv1153 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
          const cv1154 = v1269;
          const cv1160 = v1160;
          const cv1161 = v1161;
          
          v1150 = cv1150;
          v1151 = cv1151;
          v1152 = cv1152;
          v1153 = cv1153;
          v1154 = cv1154;
          v1160 = cv1160;
          v1161 = cv1161;
          
          continue;}
        else {
          const cv1150 = v1110;
          const cv1151 = v1151;
          const cv1152 = v1625;
          const cv1153 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
          const cv1154 = v1269;
          const cv1160 = v1160;
          const cv1161 = v1161;
          
          v1150 = cv1150;
          v1151 = cv1151;
          v1152 = cv1152;
          v1153 = cv1153;
          v1154 = cv1154;
          v1160 = cv1160;
          v1161 = cv1161;
          
          continue;}
        break;
        }
      case 'Bob_getNumberOfTicketsAvailable0_83': {
        const v1661 = v1268[1];
        undefined /* setApiDetails */;
        const v1691 = stdlib.addressEq(v1267, v1110);
        const v1692 = v1691 ? false : true;
        stdlib.assert(v1692, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:49:application call to [unknown function] (defined at: ./index.rsh:71:49:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:71:49:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'Not deployer',
          who: 'Alice'
          });
        ;
        await txn5.getOutput('Bob_getNumberOfTicketsAvailable', 'v1112', ctc1, v1112);
        const cv1150 = v1110;
        const cv1151 = v1151;
        const cv1152 = v1152;
        const cv1153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const cv1154 = v1269;
        const cv1160 = v1160;
        const cv1161 = v1161;
        
        v1150 = cv1150;
        v1151 = cv1151;
        v1152 = cv1152;
        v1153 = cv1153;
        v1154 = cv1154;
        v1160 = cv1160;
        v1161 = cv1161;
        
        continue;
        break;
        }
      case 'Bob_subscribeToNFT0_83': {
        const v1856 = v1268[1];
        undefined /* setApiDetails */;
        const v1890 = stdlib.addressEq(v1267, v1110);
        const v1891 = v1890 ? false : true;
        stdlib.assert(v1891, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:63:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
          msg: 'Not deployer',
          who: 'Alice'
          });
        ;
        await txn5.getOutput('Bob_subscribeToNFT', 'v1111', ctc4, v1111);
        const cv1150 = v1110;
        const cv1151 = v1151;
        const cv1152 = v1152;
        const cv1153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const cv1154 = v1269;
        const cv1160 = v1160;
        const cv1161 = v1161;
        
        v1150 = cv1150;
        v1151 = cv1151;
        v1152 = cv1152;
        v1153 = cv1153;
        v1154 = cv1154;
        v1160 = cv1160;
        v1161 = cv1161;
        
        continue;
        break;
        }
      }
    
    }
  const v2051 = stdlib.addressEq(v1150, v1110);
  if (v2051) {
    stdlib.protect(ctc0, await interact.informOfNoWinner(), {
      at: './index.rsh:138:36:application',
      fs: ['at ./index.rsh:138:36:application call to [unknown function] (defined at: ./index.rsh:138:36:function exp)', 'at ./index.rsh:138:36:application call to "liftedInteract" (defined at: ./index.rsh:138:36:application)'],
      msg: 'informOfNoWinner',
      who: 'Alice'
      });
    
    }
  else {
    stdlib.protect(ctc0, await interact.displayWinner(v1150), {
      at: './index.rsh:141:33:application',
      fs: ['at ./index.rsh:141:33:application call to [unknown function] (defined at: ./index.rsh:141:33:function exp)', 'at ./index.rsh:141:33:application call to "liftedInteract" (defined at: ./index.rsh:141:33:application)'],
      msg: 'displayWinner',
      who: 'Alice'
      });
    
    }
  const txn5 = await (ctc.sendrecv({
    args: [v1110, v1111, v1150, v1160, v1161, v2051],
    evt_cnt: 0,
    funcNum: 5,
    lct: v1154,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:144:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2056, time: v2055, didSend: v1038, from: v2054 } = txn5;
      
      ;
      const v2058 = v1160[stdlib.checkedBigNumberify('./index.rsh:146:19:application', stdlib.UInt_max, '0')];
      const v2059 = v2058[stdlib.checkedBigNumberify('./index.rsh:146:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1150,
        tok: v1111
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1110,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v1111
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc13, ctc15, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2056, time: v2055, didSend: v1038, from: v2054 } = txn5;
  ;
  const v2057 = stdlib.addressEq(v1110, v2054);
  stdlib.assert(v2057, {
    at: './index.rsh:144:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v2058 = v1160[stdlib.checkedBigNumberify('./index.rsh:146:19:application', stdlib.UInt_max, '0')];
  const v2059 = v2058[stdlib.checkedBigNumberify('./index.rsh:146:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  stdlib.protect(ctc0, await interact.displayWinnerBalance(v1150), {
    at: './index.rsh:150:38:application',
    fs: ['at ./index.rsh:150:38:application call to [unknown function] (defined at: ./index.rsh:150:38:function exp)', 'at ./index.rsh:150:38:application call to "liftedInteract" (defined at: ./index.rsh:150:38:application)'],
    msg: 'displayWinnerBalance',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function _Bob_checkStatus7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_checkStatus7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_checkStatus7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_83: ctc9,
    Bob_drawRaffleTicket0_83: ctc10,
    Bob_getNumberOfTicketsAvailable0_83: ctc9,
    Bob_subscribeToNFT0_83: ctc9
    });
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1212 = ctc.selfAddress();
  const v1214 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to "runBob_checkStatus0_83" (defined at: ./index.rsh:99:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'in',
    who: 'Bob_checkStatus'
    });
  const v1215 = stdlib.addressEq(v1212, v1110);
  const v1216 = v1215 ? false : true;
  stdlib.assert(v1216, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to "runBob_checkStatus0_83" (defined at: ./index.rsh:99:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_checkStatus'
    });
  const v1218 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1212), null);
  let v1219;
  switch (v1218[0]) {
    case 'None': {
      const v1220 = v1218[1];
      v1219 = false;
      
      break;
      }
    case 'Some': {
      const v1221 = v1218[1];
      v1219 = true;
      
      break;
      }
    }
  stdlib.assert(v1219, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to "runBob_checkStatus0_83" (defined at: ./index.rsh:99:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'No draw has been made by you yet !!!',
    who: 'Bob_checkStatus'
    });
  const v1223 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1212), null);
  let v1224;
  switch (v1223[0]) {
    case 'None': {
      const v1225 = v1223[1];
      v1224 = false;
      
      break;
      }
    case 'Some': {
      const v1226 = v1223[1];
      v1224 = true;
      
      break;
      }
    }
  const v1227 = v1224 ? false : true;
  stdlib.assert(v1227, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to "runBob_checkStatus0_83" (defined at: ./index.rsh:99:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Your status has been checked by you already !!!',
    who: 'Bob_checkStatus'
    });
  const v1232 = ['Bob_checkStatus0_83', v1214];
  
  let v1239;
  switch (v1218[0]) {
    case 'None': {
      const v1240 = v1218[1];
      v1239 = false;
      
      break;
      }
    case 'Some': {
      const v1241 = v1218[1];
      v1239 = true;
      
      break;
      }
    }
  stdlib.assert(v1239, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'No draw has been made by you yet !!!',
    who: 'Bob_checkStatus'
    });
  let v1244;
  switch (v1223[0]) {
    case 'None': {
      const v1245 = v1223[1];
      v1244 = false;
      
      break;
      }
    case 'Some': {
      const v1246 = v1223[1];
      v1244 = true;
      
      break;
      }
    }
  const v1247 = v1244 ? false : true;
  stdlib.assert(v1247, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Your status has been checked by you already !!!',
    who: 'Bob_checkStatus'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161, v1232],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:104:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
      
      switch (v1268[0]) {
        case 'Bob_checkStatus0_83': {
          const v1271 = v1268[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_checkStatus"
            });
          const v1279 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1267), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1267), null);
          ;
          const v1323 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v1323) {
            const v1324 = [false, false];
            const v1325 = await txn1.getOutput('Bob_checkStatus', 'v1324', ctc12, v1324);
            
            const v3367 = v1150;
            const v3368 = v1151;
            const v3369 = v1152;
            const v3370 = v1153;
            const v3372 = v1160;
            const v3373 = v1161;
            const v3374 = stdlib.lt(v1152, v1112);
            const v3375 = stdlib.lt(v1151, v1112);
            const v3376 = v3374 ? true : v3375;
            const v3378 = v3376 ? true : true;
            if (v3378) {
              sim_r.isHalt = false;
              }
            else {
              const v3379 = stdlib.addressEq(v1150, v1110);
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 1, v1267, null);
            switch (v1279[0]) {
              case 'None': {
                const v1340 = v1279[1];
                const v1341 = [false, false];
                const v1342 = await txn1.getOutput('Bob_checkStatus', 'v1341', ctc12, v1341);
                
                const v3387 = v1150;
                const v3388 = v1151;
                const v3389 = v1152;
                const v3390 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
                const v3392 = v1160;
                const v3393 = v1161;
                const v3394 = stdlib.lt(v1152, v1112);
                const v3395 = stdlib.lt(v1151, v1112);
                const v3396 = v3394 ? true : v3395;
                if (v3396) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3399 = stdlib.addressEq(v1150, v1110);
                  sim_r.isHalt = false;
                  }
                break;
                }
              case 'Some': {
                const v1357 = v1279[1];
                const v1358 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                if (v1358) {
                  const v1359 = [true, false];
                  const v1360 = await txn1.getOutput('Bob_checkStatus', 'v1359', ctc12, v1359);
                  
                  const v1367 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:116:75:decimal', stdlib.UInt_max, '1'));
                  const v3407 = v1150;
                  const v3408 = v1367;
                  const v3409 = v1152;
                  const v3410 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
                  const v3412 = v1160;
                  const v3413 = v1161;
                  const v3414 = stdlib.lt(v1152, v1112);
                  const v3415 = stdlib.lt(v1367, v1112);
                  const v3416 = v3414 ? true : v3415;
                  if (v3416) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v3419 = stdlib.addressEq(v1150, v1110);
                    sim_r.isHalt = false;
                    }}
                else {
                  const v1376 = stdlib.eq(v1357, v1144);
                  if (v1376) {
                    const v1377 = [true, true];
                    const v1378 = await txn1.getOutput('Bob_checkStatus', 'v1377', ctc12, v1377);
                    
                    const v1385 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:120:67:decimal', stdlib.UInt_max, '1'));
                    const v3427 = v1267;
                    const v3428 = v1385;
                    const v3429 = v1152;
                    const v3430 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
                    const v3432 = v1160;
                    const v3433 = v1161;
                    const v3434 = stdlib.lt(v1152, v1112);
                    const v3435 = stdlib.lt(v1385, v1112);
                    const v3436 = v3434 ? true : v3435;
                    if (v3436) {
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.isHalt = false;
                      }}
                  else {
                    const v1394 = [true, false];
                    const v1395 = await txn1.getOutput('Bob_checkStatus', 'v1394', ctc12, v1394);
                    
                    const v1402 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:124:85:decimal', stdlib.UInt_max, '1'));
                    const v3447 = v1150;
                    const v3448 = v1402;
                    const v3449 = v1152;
                    const v3450 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
                    const v3452 = v1160;
                    const v3453 = v1161;
                    const v3454 = stdlib.lt(v1152, v1112);
                    const v3455 = stdlib.lt(v1402, v1112);
                    const v3456 = v3454 ? true : v3455;
                    if (v3456) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v3459 = stdlib.addressEq(v1150, v1110);
                      sim_r.isHalt = false;
                      }}}
                break;
                }
              }}
          break;
          }
        case 'Bob_drawRaffleTicket0_83': {
          const v1466 = v1268[1];
          
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_83': {
          const v1661 = v1268[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_83': {
          const v1856 = v1268[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
  switch (v1268[0]) {
    case 'Bob_checkStatus0_83': {
      const v1271 = v1268[1];
      undefined /* setApiDetails */;
      const v1276 = stdlib.addressEq(v1267, v1110);
      const v1277 = v1276 ? false : true;
      stdlib.assert(v1277, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_checkStatus'
        });
      const v1279 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1267), null);
      let v1280;
      switch (v1279[0]) {
        case 'None': {
          const v1281 = v1279[1];
          v1280 = false;
          
          break;
          }
        case 'Some': {
          const v1282 = v1279[1];
          v1280 = true;
          
          break;
          }
        }
      stdlib.assert(v1280, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'No draw has been made by you yet !!!',
        who: 'Bob_checkStatus'
        });
      const v1284 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1267), null);
      let v1285;
      switch (v1284[0]) {
        case 'None': {
          const v1286 = v1284[1];
          v1285 = false;
          
          break;
          }
        case 'Some': {
          const v1287 = v1284[1];
          v1285 = true;
          
          break;
          }
        }
      const v1288 = v1285 ? false : true;
      stdlib.assert(v1288, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:33:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:99:33:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'Your status has been checked by you already !!!',
        who: 'Bob_checkStatus'
        });
      ;
      let v1313;
      switch (v1279[0]) {
        case 'None': {
          const v1314 = v1279[1];
          v1313 = false;
          
          break;
          }
        case 'Some': {
          const v1315 = v1279[1];
          v1313 = true;
          
          break;
          }
        }
      stdlib.assert(v1313, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
        msg: 'No draw has been made by you yet !!!',
        who: 'Bob_checkStatus'
        });
      let v1318;
      switch (v1284[0]) {
        case 'None': {
          const v1319 = v1284[1];
          v1318 = false;
          
          break;
          }
        case 'Some': {
          const v1320 = v1284[1];
          v1318 = true;
          
          break;
          }
        }
      const v1321 = v1318 ? false : true;
      stdlib.assert(v1321, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:102:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
        msg: 'Your status has been checked by you already !!!',
        who: 'Bob_checkStatus'
        });
      const v1323 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v1323) {
        const v1324 = [false, false];
        const v1325 = await txn1.getOutput('Bob_checkStatus', 'v1324', ctc12, v1324);
        if (v769) {
          stdlib.protect(ctc0, await interact.out(v1271, v1325), {
            at: './index.rsh:99:13:application',
            fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:106:20:application call to "resolve" (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
            msg: 'out',
            who: 'Bob_checkStatus'
            });
          }
        else {
          }
        
        const v3367 = v1150;
        const v3368 = v1151;
        const v3369 = v1152;
        const v3370 = v1153;
        const v3372 = v1160;
        const v3373 = v1161;
        const v3374 = stdlib.lt(v1152, v1112);
        const v3375 = stdlib.lt(v1151, v1112);
        const v3376 = v3374 ? true : v3375;
        const v3378 = v3376 ? true : true;
        if (v3378) {
          return;
          }
        else {
          const v3379 = stdlib.addressEq(v1150, v1110);
          return;
          }}
      else {
        await stdlib.mapSet(map1, v1267, null);
        switch (v1279[0]) {
          case 'None': {
            const v1340 = v1279[1];
            const v1341 = [false, false];
            const v1342 = await txn1.getOutput('Bob_checkStatus', 'v1341', ctc12, v1341);
            if (v769) {
              stdlib.protect(ctc0, await interact.out(v1271, v1342), {
                at: './index.rsh:99:13:application',
                fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:128:24:application call to "resolve" (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:127:24:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:112:43:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
                msg: 'out',
                who: 'Bob_checkStatus'
                });
              }
            else {
              }
            
            const v3387 = v1150;
            const v3388 = v1151;
            const v3389 = v1152;
            const v3390 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
            const v3392 = v1160;
            const v3393 = v1161;
            const v3394 = stdlib.lt(v1152, v1112);
            const v3395 = stdlib.lt(v1151, v1112);
            const v3396 = v3394 ? true : v3395;
            if (v3396) {
              return;
              }
            else {
              const v3399 = stdlib.addressEq(v1150, v1110);
              return;
              }
            break;
            }
          case 'Some': {
            const v1357 = v1279[1];
            const v1358 = stdlib.eq(v1153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v1358) {
              const v1359 = [true, false];
              const v1360 = await txn1.getOutput('Bob_checkStatus', 'v1359', ctc12, v1359);
              if (v769) {
                stdlib.protect(ctc0, await interact.out(v1271, v1360), {
                  at: './index.rsh:99:13:application',
                  fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:115:26:application call to "resolve" (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:112:43:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
                  msg: 'out',
                  who: 'Bob_checkStatus'
                  });
                }
              else {
                }
              
              const v1367 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:116:75:decimal', stdlib.UInt_max, '1'));
              const v3407 = v1150;
              const v3408 = v1367;
              const v3409 = v1152;
              const v3410 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
              const v3412 = v1160;
              const v3413 = v1161;
              const v3414 = stdlib.lt(v1152, v1112);
              const v3415 = stdlib.lt(v1367, v1112);
              const v3416 = v3414 ? true : v3415;
              if (v3416) {
                return;
                }
              else {
                const v3419 = stdlib.addressEq(v1150, v1110);
                return;
                }}
            else {
              const v1376 = stdlib.eq(v1357, v1144);
              if (v1376) {
                const v1377 = [true, true];
                const v1378 = await txn1.getOutput('Bob_checkStatus', 'v1377', ctc12, v1377);
                if (v769) {
                  stdlib.protect(ctc0, await interact.out(v1271, v1378), {
                    at: './index.rsh:99:13:application',
                    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:119:26:application call to "resolve" (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:112:43:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
                    msg: 'out',
                    who: 'Bob_checkStatus'
                    });
                  }
                else {
                  }
                
                const v1385 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:120:67:decimal', stdlib.UInt_max, '1'));
                const v3427 = v1267;
                const v3428 = v1385;
                const v3429 = v1152;
                const v3430 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0');
                const v3432 = v1160;
                const v3433 = v1161;
                const v3434 = stdlib.lt(v1152, v1112);
                const v3435 = stdlib.lt(v1385, v1112);
                const v3436 = v3434 ? true : v3435;
                if (v3436) {
                  return;
                  }
                else {
                  return;
                  }}
              else {
                const v1394 = [true, false];
                const v1395 = await txn1.getOutput('Bob_checkStatus', 'v1394', ctc12, v1394);
                if (v769) {
                  stdlib.protect(ctc0, await interact.out(v1271, v1395), {
                    at: './index.rsh:99:13:application',
                    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:123:26:application call to "resolve" (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)', 'at ./index.rsh:112:43:application call to [unknown function] (defined at: ./index.rsh:112:43:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
                    msg: 'out',
                    who: 'Bob_checkStatus'
                    });
                  }
                else {
                  }
                
                const v1402 = stdlib.add(v1151, stdlib.checkedBigNumberify('./index.rsh:124:85:decimal', stdlib.UInt_max, '1'));
                const v3447 = v1150;
                const v3448 = v1402;
                const v3449 = v1152;
                const v3450 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
                const v3452 = v1160;
                const v3453 = v1161;
                const v3454 = stdlib.lt(v1152, v1112);
                const v3455 = stdlib.lt(v1402, v1112);
                const v3456 = v3454 ? true : v3455;
                if (v3456) {
                  return;
                  }
                else {
                  const v3459 = stdlib.addressEq(v1150, v1110);
                  return;
                  }}}
            break;
            }
          }}
      break;
      }
    case 'Bob_drawRaffleTicket0_83': {
      const v1466 = v1268[1];
      return;
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_83': {
      const v1661 = v1268[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_83': {
      const v1856 = v1268[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_drawRaffleTicket7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_drawRaffleTicket7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_drawRaffleTicket7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_83: ctc10,
    Bob_drawRaffleTicket0_83: ctc9,
    Bob_getNumberOfTicketsAvailable0_83: ctc10,
    Bob_subscribeToNFT0_83: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1192 = ctc.selfAddress();
  const v1194 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to "runBob_drawRaffleTicket0_83" (defined at: ./index.rsh:80:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'in',
    who: 'Bob_drawRaffleTicket'
    });
  const v1197 = stdlib.addressEq(v1192, v1110);
  const v1198 = v1197 ? false : true;
  stdlib.assert(v1198, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to "runBob_drawRaffleTicket0_83" (defined at: ./index.rsh:80:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_drawRaffleTicket'
    });
  const v1200 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1192), null);
  let v1201;
  switch (v1200[0]) {
    case 'None': {
      const v1202 = v1200[1];
      v1201 = true;
      
      break;
      }
    case 'Some': {
      const v1203 = v1200[1];
      v1201 = false;
      
      break;
      }
    }
  stdlib.assert(v1201, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to "runBob_drawRaffleTicket0_83" (defined at: ./index.rsh:80:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Already made a draw',
    who: 'Bob_drawRaffleTicket'
    });
  const v1210 = ['Bob_drawRaffleTicket0_83', v1194];
  
  let v1255;
  switch (v1200[0]) {
    case 'None': {
      const v1256 = v1200[1];
      v1255 = true;
      
      break;
      }
    case 'Some': {
      const v1257 = v1200[1];
      v1255 = false;
      
      break;
      }
    }
  stdlib.assert(v1255, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Already made a draw',
    who: 'Bob_drawRaffleTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161, v1210],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
      
      switch (v1268[0]) {
        case 'Bob_checkStatus0_83': {
          const v1271 = v1268[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_83': {
          const v1466 = v1268[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_drawRaffleTicket"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1267), null);
          ;
          const v1607 = v1466[stdlib.checkedBigNumberify('./index.rsh:80:12:spread', stdlib.UInt_max, '0')];
          const v1617 = null;
          const v1618 = await txn1.getOutput('Bob_drawRaffleTicket', 'v1617', ctc0, v1617);
          
          await stdlib.simMapSet(sim_r, 0, v1267, v1607);
          const v1625 = stdlib.add(v1152, stdlib.checkedBigNumberify('./index.rsh:91:29:decimal', stdlib.UInt_max, '1'));
          const v1626 = stdlib.eq(v1625, v1112);
          if (v1626) {
            const v3647 = v1110;
            const v3648 = v1151;
            const v3649 = v1625;
            const v3650 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
            const v3652 = v1160;
            const v3653 = v1161;
            const v3654 = stdlib.lt(v1625, v1112);
            const v3655 = stdlib.lt(v1151, v1112);
            const v3656 = v3654 ? true : v3655;
            if (v3656) {
              sim_r.isHalt = false;
              }
            else {
              const v3659 = true;
              sim_r.isHalt = false;
              }}
          else {
            const v3667 = v1110;
            const v3668 = v1151;
            const v3669 = v1625;
            const v3670 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
            const v3672 = v1160;
            const v3673 = v1161;
            const v3674 = stdlib.lt(v1625, v1112);
            const v3675 = stdlib.lt(v1151, v1112);
            const v3676 = v3674 ? true : v3675;
            const v3678 = v3676 ? true : true;
            if (v3678) {
              sim_r.isHalt = false;
              }
            else {
              const v3679 = true;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_83': {
          const v1661 = v1268[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_83': {
          const v1856 = v1268[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
  switch (v1268[0]) {
    case 'Bob_checkStatus0_83': {
      const v1271 = v1268[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_83': {
      const v1466 = v1268[1];
      undefined /* setApiDetails */;
      const v1487 = stdlib.addressEq(v1267, v1110);
      const v1488 = v1487 ? false : true;
      stdlib.assert(v1488, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:81:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_drawRaffleTicket'
        });
      const v1490 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1267), null);
      let v1491;
      switch (v1490[0]) {
        case 'None': {
          const v1492 = v1490[1];
          v1491 = true;
          
          break;
          }
        case 'Some': {
          const v1493 = v1490[1];
          v1491 = false;
          
          break;
          }
        }
      stdlib.assert(v1491, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:42:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:80:42:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'Already made a draw',
        who: 'Bob_drawRaffleTicket'
        });
      ;
      const v1607 = v1466[stdlib.checkedBigNumberify('./index.rsh:80:12:spread', stdlib.UInt_max, '0')];
      let v1612;
      switch (v1490[0]) {
        case 'None': {
          const v1613 = v1490[1];
          v1612 = true;
          
          break;
          }
        case 'Some': {
          const v1614 = v1490[1];
          v1612 = false;
          
          break;
          }
        }
      stdlib.assert(v1612, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:84:31:application call to [unknown function] (defined at: ./index.rsh:84:31:function exp)'],
        msg: 'Already made a draw',
        who: 'Bob_drawRaffleTicket'
        });
      const v1617 = null;
      const v1618 = await txn1.getOutput('Bob_drawRaffleTicket', 'v1617', ctc0, v1617);
      if (v769) {
        stdlib.protect(ctc0, await interact.out(v1466, v1618), {
          at: './index.rsh:80:13:application',
          fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:13:function exp)', 'at ./index.rsh:85:18:application call to "resolve" (defined at: ./index.rsh:84:31:function exp)', 'at ./index.rsh:84:31:application call to [unknown function] (defined at: ./index.rsh:84:31:function exp)'],
          msg: 'out',
          who: 'Bob_drawRaffleTicket'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v1267, v1607);
      const v1625 = stdlib.add(v1152, stdlib.checkedBigNumberify('./index.rsh:91:29:decimal', stdlib.UInt_max, '1'));
      const v1626 = stdlib.eq(v1625, v1112);
      if (v1626) {
        const v3647 = v1110;
        const v3648 = v1151;
        const v3649 = v1625;
        const v3650 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
        const v3652 = v1160;
        const v3653 = v1161;
        const v3654 = stdlib.lt(v1625, v1112);
        const v3655 = stdlib.lt(v1151, v1112);
        const v3656 = v3654 ? true : v3655;
        if (v3656) {
          return;
          }
        else {
          const v3659 = true;
          return;
          }}
      else {
        const v3667 = v1110;
        const v3668 = v1151;
        const v3669 = v1625;
        const v3670 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
        const v3672 = v1160;
        const v3673 = v1161;
        const v3674 = stdlib.lt(v1625, v1112);
        const v3675 = stdlib.lt(v1151, v1112);
        const v3676 = v3674 ? true : v3675;
        const v3678 = v3676 ? true : true;
        if (v3678) {
          return;
          }
        else {
          const v3679 = true;
          return;
          }}
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_83': {
      const v1661 = v1268[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_83': {
      const v1856 = v1268[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_getNumberOfTicketsAvailable7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getNumberOfTicketsAvailable7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getNumberOfTicketsAvailable7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_83: ctc9,
    Bob_drawRaffleTicket0_83: ctc10,
    Bob_getNumberOfTicketsAvailable0_83: ctc9,
    Bob_subscribeToNFT0_83: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1181 = ctc.selfAddress();
  const v1183 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:71:49:application call to [unknown function] (defined at: ./index.rsh:71:49:function exp)', 'at ./index.rsh:59:19:application call to "runBob_getNumberOfTicketsAvailable0_83" (defined at: ./index.rsh:71:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'in',
    who: 'Bob_getNumberOfTicketsAvailable'
    });
  const v1184 = stdlib.addressEq(v1181, v1110);
  const v1185 = v1184 ? false : true;
  stdlib.assert(v1185, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:49:application call to [unknown function] (defined at: ./index.rsh:71:49:function exp)', 'at ./index.rsh:59:19:application call to "runBob_getNumberOfTicketsAvailable0_83" (defined at: ./index.rsh:71:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Not deployer',
    who: 'Bob_getNumberOfTicketsAvailable'
    });
  const v1190 = ['Bob_getNumberOfTicketsAvailable0_83', v1183];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161, v1190],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
      
      switch (v1268[0]) {
        case 'Bob_checkStatus0_83': {
          const v1271 = v1268[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_83': {
          const v1466 = v1268[1];
          
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_83': {
          const v1661 = v1268[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_getNumberOfTicketsAvailable"
            });
          ;
          const v1840 = await txn1.getOutput('Bob_getNumberOfTicketsAvailable', 'v1112', ctc1, v1112);
          
          const v3867 = v1110;
          const v3868 = v1151;
          const v3869 = v1152;
          const v3870 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v3872 = v1160;
          const v3873 = v1161;
          const v3874 = stdlib.lt(v1152, v1112);
          const v3875 = stdlib.lt(v1151, v1112);
          const v3876 = v3874 ? true : v3875;
          const v3878 = v3876 ? true : true;
          if (v3878) {
            sim_r.isHalt = false;
            }
          else {
            const v3879 = true;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bob_subscribeToNFT0_83': {
          const v1856 = v1268[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
  switch (v1268[0]) {
    case 'Bob_checkStatus0_83': {
      const v1271 = v1268[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_83': {
      const v1466 = v1268[1];
      return;
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_83': {
      const v1661 = v1268[1];
      undefined /* setApiDetails */;
      const v1691 = stdlib.addressEq(v1267, v1110);
      const v1692 = v1691 ? false : true;
      stdlib.assert(v1692, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:49:application call to [unknown function] (defined at: ./index.rsh:71:49:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:71:49:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'Not deployer',
        who: 'Bob_getNumberOfTicketsAvailable'
        });
      ;
      const v1840 = await txn1.getOutput('Bob_getNumberOfTicketsAvailable', 'v1112', ctc1, v1112);
      if (v769) {
        stdlib.protect(ctc0, await interact.out(v1661, v1840), {
          at: './index.rsh:71:13:application',
          fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:13:function exp)', 'at ./index.rsh:75:18:application call to "resolve" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:74:30:application call to [unknown function] (defined at: ./index.rsh:74:30:function exp)'],
          msg: 'out',
          who: 'Bob_getNumberOfTicketsAvailable'
          });
        }
      else {
        }
      
      const v3867 = v1110;
      const v3868 = v1151;
      const v3869 = v1152;
      const v3870 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v3872 = v1160;
      const v3873 = v1161;
      const v3874 = stdlib.lt(v1152, v1112);
      const v3875 = stdlib.lt(v1151, v1112);
      const v3876 = v3874 ? true : v3875;
      const v3878 = v3876 ? true : true;
      if (v3878) {
        return;
        }
      else {
        const v3879 = true;
        return;
        }
      break;
      }
    case 'Bob_subscribeToNFT0_83': {
      const v1856 = v1268[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_subscribeToNFT7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_subscribeToNFT7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_subscribeToNFT7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_83: ctc9,
    Bob_drawRaffleTicket0_83: ctc10,
    Bob_getNumberOfTicketsAvailable0_83: ctc9,
    Bob_subscribeToNFT0_83: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1170 = ctc.selfAddress();
  const v1172 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)', 'at ./index.rsh:59:19:application call to "runBob_subscribeToNFT0_83" (defined at: ./index.rsh:62:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'in',
    who: 'Bob_subscribeToNFT'
    });
  const v1173 = stdlib.addressEq(v1170, v1110);
  const v1174 = v1173 ? false : true;
  stdlib.assert(v1174, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)', 'at ./index.rsh:59:19:application call to "runBob_subscribeToNFT0_83" (defined at: ./index.rsh:62:12:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
    msg: 'Not deployer',
    who: 'Bob_subscribeToNFT'
    });
  const v1179 = ['Bob_subscribeToNFT0_83', v1172];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1110, v1111, v1112, v1144, v1150, v1151, v1152, v1153, v1160, v1161, v1179],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
      
      switch (v1268[0]) {
        case 'Bob_checkStatus0_83': {
          const v1271 = v1268[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_83': {
          const v1466 = v1268[1];
          
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_83': {
          const v1661 = v1268[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_83': {
          const v1856 = v1268[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_subscribeToNFT"
            });
          ;
          const v2045 = await txn1.getOutput('Bob_subscribeToNFT', 'v1111', ctc5, v1111);
          
          const v4067 = v1110;
          const v4068 = v1151;
          const v4069 = v1152;
          const v4070 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v4072 = v1160;
          const v4073 = v1161;
          const v4074 = stdlib.lt(v1152, v1112);
          const v4075 = stdlib.lt(v1151, v1112);
          const v4076 = v4074 ? true : v4075;
          const v4078 = v4076 ? true : true;
          if (v4078) {
            sim_r.isHalt = false;
            }
          else {
            const v4079 = true;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1268], secs: v1270, time: v1269, didSend: v769, from: v1267 } = txn1;
  switch (v1268[0]) {
    case 'Bob_checkStatus0_83': {
      const v1271 = v1268[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_83': {
      const v1466 = v1268[1];
      return;
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_83': {
      const v1661 = v1268[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_83': {
      const v1856 = v1268[1];
      undefined /* setApiDetails */;
      const v1890 = stdlib.addressEq(v1267, v1110);
      const v1891 = v1890 ? false : true;
      stdlib.assert(v1891, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:63:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)', 'at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
        msg: 'Not deployer',
        who: 'Bob_subscribeToNFT'
        });
      ;
      const v2045 = await txn1.getOutput('Bob_subscribeToNFT', 'v1111', ctc5, v1111);
      if (v769) {
        stdlib.protect(ctc0, await interact.out(v1856, v2045), {
          at: './index.rsh:62:13:application',
          fs: ['at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)', 'at ./index.rsh:66:18:application call to "resolve" (defined at: ./index.rsh:65:30:function exp)', 'at ./index.rsh:65:30:application call to [unknown function] (defined at: ./index.rsh:65:30:function exp)'],
          msg: 'out',
          who: 'Bob_subscribeToNFT'
          });
        }
      else {
        }
      
      const v4067 = v1110;
      const v4068 = v1151;
      const v4069 = v1152;
      const v4070 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v4072 = v1160;
      const v4073 = v1161;
      const v4074 = stdlib.lt(v1152, v1112);
      const v4075 = stdlib.lt(v1151, v1112);
      const v4076 = v4074 ? true : v4075;
      const v4078 = v4076 ? true : true;
      if (v4078) {
        return;
        }
      else {
        const v4079 = true;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bob_checkStatus(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_checkStatus expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_checkStatus expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Bob_checkStatus7(ctcTop, interact);}
  };
export async function Bob_drawRaffleTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_drawRaffleTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_drawRaffleTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Bob_drawRaffleTicket7(ctcTop, interact);}
  };
export async function Bob_getNumberOfTicketsAvailable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getNumberOfTicketsAvailable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getNumberOfTicketsAvailable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Bob_getNumberOfTicketsAvailable7(ctcTop, interact);}
  };
export async function Bob_subscribeToNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_subscribeToNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_subscribeToNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Bob_subscribeToNFT7(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_checkStatus()(byte,byte)`, `Bob_drawRaffleTicket(uint64)byte[0]`, `Bob_getNumberOfTicketsAvailable()uint64`, `Bob_subscribeToNFT()uint64`],
    pure: [],
    sigs: [`Bob_checkStatus()(byte,byte)`, `Bob_drawRaffleTicket(uint64)byte[0]`, `Bob_getNumberOfTicketsAvailable()uint64`, `Bob_subscribeToNFT()uint64`]
    },
  appApproval: `BiAQAAEDAgggBSgECvu18sgJ66/g9w6I/ozlAQYHoI0GJgUBAAABAQIAAAIBACI1ADEYQQb+KWRJIls1ASEEWzUCMRkjEkEACjEAKCEJr2ZCBso2GgAXSUEAaCI1BCM1BkkhCgxAACtJIQsMQAAUIQsSRCk1/4ABAzT/UCEEr1BCAGUhChJENhoBNf8qNP9QQgBVSSEMDEAAFCEMEkQpNf+AAQI0/1AhBK9QQgA6gd6OlHcSRCk1/yg0/1AhBK9QQgAlNhoCFzUENhoDNhoBF0kkDEAD9UkhBgxAA4JJIQ0MQAL+IQ0SRCEONAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSlcAIDX/IQVbNf4hB1s1/YEwWzX8VzggNfuBWFs1+oFgWzX5gWhbNfhXcBE194GBAVs19kk1BTX1gAQUDOYINPVQsDT1IlVJJQxAAG5JJAxAADUkEkQxADT/E0SACAAAAAAAAARXNP4WULA0/hY1BzT/NP40/TT8NP80+jT5JTIGNPc09kIEv0gxADT/E0SACAAAAAAAAARYNP0WULA0/RY1BzT/NP40/TT8NP80+jT5JTIGNPc09kIEjEkjDEAApEg09VcBCDX0MQA0/xNEMQCIBXhXAAlJNfMiVUAABiM18kIABiI18kIAADTyRDTzIlVAAAYjNfFCAAYiNfFCAAA08USACAAAAAAAAAZRsCk1BzEAKDEAiAUyKjT0UDXwVwkBNPBMUGY0+SMISTXwNP0SQQAYNP80/jT9NPw0/zT6NPAkMgY09zT2QgP6NP80/jT9NPw0/zT6NPAlMgY09zT2QgPiSDEANP8TRDEAiATbVwAJSTX0IlVAAAYiNfNCAAYjNfNCAAA080QxAIgEvFcJAUk18iJVQAAGIjXxQgAGIzXxQgAANPEURDT0IlVAAAYiNfBCAAYjNfBCAAA08EQ08iJVQAAGIjXvQgAGIzXvQgAANO8URDT4JRJBACmACgAAAAAAAAUsAACwKzUHNP80/jT9NPw0+zT6NPk0+DIGNPc09kIDPzEAKDEAiAQ8I4EJTFZmNPQiVUAAKIAKAAAAAAAABT0AALArNQc0/zT+NP00/DT7NPo0+SQyBjT3NPZCAwI09CNbNe40+CISQQArgAoAAAAAAAAFTwEAsCcENQc0/zT+NP00/DT7NPojCDT5IjIGNPc09kICyjTuNPwSQQAtgAoAAAAAAAAFYQEBsIACAQE1BzT/NP40/TT8MQA0+iMINPkiMgY09zT2QgKVgAoAAAAAAAAFcgEAsCcENQc0/zT+NP00/DT7NPojCDT5JDIGNPc09kICakghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQVbNf6ABMyZklywNP8xABJEsSKyATQDV0gRVwARIluyEiEIshA0A1coILIUNP6yEbOxIrIBNAOBWVuyCCOyEDT/sgezsSKyASKyEiEIshAyCbIVMgqyFDT+shGzQgKFJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iEEWzX9gASkpfCINP4WUDT9FlCwNP8xABJENANXMCA0/hY0/RZQARJENP80AyEFWzQDIQdbNP00/yIiJTIGNANXUBEiQgGBSSMMQADpSSUMQABhSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hB1s1/VcwIDX8V1ARNfuABEGxQE2wNP8xABJENP80/hZQNP0WUDT8UDT7UChLAVcAYWdIJDUBMgY1AkIByEgjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQdbNf1XMCA1/FdQETX7gASai5F0sDT7VwARSTX6IlsjCBY0+lcICFA0+lcQAVA1+SM0/ogB5jT/MQASRDT/NP4WUDT9FlA0/FA0+VAoSwFXAGFnSCU1ATIGNQJCAUZIIQ+IAaAiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQRbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsIERr0k1/FcAETX7IQSvNPtXCAhQNPtXEAFQNfohD4gBSrEisgEishIhCLIQMgqyFDT/shGzMQA0/xZQNP4WUDT9UDT6UChLAVcAYWdIIzUBMgY1AkIAtDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0+zT3DDT6NPcMETT8JRIRQQA+NPU09hZQNPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZypLAVd/CmdIIQ41ATIGNQJCAE00+TT1EjX0NPU09hZQNPlQNP5QNP8WUDT0FlEHCFAoSwFXAGJnSCEGNQEyBjUCQgAcMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQmviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQgSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 2,
  stateSize: 137,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1111",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1112",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1113",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1111",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1112",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1113",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_checkStatus0_83",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Bob_drawRaffleTicket0_83",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getNumberOfTicketsAvailable0_83",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_subscribeToNFT0_83",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1268",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1111",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1112",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1324",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1341",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1359",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1377",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1394",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1617",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_checkStatus",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_drawRaffleTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_getNumberOfTicketsAvailable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_subscribeToNFT",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_checkStatus0_83",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Bob_drawRaffleTicket0_83",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getNumberOfTicketsAvailable0_83",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_subscribeToNFT0_83",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1268",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620032cc380380620032cc83398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b612cf880620005d46000396000f3fe6080604052600436106100d55760003560e01c80638e31476911610079578063ad2d91d111610056578063ad2d91d1146101fa578063adde787e1461020d578063cadc2e7a14610230578063dda92e7b1461025d57005b80638e314769146101a4578063a1d6acfb146101b7578063ab53f2c6146101d757005b80633bc5b7bf116100b25780633bc5b7bf1461013c5780636cf90080146101695780637eea518c1461017c578063832307571461018f57005b80631e93b0f1146100de57806325361b3e146101025780632c10a1591461012957005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b61010a610265565b60408051825115158152602092830151151592810192909252016100f9565b6100dc6101373660046123a8565b6102a4565b34801561014857600080fd5b5061015c6101573660046123d5565b6102c8565b6040516100f99190612418565b6100dc610177366004612448565b6102df565b6100dc61018a3660046123a8565b6102ff565b34801561019b57600080fd5b506001546100ef565b6100dc6101b23660046123a8565b61031f565b6101bf61033f565b6040516001600160a01b0390911681526020016100f9565b3480156101e357600080fd5b506101ec61036f565b6040516100f9929190612486565b6100dc6102083660046124c0565b61040c565b61022061021b3660046124d2565b61042c565b60405190151581526020016100f9565b34801561023c57600080fd5b5061025061024b3660046123d5565b610467565b6040516100f991906124eb565b6100ef610478565b6040805180820190915260008082526020820152610281611f7c565b60208101515160009052610293611f9b565b61029d82826104a8565b5192915050565b6102ac611f9b565b6102c46102be36849003840184612602565b8261120e565b5050565b6102d0611fd5565b6102d982611432565b92915050565b6102e7611f9b565b6102c46102f936849003840184612658565b826104a8565b610307611f9b565b6102c461031936849003840184612602565b826114f0565b610327611f9b565b6102c461033936849003840184612602565b826116a0565b6000610349611f7c565b6020810151516003905261035b611f9b565b61036582826104a8565b6060015192915050565b6000606060005460028080546103849061271c565b80601f01602080910402602001604051908101604052809291908181526020018280546103b09061271c565b80156103fd5780601f106103d2576101008083540402835291602001916103fd565b820191906000526020600020905b8154815290600101906020018083116103e057829003601f168201915b50505050509050915091509091565b610414611f9b565b6102c461042636849003840184612751565b82611855565b6000610436611f7c565b6020810180515160019052515160400151839052610452611f9b565b61045c82826104a8565b602001519392505050565b61046f611fd5565b6102d982611a73565b6000610482611f7c565b60208101515160029052610494611f9b565b61049e82826104a8565b6040015192915050565b6104b86007600054146028611b27565b81516104d39015806104cc57508251600154145b6029611b27565b6000808055600280546104e59061271c565b80601f01602080910402602001604051908101604052809291908181526020018280546105119061271c565b801561055e5780601f106105335761010080835404028352916020019161055e565b820191906000526020600020905b81548152906001019060200180831161054157829003601f168201915b5050505050806020019051810190610576919061283f565b9050610580611ff8565b7ffccd0bccaa8107f531383c647cefe1c1a05fb130354a290a07a556cdef3b5b7d33856040516105b19291906128e0565b60405180910390a160006020850151515160038111156105d3576105d36123f2565b1415610d2f5781516105ff906001600160a01b031633146105f55760016105f8565b60005b601a611b27565b61060833611432565b815260008151516001811115610620576106206123f2565b14156106325760006020820152610656565b60018151516001811115610648576106486123f2565b141561065657600160208201525b6106658160200151601b611b27565b61066e33611a73565b6040820181905251600090600181111561068a5761068a6123f2565b141561069c57600060608201526106c3565b600160408201515160018111156106b5576106b56123f2565b14156106c357600160608201525b6106e081606001516106d65760016106d9565b60005b601c611b27565b6106ec3415601d611b27565b60008151516001811115610702576107026123f2565b14156107145760006080820152610738565b6001815151600181111561072a5761072a6123f2565b141561073857600160808201525b6107478160800151601e611b27565b60006040820151516001811115610760576107606123f2565b141561077257600060a0820152610799565b6001604082015151600181111561078b5761078b6123f2565b141561079957600160a08201525b6107b68160a001516107ac5760016107af565b60005b601f611b27565b60028260e0015114156108d25760c081018051600090819052815160200152516040517f841cbd313274d7cd4ecd75dc95384bb62528a75fdf040e5b9566ae706f4ce01a9161081a9181511515815260209182015115159181019190915260400190565b60405180910390a160c081015183526108316120c9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151848701805191909616905260a08089015186519095019490945260c08089015186519094019390935260e0880151855190920191909152835143910152610100860151835190920191909152610120850151915101526108cc81611b4d565b50611208565b336000908152600560205260408120805462ff00ff1916600190811790915582515190811115610904576109046123f2565b1415610a0f5760e081018051600090819052815160200152516040517f382b22e28f3149cd4a7dc9e420277fc065a0535b2063e30b07e9265c618582dc916109619181511515815260209182015115159181019190915260400190565b60405180910390a160e081015183526109786120c9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151848701805191909616905260a08089015186519095019490945260c08089015186519094019390935284516003920191909152835143910152610100860151835190920191909152610120850151915101526108cc81611b4d565b60018151516001811115610a2557610a256123f2565b1415610d2a5780516040015161010082015260e0820151610b4c57610120810180516001905280516000602091820152905160408051825115158152918301511515928201929092527fa6982de73bc6167ddd4cb20721a8cc4a51cb32b968ee2da0fd6618d2857530ed910160405180910390a16101208101518352610aa96120c9565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451909101526080850151908301519116905260a0830151610aff90600190612967565b602080830180519091019190915260c0808501518251604001528151600060609091015281514360809190910152610100850151825160a00152610120850151915101526108cc81611b4d565b81606001518161010001511415610c1e5761014081018051600190819052815160200152516040517ff095ccf3fb083aa96431dbbbed777ae1604031a5fa4b1e755a772e564ff9cfbe91610bb59181511515815260209182015115159181019190915260400190565b60405180910390a16101408101518352610bcd6120c9565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015281015133905260a0830151610aff90600190612967565b610160810180516001905280516000602091820152905160408051825115158152918301511515928201929092527f3c6d7b6fe06419c9908f14b18404ab5e1e42c6ea018246b9887cfdf6e3cd80b5910160405180910390a16101608101518352610c876120c9565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451909101526080850151908301519116905260a0830151610cdd90600190612967565b602080830180519091019190915260c0808501518251604001528151600360609091015281514360809190910152610100850151825160a00152610120850151915101526108cc81611b4d565b611208565b6001602085015151516003811115610d4957610d496123f2565b141561102557602084015151604001516101808201528151610d85906001600160a01b03163314610d7b576001610d7e565b60005b6020611b27565b610d8e33611432565b6101a08201819052516000906001811115610dab57610dab6123f2565b1415610dbe5760016101c0820152610de7565b60016101a0820151516001811115610dd857610dd86123f2565b1415610de75760006101c08201525b610df7816101c001516021611b27565b610e0334156022611b27565b60006101a0820151516001811115610e1d57610e1d6123f2565b1415610e305760016101e0820152610e59565b60016101a0820151516001811115610e4a57610e4a6123f2565b1415610e595760006101e08201525b610e69816101e001516023611b27565b604051600081527f23a5b50010b78742a5db0ca939fd966c09769c9567ae7fb6121ad1d354f9a4aa9060200160405180910390a1600060208481018290523382526004905260409020805460ff191660019081178255610180830151519181019190915560c0830151610edc9190612967565b610200820181905260408301511415610f8a57610ef76120c9565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015185518201528651838601805191909516905260a0808801518551909401939093526102008601518451909201919091528251600391015281514360809190910152610100850151825190910152610120840151905160c001526108cc81611b4d565b610f926120c9565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015185518201528651838601805191909516905260a0808801518551909401939093526102008601518451909201919091528251600291015281514360809190910152610100850151825190910152610120840151905160c001526108cc81611b4d565b600260208501515151600381111561103f5761103f6123f2565b141561115a57815161106b906001600160a01b03163314611061576001611064565b60005b6024611b27565b61107734156025611b27565b7f051b3c1aed7f4f37608dec0497dccbad9493725c0e2a479016f33e2997fc52f682604001516040516110ac91815260200190565b60405180910390a1604080830151908401526110c66120c9565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015185518201528651838601805191909516905260a08088015185519094019390935260c0808801518551909301929092528351600291015282514360809190910152610100860151835190920191909152610120850151915101526108cc81611b4d565b6003602085015151516003811115611174576111746123f2565b14156112085781516111a0906001600160a01b03163314611196576001611199565b60005b6026611b27565b6111ac34156027611b27565b6020808301516040516001600160a01b0390911681527fa2aee829ab4d8409791fd5d567c247d140f68330c5d8658773a672e8243decad910160405180910390a160208201516001600160a01b031660608401526110c66120c9565b50505050565b61121e600160005414600b611b27565b815161123990158061123257508251600154145b600c611b27565b60008080556002805461124b9061271c565b80601f01602080910402602001604051908101604052809291908181526020018280546112779061271c565b80156112c45780601f10611299576101008083540402835291602001916112c4565b820191906000526020600020905b8154815290600101906020018083116112a757829003601f168201915b50505050508060200190518101906112dc91906129e9565b90506112e6612100565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051611317929190612a05565b60405180910390a161132b34156008611b27565b6080820151515161133e90600190612967565b8151526080820180515160209081015183519091015280515160409081015183519015159101525181516113759190600090611cf6565b81602001819052506113976113903384602001516001611d6a565b6009611b27565b81516113af906001600160a01b03163314600a611b27565b6113b7612130565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152606080860151908401528382015160808401526002600055436001555161140691839101612a81565b6040516020818303038152906040526002908051906020019061142a929190612171565b505050505050565b61143a611fd5565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611469576114696123f2565b14156114e0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156114aa576114aa6123f2565b60018111156114bb576114bb6123f2565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b611500600260005414600f611b27565b815161151b90158061151457508251600154145b6010611b27565b60008080556002805461152d9061271c565b80601f01602080910402602001604051908101604052809291908181526020018280546115599061271c565b80156115a65780601f1061157b576101008083540402835291602001916115a6565b820191906000526020600020905b81548152906001019060200180831161158957829003601f168201915b50505050508060200190518101906115be91906129e9565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033846040516115f1929190612a05565b60405180910390a16116053415600d611b27565b805161161d906001600160a01b03163314600e611b27565b611625612130565b81516001600160a01b039081168252602080840151909116818301526040808401518184015260608085015190840152608080850151908401526003600055436001555161167591839101612a81565b60405160208183030381529060405260029080519060200190611699929190612171565b5050505050565b6116b06005600054146018611b27565b81516116cb9015806116c457508251600154145b6019611b27565b6000808055600280546116dd9061271c565b80601f01602080910402602001604051908101604052809291908181526020018280546117099061271c565b80156117565780601f1061172b57610100808354040283529160200191611756565b820191906000526020600020905b81548152906001019060200180831161173957829003601f168201915b505050505080602001905181019061176e9190612acf565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33846040516117a1929190612a05565b60405180910390a16117b534156016611b27565b80516117cd906001600160a01b031633146017611b27565b6117fc8160200151826040015183606001516000600181106117f1576117f1612a2d565b602002015151611d82565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611839573d6000803e3d6000fd5b5060008080556001819055611850906002906121f5565b505050565b6118656003600054146014611b27565b815161188090158061187957508251600154145b6015611b27565b6000808055600280546118929061271c565b80601f01602080910402602001604051908101604052809291908181526020018280546118be9061271c565b801561190b5780601f106118e05761010080835404028352916020019161190b565b820191906000526020600020905b8154815290600101906020018083116118ee57829003601f168201915b505050505080602001905181019061192391906129e9565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a161198234156011611b27565b805161199a906001600160a01b031633146012611b27565b6020808401518051908201516040516119e8936119c293929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013611b27565b6119f06120c9565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015286820151820151845160609081019190915285518386018051919095169052835160009301839052835190910182905282516002910152815143608091820152840151825160a00152905160c0015261120881611b4d565b611a7b611fd5565b60016001600160a01b03831660009081526005602052604090205460ff166001811115611aaa57611aaa6123f2565b14156114e0576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611aeb57611aeb6123f2565b6001811115611afc57611afc6123f2565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b816102c45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60408051602081019091526000815281600001516040015182602001516040015110611b8757815160400151602080840151015110611b8a565b60015b611b9f57600282602001516060015114611ba2565b60015b15611c6b57611baf612232565b8251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528551606090810151818601528287018051519094166080860152835183015160a080870191909152845183015160c08088019190915285519092015160e0870152845101516101008601529251909201516101208401526007600055436001559051611c4791839101612b71565b60405160208183030381529060405260029080519060200190611208929190612171565b8151516020830151516001600160a01b039081169116148152611c8c6122a6565b8251516001600160a01b0390811682528351602090810151821681840152808501805151909216604080850191909152825160a0908101516060860152925160c00151608085015284511515928401929092526005600055436001559051611c4791839101612c12565b611cfe6122cb565b60005b6001811015611d4a57848160018110611d1c57611d1c612a2d565b6020020151828260018110611d3357611d33612a2d565b602002015280611d4281612c6e565b915050611d01565b5081818460018110611d5e57611d5e612a2d565b60200201529392505050565b6000611d7883853085611d96565b90505b9392505050565b611d8d838383611e70565b61185057600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611dfd91612c89565b60006040518083038185875af1925050503d8060008114611e3a576040519150601f19603f3d011682016040523d82523d6000602084013e611e3f565b606091505b5091509150611e5082826001611f41565b5080806020019051810190611e659190612ca5565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611ecf91612c89565b60006040518083038185875af1925050503d8060008114611f0c576040519150601f19603f3d011682016040523d82523d6000602084013e611f11565b606091505b5091509150611f2282826002611f41565b5080806020019051810190611f379190612ca5565b9695505050505050565b60608315611f50575081611d7b565b825115611f605782518084602001fd5b60405163100960cb60e01b815260048101839052602401611b44565b604051806040016040528060008152602001611f96612316565b905290565b6040805160c0810190915260006080820181815260a083019190915281905b81526000602082018190526040820181905260609091015290565b60408051606081019091528060005b815260006020820181905260409091015290565b60405180610220016040528061200c611fd5565b815260006020820152604001612020611fd5565b8152600060208083018290526040808401839052606084018390528051808201825283815280830184905260808501528051808201825283815280830184905260a085015260c084018390528051808201825283815280830184905260e085015280518082018252838152808301849052610100850152805180820182528381528083018490526101208501528051918201905290815261014082015261016001611fba611fd5565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611f96612329565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611f966122cb565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611f966122cb565b82805461217d9061271c565b90600052602060002090601f01602090048101928261219f57600085556121e5565b82601f106121b857805160ff19168380011785556121e5565b828001600101855582156121e5579182015b828111156121e55782518255916020019190600101906121ca565b506121f1929150612368565b5090565b5080546122019061271c565b6000825580601f10612211575050565b601f01602090049060005260206000209081019061222f9190612368565b50565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016122996122cb565b8152602001600081525090565b6040805160c0810182526000808252602082018190529181019190915260608101611fe45b60405180602001604052806001905b612300604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816122da5790505090565b6040518060200160405280611f9661237d565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016122996122cb565b5b808211156121f15760008155600101612369565b6040805160a08101825260008082526020808301829052835190810184529081529091820190611fe4565b6000604082840312156123ba57600080fd5b50919050565b6001600160a01b038116811461222f57600080fd5b6000602082840312156123e757600080fd5b8135611d7b816123c0565b634e487b7160e01b600052602160045260246000fd5b6002811061222f5761222f6123f2565b8151606082019061242881612408565b808352506020830151151560208301526040830151604083015292915050565b600060c082840312156123ba57600080fd5b60005b8381101561247557818101518382015260200161245d565b838111156112085750506000910152565b82815260406020820152600082518060408401526124ab81606085016020870161245a565b601f01601f1916919091016060019392505050565b6000606082840312156123ba57600080fd5b6000602082840312156124e457600080fd5b5035919050565b815160608201906124fb81612408565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156125565761255661251d565b60405290565b6040516020810167ffffffffffffffff811182821017156125565761255661251d565b60405160a0810167ffffffffffffffff811182821017156125565761255661251d565b6040516060810167ffffffffffffffff811182821017156125565761255661251d565b604051610140810167ffffffffffffffff811182821017156125565761255661251d565b801515811461222f57600080fd5b80356114eb816125e9565b60006040828403121561261457600080fd5b6040516040810181811067ffffffffffffffff821117156126375761263761251d565b60405282358152602083013561264c816125e9565b60208201529392505050565b600081830360c081121561266b57600080fd5b612673612533565b8335815260a0601f198301121561268957600080fd5b61269161255c565b61269961257f565b6020860135600481106126ab57600080fd5b815260408601356126bb816125e9565b806020830152506020605f19850112156126d457600080fd5b6126dc61255c565b9350606086013584528360408201526126f7608087016125f7565b606082015261270860a087016125f7565b608082015281526020820152949350505050565b600181811c9082168061273057607f821691505b602082108114156123ba57634e487b7160e01b600052602260045260246000fd5b6000818303606081121561276457600080fd5b61276c612533565b833581526040601f198301121561278257600080fd5b61278a612533565b60208581013582526040909501358582015293810193909352509092915050565b80516114eb816123c0565b600082601f8301126127c757600080fd5b6127cf61255c565b806060808501868111156127e257600080fd5b855b81811015612833578281890312156127fc5760008081fd5b6128046125a2565b8151815260208083015181830152604080840151612821816125e9565b908301529086529094019382016127e4565b50919695505050505050565b6000610180828403121561285257600080fd5b61285a6125c5565b612863836127ab565b8152612871602084016127ab565b60208201526040830151604082015260608301516060820152612896608084016127ab565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006128c8858286016127b6565b90820152610160929092015161012083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160e08301919060048110612913576129136123f2565b8060408501525060208101511515606084015260408101515160808401526060810151151560a08401526080810151151560c0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561297a5761297a612951565b500190565b600060e0828403121561299157600080fd5b61299961257f565b905081516129a6816123c0565b815260208201516129b6816123c0565b8060208301525060408201516040820152606082015160608201526129de83608084016127b6565b608082015292915050565b600060e082840312156129fb57600080fd5b611d7b838361297f565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b6001811015611208578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612a47565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e0830191612ac890840182612a43565b5092915050565b60006101008284031215612ae257600080fd5b60405160c0810181811067ffffffffffffffff82111715612b0557612b0561251d565b6040528251612b13816123c0565b81526020830151612b23816123c0565b60208201526040830151612b36816123c0565b6040820152612b4884606085016127b6565b606082015260c0830151608082015260e0830151612b65816125e9565b60a08201529392505050565b81516001600160a01b0316815261018081016020830151612b9d60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151612bcc60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151612bfe82850182612a43565b505061012083015161016083015292915050565b81516001600160a01b03908116825260208084015182169083015260408084015190911690820152606080830151610100830191612c5290840182612a43565b50608083015160c083015260a090920151151560e09091015290565b6000600019821415612c8257612c82612951565b5060010190565b60008251612c9b81846020870161245a565b9190910192915050565b600060208284031215612cb757600080fd5b8151611d7b816125e956fea2646970667358221220c18d1a1a07017ec7ac023bff3b97ed006b0bb72a27f65974b80c7dfdd1599fee64736f6c634300080c0033`,
  BytecodeLen: 13004,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:135:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:152:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:59:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_checkStatus": Bob_checkStatus,
  "Bob_drawRaffleTicket": Bob_drawRaffleTicket,
  "Bob_getNumberOfTicketsAvailable": Bob_getNumberOfTicketsAvailable,
  "Bob_subscribeToNFT": Bob_subscribeToNFT
  };
export const _APIs = {
  Bob: {
    checkStatus: Bob_checkStatus,
    drawRaffleTicket: Bob_drawRaffleTicket,
    getNumberOfTicketsAvailable: Bob_getNumberOfTicketsAvailable,
    subscribeToNFT: Bob_subscribeToNFT
    }
  };
