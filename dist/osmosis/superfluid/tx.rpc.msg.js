"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.superfluidDelegate = this.superfluidDelegate.bind(this);
        this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
        this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
        this.superfluidUndelegateAndUnbondLock =
            this.superfluidUndelegateAndUnbondLock.bind(this);
        this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
        this.createFullRangePositionAndSuperfluidDelegate =
            this.createFullRangePositionAndSuperfluidDelegate.bind(this);
        this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
        this.unlockAndMigrateSharesToFullRangeConcentratedPosition =
            this.unlockAndMigrateSharesToFullRangeConcentratedPosition.bind(this);
        this.addToConcentratedLiquiditySuperfluidPosition =
            this.addToConcentratedLiquiditySuperfluidPosition.bind(this);
        this.unbondConvertAndStake = this.unbondConvertAndStake.bind(this);
    }
    superfluidDelegate(request) {
        const data = tx_1.MsgSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidDelegate', data);
        return promise.then(data => tx_1.MsgSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidUndelegate(request) {
        const data = tx_1.MsgSuperfluidUndelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidUndelegate', data);
        return promise.then(data => tx_1.MsgSuperfluidUndelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidUnbondLock(request) {
        const data = tx_1.MsgSuperfluidUnbondLock.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidUnbondLock', data);
        return promise.then(data => tx_1.MsgSuperfluidUnbondLockResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidUndelegateAndUnbondLock(request) {
        const data = tx_1.MsgSuperfluidUndelegateAndUnbondLock.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidUndelegateAndUnbondLock', data);
        return promise.then(data => tx_1.MsgSuperfluidUndelegateAndUnbondLockResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockAndSuperfluidDelegate(request) {
        const data = tx_1.MsgLockAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'LockAndSuperfluidDelegate', data);
        return promise.then(data => tx_1.MsgLockAndSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    createFullRangePositionAndSuperfluidDelegate(request) {
        const data = tx_1.MsgCreateFullRangePositionAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'CreateFullRangePositionAndSuperfluidDelegate', data);
        return promise.then(data => tx_1.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    unPoolWhitelistedPool(request) {
        const data = tx_1.MsgUnPoolWhitelistedPool.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'UnPoolWhitelistedPool', data);
        return promise.then(data => tx_1.MsgUnPoolWhitelistedPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    unlockAndMigrateSharesToFullRangeConcentratedPosition(request) {
        const data = tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'UnlockAndMigrateSharesToFullRangeConcentratedPosition', data);
        return promise.then(data => tx_1.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    addToConcentratedLiquiditySuperfluidPosition(request) {
        const data = tx_1.MsgAddToConcentratedLiquiditySuperfluidPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'AddToConcentratedLiquiditySuperfluidPosition', data);
        return promise.then(data => tx_1.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    unbondConvertAndStake(request) {
        const data = tx_1.MsgUnbondConvertAndStake.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'UnbondConvertAndStake', data);
        return promise.then(data => tx_1.MsgUnbondConvertAndStakeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
