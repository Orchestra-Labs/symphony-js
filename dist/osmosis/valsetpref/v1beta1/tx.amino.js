"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference': {
        aminoType: 'osmosis/MsgSetValidatorSetPreference',
        toAmino: tx_1.MsgSetValidatorSetPreference.toAmino,
        fromAmino: tx_1.MsgSetValidatorSetPreference.fromAmino,
    },
    '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet': {
        aminoType: 'osmosis/MsgDelegateToValidatorSet',
        toAmino: tx_1.MsgDelegateToValidatorSet.toAmino,
        fromAmino: tx_1.MsgDelegateToValidatorSet.fromAmino,
    },
    '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet': {
        aminoType: 'osmosis/MsgUndelegateFromValidatorSet',
        toAmino: tx_1.MsgUndelegateFromValidatorSet.toAmino,
        fromAmino: tx_1.MsgUndelegateFromValidatorSet.fromAmino,
    },
    '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet': {
        aminoType: 'osmosis/MsgUndelegateFromRebalValset',
        toAmino: tx_1.MsgUndelegateFromRebalancedValidatorSet.toAmino,
        fromAmino: tx_1.MsgUndelegateFromRebalancedValidatorSet.fromAmino,
    },
    '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet': {
        aminoType: 'osmosis/MsgRedelegateValidatorSet',
        toAmino: tx_1.MsgRedelegateValidatorSet.toAmino,
        fromAmino: tx_1.MsgRedelegateValidatorSet.fromAmino,
    },
    '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards': {
        aminoType: 'osmosis/MsgWithdrawDelegationRewards',
        toAmino: tx_1.MsgWithdrawDelegationRewards.toAmino,
        fromAmino: tx_1.MsgWithdrawDelegationRewards.fromAmino,
    },
    '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens': {
        aminoType: 'osmosis/valsetpref/delegate-bonded-tokens',
        toAmino: tx_1.MsgDelegateBondedTokens.toAmino,
        fromAmino: tx_1.MsgDelegateBondedTokens.fromAmino,
    },
};
