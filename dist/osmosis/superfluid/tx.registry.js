"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.superfluid.MsgSuperfluidDelegate', tx_1.MsgSuperfluidDelegate],
    ['/osmosis.superfluid.MsgSuperfluidUndelegate', tx_1.MsgSuperfluidUndelegate],
    ['/osmosis.superfluid.MsgSuperfluidUnbondLock', tx_1.MsgSuperfluidUnbondLock],
    [
        '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
        tx_1.MsgSuperfluidUndelegateAndUnbondLock,
    ],
    [
        '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
        tx_1.MsgLockAndSuperfluidDelegate,
    ],
    [
        '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
        tx_1.MsgCreateFullRangePositionAndSuperfluidDelegate,
    ],
    ['/osmosis.superfluid.MsgUnPoolWhitelistedPool', tx_1.MsgUnPoolWhitelistedPool],
    [
        '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
        tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
    ],
    [
        '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
        tx_1.MsgAddToConcentratedLiquiditySuperfluidPosition,
    ],
    ['/osmosis.superfluid.MsgUnbondConvertAndStake', tx_1.MsgUnbondConvertAndStake],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        superfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
                value: tx_1.MsgSuperfluidDelegate.encode(value).finish(),
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
                value: tx_1.MsgSuperfluidUndelegate.encode(value).finish(),
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
                value: tx_1.MsgSuperfluidUnbondLock.encode(value).finish(),
            };
        },
        superfluidUndelegateAndUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
                value: tx_1.MsgSuperfluidUndelegateAndUnbondLock.encode(value).finish(),
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
                value: tx_1.MsgLockAndSuperfluidDelegate.encode(value).finish(),
            };
        },
        createFullRangePositionAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
                value: tx_1.MsgCreateFullRangePositionAndSuperfluidDelegate.encode(value).finish(),
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
                value: tx_1.MsgUnPoolWhitelistedPool.encode(value).finish(),
            };
        },
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
                value: tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(value).finish(),
            };
        },
        addToConcentratedLiquiditySuperfluidPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
                value: tx_1.MsgAddToConcentratedLiquiditySuperfluidPosition.encode(value).finish(),
            };
        },
        unbondConvertAndStake(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
                value: tx_1.MsgUnbondConvertAndStake.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        superfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
                value,
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
                value,
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
                value,
            };
        },
        superfluidUndelegateAndUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
                value,
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
                value,
            };
        },
        createFullRangePositionAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
                value,
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
                value,
            };
        },
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
                value,
            };
        },
        addToConcentratedLiquiditySuperfluidPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
                value,
            };
        },
        unbondConvertAndStake(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
                value,
            };
        },
    },
    fromPartial: {
        superfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
                value: tx_1.MsgSuperfluidDelegate.fromPartial(value),
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
                value: tx_1.MsgSuperfluidUndelegate.fromPartial(value),
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
                value: tx_1.MsgSuperfluidUnbondLock.fromPartial(value),
            };
        },
        superfluidUndelegateAndUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
                value: tx_1.MsgSuperfluidUndelegateAndUnbondLock.fromPartial(value),
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
                value: tx_1.MsgLockAndSuperfluidDelegate.fromPartial(value),
            };
        },
        createFullRangePositionAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
                value: tx_1.MsgCreateFullRangePositionAndSuperfluidDelegate.fromPartial(value),
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
                value: tx_1.MsgUnPoolWhitelistedPool.fromPartial(value),
            };
        },
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
                value: tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromPartial(value),
            };
        },
        addToConcentratedLiquiditySuperfluidPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
                value: tx_1.MsgAddToConcentratedLiquiditySuperfluidPosition.fromPartial(value),
            };
        },
        unbondConvertAndStake(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
                value: tx_1.MsgUnbondConvertAndStake.fromPartial(value),
            };
        },
    },
};
