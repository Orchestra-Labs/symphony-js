import { Duration, DurationAmino, DurationSDKType } from '../../../google/protobuf/duration';
import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParams {
    /**
     * The start time for beginning the weight change.
     * If a parameter change / pool instantiation leaves this blank,
     * it should be generated by the state_machine as the current time.
     */
    startTime: Date;
    /** Duration for the weights to change over */
    duration: Duration;
    /**
     * The initial pool weights. These are copied from the pool's settings
     * at the time of weight change instantiation.
     * The amount PoolAsset.token.amount field is ignored if present,
     * future type refactorings should just have a type with the denom & weight
     * here.
     */
    initialPoolWeights: PoolAsset[];
    /**
     * The target pool weights. The pool weights will change linearly with respect
     * to time between start_time, and start_time + duration. The amount
     * PoolAsset.token.amount field is ignored if present, future type
     * refactorings should just have a type with the denom & weight here.
     */
    targetPoolWeights: PoolAsset[];
}
export interface SmoothWeightChangeParamsProtoMsg {
    typeUrl: '/osmosis.gamm.v1beta1.SmoothWeightChangeParams';
    value: Uint8Array;
}
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParamsAmino {
    /**
     * The start time for beginning the weight change.
     * If a parameter change / pool instantiation leaves this blank,
     * it should be generated by the state_machine as the current time.
     */
    start_time?: string;
    /** Duration for the weights to change over */
    duration?: DurationAmino;
    /**
     * The initial pool weights. These are copied from the pool's settings
     * at the time of weight change instantiation.
     * The amount PoolAsset.token.amount field is ignored if present,
     * future type refactorings should just have a type with the denom & weight
     * here.
     */
    initial_pool_weights?: PoolAssetAmino[];
    /**
     * The target pool weights. The pool weights will change linearly with respect
     * to time between start_time, and start_time + duration. The amount
     * PoolAsset.token.amount field is ignored if present, future type
     * refactorings should just have a type with the denom & weight here.
     */
    target_pool_weights?: PoolAssetAmino[];
}
export interface SmoothWeightChangeParamsAminoMsg {
    type: 'osmosis/gamm/smooth-weight-change-params';
    value: SmoothWeightChangeParamsAmino;
}
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 *   t <= start_time: w(t) = initial_pool_weights
 *   start_time < t <= start_time + duration:
 *     w(t) = initial_pool_weights + (t - start_time) *
 *       (target_pool_weights - initial_pool_weights) / (duration)
 *   t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParamsSDKType {
    start_time: Date;
    duration: DurationSDKType;
    initial_pool_weights: PoolAssetSDKType[];
    target_pool_weights: PoolAssetSDKType[];
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
    swapFee: string;
    /**
     * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
     * pools can maintain a non-zero fee. No new pool can be created with non-zero
     * fee anymore
     */
    exitFee: string;
    smoothWeightChangeParams?: SmoothWeightChangeParams;
}
export interface PoolParamsProtoMsg {
    typeUrl: '/osmosis.gamm.v1beta1.PoolParams';
    value: Uint8Array;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsAmino {
    swap_fee?: string;
    /**
     * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
     * pools can maintain a non-zero fee. No new pool can be created with non-zero
     * fee anymore
     */
    exit_fee?: string;
    smooth_weight_change_params?: SmoothWeightChangeParamsAmino;
}
export interface PoolParamsAminoMsg {
    type: 'osmosis/gamm/BalancerPoolParams';
    value: PoolParamsAmino;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
    swap_fee: string;
    exit_fee: string;
    smooth_weight_change_params?: SmoothWeightChangeParamsSDKType;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAsset {
    /**
     * Coins we are talking about,
     * the denomination must be unique amongst all PoolAssets for this pool.
     */
    token: Coin;
    /** Weight that is not normalized. This weight must be less than 2^50 */
    weight: string;
}
export interface PoolAssetProtoMsg {
    typeUrl: '/osmosis.gamm.v1beta1.PoolAsset';
    value: Uint8Array;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAssetAmino {
    /**
     * Coins we are talking about,
     * the denomination must be unique amongst all PoolAssets for this pool.
     */
    token?: CoinAmino;
    /** Weight that is not normalized. This weight must be less than 2^50 */
    weight?: string;
}
export interface PoolAssetAminoMsg {
    type: 'osmosis/gamm/pool-asset';
    value: PoolAssetAmino;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAssetSDKType {
    token: CoinSDKType;
    weight: string;
}
export interface Pool {
    $typeUrl?: '/osmosis.gamm.v1beta1.Pool';
    address: string;
    id: bigint;
    poolParams: PoolParams;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     * TODO: Further improve these docs
     */
    futurePoolGovernor: string;
    /** sum of all LP tokens sent out */
    totalShares: Coin;
    /**
     * These are assumed to be sorted by denomiation.
     * They contain the pool asset and the information about the weight
     */
    poolAssets: PoolAsset[];
    /** sum of all non-normalized pool weights */
    totalWeight: string;
}
export interface PoolProtoMsg {
    typeUrl: '/osmosis.gamm.v1beta1.Pool';
    value: Uint8Array;
}
export interface PoolAmino {
    address?: string;
    id?: string;
    pool_params?: PoolParamsAmino;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     * TODO: Further improve these docs
     */
    future_pool_governor?: string;
    /** sum of all LP tokens sent out */
    total_shares?: CoinAmino;
    /**
     * These are assumed to be sorted by denomiation.
     * They contain the pool asset and the information about the weight
     */
    pool_assets?: PoolAssetAmino[];
    /** sum of all non-normalized pool weights */
    total_weight?: string;
}
export interface PoolAminoMsg {
    type: 'osmosis/gamm/BalancerPool';
    value: PoolAmino;
}
export interface PoolSDKType {
    $typeUrl?: '/osmosis.gamm.v1beta1.Pool';
    address: string;
    id: bigint;
    pool_params: PoolParamsSDKType;
    future_pool_governor: string;
    total_shares: CoinSDKType;
    pool_assets: PoolAssetSDKType[];
    total_weight: string;
}
export declare const SmoothWeightChangeParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SmoothWeightChangeParams;
    isSDK(o: any): o is SmoothWeightChangeParamsSDKType;
    isAmino(o: any): o is SmoothWeightChangeParamsAmino;
    encode(message: SmoothWeightChangeParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SmoothWeightChangeParams;
    fromPartial(object: Partial<SmoothWeightChangeParams>): SmoothWeightChangeParams;
    fromAmino(object: SmoothWeightChangeParamsAmino): SmoothWeightChangeParams;
    toAmino(message: SmoothWeightChangeParams): SmoothWeightChangeParamsAmino;
    fromAminoMsg(object: SmoothWeightChangeParamsAminoMsg): SmoothWeightChangeParams;
    toAminoMsg(message: SmoothWeightChangeParams): SmoothWeightChangeParamsAminoMsg;
    fromProtoMsg(message: SmoothWeightChangeParamsProtoMsg): SmoothWeightChangeParams;
    toProto(message: SmoothWeightChangeParams): Uint8Array;
    toProtoMsg(message: SmoothWeightChangeParams): SmoothWeightChangeParamsProtoMsg;
};
export declare const PoolParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PoolParams;
    isSDK(o: any): o is PoolParamsSDKType;
    isAmino(o: any): o is PoolParamsAmino;
    encode(message: PoolParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolParams;
    fromPartial(object: Partial<PoolParams>): PoolParams;
    fromAmino(object: PoolParamsAmino): PoolParams;
    toAmino(message: PoolParams): PoolParamsAmino;
    fromAminoMsg(object: PoolParamsAminoMsg): PoolParams;
    toAminoMsg(message: PoolParams): PoolParamsAminoMsg;
    fromProtoMsg(message: PoolParamsProtoMsg): PoolParams;
    toProto(message: PoolParams): Uint8Array;
    toProtoMsg(message: PoolParams): PoolParamsProtoMsg;
};
export declare const PoolAsset: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PoolAsset;
    isSDK(o: any): o is PoolAssetSDKType;
    isAmino(o: any): o is PoolAssetAmino;
    encode(message: PoolAsset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolAsset;
    fromPartial(object: Partial<PoolAsset>): PoolAsset;
    fromAmino(object: PoolAssetAmino): PoolAsset;
    toAmino(message: PoolAsset): PoolAssetAmino;
    fromAminoMsg(object: PoolAssetAminoMsg): PoolAsset;
    toAminoMsg(message: PoolAsset): PoolAssetAminoMsg;
    fromProtoMsg(message: PoolAssetProtoMsg): PoolAsset;
    toProto(message: PoolAsset): Uint8Array;
    toProtoMsg(message: PoolAsset): PoolAssetProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Pool;
    isSDK(o: any): o is PoolSDKType;
    isAmino(o: any): o is PoolAmino;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    toAminoMsg(message: Pool): PoolAminoMsg;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
