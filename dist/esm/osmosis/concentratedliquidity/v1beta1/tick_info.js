//@ts-nocheck
import { DecCoin, } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseTickInfo() {
    return {
        liquidityGross: '',
        liquidityNet: '',
        spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
        uptimeTrackers: UptimeTrackers.fromPartial({}),
    };
}
export const TickInfo = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickInfo',
    aminoType: 'osmosis/concentratedliquidity/tick-info',
    is(o) {
        return (o &&
            (o.$typeUrl === TickInfo.typeUrl ||
                (typeof o.liquidityGross === 'string' &&
                    typeof o.liquidityNet === 'string' &&
                    Array.isArray(o.spreadRewardGrowthOppositeDirectionOfLastTraversal) &&
                    (!o.spreadRewardGrowthOppositeDirectionOfLastTraversal.length ||
                        DecCoin.is(o.spreadRewardGrowthOppositeDirectionOfLastTraversal[0])) &&
                    UptimeTrackers.is(o.uptimeTrackers))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TickInfo.typeUrl ||
                (typeof o.liquidity_gross === 'string' &&
                    typeof o.liquidity_net === 'string' &&
                    Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        DecCoin.isSDK(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    UptimeTrackers.isSDK(o.uptime_trackers))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TickInfo.typeUrl ||
                (typeof o.liquidity_gross === 'string' &&
                    typeof o.liquidity_net === 'string' &&
                    Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        DecCoin.isAmino(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    UptimeTrackers.isAmino(o.uptime_trackers))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.liquidityGross !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.liquidityGross, 18).atomics);
        }
        if (message.liquidityNet !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
        }
        for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.uptimeTrackers !== undefined) {
            UptimeTrackers.encode(message.uptimeTrackers, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityGross = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.liquidityNet = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.uptimeTrackers = UptimeTrackers.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTickInfo();
        message.liquidityGross = object.liquidityGross ?? '';
        message.liquidityNet = object.liquidityNet ?? '';
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => DecCoin.fromPartial(e)) || [];
        message.uptimeTrackers =
            object.uptimeTrackers !== undefined && object.uptimeTrackers !== null
                ? UptimeTrackers.fromPartial(object.uptimeTrackers)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickInfo();
        if (object.liquidity_gross !== undefined &&
            object.liquidity_gross !== null) {
            message.liquidityGross = object.liquidity_gross;
        }
        if (object.liquidity_net !== undefined && object.liquidity_net !== null) {
            message.liquidityNet = object.liquidity_net;
        }
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.uptime_trackers !== undefined &&
            object.uptime_trackers !== null) {
            message.uptimeTrackers = UptimeTrackers.fromAmino(object.uptime_trackers);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.liquidity_gross =
            message.liquidityGross === '' ? undefined : message.liquidityGross;
        obj.liquidity_net =
            message.liquidityNet === '' ? undefined : message.liquidityNet;
        if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal;
        }
        obj.uptime_trackers = message.uptimeTrackers
            ? UptimeTrackers.toAmino(message.uptimeTrackers)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TickInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-info',
            value: TickInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TickInfo.decode(message.value);
    },
    toProto(message) {
        return TickInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickInfo',
            value: TickInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TickInfo.typeUrl, TickInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(TickInfo.aminoType, TickInfo.typeUrl);
function createBaseUptimeTrackers() {
    return {
        list: [],
    };
}
export const UptimeTrackers = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTrackers',
    aminoType: 'osmosis/concentratedliquidity/uptime-trackers',
    is(o) {
        return (o &&
            (o.$typeUrl === UptimeTrackers.typeUrl ||
                (Array.isArray(o.list) &&
                    (!o.list.length || UptimeTracker.is(o.list[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UptimeTrackers.typeUrl ||
                (Array.isArray(o.list) &&
                    (!o.list.length || UptimeTracker.isSDK(o.list[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UptimeTrackers.typeUrl ||
                (Array.isArray(o.list) &&
                    (!o.list.length || UptimeTracker.isAmino(o.list[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.list) {
            UptimeTracker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUptimeTrackers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(UptimeTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUptimeTrackers();
        message.list = object.list?.map(e => UptimeTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUptimeTrackers();
        message.list = object.list?.map(e => UptimeTracker.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.list) {
            obj.list = message.list.map(e => e ? UptimeTracker.toAmino(e) : undefined);
        }
        else {
            obj.list = message.list;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UptimeTrackers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/uptime-trackers',
            value: UptimeTrackers.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UptimeTrackers.decode(message.value);
    },
    toProto(message) {
        return UptimeTrackers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTrackers',
            value: UptimeTrackers.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UptimeTrackers.typeUrl, UptimeTrackers);
GlobalDecoderRegistry.registerAminoProtoMapping(UptimeTrackers.aminoType, UptimeTrackers.typeUrl);
function createBaseUptimeTracker() {
    return {
        uptimeGrowthOutside: [],
    };
}
export const UptimeTracker = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTracker',
    aminoType: 'osmosis/concentratedliquidity/uptime-tracker',
    is(o) {
        return (o &&
            (o.$typeUrl === UptimeTracker.typeUrl ||
                (Array.isArray(o.uptimeGrowthOutside) &&
                    (!o.uptimeGrowthOutside.length ||
                        DecCoin.is(o.uptimeGrowthOutside[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UptimeTracker.typeUrl ||
                (Array.isArray(o.uptime_growth_outside) &&
                    (!o.uptime_growth_outside.length ||
                        DecCoin.isSDK(o.uptime_growth_outside[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UptimeTracker.typeUrl ||
                (Array.isArray(o.uptime_growth_outside) &&
                    (!o.uptime_growth_outside.length ||
                        DecCoin.isAmino(o.uptime_growth_outside[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.uptimeGrowthOutside) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUptimeTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uptimeGrowthOutside.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUptimeTracker();
        message.uptimeGrowthOutside =
            object.uptimeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUptimeTracker();
        message.uptimeGrowthOutside =
            object.uptime_growth_outside?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.uptimeGrowthOutside) {
            obj.uptime_growth_outside = message.uptimeGrowthOutside.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.uptime_growth_outside = message.uptimeGrowthOutside;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UptimeTracker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/uptime-tracker',
            value: UptimeTracker.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UptimeTracker.decode(message.value);
    },
    toProto(message) {
        return UptimeTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTracker',
            value: UptimeTracker.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UptimeTracker.typeUrl, UptimeTracker);
GlobalDecoderRegistry.registerAminoProtoMapping(UptimeTracker.aminoType, UptimeTracker.typeUrl);
