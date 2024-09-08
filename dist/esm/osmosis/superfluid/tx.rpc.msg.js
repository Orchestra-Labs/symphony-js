import { BinaryReader } from '../../binary';
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUndelegateAndUnbondLock, MsgSuperfluidUndelegateAndUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, MsgAddToConcentratedLiquiditySuperfluidPosition, MsgAddToConcentratedLiquiditySuperfluidPositionResponse, MsgUnbondConvertAndStake, MsgUnbondConvertAndStakeResponse, } from './tx';
export class MsgClientImpl {
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
        const data = MsgSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidDelegate', data);
        return promise.then(data => MsgSuperfluidDelegateResponse.decode(new BinaryReader(data)));
    }
    superfluidUndelegate(request) {
        const data = MsgSuperfluidUndelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidUndelegate', data);
        return promise.then(data => MsgSuperfluidUndelegateResponse.decode(new BinaryReader(data)));
    }
    superfluidUnbondLock(request) {
        const data = MsgSuperfluidUnbondLock.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidUnbondLock', data);
        return promise.then(data => MsgSuperfluidUnbondLockResponse.decode(new BinaryReader(data)));
    }
    superfluidUndelegateAndUnbondLock(request) {
        const data = MsgSuperfluidUndelegateAndUnbondLock.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'SuperfluidUndelegateAndUnbondLock', data);
        return promise.then(data => MsgSuperfluidUndelegateAndUnbondLockResponse.decode(new BinaryReader(data)));
    }
    lockAndSuperfluidDelegate(request) {
        const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'LockAndSuperfluidDelegate', data);
        return promise.then(data => MsgLockAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
    }
    createFullRangePositionAndSuperfluidDelegate(request) {
        const data = MsgCreateFullRangePositionAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'CreateFullRangePositionAndSuperfluidDelegate', data);
        return promise.then(data => MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
    }
    unPoolWhitelistedPool(request) {
        const data = MsgUnPoolWhitelistedPool.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'UnPoolWhitelistedPool', data);
        return promise.then(data => MsgUnPoolWhitelistedPoolResponse.decode(new BinaryReader(data)));
    }
    unlockAndMigrateSharesToFullRangeConcentratedPosition(request) {
        const data = MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'UnlockAndMigrateSharesToFullRangeConcentratedPosition', data);
        return promise.then(data => MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(new BinaryReader(data)));
    }
    addToConcentratedLiquiditySuperfluidPosition(request) {
        const data = MsgAddToConcentratedLiquiditySuperfluidPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'AddToConcentratedLiquiditySuperfluidPosition', data);
        return promise.then(data => MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(new BinaryReader(data)));
    }
    unbondConvertAndStake(request) {
        const data = MsgUnbondConvertAndStake.encode(request).finish();
        const promise = this.rpc.request('osmosis.superfluid.Msg', 'UnbondConvertAndStake', data);
        return promise.then(data => MsgUnbondConvertAndStakeResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
