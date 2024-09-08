"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.bridge.v1beta1.MsgInboundTransfer', tx_1.MsgInboundTransfer],
    ['/osmosis.bridge.v1beta1.MsgOutboundTransfer', tx_1.MsgOutboundTransfer],
    ['/osmosis.bridge.v1beta1.MsgUpdateParams', tx_1.MsgUpdateParams],
    ['/osmosis.bridge.v1beta1.MsgChangeAssetStatus', tx_1.MsgChangeAssetStatus],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        inboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
                value: tx_1.MsgInboundTransfer.encode(value).finish(),
            };
        },
        outboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
                value: tx_1.MsgOutboundTransfer.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
                value: tx_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        changeAssetStatus(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
                value: tx_1.MsgChangeAssetStatus.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        inboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
                value,
            };
        },
        outboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
                value,
            };
        },
        changeAssetStatus(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
                value,
            };
        },
    },
    fromPartial: {
        inboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
                value: tx_1.MsgInboundTransfer.fromPartial(value),
            };
        },
        outboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
                value: tx_1.MsgOutboundTransfer.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
                value: tx_1.MsgUpdateParams.fromPartial(value),
            };
        },
        changeAssetStatus(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
                value: tx_1.MsgChangeAssetStatus.fromPartial(value),
            };
        },
    },
};
