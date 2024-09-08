//@ts-nocheck
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Params } from './genesis';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { toTimestamp, fromTimestamp } from '../../../helpers';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseArithmeticTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
        endTime: undefined,
    };
}
export const ArithmeticTwapRequest = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapRequest',
    aminoType: 'osmosis/twap/arithmetic-twap-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
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
            ? Timestamp.toAmino(toTimestamp(message.startTime))
            : undefined;
        obj.end_time = message.endTime
            ? Timestamp.toAmino(toTimestamp(message.endTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ArithmeticTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-request',
            value: ArithmeticTwapRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapRequest.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapRequest',
            value: ArithmeticTwapRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ArithmeticTwapRequest.typeUrl, ArithmeticTwapRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ArithmeticTwapRequest.aminoType, ArithmeticTwapRequest.typeUrl);
function createBaseArithmeticTwapResponse() {
    return {
        arithmeticTwap: '',
    };
}
export const ArithmeticTwapResponse = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapResponse',
    aminoType: 'osmosis/twap/arithmetic-twap-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapResponse.typeUrl ||
                typeof o.arithmeticTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.arithmeticTwap !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return ArithmeticTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-response',
            value: ArithmeticTwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapResponse.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapResponse',
            value: ArithmeticTwapResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ArithmeticTwapResponse.typeUrl, ArithmeticTwapResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ArithmeticTwapResponse.aminoType, ArithmeticTwapResponse.typeUrl);
function createBaseArithmeticTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
    };
}
export const ArithmeticTwapToNowRequest = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest',
    aminoType: 'osmosis/twap/arithmetic-twap-to-now-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapToNowRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
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
            ? Timestamp.toAmino(toTimestamp(message.startTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ArithmeticTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-to-now-request',
            value: ArithmeticTwapToNowRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest',
            value: ArithmeticTwapToNowRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ArithmeticTwapToNowRequest.typeUrl, ArithmeticTwapToNowRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ArithmeticTwapToNowRequest.aminoType, ArithmeticTwapToNowRequest.typeUrl);
function createBaseArithmeticTwapToNowResponse() {
    return {
        arithmeticTwap: '',
    };
}
export const ArithmeticTwapToNowResponse = {
    typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse',
    aminoType: 'osmosis/twap/arithmetic-twap-to-now-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapToNowResponse.typeUrl ||
                typeof o.arithmeticTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapToNowResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ArithmeticTwapToNowResponse.typeUrl ||
                typeof o.arithmetic_twap === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.arithmeticTwap !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return ArithmeticTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/arithmetic-twap-to-now-response',
            value: ArithmeticTwapToNowResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse',
            value: ArithmeticTwapToNowResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ArithmeticTwapToNowResponse.typeUrl, ArithmeticTwapToNowResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ArithmeticTwapToNowResponse.aminoType, ArithmeticTwapToNowResponse.typeUrl);
function createBaseGeometricTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
        endTime: undefined,
    };
}
export const GeometricTwapRequest = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapRequest',
    aminoType: 'osmosis/twap/geometric-twap-request',
    is(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
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
            ? Timestamp.toAmino(toTimestamp(message.startTime))
            : undefined;
        obj.end_time = message.endTime
            ? Timestamp.toAmino(toTimestamp(message.endTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GeometricTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-request',
            value: GeometricTwapRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GeometricTwapRequest.decode(message.value);
    },
    toProto(message) {
        return GeometricTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapRequest',
            value: GeometricTwapRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GeometricTwapRequest.typeUrl, GeometricTwapRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GeometricTwapRequest.aminoType, GeometricTwapRequest.typeUrl);
function createBaseGeometricTwapResponse() {
    return {
        geometricTwap: '',
    };
}
export const GeometricTwapResponse = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapResponse',
    aminoType: 'osmosis/twap/geometric-twap-response',
    is(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapResponse.typeUrl ||
                typeof o.geometricTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.geometricTwap !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.geometricTwap = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return GeometricTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-response',
            value: GeometricTwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GeometricTwapResponse.decode(message.value);
    },
    toProto(message) {
        return GeometricTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapResponse',
            value: GeometricTwapResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GeometricTwapResponse.typeUrl, GeometricTwapResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GeometricTwapResponse.aminoType, GeometricTwapResponse.typeUrl);
function createBaseGeometricTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: '',
        quoteAsset: '',
        startTime: new Date(),
    };
}
export const GeometricTwapToNowRequest = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowRequest',
    aminoType: 'osmosis/twap/geometric-twap-to-now-request',
    is(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapToNowRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAsset === 'string' &&
                    typeof o.quoteAsset === 'string' &&
                    Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapToNowRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset === 'string' &&
                    typeof o.quote_asset === 'string' &&
                    Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
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
            ? Timestamp.toAmino(toTimestamp(message.startTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GeometricTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-to-now-request',
            value: GeometricTwapToNowRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GeometricTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return GeometricTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowRequest',
            value: GeometricTwapToNowRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GeometricTwapToNowRequest.typeUrl, GeometricTwapToNowRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GeometricTwapToNowRequest.aminoType, GeometricTwapToNowRequest.typeUrl);
function createBaseGeometricTwapToNowResponse() {
    return {
        geometricTwap: '',
    };
}
export const GeometricTwapToNowResponse = {
    typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowResponse',
    aminoType: 'osmosis/twap/geometric-twap-to-now-response',
    is(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapToNowResponse.typeUrl ||
                typeof o.geometricTwap === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapToNowResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GeometricTwapToNowResponse.typeUrl ||
                typeof o.geometric_twap === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.geometricTwap !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeometricTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.geometricTwap = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return GeometricTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/geometric-twap-to-now-response',
            value: GeometricTwapToNowResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GeometricTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return GeometricTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.GeometricTwapToNowResponse',
            value: GeometricTwapToNowResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GeometricTwapToNowResponse.typeUrl, GeometricTwapToNowResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GeometricTwapToNowResponse.aminoType, GeometricTwapToNowResponse.typeUrl);
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: '/osmosis.twap.v1beta1.ParamsRequest',
    aminoType: 'osmosis/twap/params-request',
    is(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/params-request',
            value: ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ParamsRequest',
            value: ParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const ParamsResponse = {
    typeUrl: '/osmosis.twap.v1beta1.ParamsResponse',
    aminoType: 'osmosis/twap/params-response',
    is(o) {
        return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/params-response',
            value: ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.ParamsResponse',
            value: ParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
