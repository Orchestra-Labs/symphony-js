"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.market.v1beta1.MsgSwap': {
        aminoType: 'osmosis/market/swap',
        toAmino: tx_1.MsgSwap.toAmino,
        fromAmino: tx_1.MsgSwap.fromAmino,
    },
    '/osmosis.market.v1beta1.MsgSwapSend': {
        aminoType: 'osmosis/market/swap-send',
        toAmino: tx_1.MsgSwapSend.toAmino,
        fromAmino: tx_1.MsgSwapSend.fromAmino,
    },
};
