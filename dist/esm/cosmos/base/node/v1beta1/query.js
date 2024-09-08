//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseConfigRequest() {
    return {};
}
export const ConfigRequest = {
    typeUrl: '/cosmos.base.node.v1beta1.ConfigRequest',
    aminoType: 'cosmos-sdk/ConfigRequest',
    is(o) {
        return o && o.$typeUrl === ConfigRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ConfigRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ConfigRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfigRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/ConfigRequest',
            value: ConfigRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.base.node.v1beta1.ConfigRequest',
            value: ConfigRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConfigRequest.typeUrl, ConfigRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigRequest.aminoType, ConfigRequest.typeUrl);
function createBaseConfigResponse() {
    return {
        minimumGasPrice: '',
    };
}
export const ConfigResponse = {
    typeUrl: '/cosmos.base.node.v1beta1.ConfigResponse',
    aminoType: 'cosmos-sdk/ConfigResponse',
    is(o) {
        return (o &&
            (o.$typeUrl === ConfigResponse.typeUrl ||
                typeof o.minimumGasPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ConfigResponse.typeUrl ||
                typeof o.minimum_gas_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ConfigResponse.typeUrl ||
                typeof o.minimum_gas_price === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.minimumGasPrice !== '') {
            writer.uint32(10).string(message.minimumGasPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimumGasPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimumGasPrice = object.minimumGasPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfigResponse();
        if (object.minimum_gas_price !== undefined &&
            object.minimum_gas_price !== null) {
            message.minimumGasPrice = object.minimum_gas_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_gas_price =
            message.minimumGasPrice === '' ? undefined : message.minimumGasPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/ConfigResponse',
            value: ConfigResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.base.node.v1beta1.ConfigResponse',
            value: ConfigResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConfigResponse.typeUrl, ConfigResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigResponse.aminoType, ConfigResponse.typeUrl);
