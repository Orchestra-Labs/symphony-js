//@ts-nocheck
import { QueryCondition, } from '../lockup/lock';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';
import { BinaryReader, BinaryWriter } from '../../binary';
import { toTimestamp, fromTimestamp } from '../../helpers';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseMsgCreateGauge() {
    return {
        isPerpetual: false,
        owner: '',
        distributeTo: QueryCondition.fromPartial({}),
        coins: [],
        startTime: new Date(),
        numEpochsPaidOver: BigInt(0),
        poolId: BigInt(0),
    };
}
export const MsgCreateGauge = {
    typeUrl: '/osmosis.incentives.MsgCreateGauge',
    aminoType: 'osmosis/incentives/create-gauge',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGauge.typeUrl ||
                (typeof o.isPerpetual === 'boolean' &&
                    typeof o.owner === 'string' &&
                    QueryCondition.is(o.distributeTo) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])) &&
                    Timestamp.is(o.startTime) &&
                    typeof o.numEpochsPaidOver === 'bigint' &&
                    typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGauge.typeUrl ||
                (typeof o.is_perpetual === 'boolean' &&
                    typeof o.owner === 'string' &&
                    QueryCondition.isSDK(o.distribute_to) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])) &&
                    Timestamp.isSDK(o.start_time) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGauge.typeUrl ||
                (typeof o.is_perpetual === 'boolean' &&
                    typeof o.owner === 'string' &&
                    QueryCondition.isAmino(o.distribute_to) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])) &&
                    Timestamp.isAmino(o.start_time) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.isPerpetual === true) {
            writer.uint32(8).bool(message.isPerpetual);
        }
        if (message.owner !== '') {
            writer.uint32(18).string(message.owner);
        }
        if (message.distributeTo !== undefined) {
            QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.distributeTo = QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
                ? QueryCondition.fromPartial(object.distributeTo)
                : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
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
            message.distributeTo = QueryCondition.fromAmino(object.distribute_to);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
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
            ? QueryCondition.toAmino(message.distributeTo)
            : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.start_time = message.startTime
            ? Timestamp.toAmino(toTimestamp(message.startTime))
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
        return MsgCreateGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-gauge',
            value: MsgCreateGauge.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGauge.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGauge',
            value: MsgCreateGauge.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateGauge.typeUrl, MsgCreateGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGauge.aminoType, MsgCreateGauge.typeUrl);
function createBaseMsgCreateGaugeResponse() {
    return {};
}
export const MsgCreateGaugeResponse = {
    typeUrl: '/osmosis.incentives.MsgCreateGaugeResponse',
    aminoType: 'osmosis/incentives/create-gauge-response',
    is(o) {
        return o && o.$typeUrl === MsgCreateGaugeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgCreateGaugeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgCreateGaugeResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-gauge-response',
            value: MsgCreateGaugeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGaugeResponse',
            value: MsgCreateGaugeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateGaugeResponse.typeUrl, MsgCreateGaugeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGaugeResponse.aminoType, MsgCreateGaugeResponse.typeUrl);
function createBaseMsgAddToGauge() {
    return {
        owner: '',
        gaugeId: BigInt(0),
        rewards: [],
    };
}
export const MsgAddToGauge = {
    typeUrl: '/osmosis.incentives.MsgAddToGauge',
    aminoType: 'osmosis/incentives/add-to-gauge',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgAddToGauge.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.gaugeId === 'bigint' &&
                    Array.isArray(o.rewards) &&
                    (!o.rewards.length || Coin.is(o.rewards[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgAddToGauge.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.gauge_id === 'bigint' &&
                    Array.isArray(o.rewards) &&
                    (!o.rewards.length || Coin.isSDK(o.rewards[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgAddToGauge.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.gauge_id === 'bigint' &&
                    Array.isArray(o.rewards) &&
                    (!o.rewards.length || Coin.isAmino(o.rewards[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        for (const v of message.rewards) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.rewards.push(Coin.decode(reader, reader.uint32()));
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
        message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
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
        message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.rewards = message.rewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/add-to-gauge',
            value: MsgAddToGauge.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgAddToGauge.decode(message.value);
    },
    toProto(message) {
        return MsgAddToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgAddToGauge',
            value: MsgAddToGauge.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgAddToGauge.typeUrl, MsgAddToGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddToGauge.aminoType, MsgAddToGauge.typeUrl);
function createBaseMsgAddToGaugeResponse() {
    return {};
}
export const MsgAddToGaugeResponse = {
    typeUrl: '/osmosis.incentives.MsgAddToGaugeResponse',
    aminoType: 'osmosis/incentives/add-to-gauge-response',
    is(o) {
        return o && o.$typeUrl === MsgAddToGaugeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgAddToGaugeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgAddToGaugeResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgAddToGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/add-to-gauge-response',
            value: MsgAddToGaugeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgAddToGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddToGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgAddToGaugeResponse',
            value: MsgAddToGaugeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgAddToGaugeResponse.typeUrl, MsgAddToGaugeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddToGaugeResponse.aminoType, MsgAddToGaugeResponse.typeUrl);
function createBaseMsgCreateGroup() {
    return {
        coins: [],
        numEpochsPaidOver: BigInt(0),
        owner: '',
        poolIds: [],
    };
}
export const MsgCreateGroup = {
    typeUrl: '/osmosis.incentives.MsgCreateGroup',
    aminoType: 'osmosis/incentives/create-group',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGroup.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])) &&
                    typeof o.numEpochsPaidOver === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Array.isArray(o.poolIds) &&
                    (!o.poolIds.length || typeof o.poolIds[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGroup.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGroup.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])) &&
                    typeof o.num_epochs_paid_over === 'bigint' &&
                    typeof o.owner === 'string' &&
                    Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
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
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
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
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
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
        return MsgCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-group',
            value: MsgCreateGroup.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGroup',
            value: MsgCreateGroup.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateGroup.typeUrl, MsgCreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroup.aminoType, MsgCreateGroup.typeUrl);
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: BigInt(0),
    };
}
export const MsgCreateGroupResponse = {
    typeUrl: '/osmosis.incentives.MsgCreateGroupResponse',
    aminoType: 'osmosis/incentives/create-group-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGroupResponse.typeUrl ||
                typeof o.groupId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGroupResponse.typeUrl ||
                typeof o.group_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateGroupResponse.typeUrl ||
                typeof o.group_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-group-response',
            value: MsgCreateGroupResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.MsgCreateGroupResponse',
            value: MsgCreateGroupResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateGroupResponse.typeUrl, MsgCreateGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupResponse.aminoType, MsgCreateGroupResponse.typeUrl);
