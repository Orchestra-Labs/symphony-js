"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransferPositionsResponse = exports.MsgTransferPositions = exports.MsgFungifyChargedPositionsResponse = exports.MsgFungifyChargedPositions = exports.MsgCollectIncentivesResponse = exports.MsgCollectIncentives = exports.MsgCollectSpreadRewardsResponse = exports.MsgCollectSpreadRewards = exports.MsgWithdrawPositionResponse = exports.MsgWithdrawPosition = exports.MsgAddToPositionResponse = exports.MsgAddToPosition = exports.MsgCreatePositionResponse = exports.MsgCreatePosition = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseMsgCreatePosition() {
    return {
        poolId: BigInt(0),
        sender: '',
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
        tokensProvided: [],
        tokenMinAmount0: '',
        tokenMinAmount1: '',
    };
}
exports.MsgCreatePosition = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
    aminoType: 'osmosis/cl-create-position',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreatePosition.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.lowerTick === 'bigint' &&
                    typeof o.upperTick === 'bigint' &&
                    Array.isArray(o.tokensProvided) &&
                    (!o.tokensProvided.length || coin_1.Coin.is(o.tokensProvided[0])) &&
                    typeof o.tokenMinAmount0 === 'string' &&
                    typeof o.tokenMinAmount1 === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreatePosition.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint' &&
                    Array.isArray(o.tokens_provided) &&
                    (!o.tokens_provided.length || coin_1.Coin.isSDK(o.tokens_provided[0])) &&
                    typeof o.token_min_amount0 === 'string' &&
                    typeof o.token_min_amount1 === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreatePosition.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint' &&
                    Array.isArray(o.tokens_provided) &&
                    (!o.tokens_provided.length || coin_1.Coin.isAmino(o.tokens_provided[0])) &&
                    typeof o.token_min_amount0 === 'string' &&
                    typeof o.token_min_amount1 === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(24).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(32).int64(message.upperTick);
        }
        for (const v of message.tokensProvided) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.tokenMinAmount0 !== '') {
            writer.uint32(50).string(message.tokenMinAmount0);
        }
        if (message.tokenMinAmount1 !== '') {
            writer.uint32(58).string(message.tokenMinAmount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.lowerTick = reader.int64();
                    break;
                case 4:
                    message.upperTick = reader.int64();
                    break;
                case 5:
                    message.tokensProvided.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.tokenMinAmount0 = reader.string();
                    break;
                case 7:
                    message.tokenMinAmount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePosition();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.sender = object.sender ?? '';
        message.lowerTick =
            object.lowerTick !== undefined && object.lowerTick !== null
                ? BigInt(object.lowerTick.toString())
                : BigInt(0);
        message.upperTick =
            object.upperTick !== undefined && object.upperTick !== null
                ? BigInt(object.upperTick.toString())
                : BigInt(0);
        message.tokensProvided =
            object.tokensProvided?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.tokenMinAmount0 = object.tokenMinAmount0 ?? '';
        message.tokenMinAmount1 = object.tokenMinAmount1 ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePosition();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lower_tick !== undefined && object.lower_tick !== null) {
            message.lowerTick = BigInt(object.lower_tick);
        }
        if (object.upper_tick !== undefined && object.upper_tick !== null) {
            message.upperTick = BigInt(object.upper_tick);
        }
        message.tokensProvided =
            object.tokens_provided?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.token_min_amount0 !== undefined &&
            object.token_min_amount0 !== null) {
            message.tokenMinAmount0 = object.token_min_amount0;
        }
        if (object.token_min_amount1 !== undefined &&
            object.token_min_amount1 !== null) {
            message.tokenMinAmount1 = object.token_min_amount1;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lower_tick =
            message.lowerTick !== BigInt(0)
                ? message.lowerTick.toString()
                : undefined;
        obj.upper_tick =
            message.upperTick !== BigInt(0)
                ? message.upperTick.toString()
                : undefined;
        if (message.tokensProvided) {
            obj.tokens_provided = message.tokensProvided.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_provided = message.tokensProvided;
        }
        obj.token_min_amount0 =
            message.tokenMinAmount0 === '' ? undefined : message.tokenMinAmount0;
        obj.token_min_amount1 =
            message.tokenMinAmount1 === '' ? undefined : message.tokenMinAmount1;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-create-position',
            value: exports.MsgCreatePosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePosition.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
            value: exports.MsgCreatePosition.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePosition.typeUrl, exports.MsgCreatePosition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePosition.aminoType, exports.MsgCreatePosition.typeUrl);
function createBaseMsgCreatePositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: '',
        amount1: '',
        liquidityCreated: '',
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
    };
}
exports.MsgCreatePositionResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse',
    aminoType: 'osmosis/concentratedliquidity/create-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreatePositionResponse.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidityCreated === 'string' &&
                    typeof o.lowerTick === 'bigint' &&
                    typeof o.upperTick === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreatePositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidity_created === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreatePositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidity_created === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.amount0 !== '') {
            writer.uint32(18).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(26).string(message.amount1);
        }
        if (message.liquidityCreated !== '') {
            writer
                .uint32(42)
                .string(math_1.Decimal.fromUserInput(message.liquidityCreated, 18).atomics);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(48).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(56).int64(message.upperTick);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.amount0 = reader.string();
                    break;
                case 3:
                    message.amount1 = reader.string();
                    break;
                case 5:
                    message.liquidityCreated = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.lowerTick = reader.int64();
                    break;
                case 7:
                    message.upperTick = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePositionResponse();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.amount0 = object.amount0 ?? '';
        message.amount1 = object.amount1 ?? '';
        message.liquidityCreated = object.liquidityCreated ?? '';
        message.lowerTick =
            object.lowerTick !== undefined && object.lowerTick !== null
                ? BigInt(object.lowerTick.toString())
                : BigInt(0);
        message.upperTick =
            object.upperTick !== undefined && object.upperTick !== null
                ? BigInt(object.upperTick.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePositionResponse();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.amount0 !== undefined && object.amount0 !== null) {
            message.amount0 = object.amount0;
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        if (object.liquidity_created !== undefined &&
            object.liquidity_created !== null) {
            message.liquidityCreated = object.liquidity_created;
        }
        if (object.lower_tick !== undefined && object.lower_tick !== null) {
            message.lowerTick = BigInt(object.lower_tick);
        }
        if (object.upper_tick !== undefined && object.upper_tick !== null) {
            message.upperTick = BigInt(object.upper_tick);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.amount0 = message.amount0 === '' ? undefined : message.amount0;
        obj.amount1 = message.amount1 === '' ? undefined : message.amount1;
        obj.liquidity_created =
            message.liquidityCreated === '' ? undefined : message.liquidityCreated;
        obj.lower_tick =
            message.lowerTick !== BigInt(0)
                ? message.lowerTick.toString()
                : undefined;
        obj.upper_tick =
            message.upperTick !== BigInt(0)
                ? message.upperTick.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/create-position-response',
            value: exports.MsgCreatePositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePositionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse',
            value: exports.MsgCreatePositionResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePositionResponse.typeUrl, exports.MsgCreatePositionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePositionResponse.aminoType, exports.MsgCreatePositionResponse.typeUrl);
function createBaseMsgAddToPosition() {
    return {
        positionId: BigInt(0),
        sender: '',
        amount0: '',
        amount1: '',
        tokenMinAmount0: '',
        tokenMinAmount1: '',
    };
}
exports.MsgAddToPosition = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
    aminoType: 'osmosis/cl-add-to-position',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToPosition.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.tokenMinAmount0 === 'string' &&
                    typeof o.tokenMinAmount1 === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.token_min_amount0 === 'string' &&
                    typeof o.token_min_amount1 === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.token_min_amount0 === 'string' &&
                    typeof o.token_min_amount1 === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.amount0 !== '') {
            writer.uint32(26).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(34).string(message.amount1);
        }
        if (message.tokenMinAmount0 !== '') {
            writer.uint32(42).string(message.tokenMinAmount0);
        }
        if (message.tokenMinAmount1 !== '') {
            writer.uint32(50).string(message.tokenMinAmount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.amount0 = reader.string();
                    break;
                case 4:
                    message.amount1 = reader.string();
                    break;
                case 5:
                    message.tokenMinAmount0 = reader.string();
                    break;
                case 6:
                    message.tokenMinAmount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToPosition();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.sender = object.sender ?? '';
        message.amount0 = object.amount0 ?? '';
        message.amount1 = object.amount1 ?? '';
        message.tokenMinAmount0 = object.tokenMinAmount0 ?? '';
        message.tokenMinAmount1 = object.tokenMinAmount1 ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddToPosition();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount0 !== undefined && object.amount0 !== null) {
            message.amount0 = object.amount0;
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        if (object.token_min_amount0 !== undefined &&
            object.token_min_amount0 !== null) {
            message.tokenMinAmount0 = object.token_min_amount0;
        }
        if (object.token_min_amount1 !== undefined &&
            object.token_min_amount1 !== null) {
            message.tokenMinAmount1 = object.token_min_amount1;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.amount0 = message.amount0 === '' ? undefined : message.amount0;
        obj.amount1 = message.amount1 === '' ? undefined : message.amount1;
        obj.token_min_amount0 =
            message.tokenMinAmount0 === '' ? undefined : message.tokenMinAmount0;
        obj.token_min_amount1 =
            message.tokenMinAmount1 === '' ? undefined : message.tokenMinAmount1;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-add-to-position',
            value: exports.MsgAddToPosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToPosition.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
            value: exports.MsgAddToPosition.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToPosition.typeUrl, exports.MsgAddToPosition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToPosition.aminoType, exports.MsgAddToPosition.typeUrl);
function createBaseMsgAddToPositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: '',
        amount1: '',
    };
}
exports.MsgAddToPositionResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse',
    aminoType: 'osmosis/concentratedliquidity/add-to-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToPositionResponse.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToPositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToPositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.amount0 !== '') {
            writer.uint32(18).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(26).string(message.amount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.amount0 = reader.string();
                    break;
                case 3:
                    message.amount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToPositionResponse();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.amount0 = object.amount0 ?? '';
        message.amount1 = object.amount1 ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddToPositionResponse();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.amount0 !== undefined && object.amount0 !== null) {
            message.amount0 = object.amount0;
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.amount0 = message.amount0 === '' ? undefined : message.amount0;
        obj.amount1 = message.amount1 === '' ? undefined : message.amount1;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToPositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/add-to-position-response',
            value: exports.MsgAddToPositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToPositionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToPositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse',
            value: exports.MsgAddToPositionResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToPositionResponse.typeUrl, exports.MsgAddToPositionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToPositionResponse.aminoType, exports.MsgAddToPositionResponse.typeUrl);
function createBaseMsgWithdrawPosition() {
    return {
        positionId: BigInt(0),
        sender: '',
        liquidityAmount: '',
    };
}
exports.MsgWithdrawPosition = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
    aminoType: 'osmosis/cl-withdraw-position',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawPosition.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.liquidityAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.liquidity_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.liquidity_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.liquidityAmount !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.liquidityAmount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawPosition();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.sender = object.sender ?? '';
        message.liquidityAmount = object.liquidityAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawPosition();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.liquidity_amount !== undefined &&
            object.liquidity_amount !== null) {
            message.liquidityAmount = object.liquidity_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.liquidity_amount =
            message.liquidityAmount === '' ? undefined : message.liquidityAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-withdraw-position',
            value: exports.MsgWithdrawPosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawPosition.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
            value: exports.MsgWithdrawPosition.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawPosition.typeUrl, exports.MsgWithdrawPosition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawPosition.aminoType, exports.MsgWithdrawPosition.typeUrl);
function createBaseMsgWithdrawPositionResponse() {
    return {
        amount0: '',
        amount1: '',
    };
}
exports.MsgWithdrawPositionResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse',
    aminoType: 'osmosis/concentratedliquidity/withdraw-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' && typeof o.amount1 === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' && typeof o.amount1 === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' && typeof o.amount1 === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount0 !== '') {
            writer.uint32(10).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(18).string(message.amount1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount0 = reader.string();
                    break;
                case 2:
                    message.amount1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawPositionResponse();
        message.amount0 = object.amount0 ?? '';
        message.amount1 = object.amount1 ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawPositionResponse();
        if (object.amount0 !== undefined && object.amount0 !== null) {
            message.amount0 = object.amount0;
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount0 = message.amount0 === '' ? undefined : message.amount0;
        obj.amount1 = message.amount1 === '' ? undefined : message.amount1;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawPositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/withdraw-position-response',
            value: exports.MsgWithdrawPositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawPositionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawPositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse',
            value: exports.MsgWithdrawPositionResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawPositionResponse.typeUrl, exports.MsgWithdrawPositionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawPositionResponse.aminoType, exports.MsgWithdrawPositionResponse.typeUrl);
function createBaseMsgCollectSpreadRewards() {
    return {
        positionIds: [],
        sender: '',
    };
}
exports.MsgCollectSpreadRewards = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
    aminoType: 'osmosis/cl-col-sp-rewards',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectSpreadRewards.typeUrl ||
                (Array.isArray(o.positionIds) &&
                    (!o.positionIds.length || typeof o.positionIds[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectSpreadRewards.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectSpreadRewards.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectSpreadRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCollectSpreadRewards();
        message.positionIds =
            object.positionIds?.map(e => BigInt(e.toString())) || [];
        message.sender = object.sender ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCollectSpreadRewards();
        message.positionIds = object.position_ids?.map(e => BigInt(e)) || [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positionIds) {
            obj.position_ids = message.positionIds.map(e => e.toString());
        }
        else {
            obj.position_ids = message.positionIds;
        }
        obj.sender = message.sender === '' ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCollectSpreadRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-col-sp-rewards',
            value: exports.MsgCollectSpreadRewards.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCollectSpreadRewards.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCollectSpreadRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
            value: exports.MsgCollectSpreadRewards.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCollectSpreadRewards.typeUrl, exports.MsgCollectSpreadRewards);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCollectSpreadRewards.aminoType, exports.MsgCollectSpreadRewards.typeUrl);
function createBaseMsgCollectSpreadRewardsResponse() {
    return {
        collectedSpreadRewards: [],
    };
}
exports.MsgCollectSpreadRewardsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse',
    aminoType: 'osmosis/concentratedliquidity/collect-spread-rewards-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.collectedSpreadRewards) &&
                    (!o.collectedSpreadRewards.length ||
                        coin_1.Coin.is(o.collectedSpreadRewards[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.collected_spread_rewards) &&
                    (!o.collected_spread_rewards.length ||
                        coin_1.Coin.isSDK(o.collected_spread_rewards[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.collected_spread_rewards) &&
                    (!o.collected_spread_rewards.length ||
                        coin_1.Coin.isAmino(o.collected_spread_rewards[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.collectedSpreadRewards) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectSpreadRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectedSpreadRewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCollectSpreadRewardsResponse();
        message.collectedSpreadRewards =
            object.collectedSpreadRewards?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCollectSpreadRewardsResponse();
        message.collectedSpreadRewards =
            object.collected_spread_rewards?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.collectedSpreadRewards) {
            obj.collected_spread_rewards = message.collectedSpreadRewards.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.collected_spread_rewards = message.collectedSpreadRewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCollectSpreadRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/collect-spread-rewards-response',
            value: exports.MsgCollectSpreadRewardsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCollectSpreadRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCollectSpreadRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse',
            value: exports.MsgCollectSpreadRewardsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCollectSpreadRewardsResponse.typeUrl, exports.MsgCollectSpreadRewardsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCollectSpreadRewardsResponse.aminoType, exports.MsgCollectSpreadRewardsResponse.typeUrl);
function createBaseMsgCollectIncentives() {
    return {
        positionIds: [],
        sender: '',
    };
}
exports.MsgCollectIncentives = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
    aminoType: 'osmosis/cl-collect-incentives',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectIncentives.typeUrl ||
                (Array.isArray(o.positionIds) &&
                    (!o.positionIds.length || typeof o.positionIds[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectIncentives.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectIncentives.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectIncentives();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCollectIncentives();
        message.positionIds =
            object.positionIds?.map(e => BigInt(e.toString())) || [];
        message.sender = object.sender ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCollectIncentives();
        message.positionIds = object.position_ids?.map(e => BigInt(e)) || [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positionIds) {
            obj.position_ids = message.positionIds.map(e => e.toString());
        }
        else {
            obj.position_ids = message.positionIds;
        }
        obj.sender = message.sender === '' ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCollectIncentives.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-collect-incentives',
            value: exports.MsgCollectIncentives.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCollectIncentives.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCollectIncentives.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
            value: exports.MsgCollectIncentives.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCollectIncentives.typeUrl, exports.MsgCollectIncentives);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCollectIncentives.aminoType, exports.MsgCollectIncentives.typeUrl);
function createBaseMsgCollectIncentivesResponse() {
    return {
        collectedIncentives: [],
        forfeitedIncentives: [],
    };
}
exports.MsgCollectIncentivesResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse',
    aminoType: 'osmosis/concentratedliquidity/collect-incentives-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectIncentivesResponse.typeUrl ||
                (Array.isArray(o.collectedIncentives) &&
                    (!o.collectedIncentives.length ||
                        coin_1.Coin.is(o.collectedIncentives[0])) &&
                    Array.isArray(o.forfeitedIncentives) &&
                    (!o.forfeitedIncentives.length || coin_1.Coin.is(o.forfeitedIncentives[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectIncentivesResponse.typeUrl ||
                (Array.isArray(o.collected_incentives) &&
                    (!o.collected_incentives.length ||
                        coin_1.Coin.isSDK(o.collected_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        coin_1.Coin.isSDK(o.forfeited_incentives[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCollectIncentivesResponse.typeUrl ||
                (Array.isArray(o.collected_incentives) &&
                    (!o.collected_incentives.length ||
                        coin_1.Coin.isAmino(o.collected_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        coin_1.Coin.isAmino(o.forfeited_incentives[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.collectedIncentives) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCollectIncentivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectedIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = createBaseMsgCollectIncentivesResponse();
        message.collectedIncentives =
            object.collectedIncentives?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.forfeitedIncentives =
            object.forfeitedIncentives?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCollectIncentivesResponse();
        message.collectedIncentives =
            object.collected_incentives?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.forfeitedIncentives =
            object.forfeited_incentives?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.collectedIncentives) {
            obj.collected_incentives = message.collectedIncentives.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.collected_incentives = message.collectedIncentives;
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
        return exports.MsgCollectIncentivesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/collect-incentives-response',
            value: exports.MsgCollectIncentivesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCollectIncentivesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCollectIncentivesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse',
            value: exports.MsgCollectIncentivesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCollectIncentivesResponse.typeUrl, exports.MsgCollectIncentivesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCollectIncentivesResponse.aminoType, exports.MsgCollectIncentivesResponse.typeUrl);
function createBaseMsgFungifyChargedPositions() {
    return {
        positionIds: [],
        sender: '',
    };
}
exports.MsgFungifyChargedPositions = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions',
    aminoType: 'osmosis/cl-fungify-charged-positions',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgFungifyChargedPositions.typeUrl ||
                (Array.isArray(o.positionIds) &&
                    (!o.positionIds.length || typeof o.positionIds[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgFungifyChargedPositions.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgFungifyChargedPositions.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFungifyChargedPositions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgFungifyChargedPositions();
        message.positionIds =
            object.positionIds?.map(e => BigInt(e.toString())) || [];
        message.sender = object.sender ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFungifyChargedPositions();
        message.positionIds = object.position_ids?.map(e => BigInt(e)) || [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positionIds) {
            obj.position_ids = message.positionIds.map(e => e.toString());
        }
        else {
            obj.position_ids = message.positionIds;
        }
        obj.sender = message.sender === '' ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFungifyChargedPositions.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-fungify-charged-positions',
            value: exports.MsgFungifyChargedPositions.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFungifyChargedPositions.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFungifyChargedPositions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions',
            value: exports.MsgFungifyChargedPositions.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFungifyChargedPositions.typeUrl, exports.MsgFungifyChargedPositions);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFungifyChargedPositions.aminoType, exports.MsgFungifyChargedPositions.typeUrl);
function createBaseMsgFungifyChargedPositionsResponse() {
    return {
        newPositionId: BigInt(0),
    };
}
exports.MsgFungifyChargedPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/fungify-charged-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgFungifyChargedPositionsResponse.typeUrl ||
                typeof o.newPositionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgFungifyChargedPositionsResponse.typeUrl ||
                typeof o.new_position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgFungifyChargedPositionsResponse.typeUrl ||
                typeof o.new_position_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.newPositionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.newPositionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFungifyChargedPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPositionId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgFungifyChargedPositionsResponse();
        message.newPositionId =
            object.newPositionId !== undefined && object.newPositionId !== null
                ? BigInt(object.newPositionId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFungifyChargedPositionsResponse();
        if (object.new_position_id !== undefined &&
            object.new_position_id !== null) {
            message.newPositionId = BigInt(object.new_position_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_position_id =
            message.newPositionId !== BigInt(0)
                ? message.newPositionId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFungifyChargedPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/fungify-charged-positions-response',
            value: exports.MsgFungifyChargedPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFungifyChargedPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFungifyChargedPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse',
            value: exports.MsgFungifyChargedPositionsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFungifyChargedPositionsResponse.typeUrl, exports.MsgFungifyChargedPositionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFungifyChargedPositionsResponse.aminoType, exports.MsgFungifyChargedPositionsResponse.typeUrl);
function createBaseMsgTransferPositions() {
    return {
        positionIds: [],
        sender: '',
        newOwner: '',
    };
}
exports.MsgTransferPositions = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
    aminoType: 'osmosis/cl-transfer-positions',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgTransferPositions.typeUrl ||
                (Array.isArray(o.positionIds) &&
                    (!o.positionIds.length || typeof o.positionIds[0] === 'bigint') &&
                    typeof o.sender === 'string' &&
                    typeof o.newOwner === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgTransferPositions.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string' &&
                    typeof o.new_owner === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgTransferPositions.typeUrl ||
                (Array.isArray(o.position_ids) &&
                    (!o.position_ids.length || typeof o.position_ids[0] === 'bigint') &&
                    typeof o.sender === 'string' &&
                    typeof o.new_owner === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.positionIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.newOwner !== '') {
            writer.uint32(26).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPositions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.positionIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.positionIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferPositions();
        message.positionIds =
            object.positionIds?.map(e => BigInt(e.toString())) || [];
        message.sender = object.sender ?? '';
        message.newOwner = object.newOwner ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransferPositions();
        message.positionIds = object.position_ids?.map(e => BigInt(e)) || [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.new_owner !== undefined && object.new_owner !== null) {
            message.newOwner = object.new_owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positionIds) {
            obj.position_ids = message.positionIds.map(e => e.toString());
        }
        else {
            obj.position_ids = message.positionIds;
        }
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.new_owner = message.newOwner === '' ? undefined : message.newOwner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransferPositions.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cl-transfer-positions',
            value: exports.MsgTransferPositions.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferPositions.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferPositions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions',
            value: exports.MsgTransferPositions.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTransferPositions.typeUrl, exports.MsgTransferPositions);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTransferPositions.aminoType, exports.MsgTransferPositions.typeUrl);
function createBaseMsgTransferPositionsResponse() {
    return {};
}
exports.MsgTransferPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/transfer-positions-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgTransferPositionsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgTransferPositionsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgTransferPositionsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferPositionsResponse();
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
        const message = createBaseMsgTransferPositionsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTransferPositionsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransferPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/transfer-positions-response',
            value: exports.MsgTransferPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse',
            value: exports.MsgTransferPositionsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTransferPositionsResponse.typeUrl, exports.MsgTransferPositionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTransferPositionsResponse.aminoType, exports.MsgTransferPositionsResponse.typeUrl);
