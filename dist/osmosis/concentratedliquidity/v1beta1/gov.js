"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolRecord = exports.PoolIdToTickSpacingRecord = exports.TickSpacingDecreaseProposal = exports.CreateConcentratedLiquidityPoolsProposal = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseCreateConcentratedLiquidityPoolsProposal() {
    return {
        title: '',
        description: '',
        poolRecords: [],
    };
}
exports.CreateConcentratedLiquidityPoolsProposal = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal',
    aminoType: 'osmosis/concentratedliquidity/create-concentrated-liquidity-pools-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CreateConcentratedLiquidityPoolsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.poolRecords) &&
                    (!o.poolRecords.length || exports.PoolRecord.is(o.poolRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CreateConcentratedLiquidityPoolsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_records) &&
                    (!o.pool_records.length || exports.PoolRecord.isSDK(o.pool_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CreateConcentratedLiquidityPoolsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_records) &&
                    (!o.pool_records.length || exports.PoolRecord.isAmino(o.pool_records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.poolRecords) {
            exports.PoolRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateConcentratedLiquidityPoolsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.poolRecords.push(exports.PoolRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateConcentratedLiquidityPoolsProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.poolRecords =
            object.poolRecords?.map(e => exports.PoolRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateConcentratedLiquidityPoolsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.poolRecords =
            object.pool_records?.map(e => exports.PoolRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.poolRecords) {
            obj.pool_records = message.poolRecords.map(e => e ? exports.PoolRecord.toAmino(e) : undefined);
        }
        else {
            obj.pool_records = message.poolRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateConcentratedLiquidityPoolsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/create-concentrated-liquidity-pools-proposal',
            value: exports.CreateConcentratedLiquidityPoolsProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CreateConcentratedLiquidityPoolsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CreateConcentratedLiquidityPoolsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal',
            value: exports.CreateConcentratedLiquidityPoolsProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CreateConcentratedLiquidityPoolsProposal.typeUrl, exports.CreateConcentratedLiquidityPoolsProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CreateConcentratedLiquidityPoolsProposal.aminoType, exports.CreateConcentratedLiquidityPoolsProposal.typeUrl);
function createBaseTickSpacingDecreaseProposal() {
    return {
        title: '',
        description: '',
        poolIdToTickSpacingRecords: [],
    };
}
exports.TickSpacingDecreaseProposal = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal',
    aminoType: 'osmosis/concentratedliquidity/tick-spacing-decrease-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TickSpacingDecreaseProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.poolIdToTickSpacingRecords) &&
                    (!o.poolIdToTickSpacingRecords.length ||
                        exports.PoolIdToTickSpacingRecord.is(o.poolIdToTickSpacingRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TickSpacingDecreaseProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_id_to_tick_spacing_records) &&
                    (!o.pool_id_to_tick_spacing_records.length ||
                        exports.PoolIdToTickSpacingRecord.isSDK(o.pool_id_to_tick_spacing_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TickSpacingDecreaseProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_id_to_tick_spacing_records) &&
                    (!o.pool_id_to_tick_spacing_records.length ||
                        exports.PoolIdToTickSpacingRecord.isAmino(o.pool_id_to_tick_spacing_records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.poolIdToTickSpacingRecords) {
            exports.PoolIdToTickSpacingRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickSpacingDecreaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.poolIdToTickSpacingRecords.push(exports.PoolIdToTickSpacingRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTickSpacingDecreaseProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.poolIdToTickSpacingRecords =
            object.poolIdToTickSpacingRecords?.map(e => exports.PoolIdToTickSpacingRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickSpacingDecreaseProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.poolIdToTickSpacingRecords =
            object.pool_id_to_tick_spacing_records?.map(e => exports.PoolIdToTickSpacingRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.poolIdToTickSpacingRecords) {
            obj.pool_id_to_tick_spacing_records =
                message.poolIdToTickSpacingRecords.map(e => e ? exports.PoolIdToTickSpacingRecord.toAmino(e) : undefined);
        }
        else {
            obj.pool_id_to_tick_spacing_records = message.poolIdToTickSpacingRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TickSpacingDecreaseProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-spacing-decrease-proposal',
            value: exports.TickSpacingDecreaseProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TickSpacingDecreaseProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TickSpacingDecreaseProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal',
            value: exports.TickSpacingDecreaseProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TickSpacingDecreaseProposal.typeUrl, exports.TickSpacingDecreaseProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TickSpacingDecreaseProposal.aminoType, exports.TickSpacingDecreaseProposal.typeUrl);
function createBasePoolIdToTickSpacingRecord() {
    return {
        poolId: BigInt(0),
        newTickSpacing: BigInt(0),
    };
}
exports.PoolIdToTickSpacingRecord = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord',
    aminoType: 'osmosis/concentratedliquidity/pool-id-to-tick-spacing-record',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolIdToTickSpacingRecord.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.newTickSpacing === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolIdToTickSpacingRecord.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.new_tick_spacing === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolIdToTickSpacingRecord.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.new_tick_spacing === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.newTickSpacing !== BigInt(0)) {
            writer.uint32(16).uint64(message.newTickSpacing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolIdToTickSpacingRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.newTickSpacing = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolIdToTickSpacingRecord();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.newTickSpacing =
            object.newTickSpacing !== undefined && object.newTickSpacing !== null
                ? BigInt(object.newTickSpacing.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolIdToTickSpacingRecord();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.new_tick_spacing !== undefined &&
            object.new_tick_spacing !== null) {
            message.newTickSpacing = BigInt(object.new_tick_spacing);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.new_tick_spacing =
            message.newTickSpacing !== BigInt(0)
                ? message.newTickSpacing.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolIdToTickSpacingRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-id-to-tick-spacing-record',
            value: exports.PoolIdToTickSpacingRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolIdToTickSpacingRecord.decode(message.value);
    },
    toProto(message) {
        return exports.PoolIdToTickSpacingRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord',
            value: exports.PoolIdToTickSpacingRecord.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolIdToTickSpacingRecord.typeUrl, exports.PoolIdToTickSpacingRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolIdToTickSpacingRecord.aminoType, exports.PoolIdToTickSpacingRecord.typeUrl);
function createBasePoolRecord() {
    return {
        denom0: '',
        denom1: '',
        tickSpacing: BigInt(0),
        spreadFactor: '',
    };
}
exports.PoolRecord = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolRecord',
    aminoType: 'osmosis/concentratedliquidity/pool-record',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolRecord.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tickSpacing === 'bigint' &&
                    typeof o.spreadFactor === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolRecord.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.spread_factor === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolRecord.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.spread_factor === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom0 !== '') {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== '') {
            writer.uint32(18).string(message.denom1);
        }
        if (message.tickSpacing !== BigInt(0)) {
            writer.uint32(24).uint64(message.tickSpacing);
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
        const message = createBasePoolRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom0 = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                case 3:
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
        const message = createBasePoolRecord();
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
        const message = createBasePoolRecord();
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
        return exports.PoolRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-record',
            value: exports.PoolRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolRecord.decode(message.value);
    },
    toProto(message) {
        return exports.PoolRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolRecord',
            value: exports.PoolRecord.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolRecord.typeUrl, exports.PoolRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolRecord.aminoType, exports.PoolRecord.typeUrl);
