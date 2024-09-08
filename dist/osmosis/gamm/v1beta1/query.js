"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCFMMConcentratedPoolLinksResponse = exports.QueryCFMMConcentratedPoolLinksRequest = exports.QueryConcentratedPoolIdLinkFromCFMMResponse = exports.QueryConcentratedPoolIdLinkFromCFMMRequest = exports.QueryTotalLiquidityResponse = exports.QueryTotalLiquidityRequest = exports.QuerySwapExactAmountOutResponse = exports.QuerySwapExactAmountOutRequest = exports.QuerySwapExactAmountInResponse = exports.QuerySwapExactAmountInRequest = exports.QuerySpotPriceResponse = exports.QueryPoolsWithFilterResponse = exports.QueryPoolsWithFilterRequest = exports.QuerySpotPriceRequest = exports.QueryCalcJoinPoolNoSwapSharesResponse = exports.QueryCalcJoinPoolNoSwapSharesRequest = exports.QueryTotalSharesResponse = exports.QueryTotalSharesRequest = exports.QueryTotalPoolLiquidityResponse = exports.QueryTotalPoolLiquidityRequest = exports.QueryPoolParamsResponse = exports.QueryPoolParamsRequest = exports.QueryCalcExitPoolCoinsFromSharesResponse = exports.QueryCalcExitPoolCoinsFromSharesRequest = exports.QueryCalcJoinPoolSharesResponse = exports.QueryCalcJoinPoolSharesRequest = exports.QueryPoolTypeResponse = exports.QueryPoolTypeRequest = exports.QueryNumPoolsResponse = exports.QueryNumPoolsRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const swap_route_1 = require("../../poolmanager/v1beta1/swap_route");
const any_1 = require("../../../google/protobuf/any");
const shared_1 = require("./shared");
const pool_1 = require("../../concentratedliquidity/v1beta1/pool");
const pool_2 = require("../../cosmwasmpool/v1beta1/model/pool");
const stableswap_pool_1 = require("../poolmodels/stableswap/v1beta1/stableswap_pool");
const balancerPool_1 = require("./balancerPool");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryPoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolRequest',
    aminoType: 'osmosis/gamm/query-pool-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolRequest.typeUrl || typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
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
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolRequest();
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
        return exports.QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-request',
            value: exports.QueryPoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolRequest',
            value: exports.QueryPoolRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolRequest.typeUrl, exports.QueryPoolRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolRequest.aminoType, exports.QueryPoolRequest.typeUrl);
function createBaseQueryPoolResponse() {
    return {
        pool: undefined,
    };
}
exports.QueryPoolResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolResponse',
    aminoType: 'osmosis/gamm/query-pool-response',
    is(o) {
        return o && o.$typeUrl === exports.QueryPoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryPoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryPoolResponse.typeUrl;
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
        const message = createBaseQueryPoolResponse();
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
        const message = createBaseQueryPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.GlobalDecoderRegistry.fromPartial(object.pool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolResponse();
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
        return exports.QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-response',
            value: exports.QueryPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolResponse',
            value: exports.QueryPoolResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolResponse.typeUrl, exports.QueryPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolResponse.aminoType, exports.QueryPoolResponse.typeUrl);
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined,
    };
}
exports.QueryPoolsRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsRequest',
    aminoType: 'osmosis/gamm/query-pools-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryPoolsRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination
            ? pagination_1.PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-request',
            value: exports.QueryPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsRequest',
            value: exports.QueryPoolsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolsRequest.typeUrl, exports.QueryPoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolsRequest.aminoType, exports.QueryPoolsRequest.typeUrl);
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.QueryPoolsResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsResponse',
    aminoType: 'osmosis/gamm/query-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolsResponse.typeUrl ||
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
            (o.$typeUrl === exports.QueryPoolsResponse.typeUrl ||
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
            (o.$typeUrl === exports.QueryPoolsResponse.typeUrl ||
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
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination
            ? pagination_1.PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-response',
            value: exports.QueryPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsResponse',
            value: exports.QueryPoolsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolsResponse.typeUrl, exports.QueryPoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolsResponse.aminoType, exports.QueryPoolsResponse.typeUrl);
function createBaseQueryNumPoolsRequest() {
    return {};
}
exports.QueryNumPoolsRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsRequest',
    aminoType: 'osmosis/gamm/query-num-pools-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryNumPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryNumPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryNumPoolsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsRequest();
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
        const message = createBaseQueryNumPoolsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryNumPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-num-pools-request',
            value: exports.QueryNumPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsRequest',
            value: exports.QueryNumPoolsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNumPoolsRequest.typeUrl, exports.QueryNumPoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNumPoolsRequest.aminoType, exports.QueryNumPoolsRequest.typeUrl);
function createBaseQueryNumPoolsResponse() {
    return {
        numPools: BigInt(0),
    };
}
exports.QueryNumPoolsResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsResponse',
    aminoType: 'osmosis/gamm/query-num-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryNumPoolsResponse.typeUrl ||
                typeof o.numPools === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryNumPoolsResponse.typeUrl ||
                typeof o.num_pools === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryNumPoolsResponse.typeUrl ||
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
        const message = createBaseQueryNumPoolsResponse();
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
        const message = createBaseQueryNumPoolsResponse();
        message.numPools =
            object.numPools !== undefined && object.numPools !== null
                ? BigInt(object.numPools.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNumPoolsResponse();
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
        return exports.QueryNumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-num-pools-response',
            value: exports.QueryNumPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsResponse',
            value: exports.QueryNumPoolsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryNumPoolsResponse.typeUrl, exports.QueryNumPoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryNumPoolsResponse.aminoType, exports.QueryNumPoolsResponse.typeUrl);
function createBaseQueryPoolTypeRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolTypeRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeRequest',
    aminoType: 'osmosis/gamm/query-pool-type-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolTypeRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolTypeRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolTypeRequest.typeUrl ||
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
        const message = createBaseQueryPoolTypeRequest();
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
        const message = createBaseQueryPoolTypeRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolTypeRequest();
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
        return exports.QueryPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-type-request',
            value: exports.QueryPoolTypeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeRequest',
            value: exports.QueryPoolTypeRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolTypeRequest.typeUrl, exports.QueryPoolTypeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolTypeRequest.aminoType, exports.QueryPoolTypeRequest.typeUrl);
function createBaseQueryPoolTypeResponse() {
    return {
        poolType: '',
    };
}
exports.QueryPoolTypeResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeResponse',
    aminoType: 'osmosis/gamm/query-pool-type-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolTypeResponse.typeUrl ||
                typeof o.poolType === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolTypeResponse.typeUrl ||
                typeof o.pool_type === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolTypeResponse.typeUrl ||
                typeof o.pool_type === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolType !== '') {
            writer.uint32(10).string(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolTypeResponse();
        message.poolType = object.poolType ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolTypeResponse();
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_type = message.poolType === '' ? undefined : message.poolType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-type-response',
            value: exports.QueryPoolTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeResponse',
            value: exports.QueryPoolTypeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolTypeResponse.typeUrl, exports.QueryPoolTypeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolTypeResponse.aminoType, exports.QueryPoolTypeResponse.typeUrl);
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: [],
    };
}
exports.QueryCalcJoinPoolSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest',
    aminoType: 'osmosis/gamm/query-calc-join-pool-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolSharesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.tokensIn) &&
                    (!o.tokensIn.length || coin_1.Coin.is(o.tokensIn[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || coin_1.Coin.isSDK(o.tokens_in[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || coin_1.Coin.isAmino(o.tokens_in[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokensIn = object.tokensIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-shares-request',
            value: exports.QueryCalcJoinPoolSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest',
            value: exports.QueryCalcJoinPoolSharesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalcJoinPoolSharesRequest.typeUrl, exports.QueryCalcJoinPoolSharesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCalcJoinPoolSharesRequest.aminoType, exports.QueryCalcJoinPoolSharesRequest.typeUrl);
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        shareOutAmount: '',
        tokensOut: [],
    };
}
exports.QueryCalcJoinPoolSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse',
    aminoType: 'osmosis/gamm/query-calc-join-pool-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolSharesResponse.typeUrl ||
                (typeof o.shareOutAmount === 'string' &&
                    Array.isArray(o.tokensOut) &&
                    (!o.tokensOut.length || coin_1.Coin.is(o.tokensOut[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolSharesResponse.typeUrl ||
                (typeof o.share_out_amount === 'string' &&
                    Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || coin_1.Coin.isSDK(o.tokens_out[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolSharesResponse.typeUrl ||
                (typeof o.share_out_amount === 'string' &&
                    Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || coin_1.Coin.isAmino(o.tokens_out[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== '') {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        message.shareOutAmount = object.shareOutAmount ?? '';
        message.tokensOut = object.tokensOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        if (object.share_out_amount !== undefined &&
            object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokensOut = object.tokens_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount =
            message.shareOutAmount === '' ? undefined : message.shareOutAmount;
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-shares-response',
            value: exports.QueryCalcJoinPoolSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse',
            value: exports.QueryCalcJoinPoolSharesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalcJoinPoolSharesResponse.typeUrl, exports.QueryCalcJoinPoolSharesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCalcJoinPoolSharesResponse.aminoType, exports.QueryCalcJoinPoolSharesResponse.typeUrl);
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        poolId: BigInt(0),
        shareInAmount: '',
    };
}
exports.QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest',
    aminoType: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcExitPoolCoinsFromSharesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.shareInAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcExitPoolCoinsFromSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.share_in_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcExitPoolCoinsFromSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.share_in_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.shareInAmount !== '') {
            writer.uint32(18).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.shareInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.shareInAmount = object.shareInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.share_in_amount !== undefined &&
            object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.share_in_amount =
            message.shareInAmount === '' ? undefined : message.shareInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-request',
            value: exports.QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest',
            value: exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalcExitPoolCoinsFromSharesRequest.typeUrl, exports.QueryCalcExitPoolCoinsFromSharesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCalcExitPoolCoinsFromSharesRequest.aminoType, exports.QueryCalcExitPoolCoinsFromSharesRequest.typeUrl);
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokensOut: [],
    };
}
exports.QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse',
    aminoType: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcExitPoolCoinsFromSharesResponse.typeUrl ||
                (Array.isArray(o.tokensOut) &&
                    (!o.tokensOut.length || coin_1.Coin.is(o.tokensOut[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcExitPoolCoinsFromSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || coin_1.Coin.isSDK(o.tokens_out[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcExitPoolCoinsFromSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || coin_1.Coin.isAmino(o.tokens_out[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokensOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-response',
            value: exports.QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse',
            value: exports.QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalcExitPoolCoinsFromSharesResponse.typeUrl, exports.QueryCalcExitPoolCoinsFromSharesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCalcExitPoolCoinsFromSharesResponse.aminoType, exports.QueryCalcExitPoolCoinsFromSharesResponse.typeUrl);
function createBaseQueryPoolParamsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryPoolParamsRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsRequest',
    aminoType: 'osmosis/gamm/query-pool-params-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolParamsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolParamsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolParamsRequest.typeUrl ||
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
        const message = createBaseQueryPoolParamsRequest();
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
        const message = createBaseQueryPoolParamsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolParamsRequest();
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
        return exports.QueryPoolParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-params-request',
            value: exports.QueryPoolParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsRequest',
            value: exports.QueryPoolParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolParamsRequest.typeUrl, exports.QueryPoolParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolParamsRequest.aminoType, exports.QueryPoolParamsRequest.typeUrl);
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined,
    };
}
exports.QueryPoolParamsResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsResponse',
    aminoType: 'osmosis/gamm/query-pool-params-response',
    is(o) {
        return o && o.$typeUrl === exports.QueryPoolParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryPoolParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryPoolParamsResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            any_1.Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? any_1.Any.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = any_1.Any.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? any_1.Any.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-params-response',
            value: exports.QueryPoolParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsResponse',
            value: exports.QueryPoolParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolParamsResponse.typeUrl, exports.QueryPoolParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolParamsResponse.aminoType, exports.QueryPoolParamsResponse.typeUrl);
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryTotalPoolLiquidityRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest',
    aminoType: 'osmosis/gamm/query-total-pool-liquidity-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalPoolLiquidityRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalPoolLiquidityRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalPoolLiquidityRequest.typeUrl ||
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
        const message = createBaseQueryTotalPoolLiquidityRequest();
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
        const message = createBaseQueryTotalPoolLiquidityRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalPoolLiquidityRequest();
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
        return exports.QueryTotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-pool-liquidity-request',
            value: exports.QueryTotalPoolLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest',
            value: exports.QueryTotalPoolLiquidityRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalPoolLiquidityRequest.typeUrl, exports.QueryTotalPoolLiquidityRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalPoolLiquidityRequest.aminoType, exports.QueryTotalPoolLiquidityRequest.typeUrl);
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.QueryTotalPoolLiquidityResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse',
    aminoType: 'osmosis/gamm/query-total-pool-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalPoolLiquidityResponse.typeUrl ||
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
        const message = createBaseQueryTotalPoolLiquidityResponse();
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
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
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
        return exports.QueryTotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-pool-liquidity-response',
            value: exports.QueryTotalPoolLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse',
            value: exports.QueryTotalPoolLiquidityResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalPoolLiquidityResponse.typeUrl, exports.QueryTotalPoolLiquidityResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalPoolLiquidityResponse.aminoType, exports.QueryTotalPoolLiquidityResponse.typeUrl);
function createBaseQueryTotalSharesRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.QueryTotalSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesRequest',
    aminoType: 'osmosis/gamm/query-total-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalSharesRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalSharesRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalSharesRequest.typeUrl ||
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
        const message = createBaseQueryTotalSharesRequest();
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
        const message = createBaseQueryTotalSharesRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSharesRequest();
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
        return exports.QueryTotalSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-shares-request',
            value: exports.QueryTotalSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesRequest',
            value: exports.QueryTotalSharesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalSharesRequest.typeUrl, exports.QueryTotalSharesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalSharesRequest.aminoType, exports.QueryTotalSharesRequest.typeUrl);
function createBaseQueryTotalSharesResponse() {
    return {
        totalShares: coin_1.Coin.fromPartial({}),
    };
}
exports.QueryTotalSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesResponse',
    aminoType: 'osmosis/gamm/query-total-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalSharesResponse.typeUrl ||
                coin_1.Coin.is(o.totalShares)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalSharesResponse.typeUrl ||
                coin_1.Coin.isSDK(o.total_shares)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalSharesResponse.typeUrl ||
                coin_1.Coin.isAmino(o.total_shares)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalShares !== undefined) {
            coin_1.Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSharesResponse();
        message.totalShares =
            object.totalShares !== undefined && object.totalShares !== null
                ? coin_1.Coin.fromPartial(object.totalShares)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSharesResponse();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = coin_1.Coin.fromAmino(object.total_shares);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares = message.totalShares
            ? coin_1.Coin.toAmino(message.totalShares)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-shares-response',
            value: exports.QueryTotalSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesResponse',
            value: exports.QueryTotalSharesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalSharesResponse.typeUrl, exports.QueryTotalSharesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalSharesResponse.aminoType, exports.QueryTotalSharesResponse.typeUrl);
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: [],
    };
}
exports.QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest',
    aminoType: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolNoSwapSharesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.tokensIn) &&
                    (!o.tokensIn.length || coin_1.Coin.is(o.tokensIn[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolNoSwapSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || coin_1.Coin.isSDK(o.tokens_in[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolNoSwapSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || coin_1.Coin.isAmino(o.tokens_in[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokensIn = object.tokensIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-request',
            value: exports.QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest',
            value: exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalcJoinPoolNoSwapSharesRequest.typeUrl, exports.QueryCalcJoinPoolNoSwapSharesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCalcJoinPoolNoSwapSharesRequest.aminoType, exports.QueryCalcJoinPoolNoSwapSharesRequest.typeUrl);
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokensOut: [],
        sharesOut: '',
    };
}
exports.QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse',
    aminoType: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolNoSwapSharesResponse.typeUrl ||
                (Array.isArray(o.tokensOut) &&
                    (!o.tokensOut.length || coin_1.Coin.is(o.tokensOut[0])) &&
                    typeof o.sharesOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolNoSwapSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || coin_1.Coin.isSDK(o.tokens_out[0])) &&
                    typeof o.shares_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryCalcJoinPoolNoSwapSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || coin_1.Coin.isAmino(o.tokens_out[0])) &&
                    typeof o.shares_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharesOut !== '') {
            writer.uint32(18).string(message.sharesOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sharesOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokensOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.sharesOut = object.sharesOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.shares_out !== undefined && object.shares_out !== null) {
            message.sharesOut = object.shares_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        obj.shares_out = message.sharesOut === '' ? undefined : message.sharesOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-response',
            value: exports.QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse',
            value: exports.QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCalcJoinPoolNoSwapSharesResponse.typeUrl, exports.QueryCalcJoinPoolNoSwapSharesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCalcJoinPoolNoSwapSharesResponse.aminoType, exports.QueryCalcJoinPoolNoSwapSharesResponse.typeUrl);
function createBaseQuerySpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: '',
        quoteAssetDenom: '',
    };
}
exports.QuerySpotPriceRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceRequest',
    aminoType: 'osmosis/gamm/query-spot-price-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySpotPriceRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAssetDenom === 'string' &&
                    typeof o.quoteAssetDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySpotPriceRequest.typeUrl ||
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
        const message = createBaseQuerySpotPriceRequest();
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
        const message = createBaseQuerySpotPriceRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAssetDenom = object.baseAssetDenom ?? '';
        message.quoteAssetDenom = object.quoteAssetDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceRequest();
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
        return exports.QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-spot-price-request',
            value: exports.QuerySpotPriceRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceRequest',
            value: exports.QuerySpotPriceRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySpotPriceRequest.typeUrl, exports.QuerySpotPriceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySpotPriceRequest.aminoType, exports.QuerySpotPriceRequest.typeUrl);
function createBaseQueryPoolsWithFilterRequest() {
    return {
        minLiquidity: '',
        poolType: '',
        pagination: undefined,
    };
}
exports.QueryPoolsWithFilterRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest',
    aminoType: 'osmosis/gamm/query-pools-with-filter-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolsWithFilterRequest.typeUrl ||
                (typeof o.minLiquidity === 'string' && typeof o.poolType === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolsWithFilterRequest.typeUrl ||
                (typeof o.min_liquidity === 'string' &&
                    typeof o.pool_type === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolsWithFilterRequest.typeUrl ||
                (typeof o.min_liquidity === 'string' &&
                    typeof o.pool_type === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minLiquidity !== '') {
            writer.uint32(10).string(message.minLiquidity);
        }
        if (message.poolType !== '') {
            writer.uint32(18).string(message.poolType);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minLiquidity = reader.string();
                    break;
                case 2:
                    message.poolType = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        message.minLiquidity = object.minLiquidity ?? '';
        message.poolType = object.poolType ?? '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        if (object.min_liquidity !== undefined && object.min_liquidity !== null) {
            message.minLiquidity = object.min_liquidity;
        }
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.min_liquidity =
            message.minLiquidity === '' ? undefined : message.minLiquidity;
        obj.pool_type = message.poolType === '' ? undefined : message.poolType;
        obj.pagination = message.pagination
            ? pagination_1.PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsWithFilterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-with-filter-request',
            value: exports.QueryPoolsWithFilterRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsWithFilterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsWithFilterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest',
            value: exports.QueryPoolsWithFilterRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolsWithFilterRequest.typeUrl, exports.QueryPoolsWithFilterRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolsWithFilterRequest.aminoType, exports.QueryPoolsWithFilterRequest.typeUrl);
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.QueryPoolsWithFilterResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse',
    aminoType: 'osmosis/gamm/query-pools-with-filter-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryPoolsWithFilterResponse.typeUrl ||
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
            (o.$typeUrl === exports.QueryPoolsWithFilterResponse.typeUrl ||
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
            (o.$typeUrl === exports.QueryPoolsWithFilterResponse.typeUrl ||
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
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination
            ? pagination_1.PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsWithFilterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-with-filter-response',
            value: exports.QueryPoolsWithFilterResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsWithFilterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsWithFilterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse',
            value: exports.QueryPoolsWithFilterResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolsWithFilterResponse.typeUrl, exports.QueryPoolsWithFilterResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolsWithFilterResponse.aminoType, exports.QueryPoolsWithFilterResponse.typeUrl);
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: '',
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceResponse',
    aminoType: 'osmosis/gamm/query-spot-price-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySpotPriceResponse.typeUrl ||
                typeof o.spotPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySpotPriceResponse.typeUrl ||
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
        const message = createBaseQuerySpotPriceResponse();
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
        const message = createBaseQuerySpotPriceResponse();
        message.spotPrice = object.spotPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceResponse();
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
        return exports.QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-spot-price-response',
            value: exports.QuerySpotPriceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceResponse',
            value: exports.QuerySpotPriceResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySpotPriceResponse.typeUrl, exports.QuerySpotPriceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySpotPriceResponse.aminoType, exports.QuerySpotPriceResponse.typeUrl);
function createBaseQuerySwapExactAmountInRequest() {
    return {
        sender: '',
        poolId: BigInt(0),
        tokenIn: '',
        routes: [],
    };
}
exports.QuerySwapExactAmountInRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountInRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.is(o.routes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountInRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.isSDK(o.routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountInRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.isAmino(o.routes[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
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
        const message = createBaseQuerySwapExactAmountInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
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
        const message = createBaseQuerySwapExactAmountInRequest();
        message.sender = object.sender ?? '';
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
        const message = createBaseQuerySwapExactAmountInRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
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
        obj.sender = message.sender === '' ? undefined : message.sender;
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
        return exports.QuerySwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-in-request',
            value: exports.QuerySwapExactAmountInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest',
            value: exports.QuerySwapExactAmountInRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySwapExactAmountInRequest.typeUrl, exports.QuerySwapExactAmountInRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySwapExactAmountInRequest.aminoType, exports.QuerySwapExactAmountInRequest.typeUrl);
function createBaseQuerySwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
exports.QuerySwapExactAmountInResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountInResponse.typeUrl ||
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
        const message = createBaseQuerySwapExactAmountInResponse();
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
        const message = createBaseQuerySwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapExactAmountInResponse();
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
        return exports.QuerySwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-in-response',
            value: exports.QuerySwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse',
            value: exports.QuerySwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySwapExactAmountInResponse.typeUrl, exports.QuerySwapExactAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySwapExactAmountInResponse.aminoType, exports.QuerySwapExactAmountInResponse.typeUrl);
function createBaseQuerySwapExactAmountOutRequest() {
    return {
        sender: '',
        poolId: BigInt(0),
        routes: [],
        tokenOut: '',
    };
}
exports.QuerySwapExactAmountOutRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountOutRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.is(o.routes[0])) &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountOutRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.isSDK(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountOutRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.isAmino(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
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
        const message = createBaseQuerySwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
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
        const message = createBaseQuerySwapExactAmountOutRequest();
        message.sender = object.sender ?? '';
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
        const message = createBaseQuerySwapExactAmountOutRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
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
        obj.sender = message.sender === '' ? undefined : message.sender;
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
        return exports.QuerySwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-out-request',
            value: exports.QuerySwapExactAmountOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest',
            value: exports.QuerySwapExactAmountOutRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySwapExactAmountOutRequest.typeUrl, exports.QuerySwapExactAmountOutRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySwapExactAmountOutRequest.aminoType, exports.QuerySwapExactAmountOutRequest.typeUrl);
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
exports.QuerySwapExactAmountOutResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QuerySwapExactAmountOutResponse.typeUrl ||
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
        const message = createBaseQuerySwapExactAmountOutResponse();
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
        const message = createBaseQuerySwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapExactAmountOutResponse();
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
        return exports.QuerySwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-out-response',
            value: exports.QuerySwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse',
            value: exports.QuerySwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QuerySwapExactAmountOutResponse.typeUrl, exports.QuerySwapExactAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QuerySwapExactAmountOutResponse.aminoType, exports.QuerySwapExactAmountOutResponse.typeUrl);
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
exports.QueryTotalLiquidityRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest',
    aminoType: 'osmosis/gamm/query-total-liquidity-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryTotalLiquidityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryTotalLiquidityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryTotalLiquidityRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityRequest();
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
        const message = createBaseQueryTotalLiquidityRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTotalLiquidityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-liquidity-request',
            value: exports.QueryTotalLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest',
            value: exports.QueryTotalLiquidityRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalLiquidityRequest.typeUrl, exports.QueryTotalLiquidityRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalLiquidityRequest.aminoType, exports.QueryTotalLiquidityRequest.typeUrl);
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: [],
    };
}
exports.QueryTotalLiquidityResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse',
    aminoType: 'osmosis/gamm/query-total-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || coin_1.Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryTotalLiquidityResponse.typeUrl ||
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
        const message = createBaseQueryTotalLiquidityResponse();
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
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalLiquidityResponse();
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
        return exports.QueryTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-liquidity-response',
            value: exports.QueryTotalLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse',
            value: exports.QueryTotalLiquidityResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTotalLiquidityResponse.typeUrl, exports.QueryTotalLiquidityResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryTotalLiquidityResponse.aminoType, exports.QueryTotalLiquidityResponse.typeUrl);
function createBaseQueryConcentratedPoolIdLinkFromCFMMRequest() {
    return {
        cfmmPoolId: BigInt(0),
    };
}
exports.QueryConcentratedPoolIdLinkFromCFMMRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest',
    aminoType: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl ||
                typeof o.cfmmPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cfmmPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.cfmmPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cfmmPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
        message.cfmmPoolId =
            object.cfmmPoolId !== undefined && object.cfmmPoolId !== null
                ? BigInt(object.cfmmPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
        if (object.cfmm_pool_id !== undefined && object.cfmm_pool_id !== null) {
            message.cfmmPoolId = BigInt(object.cfmm_pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cfmm_pool_id =
            message.cfmmPoolId !== BigInt(0)
                ? message.cfmmPoolId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConcentratedPoolIdLinkFromCFMMRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-request',
            value: exports.QueryConcentratedPoolIdLinkFromCFMMRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConcentratedPoolIdLinkFromCFMMRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConcentratedPoolIdLinkFromCFMMRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest',
            value: exports.QueryConcentratedPoolIdLinkFromCFMMRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl, exports.QueryConcentratedPoolIdLinkFromCFMMRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConcentratedPoolIdLinkFromCFMMRequest.aminoType, exports.QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl);
function createBaseQueryConcentratedPoolIdLinkFromCFMMResponse() {
    return {
        concentratedPoolId: BigInt(0),
    };
}
exports.QueryConcentratedPoolIdLinkFromCFMMResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse',
    aminoType: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl ||
                typeof o.concentratedPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.concentratedPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.concentratedPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.concentratedPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
        message.concentratedPoolId =
            object.concentratedPoolId !== undefined &&
                object.concentratedPoolId !== null
                ? BigInt(object.concentratedPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
        if (object.concentrated_pool_id !== undefined &&
            object.concentrated_pool_id !== null) {
            message.concentratedPoolId = BigInt(object.concentrated_pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.concentrated_pool_id =
            message.concentratedPoolId !== BigInt(0)
                ? message.concentratedPoolId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConcentratedPoolIdLinkFromCFMMResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-response',
            value: exports.QueryConcentratedPoolIdLinkFromCFMMResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConcentratedPoolIdLinkFromCFMMResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConcentratedPoolIdLinkFromCFMMResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse',
            value: exports.QueryConcentratedPoolIdLinkFromCFMMResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl, exports.QueryConcentratedPoolIdLinkFromCFMMResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConcentratedPoolIdLinkFromCFMMResponse.aminoType, exports.QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl);
function createBaseQueryCFMMConcentratedPoolLinksRequest() {
    return {};
}
exports.QueryCFMMConcentratedPoolLinksRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest',
    aminoType: 'osmosis/gamm/query-cfmm-concentrated-pool-links-request',
    is(o) {
        return o && o.$typeUrl === exports.QueryCFMMConcentratedPoolLinksRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryCFMMConcentratedPoolLinksRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryCFMMConcentratedPoolLinksRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
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
        const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCFMMConcentratedPoolLinksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-cfmm-concentrated-pool-links-request',
            value: exports.QueryCFMMConcentratedPoolLinksRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCFMMConcentratedPoolLinksRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCFMMConcentratedPoolLinksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest',
            value: exports.QueryCFMMConcentratedPoolLinksRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCFMMConcentratedPoolLinksRequest.typeUrl, exports.QueryCFMMConcentratedPoolLinksRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCFMMConcentratedPoolLinksRequest.aminoType, exports.QueryCFMMConcentratedPoolLinksRequest.typeUrl);
function createBaseQueryCFMMConcentratedPoolLinksResponse() {
    return {
        migrationRecords: undefined,
    };
}
exports.QueryCFMMConcentratedPoolLinksResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse',
    aminoType: 'osmosis/gamm/query-cfmm-concentrated-pool-links-response',
    is(o) {
        return o && o.$typeUrl === exports.QueryCFMMConcentratedPoolLinksResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryCFMMConcentratedPoolLinksResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryCFMMConcentratedPoolLinksResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.migrationRecords !== undefined) {
            shared_1.MigrationRecords.encode(message.migrationRecords, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.migrationRecords = shared_1.MigrationRecords.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        message.migrationRecords =
            object.migrationRecords !== undefined && object.migrationRecords !== null
                ? shared_1.MigrationRecords.fromPartial(object.migrationRecords)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        if (object.migration_records !== undefined &&
            object.migration_records !== null) {
            message.migrationRecords = shared_1.MigrationRecords.fromAmino(object.migration_records);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.migration_records = message.migrationRecords
            ? shared_1.MigrationRecords.toAmino(message.migrationRecords)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCFMMConcentratedPoolLinksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-cfmm-concentrated-pool-links-response',
            value: exports.QueryCFMMConcentratedPoolLinksResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCFMMConcentratedPoolLinksResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCFMMConcentratedPoolLinksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse',
            value: exports.QueryCFMMConcentratedPoolLinksResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCFMMConcentratedPoolLinksResponse.typeUrl, exports.QueryCFMMConcentratedPoolLinksResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryCFMMConcentratedPoolLinksResponse.aminoType, exports.QueryCFMMConcentratedPoolLinksResponse.typeUrl);
