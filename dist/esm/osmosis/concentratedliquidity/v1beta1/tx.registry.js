import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives, MsgTransferPositions, } from './tx';
export const registry = [
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
        MsgCreatePosition,
    ],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
        MsgWithdrawPosition,
    ],
    ['/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition', MsgAddToPosition],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
        MsgCollectSpreadRewards,
    ],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
        MsgCollectIncentives,
    ],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
        MsgTransferPositions,
    ],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
                value: MsgCreatePosition.encode(value).finish(),
            };
        },
        withdrawPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
                value: MsgWithdrawPosition.encode(value).finish(),
            };
        },
        addToPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
                value: MsgAddToPosition.encode(value).finish(),
            };
        },
        collectSpreadRewards(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
                value: MsgCollectSpreadRewards.encode(value).finish(),
            };
        },
        collectIncentives(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
                value: MsgCollectIncentives.encode(value).finish(),
            };
        },
        transferPositions(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
                value: MsgTransferPositions.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        createPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
                value,
            };
        },
        withdrawPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
                value,
            };
        },
        addToPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
                value,
            };
        },
        collectSpreadRewards(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
                value,
            };
        },
        collectIncentives(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
                value,
            };
        },
        transferPositions(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
                value,
            };
        },
    },
    fromPartial: {
        createPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
                value: MsgCreatePosition.fromPartial(value),
            };
        },
        withdrawPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
                value: MsgWithdrawPosition.fromPartial(value),
            };
        },
        addToPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
                value: MsgAddToPosition.fromPartial(value),
            };
        },
        collectSpreadRewards(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
                value: MsgCollectSpreadRewards.fromPartial(value),
            };
        },
        collectIncentives(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
                value: MsgCollectIncentives.fromPartial(value),
            };
        },
        transferPositions(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
                value: MsgTransferPositions.fromPartial(value),
            };
        },
    },
};
