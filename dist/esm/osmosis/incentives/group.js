//@ts-nocheck
import { Gauge } from './gauge';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
import { isSet } from '../../helpers';
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
export var SplittingPolicy;
(function (SplittingPolicy) {
    SplittingPolicy[SplittingPolicy["ByVolume"] = 0] = "ByVolume";
    SplittingPolicy[SplittingPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SplittingPolicy || (SplittingPolicy = {}));
export const SplittingPolicySDKType = SplittingPolicy;
export const SplittingPolicyAmino = SplittingPolicy;
export function splittingPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case 'ByVolume':
            return SplittingPolicy.ByVolume;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SplittingPolicy.UNRECOGNIZED;
    }
}
export function splittingPolicyToJSON(object) {
    switch (object) {
        case SplittingPolicy.ByVolume:
            return 'ByVolume';
        case SplittingPolicy.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseInternalGaugeInfo() {
    return {
        totalWeight: '',
        gaugeRecords: [],
    };
}
export const InternalGaugeInfo = {
    typeUrl: '/osmosis.incentives.InternalGaugeInfo',
    aminoType: 'osmosis/incentives/internal-gauge-info',
    is(o) {
        return (o &&
            (o.$typeUrl === InternalGaugeInfo.typeUrl ||
                (typeof o.totalWeight === 'string' &&
                    Array.isArray(o.gaugeRecords) &&
                    (!o.gaugeRecords.length ||
                        InternalGaugeRecord.is(o.gaugeRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === InternalGaugeInfo.typeUrl ||
                (typeof o.total_weight === 'string' &&
                    Array.isArray(o.gauge_records) &&
                    (!o.gauge_records.length ||
                        InternalGaugeRecord.isSDK(o.gauge_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === InternalGaugeInfo.typeUrl ||
                (typeof o.total_weight === 'string' &&
                    Array.isArray(o.gauge_records) &&
                    (!o.gauge_records.length ||
                        InternalGaugeRecord.isAmino(o.gauge_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalWeight !== '') {
            writer.uint32(10).string(message.totalWeight);
        }
        for (const v of message.gaugeRecords) {
            InternalGaugeRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInternalGaugeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalWeight = reader.string();
                    break;
                case 2:
                    message.gaugeRecords.push(InternalGaugeRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInternalGaugeInfo();
        message.totalWeight = object.totalWeight ?? '';
        message.gaugeRecords =
            object.gaugeRecords?.map(e => InternalGaugeRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInternalGaugeInfo();
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        message.gaugeRecords =
            object.gauge_records?.map(e => InternalGaugeRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_weight =
            message.totalWeight === '' ? undefined : message.totalWeight;
        if (message.gaugeRecords) {
            obj.gauge_records = message.gaugeRecords.map(e => e ? InternalGaugeRecord.toAmino(e) : undefined);
        }
        else {
            obj.gauge_records = message.gaugeRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return InternalGaugeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/internal-gauge-info',
            value: InternalGaugeInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return InternalGaugeInfo.decode(message.value);
    },
    toProto(message) {
        return InternalGaugeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.InternalGaugeInfo',
            value: InternalGaugeInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(InternalGaugeInfo.typeUrl, InternalGaugeInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(InternalGaugeInfo.aminoType, InternalGaugeInfo.typeUrl);
function createBaseInternalGaugeRecord() {
    return {
        gaugeId: BigInt(0),
        currentWeight: '',
        cumulativeWeight: '',
    };
}
export const InternalGaugeRecord = {
    typeUrl: '/osmosis.incentives.InternalGaugeRecord',
    aminoType: 'osmosis/incentives/internal-gauge-record',
    is(o) {
        return (o &&
            (o.$typeUrl === InternalGaugeRecord.typeUrl ||
                (typeof o.gaugeId === 'bigint' &&
                    typeof o.currentWeight === 'string' &&
                    typeof o.cumulativeWeight === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === InternalGaugeRecord.typeUrl ||
                (typeof o.gauge_id === 'bigint' &&
                    typeof o.current_weight === 'string' &&
                    typeof o.cumulative_weight === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === InternalGaugeRecord.typeUrl ||
                (typeof o.gauge_id === 'bigint' &&
                    typeof o.current_weight === 'string' &&
                    typeof o.cumulative_weight === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.currentWeight !== '') {
            writer.uint32(18).string(message.currentWeight);
        }
        if (message.cumulativeWeight !== '') {
            writer.uint32(26).string(message.cumulativeWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInternalGaugeRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.currentWeight = reader.string();
                    break;
                case 3:
                    message.cumulativeWeight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInternalGaugeRecord();
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        message.currentWeight = object.currentWeight ?? '';
        message.cumulativeWeight = object.cumulativeWeight ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseInternalGaugeRecord();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.current_weight !== undefined && object.current_weight !== null) {
            message.currentWeight = object.current_weight;
        }
        if (object.cumulative_weight !== undefined &&
            object.cumulative_weight !== null) {
            message.cumulativeWeight = object.cumulative_weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        obj.current_weight =
            message.currentWeight === '' ? undefined : message.currentWeight;
        obj.cumulative_weight =
            message.cumulativeWeight === '' ? undefined : message.cumulativeWeight;
        return obj;
    },
    fromAminoMsg(object) {
        return InternalGaugeRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/internal-gauge-record',
            value: InternalGaugeRecord.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return InternalGaugeRecord.decode(message.value);
    },
    toProto(message) {
        return InternalGaugeRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.InternalGaugeRecord',
            value: InternalGaugeRecord.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(InternalGaugeRecord.typeUrl, InternalGaugeRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(InternalGaugeRecord.aminoType, InternalGaugeRecord.typeUrl);
function createBaseGroup() {
    return {
        groupGaugeId: BigInt(0),
        internalGaugeInfo: InternalGaugeInfo.fromPartial({}),
        splittingPolicy: 0,
    };
}
export const Group = {
    typeUrl: '/osmosis.incentives.Group',
    aminoType: 'osmosis/incentives/group',
    is(o) {
        return (o &&
            (o.$typeUrl === Group.typeUrl ||
                (typeof o.groupGaugeId === 'bigint' &&
                    InternalGaugeInfo.is(o.internalGaugeInfo) &&
                    isSet(o.splittingPolicy))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Group.typeUrl ||
                (typeof o.group_gauge_id === 'bigint' &&
                    InternalGaugeInfo.isSDK(o.internal_gauge_info) &&
                    isSet(o.splitting_policy))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Group.typeUrl ||
                (typeof o.group_gauge_id === 'bigint' &&
                    InternalGaugeInfo.isAmino(o.internal_gauge_info) &&
                    isSet(o.splitting_policy))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupGaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupGaugeId);
        }
        if (message.internalGaugeInfo !== undefined) {
            InternalGaugeInfo.encode(message.internalGaugeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.splittingPolicy !== 0) {
            writer.uint32(24).int32(message.splittingPolicy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupGaugeId = reader.uint64();
                    break;
                case 2:
                    message.internalGaugeInfo = InternalGaugeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.splittingPolicy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroup();
        message.groupGaugeId =
            object.groupGaugeId !== undefined && object.groupGaugeId !== null
                ? BigInt(object.groupGaugeId.toString())
                : BigInt(0);
        message.internalGaugeInfo =
            object.internalGaugeInfo !== undefined &&
                object.internalGaugeInfo !== null
                ? InternalGaugeInfo.fromPartial(object.internalGaugeInfo)
                : undefined;
        message.splittingPolicy = object.splittingPolicy ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroup();
        if (object.group_gauge_id !== undefined && object.group_gauge_id !== null) {
            message.groupGaugeId = BigInt(object.group_gauge_id);
        }
        if (object.internal_gauge_info !== undefined &&
            object.internal_gauge_info !== null) {
            message.internalGaugeInfo = InternalGaugeInfo.fromAmino(object.internal_gauge_info);
        }
        if (object.splitting_policy !== undefined &&
            object.splitting_policy !== null) {
            message.splittingPolicy = object.splitting_policy;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_gauge_id =
            message.groupGaugeId !== BigInt(0)
                ? message.groupGaugeId.toString()
                : undefined;
        obj.internal_gauge_info = message.internalGaugeInfo
            ? InternalGaugeInfo.toAmino(message.internalGaugeInfo)
            : undefined;
        obj.splitting_policy =
            message.splittingPolicy === 0 ? undefined : message.splittingPolicy;
        return obj;
    },
    fromAminoMsg(object) {
        return Group.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/group',
            value: Group.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Group.decode(message.value);
    },
    toProto(message) {
        return Group.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.Group',
            value: Group.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Group.typeUrl, Group);
GlobalDecoderRegistry.registerAminoProtoMapping(Group.aminoType, Group.typeUrl);
function createBaseCreateGroup() {
    return {
        poolIds: [],
    };
}
export const CreateGroup = {
    typeUrl: '/osmosis.incentives.CreateGroup',
    aminoType: 'osmosis/incentives/create-group',
    is(o) {
        return (o &&
            (o.$typeUrl === CreateGroup.typeUrl ||
                (Array.isArray(o.poolIds) &&
                    (!o.poolIds.length || typeof o.poolIds[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CreateGroup.typeUrl ||
                (Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CreateGroup.typeUrl ||
                (Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.poolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.poolIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateGroup();
        message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateGroup();
        message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolIds) {
            obj.pool_ids = message.poolIds.map(e => e.toString());
        }
        else {
            obj.pool_ids = message.poolIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-group',
            value: CreateGroup.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CreateGroup.decode(message.value);
    },
    toProto(message) {
        return CreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.CreateGroup',
            value: CreateGroup.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CreateGroup.typeUrl, CreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateGroup.aminoType, CreateGroup.typeUrl);
function createBaseGroupsWithGauge() {
    return {
        group: Group.fromPartial({}),
        gauge: Gauge.fromPartial({}),
    };
}
export const GroupsWithGauge = {
    typeUrl: '/osmosis.incentives.GroupsWithGauge',
    aminoType: 'osmosis/incentives/groups-with-gauge',
    is(o) {
        return (o &&
            (o.$typeUrl === GroupsWithGauge.typeUrl ||
                (Group.is(o.group) && Gauge.is(o.gauge))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GroupsWithGauge.typeUrl ||
                (Group.isSDK(o.group) && Gauge.isSDK(o.gauge))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GroupsWithGauge.typeUrl ||
                (Group.isAmino(o.group) && Gauge.isAmino(o.gauge))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group !== undefined) {
            Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        if (message.gauge !== undefined) {
            Gauge.encode(message.gauge, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupsWithGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = Group.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gauge = Gauge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupsWithGauge();
        message.group =
            object.group !== undefined && object.group !== null
                ? Group.fromPartial(object.group)
                : undefined;
        message.gauge =
            object.gauge !== undefined && object.gauge !== null
                ? Gauge.fromPartial(object.gauge)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupsWithGauge();
        if (object.group !== undefined && object.group !== null) {
            message.group = Group.fromAmino(object.group);
        }
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = Gauge.fromAmino(object.gauge);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group = message.group ? Group.toAmino(message.group) : undefined;
        obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GroupsWithGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/groups-with-gauge',
            value: GroupsWithGauge.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GroupsWithGauge.decode(message.value);
    },
    toProto(message) {
        return GroupsWithGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.GroupsWithGauge',
            value: GroupsWithGauge.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GroupsWithGauge.typeUrl, GroupsWithGauge);
GlobalDecoderRegistry.registerAminoProtoMapping(GroupsWithGauge.aminoType, GroupsWithGauge.typeUrl);
