"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    [
        '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference',
        tx_1.MsgSetValidatorSetPreference,
    ],
    [
        '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet',
        tx_1.MsgDelegateToValidatorSet,
    ],
    [
        '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
        tx_1.MsgUndelegateFromValidatorSet,
    ],
    [
        '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
        tx_1.MsgUndelegateFromRebalancedValidatorSet,
    ],
    [
        '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet',
        tx_1.MsgRedelegateValidatorSet,
    ],
    [
        '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
        tx_1.MsgWithdrawDelegationRewards,
    ],
    [
        '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens',
        tx_1.MsgDelegateBondedTokens,
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
        setValidatorSetPreference(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference',
                value: tx_1.MsgSetValidatorSetPreference.encode(value).finish(),
            };
        },
        delegateToValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet',
                value: tx_1.MsgDelegateToValidatorSet.encode(value).finish(),
            };
        },
        undelegateFromValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
                value: tx_1.MsgUndelegateFromValidatorSet.encode(value).finish(),
            };
        },
        undelegateFromRebalancedValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
                value: tx_1.MsgUndelegateFromRebalancedValidatorSet.encode(value).finish(),
            };
        },
        redelegateValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet',
                value: tx_1.MsgRedelegateValidatorSet.encode(value).finish(),
            };
        },
        withdrawDelegationRewards(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
                value: tx_1.MsgWithdrawDelegationRewards.encode(value).finish(),
            };
        },
        delegateBondedTokens(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens',
                value: tx_1.MsgDelegateBondedTokens.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        setValidatorSetPreference(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference',
                value,
            };
        },
        delegateToValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet',
                value,
            };
        },
        undelegateFromValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
                value,
            };
        },
        undelegateFromRebalancedValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
                value,
            };
        },
        redelegateValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet',
                value,
            };
        },
        withdrawDelegationRewards(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
                value,
            };
        },
        delegateBondedTokens(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens',
                value,
            };
        },
    },
    fromPartial: {
        setValidatorSetPreference(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference',
                value: tx_1.MsgSetValidatorSetPreference.fromPartial(value),
            };
        },
        delegateToValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet',
                value: tx_1.MsgDelegateToValidatorSet.fromPartial(value),
            };
        },
        undelegateFromValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
                value: tx_1.MsgUndelegateFromValidatorSet.fromPartial(value),
            };
        },
        undelegateFromRebalancedValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
                value: tx_1.MsgUndelegateFromRebalancedValidatorSet.fromPartial(value),
            };
        },
        redelegateValidatorSet(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet',
                value: tx_1.MsgRedelegateValidatorSet.fromPartial(value),
            };
        },
        withdrawDelegationRewards(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
                value: tx_1.MsgWithdrawDelegationRewards.fromPartial(value),
            };
        },
        delegateBondedTokens(value) {
            return {
                typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens',
                value: tx_1.MsgDelegateBondedTokens.fromPartial(value),
            };
        },
    },
};
