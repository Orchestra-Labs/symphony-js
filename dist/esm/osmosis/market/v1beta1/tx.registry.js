import { MsgSwap, MsgSwapSend } from './tx';
export const registry = [
    ['/osmosis.market.v1beta1.MsgSwap', MsgSwap],
    ['/osmosis.market.v1beta1.MsgSwapSend', MsgSwapSend],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        swap(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwap',
                value: MsgSwap.encode(value).finish(),
            };
        },
        swapSend(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
                value: MsgSwapSend.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        swap(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwap',
                value,
            };
        },
        swapSend(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
                value,
            };
        },
    },
    fromPartial: {
        swap(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwap',
                value: MsgSwap.fromPartial(value),
            };
        },
        swapSend(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
                value: MsgSwapSend.fromPartial(value),
            };
        },
    },
};
