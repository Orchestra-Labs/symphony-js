import { BinaryReader } from '../../binary';
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse, MsgSetRewardReceiverAddress, MsgSetRewardReceiverAddressResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.lockTokens = this.lockTokens.bind(this);
        this.beginUnlockingAll = this.beginUnlockingAll.bind(this);
        this.beginUnlocking = this.beginUnlocking.bind(this);
        this.extendLockup = this.extendLockup.bind(this);
        this.forceUnlock = this.forceUnlock.bind(this);
        this.setRewardReceiverAddress = this.setRewardReceiverAddress.bind(this);
    }
    lockTokens(request) {
        const data = MsgLockTokens.encode(request).finish();
        const promise = this.rpc.request('osmosis.lockup.Msg', 'LockTokens', data);
        return promise.then(data => MsgLockTokensResponse.decode(new BinaryReader(data)));
    }
    beginUnlockingAll(request) {
        const data = MsgBeginUnlockingAll.encode(request).finish();
        const promise = this.rpc.request('osmosis.lockup.Msg', 'BeginUnlockingAll', data);
        return promise.then(data => MsgBeginUnlockingAllResponse.decode(new BinaryReader(data)));
    }
    beginUnlocking(request) {
        const data = MsgBeginUnlocking.encode(request).finish();
        const promise = this.rpc.request('osmosis.lockup.Msg', 'BeginUnlocking', data);
        return promise.then(data => MsgBeginUnlockingResponse.decode(new BinaryReader(data)));
    }
    extendLockup(request) {
        const data = MsgExtendLockup.encode(request).finish();
        const promise = this.rpc.request('osmosis.lockup.Msg', 'ExtendLockup', data);
        return promise.then(data => MsgExtendLockupResponse.decode(new BinaryReader(data)));
    }
    forceUnlock(request) {
        const data = MsgForceUnlock.encode(request).finish();
        const promise = this.rpc.request('osmosis.lockup.Msg', 'ForceUnlock', data);
        return promise.then(data => MsgForceUnlockResponse.decode(new BinaryReader(data)));
    }
    setRewardReceiverAddress(request) {
        const data = MsgSetRewardReceiverAddress.encode(request).finish();
        const promise = this.rpc.request('osmosis.lockup.Msg', 'SetRewardReceiverAddress', data);
        return promise.then(data => MsgSetRewardReceiverAddressResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
