//@ts-nocheck
import { Params } from './params';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: '/osmosis.ibcratelimit.v1beta1.ParamsRequest',
    aminoType: 'osmosis/ibcratelimit/params-request',
    is(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ibcratelimit/params-request',
            value: ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.ibcratelimit.v1beta1.ParamsRequest',
            value: ParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const ParamsResponse = {
    typeUrl: '/osmosis.ibcratelimit.v1beta1.ParamsResponse',
    aminoType: 'osmosis/ibcratelimit/params-response',
    is(o) {
        return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ibcratelimit/params-response',
            value: ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.ibcratelimit.v1beta1.ParamsResponse',
            value: ParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
