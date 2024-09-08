"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.market.v1beta1.MsgSwap', tx_1.MsgSwap],
    ['/osmosis.market.v1beta1.MsgSwapSend', tx_1.MsgSwapSend],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        swap(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwap',
                value: tx_1.MsgSwap.encode(value).finish(),
            };
        },
        swapSend(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
                value: tx_1.MsgSwapSend.encode(value).finish(),
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
                value: tx_1.MsgSwap.fromPartial(value),
            };
        },
        swapSend(value) {
            return {
                typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
                value: tx_1.MsgSwapSend.fromPartial(value),
            };
        },
    },
};
