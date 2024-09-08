"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn', tx_1.MsgSwapExactAmountIn],
    ['/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut', tx_1.MsgSwapExactAmountOut],
    [
        '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
        tx_1.MsgSplitRouteSwapExactAmountIn,
    ],
    [
        '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
        tx_1.MsgSplitRouteSwapExactAmountOut,
    ],
    [
        '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
        tx_1.MsgSetDenomPairTakerFee,
    ],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        swapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
                value: tx_1.MsgSwapExactAmountIn.encode(value).finish(),
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
                value: tx_1.MsgSwapExactAmountOut.encode(value).finish(),
            };
        },
        splitRouteSwapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
                value: tx_1.MsgSplitRouteSwapExactAmountIn.encode(value).finish(),
            };
        },
        splitRouteSwapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
                value: tx_1.MsgSplitRouteSwapExactAmountOut.encode(value).finish(),
            };
        },
        setDenomPairTakerFee(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
                value: tx_1.MsgSetDenomPairTakerFee.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        swapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
                value,
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
                value,
            };
        },
        splitRouteSwapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
                value,
            };
        },
        splitRouteSwapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
                value,
            };
        },
        setDenomPairTakerFee(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
                value,
            };
        },
    },
    fromPartial: {
        swapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
                value: tx_1.MsgSwapExactAmountIn.fromPartial(value),
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
                value: tx_1.MsgSwapExactAmountOut.fromPartial(value),
            };
        },
        splitRouteSwapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
                value: tx_1.MsgSplitRouteSwapExactAmountIn.fromPartial(value),
            };
        },
        splitRouteSwapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
                value: tx_1.MsgSplitRouteSwapExactAmountOut.fromPartial(value),
            };
        },
        setDenomPairTakerFee(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
                value: tx_1.MsgSetDenomPairTakerFee.fromPartial(value),
            };
        },
    },
};
