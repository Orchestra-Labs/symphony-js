"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const group_1 = require("./group");
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        gauges: [],
        lockableDurations: [],
        lastGaugeId: BigInt(0),
        groupGauges: [],
        groups: [],
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.incentives.GenesisState',
    aminoType: 'osmosis/incentives/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.is(o.params) &&
                    Array.isArray(o.gauges) &&
                    (!o.gauges.length || gauge_1.Gauge.is(o.gauges[0])) &&
                    Array.isArray(o.lockableDurations) &&
                    (!o.lockableDurations.length ||
                        duration_1.Duration.is(o.lockableDurations[0])) &&
                    typeof o.lastGaugeId === 'bigint' &&
                    Array.isArray(o.groupGauges) &&
                    (!o.groupGauges.length || gauge_1.Gauge.is(o.groupGauges[0])) &&
                    Array.isArray(o.groups) &&
                    (!o.groups.length || group_1.Group.is(o.groups[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isSDK(o.params) &&
                    Array.isArray(o.gauges) &&
                    (!o.gauges.length || gauge_1.Gauge.isSDK(o.gauges[0])) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        duration_1.Duration.isSDK(o.lockable_durations[0])) &&
                    typeof o.last_gauge_id === 'bigint' &&
                    Array.isArray(o.group_gauges) &&
                    (!o.group_gauges.length || gauge_1.Gauge.isSDK(o.group_gauges[0])) &&
                    Array.isArray(o.groups) &&
                    (!o.groups.length || group_1.Group.isSDK(o.groups[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isAmino(o.params) &&
                    Array.isArray(o.gauges) &&
                    (!o.gauges.length || gauge_1.Gauge.isAmino(o.gauges[0])) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        duration_1.Duration.isAmino(o.lockable_durations[0])) &&
                    typeof o.last_gauge_id === 'bigint' &&
                    Array.isArray(o.group_gauges) &&
                    (!o.group_gauges.length || gauge_1.Gauge.isAmino(o.group_gauges[0])) &&
                    Array.isArray(o.groups) &&
                    (!o.groups.length || group_1.Group.isAmino(o.groups[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastGaugeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastGaugeId);
        }
        for (const v of message.groupGauges) {
            gauge_1.Gauge.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(50).fork()).ldelim();
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
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastGaugeId = reader.uint64();
                    break;
                case 5:
                    message.groupGauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
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
        message.gauges = object.gauges?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.lockableDurations =
            object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.lastGaugeId =
            object.lastGaugeId !== undefined && object.lastGaugeId !== null
                ? BigInt(object.lastGaugeId.toString())
                : BigInt(0);
        message.groupGauges =
            object.groupGauges?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.groups = object.groups?.map(e => group_1.Group.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.gauges = object.gauges?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        message.lockableDurations =
            object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        if (object.last_gauge_id !== undefined && object.last_gauge_id !== null) {
            message.lastGaugeId = BigInt(object.last_gauge_id);
        }
        message.groupGauges =
            object.group_gauges?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        message.groups = object.groups?.map(e => group_1.Group.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => (e ? gauge_1.Gauge.toAmino(e) : undefined));
        }
        else {
            obj.gauges = message.gauges;
        }
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.last_gauge_id =
            message.lastGaugeId !== BigInt(0)
                ? message.lastGaugeId.toString()
                : undefined;
        if (message.groupGauges) {
            obj.group_gauges = message.groupGauges.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.group_gauges = message.groupGauges;
        }
        if (message.groups) {
            obj.groups = message.groups.map(e => (e ? group_1.Group.toAmino(e) : undefined));
        }
        else {
            obj.groups = message.groups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/genesis-state',
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
            typeUrl: '/osmosis.incentives.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
