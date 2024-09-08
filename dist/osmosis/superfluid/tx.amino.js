"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.superfluid.MsgSuperfluidDelegate': {
        aminoType: 'osmosis/superfluid-delegate',
        toAmino: tx_1.MsgSuperfluidDelegate.toAmino,
        fromAmino: tx_1.MsgSuperfluidDelegate.fromAmino,
    },
    '/osmosis.superfluid.MsgSuperfluidUndelegate': {
        aminoType: 'osmosis/superfluid-undelegate',
        toAmino: tx_1.MsgSuperfluidUndelegate.toAmino,
        fromAmino: tx_1.MsgSuperfluidUndelegate.fromAmino,
    },
    '/osmosis.superfluid.MsgSuperfluidUnbondLock': {
        aminoType: 'osmosis/superfluid-unbond-lock',
        toAmino: tx_1.MsgSuperfluidUnbondLock.toAmino,
        fromAmino: tx_1.MsgSuperfluidUnbondLock.fromAmino,
    },
    '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock': {
        aminoType: 'osmosis/superfluid-undelegate-and-unbond-lock',
        toAmino: tx_1.MsgSuperfluidUndelegateAndUnbondLock.toAmino,
        fromAmino: tx_1.MsgSuperfluidUndelegateAndUnbondLock.fromAmino,
    },
    '/osmosis.superfluid.MsgLockAndSuperfluidDelegate': {
        aminoType: 'osmosis/lock-and-superfluid-delegate',
        toAmino: tx_1.MsgLockAndSuperfluidDelegate.toAmino,
        fromAmino: tx_1.MsgLockAndSuperfluidDelegate.fromAmino,
    },
    '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate': {
        aminoType: 'osmosis/full-range-and-sf-delegate',
        toAmino: tx_1.MsgCreateFullRangePositionAndSuperfluidDelegate.toAmino,
        fromAmino: tx_1.MsgCreateFullRangePositionAndSuperfluidDelegate.fromAmino,
    },
    '/osmosis.superfluid.MsgUnPoolWhitelistedPool': {
        aminoType: 'osmosis/unpool-whitelisted-pool',
        toAmino: tx_1.MsgUnPoolWhitelistedPool.toAmino,
        fromAmino: tx_1.MsgUnPoolWhitelistedPool.fromAmino,
    },
    '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition': {
        aminoType: 'osmosis/unlock-and-migrate',
        toAmino: tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.toAmino,
        fromAmino: tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromAmino,
    },
    '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition': {
        aminoType: 'osmosis/add-to-cl-superfluid-position',
        toAmino: tx_1.MsgAddToConcentratedLiquiditySuperfluidPosition.toAmino,
        fromAmino: tx_1.MsgAddToConcentratedLiquiditySuperfluidPosition.fromAmino,
    },
    '/osmosis.superfluid.MsgUnbondConvertAndStake': {
        aminoType: 'osmosis/unbond-convert-and-stake',
        toAmino: tx_1.MsgUnbondConvertAndStake.toAmino,
        fromAmino: tx_1.MsgUnbondConvertAndStake.fromAmino,
    },
};
