import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from './state';
import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference';
    value: Uint8Array;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceAmino {
    /** delegator is the user who is trying to create a validator-set. */
    delegator?: string;
    /** list of {valAddr, weight} to delegate to */
    preferences?: ValidatorPreferenceAmino[];
}
export interface MsgSetValidatorSetPreferenceAminoMsg {
    type: 'osmosis/MsgSetValidatorSetPreference';
    value: MsgSetValidatorSetPreferenceAmino;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
    delegator: string;
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {
}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse';
    value: Uint8Array;
}
export interface MsgSetValidatorSetPreferenceResponseAmino {
}
export interface MsgSetValidatorSetPreferenceResponseAminoMsg {
    type: 'osmosis/valsetpref/set-validator-set-preference-response';
    value: MsgSetValidatorSetPreferenceResponseAmino;
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet';
    value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetAmino {
    /** delegator is the user who is trying to delegate. */
    delegator?: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin?: CoinAmino;
}
export interface MsgDelegateToValidatorSetAminoMsg {
    type: 'osmosis/MsgDelegateToValidatorSet';
    value: MsgDelegateToValidatorSetAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
    delegator: string;
    coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {
}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse';
    value: Uint8Array;
}
export interface MsgDelegateToValidatorSetResponseAmino {
}
export interface MsgDelegateToValidatorSetResponseAminoMsg {
    type: 'osmosis/valsetpref/delegate-to-validator-set-response';
    value: MsgDelegateToValidatorSetResponseAmino;
}
export interface MsgDelegateToValidatorSetResponseSDKType {
}
export interface MsgUndelegateFromValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet';
    value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetAmino {
    /** delegator is the user who is trying to undelegate. */
    delegator?: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetAminoMsg {
    type: 'osmosis/MsgUndelegateFromValidatorSet';
    value: MsgUndelegateFromValidatorSetAmino;
}
export interface MsgUndelegateFromValidatorSetSDKType {
    delegator: string;
    coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {
}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse';
    value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetResponseAmino {
}
export interface MsgUndelegateFromValidatorSetResponseAminoMsg {
    type: 'osmosis/valsetpref/undelegate-from-validator-set-response';
    value: MsgUndelegateFromValidatorSetResponseAmino;
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {
}
export interface MsgUndelegateFromRebalancedValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
     * Our undelegate logic would first check the current delegation balance.
     * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
     * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
     * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
     * undelegated from ValB.
     */
    coin: Coin;
}
export interface MsgUndelegateFromRebalancedValidatorSetProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet';
    value: Uint8Array;
}
export interface MsgUndelegateFromRebalancedValidatorSetAmino {
    /** delegator is the user who is trying to undelegate. */
    delegator?: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
     * Our undelegate logic would first check the current delegation balance.
     * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
     * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
     * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
     * undelegated from ValB.
     */
    coin?: CoinAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetAminoMsg {
    type: 'osmosis/MsgUndelegateFromRebalValset';
    value: MsgUndelegateFromRebalancedValidatorSetAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetSDKType {
    delegator: string;
    coin: CoinSDKType;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponse {
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse';
    value: Uint8Array;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAmino {
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg {
    type: 'osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response';
    value: MsgUndelegateFromRebalancedValidatorSetResponseAmino;
}
export interface MsgUndelegateFromRebalancedValidatorSetResponseSDKType {
}
export interface MsgRedelegateValidatorSet {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet';
    value: Uint8Array;
}
export interface MsgRedelegateValidatorSetAmino {
    /** delegator is the user who is trying to create a validator-set. */
    delegator?: string;
    /** list of {valAddr, weight} to delegate to */
    preferences?: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetAminoMsg {
    type: 'osmosis/MsgRedelegateValidatorSet';
    value: MsgRedelegateValidatorSetAmino;
}
export interface MsgRedelegateValidatorSetSDKType {
    delegator: string;
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {
}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse';
    value: Uint8Array;
}
export interface MsgRedelegateValidatorSetResponseAmino {
}
export interface MsgRedelegateValidatorSetResponseAminoMsg {
    type: 'osmosis/valsetpref/redelegate-validator-set-response';
    value: MsgRedelegateValidatorSetResponseAmino;
}
export interface MsgRedelegateValidatorSetResponseSDKType {
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards';
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsAmino {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator?: string;
}
export interface MsgWithdrawDelegationRewardsAminoMsg {
    type: 'osmosis/MsgWithdrawDelegationRewards';
    value: MsgWithdrawDelegationRewardsAmino;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {
}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse';
    value: Uint8Array;
}
export interface MsgWithdrawDelegationRewardsResponseAmino {
}
export interface MsgWithdrawDelegationRewardsResponseAminoMsg {
    type: 'osmosis/valsetpref/withdraw-delegation-rewards-response';
    value: MsgWithdrawDelegationRewardsResponseAmino;
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
    /** delegator is the user who is trying to force unbond osmo and delegate. */
    delegator: string;
    /** lockup id of osmo in the pool */
    lockID: bigint;
}
export interface MsgDelegateBondedTokensProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens';
    value: Uint8Array;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensAmino {
    /** delegator is the user who is trying to force unbond osmo and delegate. */
    delegator?: string;
    /** lockup id of osmo in the pool */
    lockID?: string;
}
export interface MsgDelegateBondedTokensAminoMsg {
    type: 'osmosis/valsetpref/delegate-bonded-tokens';
    value: MsgDelegateBondedTokensAmino;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensSDKType {
    delegator: string;
    lockID: bigint;
}
export interface MsgDelegateBondedTokensResponse {
}
export interface MsgDelegateBondedTokensResponseProtoMsg {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse';
    value: Uint8Array;
}
export interface MsgDelegateBondedTokensResponseAmino {
}
export interface MsgDelegateBondedTokensResponseAminoMsg {
    type: 'osmosis/valsetpref/delegate-bonded-tokens-response';
    value: MsgDelegateBondedTokensResponseAmino;
}
export interface MsgDelegateBondedTokensResponseSDKType {
}
export declare const MsgSetValidatorSetPreference: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetValidatorSetPreference;
    isSDK(o: any): o is MsgSetValidatorSetPreferenceSDKType;
    isAmino(o: any): o is MsgSetValidatorSetPreferenceAmino;
    encode(message: MsgSetValidatorSetPreference, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference;
    fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference;
    fromAmino(object: MsgSetValidatorSetPreferenceAmino): MsgSetValidatorSetPreference;
    toAmino(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAmino;
    fromAminoMsg(object: MsgSetValidatorSetPreferenceAminoMsg): MsgSetValidatorSetPreference;
    toAminoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoMsg;
    fromProtoMsg(message: MsgSetValidatorSetPreferenceProtoMsg): MsgSetValidatorSetPreference;
    toProto(message: MsgSetValidatorSetPreference): Uint8Array;
    toProtoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceProtoMsg;
};
export declare const MsgSetValidatorSetPreferenceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetValidatorSetPreferenceResponse;
    isSDK(o: any): o is MsgSetValidatorSetPreferenceResponseSDKType;
    isAmino(o: any): o is MsgSetValidatorSetPreferenceResponseAmino;
    encode(_: MsgSetValidatorSetPreferenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse;
    fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse;
    fromAmino(_: MsgSetValidatorSetPreferenceResponseAmino): MsgSetValidatorSetPreferenceResponse;
    toAmino(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAmino;
    fromAminoMsg(object: MsgSetValidatorSetPreferenceResponseAminoMsg): MsgSetValidatorSetPreferenceResponse;
    toAminoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAminoMsg;
    fromProtoMsg(message: MsgSetValidatorSetPreferenceResponseProtoMsg): MsgSetValidatorSetPreferenceResponse;
    toProto(message: MsgSetValidatorSetPreferenceResponse): Uint8Array;
    toProtoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseProtoMsg;
};
export declare const MsgDelegateToValidatorSet: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDelegateToValidatorSet;
    isSDK(o: any): o is MsgDelegateToValidatorSetSDKType;
    isAmino(o: any): o is MsgDelegateToValidatorSetAmino;
    encode(message: MsgDelegateToValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet;
    fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet;
    fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet;
    toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino;
    fromAminoMsg(object: MsgDelegateToValidatorSetAminoMsg): MsgDelegateToValidatorSet;
    toAminoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoMsg;
    fromProtoMsg(message: MsgDelegateToValidatorSetProtoMsg): MsgDelegateToValidatorSet;
    toProto(message: MsgDelegateToValidatorSet): Uint8Array;
    toProtoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetProtoMsg;
};
export declare const MsgDelegateToValidatorSetResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDelegateToValidatorSetResponse;
    isSDK(o: any): o is MsgDelegateToValidatorSetResponseSDKType;
    isAmino(o: any): o is MsgDelegateToValidatorSetResponseAmino;
    encode(_: MsgDelegateToValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse;
    fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse;
    fromAmino(_: MsgDelegateToValidatorSetResponseAmino): MsgDelegateToValidatorSetResponse;
    toAmino(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAmino;
    fromAminoMsg(object: MsgDelegateToValidatorSetResponseAminoMsg): MsgDelegateToValidatorSetResponse;
    toAminoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgDelegateToValidatorSetResponseProtoMsg): MsgDelegateToValidatorSetResponse;
    toProto(message: MsgDelegateToValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseProtoMsg;
};
export declare const MsgUndelegateFromValidatorSet: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUndelegateFromValidatorSet;
    isSDK(o: any): o is MsgUndelegateFromValidatorSetSDKType;
    isAmino(o: any): o is MsgUndelegateFromValidatorSetAmino;
    encode(message: MsgUndelegateFromValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet;
    fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet;
    fromAmino(object: MsgUndelegateFromValidatorSetAmino): MsgUndelegateFromValidatorSet;
    toAmino(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAmino;
    fromAminoMsg(object: MsgUndelegateFromValidatorSetAminoMsg): MsgUndelegateFromValidatorSet;
    toAminoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoMsg;
    fromProtoMsg(message: MsgUndelegateFromValidatorSetProtoMsg): MsgUndelegateFromValidatorSet;
    toProto(message: MsgUndelegateFromValidatorSet): Uint8Array;
    toProtoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetProtoMsg;
};
export declare const MsgUndelegateFromValidatorSetResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUndelegateFromValidatorSetResponse;
    isSDK(o: any): o is MsgUndelegateFromValidatorSetResponseSDKType;
    isAmino(o: any): o is MsgUndelegateFromValidatorSetResponseAmino;
    encode(_: MsgUndelegateFromValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse;
    fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse;
    fromAmino(_: MsgUndelegateFromValidatorSetResponseAmino): MsgUndelegateFromValidatorSetResponse;
    toAmino(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAmino;
    fromAminoMsg(object: MsgUndelegateFromValidatorSetResponseAminoMsg): MsgUndelegateFromValidatorSetResponse;
    toAminoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgUndelegateFromValidatorSetResponseProtoMsg): MsgUndelegateFromValidatorSetResponse;
    toProto(message: MsgUndelegateFromValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseProtoMsg;
};
export declare const MsgUndelegateFromRebalancedValidatorSet: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUndelegateFromRebalancedValidatorSet;
    isSDK(o: any): o is MsgUndelegateFromRebalancedValidatorSetSDKType;
    isAmino(o: any): o is MsgUndelegateFromRebalancedValidatorSetAmino;
    encode(message: MsgUndelegateFromRebalancedValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSet;
    fromPartial(object: Partial<MsgUndelegateFromRebalancedValidatorSet>): MsgUndelegateFromRebalancedValidatorSet;
    fromAmino(object: MsgUndelegateFromRebalancedValidatorSetAmino): MsgUndelegateFromRebalancedValidatorSet;
    toAmino(message: MsgUndelegateFromRebalancedValidatorSet): MsgUndelegateFromRebalancedValidatorSetAmino;
    fromAminoMsg(object: MsgUndelegateFromRebalancedValidatorSetAminoMsg): MsgUndelegateFromRebalancedValidatorSet;
    toAminoMsg(message: MsgUndelegateFromRebalancedValidatorSet): MsgUndelegateFromRebalancedValidatorSetAminoMsg;
    fromProtoMsg(message: MsgUndelegateFromRebalancedValidatorSetProtoMsg): MsgUndelegateFromRebalancedValidatorSet;
    toProto(message: MsgUndelegateFromRebalancedValidatorSet): Uint8Array;
    toProtoMsg(message: MsgUndelegateFromRebalancedValidatorSet): MsgUndelegateFromRebalancedValidatorSetProtoMsg;
};
export declare const MsgUndelegateFromRebalancedValidatorSetResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponse;
    isSDK(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponseSDKType;
    isAmino(o: any): o is MsgUndelegateFromRebalancedValidatorSetResponseAmino;
    encode(_: MsgUndelegateFromRebalancedValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromRebalancedValidatorSetResponse;
    fromPartial(_: Partial<MsgUndelegateFromRebalancedValidatorSetResponse>): MsgUndelegateFromRebalancedValidatorSetResponse;
    fromAmino(_: MsgUndelegateFromRebalancedValidatorSetResponseAmino): MsgUndelegateFromRebalancedValidatorSetResponse;
    toAmino(_: MsgUndelegateFromRebalancedValidatorSetResponse): MsgUndelegateFromRebalancedValidatorSetResponseAmino;
    fromAminoMsg(object: MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg): MsgUndelegateFromRebalancedValidatorSetResponse;
    toAminoMsg(message: MsgUndelegateFromRebalancedValidatorSetResponse): MsgUndelegateFromRebalancedValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg): MsgUndelegateFromRebalancedValidatorSetResponse;
    toProto(message: MsgUndelegateFromRebalancedValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateFromRebalancedValidatorSetResponse): MsgUndelegateFromRebalancedValidatorSetResponseProtoMsg;
};
export declare const MsgRedelegateValidatorSet: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRedelegateValidatorSet;
    isSDK(o: any): o is MsgRedelegateValidatorSetSDKType;
    isAmino(o: any): o is MsgRedelegateValidatorSetAmino;
    encode(message: MsgRedelegateValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet;
    fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet;
    fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet;
    toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino;
    fromAminoMsg(object: MsgRedelegateValidatorSetAminoMsg): MsgRedelegateValidatorSet;
    toAminoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoMsg;
    fromProtoMsg(message: MsgRedelegateValidatorSetProtoMsg): MsgRedelegateValidatorSet;
    toProto(message: MsgRedelegateValidatorSet): Uint8Array;
    toProtoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetProtoMsg;
};
export declare const MsgRedelegateValidatorSetResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRedelegateValidatorSetResponse;
    isSDK(o: any): o is MsgRedelegateValidatorSetResponseSDKType;
    isAmino(o: any): o is MsgRedelegateValidatorSetResponseAmino;
    encode(_: MsgRedelegateValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse;
    fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse;
    fromAmino(_: MsgRedelegateValidatorSetResponseAmino): MsgRedelegateValidatorSetResponse;
    toAmino(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAmino;
    fromAminoMsg(object: MsgRedelegateValidatorSetResponseAminoMsg): MsgRedelegateValidatorSetResponse;
    toAminoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgRedelegateValidatorSetResponseProtoMsg): MsgRedelegateValidatorSetResponse;
    toProto(message: MsgRedelegateValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseProtoMsg;
};
export declare const MsgWithdrawDelegationRewards: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawDelegationRewards;
    isSDK(o: any): o is MsgWithdrawDelegationRewardsSDKType;
    isAmino(o: any): o is MsgWithdrawDelegationRewardsAmino;
    encode(message: MsgWithdrawDelegationRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards;
    fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards;
    fromAmino(object: MsgWithdrawDelegationRewardsAmino): MsgWithdrawDelegationRewards;
    toAmino(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAmino;
    fromAminoMsg(object: MsgWithdrawDelegationRewardsAminoMsg): MsgWithdrawDelegationRewards;
    toAminoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegationRewardsProtoMsg): MsgWithdrawDelegationRewards;
    toProto(message: MsgWithdrawDelegationRewards): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsProtoMsg;
};
export declare const MsgWithdrawDelegationRewardsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawDelegationRewardsResponse;
    isSDK(o: any): o is MsgWithdrawDelegationRewardsResponseSDKType;
    isAmino(o: any): o is MsgWithdrawDelegationRewardsResponseAmino;
    encode(_: MsgWithdrawDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse;
    fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse;
    fromAmino(_: MsgWithdrawDelegationRewardsResponseAmino): MsgWithdrawDelegationRewardsResponse;
    toAmino(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegationRewardsResponseAminoMsg): MsgWithdrawDelegationRewardsResponse;
    toAminoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegationRewardsResponseProtoMsg): MsgWithdrawDelegationRewardsResponse;
    toProto(message: MsgWithdrawDelegationRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseProtoMsg;
};
export declare const MsgDelegateBondedTokens: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDelegateBondedTokens;
    isSDK(o: any): o is MsgDelegateBondedTokensSDKType;
    isAmino(o: any): o is MsgDelegateBondedTokensAmino;
    encode(message: MsgDelegateBondedTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokens;
    fromPartial(object: Partial<MsgDelegateBondedTokens>): MsgDelegateBondedTokens;
    fromAmino(object: MsgDelegateBondedTokensAmino): MsgDelegateBondedTokens;
    toAmino(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAmino;
    fromAminoMsg(object: MsgDelegateBondedTokensAminoMsg): MsgDelegateBondedTokens;
    toAminoMsg(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAminoMsg;
    fromProtoMsg(message: MsgDelegateBondedTokensProtoMsg): MsgDelegateBondedTokens;
    toProto(message: MsgDelegateBondedTokens): Uint8Array;
    toProtoMsg(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensProtoMsg;
};
export declare const MsgDelegateBondedTokensResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDelegateBondedTokensResponse;
    isSDK(o: any): o is MsgDelegateBondedTokensResponseSDKType;
    isAmino(o: any): o is MsgDelegateBondedTokensResponseAmino;
    encode(_: MsgDelegateBondedTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse;
    fromPartial(_: Partial<MsgDelegateBondedTokensResponse>): MsgDelegateBondedTokensResponse;
    fromAmino(_: MsgDelegateBondedTokensResponseAmino): MsgDelegateBondedTokensResponse;
    toAmino(_: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseAmino;
    fromAminoMsg(object: MsgDelegateBondedTokensResponseAminoMsg): MsgDelegateBondedTokensResponse;
    toAminoMsg(message: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseAminoMsg;
    fromProtoMsg(message: MsgDelegateBondedTokensResponseProtoMsg): MsgDelegateBondedTokensResponse;
    toProto(message: MsgDelegateBondedTokensResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseProtoMsg;
};
