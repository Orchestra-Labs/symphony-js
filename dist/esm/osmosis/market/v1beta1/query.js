//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { Params } from './market';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseQuerySwapRequest() {
    return {
        offerCoin: '',
        askDenom: '',
    };
}
export const QuerySwapRequest = {
    typeUrl: '/osmosis.market.v1beta1.QuerySwapRequest',
    aminoType: 'osmosis/market/query-swap-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySwapRequest.typeUrl ||
                (typeof o.offerCoin === 'string' && typeof o.askDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySwapRequest.typeUrl ||
                (typeof o.offer_coin === 'string' && typeof o.ask_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySwapRequest.typeUrl ||
                (typeof o.offer_coin === 'string' && typeof o.ask_denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.offerCoin !== '') {
            writer.uint32(10).string(message.offerCoin);
        }
        if (message.askDenom !== '') {
            writer.uint32(18).string(message.askDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.offerCoin = reader.string();
                    break;
                case 2:
                    message.askDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapRequest();
        message.offerCoin = object.offerCoin ?? '';
        message.askDenom = object.askDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapRequest();
        if (object.offer_coin !== undefined && object.offer_coin !== null) {
            message.offerCoin = object.offer_coin;
        }
        if (object.ask_denom !== undefined && object.ask_denom !== null) {
            message.askDenom = object.ask_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.offer_coin = message.offerCoin === '' ? undefined : message.offerCoin;
        obj.ask_denom = message.askDenom === '' ? undefined : message.askDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-swap-request',
            value: QuerySwapRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySwapRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QuerySwapRequest',
            value: QuerySwapRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySwapRequest.typeUrl, QuerySwapRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapRequest.aminoType, QuerySwapRequest.typeUrl);
function createBaseQuerySwapResponse() {
    return {
        returnCoin: Coin.fromPartial({}),
    };
}
export const QuerySwapResponse = {
    typeUrl: '/osmosis.market.v1beta1.QuerySwapResponse',
    aminoType: 'osmosis/market/query-swap-response',
    is(o) {
        return (o && (o.$typeUrl === QuerySwapResponse.typeUrl || Coin.is(o.returnCoin)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySwapResponse.typeUrl || Coin.isSDK(o.return_coin)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySwapResponse.typeUrl || Coin.isAmino(o.return_coin)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.returnCoin !== undefined) {
            Coin.encode(message.returnCoin, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.returnCoin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapResponse();
        message.returnCoin =
            object.returnCoin !== undefined && object.returnCoin !== null
                ? Coin.fromPartial(object.returnCoin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapResponse();
        if (object.return_coin !== undefined && object.return_coin !== null) {
            message.returnCoin = Coin.fromAmino(object.return_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.return_coin = message.returnCoin
            ? Coin.toAmino(message.returnCoin)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-swap-response',
            value: QuerySwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySwapResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QuerySwapResponse',
            value: QuerySwapResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySwapResponse.typeUrl, QuerySwapResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapResponse.aminoType, QuerySwapResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.market.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/market/query-params-request',
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
            type: 'osmosis/market/query-params-request',
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
            typeUrl: '/osmosis.market.v1beta1.QueryParamsRequest',
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
    typeUrl: '/osmosis.market.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/market/query-params-response',
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
            type: 'osmosis/market/query-params-response',
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
            typeUrl: '/osmosis.market.v1beta1.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryExchangeRequirementsRequest() {
    return {};
}
export const QueryExchangeRequirementsRequest = {
    typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsRequest',
    aminoType: 'osmosis/market/query-exchange-requirements-request',
    is(o) {
        return o && o.$typeUrl === QueryExchangeRequirementsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryExchangeRequirementsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryExchangeRequirementsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRequirementsRequest();
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
        const message = createBaseQueryExchangeRequirementsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryExchangeRequirementsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRequirementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-exchange-requirements-request',
            value: QueryExchangeRequirementsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryExchangeRequirementsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRequirementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsRequest',
            value: QueryExchangeRequirementsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryExchangeRequirementsRequest.typeUrl, QueryExchangeRequirementsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryExchangeRequirementsRequest.aminoType, QueryExchangeRequirementsRequest.typeUrl);
function createBaseQueryExchangeRequirementsResponse() {
    return {
        exchangeRequirements: [],
        total: Coin.fromPartial({}),
    };
}
export const QueryExchangeRequirementsResponse = {
    typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsResponse',
    aminoType: 'osmosis/market/query-exchange-requirements-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryExchangeRequirementsResponse.typeUrl ||
                (Array.isArray(o.exchangeRequirements) &&
                    (!o.exchangeRequirements.length ||
                        ExchangeRequirement.is(o.exchangeRequirements[0])) &&
                    Coin.is(o.total))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryExchangeRequirementsResponse.typeUrl ||
                (Array.isArray(o.exchange_requirements) &&
                    (!o.exchange_requirements.length ||
                        ExchangeRequirement.isSDK(o.exchange_requirements[0])) &&
                    Coin.isSDK(o.total))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryExchangeRequirementsResponse.typeUrl ||
                (Array.isArray(o.exchange_requirements) &&
                    (!o.exchange_requirements.length ||
                        ExchangeRequirement.isAmino(o.exchange_requirements[0])) &&
                    Coin.isAmino(o.total))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.exchangeRequirements) {
            ExchangeRequirement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.total !== undefined) {
            Coin.encode(message.total, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRequirementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRequirements.push(ExchangeRequirement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeRequirementsResponse();
        message.exchangeRequirements =
            object.exchangeRequirements?.map(e => ExchangeRequirement.fromPartial(e)) || [];
        message.total =
            object.total !== undefined && object.total !== null
                ? Coin.fromPartial(object.total)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRequirementsResponse();
        message.exchangeRequirements =
            object.exchange_requirements?.map(e => ExchangeRequirement.fromAmino(e)) || [];
        if (object.total !== undefined && object.total !== null) {
            message.total = Coin.fromAmino(object.total);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exchangeRequirements) {
            obj.exchange_requirements = message.exchangeRequirements.map(e => e ? ExchangeRequirement.toAmino(e) : undefined);
        }
        else {
            obj.exchange_requirements = message.exchangeRequirements;
        }
        obj.total = message.total ? Coin.toAmino(message.total) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRequirementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-exchange-requirements-response',
            value: QueryExchangeRequirementsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryExchangeRequirementsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRequirementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsResponse',
            value: QueryExchangeRequirementsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryExchangeRequirementsResponse.typeUrl, QueryExchangeRequirementsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryExchangeRequirementsResponse.aminoType, QueryExchangeRequirementsResponse.typeUrl);
function createBaseExchangeRequirement() {
    return {
        baseCurrency: Coin.fromPartial({}),
        exchangeRate: '',
    };
}
export const ExchangeRequirement = {
    typeUrl: '/osmosis.market.v1beta1.ExchangeRequirement',
    aminoType: 'osmosis/market/exchange-requirement',
    is(o) {
        return (o &&
            (o.$typeUrl === ExchangeRequirement.typeUrl ||
                (Coin.is(o.baseCurrency) && typeof o.exchangeRate === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ExchangeRequirement.typeUrl ||
                (Coin.isSDK(o.base_currency) && typeof o.exchange_rate === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ExchangeRequirement.typeUrl ||
                (Coin.isAmino(o.base_currency) && typeof o.exchange_rate === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseCurrency !== undefined) {
            Coin.encode(message.baseCurrency, writer.uint32(10).fork()).ldelim();
        }
        if (message.exchangeRate !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseCurrency = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExchangeRequirement();
        message.baseCurrency =
            object.baseCurrency !== undefined && object.baseCurrency !== null
                ? Coin.fromPartial(object.baseCurrency)
                : undefined;
        message.exchangeRate = object.exchangeRate ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseExchangeRequirement();
        if (object.base_currency !== undefined && object.base_currency !== null) {
            message.baseCurrency = Coin.fromAmino(object.base_currency);
        }
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchangeRate = object.exchange_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_currency = message.baseCurrency
            ? Coin.toAmino(message.baseCurrency)
            : undefined;
        obj.exchange_rate =
            message.exchangeRate === '' ? undefined : message.exchangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return ExchangeRequirement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/exchange-requirement',
            value: ExchangeRequirement.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ExchangeRequirement.decode(message.value);
    },
    toProto(message) {
        return ExchangeRequirement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.ExchangeRequirement',
            value: ExchangeRequirement.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ExchangeRequirement.typeUrl, ExchangeRequirement);
GlobalDecoderRegistry.registerAminoProtoMapping(ExchangeRequirement.aminoType, ExchangeRequirement.typeUrl);
