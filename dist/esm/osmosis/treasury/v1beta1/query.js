//@ts-nocheck
import { Params } from './treasury';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseQueryTaxRateRequest() {
    return {};
}
export const QueryTaxRateRequest = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateRequest',
    aminoType: 'osmosis/treasury/query-tax-rate-request',
    is(o) {
        return o && o.$typeUrl === QueryTaxRateRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryTaxRateRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryTaxRateRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTaxRateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/query-tax-rate-request',
            value: QueryTaxRateRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTaxRateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTaxRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateRequest',
            value: QueryTaxRateRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTaxRateRequest.typeUrl, QueryTaxRateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTaxRateRequest.aminoType, QueryTaxRateRequest.typeUrl);
function createBaseQueryTaxRateResponse() {
    return {
        taxRate: '',
    };
}
export const QueryTaxRateResponse = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateResponse',
    aminoType: 'osmosis/treasury/query-tax-rate-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTaxRateResponse.typeUrl ||
                typeof o.taxRate === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTaxRateResponse.typeUrl ||
                typeof o.tax_rate === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTaxRateResponse.typeUrl ||
                typeof o.tax_rate === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.taxRate !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.taxRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTaxRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taxRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return QueryTaxRateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/query-tax-rate-response',
            value: QueryTaxRateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTaxRateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTaxRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateResponse',
            value: QueryTaxRateResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTaxRateResponse.typeUrl, QueryTaxRateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTaxRateResponse.aminoType, QueryTaxRateResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.treasury.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/treasury/query-params-request',
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
            type: 'osmosis/treasury/query-params-request',
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
            typeUrl: '/osmosis.treasury.v1beta1.QueryParamsRequest',
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
    typeUrl: '/osmosis.treasury.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/treasury/query-params-response',
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
            type: 'osmosis/treasury/query-params-response',
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
            typeUrl: '/osmosis.treasury.v1beta1.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
