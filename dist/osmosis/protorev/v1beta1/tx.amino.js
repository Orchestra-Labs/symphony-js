"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.protorev.v1beta1.MsgSetHotRoutes': {
        aminoType: 'osmosis/MsgSetHotRoutes',
        toAmino: tx_1.MsgSetHotRoutes.toAmino,
        fromAmino: tx_1.MsgSetHotRoutes.fromAmino,
    },
    '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount': {
        aminoType: 'osmosis/MsgSetDeveloperAccount',
        toAmino: tx_1.MsgSetDeveloperAccount.toAmino,
        fromAmino: tx_1.MsgSetDeveloperAccount.fromAmino,
    },
    '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx': {
        aminoType: 'osmosis/MsgSetMaxPoolPointsPerTx',
        toAmino: tx_1.MsgSetMaxPoolPointsPerTx.toAmino,
        fromAmino: tx_1.MsgSetMaxPoolPointsPerTx.fromAmino,
    },
    '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock': {
        aminoType: 'osmosis/MsgSetPoolWeights',
        toAmino: tx_1.MsgSetMaxPoolPointsPerBlock.toAmino,
        fromAmino: tx_1.MsgSetMaxPoolPointsPerBlock.fromAmino,
    },
    '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType': {
        aminoType: 'osmosis/MsgSetInfoByPoolType',
        toAmino: tx_1.MsgSetInfoByPoolType.toAmino,
        fromAmino: tx_1.MsgSetInfoByPoolType.fromAmino,
    },
    '/osmosis.protorev.v1beta1.MsgSetBaseDenoms': {
        aminoType: 'osmosis/MsgSetBaseDenoms',
        toAmino: tx_1.MsgSetBaseDenoms.toAmino,
        fromAmino: tx_1.MsgSetBaseDenoms.fromAmino,
    },
};
