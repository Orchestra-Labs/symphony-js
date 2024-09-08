//@ts-nocheck
import { Timestamp } from '../../../google/protobuf/timestamp';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes, } from '../../../helpers';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseTwapRecord() {
    return {
        poolId: BigInt(0),
        asset0Denom: '',
        asset1Denom: '',
        height: BigInt(0),
        time: new Date(),
        p0LastSpotPrice: '',
        p1LastSpotPrice: '',
        p0ArithmeticTwapAccumulator: '',
        p1ArithmeticTwapAccumulator: '',
        geometricTwapAccumulator: '',
        lastErrorTime: new Date(),
    };
}
export const TwapRecord = {
    typeUrl: '/osmosis.twap.v1beta1.TwapRecord',
    aminoType: 'osmosis/twap/twap-record',
    is(o) {
        return (o &&
            (o.$typeUrl === TwapRecord.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.asset0Denom === 'string' &&
                    typeof o.asset1Denom === 'string' &&
                    typeof o.height === 'bigint' &&
                    Timestamp.is(o.time) &&
                    typeof o.p0LastSpotPrice === 'string' &&
                    typeof o.p1LastSpotPrice === 'string' &&
                    typeof o.p0ArithmeticTwapAccumulator === 'string' &&
                    typeof o.p1ArithmeticTwapAccumulator === 'string' &&
                    typeof o.geometricTwapAccumulator === 'string' &&
                    Timestamp.is(o.lastErrorTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TwapRecord.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.asset0_denom === 'string' &&
                    typeof o.asset1_denom === 'string' &&
                    typeof o.height === 'bigint' &&
                    Timestamp.isSDK(o.time) &&
                    typeof o.p0_last_spot_price === 'string' &&
                    typeof o.p1_last_spot_price === 'string' &&
                    typeof o.p0_arithmetic_twap_accumulator === 'string' &&
                    typeof o.p1_arithmetic_twap_accumulator === 'string' &&
                    typeof o.geometric_twap_accumulator === 'string' &&
                    Timestamp.isSDK(o.last_error_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TwapRecord.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.asset0_denom === 'string' &&
                    typeof o.asset1_denom === 'string' &&
                    typeof o.height === 'bigint' &&
                    Timestamp.isAmino(o.time) &&
                    typeof o.p0_last_spot_price === 'string' &&
                    typeof o.p1_last_spot_price === 'string' &&
                    typeof o.p0_arithmetic_twap_accumulator === 'string' &&
                    typeof o.p1_arithmetic_twap_accumulator === 'string' &&
                    typeof o.geometric_twap_accumulator === 'string' &&
                    Timestamp.isAmino(o.last_error_time))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.asset0Denom !== '') {
            writer.uint32(18).string(message.asset0Denom);
        }
        if (message.asset1Denom !== '') {
            writer.uint32(26).string(message.asset1Denom);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(32).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
        }
        if (message.p0LastSpotPrice !== '') {
            writer
                .uint32(50)
                .string(Decimal.fromUserInput(message.p0LastSpotPrice, 18).atomics);
        }
        if (message.p1LastSpotPrice !== '') {
            writer
                .uint32(58)
                .string(Decimal.fromUserInput(message.p1LastSpotPrice, 18).atomics);
        }
        if (message.p0ArithmeticTwapAccumulator !== '') {
            writer
                .uint32(66)
                .string(Decimal.fromUserInput(message.p0ArithmeticTwapAccumulator, 18)
                .atomics);
        }
        if (message.p1ArithmeticTwapAccumulator !== '') {
            writer
                .uint32(74)
                .string(Decimal.fromUserInput(message.p1ArithmeticTwapAccumulator, 18)
                .atomics);
        }
        if (message.geometricTwapAccumulator !== '') {
            writer
                .uint32(82)
                .string(Decimal.fromUserInput(message.geometricTwapAccumulator, 18).atomics);
        }
        if (message.lastErrorTime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwapRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.asset0Denom = reader.string();
                    break;
                case 3:
                    message.asset1Denom = reader.string();
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.p0LastSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.p1LastSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.p0ArithmeticTwapAccumulator = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.p1ArithmeticTwapAccumulator = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.geometricTwapAccumulator = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.lastErrorTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTwapRecord();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.asset0Denom = object.asset0Denom ?? '';
        message.asset1Denom = object.asset1Denom ?? '';
        message.height =
            object.height !== undefined && object.height !== null
                ? BigInt(object.height.toString())
                : BigInt(0);
        message.time = object.time ?? undefined;
        message.p0LastSpotPrice = object.p0LastSpotPrice ?? '';
        message.p1LastSpotPrice = object.p1LastSpotPrice ?? '';
        message.p0ArithmeticTwapAccumulator =
            object.p0ArithmeticTwapAccumulator ?? '';
        message.p1ArithmeticTwapAccumulator =
            object.p1ArithmeticTwapAccumulator ?? '';
        message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? '';
        message.lastErrorTime = object.lastErrorTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTwapRecord();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.asset0_denom !== undefined && object.asset0_denom !== null) {
            message.asset0Denom = object.asset0_denom;
        }
        if (object.asset1_denom !== undefined && object.asset1_denom !== null) {
            message.asset1Denom = object.asset1_denom;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.p0_last_spot_price !== undefined &&
            object.p0_last_spot_price !== null) {
            message.p0LastSpotPrice = object.p0_last_spot_price;
        }
        if (object.p1_last_spot_price !== undefined &&
            object.p1_last_spot_price !== null) {
            message.p1LastSpotPrice = object.p1_last_spot_price;
        }
        if (object.p0_arithmetic_twap_accumulator !== undefined &&
            object.p0_arithmetic_twap_accumulator !== null) {
            message.p0ArithmeticTwapAccumulator =
                object.p0_arithmetic_twap_accumulator;
        }
        if (object.p1_arithmetic_twap_accumulator !== undefined &&
            object.p1_arithmetic_twap_accumulator !== null) {
            message.p1ArithmeticTwapAccumulator =
                object.p1_arithmetic_twap_accumulator;
        }
        if (object.geometric_twap_accumulator !== undefined &&
            object.geometric_twap_accumulator !== null) {
            message.geometricTwapAccumulator = object.geometric_twap_accumulator;
        }
        if (object.last_error_time !== undefined &&
            object.last_error_time !== null) {
            message.lastErrorTime = fromTimestamp(Timestamp.fromAmino(object.last_error_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.asset0_denom =
            message.asset0Denom === '' ? undefined : message.asset0Denom;
        obj.asset1_denom =
            message.asset1Denom === '' ? undefined : message.asset1Denom;
        obj.height = message.height ? message.height.toString() : '0';
        obj.time = message.time
            ? Timestamp.toAmino(toTimestamp(message.time))
            : undefined;
        obj.p0_last_spot_price =
            message.p0LastSpotPrice === '' ? undefined : message.p0LastSpotPrice;
        obj.p1_last_spot_price =
            message.p1LastSpotPrice === '' ? undefined : message.p1LastSpotPrice;
        obj.p0_arithmetic_twap_accumulator =
            message.p0ArithmeticTwapAccumulator === ''
                ? undefined
                : message.p0ArithmeticTwapAccumulator;
        obj.p1_arithmetic_twap_accumulator =
            message.p1ArithmeticTwapAccumulator === ''
                ? undefined
                : message.p1ArithmeticTwapAccumulator;
        obj.geometric_twap_accumulator =
            message.geometricTwapAccumulator === ''
                ? undefined
                : message.geometricTwapAccumulator;
        obj.last_error_time = message.lastErrorTime
            ? Timestamp.toAmino(toTimestamp(message.lastErrorTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TwapRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/twap-record',
            value: TwapRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TwapRecord.decode(message.value);
    },
    toProto(message) {
        return TwapRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.TwapRecord',
            value: TwapRecord.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TwapRecord.typeUrl, TwapRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(TwapRecord.aminoType, TwapRecord.typeUrl);
function createBasePruningState() {
    return {
        isPruning: false,
        lastKeptTime: new Date(),
        lastKeySeen: new Uint8Array(),
        lastSeenPoolId: BigInt(0),
    };
}
export const PruningState = {
    typeUrl: '/osmosis.twap.v1beta1.PruningState',
    aminoType: 'osmosis/twap/pruning-state',
    is(o) {
        return (o &&
            (o.$typeUrl === PruningState.typeUrl ||
                (typeof o.isPruning === 'boolean' &&
                    Timestamp.is(o.lastKeptTime) &&
                    (o.lastKeySeen instanceof Uint8Array ||
                        typeof o.lastKeySeen === 'string') &&
                    typeof o.lastSeenPoolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PruningState.typeUrl ||
                (typeof o.is_pruning === 'boolean' &&
                    Timestamp.isSDK(o.last_kept_time) &&
                    (o.last_key_seen instanceof Uint8Array ||
                        typeof o.last_key_seen === 'string') &&
                    typeof o.last_seen_pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PruningState.typeUrl ||
                (typeof o.is_pruning === 'boolean' &&
                    Timestamp.isAmino(o.last_kept_time) &&
                    (o.last_key_seen instanceof Uint8Array ||
                        typeof o.last_key_seen === 'string') &&
                    typeof o.last_seen_pool_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.isPruning === true) {
            writer.uint32(8).bool(message.isPruning);
        }
        if (message.lastKeptTime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastKeptTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastKeySeen.length !== 0) {
            writer.uint32(26).bytes(message.lastKeySeen);
        }
        if (message.lastSeenPoolId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastSeenPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePruningState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isPruning = reader.bool();
                    break;
                case 2:
                    message.lastKeptTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastKeySeen = reader.bytes();
                    break;
                case 4:
                    message.lastSeenPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePruningState();
        message.isPruning = object.isPruning ?? false;
        message.lastKeptTime = object.lastKeptTime ?? undefined;
        message.lastKeySeen = object.lastKeySeen ?? new Uint8Array();
        message.lastSeenPoolId =
            object.lastSeenPoolId !== undefined && object.lastSeenPoolId !== null
                ? BigInt(object.lastSeenPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePruningState();
        if (object.is_pruning !== undefined && object.is_pruning !== null) {
            message.isPruning = object.is_pruning;
        }
        if (object.last_kept_time !== undefined && object.last_kept_time !== null) {
            message.lastKeptTime = fromTimestamp(Timestamp.fromAmino(object.last_kept_time));
        }
        if (object.last_key_seen !== undefined && object.last_key_seen !== null) {
            message.lastKeySeen = bytesFromBase64(object.last_key_seen);
        }
        if (object.last_seen_pool_id !== undefined &&
            object.last_seen_pool_id !== null) {
            message.lastSeenPoolId = BigInt(object.last_seen_pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_pruning =
            message.isPruning === false ? undefined : message.isPruning;
        obj.last_kept_time = message.lastKeptTime
            ? Timestamp.toAmino(toTimestamp(message.lastKeptTime))
            : undefined;
        obj.last_key_seen = message.lastKeySeen
            ? base64FromBytes(message.lastKeySeen)
            : undefined;
        obj.last_seen_pool_id =
            message.lastSeenPoolId !== BigInt(0)
                ? message.lastSeenPoolId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PruningState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/twap/pruning-state',
            value: PruningState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PruningState.decode(message.value);
    },
    toProto(message) {
        return PruningState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.twap.v1beta1.PruningState',
            value: PruningState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PruningState.typeUrl, PruningState);
GlobalDecoderRegistry.registerAminoProtoMapping(PruningState.aminoType, PruningState.typeUrl);
