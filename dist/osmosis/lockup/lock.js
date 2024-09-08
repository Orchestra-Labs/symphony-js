"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticLock = exports.QueryCondition = exports.PeriodLock = exports.LockQueryTypeAmino = exports.LockQueryTypeSDKType = exports.LockQueryType = void 0;
exports.lockQueryTypeFromJSON = lockQueryTypeFromJSON;
exports.lockQueryTypeToJSON = lockQueryTypeToJSON;
//@ts-nocheck
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
var LockQueryType;
(function (LockQueryType) {
    LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
    LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
    LockQueryType[LockQueryType["NoLock"] = 2] = "NoLock";
    LockQueryType[LockQueryType["ByGroup"] = 3] = "ByGroup";
    LockQueryType[LockQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LockQueryType || (exports.LockQueryType = LockQueryType = {}));
exports.LockQueryTypeSDKType = LockQueryType;
exports.LockQueryTypeAmino = LockQueryType;
function lockQueryTypeFromJSON(object) {
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
function lockQueryTypeToJSON(object) {
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
        duration: duration_1.Duration.fromPartial({}),
        endTime: new Date(),
        coins: [],
        rewardReceiverAddress: '',
    };
}
exports.PeriodLock = {
    typeUrl: '/osmosis.lockup.PeriodLock',
    aminoType: 'osmosis/lockup/period-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PeriodLock.typeUrl ||
                (typeof o.iD === 'bigint' &&
                    typeof o.owner === 'string' &&
                    duration_1.Duration.is(o.duration) &&
                    timestamp_1.Timestamp.is(o.endTime) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.is(o.coins[0])) &&
                    typeof o.rewardReceiverAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PeriodLock.typeUrl ||
                (typeof o.ID === 'bigint' &&
                    typeof o.owner === 'string' &&
                    duration_1.Duration.isSDK(o.duration) &&
                    timestamp_1.Timestamp.isSDK(o.end_time) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) &&
                    typeof o.reward_receiver_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PeriodLock.typeUrl ||
                (typeof o.ID === 'bigint' &&
                    typeof o.owner === 'string' &&
                    duration_1.Duration.isAmino(o.duration) &&
                    timestamp_1.Timestamp.isAmino(o.end_time) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) &&
                    typeof o.reward_receiver_address === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.rewardReceiverAddress !== '') {
            writer.uint32(50).string(message.rewardReceiverAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        message.endTime = object.endTime ?? undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
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
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
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
            ? duration_1.Duration.toAmino(message.duration)
            : undefined;
        obj.end_time = message.endTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime))
            : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
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
        return exports.PeriodLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/period-lock',
            value: exports.PeriodLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodLock.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.PeriodLock',
            value: exports.PeriodLock.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PeriodLock.typeUrl, exports.PeriodLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PeriodLock.aminoType, exports.PeriodLock.typeUrl);
function createBaseQueryCondition() {
    return {
        lockQueryType: 0,
        denom: '',
        duration: duration_1.Duration.fromPartial({}),
        timestamp: new Date(),
    };
}
exports.QueryCondition = {
    typeUrl: '/osmosis.lockup.QueryCondition',
    aminoType: 'osmosis/lockup/query-condition',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCondition.typeUrl ||
                ((0, helpers_1.isSet)(o.lockQueryType) &&
                    typeof o.denom === 'string' &&
                    duration_1.Duration.is(o.duration) &&
                    timestamp_1.Timestamp.is(o.timestamp))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCondition.typeUrl ||
                ((0, helpers_1.isSet)(o.lock_query_type) &&
                    typeof o.denom === 'string' &&
                    duration_1.Duration.isSDK(o.duration) &&
                    timestamp_1.Timestamp.isSDK(o.timestamp))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCondition.typeUrl ||
                ((0, helpers_1.isSet)(o.lock_query_type) &&
                    typeof o.denom === 'string' &&
                    duration_1.Duration.isAmino(o.duration) &&
                    timestamp_1.Timestamp.isAmino(o.timestamp))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockQueryType !== 0) {
            writer.uint32(8).int32(message.lockQueryType);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
                ? duration_1.Duration.fromPartial(object.duration)
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
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_query_type =
            message.lockQueryType === 0 ? undefined : message.lockQueryType;
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.duration = message.duration
            ? duration_1.Duration.toAmino(message.duration)
            : undefined;
        obj.timestamp = message.timestamp
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCondition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/query-condition',
            value: exports.QueryCondition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCondition.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCondition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.QueryCondition',
            value: exports.QueryCondition.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCondition.typeUrl, exports.QueryCondition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCondition.aminoType, exports.QueryCondition.typeUrl);
function createBaseSyntheticLock() {
    return {
        underlyingLockId: BigInt(0),
        synthDenom: '',
        endTime: new Date(),
        duration: duration_1.Duration.fromPartial({}),
    };
}
exports.SyntheticLock = {
    typeUrl: '/osmosis.lockup.SyntheticLock',
    aminoType: 'osmosis/lockup/synthetic-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SyntheticLock.typeUrl ||
                (typeof o.underlyingLockId === 'bigint' &&
                    typeof o.synthDenom === 'string' &&
                    timestamp_1.Timestamp.is(o.endTime) &&
                    duration_1.Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SyntheticLock.typeUrl ||
                (typeof o.underlying_lock_id === 'bigint' &&
                    typeof o.synth_denom === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.end_time) &&
                    duration_1.Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SyntheticLock.typeUrl ||
                (typeof o.underlying_lock_id === 'bigint' &&
                    typeof o.synth_denom === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.end_time) &&
                    duration_1.Duration.isAmino(o.duration))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.underlyingLockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.underlyingLockId);
        }
        if (message.synthDenom !== '') {
            writer.uint32(18).string(message.synthDenom);
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
                ? duration_1.Duration.fromPartial(object.duration)
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
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
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
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime))
            : undefined;
        obj.duration = message.duration
            ? duration_1.Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SyntheticLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/synthetic-lock',
            value: exports.SyntheticLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SyntheticLock.decode(message.value);
    },
    toProto(message) {
        return exports.SyntheticLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.SyntheticLock',
            value: exports.SyntheticLock.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SyntheticLock.typeUrl, exports.SyntheticLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SyntheticLock.aminoType, exports.SyntheticLock.typeUrl);
