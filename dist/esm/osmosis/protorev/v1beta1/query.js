//@ts-nocheck
import { Params } from './params';
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { RouteStatistics, TokenPairArbRoutes, InfoByPoolType, BaseDenom, AllProtocolRevenue, } from './protorev';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryParamsRequest',
    aminoType: 'osmosis/protorev/query-params-request',
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
            type: 'osmosis/protorev/query-params-request',
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
            typeUrl: '/osmosis.protorev.v1beta1.QueryParamsRequest',
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
    typeUrl: '/osmosis.protorev.v1beta1.QueryParamsResponse',
    aminoType: 'osmosis/protorev/query-params-response',
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
            type: 'osmosis/protorev/query-params-response',
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
            typeUrl: '/osmosis.protorev.v1beta1.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryGetProtoRevNumberOfTradesRequest() {
    return {};
}
export const QueryGetProtoRevNumberOfTradesRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-number-of-trades-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevNumberOfTradesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevNumberOfTradesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevNumberOfTradesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevNumberOfTradesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-number-of-trades-request',
            value: QueryGetProtoRevNumberOfTradesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevNumberOfTradesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevNumberOfTradesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest',
            value: QueryGetProtoRevNumberOfTradesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevNumberOfTradesRequest.typeUrl, QueryGetProtoRevNumberOfTradesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevNumberOfTradesRequest.aminoType, QueryGetProtoRevNumberOfTradesRequest.typeUrl);
function createBaseQueryGetProtoRevNumberOfTradesResponse() {
    return {
        numberOfTrades: '',
    };
}
export const QueryGetProtoRevNumberOfTradesResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-number-of-trades-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevNumberOfTradesResponse.typeUrl ||
                typeof o.numberOfTrades === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevNumberOfTradesResponse.typeUrl ||
                typeof o.number_of_trades === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevNumberOfTradesResponse.typeUrl ||
                typeof o.number_of_trades === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.numberOfTrades !== '') {
            writer.uint32(10).string(message.numberOfTrades);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevNumberOfTradesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-number-of-trades-response',
            value: QueryGetProtoRevNumberOfTradesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevNumberOfTradesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevNumberOfTradesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse',
            value: QueryGetProtoRevNumberOfTradesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevNumberOfTradesResponse.typeUrl, QueryGetProtoRevNumberOfTradesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevNumberOfTradesResponse.aminoType, QueryGetProtoRevNumberOfTradesResponse.typeUrl);
function createBaseQueryGetProtoRevProfitsByDenomRequest() {
    return {
        denom: '',
    };
}
export const QueryGetProtoRevProfitsByDenomRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevProfitsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevProfitsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevProfitsByDenomRequest.typeUrl ||
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
        return QueryGetProtoRevProfitsByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-request',
            value: QueryGetProtoRevProfitsByDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevProfitsByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevProfitsByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest',
            value: QueryGetProtoRevProfitsByDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevProfitsByDenomRequest.typeUrl, QueryGetProtoRevProfitsByDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevProfitsByDenomRequest.aminoType, QueryGetProtoRevProfitsByDenomRequest.typeUrl);
function createBaseQueryGetProtoRevProfitsByDenomResponse() {
    return {
        profit: undefined,
    };
}
export const QueryGetProtoRevProfitsByDenomResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-response',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevProfitsByDenomResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevProfitsByDenomResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevProfitsByDenomResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.profit !== undefined) {
            Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profit = Coin.decode(reader, reader.uint32());
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
                ? Coin.fromPartial(object.profit)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        if (object.profit !== undefined && object.profit !== null) {
            message.profit = Coin.fromAmino(object.profit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.profit = message.profit ? Coin.toAmino(message.profit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevProfitsByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-profits-by-denom-response',
            value: QueryGetProtoRevProfitsByDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevProfitsByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevProfitsByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse',
            value: QueryGetProtoRevProfitsByDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevProfitsByDenomResponse.typeUrl, QueryGetProtoRevProfitsByDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevProfitsByDenomResponse.aminoType, QueryGetProtoRevProfitsByDenomResponse.typeUrl);
function createBaseQueryGetProtoRevAllProfitsRequest() {
    return {};
}
export const QueryGetProtoRevAllProfitsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-profits-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevAllProfitsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevAllProfitsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevAllProfitsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevAllProfitsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-profits-request',
            value: QueryGetProtoRevAllProfitsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllProfitsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllProfitsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest',
            value: QueryGetProtoRevAllProfitsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllProfitsRequest.typeUrl, QueryGetProtoRevAllProfitsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllProfitsRequest.aminoType, QueryGetProtoRevAllProfitsRequest.typeUrl);
function createBaseQueryGetProtoRevAllProfitsResponse() {
    return {
        profits: [],
    };
}
export const QueryGetProtoRevAllProfitsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-profits-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAllProfitsResponse.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || Coin.is(o.profits[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAllProfitsResponse.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || Coin.isSDK(o.profits[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAllProfitsResponse.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || Coin.isAmino(o.profits[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.profits) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(Coin.decode(reader, reader.uint32()));
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
        message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.profits = message.profits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevAllProfitsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-profits-response',
            value: QueryGetProtoRevAllProfitsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllProfitsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllProfitsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse',
            value: QueryGetProtoRevAllProfitsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllProfitsResponse.typeUrl, QueryGetProtoRevAllProfitsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllProfitsResponse.aminoType, QueryGetProtoRevAllProfitsResponse.typeUrl);
function createBaseQueryGetProtoRevStatisticsByRouteRequest() {
    return {
        route: [],
    };
}
export const QueryGetProtoRevStatisticsByRouteRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevStatisticsByRouteRequest.typeUrl ||
                (Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevStatisticsByRouteRequest.typeUrl ||
                (Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevStatisticsByRouteRequest.typeUrl ||
                (Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.route) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevStatisticsByRouteRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-request',
            value: QueryGetProtoRevStatisticsByRouteRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevStatisticsByRouteRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest',
            value: QueryGetProtoRevStatisticsByRouteRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevStatisticsByRouteRequest.typeUrl, QueryGetProtoRevStatisticsByRouteRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevStatisticsByRouteRequest.aminoType, QueryGetProtoRevStatisticsByRouteRequest.typeUrl);
function createBaseQueryGetProtoRevStatisticsByRouteResponse() {
    return {
        statistics: RouteStatistics.fromPartial({}),
    };
}
export const QueryGetProtoRevStatisticsByRouteResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevStatisticsByRouteResponse.typeUrl ||
                RouteStatistics.is(o.statistics)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevStatisticsByRouteResponse.typeUrl ||
                RouteStatistics.isSDK(o.statistics)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevStatisticsByRouteResponse.typeUrl ||
                RouteStatistics.isAmino(o.statistics)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.statistics !== undefined) {
            RouteStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics = RouteStatistics.decode(reader, reader.uint32());
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
                ? RouteStatistics.fromPartial(object.statistics)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevStatisticsByRouteResponse();
        if (object.statistics !== undefined && object.statistics !== null) {
            message.statistics = RouteStatistics.fromAmino(object.statistics);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.statistics = message.statistics
            ? RouteStatistics.toAmino(message.statistics)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevStatisticsByRouteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-statistics-by-route-response',
            value: QueryGetProtoRevStatisticsByRouteResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevStatisticsByRouteResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse',
            value: QueryGetProtoRevStatisticsByRouteResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevStatisticsByRouteResponse.typeUrl, QueryGetProtoRevStatisticsByRouteResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevStatisticsByRouteResponse.aminoType, QueryGetProtoRevStatisticsByRouteResponse.typeUrl);
function createBaseQueryGetProtoRevAllRouteStatisticsRequest() {
    return {};
}
export const QueryGetProtoRevAllRouteStatisticsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-request',
    is(o) {
        return (o && o.$typeUrl === QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevAllRouteStatisticsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-request',
            value: QueryGetProtoRevAllRouteStatisticsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllRouteStatisticsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest',
            value: QueryGetProtoRevAllRouteStatisticsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllRouteStatisticsRequest.typeUrl, QueryGetProtoRevAllRouteStatisticsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllRouteStatisticsRequest.aminoType, QueryGetProtoRevAllRouteStatisticsRequest.typeUrl);
function createBaseQueryGetProtoRevAllRouteStatisticsResponse() {
    return {
        statistics: [],
    };
}
export const QueryGetProtoRevAllRouteStatisticsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAllRouteStatisticsResponse.typeUrl ||
                (Array.isArray(o.statistics) &&
                    (!o.statistics.length || RouteStatistics.is(o.statistics[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAllRouteStatisticsResponse.typeUrl ||
                (Array.isArray(o.statistics) &&
                    (!o.statistics.length || RouteStatistics.isSDK(o.statistics[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAllRouteStatisticsResponse.typeUrl ||
                (Array.isArray(o.statistics) &&
                    (!o.statistics.length || RouteStatistics.isAmino(o.statistics[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.statistics) {
            RouteStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(RouteStatistics.decode(reader, reader.uint32()));
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
            object.statistics?.map(e => RouteStatistics.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllRouteStatisticsResponse();
        message.statistics =
            object.statistics?.map(e => RouteStatistics.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map(e => e ? RouteStatistics.toAmino(e) : undefined);
        }
        else {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevAllRouteStatisticsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-all-route-statistics-response',
            value: QueryGetProtoRevAllRouteStatisticsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllRouteStatisticsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse',
            value: QueryGetProtoRevAllRouteStatisticsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevAllRouteStatisticsResponse.typeUrl, QueryGetProtoRevAllRouteStatisticsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAllRouteStatisticsResponse.aminoType, QueryGetProtoRevAllRouteStatisticsResponse.typeUrl);
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest() {
    return {};
}
export const QueryGetProtoRevTokenPairArbRoutesRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request',
    is(o) {
        return (o && o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevTokenPairArbRoutesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request',
            value: QueryGetProtoRevTokenPairArbRoutesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevTokenPairArbRoutesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest',
            value: QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl, QueryGetProtoRevTokenPairArbRoutesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevTokenPairArbRoutesRequest.aminoType, QueryGetProtoRevTokenPairArbRoutesRequest.typeUrl);
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse() {
    return {
        routes: [],
    };
}
export const QueryGetProtoRevTokenPairArbRoutesResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl ||
                (Array.isArray(o.routes) &&
                    (!o.routes.length || TokenPairArbRoutes.is(o.routes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl ||
                (Array.isArray(o.routes) &&
                    (!o.routes.length || TokenPairArbRoutes.isSDK(o.routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl ||
                (Array.isArray(o.routes) &&
                    (!o.routes.length || TokenPairArbRoutes.isAmino(o.routes[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.routes) {
            TokenPairArbRoutes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
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
            object.routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes =
            object.routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevTokenPairArbRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response',
            value: QueryGetProtoRevTokenPairArbRoutesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevTokenPairArbRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse',
            value: QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl, QueryGetProtoRevTokenPairArbRoutesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevTokenPairArbRoutesResponse.aminoType, QueryGetProtoRevTokenPairArbRoutesResponse.typeUrl);
function createBaseQueryGetProtoRevAdminAccountRequest() {
    return {};
}
export const QueryGetProtoRevAdminAccountRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-admin-account-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevAdminAccountRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevAdminAccountRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevAdminAccountRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevAdminAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-admin-account-request',
            value: QueryGetProtoRevAdminAccountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAdminAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAdminAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest',
            value: QueryGetProtoRevAdminAccountRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevAdminAccountRequest.typeUrl, QueryGetProtoRevAdminAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAdminAccountRequest.aminoType, QueryGetProtoRevAdminAccountRequest.typeUrl);
function createBaseQueryGetProtoRevAdminAccountResponse() {
    return {
        adminAccount: '',
    };
}
export const QueryGetProtoRevAdminAccountResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-admin-account-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAdminAccountResponse.typeUrl ||
                typeof o.adminAccount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAdminAccountResponse.typeUrl ||
                typeof o.admin_account === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevAdminAccountResponse.typeUrl ||
                typeof o.admin_account === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.adminAccount !== '') {
            writer.uint32(10).string(message.adminAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevAdminAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-admin-account-response',
            value: QueryGetProtoRevAdminAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAdminAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAdminAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse',
            value: QueryGetProtoRevAdminAccountResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevAdminAccountResponse.typeUrl, QueryGetProtoRevAdminAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevAdminAccountResponse.aminoType, QueryGetProtoRevAdminAccountResponse.typeUrl);
function createBaseQueryGetProtoRevDeveloperAccountRequest() {
    return {};
}
export const QueryGetProtoRevDeveloperAccountRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-developer-account-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevDeveloperAccountRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevDeveloperAccountRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevDeveloperAccountRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevDeveloperAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-developer-account-request',
            value: QueryGetProtoRevDeveloperAccountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevDeveloperAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevDeveloperAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest',
            value: QueryGetProtoRevDeveloperAccountRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevDeveloperAccountRequest.typeUrl, QueryGetProtoRevDeveloperAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevDeveloperAccountRequest.aminoType, QueryGetProtoRevDeveloperAccountRequest.typeUrl);
function createBaseQueryGetProtoRevDeveloperAccountResponse() {
    return {
        developerAccount: '',
    };
}
export const QueryGetProtoRevDeveloperAccountResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-developer-account-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevDeveloperAccountResponse.typeUrl ||
                typeof o.developerAccount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevDeveloperAccountResponse.typeUrl ||
                typeof o.developer_account === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevDeveloperAccountResponse.typeUrl ||
                typeof o.developer_account === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.developerAccount !== '') {
            writer.uint32(10).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-developer-account-response',
            value: QueryGetProtoRevDeveloperAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse',
            value: QueryGetProtoRevDeveloperAccountResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevDeveloperAccountResponse.typeUrl, QueryGetProtoRevDeveloperAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevDeveloperAccountResponse.aminoType, QueryGetProtoRevDeveloperAccountResponse.typeUrl);
function createBaseQueryGetProtoRevInfoByPoolTypeRequest() {
    return {};
}
export const QueryGetProtoRevInfoByPoolTypeRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevInfoByPoolTypeRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevInfoByPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-request',
            value: QueryGetProtoRevInfoByPoolTypeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevInfoByPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevInfoByPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest',
            value: QueryGetProtoRevInfoByPoolTypeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevInfoByPoolTypeRequest.typeUrl, QueryGetProtoRevInfoByPoolTypeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevInfoByPoolTypeRequest.aminoType, QueryGetProtoRevInfoByPoolTypeRequest.typeUrl);
function createBaseQueryGetProtoRevInfoByPoolTypeResponse() {
    return {
        infoByPoolType: InfoByPoolType.fromPartial({}),
    };
}
export const QueryGetProtoRevInfoByPoolTypeResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevInfoByPoolTypeResponse.typeUrl ||
                InfoByPoolType.is(o.infoByPoolType)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevInfoByPoolTypeResponse.typeUrl ||
                InfoByPoolType.isSDK(o.info_by_pool_type)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevInfoByPoolTypeResponse.typeUrl ||
                InfoByPoolType.isAmino(o.info_by_pool_type)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.infoByPoolType !== undefined) {
            InfoByPoolType.encode(message.infoByPoolType, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
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
                ? InfoByPoolType.fromPartial(object.infoByPoolType)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevInfoByPoolTypeResponse();
        if (object.info_by_pool_type !== undefined &&
            object.info_by_pool_type !== null) {
            message.infoByPoolType = InfoByPoolType.fromAmino(object.info_by_pool_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info_by_pool_type = message.infoByPoolType
            ? InfoByPoolType.toAmino(message.infoByPoolType)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevInfoByPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-info-by-pool-type-response',
            value: QueryGetProtoRevInfoByPoolTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevInfoByPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevInfoByPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse',
            value: QueryGetProtoRevInfoByPoolTypeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevInfoByPoolTypeResponse.typeUrl, QueryGetProtoRevInfoByPoolTypeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevInfoByPoolTypeResponse.aminoType, QueryGetProtoRevInfoByPoolTypeResponse.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockRequest() {
    return {};
}
export const QueryGetProtoRevMaxPoolPointsPerBlockRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request',
    is(o) {
        return (o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevMaxPoolPointsPerBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-request',
            value: QueryGetProtoRevMaxPoolPointsPerBlockRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevMaxPoolPointsPerBlockRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest',
            value: QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl, QueryGetProtoRevMaxPoolPointsPerBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerBlockRequest.aminoType, QueryGetProtoRevMaxPoolPointsPerBlockRequest.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerBlockResponse() {
    return {
        maxPoolPointsPerBlock: BigInt(0),
    };
}
export const QueryGetProtoRevMaxPoolPointsPerBlockResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl ||
                typeof o.maxPoolPointsPerBlock === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl ||
                typeof o.max_pool_points_per_block === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl ||
                typeof o.max_pool_points_per_block === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxPoolPointsPerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevMaxPoolPointsPerBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-block-response',
            value: QueryGetProtoRevMaxPoolPointsPerBlockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse',
            value: QueryGetProtoRevMaxPoolPointsPerBlockResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl, QueryGetProtoRevMaxPoolPointsPerBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerBlockResponse.aminoType, QueryGetProtoRevMaxPoolPointsPerBlockResponse.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerTxRequest() {
    return {};
}
export const QueryGetProtoRevMaxPoolPointsPerTxRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request',
    is(o) {
        return (o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevMaxPoolPointsPerTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-request',
            value: QueryGetProtoRevMaxPoolPointsPerTxRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevMaxPoolPointsPerTxRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest',
            value: QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl, QueryGetProtoRevMaxPoolPointsPerTxRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerTxRequest.aminoType, QueryGetProtoRevMaxPoolPointsPerTxRequest.typeUrl);
function createBaseQueryGetProtoRevMaxPoolPointsPerTxResponse() {
    return {
        maxPoolPointsPerTx: BigInt(0),
    };
}
export const QueryGetProtoRevMaxPoolPointsPerTxResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl ||
                typeof o.maxPoolPointsPerTx === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl ||
                typeof o.max_pool_points_per_tx === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl ||
                typeof o.max_pool_points_per_tx === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxPoolPointsPerTx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevMaxPoolPointsPerTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-max-pool-points-per-tx-response',
            value: QueryGetProtoRevMaxPoolPointsPerTxResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse',
            value: QueryGetProtoRevMaxPoolPointsPerTxResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl, QueryGetProtoRevMaxPoolPointsPerTxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevMaxPoolPointsPerTxResponse.aminoType, QueryGetProtoRevMaxPoolPointsPerTxResponse.typeUrl);
function createBaseQueryGetProtoRevBaseDenomsRequest() {
    return {};
}
export const QueryGetProtoRevBaseDenomsRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-base-denoms-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevBaseDenomsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevBaseDenomsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevBaseDenomsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevBaseDenomsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-base-denoms-request',
            value: QueryGetProtoRevBaseDenomsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevBaseDenomsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevBaseDenomsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest',
            value: QueryGetProtoRevBaseDenomsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevBaseDenomsRequest.typeUrl, QueryGetProtoRevBaseDenomsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevBaseDenomsRequest.aminoType, QueryGetProtoRevBaseDenomsRequest.typeUrl);
function createBaseQueryGetProtoRevBaseDenomsResponse() {
    return {
        baseDenoms: [],
    };
}
export const QueryGetProtoRevBaseDenomsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-base-denoms-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevBaseDenomsResponse.typeUrl ||
                (Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || BaseDenom.is(o.baseDenoms[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevBaseDenomsResponse.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || BaseDenom.isSDK(o.base_denoms[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevBaseDenomsResponse.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || BaseDenom.isAmino(o.base_denoms[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.baseDenoms) {
            BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
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
            object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevBaseDenomsResponse();
        message.baseDenoms =
            object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevBaseDenomsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-base-denoms-response',
            value: QueryGetProtoRevBaseDenomsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevBaseDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevBaseDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse',
            value: QueryGetProtoRevBaseDenomsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevBaseDenomsResponse.typeUrl, QueryGetProtoRevBaseDenomsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevBaseDenomsResponse.aminoType, QueryGetProtoRevBaseDenomsResponse.typeUrl);
function createBaseQueryGetProtoRevEnabledRequest() {
    return {};
}
export const QueryGetProtoRevEnabledRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-enabled-request',
    is(o) {
        return o && o.$typeUrl === QueryGetProtoRevEnabledRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetProtoRevEnabledRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetProtoRevEnabledRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevEnabledRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-enabled-request',
            value: QueryGetProtoRevEnabledRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevEnabledRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevEnabledRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest',
            value: QueryGetProtoRevEnabledRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevEnabledRequest.typeUrl, QueryGetProtoRevEnabledRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevEnabledRequest.aminoType, QueryGetProtoRevEnabledRequest.typeUrl);
function createBaseQueryGetProtoRevEnabledResponse() {
    return {
        enabled: false,
    };
}
export const QueryGetProtoRevEnabledResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-enabled-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevEnabledResponse.typeUrl ||
                typeof o.enabled === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevEnabledResponse.typeUrl ||
                typeof o.enabled === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevEnabledResponse.typeUrl ||
                typeof o.enabled === 'boolean'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevEnabledResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-enabled-response',
            value: QueryGetProtoRevEnabledResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevEnabledResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevEnabledResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse',
            value: QueryGetProtoRevEnabledResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevEnabledResponse.typeUrl, QueryGetProtoRevEnabledResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevEnabledResponse.aminoType, QueryGetProtoRevEnabledResponse.typeUrl);
function createBaseQueryGetProtoRevPoolRequest() {
    return {
        baseDenom: '',
        otherDenom: '',
    };
}
export const QueryGetProtoRevPoolRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest',
    aminoType: 'osmosis/protorev/query-get-proto-rev-pool-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevPoolRequest.typeUrl ||
                (typeof o.baseDenom === 'string' && typeof o.otherDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevPoolRequest.typeUrl ||
                (typeof o.base_denom === 'string' && typeof o.other_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevPoolRequest.typeUrl ||
                (typeof o.base_denom === 'string' && typeof o.other_denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseDenom !== '') {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.otherDenom !== '') {
            writer.uint32(18).string(message.otherDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-pool-request',
            value: QueryGetProtoRevPoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest',
            value: QueryGetProtoRevPoolRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevPoolRequest.typeUrl, QueryGetProtoRevPoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevPoolRequest.aminoType, QueryGetProtoRevPoolRequest.typeUrl);
function createBaseQueryGetProtoRevPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
export const QueryGetProtoRevPoolResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse',
    aminoType: 'osmosis/protorev/query-get-proto-rev-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevPoolResponse.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetProtoRevPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetProtoRevPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-proto-rev-pool-response',
            value: QueryGetProtoRevPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse',
            value: QueryGetProtoRevPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetProtoRevPoolResponse.typeUrl, QueryGetProtoRevPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetProtoRevPoolResponse.aminoType, QueryGetProtoRevPoolResponse.typeUrl);
function createBaseQueryGetAllProtocolRevenueRequest() {
    return {};
}
export const QueryGetAllProtocolRevenueRequest = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest',
    aminoType: 'osmosis/protorev/query-get-all-protocol-revenue-request',
    is(o) {
        return o && o.$typeUrl === QueryGetAllProtocolRevenueRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGetAllProtocolRevenueRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGetAllProtocolRevenueRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGetAllProtocolRevenueRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-all-protocol-revenue-request',
            value: QueryGetAllProtocolRevenueRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetAllProtocolRevenueRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetAllProtocolRevenueRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest',
            value: QueryGetAllProtocolRevenueRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetAllProtocolRevenueRequest.typeUrl, QueryGetAllProtocolRevenueRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetAllProtocolRevenueRequest.aminoType, QueryGetAllProtocolRevenueRequest.typeUrl);
function createBaseQueryGetAllProtocolRevenueResponse() {
    return {
        allProtocolRevenue: AllProtocolRevenue.fromPartial({}),
    };
}
export const QueryGetAllProtocolRevenueResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse',
    aminoType: 'osmosis/protorev/query-get-all-protocol-revenue-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGetAllProtocolRevenueResponse.typeUrl ||
                AllProtocolRevenue.is(o.allProtocolRevenue)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGetAllProtocolRevenueResponse.typeUrl ||
                AllProtocolRevenue.isSDK(o.all_protocol_revenue)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGetAllProtocolRevenueResponse.typeUrl ||
                AllProtocolRevenue.isAmino(o.all_protocol_revenue)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.allProtocolRevenue !== undefined) {
            AllProtocolRevenue.encode(message.allProtocolRevenue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allProtocolRevenue = AllProtocolRevenue.decode(reader, reader.uint32());
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
                ? AllProtocolRevenue.fromPartial(object.allProtocolRevenue)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetAllProtocolRevenueResponse();
        if (object.all_protocol_revenue !== undefined &&
            object.all_protocol_revenue !== null) {
            message.allProtocolRevenue = AllProtocolRevenue.fromAmino(object.all_protocol_revenue);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.all_protocol_revenue = message.allProtocolRevenue
            ? AllProtocolRevenue.toAmino(message.allProtocolRevenue)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetAllProtocolRevenueResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/query-get-all-protocol-revenue-response',
            value: QueryGetAllProtocolRevenueResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGetAllProtocolRevenueResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetAllProtocolRevenueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse',
            value: QueryGetAllProtocolRevenueResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGetAllProtocolRevenueResponse.typeUrl, QueryGetAllProtocolRevenueResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGetAllProtocolRevenueResponse.aminoType, QueryGetAllProtocolRevenueResponse.typeUrl);
