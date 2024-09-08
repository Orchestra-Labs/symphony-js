import { MsgCreateGauge, MsgAddToGauge, MsgCreateGroup } from './tx';
export const registry = [
    ['/osmosis.incentives.MsgCreateGauge', MsgCreateGauge],
    ['/osmosis.incentives.MsgAddToGauge', MsgAddToGauge],
    ['/osmosis.incentives.MsgCreateGroup', MsgCreateGroup],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGauge',
                value: MsgCreateGauge.encode(value).finish(),
            };
        },
        addToGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgAddToGauge',
                value: MsgAddToGauge.encode(value).finish(),
            };
        },
        createGroup(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGroup',
                value: MsgCreateGroup.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        createGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGauge',
                value,
            };
        },
        addToGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgAddToGauge',
                value,
            };
        },
        createGroup(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGroup',
                value,
            };
        },
    },
    fromPartial: {
        createGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGauge',
                value: MsgCreateGauge.fromPartial(value),
            };
        },
        addToGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgAddToGauge',
                value: MsgAddToGauge.fromPartial(value),
            };
        },
        createGroup(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGroup',
                value: MsgCreateGroup.fromPartial(value),
            };
        },
    },
};
