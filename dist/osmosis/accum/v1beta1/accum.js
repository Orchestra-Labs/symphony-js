"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = exports.Options = exports.AccumulatorContent = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBaseAccumulatorContent() {
    return {
        accumValue: [],
        totalShares: '',
    };
}
exports.AccumulatorContent = {
    typeUrl: '/osmosis.accum.v1beta1.AccumulatorContent',
    aminoType: 'osmosis/accum/accumulator-content',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.AccumulatorContent.typeUrl ||
                (Array.isArray(o.accumValue) &&
                    (!o.accumValue.length || coin_1.DecCoin.is(o.accumValue[0])) &&
                    typeof o.totalShares === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.AccumulatorContent.typeUrl ||
                (Array.isArray(o.accum_value) &&
                    (!o.accum_value.length || coin_1.DecCoin.isSDK(o.accum_value[0])) &&
                    typeof o.total_shares === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.AccumulatorContent.typeUrl ||
                (Array.isArray(o.accum_value) &&
                    (!o.accum_value.length || coin_1.DecCoin.isAmino(o.accum_value[0])) &&
                    typeof o.total_shares === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accumValue) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalShares !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.totalShares, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumulatorContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accumValue.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalShares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccumulatorContent();
        message.accumValue =
            object.accumValue?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.totalShares = object.totalShares ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccumulatorContent();
        message.accumValue =
            object.accum_value?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = object.total_shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accumValue) {
            obj.accum_value = message.accumValue.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.accum_value = message.accumValue;
        }
        obj.total_shares =
            message.totalShares === '' ? undefined : message.totalShares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccumulatorContent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/accum/accumulator-content',
            value: exports.AccumulatorContent.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.AccumulatorContent.decode(message.value);
    },
    toProto(message) {
        return exports.AccumulatorContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.accum.v1beta1.AccumulatorContent',
            value: exports.AccumulatorContent.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.AccumulatorContent.typeUrl, exports.AccumulatorContent);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccumulatorContent.aminoType, exports.AccumulatorContent.typeUrl);
function createBaseOptions() {
    return {};
}
exports.Options = {
    typeUrl: '/osmosis.accum.v1beta1.Options',
    aminoType: 'osmosis/accum/options',
    is(o) {
        return o && o.$typeUrl === exports.Options.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Options.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Options.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOptions();
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
        const message = createBaseOptions();
        return message;
    },
    fromAmino(_) {
        const message = createBaseOptions();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Options.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/accum/options',
            value: exports.Options.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Options.decode(message.value);
    },
    toProto(message) {
        return exports.Options.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.accum.v1beta1.Options',
            value: exports.Options.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Options.typeUrl, exports.Options);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Options.aminoType, exports.Options.typeUrl);
function createBaseRecord() {
    return {
        numShares: '',
        accumValuePerShare: [],
        unclaimedRewardsTotal: [],
        options: undefined,
    };
}
exports.Record = {
    typeUrl: '/osmosis.accum.v1beta1.Record',
    aminoType: 'osmosis/accum/record',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Record.typeUrl ||
                (typeof o.numShares === 'string' &&
                    Array.isArray(o.accumValuePerShare) &&
                    (!o.accumValuePerShare.length ||
                        coin_1.DecCoin.is(o.accumValuePerShare[0])) &&
                    Array.isArray(o.unclaimedRewardsTotal) &&
                    (!o.unclaimedRewardsTotal.length ||
                        coin_1.DecCoin.is(o.unclaimedRewardsTotal[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Record.typeUrl ||
                (typeof o.num_shares === 'string' &&
                    Array.isArray(o.accum_value_per_share) &&
                    (!o.accum_value_per_share.length ||
                        coin_1.DecCoin.isSDK(o.accum_value_per_share[0])) &&
                    Array.isArray(o.unclaimed_rewards_total) &&
                    (!o.unclaimed_rewards_total.length ||
                        coin_1.DecCoin.isSDK(o.unclaimed_rewards_total[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Record.typeUrl ||
                (typeof o.num_shares === 'string' &&
                    Array.isArray(o.accum_value_per_share) &&
                    (!o.accum_value_per_share.length ||
                        coin_1.DecCoin.isAmino(o.accum_value_per_share[0])) &&
                    Array.isArray(o.unclaimed_rewards_total) &&
                    (!o.unclaimed_rewards_total.length ||
                        coin_1.DecCoin.isAmino(o.unclaimed_rewards_total[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numShares !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.numShares, 18).atomics);
        }
        for (const v of message.accumValuePerShare) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.unclaimedRewardsTotal) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.Options.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numShares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.accumValuePerShare.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.unclaimedRewardsTotal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.options = exports.Options.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.numShares = object.numShares ?? '';
        message.accumValuePerShare =
            object.accumValuePerShare?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.unclaimedRewardsTotal =
            object.unclaimedRewardsTotal?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.Options.fromPartial(object.options)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord();
        if (object.num_shares !== undefined && object.num_shares !== null) {
            message.numShares = object.num_shares;
        }
        message.accumValuePerShare =
            object.accum_value_per_share?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        message.unclaimedRewardsTotal =
            object.unclaimed_rewards_total?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.Options.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.num_shares = message.numShares === '' ? undefined : message.numShares;
        if (message.accumValuePerShare) {
            obj.accum_value_per_share = message.accumValuePerShare.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.accum_value_per_share = message.accumValuePerShare;
        }
        if (message.unclaimedRewardsTotal) {
            obj.unclaimed_rewards_total = message.unclaimedRewardsTotal.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.unclaimed_rewards_total = message.unclaimedRewardsTotal;
        }
        obj.options = message.options
            ? exports.Options.toAmino(message.options)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/accum/record',
            value: exports.Record.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Record.decode(message.value);
    },
    toProto(message) {
        return exports.Record.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.accum.v1beta1.Record',
            value: exports.Record.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Record.typeUrl, exports.Record);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Record.aminoType, exports.Record.typeUrl);
