//@ts-nocheck
import { Duration, } from '../../google/protobuf/duration';
import { Timestamp } from '../../google/protobuf/timestamp';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../binary';
import { toTimestamp, fromTimestamp, isSet } from '../../helpers';
import { GlobalDecoderRegistry } from '../../registry';
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export var LockQueryType;
(function (LockQueryType) {
    LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
    LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
    LockQueryType[LockQueryType["NoLock"] = 2] = "NoLock";
    LockQueryType[LockQueryType["ByGroup"] = 3] = "ByGroup";
    LockQueryType[LockQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LockQueryType || (LockQueryType = {}));
export const LockQueryTypeSDKType = LockQueryType;
export const LockQueryTypeAmino = LockQueryType;
export function lockQueryTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'ByDuration':
            return LockQueryType.ByDuration;
        case 1:
        case 'ByTime':
            return LockQueryType.ByTime;
        case 2:
        case 'NoLock':
            return LockQueryType.NoLock;
        case 3:
        case 'ByGroup':
            return LockQueryType.ByGroup;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LockQueryType.UNRECOGNIZED;
    }
}
export function lockQueryTypeToJSON(object) {
    switch (object) {
        case LockQueryType.ByDuration:
            return 'ByDuration';
        case LockQueryType.ByTime:
            return 'ByTime';
        case LockQueryType.NoLock:
            return 'NoLock';
        case LockQueryType.ByGroup:
            return 'ByGroup';
        case LockQueryType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBasePeriodLock() {
    return {
        iD: BigInt(0),
        owner: '',
        duration: Duration.fromPartial({}),
        endTime: new Date(),
        coins: [],
        rewardReceiverAddress: '',
    };
}
export const PeriodLock = {
    typeUrl: '/osmosis.lockup.PeriodLock',
    aminoType: 'osmosis/lockup/period-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === PeriodLock.typeUrl ||
                (typeof o.iD === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Duration.is(o.duration) &&
                    Timestamp.is(o.endTime) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])) &&
                    typeof o.rewardReceiverAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PeriodLock.typeUrl ||
                (typeof o.ID === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Duration.isSDK(o.duration) &&
                    Timestamp.isSDK(o.end_time) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])) &&
                    typeof o.reward_receiver_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PeriodLock.typeUrl ||
                (typeof o.ID === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Duration.isAmino(o.duration) &&
                    Timestamp.isAmino(o.end_time) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])) &&
                    typeof o.reward_receiver_address === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.rewardReceiverAddress !== '') {
            writer.uint32(50).string(message.rewardReceiverAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iD = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.rewardReceiverAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeriodLock();
        message.iD =
            object.iD !== undefined && object.iD !== null
                ? BigInt(object.iD.toString())
                : BigInt(0);
        message.owner = object.owner ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.endTime = object.endTime ?? undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        message.rewardReceiverAddress = object.rewardReceiverAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriodLock();
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.reward_receiver_address !== undefined &&
            object.reward_receiver_address !== null) {
            message.rewardReceiverAddress = object.reward_receiver_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.iD !== BigInt(0) ? message.iD.toString() : undefined;
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        obj.end_time = message.endTime
            ? Timestamp.toAmino(toTimestamp(message.endTime))
            : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.reward_receiver_address =
            message.rewardReceiverAddress === ''
                ? undefined
                : message.rewardReceiverAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return PeriodLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/period-lock',
            value: PeriodLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PeriodLock.decode(message.value);
    },
    toProto(message) {
        return PeriodLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.PeriodLock',
            value: PeriodLock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PeriodLock.typeUrl, PeriodLock);
GlobalDecoderRegistry.registerAminoProtoMapping(PeriodLock.aminoType, PeriodLock.typeUrl);
function createBaseQueryCondition() {
    return {
        lockQueryType: 0,
        denom: '',
        duration: Duration.fromPartial({}),
        timestamp: new Date(),
    };
}
export const QueryCondition = {
    typeUrl: '/osmosis.lockup.QueryCondition',
    aminoType: 'osmosis/lockup/query-condition',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCondition.typeUrl ||
                (isSet(o.lockQueryType) &&
                    typeof o.denom === 'string' &&
                    Duration.is(o.duration) &&
                    Timestamp.is(o.timestamp))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCondition.typeUrl ||
                (isSet(o.lock_query_type) &&
                    typeof o.denom === 'string' &&
                    Duration.isSDK(o.duration) &&
                    Timestamp.isSDK(o.timestamp))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCondition.typeUrl ||
                (isSet(o.lock_query_type) &&
                    typeof o.denom === 'string' &&
                    Duration.isAmino(o.duration) &&
                    Timestamp.isAmino(o.timestamp))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lockQueryType !== 0) {
            writer.uint32(8).int32(message.lockQueryType);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockQueryType = reader.int32();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCondition();
        message.lockQueryType = object.lockQueryType ?? 0;
        message.denom = object.denom ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCondition();
        if (object.lock_query_type !== undefined &&
            object.lock_query_type !== null) {
            message.lockQueryType = object.lock_query_type;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_query_type =
            message.lockQueryType === 0 ? undefined : message.lockQueryType;
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        obj.timestamp = message.timestamp
            ? Timestamp.toAmino(toTimestamp(message.timestamp))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCondition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/query-condition',
            value: QueryCondition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCondition.decode(message.value);
    },
    toProto(message) {
        return QueryCondition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.QueryCondition',
            value: QueryCondition.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCondition.typeUrl, QueryCondition);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCondition.aminoType, QueryCondition.typeUrl);
function createBaseSyntheticLock() {
    return {
        underlyingLockId: BigInt(0),
        synthDenom: '',
        endTime: new Date(),
        duration: Duration.fromPartial({}),
    };
}
export const SyntheticLock = {
    typeUrl: '/osmosis.lockup.SyntheticLock',
    aminoType: 'osmosis/lockup/synthetic-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === SyntheticLock.typeUrl ||
                (typeof o.underlyingLockId === 'bigint' &&
                    typeof o.synthDenom === 'string' &&
                    Timestamp.is(o.endTime) &&
                    Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SyntheticLock.typeUrl ||
                (typeof o.underlying_lock_id === 'bigint' &&
                    typeof o.synth_denom === 'string' &&
                    Timestamp.isSDK(o.end_time) &&
                    Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SyntheticLock.typeUrl ||
                (typeof o.underlying_lock_id === 'bigint' &&
                    typeof o.synth_denom === 'string' &&
                    Timestamp.isAmino(o.end_time) &&
                    Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.underlyingLockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.underlyingLockId);
        }
        if (message.synthDenom !== '') {
            writer.uint32(18).string(message.synthDenom);
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.underlyingLockId = reader.uint64();
                    break;
                case 2:
                    message.synthDenom = reader.string();
                    break;
                case 3:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLock();
        message.underlyingLockId =
            object.underlyingLockId !== undefined && object.underlyingLockId !== null
                ? BigInt(object.underlyingLockId.toString())
                : BigInt(0);
        message.synthDenom = object.synthDenom ?? '';
        message.endTime = object.endTime ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLock();
        if (object.underlying_lock_id !== undefined &&
            object.underlying_lock_id !== null) {
            message.underlyingLockId = BigInt(object.underlying_lock_id);
        }
        if (object.synth_denom !== undefined && object.synth_denom !== null) {
            message.synthDenom = object.synth_denom;
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.underlying_lock_id =
            message.underlyingLockId !== BigInt(0)
                ? message.underlyingLockId.toString()
                : undefined;
        obj.synth_denom =
            message.synthDenom === '' ? undefined : message.synthDenom;
        obj.end_time = message.endTime
            ? Timestamp.toAmino(toTimestamp(message.endTime))
            : undefined;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SyntheticLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/synthetic-lock',
            value: SyntheticLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SyntheticLock.decode(message.value);
    },
    toProto(message) {
        return SyntheticLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.SyntheticLock',
            value: SyntheticLock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SyntheticLock.typeUrl, SyntheticLock);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLock.aminoType, SyntheticLock.typeUrl);
