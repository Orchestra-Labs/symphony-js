"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryTaxRateResponse = exports.QueryTaxRateRequest = void 0;
//@ts-nocheck
const treasury_1 = require("./treasury");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseQueryTaxRateRequest() {
    return {};
}
exports.QueryTaxRateRequest = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateRequest',
    aminoType: 'osmosis/treasury/query-tax-rate-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryTaxRateRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryTaxRateRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryTaxRateRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTaxRateRequest();
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
        const message = createBaseQueryTaxRateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTaxRateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTaxRateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/query-tax-rate-request',
            value: exports.QueryTaxRateRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTaxRateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTaxRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateRequest',
            value: exports.QueryTaxRateRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTaxRateRequest.typeUrl, exports.QueryTaxRateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTaxRateRequest.aminoType, exports.QueryTaxRateRequest.typeUrl);
function createBaseQueryTaxRateResponse() {
    return {
        taxRate: '',
    };
}
exports.QueryTaxRateResponse = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateResponse',
    aminoType: 'osmosis/treasury/query-tax-rate-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTaxRateResponse.typeUrl ||
                typeof o.taxRate === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTaxRateResponse.typeUrl ||
                typeof o.tax_rate === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTaxRateResponse.typeUrl ||
                typeof o.tax_rate === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.taxRate !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.taxRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTaxRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taxRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTaxRateResponse();
        message.taxRate = object.taxRate ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTaxRateResponse();
        if (object.tax_rate !== undefined && object.tax_rate !== null) {
            message.taxRate = object.tax_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tax_rate = message.taxRate === '' ? undefined : message.taxRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTaxRateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/query-tax-rate-response',
            value: exports.QueryTaxRateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTaxRateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTaxRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateResponse',
            value: exports.QueryTaxRateResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTaxRateResponse.typeUrl, exports.QueryTaxRateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTaxRateResponse.aminoType, exports.QueryTaxRateResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/treasury/query-params-request',
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
            type: 'osmosis/treasury/query-params-request',
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
            typeUrl: '/osmosis.treasury.v1beta1.QueryParamsRequest',
            value: exports.QueryParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: treasury_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/treasury/query-params-response',
    is(o) {
        return (o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || treasury_1.Params.is(o.params)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryParamsResponse.typeUrl || treasury_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryParamsResponse.typeUrl || treasury_1.Params.isAmino(o.params)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            treasury_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = treasury_1.Params.decode(reader, reader.uint32());
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
                ? treasury_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = treasury_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? treasury_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/query-params-response',
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
            typeUrl: '/osmosis.treasury.v1beta1.QueryParamsResponse',
            value: exports.QueryParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
