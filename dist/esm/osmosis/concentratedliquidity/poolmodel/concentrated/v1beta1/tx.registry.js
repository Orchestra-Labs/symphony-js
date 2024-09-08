import { MsgCreateConcentratedPool } from './tx';
export const registry = [
    [
        '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
        MsgCreateConcentratedPool,
    ],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createConcentratedPool(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
                value: MsgCreateConcentratedPool.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        createConcentratedPool(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
                value,
            };
        },
    },
    fromPartial: {
        createConcentratedPool(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
                value: MsgCreateConcentratedPool.fromPartial(value),
            };
        },
    },
};
