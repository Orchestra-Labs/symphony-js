//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseModule() {
    return {
        maxMetadataLen: BigInt(0),
        authority: '',
    };
}
export const Module = {
    typeUrl: '/cosmos.gov.module.v1.Module',
    aminoType: 'cosmos-sdk/Module',
    is(o) {
        return (o &&
            (o.$typeUrl === Module.typeUrl ||
                (typeof o.maxMetadataLen === 'bigint' &&
                    typeof o.authority === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Module.typeUrl ||
                (typeof o.max_metadata_len === 'bigint' &&
                    typeof o.authority === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Module.typeUrl ||
                (typeof o.max_metadata_len === 'bigint' &&
                    typeof o.authority === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxMetadataLen !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxMetadataLen);
        }
        if (message.authority !== '') {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxMetadataLen = reader.uint64();
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.maxMetadataLen =
            object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
                ? BigInt(object.maxMetadataLen.toString())
                : BigInt(0);
        message.authority = object.authority ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseModule();
        if (object.max_metadata_len !== undefined &&
            object.max_metadata_len !== null) {
            message.maxMetadataLen = BigInt(object.max_metadata_len);
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_metadata_len =
            message.maxMetadataLen !== BigInt(0)
                ? message.maxMetadataLen.toString()
                : undefined;
        obj.authority = message.authority === '' ? undefined : message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/Module',
            value: Module.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Module.decode(message.value);
    },
    toProto(message) {
        return Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.gov.module.v1.Module',
            value: Module.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
