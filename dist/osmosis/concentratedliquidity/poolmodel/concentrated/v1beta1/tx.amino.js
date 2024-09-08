"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool': {
        aminoType: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool',
        toAmino: tx_1.MsgCreateConcentratedPool.toAmino,
        fromAmino: tx_1.MsgCreateConcentratedPool.fromAmino,
    },
};
