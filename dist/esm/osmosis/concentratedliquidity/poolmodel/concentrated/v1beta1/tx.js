//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../../../registry';
function createBaseMsgCreateConcentratedPool() {
    return {
        sender: '',
        denom0: '',
        denom1: '',
        tickSpacing: BigInt(0),
        spreadFactor: '',
    };
}
export const MsgCreateConcentratedPool = {
    typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
    aminoType: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateConcentratedPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tickSpacing === 'bigint' &&
                    typeof o.spreadFactor === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateConcentratedPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.spread_factor === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateConcentratedPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.spread_factor === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom0 !== '') {
            writer.uint32(18).string(message.denom0);
        }
        if (message.denom1 !== '') {
            writer.uint32(26).string(message.denom1);
        }
        if (message.tickSpacing !== BigInt(0)) {
            writer.uint32(32).uint64(message.tickSpacing);
        }
        if (message.spreadFactor !== '') {
            writer
                .uint32(42)
                .string(Decimal.fromUserInput(message.spreadFactor, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateConcentratedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom0 = reader.string();
                    break;
                case 3:
                    message.denom1 = reader.string();
                    break;
                case 4:
                    message.tickSpacing = reader.uint64();
                    break;
                case 5:
                    message.spreadFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateConcentratedPool();
        message.sender = object.sender ?? '';
        message.denom0 = object.denom0 ?? '';
        message.denom1 = object.denom1 ?? '';
        message.tickSpacing =
            object.tickSpacing !== undefined && object.tickSpacing !== null
                ? BigInt(object.tickSpacing.toString())
                : BigInt(0);
        message.spreadFactor = object.spreadFactor ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateConcentratedPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.denom0 !== undefined && object.denom0 !== null) {
            message.denom0 = object.denom0;
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = object.denom1;
        }
        if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
            message.tickSpacing = BigInt(object.tick_spacing);
        }
        if (object.spread_factor !== undefined && object.spread_factor !== null) {
            message.spreadFactor = object.spread_factor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.denom0 = message.denom0 === '' ? undefined : message.denom0;
        obj.denom1 = message.denom1 === '' ? undefined : message.denom1;
        obj.tick_spacing =
            message.tickSpacing !== BigInt(0)
                ? message.tickSpacing.toString()
                : undefined;
        obj.spread_factor =
            message.spreadFactor === '' ? undefined : message.spreadFactor;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateConcentratedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool',
            value: MsgCreateConcentratedPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateConcentratedPool.decode(message.value);
    },
    toProto(message) {
        return MsgCreateConcentratedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
            value: MsgCreateConcentratedPool.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateConcentratedPool.typeUrl, MsgCreateConcentratedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateConcentratedPool.aminoType, MsgCreateConcentratedPool.typeUrl);
function createBaseMsgCreateConcentratedPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
export const MsgCreateConcentratedPoolResponse = {
    typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse',
    aminoType: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateConcentratedPoolResponse.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateConcentratedPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateConcentratedPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateConcentratedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateConcentratedPoolResponse();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateConcentratedPoolResponse();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateConcentratedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response',
            value: MsgCreateConcentratedPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateConcentratedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateConcentratedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse',
            value: MsgCreateConcentratedPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateConcentratedPoolResponse.typeUrl, MsgCreateConcentratedPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateConcentratedPoolResponse.aminoType, MsgCreateConcentratedPoolResponse.typeUrl);
