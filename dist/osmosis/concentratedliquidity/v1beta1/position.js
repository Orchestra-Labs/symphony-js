"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionWithPeriodLock = exports.FullPositionBreakdown = exports.Position = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const lock_1 = require("../../lockup/lock");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBasePosition() {
    return {
        positionId: BigInt(0),
        address: '',
        poolId: BigInt(0),
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
        joinTime: new Date(),
        liquidity: '',
    };
}
exports.Position = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.Position',
    aminoType: 'osmosis/concentratedliquidity/position',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Position.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.address === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.lowerTick === 'bigint' &&
                    typeof o.upperTick === 'bigint' &&
                    timestamp_1.Timestamp.is(o.joinTime) &&
                    typeof o.liquidity === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Position.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.address === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint' &&
                    timestamp_1.Timestamp.isSDK(o.join_time) &&
                    typeof o.liquidity === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Position.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.address === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint' &&
                    timestamp_1.Timestamp.isAmino(o.join_time) &&
                    typeof o.liquidity === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(32).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(40).int64(message.upperTick);
        }
        if (message.joinTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.joinTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.liquidity !== '') {
            writer
                .uint32(58)
                .string(math_1.Decimal.fromUserInput(message.liquidity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.lowerTick = reader.int64();
                    break;
                case 5:
                    message.upperTick = reader.int64();
                    break;
                case 6:
                    message.joinTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.liquidity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePosition();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.address = object.address ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.lowerTick =
            object.lowerTick !== undefined && object.lowerTick !== null
                ? BigInt(object.lowerTick.toString())
                : BigInt(0);
        message.upperTick =
            object.upperTick !== undefined && object.upperTick !== null
                ? BigInt(object.upperTick.toString())
                : BigInt(0);
        message.joinTime = object.joinTime ?? undefined;
        message.liquidity = object.liquidity ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBasePosition();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.lower_tick !== undefined && object.lower_tick !== null) {
            message.lowerTick = BigInt(object.lower_tick);
        }
        if (object.upper_tick !== undefined && object.upper_tick !== null) {
            message.upperTick = BigInt(object.upper_tick);
        }
        if (object.join_time !== undefined && object.join_time !== null) {
            message.joinTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.join_time));
        }
        if (object.liquidity !== undefined && object.liquidity !== null) {
            message.liquidity = object.liquidity;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.address = message.address === '' ? undefined : message.address;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.lower_tick =
            message.lowerTick !== BigInt(0)
                ? message.lowerTick.toString()
                : undefined;
        obj.upper_tick =
            message.upperTick !== BigInt(0)
                ? message.upperTick.toString()
                : undefined;
        obj.join_time = message.joinTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.joinTime))
            : undefined;
        obj.liquidity = message.liquidity === '' ? undefined : message.liquidity;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Position.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position',
            value: exports.Position.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Position.decode(message.value);
    },
    toProto(message) {
        return exports.Position.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.Position',
            value: exports.Position.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Position.typeUrl, exports.Position);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Position.aminoType, exports.Position.typeUrl);
function createBaseFullPositionBreakdown() {
    return {
        position: exports.Position.fromPartial({}),
        asset0: coin_1.Coin.fromPartial({}),
        asset1: coin_1.Coin.fromPartial({}),
        claimableSpreadRewards: [],
        claimableIncentives: [],
        forfeitedIncentives: [],
    };
}
exports.FullPositionBreakdown = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown',
    aminoType: 'osmosis/concentratedliquidity/full-position-breakdown',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.FullPositionBreakdown.typeUrl ||
                (exports.Position.is(o.position) &&
                    coin_1.Coin.is(o.asset0) &&
                    coin_1.Coin.is(o.asset1) &&
                    Array.isArray(o.claimableSpreadRewards) &&
                    (!o.claimableSpreadRewards.length ||
                        coin_1.Coin.is(o.claimableSpreadRewards[0])) &&
                    Array.isArray(o.claimableIncentives) &&
                    (!o.claimableIncentives.length ||
                        coin_1.Coin.is(o.claimableIncentives[0])) &&
                    Array.isArray(o.forfeitedIncentives) &&
                    (!o.forfeitedIncentives.length || coin_1.Coin.is(o.forfeitedIncentives[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.FullPositionBreakdown.typeUrl ||
                (exports.Position.isSDK(o.position) &&
                    coin_1.Coin.isSDK(o.asset0) &&
                    coin_1.Coin.isSDK(o.asset1) &&
                    Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        coin_1.Coin.isSDK(o.claimable_spread_rewards[0])) &&
                    Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        coin_1.Coin.isSDK(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        coin_1.Coin.isSDK(o.forfeited_incentives[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.FullPositionBreakdown.typeUrl ||
                (exports.Position.isAmino(o.position) &&
                    coin_1.Coin.isAmino(o.asset0) &&
                    coin_1.Coin.isAmino(o.asset1) &&
                    Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        coin_1.Coin.isAmino(o.claimable_spread_rewards[0])) &&
                    Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        coin_1.Coin.isAmino(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        coin_1.Coin.isAmino(o.forfeited_incentives[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            exports.Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.asset0 !== undefined) {
            coin_1.Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
        }
        if (message.asset1 !== undefined) {
            coin_1.Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.claimableSpreadRewards) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.claimableIncentives) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullPositionBreakdown();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = exports.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.asset0 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.asset1 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimableSpreadRewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.claimableIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.forfeitedIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFullPositionBreakdown();
        message.position =
            object.position !== undefined && object.position !== null
                ? exports.Position.fromPartial(object.position)
                : undefined;
        message.asset0 =
            object.asset0 !== undefined && object.asset0 !== null
                ? coin_1.Coin.fromPartial(object.asset0)
                : undefined;
        message.asset1 =
            object.asset1 !== undefined && object.asset1 !== null
                ? coin_1.Coin.fromPartial(object.asset1)
                : undefined;
        message.claimableSpreadRewards =
            object.claimableSpreadRewards?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.claimableIncentives =
            object.claimableIncentives?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.forfeitedIncentives =
            object.forfeitedIncentives?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFullPositionBreakdown();
        if (object.position !== undefined && object.position !== null) {
            message.position = exports.Position.fromAmino(object.position);
        }
        if (object.asset0 !== undefined && object.asset0 !== null) {
            message.asset0 = coin_1.Coin.fromAmino(object.asset0);
        }
        if (object.asset1 !== undefined && object.asset1 !== null) {
            message.asset1 = coin_1.Coin.fromAmino(object.asset1);
        }
        message.claimableSpreadRewards =
            object.claimable_spread_rewards?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.claimableIncentives =
            object.claimable_incentives?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.forfeitedIncentives =
            object.forfeited_incentives?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? exports.Position.toAmino(message.position)
            : undefined;
        obj.asset0 = message.asset0 ? coin_1.Coin.toAmino(message.asset0) : undefined;
        obj.asset1 = message.asset1 ? coin_1.Coin.toAmino(message.asset1) : undefined;
        if (message.claimableSpreadRewards) {
            obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_spread_rewards = message.claimableSpreadRewards;
        }
        if (message.claimableIncentives) {
            obj.claimable_incentives = message.claimableIncentives.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_incentives = message.claimableIncentives;
        }
        if (message.forfeitedIncentives) {
            obj.forfeited_incentives = message.forfeitedIncentives.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.forfeited_incentives = message.forfeitedIncentives;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FullPositionBreakdown.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/full-position-breakdown',
            value: exports.FullPositionBreakdown.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.FullPositionBreakdown.decode(message.value);
    },
    toProto(message) {
        return exports.FullPositionBreakdown.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown',
            value: exports.FullPositionBreakdown.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.FullPositionBreakdown.typeUrl, exports.FullPositionBreakdown);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.FullPositionBreakdown.aminoType, exports.FullPositionBreakdown.typeUrl);
function createBasePositionWithPeriodLock() {
    return {
        position: exports.Position.fromPartial({}),
        locks: lock_1.PeriodLock.fromPartial({}),
    };
}
exports.PositionWithPeriodLock = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock',
    aminoType: 'osmosis/concentratedliquidity/position-with-period-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PositionWithPeriodLock.typeUrl ||
                (exports.Position.is(o.position) && lock_1.PeriodLock.is(o.locks))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PositionWithPeriodLock.typeUrl ||
                (exports.Position.isSDK(o.position) && lock_1.PeriodLock.isSDK(o.locks))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PositionWithPeriodLock.typeUrl ||
                (exports.Position.isAmino(o.position) && lock_1.PeriodLock.isAmino(o.locks))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            exports.Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.locks !== undefined) {
            lock_1.PeriodLock.encode(message.locks, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionWithPeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = exports.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.locks = lock_1.PeriodLock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePositionWithPeriodLock();
        message.position =
            object.position !== undefined && object.position !== null
                ? exports.Position.fromPartial(object.position)
                : undefined;
        message.locks =
            object.locks !== undefined && object.locks !== null
                ? lock_1.PeriodLock.fromPartial(object.locks)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionWithPeriodLock();
        if (object.position !== undefined && object.position !== null) {
            message.position = exports.Position.fromAmino(object.position);
        }
        if (object.locks !== undefined && object.locks !== null) {
            message.locks = lock_1.PeriodLock.fromAmino(object.locks);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? exports.Position.toAmino(message.position)
            : undefined;
        obj.locks = message.locks ? lock_1.PeriodLock.toAmino(message.locks) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PositionWithPeriodLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-with-period-lock',
            value: exports.PositionWithPeriodLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PositionWithPeriodLock.decode(message.value);
    },
    toProto(message) {
        return exports.PositionWithPeriodLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock',
            value: exports.PositionWithPeriodLock.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PositionWithPeriodLock.typeUrl, exports.PositionWithPeriodLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PositionWithPeriodLock.aminoType, exports.PositionWithPeriodLock.typeUrl);
