import { MsgEmitIBCAck } from './tx';
export const registry = [
    ['/osmosis.ibchooks.MsgEmitIBCAck', MsgEmitIBCAck],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        emitIBCAck(value) {
            return {
                typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
                value: MsgEmitIBCAck.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        emitIBCAck(value) {
            return {
                typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
                value,
            };
        },
    },
    fromPartial: {
        emitIBCAck(value) {
            return {
                typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
                value: MsgEmitIBCAck.fromPartial(value),
            };
        },
    },
};
