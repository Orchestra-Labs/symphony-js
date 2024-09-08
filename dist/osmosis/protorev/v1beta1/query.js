"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGetAllProtocolRevenueResponse = exports.QueryGetAllProtocolRevenueRequest = exports.QueryGetProtoRevPoolResponse = exports.QueryGetProtoRevPoolRequest = exports.QueryGetProtoRevEnabledResponse = exports.QueryGetProtoRevEnabledRequest = exports.QueryGetProtoRevBaseDenomsResponse = exports.QueryGetProtoRevBaseDenomsRequest = exports.QueryGetProtoRevMaxPoolPointsPerTxResponse = exports.QueryGetProtoRevMaxPoolPointsPerTxRequest = exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse = exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest = exports.QueryGetProtoRevInfoByPoolTypeResponse = exports.QueryGetProtoRevInfoByPoolTypeRequest = exports.QueryGetProtoRevDeveloperAccountResponse = exports.QueryGetProtoRevDeveloperAccountRequest = exports.QueryGetProtoRevAdminAccountResponse = exports.QueryGetProtoRevAdminAccountRequest = exports.QueryGetProtoRevTokenPairArbRoutesResponse = exports.QueryGetProtoRevTokenPairArbRoutesRequest = exports.QueryGetProtoRevAllRouteStatisticsResponse = exports.QueryGetProtoRevAllRouteStatisticsRequest = exports.QueryGetProtoRevStatisticsByRouteResponse = exports.QueryGetProtoRevStatisticsByRouteRequest = exports.QueryGetProtoRevAllProfitsResponse = exports.QueryGetProtoRevAllProfitsRequest = exports.QueryGetProtoRevProfitsByDenomResponse = exports.QueryGetProtoRevProfitsByDenomRequest = exports.QueryGetProtoRevNumberOfTradesResponse = exports.QueryGetProtoRevNumberOfTradesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const params_1 = require("./params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/protorev/query-params-request',
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
            type: 'osmosis/protorev/query-params-request',
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
            typeUrl: '/osmosis.protorev.v1beta1.QueryParamsRequest',
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
    typeUrl: '/osmosis.protorev.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/protorev/query-params-response',
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
            type: 'osmosis/protorev/query-params-response',
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
            typeUrl: '/osmosis.protorev.v1beta1.QueryParamsResponse',
            value: exports.QueryParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
function createBaseQueryGetProtoRevNumberOfTradesRequest() {
    return {};
}
exports.QueryGetProtoRevNumberOfTradesRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-number-of-trades-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevNumberOfTradesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevNumberOfTradesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevNumberOfTradesRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
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
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevNumberOfTradesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-number-of-trades-request',
            value: exports.QueryGetProtoRevNumberOfTradesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevNumberOfTradesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevNumberOfTradesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest',
            value: exports.QueryGetProtoRevNumberOfTradesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevNumberOfTradesRequest.typeUrl, exports.QueryGetProtoRevNumberOfTradesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevNumberOfTradesRequest.aminoType, exports.QueryGetProtoRevNumberOfTradesRequest.typeUrl);
function createBaseQueryGetProtoRevNumberOfTradesResponse() {
    return {
        numberOfTrades: '',
    };
}
exports.QueryGetProtoRevNumberOfTradesResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-number-of-trades-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevNumberOfTradesResponse.typeUrl ||
                typeof o.numberOfTrades === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevNumberOfTradesResponse.typeUrl ||
                typeof o.number_of_trades === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevNumberOfTradesResponse.typeUrl ||
                typeof o.number_of_trades === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numberOfTrades !== '') {
            writer.uint32(10).string(message.numberOfTrades);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numberOfTrades = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        message.numberOfTrades = object.numberOfTrades ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        if (object.number_of_trades !== undefined &&
            object.number_of_trades !== null) {
            message.numberOfTrades = object.number_of_trades;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.number_of_trades =
            message.numberOfTrades === '' ? undefined : message.numberOfTrades;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevNumberOfTradesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-number-of-trades-response',
            value: exports.QueryGetProtoRevNumberOfTradesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevNumberOfTradesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevNumberOfTradesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse',
            value: exports.QueryGetProtoRevNumberOfTradesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevNumberOfTradesResponse.typeUrl, exports.QueryGetProtoRevNumberOfTradesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevNumberOfTradesResponse.aminoType, exports.QueryGetProtoRevNumberOfTradesResponse.typeUrl);
function createBaseQueryGetProtoRevProfitsByDenomRequest() {
    return {
        denom: '',
    };
}
exports.QueryGetProtoRevProfitsByDenomRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevProfitsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevProfitsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevProfitsByDenomRequest.typeUrl ||
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
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
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
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
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
        return exports.QueryGetProtoRevProfitsByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-request',
            value: exports.QueryGetProtoRevProfitsByDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevProfitsByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevProfitsByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest',
            value: exports.QueryGetProtoRevProfitsByDenomRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevProfitsByDenomRequest.typeUrl, exports.QueryGetProtoRevProfitsByDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevProfitsByDenomRequest.aminoType, exports.QueryGetProtoRevProfitsByDenomRequest.typeUrl);
function createBaseQueryGetProtoRevProfitsByDenomResponse() {
    return {
        profit: undefined,
    };
}
exports.QueryGetProtoRevProfitsByDenomResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-response',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevProfitsByDenomResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevProfitsByDenomResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevProfitsByDenomResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.profit !== undefined) {
            coin_1.Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        message.profit =
            object.profit !== undefined && object.profit !== null
                ? coin_1.Coin.fromPartial(object.profit)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        if (object.profit !== undefined && object.profit !== null) {
            message.profit = coin_1.Coin.fromAmino(object.profit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.profit = message.profit ? coin_1.Coin.toAmino(message.profit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevProfitsByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-response',
            value: exports.QueryGetProtoRevProfitsByDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevProfitsByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevProfitsByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse',
            value: exports.QueryGetProtoRevProfitsByDenomResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevProfitsByDenomResponse.typeUrl, exports.QueryGetProtoRevProfitsByDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevProfitsByDenomResponse.aminoType, exports.QueryGetProtoRevProfitsByDenomResponse.typeUrl);
function createBaseQueryGetProtoRevAllProfitsRequest() {
    return {};
}
exports.QueryGetProtoRevAllProfitsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-profits-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevAllProfitsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevAllProfitsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevAllProfitsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
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
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAllProfitsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-profits-request',
            value: exports.QueryGetProtoRevAllProfitsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllProfitsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllProfitsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest',
            value: exports.QueryGetProtoRevAllProfitsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevAllProfitsRequest.typeUrl, exports.QueryGetProtoRevAllProfitsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevAllProfitsRequest.aminoType, exports.QueryGetProtoRevAllProfitsRequest.typeUrl);
function createBaseQueryGetProtoRevAllProfitsResponse() {
    return {
        profits: [],
    };
}
exports.QueryGetProtoRevAllProfitsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-profits-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAllProfitsResponse.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.is(o.profits[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAllProfitsResponse.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.isSDK(o.profits[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAllProfitsResponse.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.isAmino(o.profits[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.profits = message.profits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAllProfitsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-profits-response',
            value: exports.QueryGetProtoRevAllProfitsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllProfitsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllProfitsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse',
            value: exports.QueryGetProtoRevAllProfitsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevAllProfitsResponse.typeUrl, exports.QueryGetProtoRevAllProfitsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevAllProfitsResponse.aminoType, exports.QueryGetProtoRevAllProfitsResponse.typeUrl);
function createBaseQueryGetProtoRevStatisticsByRouteRequest() {
    return {
        route: [],
    };
}
exports.QueryGetProtoRevStatisticsByRouteRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevStatisticsByRouteRequest.typeUrl ||
                (Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevStatisticsByRouteRequest.typeUrl ||
                (Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevStatisticsByRouteRequest.typeUrl ||
                (Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.route) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.route.push(reader.uint64());
                        }
                    }
                    else {
                        message.route.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
        message.route = object.route?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteRequest();
        message.route = object.route?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.route) {
            obj.route = message.route.map(e => e.toString());
        }
        else {
            obj.route = message.route;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevStatisticsByRouteRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-request',
            value: exports.QueryGetProtoRevStatisticsByRouteRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevStatisticsByRouteRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest',
            value: exports.QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevStatisticsByRouteRequest.typeUrl, exports.QueryGetProtoRevStatisticsByRouteRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevStatisticsByRouteRequest.aminoType, exports.QueryGetProtoRevStatisticsByRouteRequest.typeUrl);
function createBaseQueryGetProtoRevStatisticsByRouteResponse() {
    return {
        statistics: protorev_1.RouteStatistics.fromPartial({}),
    };
}
exports.QueryGetProtoRevStatisticsByRouteResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevStatisticsByRouteResponse.typeUrl ||
                protorev_1.RouteStatistics.is(o.statistics)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevStatisticsByRouteResponse.typeUrl ||
                protorev_1.RouteStatistics.isSDK(o.statistics)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevStatisticsByRouteResponse.typeUrl ||
                protorev_1.RouteStatistics.isAmino(o.statistics)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.statistics !== undefined) {
            protorev_1.RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics = protorev_1.RouteStatistics.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        message.statistics =
            object.statistics !== undefined && object.statistics !== null
                ? protorev_1.RouteStatistics.fromPartial(object.statistics)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        if (object.statistics !== undefined && object.statistics !== null) {
            message.statistics = protorev_1.RouteStatistics.fromAmino(object.statistics);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.statistics = message.statistics
            ? protorev_1.RouteStatistics.toAmino(message.statistics)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevStatisticsByRouteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-response',
            value: exports.QueryGetProtoRevStatisticsByRouteResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevStatisticsByRouteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse',
            value: exports.QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevStatisticsByRouteResponse.typeUrl, exports.QueryGetProtoRevStatisticsByRouteResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevStatisticsByRouteResponse.aminoType, exports.QueryGetProtoRevStatisticsByRouteResponse.typeUrl);
function createBaseQueryGetProtoRevAllRouteStatisticsRequest() {
    return {};
}
exports.QueryGetProtoRevAllRouteStatisticsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-request',
    is(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
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
        const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevAllRouteStatisticsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAllRouteStatisticsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-request',
            value: exports.QueryGetProtoRevAllRouteStatisticsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllRouteStatisticsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest',
            value: exports.QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevAllRouteStatisticsRequest.typeUrl, exports.QueryGetProtoRevAllRouteStatisticsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevAllRouteStatisticsRequest.aminoType, exports.QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
function createBaseQueryGetProtoRevAllRouteStatisticsResponse() {
    return {
        statistics: [],
    };
}
exports.QueryGetProtoRevAllRouteStatisticsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAllRouteStatisticsResponse.typeUrl ||
                (Array.isArray(o.statistics) &&
                    (!o.statistics.length || protorev_1.RouteStatistics.is(o.statistics[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAllRouteStatisticsResponse.typeUrl ||
                (Array.isArray(o.statistics) &&
                    (!o.statistics.length || protorev_1.RouteStatistics.isSDK(o.statistics[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAllRouteStatisticsResponse.typeUrl ||
                (Array.isArray(o.statistics) &&
                    (!o.statistics.length || protorev_1.RouteStatistics.isAmino(o.statistics[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.statistics) {
            protorev_1.RouteStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(protorev_1.RouteStatistics.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        message.statistics =
            object.statistics?.map(e => protorev_1.RouteStatistics.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        message.statistics =
            object.statistics?.map(e => protorev_1.RouteStatistics.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map(e => e ? protorev_1.RouteStatistics.toAmino(e) : undefined);
        }
        else {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAllRouteStatisticsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-response',
            value: exports.QueryGetProtoRevAllRouteStatisticsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllRouteStatisticsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse',
            value: exports.QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevAllRouteStatisticsResponse.typeUrl, exports.QueryGetProtoRevAllRouteStatisticsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevAllRouteStatisticsResponse.aminoType, exports.QueryGetProtoRevAllRouteStatisticsResponse.typeUrl);
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest() {
    return {};
}
exports.QueryGetProtoRevTokenPairArbRoutesRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request',
    is(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
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
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevTokenPairArbRoutesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request',
            value: exports.QueryGetProtoRevTokenPairArbRoutesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest',
            value: exports.QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl, exports.QueryGetProtoRevTokenPairArbRoutesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevTokenPairArbRoutesRequest.aminoType, exports.QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse() {
    return {
        routes: [],
    };
}
exports.QueryGetProtoRevTokenPairArbRoutesResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl ||
                (Array.isArray(o.routes) &&
                    (!o.routes.length || protorev_1.TokenPairArbRoutes.is(o.routes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl ||
                (Array.isArray(o.routes) &&
                    (!o.routes.length || protorev_1.TokenPairArbRoutes.isSDK(o.routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl ||
                (Array.isArray(o.routes) &&
                    (!o.routes.length || protorev_1.TokenPairArbRoutes.isAmino(o.routes[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.routes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes =
            object.routes?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes =
            object.routes?.map(e => protorev_1.TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevTokenPairArbRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response',
            value: exports.QueryGetProtoRevTokenPairArbRoutesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse',
            value: exports.QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl, exports.QueryGetProtoRevTokenPairArbRoutesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevTokenPairArbRoutesResponse.aminoType, exports.QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl);
function createBaseQueryGetProtoRevAdminAccountRequest() {
    return {};
}
exports.QueryGetProtoRevAdminAccountRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-admin-account-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevAdminAccountRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevAdminAccountRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevAdminAccountRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAdminAccountRequest();
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
        const message = createBaseQueryGetProtoRevAdminAccountRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevAdminAccountRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAdminAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-admin-account-request',
            value: exports.QueryGetProtoRevAdminAccountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAdminAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAdminAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest',
            value: exports.QueryGetProtoRevAdminAccountRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevAdminAccountRequest.typeUrl, exports.QueryGetProtoRevAdminAccountRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevAdminAccountRequest.aminoType, exports.QueryGetProtoRevAdminAccountRequest.typeUrl);
function createBaseQueryGetProtoRevAdminAccountResponse() {
    return {
        adminAccount: '',
    };
}
exports.QueryGetProtoRevAdminAccountResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-admin-account-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAdminAccountResponse.typeUrl ||
                typeof o.adminAccount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAdminAccountResponse.typeUrl ||
                typeof o.admin_account === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevAdminAccountResponse.typeUrl ||
                typeof o.admin_account === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.adminAccount !== '') {
            writer.uint32(10).string(message.adminAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAdminAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adminAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAdminAccountResponse();
        message.adminAccount = object.adminAccount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAdminAccountResponse();
        if (object.admin_account !== undefined && object.admin_account !== null) {
            message.adminAccount = object.admin_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin_account =
            message.adminAccount === '' ? undefined : message.adminAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAdminAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-admin-account-response',
            value: exports.QueryGetProtoRevAdminAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAdminAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAdminAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse',
            value: exports.QueryGetProtoRevAdminAccountResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevAdminAccountResponse.typeUrl, exports.QueryGetProtoRevAdminAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevAdminAccountResponse.aminoType, exports.QueryGetProtoRevAdminAccountResponse.typeUrl);
function createBaseQueryGetProtoRevDeveloperAccountRequest() {
    return {};
}
exports.QueryGetProtoRevDeveloperAccountRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-developer-account-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevDeveloperAccountRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevDeveloperAccountRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevDeveloperAccountRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
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
        const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevDeveloperAccountRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevDeveloperAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-developer-account-request',
            value: exports.QueryGetProtoRevDeveloperAccountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevDeveloperAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevDeveloperAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest',
            value: exports.QueryGetProtoRevDeveloperAccountRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevDeveloperAccountRequest.typeUrl, exports.QueryGetProtoRevDeveloperAccountRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevDeveloperAccountRequest.aminoType, exports.QueryGetProtoRevDeveloperAccountRequest.typeUrl);
function createBaseQueryGetProtoRevDeveloperAccountResponse() {
    return {
        developerAccount: '',
    };
}
exports.QueryGetProtoRevDeveloperAccountResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-developer-account-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevDeveloperAccountResponse.typeUrl ||
                typeof o.developerAccount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevDeveloperAccountResponse.typeUrl ||
                typeof o.developer_account === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevDeveloperAccountResponse.typeUrl ||
                typeof o.developer_account === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.developerAccount !== '') {
            writer.uint32(10).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.developerAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
        message.developerAccount = object.developerAccount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevDeveloperAccountResponse();
        if (object.developer_account !== undefined &&
            object.developer_account !== null) {
            message.developerAccount = object.developer_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.developer_account =
            message.developerAccount === '' ? undefined : message.developerAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-developer-account-response',
            value: exports.QueryGetProtoRevDeveloperAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse',
            value: exports.QueryGetProtoRevDeveloperAccountResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevDeveloperAccountResponse.typeUrl, exports.QueryGetProtoRevDeveloperAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevDeveloperAccountResponse.aminoType, exports.QueryGetProtoRevDeveloperAccountResponse.typeUrl);
function createBaseQueryGetProtoRevInfoByPoolTypeRequest() {
    return {};
}
exports.QueryGetProtoRevInfoByPoolTypeRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
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
        const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevInfoByPoolTypeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevInfoByPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-request',
            value: exports.QueryGetProtoRevInfoByPoolTypeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevInfoByPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevInfoByPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest',
            value: exports.QueryGetProtoRevInfoByPoolTypeRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevInfoByPoolTypeRequest.typeUrl, exports.QueryGetProtoRevInfoByPoolTypeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevInfoByPoolTypeRequest.aminoType, exports.QueryGetProtoRevInfoByPoolTypeRequest.typeUrl);
function createBaseQueryGetProtoRevInfoByPoolTypeResponse() {
    return {
        infoByPoolType: protorev_1.InfoByPoolType.fromPartial({}),
    };
}
exports.QueryGetProtoRevInfoByPoolTypeResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevInfoByPoolTypeResponse.typeUrl ||
                protorev_1.InfoByPoolType.is(o.infoByPoolType)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevInfoByPoolTypeResponse.typeUrl ||
                protorev_1.InfoByPoolType.isSDK(o.info_by_pool_type)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevInfoByPoolTypeResponse.typeUrl ||
                protorev_1.InfoByPoolType.isAmino(o.info_by_pool_type)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.infoByPoolType !== undefined) {
            protorev_1.InfoByPoolType.encode(message.infoByPoolType, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.infoByPoolType = protorev_1.InfoByPoolType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        message.infoByPoolType =
            object.infoByPoolType !== undefined && object.infoByPoolType !== null
                ? protorev_1.InfoByPoolType.fromPartial(object.infoByPoolType)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        if (object.info_by_pool_type !== undefined &&
            object.info_by_pool_type !== null) {
            message.infoByPoolType = protorev_1.InfoByPoolType.fromAmino(object.info_by_pool_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info_by_pool_type = message.infoByPoolType
            ? protorev_1.InfoByPoolType.toAmino(message.infoByPoolType)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevInfoByPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-response',
            value: exports.QueryGetProtoRevInfoByPoolTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevInfoByPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevInfoByPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse',
            value: exports.QueryGetProtoRevInfoByPoolTypeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevInfoByPoolTypeResponse.typeUrl, exports.QueryGetProtoRevInfoByPoolTypeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevInfoByPoolTypeResponse.aminoType, exports.QueryGetProtoRevInfoByPoolTypeResponse.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest() {
    return {};
}
exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request',
    is(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
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
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request',
            value: exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest',
            value: exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl, exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.aminoType, exports.QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse() {
    return {
        maxPoolPointsPerBlock: BigInt(0),
    };
}
exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl ||
                typeof o.maxPoolPointsPerBlock === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl ||
                typeof o.max_pool_points_per_block === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl ||
                typeof o.max_pool_points_per_block === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPoolPointsPerBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
        message.maxPoolPointsPerBlock =
            object.maxPoolPointsPerBlock !== undefined &&
                object.maxPoolPointsPerBlock !== null
                ? BigInt(object.maxPoolPointsPerBlock.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse();
        if (object.max_pool_points_per_block !== undefined &&
            object.max_pool_points_per_block !== null) {
            message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_pool_points_per_block =
            message.maxPoolPointsPerBlock !== BigInt(0)
                ? message.maxPoolPointsPerBlock.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response',
            value: exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse',
            value: exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl, exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.aminoType, exports.QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest() {
    return {};
}
exports.QueryGetProtoRevMaxPoolPointsPerTxRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request',
    is(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
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
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request',
            value: exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest',
            value: exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl, exports.QueryGetProtoRevMaxPoolPointsPerTxRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.aminoType, exports.QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse() {
    return {
        maxPoolPointsPerTx: BigInt(0),
    };
}
exports.QueryGetProtoRevMaxPoolPointsPerTxResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl ||
                typeof o.maxPoolPointsPerTx === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl ||
                typeof o.max_pool_points_per_tx === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl ||
                typeof o.max_pool_points_per_tx === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxPoolPointsPerTx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPoolPointsPerTx = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
        message.maxPoolPointsPerTx =
            object.maxPoolPointsPerTx !== undefined &&
                object.maxPoolPointsPerTx !== null
                ? BigInt(object.maxPoolPointsPerTx.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse();
        if (object.max_pool_points_per_tx !== undefined &&
            object.max_pool_points_per_tx !== null) {
            message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_pool_points_per_tx =
            message.maxPoolPointsPerTx !== BigInt(0)
                ? message.maxPoolPointsPerTx.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response',
            value: exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse',
            value: exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl, exports.QueryGetProtoRevMaxPoolPointsPerTxResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.aminoType, exports.QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl);
function createBaseQueryGetProtoRevBaseDenomsRequest() {
    return {};
}
exports.QueryGetProtoRevBaseDenomsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-base-denoms-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevBaseDenomsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevBaseDenomsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevBaseDenomsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevBaseDenomsRequest();
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
        const message = createBaseQueryGetProtoRevBaseDenomsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevBaseDenomsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevBaseDenomsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-base-denoms-request',
            value: exports.QueryGetProtoRevBaseDenomsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevBaseDenomsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevBaseDenomsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest',
            value: exports.QueryGetProtoRevBaseDenomsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevBaseDenomsRequest.typeUrl, exports.QueryGetProtoRevBaseDenomsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevBaseDenomsRequest.aminoType, exports.QueryGetProtoRevBaseDenomsRequest.typeUrl);
function createBaseQueryGetProtoRevBaseDenomsResponse() {
    return {
        baseDenoms: [],
    };
}
exports.QueryGetProtoRevBaseDenomsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-base-denoms-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevBaseDenomsResponse.typeUrl ||
                (Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || protorev_1.BaseDenom.is(o.baseDenoms[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevBaseDenomsResponse.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || protorev_1.BaseDenom.isSDK(o.base_denoms[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevBaseDenomsResponse.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || protorev_1.BaseDenom.isAmino(o.base_denoms[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.baseDenoms) {
            protorev_1.BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenoms.push(protorev_1.BaseDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        message.baseDenoms =
            object.baseDenoms?.map(e => protorev_1.BaseDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        message.baseDenoms =
            object.base_denoms?.map(e => protorev_1.BaseDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? protorev_1.BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevBaseDenomsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-base-denoms-response',
            value: exports.QueryGetProtoRevBaseDenomsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevBaseDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevBaseDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse',
            value: exports.QueryGetProtoRevBaseDenomsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevBaseDenomsResponse.typeUrl, exports.QueryGetProtoRevBaseDenomsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevBaseDenomsResponse.aminoType, exports.QueryGetProtoRevBaseDenomsResponse.typeUrl);
function createBaseQueryGetProtoRevEnabledRequest() {
    return {};
}
exports.QueryGetProtoRevEnabledRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-enabled-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevEnabledRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevEnabledRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetProtoRevEnabledRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevEnabledRequest();
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
        const message = createBaseQueryGetProtoRevEnabledRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevEnabledRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevEnabledRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-enabled-request',
            value: exports.QueryGetProtoRevEnabledRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevEnabledRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevEnabledRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest',
            value: exports.QueryGetProtoRevEnabledRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevEnabledRequest.typeUrl, exports.QueryGetProtoRevEnabledRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevEnabledRequest.aminoType, exports.QueryGetProtoRevEnabledRequest.typeUrl);
function createBaseQueryGetProtoRevEnabledResponse() {
    return {
        enabled: false,
    };
}
exports.QueryGetProtoRevEnabledResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-enabled-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevEnabledResponse.typeUrl ||
                typeof o.enabled === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevEnabledResponse.typeUrl ||
                typeof o.enabled === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevEnabledResponse.typeUrl ||
                typeof o.enabled === 'boolean'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevEnabledResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevEnabledResponse();
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevEnabledResponse();
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevEnabledResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-enabled-response',
            value: exports.QueryGetProtoRevEnabledResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevEnabledResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevEnabledResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse',
            value: exports.QueryGetProtoRevEnabledResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevEnabledResponse.typeUrl, exports.QueryGetProtoRevEnabledResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevEnabledResponse.aminoType, exports.QueryGetProtoRevEnabledResponse.typeUrl);
function createBaseQueryGetProtoRevPoolRequest() {
    return {
        baseDenom: '',
        otherDenom: '',
    };
}
exports.QueryGetProtoRevPoolRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-pool-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevPoolRequest.typeUrl ||
                (typeof o.baseDenom === 'string' && typeof o.otherDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevPoolRequest.typeUrl ||
                (typeof o.base_denom === 'string' && typeof o.other_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevPoolRequest.typeUrl ||
                (typeof o.base_denom === 'string' && typeof o.other_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseDenom !== '') {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.otherDenom !== '') {
            writer.uint32(18).string(message.otherDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenom = reader.string();
                    break;
                case 2:
                    message.otherDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevPoolRequest();
        message.baseDenom = object.baseDenom ?? '';
        message.otherDenom = object.otherDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevPoolRequest();
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        if (object.other_denom !== undefined && object.other_denom !== null) {
            message.otherDenom = object.other_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_denom = message.baseDenom === '' ? undefined : message.baseDenom;
        obj.other_denom =
            message.otherDenom === '' ? undefined : message.otherDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-pool-request',
            value: exports.QueryGetProtoRevPoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest',
            value: exports.QueryGetProtoRevPoolRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevPoolRequest.typeUrl, exports.QueryGetProtoRevPoolRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevPoolRequest.aminoType, exports.QueryGetProtoRevPoolRequest.typeUrl);
function createBaseQueryGetProtoRevPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryGetProtoRevPoolResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevPoolResponse.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetProtoRevPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevPoolResponse();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevPoolResponse();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-pool-response',
            value: exports.QueryGetProtoRevPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse',
            value: exports.QueryGetProtoRevPoolResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetProtoRevPoolResponse.typeUrl, exports.QueryGetProtoRevPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetProtoRevPoolResponse.aminoType, exports.QueryGetProtoRevPoolResponse.typeUrl);
function createBaseQueryGetAllProtocolRevenueRequest() {
    return {};
}
exports.QueryGetAllProtocolRevenueRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest',
    aminoType: 'osmosis/protorev/query-get-all-protocol-revenue-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryGetAllProtocolRevenueRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryGetAllProtocolRevenueRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryGetAllProtocolRevenueRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllProtocolRevenueRequest();
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
        const message = createBaseQueryGetAllProtocolRevenueRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetAllProtocolRevenueRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetAllProtocolRevenueRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-all-protocol-revenue-request',
            value: exports.QueryGetAllProtocolRevenueRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetAllProtocolRevenueRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetAllProtocolRevenueRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest',
            value: exports.QueryGetAllProtocolRevenueRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetAllProtocolRevenueRequest.typeUrl, exports.QueryGetAllProtocolRevenueRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetAllProtocolRevenueRequest.aminoType, exports.QueryGetAllProtocolRevenueRequest.typeUrl);
function createBaseQueryGetAllProtocolRevenueResponse() {
    return {
        allProtocolRevenue: protorev_1.AllProtocolRevenue.fromPartial({}),
    };
}
exports.QueryGetAllProtocolRevenueResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse',
    aminoType: 'osmosis/protorev/query-get-all-protocol-revenue-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetAllProtocolRevenueResponse.typeUrl ||
                protorev_1.AllProtocolRevenue.is(o.allProtocolRevenue)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetAllProtocolRevenueResponse.typeUrl ||
                protorev_1.AllProtocolRevenue.isSDK(o.all_protocol_revenue)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryGetAllProtocolRevenueResponse.typeUrl ||
                protorev_1.AllProtocolRevenue.isAmino(o.all_protocol_revenue)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allProtocolRevenue !== undefined) {
            protorev_1.AllProtocolRevenue.encode(message.allProtocolRevenue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allProtocolRevenue = protorev_1.AllProtocolRevenue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        message.allProtocolRevenue =
            object.allProtocolRevenue !== undefined &&
                object.allProtocolRevenue !== null
                ? protorev_1.AllProtocolRevenue.fromPartial(object.allProtocolRevenue)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        if (object.all_protocol_revenue !== undefined &&
            object.all_protocol_revenue !== null) {
            message.allProtocolRevenue = protorev_1.AllProtocolRevenue.fromAmino(object.all_protocol_revenue);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.all_protocol_revenue = message.allProtocolRevenue
            ? protorev_1.AllProtocolRevenue.toAmino(message.allProtocolRevenue)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetAllProtocolRevenueResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-all-protocol-revenue-response',
            value: exports.QueryGetAllProtocolRevenueResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetAllProtocolRevenueResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetAllProtocolRevenueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse',
            value: exports.QueryGetAllProtocolRevenueResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryGetAllProtocolRevenueResponse.typeUrl, exports.QueryGetAllProtocolRevenueResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryGetAllProtocolRevenueResponse.aminoType, exports.QueryGetAllProtocolRevenueResponse.typeUrl);
