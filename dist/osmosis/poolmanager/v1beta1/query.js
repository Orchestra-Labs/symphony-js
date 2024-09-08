"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateTradeBasedOnPriceImpactResponse = exports.EstimateTradeBasedOnPriceImpactRequest = exports.TradingPairTakerFeeResponse = exports.TradingPairTakerFeeRequest = exports.TotalVolumeForPoolResponse = exports.TotalVolumeForPoolRequest = exports.TotalLiquidityResponse = exports.TotalLiquidityRequest = exports.TotalPoolLiquidityResponse = exports.TotalPoolLiquidityRequest = exports.SpotPriceResponse = exports.SpotPriceRequest = exports.ListPoolsByDenomResponse = exports.ListPoolsByDenomRequest = exports.AllPoolsResponse = exports.AllPoolsRequest = exports.PoolResponse = exports.PoolRequest = exports.NumPoolsResponse = exports.NumPoolsRequest = exports.EstimateSwapExactAmountOutResponse = exports.EstimateSinglePoolSwapExactAmountOutRequest = exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest = exports.EstimateSwapExactAmountOutRequest = exports.EstimateSwapExactAmountInResponse = exports.EstimateSinglePoolSwapExactAmountInRequest = exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest = exports.EstimateSwapExactAmountInRequest = exports.ParamsResponse = exports.ParamsRequest = void 0;
//@ts-nocheck
const swap_route_1 = require("./swap_route");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const any_1 = require("../../../google/protobuf/any");
const pool_1 = require("../../concentratedliquidity/v1beta1/pool");
const pool_2 = require("../../cosmwasmpool/v1beta1/model/pool");
const stableswap_pool_1 = require("../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool");
const balancerPool_1 = require("../../gamm/v1beta1/balancerPool");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ParamsRequest',
    aminoType: 'osmosis/poolmanager/params-request',
    is(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/params-request',
            value: exports.ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ParamsRequest',
            value: exports.ParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsRequest.typeUrl, exports.ParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsRequest.aminoType, exports.ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ParamsResponse',
    aminoType: 'osmosis/poolmanager/params-response',
    is(o) {
        return o && (o.$typeUrl === exports.ParamsResponse.typeUrl || genesis_1.Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || genesis_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || genesis_1.Params.isAmino(o.params)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? genesis_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/params-response',
            value: exports.ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ParamsResponse',
            value: exports.ParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsResponse.typeUrl, exports.ParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsResponse.aminoType, exports.ParamsResponse.typeUrl);
function createBaseEstimateSwapExactAmountInRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        routes: [],
    };
}
exports.EstimateSwapExactAmountInRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountInRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.is(o.routes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.isSDK(o.routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.isAmino(o.routes[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== '') {
            writer.uint32(26).string(message.tokenIn);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenIn = reader.string();
                    break;
                case 4:
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountInRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenIn = object.tokenIn ?? '';
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountInRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-in-request',
            value: exports.EstimateSwapExactAmountInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest',
            value: exports.EstimateSwapExactAmountInRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSwapExactAmountInRequest.typeUrl, exports.EstimateSwapExactAmountInRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSwapExactAmountInRequest.aminoType, exports.EstimateSwapExactAmountInRequest.typeUrl);
function createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        routesPoolId: [],
        routesTokenOutDenom: [],
    };
}
exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    Array.isArray(o.routesPoolId) &&
                    (!o.routesPoolId.length || typeof o.routesPoolId[0] === 'bigint') &&
                    Array.isArray(o.routesTokenOutDenom) &&
                    (!o.routesTokenOutDenom.length ||
                        typeof o.routesTokenOutDenom[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes_pool_id) &&
                    (!o.routes_pool_id.length ||
                        typeof o.routes_pool_id[0] === 'bigint') &&
                    Array.isArray(o.routes_token_out_denom) &&
                    (!o.routes_token_out_denom.length ||
                        typeof o.routes_token_out_denom[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes_pool_id) &&
                    (!o.routes_pool_id.length ||
                        typeof o.routes_pool_id[0] === 'bigint') &&
                    Array.isArray(o.routes_token_out_denom) &&
                    (!o.routes_token_out_denom.length ||
                        typeof o.routes_token_out_denom[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenIn !== '') {
            writer.uint32(18).string(message.tokenIn);
        }
        writer.uint32(26).fork();
        for (const v of message.routesPoolId) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.routesTokenOutDenom) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.routesPoolId.push(reader.uint64());
                        }
                    }
                    else {
                        message.routesPoolId.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.routesTokenOutDenom.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenIn = object.tokenIn ?? '';
        message.routesPoolId =
            object.routesPoolId?.map(e => BigInt(e.toString())) || [];
        message.routesTokenOutDenom = object.routesTokenOutDenom?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
        message.routesTokenOutDenom =
            object.routes_token_out_denom?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        if (message.routesPoolId) {
            obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
        }
        else {
            obj.routes_pool_id = message.routesPoolId;
        }
        if (message.routesTokenOutDenom) {
            obj.routes_token_out_denom = message.routesTokenOutDenom.map(e => e);
        }
        else {
            obj.routes_token_out_denom = message.routesTokenOutDenom;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request',
            value: exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest',
            value: exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl, exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.aminoType, exports.EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl);
function createBaseEstimateSinglePoolSwapExactAmountInRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        tokenOutDenom: '',
    };
}
exports.EstimateSinglePoolSwapExactAmountInRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest',
    aminoType: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.tokenOutDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenIn !== '') {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenIn = object.tokenIn ?? '';
        message.tokenOutDenom = object.tokenOutDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        if (object.token_out_denom !== undefined &&
            object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSinglePoolSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request',
            value: exports.EstimateSinglePoolSwapExactAmountInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSinglePoolSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest',
            value: exports.EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSinglePoolSwapExactAmountInRequest.typeUrl, exports.EstimateSinglePoolSwapExactAmountInRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSinglePoolSwapExactAmountInRequest.aminoType, exports.EstimateSinglePoolSwapExactAmountInRequest.typeUrl);
function createBaseEstimateSwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
exports.EstimateSwapExactAmountInResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== '') {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountInResponse();
        if (object.token_out_amount !== undefined &&
            object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount =
            message.tokenOutAmount === '' ? undefined : message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-in-response',
            value: exports.EstimateSwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse',
            value: exports.EstimateSwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSwapExactAmountInResponse.typeUrl, exports.EstimateSwapExactAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSwapExactAmountInResponse.aminoType, exports.EstimateSwapExactAmountInResponse.typeUrl);
function createBaseEstimateSwapExactAmountOutRequest() {
    return {
        poolId: BigInt(0),
        routes: [],
        tokenOut: '',
    };
}
exports.EstimateSwapExactAmountOutRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountOutRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.is(o.routes[0])) &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.isSDK(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.isAmino(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== '') {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountOutRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountOutRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-out-request',
            value: exports.EstimateSwapExactAmountOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest',
            value: exports.EstimateSwapExactAmountOutRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSwapExactAmountOutRequest.typeUrl, exports.EstimateSwapExactAmountOutRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSwapExactAmountOutRequest.aminoType, exports.EstimateSwapExactAmountOutRequest.typeUrl);
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest() {
    return {
        poolId: BigInt(0),
        routesPoolId: [],
        routesTokenInDenom: [],
        tokenOut: '',
    };
}
exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.routesPoolId) &&
                    (!o.routesPoolId.length || typeof o.routesPoolId[0] === 'bigint') &&
                    Array.isArray(o.routesTokenInDenom) &&
                    (!o.routesTokenInDenom.length ||
                        typeof o.routesTokenInDenom[0] === 'string') &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes_pool_id) &&
                    (!o.routes_pool_id.length ||
                        typeof o.routes_pool_id[0] === 'bigint') &&
                    Array.isArray(o.routes_token_in_denom) &&
                    (!o.routes_token_in_denom.length ||
                        typeof o.routes_token_in_denom[0] === 'string') &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes_pool_id) &&
                    (!o.routes_pool_id.length ||
                        typeof o.routes_pool_id[0] === 'bigint') &&
                    Array.isArray(o.routes_token_in_denom) &&
                    (!o.routes_token_in_denom.length ||
                        typeof o.routes_token_in_denom[0] === 'string') &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        writer.uint32(18).fork();
        for (const v of message.routesPoolId) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.routesTokenInDenom) {
            writer.uint32(26).string(v);
        }
        if (message.tokenOut !== '') {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.routesPoolId.push(reader.uint64());
                        }
                    }
                    else {
                        message.routesPoolId.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.routesTokenInDenom.push(reader.string());
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.routesPoolId =
            object.routesPoolId?.map(e => BigInt(e.toString())) || [];
        message.routesTokenInDenom = object.routesTokenInDenom?.map(e => e) || [];
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
        message.routesTokenInDenom =
            object.routes_token_in_denom?.map(e => e) || [];
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.routesPoolId) {
            obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
        }
        else {
            obj.routes_pool_id = message.routesPoolId;
        }
        if (message.routesTokenInDenom) {
            obj.routes_token_in_denom = message.routesTokenInDenom.map(e => e);
        }
        else {
            obj.routes_token_in_denom = message.routesTokenInDenom;
        }
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request',
            value: exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest',
            value: exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl, exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.aminoType, exports.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl);
function createBaseEstimateSinglePoolSwapExactAmountOutRequest() {
    return {
        poolId: BigInt(0),
        tokenInDenom: '',
        tokenOut: '',
    };
}
exports.EstimateSinglePoolSwapExactAmountOutRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest',
    aminoType: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.tokenOut !== '') {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                case 3:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? '';
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSinglePoolSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request',
            value: exports.EstimateSinglePoolSwapExactAmountOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSinglePoolSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest',
            value: exports.EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSinglePoolSwapExactAmountOutRequest.typeUrl, exports.EstimateSinglePoolSwapExactAmountOutRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSinglePoolSwapExactAmountOutRequest.aminoType, exports.EstimateSinglePoolSwapExactAmountOutRequest.typeUrl);
function createBaseEstimateSwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
exports.EstimateSwapExactAmountOutResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== '') {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountOutResponse();
        if (object.token_in_amount !== undefined &&
            object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount =
            message.tokenInAmount === '' ? undefined : message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-out-response',
            value: exports.EstimateSwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse',
            value: exports.EstimateSwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateSwapExactAmountOutResponse.typeUrl, exports.EstimateSwapExactAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateSwapExactAmountOutResponse.aminoType, exports.EstimateSwapExactAmountOutResponse.typeUrl);
function createBaseNumPoolsRequest() {
    return {};
}
exports.NumPoolsRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsRequest',
    aminoType: 'osmosis/poolmanager/num-pools-request',
    is(o) {
        return o && o.$typeUrl === exports.NumPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.NumPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.NumPoolsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsRequest();
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
        const message = createBaseNumPoolsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseNumPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/num-pools-request',
            value: exports.NumPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.NumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.NumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsRequest',
            value: exports.NumPoolsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.NumPoolsRequest.typeUrl, exports.NumPoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NumPoolsRequest.aminoType, exports.NumPoolsRequest.typeUrl);
function createBaseNumPoolsResponse() {
    return {
        numPools: BigInt(0),
    };
}
exports.NumPoolsResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsResponse',
    aminoType: 'osmosis/poolmanager/num-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolsResponse.typeUrl ||
                typeof o.numPools === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolsResponse.typeUrl ||
                typeof o.num_pools === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolsResponse.typeUrl ||
                typeof o.num_pools === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numPools = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNumPoolsResponse();
        message.numPools =
            object.numPools !== undefined && object.numPools !== null
                ? BigInt(object.numPools.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNumPoolsResponse();
        if (object.num_pools !== undefined && object.num_pools !== null) {
            message.numPools = BigInt(object.num_pools);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.num_pools =
            message.numPools !== BigInt(0) ? message.numPools.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/num-pools-response',
            value: exports.NumPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.NumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.NumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsResponse',
            value: exports.NumPoolsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.NumPoolsResponse.typeUrl, exports.NumPoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NumPoolsResponse.aminoType, exports.NumPoolsResponse.typeUrl);
function createBasePoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.PoolRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.PoolRequest',
    aminoType: 'osmosis/poolmanager/pool-request',
    is(o) {
        return (o && (o.$typeUrl === exports.PoolRequest.typeUrl || typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === exports.PoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === exports.PoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
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
        const message = createBasePoolRequest();
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
        const message = createBasePoolRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolRequest();
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
        return exports.PoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/pool-request',
            value: exports.PoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.PoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.PoolRequest',
            value: exports.PoolRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolRequest.typeUrl, exports.PoolRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolRequest.aminoType, exports.PoolRequest.typeUrl);
function createBasePoolResponse() {
    return {
        pool: undefined,
    };
}
exports.PoolResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.PoolResponse',
    aminoType: 'osmosis/poolmanager/pool-response',
    is(o) {
        return o && o.$typeUrl === exports.PoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.PoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.PoolResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.GlobalDecoderRegistry.fromPartial(object.pool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool
            ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.pool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/pool-response',
            value: exports.PoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.PoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.PoolResponse',
            value: exports.PoolResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolResponse.typeUrl, exports.PoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolResponse.aminoType, exports.PoolResponse.typeUrl);
function createBaseAllPoolsRequest() {
    return {};
}
exports.AllPoolsRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsRequest',
    aminoType: 'osmosis/poolmanager/all-pools-request',
    is(o) {
        return o && o.$typeUrl === exports.AllPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.AllPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.AllPoolsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllPoolsRequest();
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
        const message = createBaseAllPoolsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseAllPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/all-pools-request',
            value: exports.AllPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.AllPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AllPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsRequest',
            value: exports.AllPoolsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.AllPoolsRequest.typeUrl, exports.AllPoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllPoolsRequest.aminoType, exports.AllPoolsRequest.typeUrl);
function createBaseAllPoolsResponse() {
    return {
        pools: [],
    };
}
exports.AllPoolsResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsResponse',
    aminoType: 'osmosis/poolmanager/all-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.AllPoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.is(o.pools[0]) ||
                        pool_2.CosmWasmPool.is(o.pools[0]) ||
                        stableswap_pool_1.Pool.is(o.pools[0]) ||
                        balancerPool_1.Pool.is(o.pools[0]) ||
                        any_1.Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.AllPoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isSDK(o.pools[0]) ||
                        pool_2.CosmWasmPool.isSDK(o.pools[0]) ||
                        stableswap_pool_1.Pool.isSDK(o.pools[0]) ||
                        balancerPool_1.Pool.isSDK(o.pools[0]) ||
                        any_1.Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.AllPoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isAmino(o.pools[0]) ||
                        pool_2.CosmWasmPool.isAmino(o.pools[0]) ||
                        stableswap_pool_1.Pool.isAmino(o.pools[0]) ||
                        balancerPool_1.Pool.isAmino(o.pools[0]) ||
                        any_1.Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllPoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllPoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/all-pools-response',
            value: exports.AllPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.AllPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AllPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsResponse',
            value: exports.AllPoolsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.AllPoolsResponse.typeUrl, exports.AllPoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllPoolsResponse.aminoType, exports.AllPoolsResponse.typeUrl);
function createBaseListPoolsByDenomRequest() {
    return {
        denom: '',
    };
}
exports.ListPoolsByDenomRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest',
    aminoType: 'osmosis/poolmanager/list-pools-by-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ListPoolsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ListPoolsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ListPoolsByDenomRequest.typeUrl ||
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
        const message = createBaseListPoolsByDenomRequest();
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
        const message = createBaseListPoolsByDenomRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseListPoolsByDenomRequest();
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
        return exports.ListPoolsByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/list-pools-by-denom-request',
            value: exports.ListPoolsByDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ListPoolsByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListPoolsByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest',
            value: exports.ListPoolsByDenomRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ListPoolsByDenomRequest.typeUrl, exports.ListPoolsByDenomRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ListPoolsByDenomRequest.aminoType, exports.ListPoolsByDenomRequest.typeUrl);
function createBaseListPoolsByDenomResponse() {
    return {
        pools: [],
    };
}
exports.ListPoolsByDenomResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse',
    aminoType: 'osmosis/poolmanager/list-pools-by-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ListPoolsByDenomResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.is(o.pools[0]) ||
                        pool_2.CosmWasmPool.is(o.pools[0]) ||
                        stableswap_pool_1.Pool.is(o.pools[0]) ||
                        balancerPool_1.Pool.is(o.pools[0]) ||
                        any_1.Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ListPoolsByDenomResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isSDK(o.pools[0]) ||
                        pool_2.CosmWasmPool.isSDK(o.pools[0]) ||
                        stableswap_pool_1.Pool.isSDK(o.pools[0]) ||
                        balancerPool_1.Pool.isSDK(o.pools[0]) ||
                        any_1.Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ListPoolsByDenomResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isAmino(o.pools[0]) ||
                        pool_2.CosmWasmPool.isAmino(o.pools[0]) ||
                        stableswap_pool_1.Pool.isAmino(o.pools[0]) ||
                        balancerPool_1.Pool.isAmino(o.pools[0]) ||
                        any_1.Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPoolsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListPoolsByDenomResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListPoolsByDenomResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListPoolsByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/list-pools-by-denom-response',
            value: exports.ListPoolsByDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ListPoolsByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListPoolsByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse',
            value: exports.ListPoolsByDenomResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ListPoolsByDenomResponse.typeUrl, exports.ListPoolsByDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ListPoolsByDenomResponse.aminoType, exports.ListPoolsByDenomResponse.typeUrl);
function createBaseSpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: '',
        quoteAssetDenom: '',
    };
}
exports.SpotPriceRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceRequest',
    aminoType: 'osmosis/poolmanager/spot-price-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAssetDenom === 'string' &&
                    typeof o.quoteAssetDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== '') {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== '') {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAssetDenom = object.baseAssetDenom ?? '';
        message.quoteAssetDenom = object.quoteAssetDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPriceRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset_denom !== undefined &&
            object.base_asset_denom !== null) {
            message.baseAssetDenom = object.base_asset_denom;
        }
        if (object.quote_asset_denom !== undefined &&
            object.quote_asset_denom !== null) {
            message.quoteAssetDenom = object.quote_asset_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.base_asset_denom =
            message.baseAssetDenom === '' ? undefined : message.baseAssetDenom;
        obj.quote_asset_denom =
            message.quoteAssetDenom === '' ? undefined : message.quoteAssetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/spot-price-request',
            value: exports.SpotPriceRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceRequest',
            value: exports.SpotPriceRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPriceRequest.typeUrl, exports.SpotPriceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPriceRequest.aminoType, exports.SpotPriceRequest.typeUrl);
function createBaseSpotPriceResponse() {
    return {
        spotPrice: '',
    };
}
exports.SpotPriceResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceResponse',
    aminoType: 'osmosis/poolmanager/spot-price-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceResponse.typeUrl ||
                typeof o.spotPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== '') {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceResponse();
        message.spotPrice = object.spotPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPriceResponse();
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = object.spot_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spotPrice === '' ? undefined : message.spotPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/spot-price-response',
            value: exports.SpotPriceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceResponse',
            value: exports.SpotPriceResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPriceResponse.typeUrl, exports.SpotPriceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPriceResponse.aminoType, exports.SpotPriceResponse.typeUrl);
function createBaseTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.TotalPoolLiquidityRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest',
    aminoType: 'osmosis/poolmanager/total-pool-liquidity-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TotalPoolLiquidityRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TotalPoolLiquidityRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TotalPoolLiquidityRequest.typeUrl ||
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
        const message = createBaseTotalPoolLiquidityRequest();
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
        const message = createBaseTotalPoolLiquidityRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalPoolLiquidityRequest();
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
        return exports.TotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-pool-liquidity-request',
            value: exports.TotalPoolLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest',
            value: exports.TotalPoolLiquidityRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TotalPoolLiquidityRequest.typeUrl, exports.TotalPoolLiquidityRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalPoolLiquidityRequest.aminoType, exports.TotalPoolLiquidityRequest.typeUrl);
function createBaseTotalPoolLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.TotalPoolLiquidityResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse',
    aminoType: 'osmosis/poolmanager/total-pool-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.isAmino(o.liquidity[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-pool-liquidity-response',
            value: exports.TotalPoolLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse',
            value: exports.TotalPoolLiquidityResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TotalPoolLiquidityResponse.typeUrl, exports.TotalPoolLiquidityResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalPoolLiquidityResponse.aminoType, exports.TotalPoolLiquidityResponse.typeUrl);
function createBaseTotalLiquidityRequest() {
    return {};
}
exports.TotalLiquidityRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityRequest',
    aminoType: 'osmosis/poolmanager/total-liquidity-request',
    is(o) {
        return o && o.$typeUrl === exports.TotalLiquidityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.TotalLiquidityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.TotalLiquidityRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalLiquidityRequest();
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
        const message = createBaseTotalLiquidityRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseTotalLiquidityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-liquidity-request',
            value: exports.TotalLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityRequest',
            value: exports.TotalLiquidityRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TotalLiquidityRequest.typeUrl, exports.TotalLiquidityRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalLiquidityRequest.aminoType, exports.TotalLiquidityRequest.typeUrl);
function createBaseTotalLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.TotalLiquidityResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityResponse',
    aminoType: 'osmosis/poolmanager/total-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.isAmino(o.liquidity[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-liquidity-response',
            value: exports.TotalLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityResponse',
            value: exports.TotalLiquidityResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TotalLiquidityResponse.typeUrl, exports.TotalLiquidityResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalLiquidityResponse.aminoType, exports.TotalLiquidityResponse.typeUrl);
function createBaseTotalVolumeForPoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.TotalVolumeForPoolRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest',
    aminoType: 'osmosis/poolmanager/total-volume-for-pool-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TotalVolumeForPoolRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TotalVolumeForPoolRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TotalVolumeForPoolRequest.typeUrl ||
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
        const message = createBaseTotalVolumeForPoolRequest();
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
        const message = createBaseTotalVolumeForPoolRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalVolumeForPoolRequest();
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
        return exports.TotalVolumeForPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-volume-for-pool-request',
            value: exports.TotalVolumeForPoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TotalVolumeForPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TotalVolumeForPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest',
            value: exports.TotalVolumeForPoolRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TotalVolumeForPoolRequest.typeUrl, exports.TotalVolumeForPoolRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalVolumeForPoolRequest.aminoType, exports.TotalVolumeForPoolRequest.typeUrl);
function createBaseTotalVolumeForPoolResponse() {
    return {
        volume: [],
    };
}
exports.TotalVolumeForPoolResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse',
    aminoType: 'osmosis/poolmanager/total-volume-for-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TotalVolumeForPoolResponse.typeUrl ||
                (Array.isArray(o.volume) && (!o.volume.length || coin_1.Coin.is(o.volume[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TotalVolumeForPoolResponse.typeUrl ||
                (Array.isArray(o.volume) &&
                    (!o.volume.length || coin_1.Coin.isSDK(o.volume[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TotalVolumeForPoolResponse.typeUrl ||
                (Array.isArray(o.volume) &&
                    (!o.volume.length || coin_1.Coin.isAmino(o.volume[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.volume) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalVolumeForPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volume.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTotalVolumeForPoolResponse();
        message.volume = object.volume?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalVolumeForPoolResponse();
        message.volume = object.volume?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.volume) {
            obj.volume = message.volume.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.volume = message.volume;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TotalVolumeForPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-volume-for-pool-response',
            value: exports.TotalVolumeForPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TotalVolumeForPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TotalVolumeForPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse',
            value: exports.TotalVolumeForPoolResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TotalVolumeForPoolResponse.typeUrl, exports.TotalVolumeForPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TotalVolumeForPoolResponse.aminoType, exports.TotalVolumeForPoolResponse.typeUrl);
function createBaseTradingPairTakerFeeRequest() {
    return {
        denom0: '',
        denom1: '',
    };
}
exports.TradingPairTakerFeeRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest',
    aminoType: 'osmosis/poolmanager/trading-pair-taker-fee-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TradingPairTakerFeeRequest.typeUrl ||
                (typeof o.denom0 === 'string' && typeof o.denom1 === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TradingPairTakerFeeRequest.typeUrl ||
                (typeof o.denom_0 === 'string' && typeof o.denom_1 === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TradingPairTakerFeeRequest.typeUrl ||
                (typeof o.denom_0 === 'string' && typeof o.denom_1 === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom0 !== '') {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== '') {
            writer.uint32(18).string(message.denom1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingPairTakerFeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom0 = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingPairTakerFeeRequest();
        message.denom0 = object.denom0 ?? '';
        message.denom1 = object.denom1 ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingPairTakerFeeRequest();
        if (object.denom_0 !== undefined && object.denom_0 !== null) {
            message.denom0 = object.denom_0;
        }
        if (object.denom_1 !== undefined && object.denom_1 !== null) {
            message.denom1 = object.denom_1;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_0 = message.denom0 === '' ? undefined : message.denom0;
        obj.denom_1 = message.denom1 === '' ? undefined : message.denom1;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradingPairTakerFeeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/trading-pair-taker-fee-request',
            value: exports.TradingPairTakerFeeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TradingPairTakerFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TradingPairTakerFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest',
            value: exports.TradingPairTakerFeeRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TradingPairTakerFeeRequest.typeUrl, exports.TradingPairTakerFeeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TradingPairTakerFeeRequest.aminoType, exports.TradingPairTakerFeeRequest.typeUrl);
function createBaseTradingPairTakerFeeResponse() {
    return {
        takerFee: '',
    };
}
exports.TradingPairTakerFeeResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse',
    aminoType: 'osmosis/poolmanager/trading-pair-taker-fee-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TradingPairTakerFeeResponse.typeUrl ||
                typeof o.takerFee === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TradingPairTakerFeeResponse.typeUrl ||
                typeof o.taker_fee === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TradingPairTakerFeeResponse.typeUrl ||
                typeof o.taker_fee === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.takerFee !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.takerFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingPairTakerFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingPairTakerFeeResponse();
        message.takerFee = object.takerFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingPairTakerFeeResponse();
        if (object.taker_fee !== undefined && object.taker_fee !== null) {
            message.takerFee = object.taker_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.taker_fee = message.takerFee === '' ? undefined : message.takerFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradingPairTakerFeeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/trading-pair-taker-fee-response',
            value: exports.TradingPairTakerFeeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TradingPairTakerFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TradingPairTakerFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse',
            value: exports.TradingPairTakerFeeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TradingPairTakerFeeResponse.typeUrl, exports.TradingPairTakerFeeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TradingPairTakerFeeResponse.aminoType, exports.TradingPairTakerFeeResponse.typeUrl);
function createBaseEstimateTradeBasedOnPriceImpactRequest() {
    return {
        fromCoin: coin_1.Coin.fromPartial({}),
        toCoinDenom: '',
        poolId: BigInt(0),
        maxPriceImpact: '',
        externalPrice: '',
    };
}
exports.EstimateTradeBasedOnPriceImpactRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest',
    aminoType: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
                (coin_1.Coin.is(o.fromCoin) &&
                    typeof o.toCoinDenom === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.maxPriceImpact === 'string' &&
                    typeof o.externalPrice === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
                (coin_1.Coin.isSDK(o.from_coin) &&
                    typeof o.to_coin_denom === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.max_price_impact === 'string' &&
                    typeof o.external_price === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
                (coin_1.Coin.isAmino(o.from_coin) &&
                    typeof o.to_coin_denom === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.max_price_impact === 'string' &&
                    typeof o.external_price === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromCoin !== undefined) {
            coin_1.Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.toCoinDenom !== '') {
            writer.uint32(18).string(message.toCoinDenom);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.maxPriceImpact !== '') {
            writer
                .uint32(34)
                .string(math_1.Decimal.fromUserInput(message.maxPriceImpact, 18).atomics);
        }
        if (message.externalPrice !== '') {
            writer
                .uint32(42)
                .string(math_1.Decimal.fromUserInput(message.externalPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.toCoinDenom = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.maxPriceImpact = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.externalPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
        message.fromCoin =
            object.fromCoin !== undefined && object.fromCoin !== null
                ? coin_1.Coin.fromPartial(object.fromCoin)
                : undefined;
        message.toCoinDenom = object.toCoinDenom ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.maxPriceImpact = object.maxPriceImpact ?? '';
        message.externalPrice = object.externalPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
        if (object.from_coin !== undefined && object.from_coin !== null) {
            message.fromCoin = coin_1.Coin.fromAmino(object.from_coin);
        }
        if (object.to_coin_denom !== undefined && object.to_coin_denom !== null) {
            message.toCoinDenom = object.to_coin_denom;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.max_price_impact !== undefined &&
            object.max_price_impact !== null) {
            message.maxPriceImpact = object.max_price_impact;
        }
        if (object.external_price !== undefined && object.external_price !== null) {
            message.externalPrice = object.external_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_coin = message.fromCoin
            ? coin_1.Coin.toAmino(message.fromCoin)
            : undefined;
        obj.to_coin_denom =
            message.toCoinDenom === '' ? undefined : message.toCoinDenom;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.max_price_impact =
            message.maxPriceImpact === '' ? undefined : message.maxPriceImpact;
        obj.external_price =
            message.externalPrice === '' ? undefined : message.externalPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateTradeBasedOnPriceImpactRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-request',
            value: exports.EstimateTradeBasedOnPriceImpactRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateTradeBasedOnPriceImpactRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateTradeBasedOnPriceImpactRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest',
            value: exports.EstimateTradeBasedOnPriceImpactRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateTradeBasedOnPriceImpactRequest.typeUrl, exports.EstimateTradeBasedOnPriceImpactRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateTradeBasedOnPriceImpactRequest.aminoType, exports.EstimateTradeBasedOnPriceImpactRequest.typeUrl);
function createBaseEstimateTradeBasedOnPriceImpactResponse() {
    return {
        inputCoin: coin_1.Coin.fromPartial({}),
        outputCoin: coin_1.Coin.fromPartial({}),
    };
}
exports.EstimateTradeBasedOnPriceImpactResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse',
    aminoType: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
                (coin_1.Coin.is(o.inputCoin) && coin_1.Coin.is(o.outputCoin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
                (coin_1.Coin.isSDK(o.input_coin) && coin_1.Coin.isSDK(o.output_coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
                (coin_1.Coin.isAmino(o.input_coin) && coin_1.Coin.isAmino(o.output_coin))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inputCoin !== undefined) {
            coin_1.Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.outputCoin !== undefined) {
            coin_1.Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.outputCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        message.inputCoin =
            object.inputCoin !== undefined && object.inputCoin !== null
                ? coin_1.Coin.fromPartial(object.inputCoin)
                : undefined;
        message.outputCoin =
            object.outputCoin !== undefined && object.outputCoin !== null
                ? coin_1.Coin.fromPartial(object.outputCoin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        if (object.input_coin !== undefined && object.input_coin !== null) {
            message.inputCoin = coin_1.Coin.fromAmino(object.input_coin);
        }
        if (object.output_coin !== undefined && object.output_coin !== null) {
            message.outputCoin = coin_1.Coin.fromAmino(object.output_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.input_coin = message.inputCoin
            ? coin_1.Coin.toAmino(message.inputCoin)
            : undefined;
        obj.output_coin = message.outputCoin
            ? coin_1.Coin.toAmino(message.outputCoin)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateTradeBasedOnPriceImpactResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-response',
            value: exports.EstimateTradeBasedOnPriceImpactResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateTradeBasedOnPriceImpactResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateTradeBasedOnPriceImpactResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse',
            value: exports.EstimateTradeBasedOnPriceImpactResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateTradeBasedOnPriceImpactResponse.typeUrl, exports.EstimateTradeBasedOnPriceImpactResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EstimateTradeBasedOnPriceImpactResponse.aminoType, exports.EstimateTradeBasedOnPriceImpactResponse.typeUrl);
