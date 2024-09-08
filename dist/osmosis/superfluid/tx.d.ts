import { Coin, CoinAmino, CoinSDKType } from '../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../binary';
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: bigint;
    valAddr: string;
}
export interface MsgSuperfluidDelegateProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate';
    value: Uint8Array;
}
export interface MsgSuperfluidDelegateAmino {
    sender?: string;
    lock_id?: string;
    val_addr?: string;
}
export interface MsgSuperfluidDelegateAminoMsg {
    type: 'osmosis/superfluid-delegate';
    value: MsgSuperfluidDelegateAmino;
}
export interface MsgSuperfluidDelegateSDKType {
    sender: string;
    lock_id: bigint;
    val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidDelegateResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegateResponse';
    value: Uint8Array;
}
export interface MsgSuperfluidDelegateResponseAmino {
}
export interface MsgSuperfluidDelegateResponseAminoMsg {
    type: 'osmosis/superfluid-delegate-response';
    value: MsgSuperfluidDelegateResponseAmino;
}
export interface MsgSuperfluidDelegateResponseSDKType {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: bigint;
}
export interface MsgSuperfluidUndelegateProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate';
    value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAmino {
    sender?: string;
    lock_id?: string;
}
export interface MsgSuperfluidUndelegateAminoMsg {
    type: 'osmosis/superfluid-undelegate';
    value: MsgSuperfluidUndelegateAmino;
}
export interface MsgSuperfluidUndelegateSDKType {
    sender: string;
    lock_id: bigint;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUndelegateResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateResponse';
    value: Uint8Array;
}
export interface MsgSuperfluidUndelegateResponseAmino {
}
export interface MsgSuperfluidUndelegateResponseAminoMsg {
    type: 'osmosis/superfluid-undelegate-response';
    value: MsgSuperfluidUndelegateResponseAmino;
}
export interface MsgSuperfluidUndelegateResponseSDKType {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: bigint;
}
export interface MsgSuperfluidUnbondLockProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock';
    value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockAmino {
    sender?: string;
    lock_id?: string;
}
export interface MsgSuperfluidUnbondLockAminoMsg {
    type: 'osmosis/superfluid-unbond-lock';
    value: MsgSuperfluidUnbondLockAmino;
}
export interface MsgSuperfluidUnbondLockSDKType {
    sender: string;
    lock_id: bigint;
}
export interface MsgSuperfluidUnbondLockResponse {
}
export interface MsgSuperfluidUnbondLockResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLockResponse';
    value: Uint8Array;
}
export interface MsgSuperfluidUnbondLockResponseAmino {
}
export interface MsgSuperfluidUnbondLockResponseAminoMsg {
    type: 'osmosis/superfluid-unbond-lock-response';
    value: MsgSuperfluidUnbondLockResponseAmino;
}
export interface MsgSuperfluidUnbondLockResponseSDKType {
}
export interface MsgSuperfluidUndelegateAndUnbondLock {
    sender: string;
    lockId: bigint;
    /** Amount of unlocking coin. */
    coin: Coin;
}
export interface MsgSuperfluidUndelegateAndUnbondLockProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock';
    value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAndUnbondLockAmino {
    sender?: string;
    lock_id?: string;
    /** Amount of unlocking coin. */
    coin?: CoinAmino;
}
export interface MsgSuperfluidUndelegateAndUnbondLockAminoMsg {
    type: 'osmosis/superfluid-undelegate-and-unbond-lock';
    value: MsgSuperfluidUndelegateAndUnbondLockAmino;
}
export interface MsgSuperfluidUndelegateAndUnbondLockSDKType {
    sender: string;
    lock_id: bigint;
    coin: CoinSDKType;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponse {
    /**
     * lock id of the new lock created for the remaining amount.
     * returns the original lockid if the unlocked amount is equal to the
     * original lock's amount.
     */
    lockId: bigint;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse';
    value: Uint8Array;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseAmino {
    /**
     * lock id of the new lock created for the remaining amount.
     * returns the original lockid if the unlocked amount is equal to the
     * original lock's amount.
     */
    lock_id?: string;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg {
    type: 'osmosis/superfluid-undelegate-and-unbond-lock-response';
    value: MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseSDKType {
    lock_id: bigint;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate';
    value: Uint8Array;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateAmino {
    sender?: string;
    coins?: CoinAmino[];
    val_addr?: string;
}
export interface MsgLockAndSuperfluidDelegateAminoMsg {
    type: 'osmosis/lock-and-superfluid-delegate';
    value: MsgLockAndSuperfluidDelegateAmino;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
    sender: string;
    coins: CoinSDKType[];
    val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    iD: bigint;
}
export interface MsgLockAndSuperfluidDelegateResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse';
    value: Uint8Array;
}
export interface MsgLockAndSuperfluidDelegateResponseAmino {
    ID?: string;
}
export interface MsgLockAndSuperfluidDelegateResponseAminoMsg {
    type: 'osmosis/lock-and-superfluid-delegate-response';
    value: MsgLockAndSuperfluidDelegateResponseAmino;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
    ID: bigint;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
    poolId: bigint;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate';
    value: Uint8Array;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegateAmino {
    sender?: string;
    coins?: CoinAmino[];
    val_addr?: string;
    pool_id?: string;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg {
    type: 'osmosis/full-range-and-sf-delegate';
    value: MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegateSDKType {
    sender: string;
    coins: CoinSDKType[];
    val_addr: string;
    pool_id: bigint;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    lockID: bigint;
    positionID: bigint;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse';
    value: Uint8Array;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino {
    lockID?: string;
    positionID?: string;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg {
    type: 'osmosis/create-full-range-position-and-superfluid-delegate-response';
    value: MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseSDKType {
    lockID: bigint;
    positionID: bigint;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
    sender: string;
    poolId: bigint;
}
export interface MsgUnPoolWhitelistedPoolProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool';
    value: Uint8Array;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolAmino {
    sender?: string;
    pool_id?: string;
}
export interface MsgUnPoolWhitelistedPoolAminoMsg {
    type: 'osmosis/unpool-whitelisted-pool';
    value: MsgUnPoolWhitelistedPoolAmino;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
    sender: string;
    pool_id: bigint;
}
export interface MsgUnPoolWhitelistedPoolResponse {
    exitedLockIds: bigint[];
}
export interface MsgUnPoolWhitelistedPoolResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse';
    value: Uint8Array;
}
export interface MsgUnPoolWhitelistedPoolResponseAmino {
    exited_lock_ids?: string[];
}
export interface MsgUnPoolWhitelistedPoolResponseAminoMsg {
    type: 'osmosis/un-pool-whitelisted-pool-response';
    value: MsgUnPoolWhitelistedPoolResponseAmino;
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
    exited_lock_ids: bigint[];
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    sender: string;
    lockId: bigint;
    sharesToMigrate: Coin;
    /** token_out_mins indicates minimum token to exit Balancer pool with. */
    tokenOutMins: Coin[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition';
    value: Uint8Array;
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino {
    sender?: string;
    lock_id?: string;
    shares_to_migrate?: CoinAmino;
    /** token_out_mins indicates minimum token to exit Balancer pool with. */
    token_out_mins?: CoinAmino[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg {
    type: 'osmosis/unlock-and-migrate';
    value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionSDKType {
    sender: string;
    lock_id: bigint;
    shares_to_migrate: CoinSDKType;
    token_out_mins: CoinSDKType[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    amount0: string;
    amount1: string;
    liquidityCreated: string;
    joinTime: Date;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse';
    value: Uint8Array;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino {
    amount0?: string;
    amount1?: string;
    liquidity_created?: string;
    join_time?: string;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg {
    type: 'osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position-response';
    value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseSDKType {
    amount0: string;
    amount1: string;
    liquidity_created: string;
    join_time: Date;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPosition {
    positionId: bigint;
    sender: string;
    tokenDesired0: Coin;
    tokenDesired1: Coin;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition';
    value: Uint8Array;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPositionAmino {
    position_id?: string;
    sender?: string;
    token_desired0?: CoinAmino;
    token_desired1?: CoinAmino;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg {
    type: 'osmosis/add-to-cl-superfluid-position';
    value: MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPositionSDKType {
    position_id: bigint;
    sender: string;
    token_desired0: CoinSDKType;
    token_desired1: CoinSDKType;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    positionId: bigint;
    amount0: string;
    amount1: string;
    /**
     * new_liquidity is the final liquidity after the add.
     * It includes the liquidity that existed before in the position
     * and the new liquidity that was added to the position.
     */
    newLiquidity: string;
    lockId: bigint;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse';
    value: Uint8Array;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino {
    position_id?: string;
    amount0?: string;
    amount1?: string;
    /**
     * new_liquidity is the final liquidity after the add.
     * It includes the liquidity that existed before in the position
     * and the new liquidity that was added to the position.
     */
    new_liquidity?: string;
    lock_id?: string;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg {
    type: 'osmosis/add-to-concentrated-liquidity-superfluid-position-response';
    value: MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseSDKType {
    position_id: bigint;
    amount0: string;
    amount1: string;
    new_liquidity: string;
    lock_id: bigint;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStake {
    /**
     * lock ID to convert and stake.
     * lock id with 0 should be provided if converting liquid gamm shares to stake
     */
    lockId: bigint;
    sender: string;
    /**
     * validator address to delegate to.
     * If provided empty string, we use the validators returned from
     * valset-preference module.
     */
    valAddr: string;
    /** min_amt_to_stake indicates the minimum amount to stake after conversion */
    minAmtToStake: string;
    /**
     * shares_to_convert indicates shares wanted to stake.
     * Note that this field is only used for liquid(unlocked) gamm shares.
     * For all other cases, this field would be disregarded.
     */
    sharesToConvert: Coin;
}
export interface MsgUnbondConvertAndStakeProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake';
    value: Uint8Array;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStakeAmino {
    /**
     * lock ID to convert and stake.
     * lock id with 0 should be provided if converting liquid gamm shares to stake
     */
    lock_id?: string;
    sender?: string;
    /**
     * validator address to delegate to.
     * If provided empty string, we use the validators returned from
     * valset-preference module.
     */
    val_addr?: string;
    /** min_amt_to_stake indicates the minimum amount to stake after conversion */
    min_amt_to_stake?: string;
    /**
     * shares_to_convert indicates shares wanted to stake.
     * Note that this field is only used for liquid(unlocked) gamm shares.
     * For all other cases, this field would be disregarded.
     */
    shares_to_convert?: CoinAmino;
}
export interface MsgUnbondConvertAndStakeAminoMsg {
    type: 'osmosis/unbond-convert-and-stake';
    value: MsgUnbondConvertAndStakeAmino;
}
/** ===================== MsgUnbondConvertAndStake */
export interface MsgUnbondConvertAndStakeSDKType {
    lock_id: bigint;
    sender: string;
    val_addr: string;
    min_amt_to_stake: string;
    shares_to_convert: CoinSDKType;
}
export interface MsgUnbondConvertAndStakeResponse {
    totalAmtStaked: string;
}
export interface MsgUnbondConvertAndStakeResponseProtoMsg {
    typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStakeResponse';
    value: Uint8Array;
}
export interface MsgUnbondConvertAndStakeResponseAmino {
    total_amt_staked?: string;
}
export interface MsgUnbondConvertAndStakeResponseAminoMsg {
    type: 'osmosis/unbond-convert-and-stake-response';
    value: MsgUnbondConvertAndStakeResponseAmino;
}
export interface MsgUnbondConvertAndStakeResponseSDKType {
    total_amt_staked: string;
}
export declare const MsgSuperfluidDelegate: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidDelegate;
    isSDK(o: any): o is MsgSuperfluidDelegateSDKType;
    isAmino(o: any): o is MsgSuperfluidDelegateAmino;
    encode(message: MsgSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromPartial(object: Partial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate;
    fromAmino(object: MsgSuperfluidDelegateAmino): MsgSuperfluidDelegate;
    toAmino(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAmino;
    fromAminoMsg(object: MsgSuperfluidDelegateAminoMsg): MsgSuperfluidDelegate;
    toAminoMsg(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateAminoMsg;
    fromProtoMsg(message: MsgSuperfluidDelegateProtoMsg): MsgSuperfluidDelegate;
    toProto(message: MsgSuperfluidDelegate): Uint8Array;
    toProtoMsg(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateProtoMsg;
};
export declare const MsgSuperfluidDelegateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidDelegateResponse;
    isSDK(o: any): o is MsgSuperfluidDelegateResponseSDKType;
    isAmino(o: any): o is MsgSuperfluidDelegateResponseAmino;
    encode(_: MsgSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse;
    fromAmino(_: MsgSuperfluidDelegateResponseAmino): MsgSuperfluidDelegateResponse;
    toAmino(_: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAmino;
    fromAminoMsg(object: MsgSuperfluidDelegateResponseAminoMsg): MsgSuperfluidDelegateResponse;
    toAminoMsg(message: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidDelegateResponseProtoMsg): MsgSuperfluidDelegateResponse;
    toProto(message: MsgSuperfluidDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseProtoMsg;
};
export declare const MsgSuperfluidUndelegate: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidUndelegate;
    isSDK(o: any): o is MsgSuperfluidUndelegateSDKType;
    isAmino(o: any): o is MsgSuperfluidUndelegateAmino;
    encode(message: MsgSuperfluidUndelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromPartial(object: Partial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate;
    fromAmino(object: MsgSuperfluidUndelegateAmino): MsgSuperfluidUndelegate;
    toAmino(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAmino;
    fromAminoMsg(object: MsgSuperfluidUndelegateAminoMsg): MsgSuperfluidUndelegate;
    toAminoMsg(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUndelegateProtoMsg): MsgSuperfluidUndelegate;
    toProto(message: MsgSuperfluidUndelegate): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateProtoMsg;
};
export declare const MsgSuperfluidUndelegateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidUndelegateResponse;
    isSDK(o: any): o is MsgSuperfluidUndelegateResponseSDKType;
    isAmino(o: any): o is MsgSuperfluidUndelegateResponseAmino;
    encode(_: MsgSuperfluidUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse;
    fromAmino(_: MsgSuperfluidUndelegateResponseAmino): MsgSuperfluidUndelegateResponse;
    toAmino(_: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAmino;
    fromAminoMsg(object: MsgSuperfluidUndelegateResponseAminoMsg): MsgSuperfluidUndelegateResponse;
    toAminoMsg(message: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUndelegateResponseProtoMsg): MsgSuperfluidUndelegateResponse;
    toProto(message: MsgSuperfluidUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseProtoMsg;
};
export declare const MsgSuperfluidUnbondLock: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidUnbondLock;
    isSDK(o: any): o is MsgSuperfluidUnbondLockSDKType;
    isAmino(o: any): o is MsgSuperfluidUnbondLockAmino;
    encode(message: MsgSuperfluidUnbondLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromPartial(object: Partial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock;
    fromAmino(object: MsgSuperfluidUnbondLockAmino): MsgSuperfluidUnbondLock;
    toAmino(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAmino;
    fromAminoMsg(object: MsgSuperfluidUnbondLockAminoMsg): MsgSuperfluidUnbondLock;
    toAminoMsg(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUnbondLockProtoMsg): MsgSuperfluidUnbondLock;
    toProto(message: MsgSuperfluidUnbondLock): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockProtoMsg;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidUnbondLockResponse;
    isSDK(o: any): o is MsgSuperfluidUnbondLockResponseSDKType;
    isAmino(o: any): o is MsgSuperfluidUnbondLockResponseAmino;
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromPartial(_: Partial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse;
    fromAmino(_: MsgSuperfluidUnbondLockResponseAmino): MsgSuperfluidUnbondLockResponse;
    toAmino(_: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAmino;
    fromAminoMsg(object: MsgSuperfluidUnbondLockResponseAminoMsg): MsgSuperfluidUnbondLockResponse;
    toAminoMsg(message: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUnbondLockResponseProtoMsg): MsgSuperfluidUnbondLockResponse;
    toProto(message: MsgSuperfluidUnbondLockResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseProtoMsg;
};
export declare const MsgSuperfluidUndelegateAndUnbondLock: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidUndelegateAndUnbondLock;
    isSDK(o: any): o is MsgSuperfluidUndelegateAndUnbondLockSDKType;
    isAmino(o: any): o is MsgSuperfluidUndelegateAndUnbondLockAmino;
    encode(message: MsgSuperfluidUndelegateAndUnbondLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateAndUnbondLock;
    fromPartial(object: Partial<MsgSuperfluidUndelegateAndUnbondLock>): MsgSuperfluidUndelegateAndUnbondLock;
    fromAmino(object: MsgSuperfluidUndelegateAndUnbondLockAmino): MsgSuperfluidUndelegateAndUnbondLock;
    toAmino(message: MsgSuperfluidUndelegateAndUnbondLock): MsgSuperfluidUndelegateAndUnbondLockAmino;
    fromAminoMsg(object: MsgSuperfluidUndelegateAndUnbondLockAminoMsg): MsgSuperfluidUndelegateAndUnbondLock;
    toAminoMsg(message: MsgSuperfluidUndelegateAndUnbondLock): MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUndelegateAndUnbondLockProtoMsg): MsgSuperfluidUndelegateAndUnbondLock;
    toProto(message: MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUndelegateAndUnbondLock): MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
};
export declare const MsgSuperfluidUndelegateAndUnbondLockResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSuperfluidUndelegateAndUnbondLockResponse;
    isSDK(o: any): o is MsgSuperfluidUndelegateAndUnbondLockResponseSDKType;
    isAmino(o: any): o is MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
    encode(message: MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSuperfluidUndelegateAndUnbondLockResponse;
    fromPartial(object: Partial<MsgSuperfluidUndelegateAndUnbondLockResponse>): MsgSuperfluidUndelegateAndUnbondLockResponse;
    fromAmino(object: MsgSuperfluidUndelegateAndUnbondLockResponseAmino): MsgSuperfluidUndelegateAndUnbondLockResponse;
    toAmino(message: MsgSuperfluidUndelegateAndUnbondLockResponse): MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
    fromAminoMsg(object: MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): MsgSuperfluidUndelegateAndUnbondLockResponse;
    toAminoMsg(message: MsgSuperfluidUndelegateAndUnbondLockResponse): MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
    fromProtoMsg(message: MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): MsgSuperfluidUndelegateAndUnbondLockResponse;
    toProto(message: MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
    toProtoMsg(message: MsgSuperfluidUndelegateAndUnbondLockResponse): MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
};
export declare const MsgLockAndSuperfluidDelegate: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgLockAndSuperfluidDelegate;
    isSDK(o: any): o is MsgLockAndSuperfluidDelegateSDKType;
    isAmino(o: any): o is MsgLockAndSuperfluidDelegateAmino;
    encode(message: MsgLockAndSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate;
    fromAmino(object: MsgLockAndSuperfluidDelegateAmino): MsgLockAndSuperfluidDelegate;
    toAmino(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAmino;
    fromAminoMsg(object: MsgLockAndSuperfluidDelegateAminoMsg): MsgLockAndSuperfluidDelegate;
    toAminoMsg(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateAminoMsg;
    fromProtoMsg(message: MsgLockAndSuperfluidDelegateProtoMsg): MsgLockAndSuperfluidDelegate;
    toProto(message: MsgLockAndSuperfluidDelegate): Uint8Array;
    toProtoMsg(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateProtoMsg;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgLockAndSuperfluidDelegateResponse;
    isSDK(o: any): o is MsgLockAndSuperfluidDelegateResponseSDKType;
    isAmino(o: any): o is MsgLockAndSuperfluidDelegateResponseAmino;
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse;
    fromAmino(object: MsgLockAndSuperfluidDelegateResponseAmino): MsgLockAndSuperfluidDelegateResponse;
    toAmino(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAmino;
    fromAminoMsg(object: MsgLockAndSuperfluidDelegateResponseAminoMsg): MsgLockAndSuperfluidDelegateResponse;
    toAminoMsg(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgLockAndSuperfluidDelegateResponseProtoMsg): MsgLockAndSuperfluidDelegateResponse;
    toProto(message: MsgLockAndSuperfluidDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseProtoMsg;
};
export declare const MsgCreateFullRangePositionAndSuperfluidDelegate: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateFullRangePositionAndSuperfluidDelegate;
    isSDK(o: any): o is MsgCreateFullRangePositionAndSuperfluidDelegateSDKType;
    isAmino(o: any): o is MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
    encode(message: MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFullRangePositionAndSuperfluidDelegate;
    fromPartial(object: Partial<MsgCreateFullRangePositionAndSuperfluidDelegate>): MsgCreateFullRangePositionAndSuperfluidDelegate;
    fromAmino(object: MsgCreateFullRangePositionAndSuperfluidDelegateAmino): MsgCreateFullRangePositionAndSuperfluidDelegate;
    toAmino(message: MsgCreateFullRangePositionAndSuperfluidDelegate): MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
    fromAminoMsg(object: MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg): MsgCreateFullRangePositionAndSuperfluidDelegate;
    toAminoMsg(message: MsgCreateFullRangePositionAndSuperfluidDelegate): MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg;
    fromProtoMsg(message: MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg): MsgCreateFullRangePositionAndSuperfluidDelegate;
    toProto(message: MsgCreateFullRangePositionAndSuperfluidDelegate): Uint8Array;
    toProtoMsg(message: MsgCreateFullRangePositionAndSuperfluidDelegate): MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg;
};
export declare const MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    isSDK(o: any): o is MsgCreateFullRangePositionAndSuperfluidDelegateResponseSDKType;
    isAmino(o: any): o is MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
    encode(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    fromPartial(object: Partial<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    fromAmino(object: MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    toAmino(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse): MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
    fromAminoMsg(object: MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    toAminoMsg(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse): MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    toProto(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse): MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg;
};
export declare const MsgUnPoolWhitelistedPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnPoolWhitelistedPool;
    isSDK(o: any): o is MsgUnPoolWhitelistedPoolSDKType;
    isAmino(o: any): o is MsgUnPoolWhitelistedPoolAmino;
    encode(message: MsgUnPoolWhitelistedPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool;
    fromAmino(object: MsgUnPoolWhitelistedPoolAmino): MsgUnPoolWhitelistedPool;
    toAmino(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAmino;
    fromAminoMsg(object: MsgUnPoolWhitelistedPoolAminoMsg): MsgUnPoolWhitelistedPool;
    toAminoMsg(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolAminoMsg;
    fromProtoMsg(message: MsgUnPoolWhitelistedPoolProtoMsg): MsgUnPoolWhitelistedPool;
    toProto(message: MsgUnPoolWhitelistedPool): Uint8Array;
    toProtoMsg(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolProtoMsg;
};
export declare const MsgUnPoolWhitelistedPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnPoolWhitelistedPoolResponse;
    isSDK(o: any): o is MsgUnPoolWhitelistedPoolResponseSDKType;
    isAmino(o: any): o is MsgUnPoolWhitelistedPoolResponseAmino;
    encode(message: MsgUnPoolWhitelistedPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse;
    fromAmino(object: MsgUnPoolWhitelistedPoolResponseAmino): MsgUnPoolWhitelistedPoolResponse;
    toAmino(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAmino;
    fromAminoMsg(object: MsgUnPoolWhitelistedPoolResponseAminoMsg): MsgUnPoolWhitelistedPoolResponse;
    toAminoMsg(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseAminoMsg;
    fromProtoMsg(message: MsgUnPoolWhitelistedPoolResponseProtoMsg): MsgUnPoolWhitelistedPoolResponse;
    toProto(message: MsgUnPoolWhitelistedPoolResponse): Uint8Array;
    toProtoMsg(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseProtoMsg;
};
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    isSDK(o: any): o is MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionSDKType;
    isAmino(o: any): o is MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
    encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    fromPartial(object: Partial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    fromAmino(object: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    toAmino(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
    fromAminoMsg(object: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    toAminoMsg(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
    fromProtoMsg(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    toProto(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
    toProtoMsg(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
};
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    isSDK(o: any): o is MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseSDKType;
    isAmino(o: any): o is MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
    encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    fromPartial(object: Partial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    fromAmino(object: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    toAmino(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
    fromAminoMsg(object: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    toAminoMsg(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
    fromProtoMsg(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    toProto(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
    toProtoMsg(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
};
export declare const MsgAddToConcentratedLiquiditySuperfluidPosition: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgAddToConcentratedLiquiditySuperfluidPosition;
    isSDK(o: any): o is MsgAddToConcentratedLiquiditySuperfluidPositionSDKType;
    isAmino(o: any): o is MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
    encode(message: MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToConcentratedLiquiditySuperfluidPosition;
    fromPartial(object: Partial<MsgAddToConcentratedLiquiditySuperfluidPosition>): MsgAddToConcentratedLiquiditySuperfluidPosition;
    fromAmino(object: MsgAddToConcentratedLiquiditySuperfluidPositionAmino): MsgAddToConcentratedLiquiditySuperfluidPosition;
    toAmino(message: MsgAddToConcentratedLiquiditySuperfluidPosition): MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
    fromAminoMsg(object: MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg): MsgAddToConcentratedLiquiditySuperfluidPosition;
    toAminoMsg(message: MsgAddToConcentratedLiquiditySuperfluidPosition): MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg;
    fromProtoMsg(message: MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg): MsgAddToConcentratedLiquiditySuperfluidPosition;
    toProto(message: MsgAddToConcentratedLiquiditySuperfluidPosition): Uint8Array;
    toProtoMsg(message: MsgAddToConcentratedLiquiditySuperfluidPosition): MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg;
};
export declare const MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    isSDK(o: any): o is MsgAddToConcentratedLiquiditySuperfluidPositionResponseSDKType;
    isAmino(o: any): o is MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
    encode(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    fromPartial(object: Partial<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    fromAmino(object: MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    toAmino(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse): MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
    fromAminoMsg(object: MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    toAminoMsg(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse): MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg;
    fromProtoMsg(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    toProto(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse): Uint8Array;
    toProtoMsg(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse): MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg;
};
export declare const MsgUnbondConvertAndStake: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnbondConvertAndStake;
    isSDK(o: any): o is MsgUnbondConvertAndStakeSDKType;
    isAmino(o: any): o is MsgUnbondConvertAndStakeAmino;
    encode(message: MsgUnbondConvertAndStake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondConvertAndStake;
    fromPartial(object: Partial<MsgUnbondConvertAndStake>): MsgUnbondConvertAndStake;
    fromAmino(object: MsgUnbondConvertAndStakeAmino): MsgUnbondConvertAndStake;
    toAmino(message: MsgUnbondConvertAndStake): MsgUnbondConvertAndStakeAmino;
    fromAminoMsg(object: MsgUnbondConvertAndStakeAminoMsg): MsgUnbondConvertAndStake;
    toAminoMsg(message: MsgUnbondConvertAndStake): MsgUnbondConvertAndStakeAminoMsg;
    fromProtoMsg(message: MsgUnbondConvertAndStakeProtoMsg): MsgUnbondConvertAndStake;
    toProto(message: MsgUnbondConvertAndStake): Uint8Array;
    toProtoMsg(message: MsgUnbondConvertAndStake): MsgUnbondConvertAndStakeProtoMsg;
};
export declare const MsgUnbondConvertAndStakeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnbondConvertAndStakeResponse;
    isSDK(o: any): o is MsgUnbondConvertAndStakeResponseSDKType;
    isAmino(o: any): o is MsgUnbondConvertAndStakeResponseAmino;
    encode(message: MsgUnbondConvertAndStakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondConvertAndStakeResponse;
    fromPartial(object: Partial<MsgUnbondConvertAndStakeResponse>): MsgUnbondConvertAndStakeResponse;
    fromAmino(object: MsgUnbondConvertAndStakeResponseAmino): MsgUnbondConvertAndStakeResponse;
    toAmino(message: MsgUnbondConvertAndStakeResponse): MsgUnbondConvertAndStakeResponseAmino;
    fromAminoMsg(object: MsgUnbondConvertAndStakeResponseAminoMsg): MsgUnbondConvertAndStakeResponse;
    toAminoMsg(message: MsgUnbondConvertAndStakeResponse): MsgUnbondConvertAndStakeResponseAminoMsg;
    fromProtoMsg(message: MsgUnbondConvertAndStakeResponseProtoMsg): MsgUnbondConvertAndStakeResponse;
    toProto(message: MsgUnbondConvertAndStakeResponse): Uint8Array;
    toProtoMsg(message: MsgUnbondConvertAndStakeResponse): MsgUnbondConvertAndStakeResponseProtoMsg;
};
