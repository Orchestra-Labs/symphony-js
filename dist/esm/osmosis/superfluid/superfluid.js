//@ts-nocheck
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { SyntheticLock, } from '../lockup/lock';
import { isSet } from '../../helpers';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
import { Decimal } from '@cosmjs/math';
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 */
export var SuperfluidAssetType;
(function (SuperfluidAssetType) {
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeNative"] = 0] = "SuperfluidAssetTypeNative";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeLPShare"] = 1] = "SuperfluidAssetTypeLPShare";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeConcentratedShare"] = 2] = "SuperfluidAssetTypeConcentratedShare";
    SuperfluidAssetType[SuperfluidAssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SuperfluidAssetType || (SuperfluidAssetType = {}));
export const SuperfluidAssetTypeSDKType = SuperfluidAssetType;
export const SuperfluidAssetTypeAmino = SuperfluidAssetType;
export function superfluidAssetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'SuperfluidAssetTypeNative':
            return SuperfluidAssetType.SuperfluidAssetTypeNative;
        case 1:
        case 'SuperfluidAssetTypeLPShare':
            return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
        case 2:
        case 'SuperfluidAssetTypeConcentratedShare':
            return SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SuperfluidAssetType.UNRECOGNIZED;
    }
}
export function superfluidAssetTypeToJSON(object) {
    switch (object) {
        case SuperfluidAssetType.SuperfluidAssetTypeNative:
            return 'SuperfluidAssetTypeNative';
        case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
            return 'SuperfluidAssetTypeLPShare';
        case SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare:
            return 'SuperfluidAssetTypeConcentratedShare';
        case SuperfluidAssetType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseSuperfluidAsset() {
    return {
        denom: '',
        assetType: 0,
    };
}
export const SuperfluidAsset = {
    typeUrl: '/osmosis.superfluid.SuperfluidAsset',
    aminoType: 'osmosis/superfluid-asset',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidAsset.typeUrl ||
                (typeof o.denom === 'string' && isSet(o.assetType))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidAsset.typeUrl ||
                (typeof o.denom === 'string' && isSet(o.asset_type))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidAsset.typeUrl ||
                (typeof o.denom === 'string' && isSet(o.asset_type))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.assetType !== 0) {
            writer.uint32(16).int32(message.assetType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.assetType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidAsset();
        message.denom = object.denom ?? '';
        message.assetType = object.assetType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidAsset();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.asset_type !== undefined && object.asset_type !== null) {
            message.assetType = object.asset_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.asset_type = message.assetType === 0 ? undefined : message.assetType;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-asset',
            value: SuperfluidAsset.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidAsset.decode(message.value);
    },
    toProto(message) {
        return SuperfluidAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidAsset',
            value: SuperfluidAsset.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidAsset.typeUrl, SuperfluidAsset);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidAsset.aminoType, SuperfluidAsset.typeUrl);
function createBaseSuperfluidIntermediaryAccount() {
    return {
        denom: '',
        valAddr: '',
        gaugeId: BigInt(0),
    };
}
export const SuperfluidIntermediaryAccount = {
    typeUrl: '/osmosis.superfluid.SuperfluidIntermediaryAccount',
    aminoType: 'osmosis/superfluid-intermediary-account',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidIntermediaryAccount.typeUrl ||
                (typeof o.denom === 'string' &&
                    typeof o.valAddr === 'string' &&
                    typeof o.gaugeId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidIntermediaryAccount.typeUrl ||
                (typeof o.denom === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.gauge_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidIntermediaryAccount.typeUrl ||
                (typeof o.denom === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.gauge_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.valAddr !== '') {
            writer.uint32(18).string(message.valAddr);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.valAddr = reader.string();
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        message.denom = object.denom ?? '';
        message.valAddr = object.valAddr ?? '';
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidIntermediaryAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-intermediary-account',
            value: SuperfluidIntermediaryAccount.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidIntermediaryAccount.decode(message.value);
    },
    toProto(message) {
        return SuperfluidIntermediaryAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidIntermediaryAccount',
            value: SuperfluidIntermediaryAccount.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidIntermediaryAccount.typeUrl, SuperfluidIntermediaryAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidIntermediaryAccount.aminoType, SuperfluidIntermediaryAccount.typeUrl);
function createBaseOsmoEquivalentMultiplierRecord() {
    return {
        epochNumber: BigInt(0),
        denom: '',
        multiplier: '',
    };
}
export const OsmoEquivalentMultiplierRecord = {
    typeUrl: '/osmosis.superfluid.OsmoEquivalentMultiplierRecord',
    aminoType: 'osmosis/osmo-equivalent-multiplier-record',
    is(o) {
        return (o &&
            (o.$typeUrl === OsmoEquivalentMultiplierRecord.typeUrl ||
                (typeof o.epochNumber === 'bigint' &&
                    typeof o.denom === 'string' &&
                    typeof o.multiplier === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === OsmoEquivalentMultiplierRecord.typeUrl ||
                (typeof o.epoch_number === 'bigint' &&
                    typeof o.denom === 'string' &&
                    typeof o.multiplier === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === OsmoEquivalentMultiplierRecord.typeUrl ||
                (typeof o.epoch_number === 'bigint' &&
                    typeof o.denom === 'string' &&
                    typeof o.multiplier === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.epochNumber !== BigInt(0)) {
            writer.uint32(8).int64(message.epochNumber);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.multiplier !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.multiplier, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOsmoEquivalentMultiplierRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochNumber = reader.int64();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        message.epochNumber =
            object.epochNumber !== undefined && object.epochNumber !== null
                ? BigInt(object.epochNumber.toString())
                : BigInt(0);
        message.denom = object.denom ?? '';
        message.multiplier = object.multiplier ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        if (object.epoch_number !== undefined && object.epoch_number !== null) {
            message.epochNumber = BigInt(object.epoch_number);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = object.multiplier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_number =
            message.epochNumber !== BigInt(0)
                ? message.epochNumber.toString()
                : undefined;
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.multiplier = message.multiplier === '' ? undefined : message.multiplier;
        return obj;
    },
    fromAminoMsg(object) {
        return OsmoEquivalentMultiplierRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/osmo-equivalent-multiplier-record',
            value: OsmoEquivalentMultiplierRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return OsmoEquivalentMultiplierRecord.decode(message.value);
    },
    toProto(message) {
        return OsmoEquivalentMultiplierRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.OsmoEquivalentMultiplierRecord',
            value: OsmoEquivalentMultiplierRecord.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(OsmoEquivalentMultiplierRecord.typeUrl, OsmoEquivalentMultiplierRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(OsmoEquivalentMultiplierRecord.aminoType, OsmoEquivalentMultiplierRecord.typeUrl);
function createBaseSuperfluidDelegationRecord() {
    return {
        delegatorAddress: '',
        validatorAddress: '',
        delegationAmount: Coin.fromPartial({}),
        equivalentStakedAmount: undefined,
    };
}
export const SuperfluidDelegationRecord = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationRecord',
    aminoType: 'osmosis/superfluid-delegation-record',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationRecord.typeUrl ||
                (typeof o.delegatorAddress === 'string' &&
                    typeof o.validatorAddress === 'string' &&
                    Coin.is(o.delegationAmount))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationRecord.typeUrl ||
                (typeof o.delegator_address === 'string' &&
                    typeof o.validator_address === 'string' &&
                    Coin.isSDK(o.delegation_amount))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationRecord.typeUrl ||
                (typeof o.delegator_address === 'string' &&
                    typeof o.validator_address === 'string' &&
                    Coin.isAmino(o.delegation_amount))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.delegationAmount !== undefined) {
            Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.equivalentStakedAmount !== undefined) {
            Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.delegationAmount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.equivalentStakedAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationRecord();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        message.delegationAmount =
            object.delegationAmount !== undefined && object.delegationAmount !== null
                ? Coin.fromPartial(object.delegationAmount)
                : undefined;
        message.equivalentStakedAmount =
            object.equivalentStakedAmount !== undefined &&
                object.equivalentStakedAmount !== null
                ? Coin.fromPartial(object.equivalentStakedAmount)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationRecord();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.delegation_amount !== undefined &&
            object.delegation_amount !== null) {
            message.delegationAmount = Coin.fromAmino(object.delegation_amount);
        }
        if (object.equivalent_staked_amount !== undefined &&
            object.equivalent_staked_amount !== null) {
            message.equivalentStakedAmount = Coin.fromAmino(object.equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        obj.validator_address =
            message.validatorAddress === '' ? undefined : message.validatorAddress;
        obj.delegation_amount = message.delegationAmount
            ? Coin.toAmino(message.delegationAmount)
            : undefined;
        obj.equivalent_staked_amount = message.equivalentStakedAmount
            ? Coin.toAmino(message.equivalentStakedAmount)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegation-record',
            value: SuperfluidDelegationRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationRecord.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationRecord',
            value: SuperfluidDelegationRecord.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationRecord.typeUrl, SuperfluidDelegationRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationRecord.aminoType, SuperfluidDelegationRecord.typeUrl);
function createBaseLockIdIntermediaryAccountConnection() {
    return {
        lockId: BigInt(0),
        intermediaryAccount: '',
    };
}
export const LockIdIntermediaryAccountConnection = {
    typeUrl: '/osmosis.superfluid.LockIdIntermediaryAccountConnection',
    aminoType: 'osmosis/lock-id-intermediary-account-connection',
    is(o) {
        return (o &&
            (o.$typeUrl === LockIdIntermediaryAccountConnection.typeUrl ||
                (typeof o.lockId === 'bigint' &&
                    typeof o.intermediaryAccount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockIdIntermediaryAccountConnection.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    typeof o.intermediary_account === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockIdIntermediaryAccountConnection.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    typeof o.intermediary_account === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        if (message.intermediaryAccount !== '') {
            writer.uint32(18).string(message.intermediaryAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockIdIntermediaryAccountConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                case 2:
                    message.intermediaryAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.intermediaryAccount = object.intermediaryAccount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.intermediary_account !== undefined &&
            object.intermediary_account !== null) {
            message.intermediaryAccount = object.intermediary_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.intermediary_account =
            message.intermediaryAccount === ''
                ? undefined
                : message.intermediaryAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return LockIdIntermediaryAccountConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lock-id-intermediary-account-connection',
            value: LockIdIntermediaryAccountConnection.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockIdIntermediaryAccountConnection.decode(message.value);
    },
    toProto(message) {
        return LockIdIntermediaryAccountConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.LockIdIntermediaryAccountConnection',
            value: LockIdIntermediaryAccountConnection.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockIdIntermediaryAccountConnection.typeUrl, LockIdIntermediaryAccountConnection);
GlobalDecoderRegistry.registerAminoProtoMapping(LockIdIntermediaryAccountConnection.aminoType, LockIdIntermediaryAccountConnection.typeUrl);
function createBaseUnpoolWhitelistedPools() {
    return {
        ids: [],
    };
}
export const UnpoolWhitelistedPools = {
    typeUrl: '/osmosis.superfluid.UnpoolWhitelistedPools',
    aminoType: 'osmosis/unpool-whitelisted-pools',
    is(o) {
        return (o &&
            (o.$typeUrl === UnpoolWhitelistedPools.typeUrl ||
                (Array.isArray(o.ids) &&
                    (!o.ids.length || typeof o.ids[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UnpoolWhitelistedPools.typeUrl ||
                (Array.isArray(o.ids) &&
                    (!o.ids.length || typeof o.ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UnpoolWhitelistedPools.typeUrl ||
                (Array.isArray(o.ids) &&
                    (!o.ids.length || typeof o.ids[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpoolWhitelistedPools();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = message.ids;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnpoolWhitelistedPools.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unpool-whitelisted-pools',
            value: UnpoolWhitelistedPools.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UnpoolWhitelistedPools.decode(message.value);
    },
    toProto(message) {
        return UnpoolWhitelistedPools.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.UnpoolWhitelistedPools',
            value: UnpoolWhitelistedPools.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UnpoolWhitelistedPools.typeUrl, UnpoolWhitelistedPools);
GlobalDecoderRegistry.registerAminoProtoMapping(UnpoolWhitelistedPools.aminoType, UnpoolWhitelistedPools.typeUrl);
function createBaseConcentratedPoolUserPositionRecord() {
    return {
        validatorAddress: '',
        positionId: BigInt(0),
        lockId: BigInt(0),
        syntheticLock: SyntheticLock.fromPartial({}),
        delegationAmount: Coin.fromPartial({}),
        equivalentStakedAmount: undefined,
    };
}
export const ConcentratedPoolUserPositionRecord = {
    typeUrl: '/osmosis.superfluid.ConcentratedPoolUserPositionRecord',
    aminoType: 'osmosis/concentrated-pool-user-position-record',
    is(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolUserPositionRecord.typeUrl ||
                (typeof o.validatorAddress === 'string' &&
                    typeof o.positionId === 'bigint' &&
                    typeof o.lockId === 'bigint' &&
                    SyntheticLock.is(o.syntheticLock) &&
                    Coin.is(o.delegationAmount))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolUserPositionRecord.typeUrl ||
                (typeof o.validator_address === 'string' &&
                    typeof o.position_id === 'bigint' &&
                    typeof o.lock_id === 'bigint' &&
                    SyntheticLock.isSDK(o.synthetic_lock) &&
                    Coin.isSDK(o.delegation_amount))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolUserPositionRecord.typeUrl ||
                (typeof o.validator_address === 'string' &&
                    typeof o.position_id === 'bigint' &&
                    typeof o.lock_id === 'bigint' &&
                    SyntheticLock.isAmino(o.synthetic_lock) &&
                    Coin.isAmino(o.delegation_amount))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.positionId !== BigInt(0)) {
            writer.uint32(16).uint64(message.positionId);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(24).uint64(message.lockId);
        }
        if (message.syntheticLock !== undefined) {
            SyntheticLock.encode(message.syntheticLock, writer.uint32(34).fork()).ldelim();
        }
        if (message.delegationAmount !== undefined) {
            Coin.encode(message.delegationAmount, writer.uint32(42).fork()).ldelim();
        }
        if (message.equivalentStakedAmount !== undefined) {
            Coin.encode(message.equivalentStakedAmount, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConcentratedPoolUserPositionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.positionId = reader.uint64();
                    break;
                case 3:
                    message.lockId = reader.uint64();
                    break;
                case 4:
                    message.syntheticLock = SyntheticLock.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delegationAmount = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.equivalentStakedAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConcentratedPoolUserPositionRecord();
        message.validatorAddress = object.validatorAddress ?? '';
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.syntheticLock =
            object.syntheticLock !== undefined && object.syntheticLock !== null
                ? SyntheticLock.fromPartial(object.syntheticLock)
                : undefined;
        message.delegationAmount =
            object.delegationAmount !== undefined && object.delegationAmount !== null
                ? Coin.fromPartial(object.delegationAmount)
                : undefined;
        message.equivalentStakedAmount =
            object.equivalentStakedAmount !== undefined &&
                object.equivalentStakedAmount !== null
                ? Coin.fromPartial(object.equivalentStakedAmount)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConcentratedPoolUserPositionRecord();
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.synthetic_lock !== undefined && object.synthetic_lock !== null) {
            message.syntheticLock = SyntheticLock.fromAmino(object.synthetic_lock);
        }
        if (object.delegation_amount !== undefined &&
            object.delegation_amount !== null) {
            message.delegationAmount = Coin.fromAmino(object.delegation_amount);
        }
        if (object.equivalent_staked_amount !== undefined &&
            object.equivalent_staked_amount !== null) {
            message.equivalentStakedAmount = Coin.fromAmino(object.equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address =
            message.validatorAddress === '' ? undefined : message.validatorAddress;
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.synthetic_lock = message.syntheticLock
            ? SyntheticLock.toAmino(message.syntheticLock)
            : undefined;
        obj.delegation_amount = message.delegationAmount
            ? Coin.toAmino(message.delegationAmount)
            : undefined;
        obj.equivalent_staked_amount = message.equivalentStakedAmount
            ? Coin.toAmino(message.equivalentStakedAmount)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConcentratedPoolUserPositionRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentrated-pool-user-position-record',
            value: ConcentratedPoolUserPositionRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConcentratedPoolUserPositionRecord.decode(message.value);
    },
    toProto(message) {
        return ConcentratedPoolUserPositionRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.ConcentratedPoolUserPositionRecord',
            value: ConcentratedPoolUserPositionRecord.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConcentratedPoolUserPositionRecord.typeUrl, ConcentratedPoolUserPositionRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(ConcentratedPoolUserPositionRecord.aminoType, ConcentratedPoolUserPositionRecord.typeUrl);
