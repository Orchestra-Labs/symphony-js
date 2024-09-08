"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const incentives_1 = require("./incentives");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: incentives_1.Params.fromPartial({}),
        lockableDurations: [],
        distrInfo: undefined,
        anyPoolToInternalGauges: undefined,
        concentratedPoolToNoLockGauges: undefined,
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.poolincentives.v1beta1.GenesisState',
    aminoType: 'osmosis/poolincentives/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (incentives_1.Params.is(o.params) &&
                    Array.isArray(o.lockableDurations) &&
                    (!o.lockableDurations.length || duration_1.Duration.is(o.lockableDurations[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (incentives_1.Params.isSDK(o.params) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        duration_1.Duration.isSDK(o.lockable_durations[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (incentives_1.Params.isAmino(o.params) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        duration_1.Duration.isAmino(o.lockable_durations[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.anyPoolToInternalGauges !== undefined) {
            incentives_1.AnyPoolToInternalGauges.encode(message.anyPoolToInternalGauges, writer.uint32(34).fork()).ldelim();
        }
        if (message.concentratedPoolToNoLockGauges !== undefined) {
            incentives_1.ConcentratedPoolToNoLockGauges.encode(message.concentratedPoolToNoLockGauges, writer.uint32(42).fork()).ldelim();
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
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.anyPoolToInternalGauges = incentives_1.AnyPoolToInternalGauges.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.concentratedPoolToNoLockGauges =
                        incentives_1.ConcentratedPoolToNoLockGauges.decode(reader, reader.uint32());
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
                ? incentives_1.Params.fromPartial(object.params)
                : undefined;
        message.lockableDurations =
            object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.distrInfo =
            object.distrInfo !== undefined && object.distrInfo !== null
                ? incentives_1.DistrInfo.fromPartial(object.distrInfo)
                : undefined;
        message.anyPoolToInternalGauges =
            object.anyPoolToInternalGauges !== undefined &&
                object.anyPoolToInternalGauges !== null
                ? incentives_1.AnyPoolToInternalGauges.fromPartial(object.anyPoolToInternalGauges)
                : undefined;
        message.concentratedPoolToNoLockGauges =
            object.concentratedPoolToNoLockGauges !== undefined &&
                object.concentratedPoolToNoLockGauges !== null
                ? incentives_1.ConcentratedPoolToNoLockGauges.fromPartial(object.concentratedPoolToNoLockGauges)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromAmino(object.params);
        }
        message.lockableDurations =
            object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromAmino(object.distr_info);
        }
        if (object.any_pool_to_internal_gauges !== undefined &&
            object.any_pool_to_internal_gauges !== null) {
            message.anyPoolToInternalGauges = incentives_1.AnyPoolToInternalGauges.fromAmino(object.any_pool_to_internal_gauges);
        }
        if (object.concentrated_pool_to_no_lock_gauges !== undefined &&
            object.concentrated_pool_to_no_lock_gauges !== null) {
            message.concentratedPoolToNoLockGauges =
                incentives_1.ConcentratedPoolToNoLockGauges.fromAmino(object.concentrated_pool_to_no_lock_gauges);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.distr_info = message.distrInfo
            ? incentives_1.DistrInfo.toAmino(message.distrInfo)
            : undefined;
        obj.any_pool_to_internal_gauges = message.anyPoolToInternalGauges
            ? incentives_1.AnyPoolToInternalGauges.toAmino(message.anyPoolToInternalGauges)
            : undefined;
        obj.concentrated_pool_to_no_lock_gauges =
            message.concentratedPoolToNoLockGauges
                ? incentives_1.ConcentratedPoolToNoLockGauges.toAmino(message.concentratedPoolToNoLockGauges)
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/genesis-state',
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
            typeUrl: '/osmosis.poolincentives.v1beta1.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
