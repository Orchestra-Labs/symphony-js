import { BinaryReader } from '../../../binary';
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceResponse, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetResponse, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetResponse, MsgUndelegateFromRebalancedValidatorSet, MsgUndelegateFromRebalancedValidatorSetResponse, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetResponse, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsResponse, MsgDelegateBondedTokens, MsgDelegateBondedTokensResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setValidatorSetPreference = this.setValidatorSetPreference.bind(this);
        this.delegateToValidatorSet = this.delegateToValidatorSet.bind(this);
        this.undelegateFromValidatorSet =
            this.undelegateFromValidatorSet.bind(this);
        this.undelegateFromRebalancedValidatorSet =
            this.undelegateFromRebalancedValidatorSet.bind(this);
        this.redelegateValidatorSet = this.redelegateValidatorSet.bind(this);
        this.withdrawDelegationRewards = this.withdrawDelegationRewards.bind(this);
        this.delegateBondedTokens = this.delegateBondedTokens.bind(this);
    }
    setValidatorSetPreference(request) {
        const data = MsgSetValidatorSetPreference.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'SetValidatorSetPreference', data);
        return promise.then(data => MsgSetValidatorSetPreferenceResponse.decode(new BinaryReader(data)));
    }
    delegateToValidatorSet(request) {
        const data = MsgDelegateToValidatorSet.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'DelegateToValidatorSet', data);
        return promise.then(data => MsgDelegateToValidatorSetResponse.decode(new BinaryReader(data)));
    }
    undelegateFromValidatorSet(request) {
        const data = MsgUndelegateFromValidatorSet.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'UndelegateFromValidatorSet', data);
        return promise.then(data => MsgUndelegateFromValidatorSetResponse.decode(new BinaryReader(data)));
    }
    undelegateFromRebalancedValidatorSet(request) {
        const data = MsgUndelegateFromRebalancedValidatorSet.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'UndelegateFromRebalancedValidatorSet', data);
        return promise.then(data => MsgUndelegateFromRebalancedValidatorSetResponse.decode(new BinaryReader(data)));
    }
    redelegateValidatorSet(request) {
        const data = MsgRedelegateValidatorSet.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'RedelegateValidatorSet', data);
        return promise.then(data => MsgRedelegateValidatorSetResponse.decode(new BinaryReader(data)));
    }
    withdrawDelegationRewards(request) {
        const data = MsgWithdrawDelegationRewards.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'WithdrawDelegationRewards', data);
        return promise.then(data => MsgWithdrawDelegationRewardsResponse.decode(new BinaryReader(data)));
    }
    delegateBondedTokens(request) {
        const data = MsgDelegateBondedTokens.encode(request).finish();
        const promise = this.rpc.request('osmosis.valsetpref.v1beta1.Msg', 'DelegateBondedTokens', data);
        return promise.then(data => MsgDelegateBondedTokensResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
