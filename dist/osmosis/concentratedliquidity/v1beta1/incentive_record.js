"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncentiveRecordBody = exports.IncentiveRecord = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
function createBaseIncentiveRecord() {
    return {
        incentiveId: BigInt(0),
        poolId: BigInt(0),
        incentiveRecordBody: exports.IncentiveRecordBody.fromPartial({}),
        minUptime: duration_1.Duration.fromPartial({}),
    };
}
exports.IncentiveRecord = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecord',
    aminoType: 'osmosis/concentratedliquidity/incentive-record',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecord.typeUrl ||
                (typeof o.incentiveId === 'bigint' &&
                    typeof o.poolId === 'bigint' &&
                    exports.IncentiveRecordBody.is(o.incentiveRecordBody) &&
                    duration_1.Duration.is(o.minUptime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecord.typeUrl ||
                (typeof o.incentive_id === 'bigint' &&
                    typeof o.pool_id === 'bigint' &&
                    exports.IncentiveRecordBody.isSDK(o.incentive_record_body) &&
                    duration_1.Duration.isSDK(o.min_uptime))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecord.typeUrl ||
                (typeof o.incentive_id === 'bigint' &&
                    typeof o.pool_id === 'bigint' &&
                    exports.IncentiveRecordBody.isAmino(o.incentive_record_body) &&
                    duration_1.Duration.isAmino(o.min_uptime))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.incentiveId !== BigInt(0)) {
            writer.uint32(8).uint64(message.incentiveId);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.incentiveRecordBody !== undefined) {
            exports.IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
        }
        if (message.minUptime !== undefined) {
            duration_1.Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentiveId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.incentiveRecordBody = exports.IncentiveRecordBody.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.minUptime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecord();
        message.incentiveId =
            object.incentiveId !== undefined && object.incentiveId !== null
                ? BigInt(object.incentiveId.toString())
                : BigInt(0);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.incentiveRecordBody =
            object.incentiveRecordBody !== undefined &&
                object.incentiveRecordBody !== null
                ? exports.IncentiveRecordBody.fromPartial(object.incentiveRecordBody)
                : undefined;
        message.minUptime =
            object.minUptime !== undefined && object.minUptime !== null
                ? duration_1.Duration.fromPartial(object.minUptime)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentiveRecord();
        if (object.incentive_id !== undefined && object.incentive_id !== null) {
            message.incentiveId = BigInt(object.incentive_id);
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.incentive_record_body !== undefined &&
            object.incentive_record_body !== null) {
            message.incentiveRecordBody = exports.IncentiveRecordBody.fromAmino(object.incentive_record_body);
        }
        if (object.min_uptime !== undefined && object.min_uptime !== null) {
            message.minUptime = duration_1.Duration.fromAmino(object.min_uptime);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.incentive_id =
            message.incentiveId !== BigInt(0)
                ? message.incentiveId.toString()
                : undefined;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.incentive_record_body = message.incentiveRecordBody
            ? exports.IncentiveRecordBody.toAmino(message.incentiveRecordBody)
            : undefined;
        obj.min_uptime = message.minUptime
            ? duration_1.Duration.toAmino(message.minUptime)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentiveRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/incentive-record',
            value: exports.IncentiveRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.IncentiveRecord.decode(message.value);
    },
    toProto(message) {
        return exports.IncentiveRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecord',
            value: exports.IncentiveRecord.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.IncentiveRecord.typeUrl, exports.IncentiveRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IncentiveRecord.aminoType, exports.IncentiveRecord.typeUrl);
function createBaseIncentiveRecordBody() {
    return {
        remainingCoin: coin_1.DecCoin.fromPartial({}),
        emissionRate: '',
        startTime: new Date(),
    };
}
exports.IncentiveRecordBody = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody',
    aminoType: 'osmosis/concentratedliquidity/incentive-record-body',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordBody.typeUrl ||
                (coin_1.DecCoin.is(o.remainingCoin) &&
                    typeof o.emissionRate === 'string' &&
                    timestamp_1.Timestamp.is(o.startTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordBody.typeUrl ||
                (coin_1.DecCoin.isSDK(o.remaining_coin) &&
                    typeof o.emission_rate === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.start_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordBody.typeUrl ||
                (coin_1.DecCoin.isAmino(o.remaining_coin) &&
                    typeof o.emission_rate === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.start_time))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.remainingCoin !== undefined) {
            coin_1.DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.emissionRate !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.emissionRate, 18).atomics);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.remainingCoin = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.emissionRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
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
        const message = createBaseIncentiveRecordBody();
        message.remainingCoin =
            object.remainingCoin !== undefined && object.remainingCoin !== null
                ? coin_1.DecCoin.fromPartial(object.remainingCoin)
                : undefined;
        message.emissionRate = object.emissionRate ?? '';
        message.startTime = object.startTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentiveRecordBody();
        if (object.remaining_coin !== undefined && object.remaining_coin !== null) {
            message.remainingCoin = coin_1.DecCoin.fromAmino(object.remaining_coin);
        }
        if (object.emission_rate !== undefined && object.emission_rate !== null) {
            message.emissionRate = object.emission_rate;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.remaining_coin = message.remainingCoin
            ? coin_1.DecCoin.toAmino(message.remainingCoin)
            : undefined;
        obj.emission_rate =
            message.emissionRate === '' ? undefined : message.emissionRate;
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentiveRecordBody.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/incentive-record-body',
            value: exports.IncentiveRecordBody.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.IncentiveRecordBody.decode(message.value);
    },
    toProto(message) {
        return exports.IncentiveRecordBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody',
            value: exports.IncentiveRecordBody.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.IncentiveRecordBody.typeUrl, exports.IncentiveRecordBody);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IncentiveRecordBody.aminoType, exports.IncentiveRecordBody.typeUrl);
