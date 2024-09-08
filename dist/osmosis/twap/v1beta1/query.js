"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsResponse = exports.ParamsRequest = exports.GeometricTwapToNowResponse = exports.GeometricTwapToNowRequest = exports.GeometricTwapResponse = exports.GeometricTwapRequest = exports.ArithmeticTwapToNowResponse = exports.ArithmeticTwapToNowRequest = exports.ArithmeticTwapResponse = exports.ArithmeticTwapRequest = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseArithmeticTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
        endTime: undefined,
    };
}
exports.ArithmeticTwapRequest = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapRequest',
    aminoType: 'osmosis/twap/arithmetic-twap-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    timestamp_1.Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== '') {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== '') {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAsset = object.baseAsset ?? '';
        message.quoteAsset = object.quoteAsset ?? '';
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset !== undefined && object.base_asset !== null) {
            message.baseAsset = object.base_asset;
        }
        if (object.quote_asset !== undefined && object.quote_asset !== null) {
            message.quoteAsset = object.quote_asset;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
        obj.quote_asset =
            message.quoteAsset === '' ? undefined : message.quoteAsset;
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        obj.end_time = message.endTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-request',
            value: exports.ArithmeticTwapRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapRequest',
            value: exports.ArithmeticTwapRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ArithmeticTwapRequest.typeUrl, exports.ArithmeticTwapRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ArithmeticTwapRequest.aminoType, exports.ArithmeticTwapRequest.typeUrl);
function createBaseArithmeticTwapResponse() {
    return {
        arithmeticTwap: '',
    };
}
exports.ArithmeticTwapResponse = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapResponse',
    aminoType: 'osmosis/twap/arithmetic-twap-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapResponse.typeUrl ||
                typeof o.arithmeticTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmeticTwap !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapResponse();
        message.arithmeticTwap = object.arithmeticTwap ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapResponse();
        if (object.arithmetic_twap !== undefined &&
            object.arithmetic_twap !== null) {
            message.arithmeticTwap = object.arithmetic_twap;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.arithmetic_twap =
            message.arithmeticTwap === '' ? undefined : message.arithmeticTwap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-response',
            value: exports.ArithmeticTwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapResponse',
            value: exports.ArithmeticTwapResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ArithmeticTwapResponse.typeUrl, exports.ArithmeticTwapResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ArithmeticTwapResponse.aminoType, exports.ArithmeticTwapResponse.typeUrl);
function createBaseArithmeticTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
    };
}
exports.ArithmeticTwapToNowRequest = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest',
    aminoType: 'osmosis/twap/arithmetic-twap-to-now-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapToNowRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    timestamp_1.Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== '') {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== '') {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAsset = object.baseAsset ?? '';
        message.quoteAsset = object.quoteAsset ?? '';
        message.startTime = object.startTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapToNowRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset !== undefined && object.base_asset !== null) {
            message.baseAsset = object.base_asset;
        }
        if (object.quote_asset !== undefined && object.quote_asset !== null) {
            message.quoteAsset = object.quote_asset;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
        obj.quote_asset =
            message.quoteAsset === '' ? undefined : message.quoteAsset;
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-to-now-request',
            value: exports.ArithmeticTwapToNowRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest',
            value: exports.ArithmeticTwapToNowRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ArithmeticTwapToNowRequest.typeUrl, exports.ArithmeticTwapToNowRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ArithmeticTwapToNowRequest.aminoType, exports.ArithmeticTwapToNowRequest.typeUrl);
function createBaseArithmeticTwapToNowResponse() {
    return {
        arithmeticTwap: '',
    };
}
exports.ArithmeticTwapToNowResponse = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse',
    aminoType: 'osmosis/twap/arithmetic-twap-to-now-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapToNowResponse.typeUrl ||
                typeof o.arithmeticTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapToNowResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ArithmeticTwapToNowResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmeticTwap !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowResponse();
        message.arithmeticTwap = object.arithmeticTwap ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapToNowResponse();
        if (object.arithmetic_twap !== undefined &&
            object.arithmetic_twap !== null) {
            message.arithmeticTwap = object.arithmetic_twap;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.arithmetic_twap =
            message.arithmeticTwap === '' ? undefined : message.arithmeticTwap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-to-now-response',
            value: exports.ArithmeticTwapToNowResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse',
            value: exports.ArithmeticTwapToNowResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ArithmeticTwapToNowResponse.typeUrl, exports.ArithmeticTwapToNowResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ArithmeticTwapToNowResponse.aminoType, exports.ArithmeticTwapToNowResponse.typeUrl);
function createBaseGeometricTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
        endTime: undefined,
    };
}
exports.GeometricTwapRequest = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapRequest',
    aminoType: 'osmosis/twap/geometric-twap-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    timestamp_1.Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== '') {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== '') {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAsset = object.baseAsset ?? '';
        message.quoteAsset = object.quoteAsset ?? '';
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeometricTwapRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset !== undefined && object.base_asset !== null) {
            message.baseAsset = object.base_asset;
        }
        if (object.quote_asset !== undefined && object.quote_asset !== null) {
            message.quoteAsset = object.quote_asset;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
        obj.quote_asset =
            message.quoteAsset === '' ? undefined : message.quoteAsset;
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        obj.end_time = message.endTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GeometricTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-request',
            value: exports.GeometricTwapRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GeometricTwapRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GeometricTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapRequest',
            value: exports.GeometricTwapRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GeometricTwapRequest.typeUrl, exports.GeometricTwapRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GeometricTwapRequest.aminoType, exports.GeometricTwapRequest.typeUrl);
function createBaseGeometricTwapResponse() {
    return {
        geometricTwap: '',
    };
}
exports.GeometricTwapResponse = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapResponse',
    aminoType: 'osmosis/twap/geometric-twap-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapResponse.typeUrl ||
                typeof o.geometricTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.geometricTwap !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.geometricTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.geometricTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapResponse();
        message.geometricTwap = object.geometricTwap ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeometricTwapResponse();
        if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
            message.geometricTwap = object.geometric_twap;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.geometric_twap =
            message.geometricTwap === '' ? undefined : message.geometricTwap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GeometricTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-response',
            value: exports.GeometricTwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GeometricTwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GeometricTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapResponse',
            value: exports.GeometricTwapResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GeometricTwapResponse.typeUrl, exports.GeometricTwapResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GeometricTwapResponse.aminoType, exports.GeometricTwapResponse.typeUrl);
function createBaseGeometricTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
    };
}
exports.GeometricTwapToNowRequest = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowRequest',
    aminoType: 'osmosis/twap/geometric-twap-to-now-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapToNowRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    timestamp_1.Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== '') {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== '') {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapToNowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapToNowRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAsset = object.baseAsset ?? '';
        message.quoteAsset = object.quoteAsset ?? '';
        message.startTime = object.startTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeometricTwapToNowRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset !== undefined && object.base_asset !== null) {
            message.baseAsset = object.base_asset;
        }
        if (object.quote_asset !== undefined && object.quote_asset !== null) {
            message.quoteAsset = object.quote_asset;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
        obj.quote_asset =
            message.quoteAsset === '' ? undefined : message.quoteAsset;
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GeometricTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-to-now-request',
            value: exports.GeometricTwapToNowRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GeometricTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GeometricTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowRequest',
            value: exports.GeometricTwapToNowRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GeometricTwapToNowRequest.typeUrl, exports.GeometricTwapToNowRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GeometricTwapToNowRequest.aminoType, exports.GeometricTwapToNowRequest.typeUrl);
function createBaseGeometricTwapToNowResponse() {
    return {
        geometricTwap: '',
    };
}
exports.GeometricTwapToNowResponse = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowResponse',
    aminoType: 'osmosis/twap/geometric-twap-to-now-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapToNowResponse.typeUrl ||
                typeof o.geometricTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapToNowResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GeometricTwapToNowResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.geometricTwap !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.geometricTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.geometricTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGeometricTwapToNowResponse();
        message.geometricTwap = object.geometricTwap ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeometricTwapToNowResponse();
        if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
            message.geometricTwap = object.geometric_twap;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.geometric_twap =
            message.geometricTwap === '' ? undefined : message.geometricTwap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GeometricTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-to-now-response',
            value: exports.GeometricTwapToNowResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GeometricTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GeometricTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowResponse',
            value: exports.GeometricTwapToNowResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GeometricTwapToNowResponse.typeUrl, exports.GeometricTwapToNowResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GeometricTwapToNowResponse.aminoType, exports.GeometricTwapToNowResponse.typeUrl);
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: '/osmosis.twap.v1beta1.ParamsRequest',
    aminoType: 'osmosis/twap/params-request',
    is(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/params-request',
            value: exports.ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ParamsRequest',
            value: exports.ParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsRequest.typeUrl, exports.ParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsRequest.aminoType, exports.ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: '/osmosis.twap.v1beta1.ParamsResponse',
    aminoType: 'osmosis/twap/params-response',
    is(o) {
        return o && (o.$typeUrl === exports.ParamsResponse.typeUrl || genesis_1.Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || genesis_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || genesis_1.Params.isAmino(o.params)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? genesis_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/params-response',
            value: exports.ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ParamsResponse',
            value: exports.ParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsResponse.typeUrl, exports.ParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsResponse.aminoType, exports.ParamsResponse.typeUrl);
