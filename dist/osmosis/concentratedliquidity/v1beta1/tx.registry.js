"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
        tx_1.MsgCreatePosition,
    ],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
        tx_1.MsgWithdrawPosition,
    ],
    ['/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition', tx_1.MsgAddToPosition],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
        tx_1.MsgCollectSpreadRewards,
    ],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
        tx_1.MsgCollectIncentives,
    ],
    [
        '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
        tx_1.MsgTransferPositions,
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
        createPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
                value: tx_1.MsgCreatePosition.encode(value).finish(),
            };
        },
        withdrawPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
                value: tx_1.MsgWithdrawPosition.encode(value).finish(),
            };
        },
        addToPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
                value: tx_1.MsgAddToPosition.encode(value).finish(),
            };
        },
        collectSpreadRewards(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
                value: tx_1.MsgCollectSpreadRewards.encode(value).finish(),
            };
        },
        collectIncentives(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
                value: tx_1.MsgCollectIncentives.encode(value).finish(),
            };
        },
        transferPositions(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
                value: tx_1.MsgTransferPositions.encode(value).finish(),
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
                value: tx_1.MsgCreatePosition.fromPartial(value),
            };
        },
        withdrawPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
                value: tx_1.MsgWithdrawPosition.fromPartial(value),
            };
        },
        addToPosition(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
                value: tx_1.MsgAddToPosition.fromPartial(value),
            };
        },
        collectSpreadRewards(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
                value: tx_1.MsgCollectSpreadRewards.fromPartial(value),
            };
        },
        collectIncentives(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
                value: tx_1.MsgCollectIncentives.fromPartial(value),
            };
        },
        transferPositions(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
                value: tx_1.MsgTransferPositions.fromPartial(value),
            };
        },
    },
};
