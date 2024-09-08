"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmWasmPool = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseCosmWasmPool() {
    return {
        $typeUrl: '/osmosis.cosmwasmpool.v1beta1.CosmWasmPool',
        contractAddress: '',
        poolId: BigInt(0),
        codeId: BigInt(0),
        instantiateMsg: new Uint8Array(),
    };
}
exports.CosmWasmPool = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CosmWasmPool',
    aminoType: 'osmosis/cosmwasmpool/cosm-wasm-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CosmWasmPool.typeUrl ||
                (typeof o.contractAddress === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    typeof o.codeId === 'bigint' &&
                    (o.instantiateMsg instanceof Uint8Array ||
                        typeof o.instantiateMsg === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CosmWasmPool.typeUrl ||
                (typeof o.contract_address === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.code_id === 'bigint' &&
                    (o.instantiate_msg instanceof Uint8Array ||
                        typeof o.instantiate_msg === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CosmWasmPool.typeUrl ||
                (typeof o.contract_address === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    typeof o.code_id === 'bigint' &&
                    (o.instantiate_msg instanceof Uint8Array ||
                        typeof o.instantiate_msg === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== '') {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.instantiateMsg.length !== 0) {
            writer.uint32(34).bytes(message.instantiateMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmWasmPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.codeId = reader.uint64();
                    break;
                case 4:
                    message.instantiateMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCosmWasmPool();
        message.contractAddress = object.contractAddress ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.codeId =
            object.codeId !== undefined && object.codeId !== null
                ? BigInt(object.codeId.toString())
                : BigInt(0);
        message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCosmWasmPool();
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.instantiate_msg !== undefined &&
            object.instantiate_msg !== null) {
            message.instantiateMsg = (0, helpers_1.bytesFromBase64)(object.instantiate_msg);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address =
            message.contractAddress === '' ? undefined : message.contractAddress;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.code_id =
            message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
        obj.instantiate_msg = message.instantiateMsg
            ? (0, helpers_1.base64FromBytes)(message.instantiateMsg)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CosmWasmPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/cosm-wasm-pool',
            value: exports.CosmWasmPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CosmWasmPool.decode(message.value);
    },
    toProto(message) {
        return exports.CosmWasmPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CosmWasmPool',
            value: exports.CosmWasmPool.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CosmWasmPool.typeUrl, exports.CosmWasmPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CosmWasmPool.aminoType, exports.CosmWasmPool.typeUrl);
