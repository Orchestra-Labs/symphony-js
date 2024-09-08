//@ts-nocheck
import { TickInfo } from './tick_info';
import { Any, } from '../../../google/protobuf/any';
import { IncentiveRecord, } from './incentive_record';
import { Position } from './position';
import { Record, AccumulatorContent, } from '../../accum/v1beta1/accum';
import { Params } from '../params';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseFullTick() {
    return {
        poolId: BigInt(0),
        tickIndex: BigInt(0),
        info: TickInfo.fromPartial({}),
    };
}
export const FullTick = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullTick',
    aminoType: 'osmosis/concentratedliquidity/full-tick',
    is(o) {
        return (o &&
            (o.$typeUrl === FullTick.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tickIndex === 'bigint' &&
                    TickInfo.is(o.info))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === FullTick.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.tick_index === 'bigint' &&
                    TickInfo.isSDK(o.info))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === FullTick.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.tick_index === 'bigint' &&
                    TickInfo.isAmino(o.info))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        if (message.info !== undefined) {
            TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.info = TickInfo.decode(reader, reader.uint32());
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
                ? TickInfo.fromPartial(object.info)
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
            message.info = TickInfo.fromAmino(object.info);
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
        obj.info = message.info ? TickInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FullTick.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/full-tick',
            value: FullTick.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return FullTick.decode(message.value);
    },
    toProto(message) {
        return FullTick.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.FullTick',
            value: FullTick.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(FullTick.typeUrl, FullTick);
GlobalDecoderRegistry.registerAminoProtoMapping(FullTick.aminoType, FullTick.typeUrl);
function createBasePoolData() {
    return {
        pool: undefined,
        ticks: [],
        spreadRewardAccumulator: AccumObject.fromPartial({}),
        incentivesAccumulators: [],
        incentiveRecords: [],
    };
}
export const PoolData = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolData',
    aminoType: 'osmosis/concentratedliquidity/pool-data',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolData.typeUrl ||
                (Array.isArray(o.ticks) &&
                    (!o.ticks.length || FullTick.is(o.ticks[0])) &&
                    AccumObject.is(o.spreadRewardAccumulator) &&
                    Array.isArray(o.incentivesAccumulators) &&
                    (!o.incentivesAccumulators.length ||
                        AccumObject.is(o.incentivesAccumulators[0])) &&
                    Array.isArray(o.incentiveRecords) &&
                    (!o.incentiveRecords.length ||
                        IncentiveRecord.is(o.incentiveRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolData.typeUrl ||
                (Array.isArray(o.ticks) &&
                    (!o.ticks.length || FullTick.isSDK(o.ticks[0])) &&
                    AccumObject.isSDK(o.spread_reward_accumulator) &&
                    Array.isArray(o.incentives_accumulators) &&
                    (!o.incentives_accumulators.length ||
                        AccumObject.isSDK(o.incentives_accumulators[0])) &&
                    Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        IncentiveRecord.isSDK(o.incentive_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolData.typeUrl ||
                (Array.isArray(o.ticks) &&
                    (!o.ticks.length || FullTick.isAmino(o.ticks[0])) &&
                    AccumObject.isAmino(o.spread_reward_accumulator) &&
                    Array.isArray(o.incentives_accumulators) &&
                    (!o.incentives_accumulators.length ||
                        AccumObject.isAmino(o.incentives_accumulators[0])) &&
                    Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        IncentiveRecord.isAmino(o.incentive_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ticks) {
            FullTick.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.spreadRewardAccumulator !== undefined) {
            AccumObject.encode(message.spreadRewardAccumulator, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.incentivesAccumulators) {
            AccumObject.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.incentiveRecords) {
            IncentiveRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.ticks.push(FullTick.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.spreadRewardAccumulator = AccumObject.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.incentivesAccumulators.push(AccumObject.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
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
                ? GlobalDecoderRegistry.fromPartial(object.pool)
                : undefined;
        message.ticks = object.ticks?.map(e => FullTick.fromPartial(e)) || [];
        message.spreadRewardAccumulator =
            object.spreadRewardAccumulator !== undefined &&
                object.spreadRewardAccumulator !== null
                ? AccumObject.fromPartial(object.spreadRewardAccumulator)
                : undefined;
        message.incentivesAccumulators =
            object.incentivesAccumulators?.map(e => AccumObject.fromPartial(e)) || [];
        message.incentiveRecords =
            object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolData();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
        }
        message.ticks = object.ticks?.map(e => FullTick.fromAmino(e)) || [];
        if (object.spread_reward_accumulator !== undefined &&
            object.spread_reward_accumulator !== null) {
            message.spreadRewardAccumulator = AccumObject.fromAmino(object.spread_reward_accumulator);
        }
        message.incentivesAccumulators =
            object.incentives_accumulators?.map(e => AccumObject.fromAmino(e)) || [];
        message.incentiveRecords =
            object.incentive_records?.map(e => IncentiveRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool
            ? GlobalDecoderRegistry.toAminoMsg(message.pool)
            : undefined;
        if (message.ticks) {
            obj.ticks = message.ticks.map(e => (e ? FullTick.toAmino(e) : undefined));
        }
        else {
            obj.ticks = message.ticks;
        }
        obj.spread_reward_accumulator = message.spreadRewardAccumulator
            ? AccumObject.toAmino(message.spreadRewardAccumulator)
            : undefined;
        if (message.incentivesAccumulators) {
            obj.incentives_accumulators = message.incentivesAccumulators.map(e => e ? AccumObject.toAmino(e) : undefined);
        }
        else {
            obj.incentives_accumulators = message.incentivesAccumulators;
        }
        if (message.incentiveRecords) {
            obj.incentive_records = message.incentiveRecords.map(e => e ? IncentiveRecord.toAmino(e) : undefined);
        }
        else {
            obj.incentive_records = message.incentiveRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PoolData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-data',
            value: PoolData.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolData.decode(message.value);
    },
    toProto(message) {
        return PoolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolData',
            value: PoolData.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolData.typeUrl, PoolData);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolData.aminoType, PoolData.typeUrl);
function createBasePositionData() {
    return {
        position: undefined,
        lockId: BigInt(0),
        spreadRewardAccumRecord: Record.fromPartial({}),
        uptimeAccumRecords: [],
    };
}
export const PositionData = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionData',
    aminoType: 'osmosis/concentratedliquidity/position-data',
    is(o) {
        return (o &&
            (o.$typeUrl === PositionData.typeUrl ||
                (typeof o.lockId === 'bigint' &&
                    Record.is(o.spreadRewardAccumRecord) &&
                    Array.isArray(o.uptimeAccumRecords) &&
                    (!o.uptimeAccumRecords.length || Record.is(o.uptimeAccumRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PositionData.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    Record.isSDK(o.spread_reward_accum_record) &&
                    Array.isArray(o.uptime_accum_records) &&
                    (!o.uptime_accum_records.length ||
                        Record.isSDK(o.uptime_accum_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PositionData.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    Record.isAmino(o.spread_reward_accum_record) &&
                    Array.isArray(o.uptime_accum_records) &&
                    (!o.uptime_accum_records.length ||
                        Record.isAmino(o.uptime_accum_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.spreadRewardAccumRecord !== undefined) {
            Record.encode(message.spreadRewardAccumRecord, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.uptimeAccumRecords) {
            Record.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.spreadRewardAccumRecord = Record.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.uptimeAccumRecords.push(Record.decode(reader, reader.uint32()));
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
                ? Position.fromPartial(object.position)
                : undefined;
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.spreadRewardAccumRecord =
            object.spreadRewardAccumRecord !== undefined &&
                object.spreadRewardAccumRecord !== null
                ? Record.fromPartial(object.spreadRewardAccumRecord)
                : undefined;
        message.uptimeAccumRecords =
            object.uptimeAccumRecords?.map(e => Record.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionData();
        if (object.position !== undefined && object.position !== null) {
            message.position = Position.fromAmino(object.position);
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.spread_reward_accum_record !== undefined &&
            object.spread_reward_accum_record !== null) {
            message.spreadRewardAccumRecord = Record.fromAmino(object.spread_reward_accum_record);
        }
        message.uptimeAccumRecords =
            object.uptime_accum_records?.map(e => Record.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? Position.toAmino(message.position)
            : undefined;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.spread_reward_accum_record = message.spreadRewardAccumRecord
            ? Record.toAmino(message.spreadRewardAccumRecord)
            : undefined;
        if (message.uptimeAccumRecords) {
            obj.uptime_accum_records = message.uptimeAccumRecords.map(e => e ? Record.toAmino(e) : undefined);
        }
        else {
            obj.uptime_accum_records = message.uptimeAccumRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PositionData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-data',
            value: PositionData.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PositionData.decode(message.value);
    },
    toProto(message) {
        return PositionData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionData',
            value: PositionData.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PositionData.typeUrl, PositionData);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionData.aminoType, PositionData.typeUrl);
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        poolData: [],
        positionData: [],
        nextPositionId: BigInt(0),
        nextIncentiveRecordId: BigInt(0),
        incentivesAccumulatorPoolIdMigrationThreshold: BigInt(0),
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.GenesisState',
    aminoType: 'osmosis/concentratedliquidity/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.is(o.params) &&
                    Array.isArray(o.poolData) &&
                    (!o.poolData.length || PoolData.is(o.poolData[0])) &&
                    Array.isArray(o.positionData) &&
                    (!o.positionData.length || PositionData.is(o.positionData[0])) &&
                    typeof o.nextPositionId === 'bigint' &&
                    typeof o.nextIncentiveRecordId === 'bigint' &&
                    typeof o.incentivesAccumulatorPoolIdMigrationThreshold === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isSDK(o.params) &&
                    Array.isArray(o.pool_data) &&
                    (!o.pool_data.length || PoolData.isSDK(o.pool_data[0])) &&
                    Array.isArray(o.position_data) &&
                    (!o.position_data.length || PositionData.isSDK(o.position_data[0])) &&
                    typeof o.next_position_id === 'bigint' &&
                    typeof o.next_incentive_record_id === 'bigint' &&
                    typeof o.incentives_accumulator_pool_id_migration_threshold ===
                        'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isAmino(o.params) &&
                    Array.isArray(o.pool_data) &&
                    (!o.pool_data.length || PoolData.isAmino(o.pool_data[0])) &&
                    Array.isArray(o.position_data) &&
                    (!o.position_data.length ||
                        PositionData.isAmino(o.position_data[0])) &&
                    typeof o.next_position_id === 'bigint' &&
                    typeof o.next_incentive_record_id === 'bigint' &&
                    typeof o.incentives_accumulator_pool_id_migration_threshold ===
                        'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolData) {
            PoolData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.positionData) {
            PositionData.encode(v, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolData.push(PoolData.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.positionData.push(PositionData.decode(reader, reader.uint32()));
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
                ? Params.fromPartial(object.params)
                : undefined;
        message.poolData = object.poolData?.map(e => PoolData.fromPartial(e)) || [];
        message.positionData =
            object.positionData?.map(e => PositionData.fromPartial(e)) || [];
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
            message.params = Params.fromAmino(object.params);
        }
        message.poolData = object.pool_data?.map(e => PoolData.fromAmino(e)) || [];
        message.positionData =
            object.position_data?.map(e => PositionData.fromAmino(e)) || [];
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
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.poolData) {
            obj.pool_data = message.poolData.map(e => e ? PoolData.toAmino(e) : undefined);
        }
        else {
            obj.pool_data = message.poolData;
        }
        if (message.positionData) {
            obj.position_data = message.positionData.map(e => e ? PositionData.toAmino(e) : undefined);
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
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/genesis-state',
            value: GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseAccumObject() {
    return {
        name: '',
        accumContent: undefined,
    };
}
export const AccumObject = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.AccumObject',
    aminoType: 'osmosis/concentratedliquidity/accum-object',
    is(o) {
        return (o && (o.$typeUrl === AccumObject.typeUrl || typeof o.name === 'string'));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === AccumObject.typeUrl || typeof o.name === 'string'));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === AccumObject.typeUrl || typeof o.name === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.accumContent !== undefined) {
            AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumObject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.accumContent = AccumulatorContent.decode(reader, reader.uint32());
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
                ? AccumulatorContent.fromPartial(object.accumContent)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccumObject();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.accum_content !== undefined && object.accum_content !== null) {
            message.accumContent = AccumulatorContent.fromAmino(object.accum_content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === '' ? undefined : message.name;
        obj.accum_content = message.accumContent
            ? AccumulatorContent.toAmino(message.accumContent)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccumObject.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/accum-object',
            value: AccumObject.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccumObject.decode(message.value);
    },
    toProto(message) {
        return AccumObject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.AccumObject',
            value: AccumObject.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccumObject.typeUrl, AccumObject);
GlobalDecoderRegistry.registerAminoProtoMapping(AccumObject.aminoType, AccumObject.typeUrl);
