//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { fromBase64, toBase64 } from '@cosmjs/encoding';
import { GlobalDecoderRegistry } from '../../../registry';
import { bytesFromBase64, base64FromBytes } from '../../../helpers';
function createBaseUploadCosmWasmPoolCodeAndWhiteListProposal() {
    return {
        title: '',
        description: '',
        wasmByteCode: new Uint8Array(),
    };
}
export const UploadCosmWasmPoolCodeAndWhiteListProposal = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.UploadCosmWasmPoolCodeAndWhiteListProposal',
    aminoType: 'osmosis/cosmwasmpool/upload-cosm-wasm-pool-code-and-white-list-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === UploadCosmWasmPoolCodeAndWhiteListProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    (o.wasmByteCode instanceof Uint8Array ||
                        typeof o.wasmByteCode === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UploadCosmWasmPoolCodeAndWhiteListProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    (o.wasm_byte_code instanceof Uint8Array ||
                        typeof o.wasm_byte_code === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UploadCosmWasmPoolCodeAndWhiteListProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    (o.wasm_byte_code instanceof Uint8Array ||
                        typeof o.wasm_byte_code === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(26).bytes(message.wasmByteCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.wasmByteCode = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = fromBase64(object.wasm_byte_code);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        obj.wasm_byte_code = message.wasmByteCode
            ? toBase64(message.wasmByteCode)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UploadCosmWasmPoolCodeAndWhiteListProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/upload-cosm-wasm-pool-code-and-white-list-proposal',
            value: UploadCosmWasmPoolCodeAndWhiteListProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UploadCosmWasmPoolCodeAndWhiteListProposal.decode(message.value);
    },
    toProto(message) {
        return UploadCosmWasmPoolCodeAndWhiteListProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.UploadCosmWasmPoolCodeAndWhiteListProposal',
            value: UploadCosmWasmPoolCodeAndWhiteListProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UploadCosmWasmPoolCodeAndWhiteListProposal.typeUrl, UploadCosmWasmPoolCodeAndWhiteListProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UploadCosmWasmPoolCodeAndWhiteListProposal.aminoType, UploadCosmWasmPoolCodeAndWhiteListProposal.typeUrl);
function createBaseMigratePoolContractsProposal() {
    return {
        title: '',
        description: '',
        poolIds: [],
        newCodeId: BigInt(0),
        wasmByteCode: new Uint8Array(),
        migrateMsg: new Uint8Array(),
    };
}
export const MigratePoolContractsProposal = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.MigratePoolContractsProposal',
    aminoType: 'osmosis/cosmwasmpool/migrate-pool-contracts-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === MigratePoolContractsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.poolIds) &&
                    (!o.poolIds.length || typeof o.poolIds[0] === 'bigint') &&
                    typeof o.newCodeId === 'bigint' &&
                    (o.wasmByteCode instanceof Uint8Array ||
                        typeof o.wasmByteCode === 'string') &&
                    (o.migrateMsg instanceof Uint8Array ||
                        typeof o.migrateMsg === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MigratePoolContractsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint') &&
                    typeof o.new_code_id === 'bigint' &&
                    (o.wasm_byte_code instanceof Uint8Array ||
                        typeof o.wasm_byte_code === 'string') &&
                    (o.migrate_msg instanceof Uint8Array ||
                        typeof o.migrate_msg === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MigratePoolContractsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint') &&
                    typeof o.new_code_id === 'bigint' &&
                    (o.wasm_byte_code instanceof Uint8Array ||
                        typeof o.wasm_byte_code === 'string') &&
                    (o.migrate_msg instanceof Uint8Array ||
                        typeof o.migrate_msg === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.newCodeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.newCodeId);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(42).bytes(message.wasmByteCode);
        }
        if (message.migrateMsg.length !== 0) {
            writer.uint32(50).bytes(message.migrateMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigratePoolContractsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.poolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.poolIds.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.newCodeId = reader.uint64();
                    break;
                case 5:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 6:
                    message.migrateMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMigratePoolContractsProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
        message.newCodeId =
            object.newCodeId !== undefined && object.newCodeId !== null
                ? BigInt(object.newCodeId.toString())
                : BigInt(0);
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.migrateMsg = object.migrateMsg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigratePoolContractsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
        if (object.new_code_id !== undefined && object.new_code_id !== null) {
            message.newCodeId = BigInt(object.new_code_id);
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = fromBase64(object.wasm_byte_code);
        }
        if (object.migrate_msg !== undefined && object.migrate_msg !== null) {
            message.migrateMsg = bytesFromBase64(object.migrate_msg);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.poolIds) {
            obj.pool_ids = message.poolIds.map(e => e.toString());
        }
        else {
            obj.pool_ids = message.poolIds;
        }
        obj.new_code_id =
            message.newCodeId !== BigInt(0)
                ? message.newCodeId.toString()
                : undefined;
        obj.wasm_byte_code = message.wasmByteCode
            ? toBase64(message.wasmByteCode)
            : undefined;
        obj.migrate_msg = message.migrateMsg
            ? base64FromBytes(message.migrateMsg)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MigratePoolContractsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/migrate-pool-contracts-proposal',
            value: MigratePoolContractsProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MigratePoolContractsProposal.decode(message.value);
    },
    toProto(message) {
        return MigratePoolContractsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.MigratePoolContractsProposal',
            value: MigratePoolContractsProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MigratePoolContractsProposal.typeUrl, MigratePoolContractsProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MigratePoolContractsProposal.aminoType, MigratePoolContractsProposal.typeUrl);
