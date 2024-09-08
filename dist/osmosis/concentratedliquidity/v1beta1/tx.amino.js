"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition': {
        aminoType: 'osmosis/cl-create-position',
        toAmino: tx_1.MsgCreatePosition.toAmino,
        fromAmino: tx_1.MsgCreatePosition.fromAmino,
    },
    '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition': {
        aminoType: 'osmosis/cl-withdraw-position',
        toAmino: tx_1.MsgWithdrawPosition.toAmino,
        fromAmino: tx_1.MsgWithdrawPosition.fromAmino,
    },
    '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition': {
        aminoType: 'osmosis/cl-add-to-position',
        toAmino: tx_1.MsgAddToPosition.toAmino,
        fromAmino: tx_1.MsgAddToPosition.fromAmino,
    },
    '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards': {
        aminoType: 'osmosis/cl-col-sp-rewards',
        toAmino: tx_1.MsgCollectSpreadRewards.toAmino,
        fromAmino: tx_1.MsgCollectSpreadRewards.fromAmino,
    },
    '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives': {
        aminoType: 'osmosis/cl-collect-incentives',
        toAmino: tx_1.MsgCollectIncentives.toAmino,
        fromAmino: tx_1.MsgCollectIncentives.fromAmino,
    },
    '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions': {
        aminoType: 'osmosis/cl-transfer-positions',
        toAmino: tx_1.MsgTransferPositions.toAmino,
        fromAmino: tx_1.MsgTransferPositions.fromAmino,
    },
};
