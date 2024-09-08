//@ts-nocheck
import { Params } from './bridge';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.bridge.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/bridge/query-params-request',
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/query-params-request',
            value: QueryParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.QueryParamsRequest',
            value: QueryParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const QueryParamsResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/bridge/query-params-response',
    is(o) {
        return (o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params)));
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
        const message = createBaseQueryParamsResponse();
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
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
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
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/query-params-response',
            value: QueryParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
