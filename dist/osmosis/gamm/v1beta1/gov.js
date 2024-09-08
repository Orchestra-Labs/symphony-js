"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetScalingFactorControllerProposal = exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal = exports.PoolRecordWithCFMMLink = exports.UpdateMigrationRecordsProposal = exports.ReplaceMigrationRecordsProposal = void 0;
//@ts-nocheck
const shared_1 = require("./shared");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseReplaceMigrationRecordsProposal() {
    return {
        $typeUrl: '/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal',
        title: '',
        description: '',
        records: [],
    };
}
exports.ReplaceMigrationRecordsProposal = {
    typeUrl: '/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal',
    aminoType: 'osmosis/ReplaceMigrationRecordsProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ReplaceMigrationRecordsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length ||
                        shared_1.BalancerToConcentratedPoolLink.is(o.records[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ReplaceMigrationRecordsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length ||
                        shared_1.BalancerToConcentratedPoolLink.isSDK(o.records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ReplaceMigrationRecordsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length ||
                        shared_1.BalancerToConcentratedPoolLink.isAmino(o.records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            shared_1.BalancerToConcentratedPoolLink.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReplaceMigrationRecordsProposal();
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
                    message.records.push(shared_1.BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseReplaceMigrationRecordsProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.records =
            object.records?.map(e => shared_1.BalancerToConcentratedPoolLink.fromPartial(e)) ||
                [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseReplaceMigrationRecordsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.records =
            object.records?.map(e => shared_1.BalancerToConcentratedPoolLink.fromAmino(e)) ||
                [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? shared_1.BalancerToConcentratedPoolLink.toAmino(e) : undefined);
        }
        else {
            obj.records = message.records;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ReplaceMigrationRecordsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ReplaceMigrationRecordsProposal',
            value: exports.ReplaceMigrationRecordsProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ReplaceMigrationRecordsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ReplaceMigrationRecordsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal',
            value: exports.ReplaceMigrationRecordsProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ReplaceMigrationRecordsProposal.typeUrl, exports.ReplaceMigrationRecordsProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ReplaceMigrationRecordsProposal.aminoType, exports.ReplaceMigrationRecordsProposal.typeUrl);
function createBaseUpdateMigrationRecordsProposal() {
    return {
        $typeUrl: '/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal',
        title: '',
        description: '',
        records: [],
    };
}
exports.UpdateMigrationRecordsProposal = {
    typeUrl: '/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal',
    aminoType: 'osmosis/UpdateMigrationRecordsProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UpdateMigrationRecordsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length ||
                        shared_1.BalancerToConcentratedPoolLink.is(o.records[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UpdateMigrationRecordsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length ||
                        shared_1.BalancerToConcentratedPoolLink.isSDK(o.records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UpdateMigrationRecordsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length ||
                        shared_1.BalancerToConcentratedPoolLink.isAmino(o.records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.records) {
            shared_1.BalancerToConcentratedPoolLink.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMigrationRecordsProposal();
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
                    message.records.push(shared_1.BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateMigrationRecordsProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.records =
            object.records?.map(e => shared_1.BalancerToConcentratedPoolLink.fromPartial(e)) ||
                [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateMigrationRecordsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.records =
            object.records?.map(e => shared_1.BalancerToConcentratedPoolLink.fromAmino(e)) ||
                [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.records) {
            obj.records = message.records.map(e => e ? shared_1.BalancerToConcentratedPoolLink.toAmino(e) : undefined);
        }
        else {
            obj.records = message.records;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateMigrationRecordsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/UpdateMigrationRecordsProposal',
            value: exports.UpdateMigrationRecordsProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateMigrationRecordsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateMigrationRecordsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal',
            value: exports.UpdateMigrationRecordsProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UpdateMigrationRecordsProposal.typeUrl, exports.UpdateMigrationRecordsProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpdateMigrationRecordsProposal.aminoType, exports.UpdateMigrationRecordsProposal.typeUrl);
function createBasePoolRecordWithCFMMLink() {
    return {
        denom0: '',
        denom1: '',
        tickSpacing: BigInt(0),
        exponentAtPriceOne: '',
        spreadFactor: '',
        balancerPoolId: BigInt(0),
    };
}
exports.PoolRecordWithCFMMLink = {
    typeUrl: '/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink',
    aminoType: 'osmosis/gamm/pool-record-with-cfmm-link',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolRecordWithCFMMLink.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tickSpacing === 'bigint' &&
                    typeof o.exponentAtPriceOne === 'string' &&
                    typeof o.spreadFactor === 'string' &&
                    typeof o.balancerPoolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolRecordWithCFMMLink.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.exponent_at_price_one === 'string' &&
                    typeof o.spread_factor === 'string' &&
                    typeof o.balancer_pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolRecordWithCFMMLink.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.tick_spacing === 'bigint' &&
                    typeof o.exponent_at_price_one === 'string' &&
                    typeof o.spread_factor === 'string' &&
                    typeof o.balancer_pool_id === 'bigint')));
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
        if (message.exponentAtPriceOne !== '') {
            writer.uint32(34).string(message.exponentAtPriceOne);
        }
        if (message.spreadFactor !== '') {
            writer
                .uint32(42)
                .string(math_1.Decimal.fromUserInput(message.spreadFactor, 18).atomics);
        }
        if (message.balancerPoolId !== BigInt(0)) {
            writer.uint32(48).uint64(message.balancerPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolRecordWithCFMMLink();
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
                case 4:
                    message.exponentAtPriceOne = reader.string();
                    break;
                case 5:
                    message.spreadFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.balancerPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolRecordWithCFMMLink();
        message.denom0 = object.denom0 ?? '';
        message.denom1 = object.denom1 ?? '';
        message.tickSpacing =
            object.tickSpacing !== undefined && object.tickSpacing !== null
                ? BigInt(object.tickSpacing.toString())
                : BigInt(0);
        message.exponentAtPriceOne = object.exponentAtPriceOne ?? '';
        message.spreadFactor = object.spreadFactor ?? '';
        message.balancerPoolId =
            object.balancerPoolId !== undefined && object.balancerPoolId !== null
                ? BigInt(object.balancerPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolRecordWithCFMMLink();
        if (object.denom0 !== undefined && object.denom0 !== null) {
            message.denom0 = object.denom0;
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = object.denom1;
        }
        if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
            message.tickSpacing = BigInt(object.tick_spacing);
        }
        if (object.exponent_at_price_one !== undefined &&
            object.exponent_at_price_one !== null) {
            message.exponentAtPriceOne = object.exponent_at_price_one;
        }
        if (object.spread_factor !== undefined && object.spread_factor !== null) {
            message.spreadFactor = object.spread_factor;
        }
        if (object.balancer_pool_id !== undefined &&
            object.balancer_pool_id !== null) {
            message.balancerPoolId = BigInt(object.balancer_pool_id);
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
        obj.exponent_at_price_one =
            message.exponentAtPriceOne === ''
                ? undefined
                : message.exponentAtPriceOne;
        obj.spread_factor =
            message.spreadFactor === '' ? undefined : message.spreadFactor;
        obj.balancer_pool_id =
            message.balancerPoolId !== BigInt(0)
                ? message.balancerPoolId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolRecordWithCFMMLink.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/pool-record-with-cfmm-link',
            value: exports.PoolRecordWithCFMMLink.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolRecordWithCFMMLink.decode(message.value);
    },
    toProto(message) {
        return exports.PoolRecordWithCFMMLink.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink',
            value: exports.PoolRecordWithCFMMLink.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolRecordWithCFMMLink.typeUrl, exports.PoolRecordWithCFMMLink);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolRecordWithCFMMLink.aminoType, exports.PoolRecordWithCFMMLink.typeUrl);
function createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal() {
    return {
        $typeUrl: '/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal',
        title: '',
        description: '',
        poolRecordsWithCfmmLink: [],
    };
}
exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal = {
    typeUrl: '/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal',
    aminoType: 'osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.poolRecordsWithCfmmLink) &&
                    (!o.poolRecordsWithCfmmLink.length ||
                        exports.PoolRecordWithCFMMLink.is(o.poolRecordsWithCfmmLink[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_records_with_cfmm_link) &&
                    (!o.pool_records_with_cfmm_link.length ||
                        exports.PoolRecordWithCFMMLink.isSDK(o.pool_records_with_cfmm_link[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_records_with_cfmm_link) &&
                    (!o.pool_records_with_cfmm_link.length ||
                        exports.PoolRecordWithCFMMLink.isAmino(o.pool_records_with_cfmm_link[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.poolRecordsWithCfmmLink) {
            exports.PoolRecordWithCFMMLink.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
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
                    message.poolRecordsWithCfmmLink.push(exports.PoolRecordWithCFMMLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.poolRecordsWithCfmmLink =
            object.poolRecordsWithCfmmLink?.map(e => exports.PoolRecordWithCFMMLink.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.poolRecordsWithCfmmLink =
            object.pool_records_with_cfmm_link?.map(e => exports.PoolRecordWithCFMMLink.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.poolRecordsWithCfmmLink) {
            obj.pool_records_with_cfmm_link = message.poolRecordsWithCfmmLink.map(e => e ? exports.PoolRecordWithCFMMLink.toAmino(e) : undefined);
        }
        else {
            obj.pool_records_with_cfmm_link = message.poolRecordsWithCfmmLink;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal',
            value: exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal',
            value: exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl, exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.aminoType, exports.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl);
function createBaseSetScalingFactorControllerProposal() {
    return {
        $typeUrl: '/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal',
        title: '',
        description: '',
        poolId: BigInt(0),
        controllerAddress: '',
    };
}
exports.SetScalingFactorControllerProposal = {
    typeUrl: '/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal',
    aminoType: 'osmosis/SetScalingFactorControllerProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SetScalingFactorControllerProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.controllerAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SetScalingFactorControllerProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.controller_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SetScalingFactorControllerProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.controller_address === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.controllerAddress !== '') {
            writer.uint32(34).string(message.controllerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetScalingFactorControllerProposal();
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
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.controllerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetScalingFactorControllerProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.controllerAddress = object.controllerAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetScalingFactorControllerProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.controller_address !== undefined &&
            object.controller_address !== null) {
            message.controllerAddress = object.controller_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.controller_address =
            message.controllerAddress === '' ? undefined : message.controllerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SetScalingFactorControllerProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/SetScalingFactorControllerProposal',
            value: exports.SetScalingFactorControllerProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SetScalingFactorControllerProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SetScalingFactorControllerProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal',
            value: exports.SetScalingFactorControllerProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SetScalingFactorControllerProposal.typeUrl, exports.SetScalingFactorControllerProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SetScalingFactorControllerProposal.aminoType, exports.SetScalingFactorControllerProposal.typeUrl);
