import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee, } from './tx';
export const registry = [
    ['/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn', MsgSwapExactAmountIn],
    ['/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut', MsgSwapExactAmountOut],
    [
        '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
        MsgSplitRouteSwapExactAmountIn,
    ],
    [
        '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
        MsgSplitRouteSwapExactAmountOut,
    ],
    [
        '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
        MsgSetDenomPairTakerFee,
    ],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        swapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
                value: MsgSwapExactAmountIn.encode(value).finish(),
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
                value: MsgSwapExactAmountOut.encode(value).finish(),
            };
        },
        splitRouteSwapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
                value: MsgSplitRouteSwapExactAmountIn.encode(value).finish(),
            };
        },
        splitRouteSwapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
                value: MsgSplitRouteSwapExactAmountOut.encode(value).finish(),
            };
        },
        setDenomPairTakerFee(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
                value: MsgSetDenomPairTakerFee.encode(value).finish(),
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
                value: MsgSwapExactAmountIn.fromPartial(value),
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
                value: MsgSwapExactAmountOut.fromPartial(value),
            };
        },
        splitRouteSwapExactAmountIn(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
                value: MsgSplitRouteSwapExactAmountIn.fromPartial(value),
            };
        },
        splitRouteSwapExactAmountOut(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
                value: MsgSplitRouteSwapExactAmountOut.fromPartial(value),
            };
        },
        setDenomPairTakerFee(value) {
            return {
                typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
                value: MsgSetDenomPairTakerFee.fromPartial(value),
            };
        },
    },
};
