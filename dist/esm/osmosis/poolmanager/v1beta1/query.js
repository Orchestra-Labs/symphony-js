//@ts-nocheck
import { SwapAmountInRoute, SwapAmountOutRoute, } from './swap_route';
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { Params } from './genesis';
import { Any, } from '../../../google/protobuf/any';
import { Pool as Pool1 } from '../../concentratedliquidity/v1beta1/pool';
import { CosmWasmPool, } from '../../cosmwasmpool/v1beta1/model/pool';
import { Pool as Pool2 } from '../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import { Pool as Pool3 } from '../../gamm/v1beta1/balancerPool';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ParamsRequest',
    aminoType: 'osmosis/poolmanager/params-request',
    is(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/params-request',
            value: ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ParamsRequest',
            value: ParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const ParamsResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ParamsResponse',
    aminoType: 'osmosis/poolmanager/params-response',
    is(o) {
        return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params)));
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
        const message = createBaseParamsResponse();
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
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
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
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/params-response',
            value: ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ParamsResponse',
            value: ParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBaseEstimateSwapExactAmountInRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        routes: [],
    };
}
export const EstimateSwapExactAmountInRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.is(o.routes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== '') {
            writer.uint32(26).string(message.tokenIn);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
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
            object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
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
            object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-in-request',
            value: EstimateSwapExactAmountInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest',
            value: EstimateSwapExactAmountInRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountInRequest.typeUrl, EstimateSwapExactAmountInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountInRequest.aminoType, EstimateSwapExactAmountInRequest.typeUrl);
function createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        routesPoolId: [],
        routesTokenOutDenom: [],
    };
}
export const EstimateSwapExactAmountInWithPrimitiveTypesRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
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
                EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
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
                EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes_pool_id) &&
                    (!o.routes_pool_id.length ||
                        typeof o.routes_pool_id[0] === 'bigint') &&
                    Array.isArray(o.routes_token_out_denom) &&
                    (!o.routes_token_out_denom.length ||
                        typeof o.routes_token_out_denom[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EstimateSwapExactAmountInWithPrimitiveTypesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request',
            value: EstimateSwapExactAmountInWithPrimitiveTypesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInWithPrimitiveTypesRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest',
            value: EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl, EstimateSwapExactAmountInWithPrimitiveTypesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountInWithPrimitiveTypesRequest.aminoType, EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl);
function createBaseEstimateSinglePoolSwapExactAmountInRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        tokenOutDenom: '',
    };
}
export const EstimateSinglePoolSwapExactAmountInRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest',
    aminoType: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.tokenOutDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out_denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EstimateSinglePoolSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request',
            value: EstimateSinglePoolSwapExactAmountInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSinglePoolSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest',
            value: EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSinglePoolSwapExactAmountInRequest.typeUrl, EstimateSinglePoolSwapExactAmountInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSinglePoolSwapExactAmountInRequest.aminoType, EstimateSinglePoolSwapExactAmountInRequest.typeUrl);
function createBaseEstimateSwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
export const EstimateSwapExactAmountInResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOutAmount !== '') {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EstimateSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-in-response',
            value: EstimateSwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse',
            value: EstimateSwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountInResponse.typeUrl, EstimateSwapExactAmountInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountInResponse.aminoType, EstimateSwapExactAmountInResponse.typeUrl);
function createBaseEstimateSwapExactAmountOutRequest() {
    return {
        poolId: BigInt(0),
        routes: [],
        tokenOut: '',
    };
}
export const EstimateSwapExactAmountOutRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== '') {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
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
            object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountOutRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.routes =
            object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
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
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-out-request',
            value: EstimateSwapExactAmountOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest',
            value: EstimateSwapExactAmountOutRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountOutRequest.typeUrl, EstimateSwapExactAmountOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountOutRequest.aminoType, EstimateSwapExactAmountOutRequest.typeUrl);
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest() {
    return {
        poolId: BigInt(0),
        routesPoolId: [],
        routesTokenInDenom: [],
        tokenOut: '',
    };
}
export const EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
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
                EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
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
                EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes_pool_id) &&
                    (!o.routes_pool_id.length ||
                        typeof o.routes_pool_id[0] === 'bigint') &&
                    Array.isArray(o.routes_token_in_denom) &&
                    (!o.routes_token_in_denom.length ||
                        typeof o.routes_token_in_denom[0] === 'string') &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request',
            value: EstimateSwapExactAmountOutWithPrimitiveTypesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest',
            value: EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl, EstimateSwapExactAmountOutWithPrimitiveTypesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountOutWithPrimitiveTypesRequest.aminoType, EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl);
function createBaseEstimateSinglePoolSwapExactAmountOutRequest() {
    return {
        poolId: BigInt(0),
        tokenInDenom: '',
        tokenOut: '',
    };
}
export const EstimateSinglePoolSwapExactAmountOutRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest',
    aminoType: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EstimateSinglePoolSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request',
            value: EstimateSinglePoolSwapExactAmountOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSinglePoolSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest',
            value: EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSinglePoolSwapExactAmountOutRequest.typeUrl, EstimateSinglePoolSwapExactAmountOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSinglePoolSwapExactAmountOutRequest.aminoType, EstimateSinglePoolSwapExactAmountOutRequest.typeUrl);
function createBaseEstimateSwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
export const EstimateSwapExactAmountOutResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse',
    aminoType: 'osmosis/poolmanager/estimate-swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenInAmount !== '') {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-swap-exact-amount-out-response',
            value: EstimateSwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse',
            value: EstimateSwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountOutResponse.typeUrl, EstimateSwapExactAmountOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountOutResponse.aminoType, EstimateSwapExactAmountOutResponse.typeUrl);
function createBaseNumPoolsRequest() {
    return {};
}
export const NumPoolsRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsRequest',
    aminoType: 'osmosis/poolmanager/num-pools-request',
    is(o) {
        return o && o.$typeUrl === NumPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === NumPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === NumPoolsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return NumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/num-pools-request',
            value: NumPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return NumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsRequest',
            value: NumPoolsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NumPoolsRequest.typeUrl, NumPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolsRequest.aminoType, NumPoolsRequest.typeUrl);
function createBaseNumPoolsResponse() {
    return {
        numPools: BigInt(0),
    };
}
export const NumPoolsResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsResponse',
    aminoType: 'osmosis/poolmanager/num-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === NumPoolsResponse.typeUrl ||
                typeof o.numPools === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === NumPoolsResponse.typeUrl ||
                typeof o.num_pools === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === NumPoolsResponse.typeUrl ||
                typeof o.num_pools === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return NumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/num-pools-response',
            value: NumPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return NumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.NumPoolsResponse',
            value: NumPoolsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NumPoolsResponse.typeUrl, NumPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolsResponse.aminoType, NumPoolsResponse.typeUrl);
function createBasePoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const PoolRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.PoolRequest',
    aminoType: 'osmosis/poolmanager/pool-request',
    is(o) {
        return (o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
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
        return PoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/pool-request',
            value: PoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolRequest.decode(message.value);
    },
    toProto(message) {
        return PoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.PoolRequest',
            value: PoolRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolRequest.typeUrl, PoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolRequest.aminoType, PoolRequest.typeUrl);
function createBasePoolResponse() {
    return {
        pool: undefined,
    };
}
export const PoolResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.PoolResponse',
    aminoType: 'osmosis/poolmanager/pool-response',
    is(o) {
        return o && o.$typeUrl === PoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === PoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === PoolResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = GlobalDecoderRegistry.unwrapAny(reader);
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
                ? GlobalDecoderRegistry.fromPartial(object.pool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool
            ? GlobalDecoderRegistry.toAminoMsg(message.pool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/pool-response',
            value: PoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolResponse.decode(message.value);
    },
    toProto(message) {
        return PoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.PoolResponse',
            value: PoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolResponse.typeUrl, PoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolResponse.aminoType, PoolResponse.typeUrl);
function createBaseAllPoolsRequest() {
    return {};
}
export const AllPoolsRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsRequest',
    aminoType: 'osmosis/poolmanager/all-pools-request',
    is(o) {
        return o && o.$typeUrl === AllPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === AllPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === AllPoolsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return AllPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/all-pools-request',
            value: AllPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return AllPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsRequest',
            value: AllPoolsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllPoolsRequest.typeUrl, AllPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllPoolsRequest.aminoType, AllPoolsRequest.typeUrl);
function createBaseAllPoolsResponse() {
    return {
        pools: [],
    };
}
export const AllPoolsResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsResponse',
    aminoType: 'osmosis/poolmanager/all-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AllPoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.is(o.pools[0]) ||
                        CosmWasmPool.is(o.pools[0]) ||
                        Pool2.is(o.pools[0]) ||
                        Pool3.is(o.pools[0]) ||
                        Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AllPoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isSDK(o.pools[0]) ||
                        CosmWasmPool.isSDK(o.pools[0]) ||
                        Pool2.isSDK(o.pools[0]) ||
                        Pool3.isSDK(o.pools[0]) ||
                        Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AllPoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isAmino(o.pools[0]) ||
                        CosmWasmPool.isAmino(o.pools[0]) ||
                        Pool2.isAmino(o.pools[0]) ||
                        Pool3.isAmino(o.pools[0]) ||
                        Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
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
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllPoolsResponse();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AllPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/all-pools-response',
            value: AllPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return AllPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.AllPoolsResponse',
            value: AllPoolsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllPoolsResponse.typeUrl, AllPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllPoolsResponse.aminoType, AllPoolsResponse.typeUrl);
function createBaseListPoolsByDenomRequest() {
    return {
        denom: '',
    };
}
export const ListPoolsByDenomRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest',
    aminoType: 'osmosis/poolmanager/list-pools-by-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ListPoolsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ListPoolsByDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ListPoolsByDenomRequest.typeUrl ||
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
        return ListPoolsByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/list-pools-by-denom-request',
            value: ListPoolsByDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ListPoolsByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return ListPoolsByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest',
            value: ListPoolsByDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ListPoolsByDenomRequest.typeUrl, ListPoolsByDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListPoolsByDenomRequest.aminoType, ListPoolsByDenomRequest.typeUrl);
function createBaseListPoolsByDenomResponse() {
    return {
        pools: [],
    };
}
export const ListPoolsByDenomResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse',
    aminoType: 'osmosis/poolmanager/list-pools-by-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ListPoolsByDenomResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.is(o.pools[0]) ||
                        CosmWasmPool.is(o.pools[0]) ||
                        Pool2.is(o.pools[0]) ||
                        Pool3.is(o.pools[0]) ||
                        Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ListPoolsByDenomResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isSDK(o.pools[0]) ||
                        CosmWasmPool.isSDK(o.pools[0]) ||
                        Pool2.isSDK(o.pools[0]) ||
                        Pool3.isSDK(o.pools[0]) ||
                        Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ListPoolsByDenomResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isAmino(o.pools[0]) ||
                        CosmWasmPool.isAmino(o.pools[0]) ||
                        Pool2.isAmino(o.pools[0]) ||
                        Pool3.isAmino(o.pools[0]) ||
                        Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPoolsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
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
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListPoolsByDenomResponse();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListPoolsByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/list-pools-by-denom-response',
            value: ListPoolsByDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ListPoolsByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return ListPoolsByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse',
            value: ListPoolsByDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ListPoolsByDenomResponse.typeUrl, ListPoolsByDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListPoolsByDenomResponse.aminoType, ListPoolsByDenomResponse.typeUrl);
function createBaseSpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: '',
        quoteAssetDenom: '',
    };
}
export const SpotPriceRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceRequest',
    aminoType: 'osmosis/poolmanager/spot-price-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SpotPriceRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAssetDenom === 'string' &&
                    typeof o.quoteAssetDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return SpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/spot-price-request',
            value: SpotPriceRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return SpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceRequest',
            value: SpotPriceRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SpotPriceRequest.typeUrl, SpotPriceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SpotPriceRequest.aminoType, SpotPriceRequest.typeUrl);
function createBaseSpotPriceResponse() {
    return {
        spotPrice: '',
    };
}
export const SpotPriceResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceResponse',
    aminoType: 'osmosis/poolmanager/spot-price-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SpotPriceResponse.typeUrl ||
                typeof o.spotPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.spotPrice !== '') {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return SpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/spot-price-response',
            value: SpotPriceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return SpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SpotPriceResponse',
            value: SpotPriceResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SpotPriceResponse.typeUrl, SpotPriceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SpotPriceResponse.aminoType, SpotPriceResponse.typeUrl);
function createBaseTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const TotalPoolLiquidityRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest',
    aminoType: 'osmosis/poolmanager/total-pool-liquidity-request',
    is(o) {
        return (o &&
            (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl ||
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
        return TotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-pool-liquidity-request',
            value: TotalPoolLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return TotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest',
            value: TotalPoolLiquidityRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalPoolLiquidityRequest.typeUrl, TotalPoolLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalPoolLiquidityRequest.aminoType, TotalPoolLiquidityRequest.typeUrl);
function createBaseTotalPoolLiquidityResponse() {
    return {
        liquidity: [],
    };
}
export const TotalPoolLiquidityResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse',
    aminoType: 'osmosis/poolmanager/total-pool-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.isAmino(o.liquidity[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
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
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-pool-liquidity-response',
            value: TotalPoolLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return TotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse',
            value: TotalPoolLiquidityResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalPoolLiquidityResponse.typeUrl, TotalPoolLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalPoolLiquidityResponse.aminoType, TotalPoolLiquidityResponse.typeUrl);
function createBaseTotalLiquidityRequest() {
    return {};
}
export const TotalLiquidityRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityRequest',
    aminoType: 'osmosis/poolmanager/total-liquidity-request',
    is(o) {
        return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return TotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-liquidity-request',
            value: TotalLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return TotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityRequest',
            value: TotalLiquidityRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalLiquidityRequest.typeUrl, TotalLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalLiquidityRequest.aminoType, TotalLiquidityRequest.typeUrl);
function createBaseTotalLiquidityResponse() {
    return {
        liquidity: [],
    };
}
export const TotalLiquidityResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityResponse',
    aminoType: 'osmosis/poolmanager/total-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === TotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.isAmino(o.liquidity[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
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
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-liquidity-response',
            value: TotalLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return TotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalLiquidityResponse',
            value: TotalLiquidityResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalLiquidityResponse.typeUrl, TotalLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalLiquidityResponse.aminoType, TotalLiquidityResponse.typeUrl);
function createBaseTotalVolumeForPoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const TotalVolumeForPoolRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest',
    aminoType: 'osmosis/poolmanager/total-volume-for-pool-request',
    is(o) {
        return (o &&
            (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl ||
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
        return TotalVolumeForPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-volume-for-pool-request',
            value: TotalVolumeForPoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalVolumeForPoolRequest.decode(message.value);
    },
    toProto(message) {
        return TotalVolumeForPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest',
            value: TotalVolumeForPoolRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalVolumeForPoolRequest.typeUrl, TotalVolumeForPoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalVolumeForPoolRequest.aminoType, TotalVolumeForPoolRequest.typeUrl);
function createBaseTotalVolumeForPoolResponse() {
    return {
        volume: [],
    };
}
export const TotalVolumeForPoolResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse',
    aminoType: 'osmosis/poolmanager/total-volume-for-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl ||
                (Array.isArray(o.volume) && (!o.volume.length || Coin.is(o.volume[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl ||
                (Array.isArray(o.volume) &&
                    (!o.volume.length || Coin.isSDK(o.volume[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl ||
                (Array.isArray(o.volume) &&
                    (!o.volume.length || Coin.isAmino(o.volume[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.volume) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalVolumeForPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volume.push(Coin.decode(reader, reader.uint32()));
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
        message.volume = object.volume?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalVolumeForPoolResponse();
        message.volume = object.volume?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.volume) {
            obj.volume = message.volume.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.volume = message.volume;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TotalVolumeForPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/total-volume-for-pool-response',
            value: TotalVolumeForPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalVolumeForPoolResponse.decode(message.value);
    },
    toProto(message) {
        return TotalVolumeForPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse',
            value: TotalVolumeForPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalVolumeForPoolResponse.typeUrl, TotalVolumeForPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalVolumeForPoolResponse.aminoType, TotalVolumeForPoolResponse.typeUrl);
function createBaseTradingPairTakerFeeRequest() {
    return {
        denom0: '',
        denom1: '',
    };
}
export const TradingPairTakerFeeRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest',
    aminoType: 'osmosis/poolmanager/trading-pair-taker-fee-request',
    is(o) {
        return (o &&
            (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl ||
                (typeof o.denom0 === 'string' && typeof o.denom1 === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl ||
                (typeof o.denom_0 === 'string' && typeof o.denom_1 === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl ||
                (typeof o.denom_0 === 'string' && typeof o.denom_1 === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom0 !== '') {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== '') {
            writer.uint32(18).string(message.denom1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return TradingPairTakerFeeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/trading-pair-taker-fee-request',
            value: TradingPairTakerFeeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TradingPairTakerFeeRequest.decode(message.value);
    },
    toProto(message) {
        return TradingPairTakerFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest',
            value: TradingPairTakerFeeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TradingPairTakerFeeRequest.typeUrl, TradingPairTakerFeeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingPairTakerFeeRequest.aminoType, TradingPairTakerFeeRequest.typeUrl);
function createBaseTradingPairTakerFeeResponse() {
    return {
        takerFee: '',
    };
}
export const TradingPairTakerFeeResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse',
    aminoType: 'osmosis/poolmanager/trading-pair-taker-fee-response',
    is(o) {
        return (o &&
            (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl ||
                typeof o.takerFee === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl ||
                typeof o.taker_fee === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl ||
                typeof o.taker_fee === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.takerFee !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.takerFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingPairTakerFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return TradingPairTakerFeeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/trading-pair-taker-fee-response',
            value: TradingPairTakerFeeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TradingPairTakerFeeResponse.decode(message.value);
    },
    toProto(message) {
        return TradingPairTakerFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse',
            value: TradingPairTakerFeeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TradingPairTakerFeeResponse.typeUrl, TradingPairTakerFeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingPairTakerFeeResponse.aminoType, TradingPairTakerFeeResponse.typeUrl);
function createBaseEstimateTradeBasedOnPriceImpactRequest() {
    return {
        fromCoin: Coin.fromPartial({}),
        toCoinDenom: '',
        poolId: BigInt(0),
        maxPriceImpact: '',
        externalPrice: '',
    };
}
export const EstimateTradeBasedOnPriceImpactRequest = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest',
    aminoType: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-request',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
                (Coin.is(o.fromCoin) &&
                    typeof o.toCoinDenom === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.maxPriceImpact === 'string' &&
                    typeof o.externalPrice === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
                (Coin.isSDK(o.from_coin) &&
                    typeof o.to_coin_denom === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.max_price_impact === 'string' &&
                    typeof o.external_price === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
                (Coin.isAmino(o.from_coin) &&
                    typeof o.to_coin_denom === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.max_price_impact === 'string' &&
                    typeof o.external_price === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.fromCoin !== undefined) {
            Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
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
                .string(Decimal.fromUserInput(message.maxPriceImpact, 18).atomics);
        }
        if (message.externalPrice !== '') {
            writer
                .uint32(42)
                .string(Decimal.fromUserInput(message.externalPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.toCoinDenom = reader.string();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.maxPriceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.externalPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
                ? Coin.fromPartial(object.fromCoin)
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
            message.fromCoin = Coin.fromAmino(object.from_coin);
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
            ? Coin.toAmino(message.fromCoin)
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
        return EstimateTradeBasedOnPriceImpactRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-request',
            value: EstimateTradeBasedOnPriceImpactRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateTradeBasedOnPriceImpactRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateTradeBasedOnPriceImpactRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest',
            value: EstimateTradeBasedOnPriceImpactRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateTradeBasedOnPriceImpactRequest.typeUrl, EstimateTradeBasedOnPriceImpactRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateTradeBasedOnPriceImpactRequest.aminoType, EstimateTradeBasedOnPriceImpactRequest.typeUrl);
function createBaseEstimateTradeBasedOnPriceImpactResponse() {
    return {
        inputCoin: Coin.fromPartial({}),
        outputCoin: Coin.fromPartial({}),
    };
}
export const EstimateTradeBasedOnPriceImpactResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse',
    aminoType: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-response',
    is(o) {
        return (o &&
            (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
                (Coin.is(o.inputCoin) && Coin.is(o.outputCoin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
                (Coin.isSDK(o.input_coin) && Coin.isSDK(o.output_coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
                (Coin.isAmino(o.input_coin) && Coin.isAmino(o.output_coin))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.inputCoin !== undefined) {
            Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.outputCoin !== undefined) {
            Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.outputCoin = Coin.decode(reader, reader.uint32());
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
                ? Coin.fromPartial(object.inputCoin)
                : undefined;
        message.outputCoin =
            object.outputCoin !== undefined && object.outputCoin !== null
                ? Coin.fromPartial(object.outputCoin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
        if (object.input_coin !== undefined && object.input_coin !== null) {
            message.inputCoin = Coin.fromAmino(object.input_coin);
        }
        if (object.output_coin !== undefined && object.output_coin !== null) {
            message.outputCoin = Coin.fromAmino(object.output_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.input_coin = message.inputCoin
            ? Coin.toAmino(message.inputCoin)
            : undefined;
        obj.output_coin = message.outputCoin
            ? Coin.toAmino(message.outputCoin)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateTradeBasedOnPriceImpactResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/estimate-trade-based-on-price-impact-response',
            value: EstimateTradeBasedOnPriceImpactResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateTradeBasedOnPriceImpactResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateTradeBasedOnPriceImpactResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse',
            value: EstimateTradeBasedOnPriceImpactResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateTradeBasedOnPriceImpactResponse.typeUrl, EstimateTradeBasedOnPriceImpactResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateTradeBasedOnPriceImpactResponse.aminoType, EstimateTradeBasedOnPriceImpactResponse.typeUrl);
