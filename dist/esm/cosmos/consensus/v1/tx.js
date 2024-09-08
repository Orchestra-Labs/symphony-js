//@ts-nocheck
import { BlockParams, EvidenceParams, ValidatorParams, } from '../../../tendermint/types/params';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseMsgUpdateParams() {
    return {
        authority: '',
        block: undefined,
        evidence: undefined,
        validator: undefined,
    };
}
export const MsgUpdateParams = {
    typeUrl: '/cosmos.consensus.v1.MsgUpdateParams',
    aminoType: 'cosmos-sdk/MsgUpdateParams',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgUpdateParams.typeUrl ||
                typeof o.authority === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgUpdateParams.typeUrl ||
                typeof o.authority === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgUpdateParams.typeUrl ||
                typeof o.authority === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? '';
        message.block =
            object.block !== undefined && object.block !== null
                ? BlockParams.fromPartial(object.block)
                : undefined;
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? EvidenceParams.fromPartial(object.evidence)
                : undefined;
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? ValidatorParams.fromPartial(object.validator)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = ValidatorParams.fromAmino(object.validator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === '' ? undefined : message.authority;
        obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence
            ? EvidenceParams.toAmino(message.evidence)
            : undefined;
        obj.validator = message.validator
            ? ValidatorParams.toAmino(message.validator)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/MsgUpdateParams',
            value: MsgUpdateParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.consensus.v1.MsgUpdateParams',
            value: MsgUpdateParams.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: '/cosmos.consensus.v1.MsgUpdateParamsResponse',
    aminoType: 'cosmos-sdk/MsgUpdateParamsResponse',
    is(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/MsgUpdateParamsResponse',
            value: MsgUpdateParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.consensus.v1.MsgUpdateParamsResponse',
            value: MsgUpdateParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
