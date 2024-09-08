//@ts-nocheck
import { Params, DistrInfo, AnyPoolToInternalGauges, ConcentratedPoolToNoLockGauges, } from './incentives';
import { Duration, } from '../../../google/protobuf/duration';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        lockableDurations: [],
        distrInfo: undefined,
        anyPoolToInternalGauges: undefined,
        concentratedPoolToNoLockGauges: undefined,
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.poolincentives.v1beta1.GenesisState',
    aminoType: 'osmosis/poolincentives/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.is(o.params) &&
                    Array.isArray(o.lockableDurations) &&
                    (!o.lockableDurations.length || Duration.is(o.lockableDurations[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isSDK(o.params) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isSDK(o.lockable_durations[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isAmino(o.params) &&
                    Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isAmino(o.lockable_durations[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distrInfo !== undefined) {
            DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.anyPoolToInternalGauges !== undefined) {
            AnyPoolToInternalGauges.encode(message.anyPoolToInternalGauges, writer.uint32(34).fork()).ldelim();
        }
        if (message.concentratedPoolToNoLockGauges !== undefined) {
            ConcentratedPoolToNoLockGauges.encode(message.concentratedPoolToNoLockGauges, writer.uint32(42).fork()).ldelim();
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
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distrInfo = DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.anyPoolToInternalGauges = AnyPoolToInternalGauges.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.concentratedPoolToNoLockGauges =
                        ConcentratedPoolToNoLockGauges.decode(reader, reader.uint32());
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
        message.lockableDurations =
            object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        message.distrInfo =
            object.distrInfo !== undefined && object.distrInfo !== null
                ? DistrInfo.fromPartial(object.distrInfo)
                : undefined;
        message.anyPoolToInternalGauges =
            object.anyPoolToInternalGauges !== undefined &&
                object.anyPoolToInternalGauges !== null
                ? AnyPoolToInternalGauges.fromPartial(object.anyPoolToInternalGauges)
                : undefined;
        message.concentratedPoolToNoLockGauges =
            object.concentratedPoolToNoLockGauges !== undefined &&
                object.concentratedPoolToNoLockGauges !== null
                ? ConcentratedPoolToNoLockGauges.fromPartial(object.concentratedPoolToNoLockGauges)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.lockableDurations =
            object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = DistrInfo.fromAmino(object.distr_info);
        }
        if (object.any_pool_to_internal_gauges !== undefined &&
            object.any_pool_to_internal_gauges !== null) {
            message.anyPoolToInternalGauges = AnyPoolToInternalGauges.fromAmino(object.any_pool_to_internal_gauges);
        }
        if (object.concentrated_pool_to_no_lock_gauges !== undefined &&
            object.concentrated_pool_to_no_lock_gauges !== null) {
            message.concentratedPoolToNoLockGauges =
                ConcentratedPoolToNoLockGauges.fromAmino(object.concentrated_pool_to_no_lock_gauges);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.distr_info = message.distrInfo
            ? DistrInfo.toAmino(message.distrInfo)
            : undefined;
        obj.any_pool_to_internal_gauges = message.anyPoolToInternalGauges
            ? AnyPoolToInternalGauges.toAmino(message.anyPoolToInternalGauges)
            : undefined;
        obj.concentrated_pool_to_no_lock_gauges =
            message.concentratedPoolToNoLockGauges
                ? ConcentratedPoolToNoLockGauges.toAmino(message.concentratedPoolToNoLockGauges)
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/genesis-state',
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
            typeUrl: '/osmosis.poolincentives.v1beta1.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
