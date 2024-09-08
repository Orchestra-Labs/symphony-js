//@ts-nocheck
import { Params } from './params';
import { DenomAuthorityMetadata, } from './authorityMetadata';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/tokenfactory/query-params-request',
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
            type: 'osmosis/tokenfactory/query-params-request',
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
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsRequest',
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
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/tokenfactory/query-params-response',
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
            type: 'osmosis/tokenfactory/query-params-response',
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
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: '',
    };
}
export const QueryDenomAuthorityMetadataRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest',
    aminoType: 'osmosis/tokenfactory/query-denom-authority-metadata-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryDenomAuthorityMetadataRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denom-authority-metadata-request',
            value: QueryDenomAuthorityMetadataRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest',
            value: QueryDenomAuthorityMetadataRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryDenomAuthorityMetadataRequest.typeUrl, QueryDenomAuthorityMetadataRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomAuthorityMetadataRequest.aminoType, QueryDenomAuthorityMetadataRequest.typeUrl);
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: DenomAuthorityMetadata.fromPartial({}),
    };
}
export const QueryDenomAuthorityMetadataResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse',
    aminoType: 'osmosis/tokenfactory/query-denom-authority-metadata-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl ||
                DenomAuthorityMetadata.is(o.authorityMetadata)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl ||
                DenomAuthorityMetadata.isSDK(o.authority_metadata)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryDenomAuthorityMetadataResponse.typeUrl ||
                DenomAuthorityMetadata.isAmino(o.authority_metadata)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.authorityMetadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authorityMetadata =
            object.authorityMetadata !== undefined &&
                object.authorityMetadata !== null
                ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        if (object.authority_metadata !== undefined &&
            object.authority_metadata !== null) {
            message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authorityMetadata
            ? DenomAuthorityMetadata.toAmino(message.authorityMetadata)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denom-authority-metadata-response',
            value: QueryDenomAuthorityMetadataResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse',
            value: QueryDenomAuthorityMetadataResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryDenomAuthorityMetadataResponse.typeUrl, QueryDenomAuthorityMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomAuthorityMetadataResponse.aminoType, QueryDenomAuthorityMetadataResponse.typeUrl);
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: '',
    };
}
export const QueryDenomsFromCreatorRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest',
    aminoType: 'osmosis/tokenfactory/query-denoms-from-creator-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl ||
                typeof o.creator === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl ||
                typeof o.creator === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryDenomsFromCreatorRequest.typeUrl ||
                typeof o.creator === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator === '' ? undefined : message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denoms-from-creator-request',
            value: QueryDenomsFromCreatorRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest',
            value: QueryDenomsFromCreatorRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryDenomsFromCreatorRequest.typeUrl, QueryDenomsFromCreatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomsFromCreatorRequest.aminoType, QueryDenomsFromCreatorRequest.typeUrl);
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: [],
    };
}
export const QueryDenomsFromCreatorResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse',
    aminoType: 'osmosis/tokenfactory/query-denoms-from-creator-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryDenomsFromCreatorResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = message.denoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denoms-from-creator-response',
            value: QueryDenomsFromCreatorResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse',
            value: QueryDenomsFromCreatorResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryDenomsFromCreatorResponse.typeUrl, QueryDenomsFromCreatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomsFromCreatorResponse.aminoType, QueryDenomsFromCreatorResponse.typeUrl);
function createBaseQueryBeforeSendHookAddressRequest() {
    return {
        denom: '',
    };
}
export const QueryBeforeSendHookAddressRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest',
    aminoType: 'osmosis/tokenfactory/query-before-send-hook-address-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryBeforeSendHookAddressRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryBeforeSendHookAddressRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryBeforeSendHookAddressRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeforeSendHookAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBeforeSendHookAddressRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeforeSendHookAddressRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBeforeSendHookAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-before-send-hook-address-request',
            value: QueryBeforeSendHookAddressRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryBeforeSendHookAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBeforeSendHookAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest',
            value: QueryBeforeSendHookAddressRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryBeforeSendHookAddressRequest.typeUrl, QueryBeforeSendHookAddressRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBeforeSendHookAddressRequest.aminoType, QueryBeforeSendHookAddressRequest.typeUrl);
function createBaseQueryBeforeSendHookAddressResponse() {
    return {
        cosmwasmAddress: '',
    };
}
export const QueryBeforeSendHookAddressResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse',
    aminoType: 'osmosis/tokenfactory/query-before-send-hook-address-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryBeforeSendHookAddressResponse.typeUrl ||
                typeof o.cosmwasmAddress === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryBeforeSendHookAddressResponse.typeUrl ||
                typeof o.cosmwasm_address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryBeforeSendHookAddressResponse.typeUrl ||
                typeof o.cosmwasm_address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.cosmwasmAddress !== '') {
            writer.uint32(10).string(message.cosmwasmAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeforeSendHookAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmwasmAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBeforeSendHookAddressResponse();
        message.cosmwasmAddress = object.cosmwasmAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBeforeSendHookAddressResponse();
        if (object.cosmwasm_address !== undefined &&
            object.cosmwasm_address !== null) {
            message.cosmwasmAddress = object.cosmwasm_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cosmwasm_address =
            message.cosmwasmAddress === '' ? undefined : message.cosmwasmAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBeforeSendHookAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-before-send-hook-address-response',
            value: QueryBeforeSendHookAddressResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryBeforeSendHookAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBeforeSendHookAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse',
            value: QueryBeforeSendHookAddressResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryBeforeSendHookAddressResponse.typeUrl, QueryBeforeSendHookAddressResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBeforeSendHookAddressResponse.aminoType, QueryBeforeSendHookAddressResponse.typeUrl);
function createBaseQueryAllBeforeSendHooksAddressesRequest() {
    return {};
}
export const QueryAllBeforeSendHooksAddressesRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest',
    aminoType: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-request',
    is(o) {
        return o && o.$typeUrl === QueryAllBeforeSendHooksAddressesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAllBeforeSendHooksAddressesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryAllBeforeSendHooksAddressesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
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
        const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAllBeforeSendHooksAddressesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBeforeSendHooksAddressesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-request',
            value: QueryAllBeforeSendHooksAddressesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllBeforeSendHooksAddressesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllBeforeSendHooksAddressesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest',
            value: QueryAllBeforeSendHooksAddressesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllBeforeSendHooksAddressesRequest.typeUrl, QueryAllBeforeSendHooksAddressesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllBeforeSendHooksAddressesRequest.aminoType, QueryAllBeforeSendHooksAddressesRequest.typeUrl);
function createBaseQueryAllBeforeSendHooksAddressesResponse() {
    return {
        denoms: [],
        beforeSendHookAddresses: [],
    };
}
export const QueryAllBeforeSendHooksAddressesResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse',
    aminoType: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAllBeforeSendHooksAddressesResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string') &&
                    Array.isArray(o.beforeSendHookAddresses) &&
                    (!o.beforeSendHookAddresses.length ||
                        typeof o.beforeSendHookAddresses[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAllBeforeSendHooksAddressesResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string') &&
                    Array.isArray(o.before_send_hook_addresses) &&
                    (!o.before_send_hook_addresses.length ||
                        typeof o.before_send_hook_addresses[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAllBeforeSendHooksAddressesResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string') &&
                    Array.isArray(o.before_send_hook_addresses) &&
                    (!o.before_send_hook_addresses.length ||
                        typeof o.before_send_hook_addresses[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        for (const v of message.beforeSendHookAddresses) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                case 2:
                    message.beforeSendHookAddresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        message.beforeSendHookAddresses =
            object.beforeSendHookAddresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBeforeSendHooksAddressesResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        message.beforeSendHookAddresses =
            object.before_send_hook_addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = message.denoms;
        }
        if (message.beforeSendHookAddresses) {
            obj.before_send_hook_addresses = message.beforeSendHookAddresses.map(e => e);
        }
        else {
            obj.before_send_hook_addresses = message.beforeSendHookAddresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBeforeSendHooksAddressesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-response',
            value: QueryAllBeforeSendHooksAddressesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllBeforeSendHooksAddressesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllBeforeSendHooksAddressesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse',
            value: QueryAllBeforeSendHooksAddressesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllBeforeSendHooksAddressesResponse.typeUrl, QueryAllBeforeSendHooksAddressesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllBeforeSendHooksAddressesResponse.aminoType, QueryAllBeforeSendHooksAddressesResponse.typeUrl);
