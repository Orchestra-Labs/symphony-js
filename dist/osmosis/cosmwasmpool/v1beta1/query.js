"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfoByPoolIdResponse = exports.ContractInfoByPoolIdRequest = exports.PoolsResponse = exports.PoolsRequest = exports.ParamsResponse = exports.ParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const any_1 = require("../../../google/protobuf/any");
const pool_1 = require("../../concentratedliquidity/v1beta1/pool");
const pool_2 = require("./model/pool");
const stableswap_pool_1 = require("../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool");
const balancerPool_1 = require("../../gamm/v1beta1/balancerPool");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsRequest',
    aminoType: 'osmosis/cosmwasmpool/params-request',
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
            type: 'osmosis/cosmwasmpool/params-request',
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
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsRequest',
            value: exports.ParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsRequest.typeUrl, exports.ParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsRequest.aminoType, exports.ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsResponse',
    aminoType: 'osmosis/cosmwasmpool/params-response',
    is(o) {
        return o && (o.$typeUrl === exports.ParamsResponse.typeUrl || params_1.Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || params_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || params_1.Params.isAmino(o.params)));
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
        const message = createBaseParamsResponse();
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
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
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
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/params-response',
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
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsResponse',
            value: exports.ParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsResponse.typeUrl, exports.ParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsResponse.aminoType, exports.ParamsResponse.typeUrl);
function createBasePoolsRequest() {
    return {
        pagination: undefined,
    };
}
exports.PoolsRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsRequest',
    aminoType: 'osmosis/cosmwasmpool/pools-request',
    is(o) {
        return o && o.$typeUrl === exports.PoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.PoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.PoolsRequest.typeUrl;
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
        const message = createBasePoolsRequest();
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
        const message = createBasePoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsRequest();
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
        return exports.PoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/pools-request',
            value: exports.PoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.PoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsRequest',
            value: exports.PoolsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolsRequest.typeUrl, exports.PoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolsRequest.aminoType, exports.PoolsRequest.typeUrl);
function createBasePoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.PoolsResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsResponse',
    aminoType: 'osmosis/cosmwasmpool/pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolsResponse.typeUrl ||
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
            (o.$typeUrl === exports.PoolsResponse.typeUrl ||
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
            (o.$typeUrl === exports.PoolsResponse.typeUrl ||
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
        const message = createBasePoolsResponse();
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
        const message = createBasePoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsResponse();
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
        return exports.PoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/pools-response',
            value: exports.PoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.PoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsResponse',
            value: exports.PoolsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolsResponse.typeUrl, exports.PoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolsResponse.aminoType, exports.PoolsResponse.typeUrl);
function createBaseContractInfoByPoolIdRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.ContractInfoByPoolIdRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest',
    aminoType: 'osmosis/cosmwasmpool/contract-info-by-pool-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ContractInfoByPoolIdRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ContractInfoByPoolIdRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ContractInfoByPoolIdRequest.typeUrl ||
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
        const message = createBaseContractInfoByPoolIdRequest();
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
        const message = createBaseContractInfoByPoolIdRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractInfoByPoolIdRequest();
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
        return exports.ContractInfoByPoolIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/contract-info-by-pool-id-request',
            value: exports.ContractInfoByPoolIdRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ContractInfoByPoolIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ContractInfoByPoolIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest',
            value: exports.ContractInfoByPoolIdRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ContractInfoByPoolIdRequest.typeUrl, exports.ContractInfoByPoolIdRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ContractInfoByPoolIdRequest.aminoType, exports.ContractInfoByPoolIdRequest.typeUrl);
function createBaseContractInfoByPoolIdResponse() {
    return {
        contractAddress: '',
        codeId: BigInt(0),
    };
}
exports.ContractInfoByPoolIdResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse',
    aminoType: 'osmosis/cosmwasmpool/contract-info-by-pool-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ContractInfoByPoolIdResponse.typeUrl ||
                (typeof o.contractAddress === 'string' && typeof o.codeId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ContractInfoByPoolIdResponse.typeUrl ||
                (typeof o.contract_address === 'string' &&
                    typeof o.code_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ContractInfoByPoolIdResponse.typeUrl ||
                (typeof o.contract_address === 'string' &&
                    typeof o.code_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== '') {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfoByPoolIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.codeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContractInfoByPoolIdResponse();
        message.contractAddress = object.contractAddress ?? '';
        message.codeId =
            object.codeId !== undefined && object.codeId !== null
                ? BigInt(object.codeId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractInfoByPoolIdResponse();
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address =
            message.contractAddress === '' ? undefined : message.contractAddress;
        obj.code_id =
            message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContractInfoByPoolIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/contract-info-by-pool-id-response',
            value: exports.ContractInfoByPoolIdResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ContractInfoByPoolIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ContractInfoByPoolIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse',
            value: exports.ContractInfoByPoolIdResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ContractInfoByPoolIdResponse.typeUrl, exports.ContractInfoByPoolIdResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ContractInfoByPoolIdResponse.aminoType, exports.ContractInfoByPoolIdResponse.typeUrl);
