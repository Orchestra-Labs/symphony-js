import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock, MsgSetRewardReceiverAddress, } from './tx';
export const registry = [
    ['/osmosis.lockup.MsgLockTokens', MsgLockTokens],
    ['/osmosis.lockup.MsgBeginUnlockingAll', MsgBeginUnlockingAll],
    ['/osmosis.lockup.MsgBeginUnlocking', MsgBeginUnlocking],
    ['/osmosis.lockup.MsgExtendLockup', MsgExtendLockup],
    ['/osmosis.lockup.MsgForceUnlock', MsgForceUnlock],
    ['/osmosis.lockup.MsgSetRewardReceiverAddress', MsgSetRewardReceiverAddress],
];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        lockTokens(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgLockTokens',
                value: MsgLockTokens.encode(value).finish(),
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgBeginUnlockingAll',
                value: MsgBeginUnlockingAll.encode(value).finish(),
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgBeginUnlocking',
                value: MsgBeginUnlocking.encode(value).finish(),
            };
        },
        extendLockup(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgExtendLockup',
                value: MsgExtendLockup.encode(value).finish(),
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgForceUnlock',
                value: MsgForceUnlock.encode(value).finish(),
            };
        },
        setRewardReceiverAddress(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddress',
                value: MsgSetRewardReceiverAddress.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        lockTokens(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgLockTokens',
                value,
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgBeginUnlockingAll',
                value,
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgBeginUnlocking',
                value,
            };
        },
        extendLockup(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgExtendLockup',
                value,
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgForceUnlock',
                value,
            };
        },
        setRewardReceiverAddress(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddress',
                value,
            };
        },
    },
    fromPartial: {
        lockTokens(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgLockTokens',
                value: MsgLockTokens.fromPartial(value),
            };
        },
        beginUnlockingAll(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgBeginUnlockingAll',
                value: MsgBeginUnlockingAll.fromPartial(value),
            };
        },
        beginUnlocking(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgBeginUnlocking',
                value: MsgBeginUnlocking.fromPartial(value),
            };
        },
        extendLockup(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgExtendLockup',
                value: MsgExtendLockup.fromPartial(value),
            };
        },
        forceUnlock(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgForceUnlock',
                value: MsgForceUnlock.fromPartial(value),
            };
        },
        setRewardReceiverAddress(value) {
            return {
                typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddress',
                value: MsgSetRewardReceiverAddress.fromPartial(value),
            };
        },
    },
};
