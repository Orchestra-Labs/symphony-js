"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UptimeTracker = exports.UptimeTrackers = exports.TickInfo = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBaseTickInfo() {
    return {
        liquidityGross: '',
        liquidityNet: '',
        spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
        uptimeTrackers: exports.UptimeTrackers.fromPartial({}),
    };
}
exports.TickInfo = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickInfo',
    aminoType: 'osmosis/concentratedliquidity/tick-info',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TickInfo.typeUrl ||
                (typeof o.liquidityGross === 'string' &&
                    typeof o.liquidityNet === 'string' &&
                    Array.isArray(o.spreadRewardGrowthOppositeDirectionOfLastTraversal) &&
                    (!o.spreadRewardGrowthOppositeDirectionOfLastTraversal.length ||
                        coin_1.DecCoin.is(o.spreadRewardGrowthOppositeDirectionOfLastTraversal[0])) &&
                    exports.UptimeTrackers.is(o.uptimeTrackers))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TickInfo.typeUrl ||
                (typeof o.liquidity_gross === 'string' &&
                    typeof o.liquidity_net === 'string' &&
                    Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        coin_1.DecCoin.isSDK(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    exports.UptimeTrackers.isSDK(o.uptime_trackers))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TickInfo.typeUrl ||
                (typeof o.liquidity_gross === 'string' &&
                    typeof o.liquidity_net === 'string' &&
                    Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        coin_1.DecCoin.isAmino(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    exports.UptimeTrackers.isAmino(o.uptime_trackers))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.liquidityGross !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.liquidityGross, 18).atomics);
        }
        if (message.liquidityNet !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.liquidityNet, 18).atomics);
        }
        for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.uptimeTrackers !== undefined) {
            exports.UptimeTrackers.encode(message.uptimeTrackers, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityGross = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.liquidityNet = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.uptimeTrackers = exports.UptimeTrackers.decode(reader, reader.uint32());
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
            object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.uptimeTrackers =
            object.uptimeTrackers !== undefined && object.uptimeTrackers !== null
                ? exports.UptimeTrackers.fromPartial(object.uptimeTrackers)
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
            object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        if (object.uptime_trackers !== undefined &&
            object.uptime_trackers !== null) {
            message.uptimeTrackers = exports.UptimeTrackers.fromAmino(object.uptime_trackers);
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
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal;
        }
        obj.uptime_trackers = message.uptimeTrackers
            ? exports.UptimeTrackers.toAmino(message.uptimeTrackers)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TickInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-info',
            value: exports.TickInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TickInfo.decode(message.value);
    },
    toProto(message) {
        return exports.TickInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickInfo',
            value: exports.TickInfo.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TickInfo.typeUrl, exports.TickInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TickInfo.aminoType, exports.TickInfo.typeUrl);
function createBaseUptimeTrackers() {
    return {
        list: [],
    };
}
exports.UptimeTrackers = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTrackers',
    aminoType: 'osmosis/concentratedliquidity/uptime-trackers',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UptimeTrackers.typeUrl ||
                (Array.isArray(o.list) &&
                    (!o.list.length || exports.UptimeTracker.is(o.list[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UptimeTrackers.typeUrl ||
                (Array.isArray(o.list) &&
                    (!o.list.length || exports.UptimeTracker.isSDK(o.list[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UptimeTrackers.typeUrl ||
                (Array.isArray(o.list) &&
                    (!o.list.length || exports.UptimeTracker.isAmino(o.list[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.list) {
            exports.UptimeTracker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUptimeTrackers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.list.push(exports.UptimeTracker.decode(reader, reader.uint32()));
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
        message.list = object.list?.map(e => exports.UptimeTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUptimeTrackers();
        message.list = object.list?.map(e => exports.UptimeTracker.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.list) {
            obj.list = message.list.map(e => e ? exports.UptimeTracker.toAmino(e) : undefined);
        }
        else {
            obj.list = message.list;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UptimeTrackers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/uptime-trackers',
            value: exports.UptimeTrackers.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UptimeTrackers.decode(message.value);
    },
    toProto(message) {
        return exports.UptimeTrackers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTrackers',
            value: exports.UptimeTrackers.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UptimeTrackers.typeUrl, exports.UptimeTrackers);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UptimeTrackers.aminoType, exports.UptimeTrackers.typeUrl);
function createBaseUptimeTracker() {
    return {
        uptimeGrowthOutside: [],
    };
}
exports.UptimeTracker = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTracker',
    aminoType: 'osmosis/concentratedliquidity/uptime-tracker',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UptimeTracker.typeUrl ||
                (Array.isArray(o.uptimeGrowthOutside) &&
                    (!o.uptimeGrowthOutside.length ||
                        coin_1.DecCoin.is(o.uptimeGrowthOutside[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UptimeTracker.typeUrl ||
                (Array.isArray(o.uptime_growth_outside) &&
                    (!o.uptime_growth_outside.length ||
                        coin_1.DecCoin.isSDK(o.uptime_growth_outside[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UptimeTracker.typeUrl ||
                (Array.isArray(o.uptime_growth_outside) &&
                    (!o.uptime_growth_outside.length ||
                        coin_1.DecCoin.isAmino(o.uptime_growth_outside[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.uptimeGrowthOutside) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUptimeTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uptimeGrowthOutside.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            object.uptimeGrowthOutside?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUptimeTracker();
        message.uptimeGrowthOutside =
            object.uptime_growth_outside?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.uptimeGrowthOutside) {
            obj.uptime_growth_outside = message.uptimeGrowthOutside.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.uptime_growth_outside = message.uptimeGrowthOutside;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UptimeTracker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/uptime-tracker',
            value: exports.UptimeTracker.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UptimeTracker.decode(message.value);
    },
    toProto(message) {
        return exports.UptimeTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UptimeTracker',
            value: exports.UptimeTracker.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UptimeTracker.typeUrl, exports.UptimeTracker);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UptimeTracker.aminoType, exports.UptimeTracker.typeUrl);
