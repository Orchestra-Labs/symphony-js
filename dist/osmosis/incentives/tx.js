"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.MsgAddToGaugeResponse = exports.MsgAddToGauge = exports.MsgCreateGaugeResponse = exports.MsgCreateGauge = void 0;
//@ts-nocheck
const lock_1 = require("../lockup/lock");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseMsgCreateGauge() {
    return {
        isPerpetual: false,
        owner: '',
        distributeTo: lock_1.QueryCondition.fromPartial({}),
        coins: [],
        startTime: new Date(),
        numEpochsPaidOver: BigInt(0),
        poolId: BigInt(0),
    };
}
exports.MsgCreateGauge = {
    typeUrl: '/osmosis.incentives.MsgCreateGauge',
    aminoType: 'osmosis/incentives/create-gauge',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGauge.typeUrl ||
                (typeof o.isPerpetual === 'boolean' &&
                    typeof o.owner === 'string' &&
                    lock_1.QueryCondition.is(o.distributeTo) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.is(o.coins[0])) &&
                    timestamp_1.Timestamp.is(o.startTime) &&
                    typeof o.numEpochsPaidOver === 'bigint' &&
                    typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGauge.typeUrl ||
                (typeof o.is_perpetual === 'boolean' &&
                    typeof o.owner === 'string' &&
                    lock_1.QueryCondition.isSDK(o.distribute_to) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) &&
                    timestamp_1.Timestamp.isSDK(o.start_time) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGauge.typeUrl ||
                (typeof o.is_perpetual === 'boolean' &&
                    typeof o.owner === 'string' &&
                    lock_1.QueryCondition.isAmino(o.distribute_to) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) &&
                    timestamp_1.Timestamp.isAmino(o.start_time) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isPerpetual === true) {
            writer.uint32(8).bool(message.isPerpetual);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.distributeTo !== undefined) {
            lock_1.QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(48).uint64(message.numEpochsPaidOver);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(56).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isPerpetual = reader.bool();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.distributeTo = lock_1.QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 7:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGauge();
        message.isPerpetual = object.isPerpetual ?? false;
        message.owner = object.owner ?? '';
        message.distributeTo =
            object.distributeTo !== undefined && object.distributeTo !== null
                ? lock_1.QueryCondition.fromPartial(object.distributeTo)
                : undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.startTime = object.startTime ?? undefined;
        message.numEpochsPaidOver =
            object.numEpochsPaidOver !== undefined &&
                object.numEpochsPaidOver !== null
                ? BigInt(object.numEpochsPaidOver.toString())
                : BigInt(0);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGauge();
        if (object.is_perpetual !== undefined && object.is_perpetual !== null) {
            message.isPerpetual = object.is_perpetual;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.distribute_to !== undefined && object.distribute_to !== null) {
            message.distributeTo = lock_1.QueryCondition.fromAmino(object.distribute_to);
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.num_epochs_paid_over !== undefined &&
            object.num_epochs_paid_over !== null) {
            message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_perpetual =
            message.isPerpetual === false ? undefined : message.isPerpetual;
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.distribute_to = message.distributeTo
            ? lock_1.QueryCondition.toAmino(message.distributeTo)
            : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        obj.num_epochs_paid_over =
            message.numEpochsPaidOver !== BigInt(0)
                ? message.numEpochsPaidOver.toString()
                : undefined;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-gauge',
            value: exports.MsgCreateGauge.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGauge.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGauge',
            value: exports.MsgCreateGauge.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGauge.typeUrl, exports.MsgCreateGauge);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGauge.aminoType, exports.MsgCreateGauge.typeUrl);
function createBaseMsgCreateGaugeResponse() {
    return {};
}
exports.MsgCreateGaugeResponse = {
    typeUrl: '/osmosis.incentives.MsgCreateGaugeResponse',
    aminoType: 'osmosis/incentives/create-gauge-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgCreateGaugeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreateGaugeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreateGaugeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGaugeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateGaugeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateGaugeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-gauge-response',
            value: exports.MsgCreateGaugeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGaugeResponse',
            value: exports.MsgCreateGaugeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGaugeResponse.typeUrl, exports.MsgCreateGaugeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGaugeResponse.aminoType, exports.MsgCreateGaugeResponse.typeUrl);
function createBaseMsgAddToGauge() {
    return {
        owner: '',
        gaugeId: BigInt(0),
        rewards: [],
    };
}
exports.MsgAddToGauge = {
    typeUrl: '/osmosis.incentives.MsgAddToGauge',
    aminoType: 'osmosis/incentives/add-to-gauge',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToGauge.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.gaugeId === 'bigint' &&
                    Array.isArray(o.rewards) &&
                    (!o.rewards.length || coin_1.Coin.is(o.rewards[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToGauge.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.gauge_id === 'bigint' &&
                    Array.isArray(o.rewards) &&
                    (!o.rewards.length || coin_1.Coin.isSDK(o.rewards[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToGauge.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.gauge_id === 'bigint' &&
                    Array.isArray(o.rewards) &&
                    (!o.rewards.length || coin_1.Coin.isAmino(o.rewards[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        for (const v of message.rewards) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.rewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToGauge();
        message.owner = object.owner ?? '';
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        message.rewards = object.rewards?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddToGauge();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        message.rewards = object.rewards?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.rewards = message.rewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/add-to-gauge',
            value: exports.MsgAddToGauge.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToGauge.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgAddToGauge',
            value: exports.MsgAddToGauge.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToGauge.typeUrl, exports.MsgAddToGauge);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToGauge.aminoType, exports.MsgAddToGauge.typeUrl);
function createBaseMsgAddToGaugeResponse() {
    return {};
}
exports.MsgAddToGaugeResponse = {
    typeUrl: '/osmosis.incentives.MsgAddToGaugeResponse',
    aminoType: 'osmosis/incentives/add-to-gauge-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgAddToGaugeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgAddToGaugeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgAddToGaugeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGaugeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgAddToGaugeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddToGaugeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/add-to-gauge-response',
            value: exports.MsgAddToGaugeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgAddToGaugeResponse',
            value: exports.MsgAddToGaugeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToGaugeResponse.typeUrl, exports.MsgAddToGaugeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToGaugeResponse.aminoType, exports.MsgAddToGaugeResponse.typeUrl);
function createBaseMsgCreateGroup() {
    return {
        coins: [],
        numEpochsPaidOver: BigInt(0),
        owner: '',
        poolIds: [],
    };
}
exports.MsgCreateGroup = {
    typeUrl: '/osmosis.incentives.MsgCreateGroup',
    aminoType: 'osmosis/incentives/create-group',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGroup.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.is(o.coins[0])) &&
                    typeof o.numEpochsPaidOver === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Array.isArray(o.poolIds) &&
                    (!o.poolIds.length || typeof o.poolIds[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGroup.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGroup.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(16).uint64(message.numEpochsPaidOver);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        writer.uint32(34).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.poolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.poolIds.push(reader.uint64());
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
        const message = createBaseMsgCreateGroup();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.numEpochsPaidOver =
            object.numEpochsPaidOver !== undefined &&
                object.numEpochsPaidOver !== null
                ? BigInt(object.numEpochsPaidOver.toString())
                : BigInt(0);
        message.owner = object.owner ?? '';
        message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroup();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.num_epochs_paid_over !== undefined &&
            object.num_epochs_paid_over !== null) {
            message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.num_epochs_paid_over =
            message.numEpochsPaidOver !== BigInt(0)
                ? message.numEpochsPaidOver.toString()
                : undefined;
        obj.owner = message.owner === '' ? undefined : message.owner;
        if (message.poolIds) {
            obj.pool_ids = message.poolIds.map(e => e.toString());
        }
        else {
            obj.pool_ids = message.poolIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-group',
            value: exports.MsgCreateGroup.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGroup',
            value: exports.MsgCreateGroup.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroup.typeUrl, exports.MsgCreateGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroup.aminoType, exports.MsgCreateGroup.typeUrl);
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: BigInt(0),
    };
}
exports.MsgCreateGroupResponse = {
    typeUrl: '/osmosis.incentives.MsgCreateGroupResponse',
    aminoType: 'osmosis/incentives/create-group-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGroupResponse.typeUrl ||
                typeof o.groupId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGroupResponse.typeUrl ||
                typeof o.group_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateGroupResponse.typeUrl ||
                typeof o.group_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? BigInt(object.groupId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id =
            message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-group-response',
            value: exports.MsgCreateGroupResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGroupResponse',
            value: exports.MsgCreateGroupResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroupResponse.typeUrl, exports.MsgCreateGroupResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroupResponse.aminoType, exports.MsgCreateGroupResponse.typeUrl);
