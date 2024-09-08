"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllBeforeSendHooksAddressesResponse = exports.QueryAllBeforeSendHooksAddressesRequest = exports.QueryBeforeSendHookAddressResponse = exports.QueryBeforeSendHookAddressRequest = exports.QueryDenomsFromCreatorResponse = exports.QueryDenomsFromCreatorRequest = exports.QueryDenomAuthorityMetadataResponse = exports.QueryDenomAuthorityMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/tokenfactory/query-params-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-params-request',
            value: exports.QueryParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsRequest',
            value: exports.QueryParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/tokenfactory/query-params-response',
    is(o) {
        return (o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.is(o.params)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryParamsResponse.typeUrl || params_1.Params.isAmino(o.params)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-params-response',
            value: exports.QueryParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryParamsResponse',
            value: exports.QueryParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: '',
    };
}
exports.QueryDenomAuthorityMetadataRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest',
    aminoType: 'osmosis/tokenfactory/query-denom-authority-metadata-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomAuthorityMetadataRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomAuthorityMetadataRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomAuthorityMetadataRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denom-authority-metadata-request',
            value: exports.QueryDenomAuthorityMetadataRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest',
            value: exports.QueryDenomAuthorityMetadataRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomAuthorityMetadataRequest.typeUrl, exports.QueryDenomAuthorityMetadataRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomAuthorityMetadataRequest.aminoType, exports.QueryDenomAuthorityMetadataRequest.typeUrl);
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({}),
    };
}
exports.QueryDenomAuthorityMetadataResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse',
    aminoType: 'osmosis/tokenfactory/query-denom-authority-metadata-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomAuthorityMetadataResponse.typeUrl ||
                authorityMetadata_1.DenomAuthorityMetadata.is(o.authorityMetadata)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomAuthorityMetadataResponse.typeUrl ||
                authorityMetadata_1.DenomAuthorityMetadata.isSDK(o.authority_metadata)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomAuthorityMetadataResponse.typeUrl ||
                authorityMetadata_1.DenomAuthorityMetadata.isAmino(o.authority_metadata)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
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
                ? authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        if (object.authority_metadata !== undefined &&
            object.authority_metadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromAmino(object.authority_metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authorityMetadata
            ? authorityMetadata_1.DenomAuthorityMetadata.toAmino(message.authorityMetadata)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denom-authority-metadata-response',
            value: exports.QueryDenomAuthorityMetadataResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse',
            value: exports.QueryDenomAuthorityMetadataResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomAuthorityMetadataResponse.typeUrl, exports.QueryDenomAuthorityMetadataResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomAuthorityMetadataResponse.aminoType, exports.QueryDenomAuthorityMetadataResponse.typeUrl);
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: '',
    };
}
exports.QueryDenomsFromCreatorRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest',
    aminoType: 'osmosis/tokenfactory/query-denoms-from-creator-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomsFromCreatorRequest.typeUrl ||
                typeof o.creator === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomsFromCreatorRequest.typeUrl ||
                typeof o.creator === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomsFromCreatorRequest.typeUrl ||
                typeof o.creator === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denoms-from-creator-request',
            value: exports.QueryDenomsFromCreatorRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest',
            value: exports.QueryDenomsFromCreatorRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomsFromCreatorRequest.typeUrl, exports.QueryDenomsFromCreatorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomsFromCreatorRequest.aminoType, exports.QueryDenomsFromCreatorRequest.typeUrl);
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: [],
    };
}
exports.QueryDenomsFromCreatorResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse',
    aminoType: 'osmosis/tokenfactory/query-denoms-from-creator-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomsFromCreatorResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomsFromCreatorResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryDenomsFromCreatorResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-denoms-from-creator-response',
            value: exports.QueryDenomsFromCreatorResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse',
            value: exports.QueryDenomsFromCreatorResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryDenomsFromCreatorResponse.typeUrl, exports.QueryDenomsFromCreatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDenomsFromCreatorResponse.aminoType, exports.QueryDenomsFromCreatorResponse.typeUrl);
function createBaseQueryBeforeSendHookAddressRequest() {
    return {
        denom: '',
    };
}
exports.QueryBeforeSendHookAddressRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest',
    aminoType: 'osmosis/tokenfactory/query-before-send-hook-address-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryBeforeSendHookAddressRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryBeforeSendHookAddressRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryBeforeSendHookAddressRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryBeforeSendHookAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-before-send-hook-address-request',
            value: exports.QueryBeforeSendHookAddressRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBeforeSendHookAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeforeSendHookAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest',
            value: exports.QueryBeforeSendHookAddressRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeforeSendHookAddressRequest.typeUrl, exports.QueryBeforeSendHookAddressRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryBeforeSendHookAddressRequest.aminoType, exports.QueryBeforeSendHookAddressRequest.typeUrl);
function createBaseQueryBeforeSendHookAddressResponse() {
    return {
        cosmwasmAddress: '',
    };
}
exports.QueryBeforeSendHookAddressResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse',
    aminoType: 'osmosis/tokenfactory/query-before-send-hook-address-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryBeforeSendHookAddressResponse.typeUrl ||
                typeof o.cosmwasmAddress === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryBeforeSendHookAddressResponse.typeUrl ||
                typeof o.cosmwasm_address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryBeforeSendHookAddressResponse.typeUrl ||
                typeof o.cosmwasm_address === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cosmwasmAddress !== '') {
            writer.uint32(10).string(message.cosmwasmAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryBeforeSendHookAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-before-send-hook-address-response',
            value: exports.QueryBeforeSendHookAddressResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBeforeSendHookAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBeforeSendHookAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse',
            value: exports.QueryBeforeSendHookAddressResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBeforeSendHookAddressResponse.typeUrl, exports.QueryBeforeSendHookAddressResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryBeforeSendHookAddressResponse.aminoType, exports.QueryBeforeSendHookAddressResponse.typeUrl);
function createBaseQueryAllBeforeSendHooksAddressesRequest() {
    return {};
}
exports.QueryAllBeforeSendHooksAddressesRequest = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest',
    aminoType: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryAllBeforeSendHooksAddressesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryAllBeforeSendHooksAddressesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryAllBeforeSendHooksAddressesRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryAllBeforeSendHooksAddressesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-request',
            value: exports.QueryAllBeforeSendHooksAddressesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllBeforeSendHooksAddressesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBeforeSendHooksAddressesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesRequest',
            value: exports.QueryAllBeforeSendHooksAddressesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllBeforeSendHooksAddressesRequest.typeUrl, exports.QueryAllBeforeSendHooksAddressesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllBeforeSendHooksAddressesRequest.aminoType, exports.QueryAllBeforeSendHooksAddressesRequest.typeUrl);
function createBaseQueryAllBeforeSendHooksAddressesResponse() {
    return {
        denoms: [],
        beforeSendHookAddresses: [],
    };
}
exports.QueryAllBeforeSendHooksAddressesResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse',
    aminoType: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryAllBeforeSendHooksAddressesResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string') &&
                    Array.isArray(o.beforeSendHookAddresses) &&
                    (!o.beforeSendHookAddresses.length ||
                        typeof o.beforeSendHookAddresses[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryAllBeforeSendHooksAddressesResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string') &&
                    Array.isArray(o.before_send_hook_addresses) &&
                    (!o.before_send_hook_addresses.length ||
                        typeof o.before_send_hook_addresses[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryAllBeforeSendHooksAddressesResponse.typeUrl ||
                (Array.isArray(o.denoms) &&
                    (!o.denoms.length || typeof o.denoms[0] === 'string') &&
                    Array.isArray(o.before_send_hook_addresses) &&
                    (!o.before_send_hook_addresses.length ||
                        typeof o.before_send_hook_addresses[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        for (const v of message.beforeSendHookAddresses) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryAllBeforeSendHooksAddressesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/query-all-before-send-hooks-addresses-response',
            value: exports.QueryAllBeforeSendHooksAddressesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllBeforeSendHooksAddressesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBeforeSendHooksAddressesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.QueryAllBeforeSendHooksAddressesResponse',
            value: exports.QueryAllBeforeSendHooksAddressesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAllBeforeSendHooksAddressesResponse.typeUrl, exports.QueryAllBeforeSendHooksAddressesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryAllBeforeSendHooksAddressesResponse.aminoType, exports.QueryAllBeforeSendHooksAddressesResponse.typeUrl);
