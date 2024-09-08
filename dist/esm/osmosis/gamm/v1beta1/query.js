//@ts-nocheck
import { PageRequest, PageResponse, } from '../../../cosmos/base/query/v1beta1/pagination';
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { SwapAmountInRoute, SwapAmountOutRoute, } from '../../poolmanager/v1beta1/swap_route';
import { Any, } from '../../../google/protobuf/any';
import { MigrationRecords, } from './shared';
import { Pool as Pool1 } from '../../concentratedliquidity/v1beta1/pool';
import { CosmWasmPool, } from '../../cosmwasmpool/v1beta1/model/pool';
import { Pool as Pool2 } from '../poolmodels/stableswap/v1beta1/stableswap_pool';
import { Pool as Pool3 } from './balancerPool';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseQueryPoolRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const QueryPoolRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolRequest',
    aminoType: 'osmosis/gamm/query-pool-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === 'bigint'));
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
        return QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-request',
            value: QueryPoolRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolRequest',
            value: QueryPoolRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolRequest.typeUrl, QueryPoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolRequest.aminoType, QueryPoolRequest.typeUrl);
function createBaseQueryPoolResponse() {
    return {
        pool: undefined,
    };
}
export const QueryPoolResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolResponse',
    aminoType: 'osmosis/gamm/query-pool-response',
    is(o) {
        return o && o.$typeUrl === QueryPoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryPoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryPoolResponse.typeUrl;
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
        const message = createBaseQueryPoolResponse();
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
        const message = createBaseQueryPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? GlobalDecoderRegistry.fromPartial(object.pool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolResponse();
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
        return QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-response',
            value: QueryPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolResponse',
            value: QueryPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolResponse.typeUrl, QueryPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolResponse.aminoType, QueryPoolResponse.typeUrl);
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryPoolsRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsRequest',
    aminoType: 'osmosis/gamm/query-pools-request',
    is(o) {
        return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-request',
            value: QueryPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsRequest',
            value: QueryPoolsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolsRequest.typeUrl, QueryPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolsRequest.aminoType, QueryPoolsRequest.typeUrl);
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
export const QueryPoolsResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsResponse',
    aminoType: 'osmosis/gamm/query-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolsResponse.typeUrl ||
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
            (o.$typeUrl === QueryPoolsResponse.typeUrl ||
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
            (o.$typeUrl === QueryPoolsResponse.typeUrl ||
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-response',
            value: QueryPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsResponse',
            value: QueryPoolsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolsResponse.typeUrl, QueryPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolsResponse.aminoType, QueryPoolsResponse.typeUrl);
function createBaseQueryNumPoolsRequest() {
    return {};
}
export const QueryNumPoolsRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsRequest',
    aminoType: 'osmosis/gamm/query-num-pools-request',
    is(o) {
        return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryNumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-num-pools-request',
            value: QueryNumPoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryNumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsRequest',
            value: QueryNumPoolsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryNumPoolsRequest.typeUrl, QueryNumPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNumPoolsRequest.aminoType, QueryNumPoolsRequest.typeUrl);
function createBaseQueryNumPoolsResponse() {
    return {
        numPools: BigInt(0),
    };
}
export const QueryNumPoolsResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsResponse',
    aminoType: 'osmosis/gamm/query-num-pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryNumPoolsResponse.typeUrl ||
                typeof o.numPools === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryNumPoolsResponse.typeUrl ||
                typeof o.num_pools === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryNumPoolsResponse.typeUrl ||
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
        return QueryNumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-num-pools-response',
            value: QueryNumPoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryNumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryNumPoolsResponse',
            value: QueryNumPoolsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryNumPoolsResponse.typeUrl, QueryNumPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNumPoolsResponse.aminoType, QueryNumPoolsResponse.typeUrl);
function createBaseQueryPoolTypeRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const QueryPoolTypeRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeRequest',
    aminoType: 'osmosis/gamm/query-pool-type-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolTypeRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryPoolTypeRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryPoolTypeRequest.typeUrl ||
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
        return QueryPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-type-request',
            value: QueryPoolTypeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeRequest',
            value: QueryPoolTypeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolTypeRequest.typeUrl, QueryPoolTypeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolTypeRequest.aminoType, QueryPoolTypeRequest.typeUrl);
function createBaseQueryPoolTypeResponse() {
    return {
        poolType: '',
    };
}
export const QueryPoolTypeResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeResponse',
    aminoType: 'osmosis/gamm/query-pool-type-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolTypeResponse.typeUrl ||
                typeof o.poolType === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryPoolTypeResponse.typeUrl ||
                typeof o.pool_type === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryPoolTypeResponse.typeUrl ||
                typeof o.pool_type === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolType !== '') {
            writer.uint32(10).string(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-type-response',
            value: QueryPoolTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolTypeResponse',
            value: QueryPoolTypeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolTypeResponse.typeUrl, QueryPoolTypeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolTypeResponse.aminoType, QueryPoolTypeResponse.typeUrl);
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: [],
    };
}
export const QueryCalcJoinPoolSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest',
    aminoType: 'osmosis/gamm/query-calc-join-pool-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.tokensIn) &&
                    (!o.tokensIn.length || Coin.is(o.tokensIn[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || Coin.isSDK(o.tokens_in[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || Coin.isAmino(o.tokens_in[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-shares-request',
            value: QueryCalcJoinPoolSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest',
            value: QueryCalcJoinPoolSharesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolSharesRequest.typeUrl, QueryCalcJoinPoolSharesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCalcJoinPoolSharesRequest.aminoType, QueryCalcJoinPoolSharesRequest.typeUrl);
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        shareOutAmount: '',
        tokensOut: [],
    };
}
export const QueryCalcJoinPoolSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse',
    aminoType: 'osmosis/gamm/query-calc-join-pool-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl ||
                (typeof o.shareOutAmount === 'string' &&
                    Array.isArray(o.tokensOut) &&
                    (!o.tokensOut.length || Coin.is(o.tokensOut[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl ||
                (typeof o.share_out_amount === 'string' &&
                    Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl ||
                (typeof o.share_out_amount === 'string' &&
                    Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.shareOutAmount !== '') {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokensOut) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokensOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        if (object.share_out_amount !== undefined &&
            object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount =
            message.shareOutAmount === '' ? undefined : message.shareOutAmount;
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-shares-response',
            value: QueryCalcJoinPoolSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse',
            value: QueryCalcJoinPoolSharesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolSharesResponse.typeUrl, QueryCalcJoinPoolSharesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCalcJoinPoolSharesResponse.aminoType, QueryCalcJoinPoolSharesResponse.typeUrl);
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        poolId: BigInt(0),
        shareInAmount: '',
    };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest',
    aminoType: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.shareInAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.share_in_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.share_in_amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.shareInAmount !== '') {
            writer.uint32(18).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-request',
            value: QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest',
            value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCalcExitPoolCoinsFromSharesRequest.typeUrl, QueryCalcExitPoolCoinsFromSharesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCalcExitPoolCoinsFromSharesRequest.aminoType, QueryCalcExitPoolCoinsFromSharesRequest.typeUrl);
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokensOut: [],
    };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse',
    aminoType: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl ||
                (Array.isArray(o.tokensOut) &&
                    (!o.tokensOut.length || Coin.is(o.tokensOut[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-exit-pool-coins-from-shares-response',
            value: QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse',
            value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCalcExitPoolCoinsFromSharesResponse.typeUrl, QueryCalcExitPoolCoinsFromSharesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCalcExitPoolCoinsFromSharesResponse.aminoType, QueryCalcExitPoolCoinsFromSharesResponse.typeUrl);
function createBaseQueryPoolParamsRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const QueryPoolParamsRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsRequest',
    aminoType: 'osmosis/gamm/query-pool-params-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolParamsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryPoolParamsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryPoolParamsRequest.typeUrl ||
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
        return QueryPoolParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-params-request',
            value: QueryPoolParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsRequest',
            value: QueryPoolParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolParamsRequest.typeUrl, QueryPoolParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolParamsRequest.aminoType, QueryPoolParamsRequest.typeUrl);
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined,
    };
}
export const QueryPoolParamsResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsResponse',
    aminoType: 'osmosis/gamm/query-pool-params-response',
    is(o) {
        return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Any.decode(reader, reader.uint32());
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
                ? Any.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Any.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Any.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pool-params-response',
            value: QueryPoolParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolParamsResponse',
            value: QueryPoolParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolParamsResponse.typeUrl, QueryPoolParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolParamsResponse.aminoType, QueryPoolParamsResponse.typeUrl);
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const QueryTotalPoolLiquidityRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest',
    aminoType: 'osmosis/gamm/query-total-pool-liquidity-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl ||
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
        return QueryTotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-pool-liquidity-request',
            value: QueryTotalPoolLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest',
            value: QueryTotalPoolLiquidityRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalPoolLiquidityRequest.typeUrl, QueryTotalPoolLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalPoolLiquidityRequest.aminoType, QueryTotalPoolLiquidityRequest.typeUrl);
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: [],
    };
}
export const QueryTotalPoolLiquidityResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse',
    aminoType: 'osmosis/gamm/query-total-pool-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl ||
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
        const message = createBaseQueryTotalPoolLiquidityResponse();
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
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
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
        return QueryTotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-pool-liquidity-response',
            value: QueryTotalPoolLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse',
            value: QueryTotalPoolLiquidityResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalPoolLiquidityResponse.typeUrl, QueryTotalPoolLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalPoolLiquidityResponse.aminoType, QueryTotalPoolLiquidityResponse.typeUrl);
function createBaseQueryTotalSharesRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const QueryTotalSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesRequest',
    aminoType: 'osmosis/gamm/query-total-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalSharesRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalSharesRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalSharesRequest.typeUrl ||
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
        return QueryTotalSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-shares-request',
            value: QueryTotalSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesRequest',
            value: QueryTotalSharesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalSharesRequest.typeUrl, QueryTotalSharesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalSharesRequest.aminoType, QueryTotalSharesRequest.typeUrl);
function createBaseQueryTotalSharesResponse() {
    return {
        totalShares: Coin.fromPartial({}),
    };
}
export const QueryTotalSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesResponse',
    aminoType: 'osmosis/gamm/query-total-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalSharesResponse.typeUrl ||
                Coin.is(o.totalShares)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalSharesResponse.typeUrl ||
                Coin.isSDK(o.total_shares)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalSharesResponse.typeUrl ||
                Coin.isAmino(o.total_shares)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalShares !== undefined) {
            Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = Coin.decode(reader, reader.uint32());
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
                ? Coin.fromPartial(object.totalShares)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSharesResponse();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = Coin.fromAmino(object.total_shares);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares = message.totalShares
            ? Coin.toAmino(message.totalShares)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-shares-response',
            value: QueryTotalSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalSharesResponse',
            value: QueryTotalSharesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalSharesResponse.typeUrl, QueryTotalSharesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalSharesResponse.aminoType, QueryTotalSharesResponse.typeUrl);
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: [],
    };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest',
    aminoType: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.tokensIn) &&
                    (!o.tokensIn.length || Coin.is(o.tokensIn[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || Coin.isSDK(o.tokens_in[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.tokens_in) &&
                    (!o.tokens_in.length || Coin.isAmino(o.tokens_in[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-request',
            value: QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest',
            value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolNoSwapSharesRequest.typeUrl, QueryCalcJoinPoolNoSwapSharesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCalcJoinPoolNoSwapSharesRequest.aminoType, QueryCalcJoinPoolNoSwapSharesRequest.typeUrl);
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokensOut: [],
        sharesOut: '',
    };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse',
    aminoType: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl ||
                (Array.isArray(o.tokensOut) &&
                    (!o.tokensOut.length || Coin.is(o.tokensOut[0])) &&
                    typeof o.sharesOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])) &&
                    typeof o.shares_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl ||
                (Array.isArray(o.tokens_out) &&
                    (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])) &&
                    typeof o.shares_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharesOut !== '') {
            writer.uint32(18).string(message.sharesOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
        message.sharesOut = object.sharesOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
        if (object.shares_out !== undefined && object.shares_out !== null) {
            message.sharesOut = object.shares_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        obj.shares_out = message.sharesOut === '' ? undefined : message.sharesOut;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-calc-join-pool-no-swap-shares-response',
            value: QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse',
            value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolNoSwapSharesResponse.typeUrl, QueryCalcJoinPoolNoSwapSharesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCalcJoinPoolNoSwapSharesResponse.aminoType, QueryCalcJoinPoolNoSwapSharesResponse.typeUrl);
function createBaseQuerySpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: '',
        quoteAssetDenom: '',
    };
}
export const QuerySpotPriceRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceRequest',
    aminoType: 'osmosis/gamm/query-spot-price-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySpotPriceRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAssetDenom === 'string' &&
                    typeof o.quoteAssetDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySpotPriceRequest.typeUrl ||
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
        return QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-spot-price-request',
            value: QuerySpotPriceRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceRequest',
            value: QuerySpotPriceRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySpotPriceRequest.typeUrl, QuerySpotPriceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySpotPriceRequest.aminoType, QuerySpotPriceRequest.typeUrl);
function createBaseQueryPoolsWithFilterRequest() {
    return {
        minLiquidity: '',
        poolType: '',
        pagination: undefined,
    };
}
export const QueryPoolsWithFilterRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest',
    aminoType: 'osmosis/gamm/query-pools-with-filter-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl ||
                (typeof o.minLiquidity === 'string' && typeof o.poolType === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl ||
                (typeof o.min_liquidity === 'string' &&
                    typeof o.pool_type === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl ||
                (typeof o.min_liquidity === 'string' &&
                    typeof o.pool_type === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.minLiquidity !== '') {
            writer.uint32(10).string(message.minLiquidity);
        }
        if (message.poolType !== '') {
            writer.uint32(18).string(message.poolType);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
                ? PageRequest.fromPartial(object.pagination)
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
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.min_liquidity =
            message.minLiquidity === '' ? undefined : message.minLiquidity;
        obj.pool_type = message.poolType === '' ? undefined : message.poolType;
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsWithFilterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-with-filter-request',
            value: QueryPoolsWithFilterRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsWithFilterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsWithFilterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest',
            value: QueryPoolsWithFilterRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolsWithFilterRequest.typeUrl, QueryPoolsWithFilterRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolsWithFilterRequest.aminoType, QueryPoolsWithFilterRequest.typeUrl);
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
export const QueryPoolsWithFilterResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse',
    aminoType: 'osmosis/gamm/query-pools-with-filter-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl ||
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
            (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl ||
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
            (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl ||
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
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsWithFilterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-pools-with-filter-response',
            value: QueryPoolsWithFilterResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsWithFilterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsWithFilterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse',
            value: QueryPoolsWithFilterResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryPoolsWithFilterResponse.typeUrl, QueryPoolsWithFilterResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPoolsWithFilterResponse.aminoType, QueryPoolsWithFilterResponse.typeUrl);
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: '',
    };
}
export const QuerySpotPriceResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceResponse',
    aminoType: 'osmosis/gamm/query-spot-price-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySpotPriceResponse.typeUrl ||
                typeof o.spotPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySpotPriceResponse.typeUrl ||
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
        return QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-spot-price-response',
            value: QuerySpotPriceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySpotPriceResponse',
            value: QuerySpotPriceResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySpotPriceResponse.typeUrl, QuerySpotPriceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySpotPriceResponse.aminoType, QuerySpotPriceResponse.typeUrl);
function createBaseQuerySwapExactAmountInRequest() {
    return {
        sender: '',
        poolId: BigInt(0),
        tokenIn: '',
        routes: [],
    };
}
export const QuerySwapExactAmountInRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.is(o.routes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseQuerySwapExactAmountInRequest();
        message.sender = object.sender ?? '';
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
            object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
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
        return QuerySwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-in-request',
            value: QuerySwapExactAmountInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest',
            value: QuerySwapExactAmountInRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySwapExactAmountInRequest.typeUrl, QuerySwapExactAmountInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapExactAmountInRequest.aminoType, QuerySwapExactAmountInRequest.typeUrl);
function createBaseQuerySwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
export const QuerySwapExactAmountInResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl ||
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
        return QuerySwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-in-response',
            value: QuerySwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse',
            value: QuerySwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySwapExactAmountInResponse.typeUrl, QuerySwapExactAmountInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapExactAmountInResponse.aminoType, QuerySwapExactAmountInResponse.typeUrl);
function createBaseQuerySwapExactAmountOutRequest() {
    return {
        sender: '',
        poolId: BigInt(0),
        routes: [],
        tokenOut: '',
    };
}
export const QuerySwapExactAmountOutRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
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
        const message = createBaseQuerySwapExactAmountOutRequest();
        message.sender = object.sender ?? '';
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
        const message = createBaseQuerySwapExactAmountOutRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
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
        obj.sender = message.sender === '' ? undefined : message.sender;
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
        return QuerySwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-out-request',
            value: QuerySwapExactAmountOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest',
            value: QuerySwapExactAmountOutRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySwapExactAmountOutRequest.typeUrl, QuerySwapExactAmountOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapExactAmountOutRequest.aminoType, QuerySwapExactAmountOutRequest.typeUrl);
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
export const QuerySwapExactAmountOutResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse',
    aminoType: 'osmosis/gamm/query-swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl ||
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
        return QuerySwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-swap-exact-amount-out-response',
            value: QuerySwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse',
            value: QuerySwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QuerySwapExactAmountOutResponse.typeUrl, QuerySwapExactAmountOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapExactAmountOutResponse.aminoType, QuerySwapExactAmountOutResponse.typeUrl);
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
export const QueryTotalLiquidityRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest',
    aminoType: 'osmosis/gamm/query-total-liquidity-request',
    is(o) {
        return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-liquidity-request',
            value: QueryTotalLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest',
            value: QueryTotalLiquidityRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalLiquidityRequest.typeUrl, QueryTotalLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalLiquidityRequest.aminoType, QueryTotalLiquidityRequest.typeUrl);
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: [],
    };
}
export const QueryTotalLiquidityResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse',
    aminoType: 'osmosis/gamm/query-total-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.is(o.liquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || Coin.isSDK(o.liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl ||
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
        const message = createBaseQueryTotalLiquidityResponse();
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
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalLiquidityResponse();
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
        return QueryTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-total-liquidity-response',
            value: QueryTotalLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse',
            value: QueryTotalLiquidityResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalLiquidityResponse.typeUrl, QueryTotalLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalLiquidityResponse.aminoType, QueryTotalLiquidityResponse.typeUrl);
function createBaseQueryConcentratedPoolIdLinkFromCFMMRequest() {
    return {
        cfmmPoolId: BigInt(0),
    };
}
export const QueryConcentratedPoolIdLinkFromCFMMRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest',
    aminoType: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl ||
                typeof o.cfmmPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.cfmmPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.cfmmPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryConcentratedPoolIdLinkFromCFMMRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-request',
            value: QueryConcentratedPoolIdLinkFromCFMMRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryConcentratedPoolIdLinkFromCFMMRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConcentratedPoolIdLinkFromCFMMRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest',
            value: QueryConcentratedPoolIdLinkFromCFMMRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl, QueryConcentratedPoolIdLinkFromCFMMRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConcentratedPoolIdLinkFromCFMMRequest.aminoType, QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl);
function createBaseQueryConcentratedPoolIdLinkFromCFMMResponse() {
    return {
        concentratedPoolId: BigInt(0),
    };
}
export const QueryConcentratedPoolIdLinkFromCFMMResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse',
    aminoType: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl ||
                typeof o.concentratedPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.concentratedPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.concentratedPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryConcentratedPoolIdLinkFromCFMMResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-concentrated-pool-id-link-from-cfmm-response',
            value: QueryConcentratedPoolIdLinkFromCFMMResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryConcentratedPoolIdLinkFromCFMMResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConcentratedPoolIdLinkFromCFMMResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse',
            value: QueryConcentratedPoolIdLinkFromCFMMResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl, QueryConcentratedPoolIdLinkFromCFMMResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConcentratedPoolIdLinkFromCFMMResponse.aminoType, QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl);
function createBaseQueryCFMMConcentratedPoolLinksRequest() {
    return {};
}
export const QueryCFMMConcentratedPoolLinksRequest = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest',
    aminoType: 'osmosis/gamm/query-cfmm-concentrated-pool-links-request',
    is(o) {
        return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCFMMConcentratedPoolLinksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-cfmm-concentrated-pool-links-request',
            value: QueryCFMMConcentratedPoolLinksRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCFMMConcentratedPoolLinksRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCFMMConcentratedPoolLinksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest',
            value: QueryCFMMConcentratedPoolLinksRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCFMMConcentratedPoolLinksRequest.typeUrl, QueryCFMMConcentratedPoolLinksRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCFMMConcentratedPoolLinksRequest.aminoType, QueryCFMMConcentratedPoolLinksRequest.typeUrl);
function createBaseQueryCFMMConcentratedPoolLinksResponse() {
    return {
        migrationRecords: undefined,
    };
}
export const QueryCFMMConcentratedPoolLinksResponse = {
    typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse',
    aminoType: 'osmosis/gamm/query-cfmm-concentrated-pool-links-response',
    is(o) {
        return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.migrationRecords !== undefined) {
            MigrationRecords.encode(message.migrationRecords, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
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
                ? MigrationRecords.fromPartial(object.migrationRecords)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
        if (object.migration_records !== undefined &&
            object.migration_records !== null) {
            message.migrationRecords = MigrationRecords.fromAmino(object.migration_records);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.migration_records = message.migrationRecords
            ? MigrationRecords.toAmino(message.migrationRecords)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCFMMConcentratedPoolLinksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/query-cfmm-concentrated-pool-links-response',
            value: QueryCFMMConcentratedPoolLinksResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCFMMConcentratedPoolLinksResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCFMMConcentratedPoolLinksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse',
            value: QueryCFMMConcentratedPoolLinksResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCFMMConcentratedPoolLinksResponse.typeUrl, QueryCFMMConcentratedPoolLinksResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCFMMConcentratedPoolLinksResponse.aminoType, QueryCFMMConcentratedPoolLinksResponse.typeUrl);
