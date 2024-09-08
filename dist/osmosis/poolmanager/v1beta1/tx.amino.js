"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn': {
        aminoType: 'osmosis/poolmanager/swap-exact-amount-in',
        toAmino: tx_1.MsgSwapExactAmountIn.toAmino,
        fromAmino: tx_1.MsgSwapExactAmountIn.fromAmino,
    },
    '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut': {
        aminoType: 'osmosis/poolmanager/swap-exact-amount-out',
        toAmino: tx_1.MsgSwapExactAmountOut.toAmino,
        fromAmino: tx_1.MsgSwapExactAmountOut.fromAmino,
    },
    '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn': {
        aminoType: 'osmosis/poolmanager/split-amount-in',
        toAmino: tx_1.MsgSplitRouteSwapExactAmountIn.toAmino,
        fromAmino: tx_1.MsgSplitRouteSwapExactAmountIn.fromAmino,
    },
    '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut': {
        aminoType: 'osmosis/poolmanager/split-amount-out',
        toAmino: tx_1.MsgSplitRouteSwapExactAmountOut.toAmino,
        fromAmino: tx_1.MsgSplitRouteSwapExactAmountOut.fromAmino,
    },
    '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee': {
        aminoType: 'osmosis/poolmanager/set-denom-pair-taker-fee',
        toAmino: tx_1.MsgSetDenomPairTakerFee.toAmino,
        fromAmino: tx_1.MsgSetDenomPairTakerFee.fromAmino,
    },
};
