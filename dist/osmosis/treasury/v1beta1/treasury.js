"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        reserveAllowableOffset: '',
        maxFeeMultiplier: '',
        windowShort: BigInt(0),
        windowLong: BigInt(0),
        windowProbation: BigInt(0),
    };
}
exports.Params = {
    typeUrl: '/osmosis.treasury.v1beta1.Params',
    aminoType: 'osmosis/treasury/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (typeof o.reserveAllowableOffset === 'string' &&
                    typeof o.maxFeeMultiplier === 'string' &&
                    typeof o.windowShort === 'bigint' &&
                    typeof o.windowLong === 'bigint' &&
                    typeof o.windowProbation === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (typeof o.reserve_allowable_offset === 'string' &&
                    typeof o.max_fee_multiplier === 'string' &&
                    typeof o.window_short === 'bigint' &&
                    typeof o.window_long === 'bigint' &&
                    typeof o.window_probation === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (typeof o.reserve_allowable_offset === 'string' &&
                    typeof o.max_fee_multiplier === 'string' &&
                    typeof o.window_short === 'bigint' &&
                    typeof o.window_long === 'bigint' &&
                    typeof o.window_probation === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.reserveAllowableOffset !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.reserveAllowableOffset, 18).atomics);
        }
        if (message.maxFeeMultiplier !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.maxFeeMultiplier, 18).atomics);
        }
        if (message.windowShort !== BigInt(0)) {
            writer.uint32(24).uint64(message.windowShort);
        }
        if (message.windowLong !== BigInt(0)) {
            writer.uint32(32).uint64(message.windowLong);
        }
        if (message.windowProbation !== BigInt(0)) {
            writer.uint32(40).uint64(message.windowProbation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserveAllowableOffset = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.maxFeeMultiplier = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.windowShort = reader.uint64();
                    break;
                case 4:
                    message.windowLong = reader.uint64();
                    break;
                case 5:
                    message.windowProbation = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.reserveAllowableOffset = object.reserveAllowableOffset ?? '';
        message.maxFeeMultiplier = object.maxFeeMultiplier ?? '';
        message.windowShort =
            object.windowShort !== undefined && object.windowShort !== null
                ? BigInt(object.windowShort.toString())
                : BigInt(0);
        message.windowLong =
            object.windowLong !== undefined && object.windowLong !== null
                ? BigInt(object.windowLong.toString())
                : BigInt(0);
        message.windowProbation =
            object.windowProbation !== undefined && object.windowProbation !== null
                ? BigInt(object.windowProbation.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.reserve_allowable_offset !== undefined &&
            object.reserve_allowable_offset !== null) {
            message.reserveAllowableOffset = object.reserve_allowable_offset;
        }
        if (object.max_fee_multiplier !== undefined &&
            object.max_fee_multiplier !== null) {
            message.maxFeeMultiplier = object.max_fee_multiplier;
        }
        if (object.window_short !== undefined && object.window_short !== null) {
            message.windowShort = BigInt(object.window_short);
        }
        if (object.window_long !== undefined && object.window_long !== null) {
            message.windowLong = BigInt(object.window_long);
        }
        if (object.window_probation !== undefined &&
            object.window_probation !== null) {
            message.windowProbation = BigInt(object.window_probation);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reserve_allowable_offset =
            message.reserveAllowableOffset === ''
                ? undefined
                : message.reserveAllowableOffset;
        obj.max_fee_multiplier =
            message.maxFeeMultiplier === '' ? undefined : message.maxFeeMultiplier;
        obj.window_short =
            message.windowShort !== BigInt(0)
                ? message.windowShort.toString()
                : undefined;
        obj.window_long =
            message.windowLong !== BigInt(0)
                ? message.windowLong.toString()
                : undefined;
        obj.window_probation =
            message.windowProbation !== BigInt(0)
                ? message.windowProbation.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/params',
            value: exports.Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
