"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccumObject = exports.GenesisState = exports.PositionData = exports.PoolData = exports.FullTick = void 0;
//@ts-nocheck
const tick_info_1 = require("./tick_info");
const any_1 = require("../../../google/protobuf/any");
const incentive_record_1 = require("./incentive_record");
const position_1 = require("./position");
const accum_1 = require("../../accum/v1beta1/accum");
const params_1 = require("../params");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseFullTick() {
    return {
        poolId: BigInt(0),
        tickIndex: BigInt(0),
        info: tick_info_1.TickInfo.fromPartial({}),
    };
}
exports.FullTick = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullTick',
    aminoType: 'osmosis/concentratedliquidity/full-tick',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.FullTick.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tickIndex === 'bigint' &&
                    tick_info_1.TickInfo.is(o.info))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.FullTick.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.tick_index === 'bigint' &&
                    tick_info_1.TickInfo.isSDK(o.info))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.FullTick.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.tick_index === 'bigint' &&
                    tick_info_1.TickInfo.isAmino(o.info))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        if (message.info !== undefined) {
            tick_info_1.TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullTick();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tickIndex = reader.int64();
                    break;
                case 3:
                    message.info = tick_info_1.TickInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFullTick();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tickIndex =
            object.tickIndex !== undefined && object.tickIndex !== null
                ? BigInt(object.tickIndex.toString())
                : BigInt(0);
        message.info =
            object.info !== undefined && object.info !== null
                ? tick_info_1.TickInfo.fromPartial(object.info)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFullTick();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.tick_index !== undefined && object.tick_index !== null) {
            message.tickIndex = BigInt(object.tick_index);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = tick_info_1.TickInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.tick_index =
            message.tickIndex !== BigInt(0)
                ? message.tickIndex.toString()
                : undefined;
        obj.info = message.info ? tick_info_1.TickInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FullTick.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/full-tick',
            value: exports.FullTick.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.FullTick.decode(message.value);
    },
    toProto(message) {
        return exports.FullTick.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullTick',
            value: exports.FullTick.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.FullTick.typeUrl, exports.FullTick);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.FullTick.aminoType, exports.FullTick.typeUrl);
function createBasePoolData() {
    return {
        pool: undefined,
        ticks: [],
        spreadRewardAccumulator: exports.AccumObject.fromPartial({}),
        incentivesAccumulators: [],
        incentiveRecords: [],
    };
}
exports.PoolData = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolData',
    aminoType: 'osmosis/concentratedliquidity/pool-data',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolData.typeUrl ||
                (Array.isArray(o.ticks) &&
                    (!o.ticks.length || exports.FullTick.is(o.ticks[0])) &&
                    exports.AccumObject.is(o.spreadRewardAccumulator) &&
                    Array.isArray(o.incentivesAccumulators) &&
                    (!o.incentivesAccumulators.length ||
                        exports.AccumObject.is(o.incentivesAccumulators[0])) &&
                    Array.isArray(o.incentiveRecords) &&
                    (!o.incentiveRecords.length ||
                        incentive_record_1.IncentiveRecord.is(o.incentiveRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolData.typeUrl ||
                (Array.isArray(o.ticks) &&
                    (!o.ticks.length || exports.FullTick.isSDK(o.ticks[0])) &&
                    exports.AccumObject.isSDK(o.spread_reward_accumulator) &&
                    Array.isArray(o.incentives_accumulators) &&
                    (!o.incentives_accumulators.length ||
                        exports.AccumObject.isSDK(o.incentives_accumulators[0])) &&
                    Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        incentive_record_1.IncentiveRecord.isSDK(o.incentive_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolData.typeUrl ||
                (Array.isArray(o.ticks) &&
                    (!o.ticks.length || exports.FullTick.isAmino(o.ticks[0])) &&
                    exports.AccumObject.isAmino(o.spread_reward_accumulator) &&
                    Array.isArray(o.incentives_accumulators) &&
                    (!o.incentives_accumulators.length ||
                        exports.AccumObject.isAmino(o.incentives_accumulators[0])) &&
                    Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        incentive_record_1.IncentiveRecord.isAmino(o.incentive_records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ticks) {
            exports.FullTick.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.spreadRewardAccumulator !== undefined) {
            exports.AccumObject.encode(message.spreadRewardAccumulator, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.incentivesAccumulators) {
            exports.AccumObject.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.incentiveRecords) {
            incentive_record_1.IncentiveRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.ticks.push(exports.FullTick.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.spreadRewardAccumulator = exports.AccumObject.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.incentivesAccumulators.push(exports.AccumObject.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.incentiveRecords.push(incentive_record_1.IncentiveRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolData();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.GlobalDecoderRegistry.fromPartial(object.pool)
                : undefined;
        message.ticks = object.ticks?.map(e => exports.FullTick.fromPartial(e)) || [];
        message.spreadRewardAccumulator =
            object.spreadRewardAccumulator !== undefined &&
                object.spreadRewardAccumulator !== null
                ? exports.AccumObject.fromPartial(object.spreadRewardAccumulator)
                : undefined;
        message.incentivesAccumulators =
            object.incentivesAccumulators?.map(e => exports.AccumObject.fromPartial(e)) || [];
        message.incentiveRecords =
            object.incentiveRecords?.map(e => incentive_record_1.IncentiveRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolData();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.pool);
        }
        message.ticks = object.ticks?.map(e => exports.FullTick.fromAmino(e)) || [];
        if (object.spread_reward_accumulator !== undefined &&
            object.spread_reward_accumulator !== null) {
            message.spreadRewardAccumulator = exports.AccumObject.fromAmino(object.spread_reward_accumulator);
        }
        message.incentivesAccumulators =
            object.incentives_accumulators?.map(e => exports.AccumObject.fromAmino(e)) || [];
        message.incentiveRecords =
            object.incentive_records?.map(e => incentive_record_1.IncentiveRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool
            ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.pool)
            : undefined;
        if (message.ticks) {
            obj.ticks = message.ticks.map(e => (e ? exports.FullTick.toAmino(e) : undefined));
        }
        else {
            obj.ticks = message.ticks;
        }
        obj.spread_reward_accumulator = message.spreadRewardAccumulator
            ? exports.AccumObject.toAmino(message.spreadRewardAccumulator)
            : undefined;
        if (message.incentivesAccumulators) {
            obj.incentives_accumulators = message.incentivesAccumulators.map(e => e ? exports.AccumObject.toAmino(e) : undefined);
        }
        else {
            obj.incentives_accumulators = message.incentivesAccumulators;
        }
        if (message.incentiveRecords) {
            obj.incentive_records = message.incentiveRecords.map(e => e ? incentive_record_1.IncentiveRecord.toAmino(e) : undefined);
        }
        else {
            obj.incentive_records = message.incentiveRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-data',
            value: exports.PoolData.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolData.decode(message.value);
    },
    toProto(message) {
        return exports.PoolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolData',
            value: exports.PoolData.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolData.typeUrl, exports.PoolData);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolData.aminoType, exports.PoolData.typeUrl);
function createBasePositionData() {
    return {
        position: undefined,
        lockId: BigInt(0),
        spreadRewardAccumRecord: accum_1.Record.fromPartial({}),
        uptimeAccumRecords: [],
    };
}
exports.PositionData = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionData',
    aminoType: 'osmosis/concentratedliquidity/position-data',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PositionData.typeUrl ||
                (typeof o.lockId === 'bigint' &&
                    accum_1.Record.is(o.spreadRewardAccumRecord) &&
                    Array.isArray(o.uptimeAccumRecords) &&
                    (!o.uptimeAccumRecords.length || accum_1.Record.is(o.uptimeAccumRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PositionData.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    accum_1.Record.isSDK(o.spread_reward_accum_record) &&
                    Array.isArray(o.uptime_accum_records) &&
                    (!o.uptime_accum_records.length ||
                        accum_1.Record.isSDK(o.uptime_accum_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PositionData.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    accum_1.Record.isAmino(o.spread_reward_accum_record) &&
                    Array.isArray(o.uptime_accum_records) &&
                    (!o.uptime_accum_records.length ||
                        accum_1.Record.isAmino(o.uptime_accum_records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            position_1.Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.spreadRewardAccumRecord !== undefined) {
            accum_1.Record.encode(message.spreadRewardAccumRecord, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.uptimeAccumRecords) {
            accum_1.Record.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = position_1.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.spreadRewardAccumRecord = accum_1.Record.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.uptimeAccumRecords.push(accum_1.Record.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePositionData();
        message.position =
            object.position !== undefined && object.position !== null
                ? position_1.Position.fromPartial(object.position)
                : undefined;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.spreadRewardAccumRecord =
            object.spreadRewardAccumRecord !== undefined &&
                object.spreadRewardAccumRecord !== null
                ? accum_1.Record.fromPartial(object.spreadRewardAccumRecord)
                : undefined;
        message.uptimeAccumRecords =
            object.uptimeAccumRecords?.map(e => accum_1.Record.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionData();
        if (object.position !== undefined && object.position !== null) {
            message.position = position_1.Position.fromAmino(object.position);
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.spread_reward_accum_record !== undefined &&
            object.spread_reward_accum_record !== null) {
            message.spreadRewardAccumRecord = accum_1.Record.fromAmino(object.spread_reward_accum_record);
        }
        message.uptimeAccumRecords =
            object.uptime_accum_records?.map(e => accum_1.Record.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? position_1.Position.toAmino(message.position)
            : undefined;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.spread_reward_accum_record = message.spreadRewardAccumRecord
            ? accum_1.Record.toAmino(message.spreadRewardAccumRecord)
            : undefined;
        if (message.uptimeAccumRecords) {
            obj.uptime_accum_records = message.uptimeAccumRecords.map(e => e ? accum_1.Record.toAmino(e) : undefined);
        }
        else {
            obj.uptime_accum_records = message.uptimeAccumRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PositionData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-data',
            value: exports.PositionData.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PositionData.decode(message.value);
    },
    toProto(message) {
        return exports.PositionData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionData',
            value: exports.PositionData.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PositionData.typeUrl, exports.PositionData);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PositionData.aminoType, exports.PositionData.typeUrl);
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        poolData: [],
        positionData: [],
        nextPositionId: BigInt(0),
        nextIncentiveRecordId: BigInt(0),
        incentivesAccumulatorPoolIdMigrationThreshold: BigInt(0),
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.GenesisState',
    aminoType: 'osmosis/concentratedliquidity/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.is(o.params) &&
                    Array.isArray(o.poolData) &&
                    (!o.poolData.length || exports.PoolData.is(o.poolData[0])) &&
                    Array.isArray(o.positionData) &&
                    (!o.positionData.length || exports.PositionData.is(o.positionData[0])) &&
                    typeof o.nextPositionId === 'bigint' &&
                    typeof o.nextIncentiveRecordId === 'bigint' &&
                    typeof o.incentivesAccumulatorPoolIdMigrationThreshold === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isSDK(o.params) &&
                    Array.isArray(o.pool_data) &&
                    (!o.pool_data.length || exports.PoolData.isSDK(o.pool_data[0])) &&
                    Array.isArray(o.position_data) &&
                    (!o.position_data.length || exports.PositionData.isSDK(o.position_data[0])) &&
                    typeof o.next_position_id === 'bigint' &&
                    typeof o.next_incentive_record_id === 'bigint' &&
                    typeof o.incentives_accumulator_pool_id_migration_threshold ===
                        'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isAmino(o.params) &&
                    Array.isArray(o.pool_data) &&
                    (!o.pool_data.length || exports.PoolData.isAmino(o.pool_data[0])) &&
                    Array.isArray(o.position_data) &&
                    (!o.position_data.length ||
                        exports.PositionData.isAmino(o.position_data[0])) &&
                    typeof o.next_position_id === 'bigint' &&
                    typeof o.next_incentive_record_id === 'bigint' &&
                    typeof o.incentives_accumulator_pool_id_migration_threshold ===
                        'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolData) {
            exports.PoolData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.positionData) {
            exports.PositionData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextPositionId !== BigInt(0)) {
            writer.uint32(32).uint64(message.nextPositionId);
        }
        if (message.nextIncentiveRecordId !== BigInt(0)) {
            writer.uint32(40).uint64(message.nextIncentiveRecordId);
        }
        if (message.incentivesAccumulatorPoolIdMigrationThreshold !== BigInt(0)) {
            writer
                .uint32(48)
                .uint64(message.incentivesAccumulatorPoolIdMigrationThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolData.push(exports.PoolData.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.positionData.push(exports.PositionData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.nextPositionId = reader.uint64();
                    break;
                case 5:
                    message.nextIncentiveRecordId = reader.uint64();
                    break;
                case 6:
                    message.incentivesAccumulatorPoolIdMigrationThreshold =
                        reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.poolData = object.poolData?.map(e => exports.PoolData.fromPartial(e)) || [];
        message.positionData =
            object.positionData?.map(e => exports.PositionData.fromPartial(e)) || [];
        message.nextPositionId =
            object.nextPositionId !== undefined && object.nextPositionId !== null
                ? BigInt(object.nextPositionId.toString())
                : BigInt(0);
        message.nextIncentiveRecordId =
            object.nextIncentiveRecordId !== undefined &&
                object.nextIncentiveRecordId !== null
                ? BigInt(object.nextIncentiveRecordId.toString())
                : BigInt(0);
        message.incentivesAccumulatorPoolIdMigrationThreshold =
            object.incentivesAccumulatorPoolIdMigrationThreshold !== undefined &&
                object.incentivesAccumulatorPoolIdMigrationThreshold !== null
                ? BigInt(object.incentivesAccumulatorPoolIdMigrationThreshold.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.poolData = object.pool_data?.map(e => exports.PoolData.fromAmino(e)) || [];
        message.positionData =
            object.position_data?.map(e => exports.PositionData.fromAmino(e)) || [];
        if (object.next_position_id !== undefined &&
            object.next_position_id !== null) {
            message.nextPositionId = BigInt(object.next_position_id);
        }
        if (object.next_incentive_record_id !== undefined &&
            object.next_incentive_record_id !== null) {
            message.nextIncentiveRecordId = BigInt(object.next_incentive_record_id);
        }
        if (object.incentives_accumulator_pool_id_migration_threshold !== undefined &&
            object.incentives_accumulator_pool_id_migration_threshold !== null) {
            message.incentivesAccumulatorPoolIdMigrationThreshold = BigInt(object.incentives_accumulator_pool_id_migration_threshold);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.poolData) {
            obj.pool_data = message.poolData.map(e => e ? exports.PoolData.toAmino(e) : undefined);
        }
        else {
            obj.pool_data = message.poolData;
        }
        if (message.positionData) {
            obj.position_data = message.positionData.map(e => e ? exports.PositionData.toAmino(e) : undefined);
        }
        else {
            obj.position_data = message.positionData;
        }
        obj.next_position_id =
            message.nextPositionId !== BigInt(0)
                ? message.nextPositionId.toString()
                : undefined;
        obj.next_incentive_record_id =
            message.nextIncentiveRecordId !== BigInt(0)
                ? message.nextIncentiveRecordId.toString()
                : undefined;
        obj.incentives_accumulator_pool_id_migration_threshold =
            message.incentivesAccumulatorPoolIdMigrationThreshold !== BigInt(0)
                ? message.incentivesAccumulatorPoolIdMigrationThreshold.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/genesis-state',
            value: exports.GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseAccumObject() {
    return {
        name: '',
        accumContent: undefined,
    };
}
exports.AccumObject = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.AccumObject',
    aminoType: 'osmosis/concentratedliquidity/accum-object',
    is(o) {
        return (o && (o.$typeUrl === exports.AccumObject.typeUrl || typeof o.name === 'string'));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === exports.AccumObject.typeUrl || typeof o.name === 'string'));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === exports.AccumObject.typeUrl || typeof o.name === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.accumContent !== undefined) {
            accum_1.AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumObject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.accumContent = accum_1.AccumulatorContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccumObject();
        message.name = object.name ?? '';
        message.accumContent =
            object.accumContent !== undefined && object.accumContent !== null
                ? accum_1.AccumulatorContent.fromPartial(object.accumContent)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccumObject();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.accum_content !== undefined && object.accum_content !== null) {
            message.accumContent = accum_1.AccumulatorContent.fromAmino(object.accum_content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === '' ? undefined : message.name;
        obj.accum_content = message.accumContent
            ? accum_1.AccumulatorContent.toAmino(message.accumContent)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccumObject.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/accum-object',
            value: exports.AccumObject.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.AccumObject.decode(message.value);
    },
    toProto(message) {
        return exports.AccumObject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.AccumObject',
            value: exports.AccumObject.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.AccumObject.typeUrl, exports.AccumObject);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AccumObject.aminoType, exports.AccumObject.typeUrl);
