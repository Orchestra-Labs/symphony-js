import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgSuperfluidUndelegateAndUnbondLock, MsgLockAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgUnPoolWhitelistedPool, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgAddToConcentratedLiquiditySuperfluidPosition, MsgUnbondConvertAndStake, } from './tx';
export const registry = [
    ['/osmosis.superfluid.MsgSuperfluidDelegate', MsgSuperfluidDelegate],
    ['/osmosis.superfluid.MsgSuperfluidUndelegate', MsgSuperfluidUndelegate],
    ['/osmosis.superfluid.MsgSuperfluidUnbondLock', MsgSuperfluidUnbondLock],
    [
        '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
        MsgSuperfluidUndelegateAndUnbondLock,
    ],
    [
        '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
        MsgLockAndSuperfluidDelegate,
    ],
    [
        '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
        MsgCreateFullRangePositionAndSuperfluidDelegate,
    ],
    ['/osmosis.superfluid.MsgUnPoolWhitelistedPool', MsgUnPoolWhitelistedPool],
    [
        '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition,
    ],
    [
        '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
        MsgAddToConcentratedLiquiditySuperfluidPosition,
    ],
    ['/osmosis.superfluid.MsgUnbondConvertAndStake', MsgUnbondConvertAndStake],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        superfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
                value: MsgSuperfluidDelegate.encode(value).finish(),
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
                value: MsgSuperfluidUndelegate.encode(value).finish(),
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
                value: MsgSuperfluidUnbondLock.encode(value).finish(),
            };
        },
        superfluidUndelegateAndUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
                value: MsgSuperfluidUndelegateAndUnbondLock.encode(value).finish(),
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
                value: MsgLockAndSuperfluidDelegate.encode(value).finish(),
            };
        },
        createFullRangePositionAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
                value: MsgCreateFullRangePositionAndSuperfluidDelegate.encode(value).finish(),
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
                value: MsgUnPoolWhitelistedPool.encode(value).finish(),
            };
        },
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
                value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(value).finish(),
            };
        },
        addToConcentratedLiquiditySuperfluidPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
                value: MsgAddToConcentratedLiquiditySuperfluidPosition.encode(value).finish(),
            };
        },
        unbondConvertAndStake(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
                value: MsgUnbondConvertAndStake.encode(value).finish(),
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
                value: MsgSuperfluidDelegate.fromPartial(value),
            };
        },
        superfluidUndelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
                value: MsgSuperfluidUndelegate.fromPartial(value),
            };
        },
        superfluidUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
                value: MsgSuperfluidUnbondLock.fromPartial(value),
            };
        },
        superfluidUndelegateAndUnbondLock(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
                value: MsgSuperfluidUndelegateAndUnbondLock.fromPartial(value),
            };
        },
        lockAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
                value: MsgLockAndSuperfluidDelegate.fromPartial(value),
            };
        },
        createFullRangePositionAndSuperfluidDelegate(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
                value: MsgCreateFullRangePositionAndSuperfluidDelegate.fromPartial(value),
            };
        },
        unPoolWhitelistedPool(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
                value: MsgUnPoolWhitelistedPool.fromPartial(value),
            };
        },
        unlockAndMigrateSharesToFullRangeConcentratedPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
                value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromPartial(value),
            };
        },
        addToConcentratedLiquiditySuperfluidPosition(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
                value: MsgAddToConcentratedLiquiditySuperfluidPosition.fromPartial(value),
            };
        },
        unbondConvertAndStake(value) {
            return {
                typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
                value: MsgUnbondConvertAndStake.fromPartial(value),
            };
        },
    },
};
