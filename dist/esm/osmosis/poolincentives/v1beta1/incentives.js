//@ts-nocheck
import { Duration, } from '../../../google/protobuf/duration';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParams() {
    return {
        mintedDenom: '',
    };
}
export const Params = {
    typeUrl: '/osmosis.poolincentives.v1beta1.Params',
    aminoType: 'osmosis/poolincentives/params',
    is(o) {
        return (o && (o.$typeUrl === Params.typeUrl || typeof o.mintedDenom === 'string'));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === Params.typeUrl || typeof o.minted_denom === 'string'));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === Params.typeUrl || typeof o.minted_denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.mintedDenom !== '') {
            writer.uint32(10).string(message.mintedDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintedDenom = reader.string();
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
        message.mintedDenom = object.mintedDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.minted_denom !== undefined && object.minted_denom !== null) {
            message.mintedDenom = object.minted_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minted_denom =
            message.mintedDenom === '' ? undefined : message.mintedDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/params',
            value: Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: [],
    };
}
export const LockableDurationsInfo = {
    typeUrl: '/osmosis.poolincentives.v1beta1.LockableDurationsInfo',
    aminoType: 'osmosis/poolincentives/lockable-durations-info',
    is(o) {
        return (o &&
            (o.$typeUrl === LockableDurationsInfo.typeUrl ||
                (Array.isArray(o.lockableDurations) &&
                    (!o.lockableDurations.length || Duration.is(o.lockableDurations[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockableDurationsInfo.typeUrl ||
                (Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isSDK(o.lockable_durations[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockableDurationsInfo.typeUrl ||
                (Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isAmino(o.lockable_durations[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations =
            object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations =
            object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LockableDurationsInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/lockable-durations-info',
            value: LockableDurationsInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockableDurationsInfo.decode(message.value);
    },
    toProto(message) {
        return LockableDurationsInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.LockableDurationsInfo',
            value: LockableDurationsInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockableDurationsInfo.typeUrl, LockableDurationsInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(LockableDurationsInfo.aminoType, LockableDurationsInfo.typeUrl);
function createBaseDistrInfo() {
    return {
        totalWeight: '',
        records: [],
    };
}
export const DistrInfo = {
    typeUrl: '/osmosis.poolincentives.v1beta1.DistrInfo',
    aminoType: 'osmosis/poolincentives/distr-info',
    is(o) {
        return (o &&
            (o.$typeUrl === DistrInfo.typeUrl ||
                (typeof o.totalWeight === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length || DistrRecord.is(o.records[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === DistrInfo.typeUrl ||
                (typeof o.total_weight === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length || DistrRecord.isSDK(o.records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === DistrInfo.typeUrl ||
                (typeof o.total_weight === 'string' &&
                    Array.isArray(o.records) &&
                    (!o.records.length || DistrRecord.isAmino(o.records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalWeight !== '') {
            writer.uint32(10).string(message.totalWeight);
        }
        for (const v of message.records) {
            DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalWeight = reader.string();
                    break;
                case 2:
                    message.records.push(DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistrInfo();
        message.totalWeight = object.totalWeight ?? '';
        message.records =
            object.records?.map(e => DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistrInfo();
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_weight =
            message.totalWeight === '' ? undefined : message.totalWeight;
        if (message.records) {
            obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = message.records;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DistrInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/distr-info',
            value: DistrInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return DistrInfo.decode(message.value);
    },
    toProto(message) {
        return DistrInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.DistrInfo',
            value: DistrInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(DistrInfo.typeUrl, DistrInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(DistrInfo.aminoType, DistrInfo.typeUrl);
function createBaseDistrRecord() {
    return {
        gaugeId: BigInt(0),
        weight: '',
    };
}
export const DistrRecord = {
    typeUrl: '/osmosis.poolincentives.v1beta1.DistrRecord',
    aminoType: 'osmosis/poolincentives/distr-record',
    is(o) {
        return (o &&
            (o.$typeUrl === DistrRecord.typeUrl ||
                (typeof o.gaugeId === 'bigint' && typeof o.weight === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === DistrRecord.typeUrl ||
                (typeof o.gauge_id === 'bigint' && typeof o.weight === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === DistrRecord.typeUrl ||
                (typeof o.gauge_id === 'bigint' && typeof o.weight === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.weight !== '') {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistrRecord();
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        message.weight = object.weight ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistrRecord();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        obj.weight = message.weight === '' ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return DistrRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/distr-record',
            value: DistrRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return DistrRecord.decode(message.value);
    },
    toProto(message) {
        return DistrRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.DistrRecord',
            value: DistrRecord.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(DistrRecord.typeUrl, DistrRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(DistrRecord.aminoType, DistrRecord.typeUrl);
function createBasePoolToGauge() {
    return {
        poolId: BigInt(0),
        gaugeId: BigInt(0),
        duration: Duration.fromPartial({}),
    };
}
export const PoolToGauge = {
    typeUrl: '/osmosis.poolincentives.v1beta1.PoolToGauge',
    aminoType: 'osmosis/poolincentives/pool-to-gauge',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolToGauge.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.gaugeId === 'bigint' &&
                    Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolToGauge.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.gauge_id === 'bigint' &&
                    Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolToGauge.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.gauge_id === 'bigint' &&
                    Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolToGauge();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolToGauge();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/pool-to-gauge',
            value: PoolToGauge.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolToGauge.decode(message.value);
    },
    toProto(message) {
        return PoolToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.PoolToGauge',
            value: PoolToGauge.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolToGauge.typeUrl, PoolToGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolToGauge.aminoType, PoolToGauge.typeUrl);
function createBaseAnyPoolToInternalGauges() {
    return {
        poolToGauge: [],
    };
}
export const AnyPoolToInternalGauges = {
    typeUrl: '/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges',
    aminoType: 'osmosis/poolincentives/any-pool-to-internal-gauges',
    is(o) {
        return (o &&
            (o.$typeUrl === AnyPoolToInternalGauges.typeUrl ||
                (Array.isArray(o.poolToGauge) &&
                    (!o.poolToGauge.length || PoolToGauge.is(o.poolToGauge[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AnyPoolToInternalGauges.typeUrl ||
                (Array.isArray(o.pool_to_gauge) &&
                    (!o.pool_to_gauge.length || PoolToGauge.isSDK(o.pool_to_gauge[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AnyPoolToInternalGauges.typeUrl ||
                (Array.isArray(o.pool_to_gauge) &&
                    (!o.pool_to_gauge.length || PoolToGauge.isAmino(o.pool_to_gauge[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.poolToGauge) {
            PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAnyPoolToInternalGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAnyPoolToInternalGauges();
        message.poolToGauge =
            object.poolToGauge?.map(e => PoolToGauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAnyPoolToInternalGauges();
        message.poolToGauge =
            object.pool_to_gauge?.map(e => PoolToGauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.pool_to_gauge = message.poolToGauge.map(e => e ? PoolToGauge.toAmino(e) : undefined);
        }
        else {
            obj.pool_to_gauge = message.poolToGauge;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AnyPoolToInternalGauges.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/any-pool-to-internal-gauges',
            value: AnyPoolToInternalGauges.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AnyPoolToInternalGauges.decode(message.value);
    },
    toProto(message) {
        return AnyPoolToInternalGauges.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges',
            value: AnyPoolToInternalGauges.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AnyPoolToInternalGauges.typeUrl, AnyPoolToInternalGauges);
GlobalDecoderRegistry.registerAminoProtoMapping(AnyPoolToInternalGauges.aminoType, AnyPoolToInternalGauges.typeUrl);
function createBaseConcentratedPoolToNoLockGauges() {
    return {
        poolToGauge: [],
    };
}
export const ConcentratedPoolToNoLockGauges = {
    typeUrl: '/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges',
    aminoType: 'osmosis/poolincentives/concentrated-pool-to-no-lock-gauges',
    is(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolToNoLockGauges.typeUrl ||
                (Array.isArray(o.poolToGauge) &&
                    (!o.poolToGauge.length || PoolToGauge.is(o.poolToGauge[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolToNoLockGauges.typeUrl ||
                (Array.isArray(o.pool_to_gauge) &&
                    (!o.pool_to_gauge.length || PoolToGauge.isSDK(o.pool_to_gauge[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolToNoLockGauges.typeUrl ||
                (Array.isArray(o.pool_to_gauge) &&
                    (!o.pool_to_gauge.length || PoolToGauge.isAmino(o.pool_to_gauge[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.poolToGauge) {
            PoolToGauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConcentratedPoolToNoLockGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConcentratedPoolToNoLockGauges();
        message.poolToGauge =
            object.poolToGauge?.map(e => PoolToGauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConcentratedPoolToNoLockGauges();
        message.poolToGauge =
            object.pool_to_gauge?.map(e => PoolToGauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.pool_to_gauge = message.poolToGauge.map(e => e ? PoolToGauge.toAmino(e) : undefined);
        }
        else {
            obj.pool_to_gauge = message.poolToGauge;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ConcentratedPoolToNoLockGauges.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/concentrated-pool-to-no-lock-gauges',
            value: ConcentratedPoolToNoLockGauges.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConcentratedPoolToNoLockGauges.decode(message.value);
    },
    toProto(message) {
        return ConcentratedPoolToNoLockGauges.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges',
            value: ConcentratedPoolToNoLockGauges.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConcentratedPoolToNoLockGauges.typeUrl, ConcentratedPoolToNoLockGauges);
GlobalDecoderRegistry.registerAminoProtoMapping(ConcentratedPoolToNoLockGauges.aminoType, ConcentratedPoolToNoLockGauges.typeUrl);
