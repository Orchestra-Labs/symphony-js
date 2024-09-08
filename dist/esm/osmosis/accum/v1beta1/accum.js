//@ts-nocheck
import { DecCoin, } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseAccumulatorContent() {
    return {
        accumValue: [],
        totalShares: '',
    };
}
export const AccumulatorContent = {
    typeUrl: '/osmosis.accum.v1beta1.AccumulatorContent',
    aminoType: 'osmosis/accum/accumulator-content',
    is(o) {
        return (o &&
            (o.$typeUrl === AccumulatorContent.typeUrl ||
                (Array.isArray(o.accumValue) &&
                    (!o.accumValue.length || DecCoin.is(o.accumValue[0])) &&
                    typeof o.totalShares === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccumulatorContent.typeUrl ||
                (Array.isArray(o.accum_value) &&
                    (!o.accum_value.length || DecCoin.isSDK(o.accum_value[0])) &&
                    typeof o.total_shares === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccumulatorContent.typeUrl ||
                (Array.isArray(o.accum_value) &&
                    (!o.accum_value.length || DecCoin.isAmino(o.accum_value[0])) &&
                    typeof o.total_shares === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accumValue) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalShares !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.totalShares, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumulatorContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accumValue.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalShares = Decimal.fromAtomics(reader.string(), 18).toString();
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
            object.accumValue?.map(e => DecCoin.fromPartial(e)) || [];
        message.totalShares = object.totalShares ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccumulatorContent();
        message.accumValue =
            object.accum_value?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = object.total_shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accumValue) {
            obj.accum_value = message.accumValue.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.accum_value = message.accumValue;
        }
        obj.total_shares =
            message.totalShares === '' ? undefined : message.totalShares;
        return obj;
    },
    fromAminoMsg(object) {
        return AccumulatorContent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/accum/accumulator-content',
            value: AccumulatorContent.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccumulatorContent.decode(message.value);
    },
    toProto(message) {
        return AccumulatorContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.accum.v1beta1.AccumulatorContent',
            value: AccumulatorContent.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccumulatorContent.typeUrl, AccumulatorContent);
GlobalDecoderRegistry.registerAminoProtoMapping(AccumulatorContent.aminoType, AccumulatorContent.typeUrl);
function createBaseOptions() {
    return {};
}
export const Options = {
    typeUrl: '/osmosis.accum.v1beta1.Options',
    aminoType: 'osmosis/accum/options',
    is(o) {
        return o && o.$typeUrl === Options.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === Options.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === Options.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Options.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/accum/options',
            value: Options.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Options.decode(message.value);
    },
    toProto(message) {
        return Options.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.accum.v1beta1.Options',
            value: Options.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Options.typeUrl, Options);
GlobalDecoderRegistry.registerAminoProtoMapping(Options.aminoType, Options.typeUrl);
function createBaseRecord() {
    return {
        numShares: '',
        accumValuePerShare: [],
        unclaimedRewardsTotal: [],
        options: undefined,
    };
}
export const Record = {
    typeUrl: '/osmosis.accum.v1beta1.Record',
    aminoType: 'osmosis/accum/record',
    is(o) {
        return (o &&
            (o.$typeUrl === Record.typeUrl ||
                (typeof o.numShares === 'string' &&
                    Array.isArray(o.accumValuePerShare) &&
                    (!o.accumValuePerShare.length ||
                        DecCoin.is(o.accumValuePerShare[0])) &&
                    Array.isArray(o.unclaimedRewardsTotal) &&
                    (!o.unclaimedRewardsTotal.length ||
                        DecCoin.is(o.unclaimedRewardsTotal[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Record.typeUrl ||
                (typeof o.num_shares === 'string' &&
                    Array.isArray(o.accum_value_per_share) &&
                    (!o.accum_value_per_share.length ||
                        DecCoin.isSDK(o.accum_value_per_share[0])) &&
                    Array.isArray(o.unclaimed_rewards_total) &&
                    (!o.unclaimed_rewards_total.length ||
                        DecCoin.isSDK(o.unclaimed_rewards_total[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Record.typeUrl ||
                (typeof o.num_shares === 'string' &&
                    Array.isArray(o.accum_value_per_share) &&
                    (!o.accum_value_per_share.length ||
                        DecCoin.isAmino(o.accum_value_per_share[0])) &&
                    Array.isArray(o.unclaimed_rewards_total) &&
                    (!o.unclaimed_rewards_total.length ||
                        DecCoin.isAmino(o.unclaimed_rewards_total[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.numShares !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.numShares, 18).atomics);
        }
        for (const v of message.accumValuePerShare) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.unclaimedRewardsTotal) {
            DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            Options.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numShares = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.accumValuePerShare.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.unclaimedRewardsTotal.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.options = Options.decode(reader, reader.uint32());
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
            object.accumValuePerShare?.map(e => DecCoin.fromPartial(e)) || [];
        message.unclaimedRewardsTotal =
            object.unclaimedRewardsTotal?.map(e => DecCoin.fromPartial(e)) || [];
        message.options =
            object.options !== undefined && object.options !== null
                ? Options.fromPartial(object.options)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord();
        if (object.num_shares !== undefined && object.num_shares !== null) {
            message.numShares = object.num_shares;
        }
        message.accumValuePerShare =
            object.accum_value_per_share?.map(e => DecCoin.fromAmino(e)) || [];
        message.unclaimedRewardsTotal =
            object.unclaimed_rewards_total?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = Options.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.num_shares = message.numShares === '' ? undefined : message.numShares;
        if (message.accumValuePerShare) {
            obj.accum_value_per_share = message.accumValuePerShare.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.accum_value_per_share = message.accumValuePerShare;
        }
        if (message.unclaimedRewardsTotal) {
            obj.unclaimed_rewards_total = message.unclaimedRewardsTotal.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.unclaimed_rewards_total = message.unclaimedRewardsTotal;
        }
        obj.options = message.options
            ? Options.toAmino(message.options)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Record.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/accum/record',
            value: Record.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Record.decode(message.value);
    },
    toProto(message) {
        return Record.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.accum.v1beta1.Record',
            value: Record.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Record.typeUrl, Record);
GlobalDecoderRegistry.registerAminoProtoMapping(Record.aminoType, Record.typeUrl);
