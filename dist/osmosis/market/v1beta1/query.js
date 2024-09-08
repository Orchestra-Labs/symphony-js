"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRequirement = exports.QueryExchangeRequirementsResponse = exports.QueryExchangeRequirementsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QuerySwapResponse = exports.QuerySwapRequest = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const market_1 = require("./market");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseQuerySwapRequest() {
    return {
        offerCoin: '',
        askDenom: '',
    };
}
exports.QuerySwapRequest = {
    typeUrl: '/osmosis.market.v1beta1.QuerySwapRequest',
    aminoType: 'osmosis/market/query-swap-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapRequest.typeUrl ||
                (typeof o.offerCoin === 'string' && typeof o.askDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapRequest.typeUrl ||
                (typeof o.offer_coin === 'string' && typeof o.ask_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapRequest.typeUrl ||
                (typeof o.offer_coin === 'string' && typeof o.ask_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.offerCoin !== '') {
            writer.uint32(10).string(message.offerCoin);
        }
        if (message.askDenom !== '') {
            writer.uint32(18).string(message.askDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QuerySwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-swap-request',
            value: exports.QuerySwapRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QuerySwapRequest',
            value: exports.QuerySwapRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySwapRequest.typeUrl, exports.QuerySwapRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySwapRequest.aminoType, exports.QuerySwapRequest.typeUrl);
function createBaseQuerySwapResponse() {
    return {
        returnCoin: coin_1.Coin.fromPartial({}),
    };
}
exports.QuerySwapResponse = {
    typeUrl: '/osmosis.market.v1beta1.QuerySwapResponse',
    aminoType: 'osmosis/market/query-swap-response',
    is(o) {
        return (o && (o.$typeUrl === exports.QuerySwapResponse.typeUrl || coin_1.Coin.is(o.returnCoin)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapResponse.typeUrl || coin_1.Coin.isSDK(o.return_coin)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapResponse.typeUrl || coin_1.Coin.isAmino(o.return_coin)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.returnCoin !== undefined) {
            coin_1.Coin.encode(message.returnCoin, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.returnCoin = coin_1.Coin.decode(reader, reader.uint32());
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
                ? coin_1.Coin.fromPartial(object.returnCoin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapResponse();
        if (object.return_coin !== undefined && object.return_coin !== null) {
            message.returnCoin = coin_1.Coin.fromAmino(object.return_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.return_coin = message.returnCoin
            ? coin_1.Coin.toAmino(message.returnCoin)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-swap-response',
            value: exports.QuerySwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QuerySwapResponse',
            value: exports.QuerySwapResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySwapResponse.typeUrl, exports.QuerySwapResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySwapResponse.aminoType, exports.QuerySwapResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: '/osmosis.market.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/market/query-params-request',
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
            type: 'osmosis/market/query-params-request',
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
            typeUrl: '/osmosis.market.v1beta1.QueryParamsRequest',
            value: exports.QueryParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: market_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: '/osmosis.market.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/market/query-params-response',
    is(o) {
        return (o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || market_1.Params.is(o.params)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryParamsResponse.typeUrl || market_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryParamsResponse.typeUrl || market_1.Params.isAmino(o.params)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            market_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = market_1.Params.decode(reader, reader.uint32());
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
                ? market_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = market_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? market_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-params-response',
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
            typeUrl: '/osmosis.market.v1beta1.QueryParamsResponse',
            value: exports.QueryParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryExchangeRequirementsRequest() {
    return {};
}
exports.QueryExchangeRequirementsRequest = {
    typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsRequest',
    aminoType: 'osmosis/market/query-exchange-requirements-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryExchangeRequirementsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryExchangeRequirementsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryExchangeRequirementsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryExchangeRequirementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-exchange-requirements-request',
            value: exports.QueryExchangeRequirementsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeRequirementsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeRequirementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsRequest',
            value: exports.QueryExchangeRequirementsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryExchangeRequirementsRequest.typeUrl, exports.QueryExchangeRequirementsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryExchangeRequirementsRequest.aminoType, exports.QueryExchangeRequirementsRequest.typeUrl);
function createBaseQueryExchangeRequirementsResponse() {
    return {
        exchangeRequirements: [],
        total: coin_1.Coin.fromPartial({}),
    };
}
exports.QueryExchangeRequirementsResponse = {
    typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsResponse',
    aminoType: 'osmosis/market/query-exchange-requirements-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryExchangeRequirementsResponse.typeUrl ||
                (Array.isArray(o.exchangeRequirements) &&
                    (!o.exchangeRequirements.length ||
                        exports.ExchangeRequirement.is(o.exchangeRequirements[0])) &&
                    coin_1.Coin.is(o.total))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryExchangeRequirementsResponse.typeUrl ||
                (Array.isArray(o.exchange_requirements) &&
                    (!o.exchange_requirements.length ||
                        exports.ExchangeRequirement.isSDK(o.exchange_requirements[0])) &&
                    coin_1.Coin.isSDK(o.total))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryExchangeRequirementsResponse.typeUrl ||
                (Array.isArray(o.exchange_requirements) &&
                    (!o.exchange_requirements.length ||
                        exports.ExchangeRequirement.isAmino(o.exchange_requirements[0])) &&
                    coin_1.Coin.isAmino(o.total))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.exchangeRequirements) {
            exports.ExchangeRequirement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.total !== undefined) {
            coin_1.Coin.encode(message.total, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRequirementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRequirements.push(exports.ExchangeRequirement.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total = coin_1.Coin.decode(reader, reader.uint32());
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
            object.exchangeRequirements?.map(e => exports.ExchangeRequirement.fromPartial(e)) || [];
        message.total =
            object.total !== undefined && object.total !== null
                ? coin_1.Coin.fromPartial(object.total)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRequirementsResponse();
        message.exchangeRequirements =
            object.exchange_requirements?.map(e => exports.ExchangeRequirement.fromAmino(e)) || [];
        if (object.total !== undefined && object.total !== null) {
            message.total = coin_1.Coin.fromAmino(object.total);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exchangeRequirements) {
            obj.exchange_requirements = message.exchangeRequirements.map(e => e ? exports.ExchangeRequirement.toAmino(e) : undefined);
        }
        else {
            obj.exchange_requirements = message.exchangeRequirements;
        }
        obj.total = message.total ? coin_1.Coin.toAmino(message.total) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExchangeRequirementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/query-exchange-requirements-response',
            value: exports.QueryExchangeRequirementsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeRequirementsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeRequirementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsResponse',
            value: exports.QueryExchangeRequirementsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryExchangeRequirementsResponse.typeUrl, exports.QueryExchangeRequirementsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryExchangeRequirementsResponse.aminoType, exports.QueryExchangeRequirementsResponse.typeUrl);
function createBaseExchangeRequirement() {
    return {
        baseCurrency: coin_1.Coin.fromPartial({}),
        exchangeRate: '',
    };
}
exports.ExchangeRequirement = {
    typeUrl: '/osmosis.market.v1beta1.ExchangeRequirement',
    aminoType: 'osmosis/market/exchange-requirement',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ExchangeRequirement.typeUrl ||
                (coin_1.Coin.is(o.baseCurrency) && typeof o.exchangeRate === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ExchangeRequirement.typeUrl ||
                (coin_1.Coin.isSDK(o.base_currency) && typeof o.exchange_rate === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ExchangeRequirement.typeUrl ||
                (coin_1.Coin.isAmino(o.base_currency) && typeof o.exchange_rate === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseCurrency !== undefined) {
            coin_1.Coin.encode(message.baseCurrency, writer.uint32(10).fork()).ldelim();
        }
        if (message.exchangeRate !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseCurrency = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.exchangeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
                ? coin_1.Coin.fromPartial(object.baseCurrency)
                : undefined;
        message.exchangeRate = object.exchangeRate ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseExchangeRequirement();
        if (object.base_currency !== undefined && object.base_currency !== null) {
            message.baseCurrency = coin_1.Coin.fromAmino(object.base_currency);
        }
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchangeRate = object.exchange_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_currency = message.baseCurrency
            ? coin_1.Coin.toAmino(message.baseCurrency)
            : undefined;
        obj.exchange_rate =
            message.exchangeRate === '' ? undefined : message.exchangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExchangeRequirement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/exchange-requirement',
            value: exports.ExchangeRequirement.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ExchangeRequirement.decode(message.value);
    },
    toProto(message) {
        return exports.ExchangeRequirement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.ExchangeRequirement',
            value: exports.ExchangeRequirement.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ExchangeRequirement.typeUrl, exports.ExchangeRequirement);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ExchangeRequirement.aminoType, exports.ExchangeRequirement.typeUrl);
