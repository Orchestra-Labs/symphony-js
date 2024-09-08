"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const any_1 = require("../../../google/protobuf/any");
const pool_1 = require("../../concentratedliquidity/v1beta1/pool");
const pool_2 = require("./model/pool");
const stableswap_pool_1 = require("../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool");
const balancerPool_1 = require("../../gamm/v1beta1/balancerPool");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        pools: [],
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GenesisState',
    aminoType: 'osmosis/cosmwasmpool/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.is(o.params) &&
                    Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.is(o.pools[0]) ||
                        pool_2.CosmWasmPool.is(o.pools[0]) ||
                        stableswap_pool_1.Pool.is(o.pools[0]) ||
                        balancerPool_1.Pool.is(o.pools[0]) ||
                        any_1.Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isSDK(o.params) &&
                    Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isSDK(o.pools[0]) ||
                        pool_2.CosmWasmPool.isSDK(o.pools[0]) ||
                        stableswap_pool_1.Pool.isSDK(o.pools[0]) ||
                        balancerPool_1.Pool.isSDK(o.pools[0]) ||
                        any_1.Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isAmino(o.params) &&
                    Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isAmino(o.pools[0]) ||
                        pool_2.CosmWasmPool.isAmino(o.pools[0]) ||
                        stableswap_pool_1.Pool.isAmino(o.pools[0]) ||
                        balancerPool_1.Pool.isAmino(o.pools[0]) ||
                        any_1.Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.pools) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/genesis-state',
            value: exports.GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
