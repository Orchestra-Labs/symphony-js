"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreateConcentratedPoolResponse = exports.MsgCreateConcentratedPool = void 0;
//@ts-nocheck
const binary_1 = require("../../../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../../../registry");
function createBaseMsgCreateConcentratedPool() {
    return {
        sender: '',
        denom0: '',
        denom1: '',
        tickSpacing: BigInt(0),
        spreadFactor: '',
    };
}
exports.MsgCreateConcentratedPool = {
    typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
    aminoType: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateConcentratedPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tickSpacing === 'bigint' &&
                    typeof o.spreadFactor === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateConcentratedPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.spread_factor === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateConcentratedPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.spread_factor === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
                .string(math_1.Decimal.fromUserInput(message.spreadFactor, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.spreadFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgCreateConcentratedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool',
            value: exports.MsgCreateConcentratedPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateConcentratedPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateConcentratedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
            value: exports.MsgCreateConcentratedPool.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateConcentratedPool.typeUrl, exports.MsgCreateConcentratedPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateConcentratedPool.aminoType, exports.MsgCreateConcentratedPool.typeUrl);
function createBaseMsgCreateConcentratedPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.MsgCreateConcentratedPoolResponse = {
    typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse',
    aminoType: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateConcentratedPoolResponse.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateConcentratedPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateConcentratedPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateConcentratedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response',
            value: exports.MsgCreateConcentratedPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateConcentratedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateConcentratedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse',
            value: exports.MsgCreateConcentratedPoolResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateConcentratedPoolResponse.typeUrl, exports.MsgCreateConcentratedPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateConcentratedPoolResponse.aminoType, exports.MsgCreateConcentratedPoolResponse.typeUrl);
