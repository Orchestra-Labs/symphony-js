//@ts-nocheck
import { Params } from './params';
import { Gauge } from './gauge';
import { Duration, } from '../../google/protobuf/duration';
import { Group } from './group';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        gauges: [],
        lockableDurations: [],
        lastGaugeId: BigInt(0),
        groupGauges: [],
        groups: [],
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.incentives.GenesisState',
    aminoType: 'osmosis/incentives/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.is(o.params) &&
                    Array.isArray(o.gauges) &&
                    (!o.gauges.length || Gauge.is(o.gauges[0])) &&
                    Array.isArray(o.lockableDurations) &&
                    (!o.lockableDurations.length ||
                        Duration.is(o.lockableDurations[0])) &&
                    typeof o.lastGaugeId === 'bigint' &&
                    Array.isArray(o.groupGauges) &&
                    (!o.groupGauges.length || Gauge.is(o.groupGauges[0])) &&
                    Array.isArray(o.groups) &&
                    (!o.groups.length || Group.is(o.groups[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isSDK(o.params) &&
                    Array.isArray(o.gauges) &&
                    (!o.gauges.length || Gauge.isSDK(o.gauges[0])) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isSDK(o.lockable_durations[0])) &&
                    typeof o.last_gauge_id === 'bigint' &&
                    Array.isArray(o.group_gauges) &&
                    (!o.group_gauges.length || Gauge.isSDK(o.group_gauges[0])) &&
                    Array.isArray(o.groups) &&
                    (!o.groups.length || Group.isSDK(o.groups[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isAmino(o.params) &&
                    Array.isArray(o.gauges) &&
                    (!o.gauges.length || Gauge.isAmino(o.gauges[0])) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isAmino(o.lockable_durations[0])) &&
                    typeof o.last_gauge_id === 'bigint' &&
                    Array.isArray(o.group_gauges) &&
                    (!o.group_gauges.length || Gauge.isAmino(o.group_gauges[0])) &&
                    Array.isArray(o.groups) &&
                    (!o.groups.length || Group.isAmino(o.groups[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastGaugeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastGaugeId);
        }
        for (const v of message.groupGauges) {
            Gauge.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.groups) {
            Group.encode(v, writer.uint32(50).fork()).ldelim();
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
                    message.gauges.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastGaugeId = reader.uint64();
                    break;
                case 5:
                    message.groupGauges.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groups.push(Group.decode(reader, reader.uint32()));
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
        message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
        message.lockableDurations =
            object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        message.lastGaugeId =
            object.lastGaugeId !== undefined && object.lastGaugeId !== null
                ? BigInt(object.lastGaugeId.toString())
                : BigInt(0);
        message.groupGauges =
            object.groupGauges?.map(e => Gauge.fromPartial(e)) || [];
        message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.gauges = object.gauges?.map(e => Gauge.fromAmino(e)) || [];
        message.lockableDurations =
            object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        if (object.last_gauge_id !== undefined && object.last_gauge_id !== null) {
            message.lastGaugeId = BigInt(object.last_gauge_id);
        }
        message.groupGauges =
            object.group_gauges?.map(e => Gauge.fromAmino(e)) || [];
        message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => (e ? Gauge.toAmino(e) : undefined));
        }
        else {
            obj.gauges = message.gauges;
        }
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.last_gauge_id =
            message.lastGaugeId !== BigInt(0)
                ? message.lastGaugeId.toString()
                : undefined;
        if (message.groupGauges) {
            obj.group_gauges = message.groupGauges.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.group_gauges = message.groupGauges;
        }
        if (message.groups) {
            obj.groups = message.groups.map(e => (e ? Group.toAmino(e) : undefined));
        }
        else {
            obj.groups = message.groups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/genesis-state',
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
            typeUrl: '/osmosis.incentives.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
