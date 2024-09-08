//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { bytesFromBase64, base64FromBytes } from '../../../../helpers';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseMsgCreateCosmWasmPool() {
    return {
        codeId: BigInt(0),
        instantiateMsg: new Uint8Array(),
        sender: '',
    };
}
export const MsgCreateCosmWasmPool = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool',
    aminoType: 'osmosis/cosmwasmpool/create-cosm-wasm-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateCosmWasmPool.typeUrl ||
                (typeof o.codeId === 'bigint' &&
                    (o.instantiateMsg instanceof Uint8Array ||
                        typeof o.instantiateMsg === 'string') &&
                    typeof o.sender === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateCosmWasmPool.typeUrl ||
                (typeof o.code_id === 'bigint' &&
                    (o.instantiate_msg instanceof Uint8Array ||
                        typeof o.instantiate_msg === 'string') &&
                    typeof o.sender === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateCosmWasmPool.typeUrl ||
                (typeof o.code_id === 'bigint' &&
                    (o.instantiate_msg instanceof Uint8Array ||
                        typeof o.instantiate_msg === 'string') &&
                    typeof o.sender === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.instantiateMsg.length !== 0) {
            writer.uint32(18).bytes(message.instantiateMsg);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCosmWasmPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.instantiateMsg = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCosmWasmPool();
        message.codeId =
            object.codeId !== undefined && object.codeId !== null
                ? BigInt(object.codeId.toString())
                : BigInt(0);
        message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
        message.sender = object.sender ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateCosmWasmPool();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.instantiate_msg !== undefined &&
            object.instantiate_msg !== null) {
            message.instantiateMsg = bytesFromBase64(object.instantiate_msg);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id =
            message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
        obj.instantiate_msg = message.instantiateMsg
            ? base64FromBytes(message.instantiateMsg)
            : undefined;
        obj.sender = message.sender === '' ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateCosmWasmPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/create-cosm-wasm-pool',
            value: MsgCreateCosmWasmPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateCosmWasmPool.decode(message.value);
    },
    toProto(message) {
        return MsgCreateCosmWasmPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool',
            value: MsgCreateCosmWasmPool.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateCosmWasmPool.typeUrl, MsgCreateCosmWasmPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateCosmWasmPool.aminoType, MsgCreateCosmWasmPool.typeUrl);
function createBaseMsgCreateCosmWasmPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
export const MsgCreateCosmWasmPoolResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse',
    aminoType: 'osmosis/cosmwasmpool/create-cosm-wasm-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateCosmWasmPoolResponse.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateCosmWasmPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateCosmWasmPoolResponse.typeUrl ||
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
        const message = createBaseMsgCreateCosmWasmPoolResponse();
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
        const message = createBaseMsgCreateCosmWasmPoolResponse();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateCosmWasmPoolResponse();
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
        return MsgCreateCosmWasmPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/create-cosm-wasm-pool-response',
            value: MsgCreateCosmWasmPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateCosmWasmPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateCosmWasmPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse',
            value: MsgCreateCosmWasmPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateCosmWasmPoolResponse.typeUrl, MsgCreateCosmWasmPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateCosmWasmPoolResponse.aminoType, MsgCreateCosmWasmPoolResponse.typeUrl);
