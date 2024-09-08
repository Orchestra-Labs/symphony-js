"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.bridge.v1beta1.MsgInboundTransfer': {
        aminoType: 'osmosis/bridge/inbound-transfer',
        toAmino: tx_1.MsgInboundTransfer.toAmino,
        fromAmino: tx_1.MsgInboundTransfer.fromAmino,
    },
    '/osmosis.bridge.v1beta1.MsgOutboundTransfer': {
        aminoType: 'osmosis/bridge/outbound-transfer',
        toAmino: tx_1.MsgOutboundTransfer.toAmino,
        fromAmino: tx_1.MsgOutboundTransfer.fromAmino,
    },
    '/osmosis.bridge.v1beta1.MsgUpdateParams': {
        aminoType: 'osmosis/bridge/update-params',
        toAmino: tx_1.MsgUpdateParams.toAmino,
        fromAmino: tx_1.MsgUpdateParams.fromAmino,
    },
    '/osmosis.bridge.v1beta1.MsgChangeAssetStatus': {
        aminoType: 'osmosis/bridge/change-asset-status',
        toAmino: tx_1.MsgChangeAssetStatus.toAmino,
        fromAmino: tx_1.MsgChangeAssetStatus.fromAmino,
    },
};
