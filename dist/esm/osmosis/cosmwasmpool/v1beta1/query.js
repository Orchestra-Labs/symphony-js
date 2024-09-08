//@ts-nocheck
import { PageRequest, PageResponse, } from '../../../cosmos/base/query/v1beta1/pagination';
import { Params } from './params';
import { Any, } from '../../../google/protobuf/any';
import { Pool as Pool1 } from '../../concentratedliquidity/v1beta1/pool';
import { CosmWasmPool, } from './model/pool';
import { Pool as Pool2 } from '../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import { Pool as Pool3 } from '../../gamm/v1beta1/balancerPool';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsRequest',
    aminoType: 'osmosis/cosmwasmpool/params-request',
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
            type: 'osmosis/cosmwasmpool/params-request',
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
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsRequest',
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
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsResponse',
    aminoType: 'osmosis/cosmwasmpool/params-response',
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
            type: 'osmosis/cosmwasmpool/params-response',
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
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ParamsResponse',
            value: ParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBasePoolsRequest() {
    return {
        pagination: undefined,
    };
}
export const PoolsRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsRequest',
    aminoType: 'osmosis/cosmwasmpool/pools-request',
    is(o) {
        return o && o.$typeUrl === PoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === PoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === PoolsRequest.typeUrl;
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
        const message = createBasePoolsRequest();
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
        const message = createBasePoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsRequest();
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
        return PoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/pools-request',
            value: PoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolsRequest.decode(message.value);
    },
    toProto(message) {
        return PoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsRequest',
            value: PoolsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolsRequest.typeUrl, PoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsRequest.aminoType, PoolsRequest.typeUrl);
function createBasePoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
export const PoolsResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsResponse',
    aminoType: 'osmosis/cosmwasmpool/pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolsResponse.typeUrl ||
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
            (o.$typeUrl === PoolsResponse.typeUrl ||
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
            (o.$typeUrl === PoolsResponse.typeUrl ||
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
        const message = createBasePoolsResponse();
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
        const message = createBasePoolsResponse();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsResponse();
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
        return PoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/pools-response',
            value: PoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolsResponse.decode(message.value);
    },
    toProto(message) {
        return PoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.PoolsResponse',
            value: PoolsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolsResponse.typeUrl, PoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsResponse.aminoType, PoolsResponse.typeUrl);
function createBaseContractInfoByPoolIdRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const ContractInfoByPoolIdRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest',
    aminoType: 'osmosis/cosmwasmpool/contract-info-by-pool-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ContractInfoByPoolIdRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ContractInfoByPoolIdRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ContractInfoByPoolIdRequest.typeUrl ||
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
        return ContractInfoByPoolIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/contract-info-by-pool-id-request',
            value: ContractInfoByPoolIdRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ContractInfoByPoolIdRequest.decode(message.value);
    },
    toProto(message) {
        return ContractInfoByPoolIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest',
            value: ContractInfoByPoolIdRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ContractInfoByPoolIdRequest.typeUrl, ContractInfoByPoolIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractInfoByPoolIdRequest.aminoType, ContractInfoByPoolIdRequest.typeUrl);
function createBaseContractInfoByPoolIdResponse() {
    return {
        contractAddress: '',
        codeId: BigInt(0),
    };
}
export const ContractInfoByPoolIdResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse',
    aminoType: 'osmosis/cosmwasmpool/contract-info-by-pool-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ContractInfoByPoolIdResponse.typeUrl ||
                (typeof o.contractAddress === 'string' && typeof o.codeId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ContractInfoByPoolIdResponse.typeUrl ||
                (typeof o.contract_address === 'string' &&
                    typeof o.code_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ContractInfoByPoolIdResponse.typeUrl ||
                (typeof o.contract_address === 'string' &&
                    typeof o.code_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.contractAddress !== '') {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ContractInfoByPoolIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/contract-info-by-pool-id-response',
            value: ContractInfoByPoolIdResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ContractInfoByPoolIdResponse.decode(message.value);
    },
    toProto(message) {
        return ContractInfoByPoolIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse',
            value: ContractInfoByPoolIdResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ContractInfoByPoolIdResponse.typeUrl, ContractInfoByPoolIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ContractInfoByPoolIdResponse.aminoType, ContractInfoByPoolIdResponse.typeUrl);
