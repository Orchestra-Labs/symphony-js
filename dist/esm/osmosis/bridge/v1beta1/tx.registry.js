import { MsgInboundTransfer, MsgOutboundTransfer, MsgUpdateParams, MsgChangeAssetStatus, } from './tx';
export const registry = [
    ['/osmosis.bridge.v1beta1.MsgInboundTransfer', MsgInboundTransfer],
    ['/osmosis.bridge.v1beta1.MsgOutboundTransfer', MsgOutboundTransfer],
    ['/osmosis.bridge.v1beta1.MsgUpdateParams', MsgUpdateParams],
    ['/osmosis.bridge.v1beta1.MsgChangeAssetStatus', MsgChangeAssetStatus],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        inboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
                value: MsgInboundTransfer.encode(value).finish(),
            };
        },
        outboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
                value: MsgOutboundTransfer.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
                value: MsgUpdateParams.encode(value).finish(),
            };
        },
        changeAssetStatus(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
                value: MsgChangeAssetStatus.encode(value).finish(),
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
                value: MsgInboundTransfer.fromPartial(value),
            };
        },
        outboundTransfer(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
                value: MsgOutboundTransfer.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
                value: MsgUpdateParams.fromPartial(value),
            };
        },
        changeAssetStatus(value) {
            return {
                typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
                value: MsgChangeAssetStatus.fromPartial(value),
            };
        },
    },
};
