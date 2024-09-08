//@ts-nocheck
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { PeriodLock, } from '../../lockup/lock';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { toTimestamp, fromTimestamp } from '../../../helpers';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
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
export const Position = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.Position',
    aminoType: 'osmosis/concentratedliquidity/position',
    is(o) {
        return (o &&
            (o.$typeUrl === Position.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.address === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.lowerTick === 'bigint' &&
                    typeof o.upperTick === 'bigint' &&
                    Timestamp.is(o.joinTime) &&
                    typeof o.liquidity === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Position.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.address === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint' &&
                    Timestamp.isSDK(o.join_time) &&
                    typeof o.liquidity === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Position.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.address === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint' &&
                    Timestamp.isAmino(o.join_time) &&
                    typeof o.liquidity === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.liquidity !== '') {
            writer
                .uint32(58)
                .string(Decimal.fromUserInput(message.liquidity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.liquidity = Decimal.fromAtomics(reader.string(), 18).toString();
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
            message.joinTime = fromTimestamp(Timestamp.fromAmino(object.join_time));
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
            ? Timestamp.toAmino(toTimestamp(message.joinTime))
            : undefined;
        obj.liquidity = message.liquidity === '' ? undefined : message.liquidity;
        return obj;
    },
    fromAminoMsg(object) {
        return Position.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position',
            value: Position.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Position.decode(message.value);
    },
    toProto(message) {
        return Position.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.Position',
            value: Position.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Position.typeUrl, Position);
GlobalDecoderRegistry.registerAminoProtoMapping(Position.aminoType, Position.typeUrl);
function createBaseFullPositionBreakdown() {
    return {
        position: Position.fromPartial({}),
        asset0: Coin.fromPartial({}),
        asset1: Coin.fromPartial({}),
        claimableSpreadRewards: [],
        claimableIncentives: [],
        forfeitedIncentives: [],
    };
}
export const FullPositionBreakdown = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown',
    aminoType: 'osmosis/concentratedliquidity/full-position-breakdown',
    is(o) {
        return (o &&
            (o.$typeUrl === FullPositionBreakdown.typeUrl ||
                (Position.is(o.position) &&
                    Coin.is(o.asset0) &&
                    Coin.is(o.asset1) &&
                    Array.isArray(o.claimableSpreadRewards) &&
                    (!o.claimableSpreadRewards.length ||
                        Coin.is(o.claimableSpreadRewards[0])) &&
                    Array.isArray(o.claimableIncentives) &&
                    (!o.claimableIncentives.length ||
                        Coin.is(o.claimableIncentives[0])) &&
                    Array.isArray(o.forfeitedIncentives) &&
                    (!o.forfeitedIncentives.length || Coin.is(o.forfeitedIncentives[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === FullPositionBreakdown.typeUrl ||
                (Position.isSDK(o.position) &&
                    Coin.isSDK(o.asset0) &&
                    Coin.isSDK(o.asset1) &&
                    Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        Coin.isSDK(o.claimable_spread_rewards[0])) &&
                    Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        Coin.isSDK(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        Coin.isSDK(o.forfeited_incentives[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === FullPositionBreakdown.typeUrl ||
                (Position.isAmino(o.position) &&
                    Coin.isAmino(o.asset0) &&
                    Coin.isAmino(o.asset1) &&
                    Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        Coin.isAmino(o.claimable_spread_rewards[0])) &&
                    Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        Coin.isAmino(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        Coin.isAmino(o.forfeited_incentives[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.asset0 !== undefined) {
            Coin.encode(message.asset0, writer.uint32(18).fork()).ldelim();
        }
        if (message.asset1 !== undefined) {
            Coin.encode(message.asset1, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.claimableSpreadRewards) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.claimableIncentives) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullPositionBreakdown();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.asset0 = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.asset1 = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimableSpreadRewards.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.claimableIncentives.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
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
                ? Position.fromPartial(object.position)
                : undefined;
        message.asset0 =
            object.asset0 !== undefined && object.asset0 !== null
                ? Coin.fromPartial(object.asset0)
                : undefined;
        message.asset1 =
            object.asset1 !== undefined && object.asset1 !== null
                ? Coin.fromPartial(object.asset1)
                : undefined;
        message.claimableSpreadRewards =
            object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
        message.claimableIncentives =
            object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
        message.forfeitedIncentives =
            object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFullPositionBreakdown();
        if (object.position !== undefined && object.position !== null) {
            message.position = Position.fromAmino(object.position);
        }
        if (object.asset0 !== undefined && object.asset0 !== null) {
            message.asset0 = Coin.fromAmino(object.asset0);
        }
        if (object.asset1 !== undefined && object.asset1 !== null) {
            message.asset1 = Coin.fromAmino(object.asset1);
        }
        message.claimableSpreadRewards =
            object.claimable_spread_rewards?.map(e => Coin.fromAmino(e)) || [];
        message.claimableIncentives =
            object.claimable_incentives?.map(e => Coin.fromAmino(e)) || [];
        message.forfeitedIncentives =
            object.forfeited_incentives?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? Position.toAmino(message.position)
            : undefined;
        obj.asset0 = message.asset0 ? Coin.toAmino(message.asset0) : undefined;
        obj.asset1 = message.asset1 ? Coin.toAmino(message.asset1) : undefined;
        if (message.claimableSpreadRewards) {
            obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_spread_rewards = message.claimableSpreadRewards;
        }
        if (message.claimableIncentives) {
            obj.claimable_incentives = message.claimableIncentives.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_incentives = message.claimableIncentives;
        }
        if (message.forfeitedIncentives) {
            obj.forfeited_incentives = message.forfeitedIncentives.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.forfeited_incentives = message.forfeitedIncentives;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FullPositionBreakdown.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/full-position-breakdown',
            value: FullPositionBreakdown.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return FullPositionBreakdown.decode(message.value);
    },
    toProto(message) {
        return FullPositionBreakdown.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown',
            value: FullPositionBreakdown.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(FullPositionBreakdown.typeUrl, FullPositionBreakdown);
GlobalDecoderRegistry.registerAminoProtoMapping(FullPositionBreakdown.aminoType, FullPositionBreakdown.typeUrl);
function createBasePositionWithPeriodLock() {
    return {
        position: Position.fromPartial({}),
        locks: PeriodLock.fromPartial({}),
    };
}
export const PositionWithPeriodLock = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock',
    aminoType: 'osmosis/concentratedliquidity/position-with-period-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === PositionWithPeriodLock.typeUrl ||
                (Position.is(o.position) && PeriodLock.is(o.locks))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PositionWithPeriodLock.typeUrl ||
                (Position.isSDK(o.position) && PeriodLock.isSDK(o.locks))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PositionWithPeriodLock.typeUrl ||
                (Position.isAmino(o.position) && PeriodLock.isAmino(o.locks))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.locks !== undefined) {
            PeriodLock.encode(message.locks, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionWithPeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.locks = PeriodLock.decode(reader, reader.uint32());
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
                ? Position.fromPartial(object.position)
                : undefined;
        message.locks =
            object.locks !== undefined && object.locks !== null
                ? PeriodLock.fromPartial(object.locks)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionWithPeriodLock();
        if (object.position !== undefined && object.position !== null) {
            message.position = Position.fromAmino(object.position);
        }
        if (object.locks !== undefined && object.locks !== null) {
            message.locks = PeriodLock.fromAmino(object.locks);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? Position.toAmino(message.position)
            : undefined;
        obj.locks = message.locks ? PeriodLock.toAmino(message.locks) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PositionWithPeriodLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-with-period-lock',
            value: PositionWithPeriodLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PositionWithPeriodLock.decode(message.value);
    },
    toProto(message) {
        return PositionWithPeriodLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock',
            value: PositionWithPeriodLock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PositionWithPeriodLock.typeUrl, PositionWithPeriodLock);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionWithPeriodLock.aminoType, PositionWithPeriodLock.typeUrl);
