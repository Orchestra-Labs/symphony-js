//@ts-nocheck
import { Params } from './mint';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { bytesFromBase64, base64FromBytes } from '../../../helpers';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.mint.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/mint/query-params-request',
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
            type: 'osmosis/mint/query-params-request',
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
            typeUrl: '/osmosis.mint.v1beta1.QueryParamsRequest',
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
    typeUrl: '/osmosis.mint.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/mint/query-params-response',
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
            type: 'osmosis/mint/query-params-response',
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
            typeUrl: '/osmosis.mint.v1beta1.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryEpochProvisionsRequest() {
    return {};
}
export const QueryEpochProvisionsRequest = {
    typeUrl: '/osmosis.mint.v1beta1.QueryEpochProvisionsRequest',
    aminoType: 'osmosis/mint/query-epoch-provisions-request',
    is(o) {
        return o && o.$typeUrl === QueryEpochProvisionsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryEpochProvisionsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryEpochProvisionsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochProvisionsRequest();
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
        const message = createBaseQueryEpochProvisionsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryEpochProvisionsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEpochProvisionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/mint/query-epoch-provisions-request',
            value: QueryEpochProvisionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryEpochProvisionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEpochProvisionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.mint.v1beta1.QueryEpochProvisionsRequest',
            value: QueryEpochProvisionsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryEpochProvisionsRequest.typeUrl, QueryEpochProvisionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryEpochProvisionsRequest.aminoType, QueryEpochProvisionsRequest.typeUrl);
function createBaseQueryEpochProvisionsResponse() {
    return {
        epochProvisions: new Uint8Array(),
    };
}
export const QueryEpochProvisionsResponse = {
    typeUrl: '/osmosis.mint.v1beta1.QueryEpochProvisionsResponse',
    aminoType: 'osmosis/mint/query-epoch-provisions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryEpochProvisionsResponse.typeUrl ||
                o.epochProvisions instanceof Uint8Array ||
                typeof o.epochProvisions === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryEpochProvisionsResponse.typeUrl ||
                o.epoch_provisions instanceof Uint8Array ||
                typeof o.epoch_provisions === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryEpochProvisionsResponse.typeUrl ||
                o.epoch_provisions instanceof Uint8Array ||
                typeof o.epoch_provisions === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.epochProvisions.length !== 0) {
            writer.uint32(10).bytes(message.epochProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochProvisionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochProvisions = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochProvisionsResponse();
        message.epochProvisions = object.epochProvisions ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEpochProvisionsResponse();
        if (object.epoch_provisions !== undefined &&
            object.epoch_provisions !== null) {
            message.epochProvisions = bytesFromBase64(object.epoch_provisions);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions
            ? base64FromBytes(message.epochProvisions)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEpochProvisionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/mint/query-epoch-provisions-response',
            value: QueryEpochProvisionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryEpochProvisionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEpochProvisionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.mint.v1beta1.QueryEpochProvisionsResponse',
            value: QueryEpochProvisionsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryEpochProvisionsResponse.typeUrl, QueryEpochProvisionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryEpochProvisionsResponse.aminoType, QueryEpochProvisionsResponse.typeUrl);
