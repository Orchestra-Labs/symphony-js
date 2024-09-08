"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreKeyConfig = exports.Module = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
function createBaseModule() {
    return {
        appName: '',
        beginBlockers: [],
        endBlockers: [],
        initGenesis: [],
        exportGenesis: [],
        overrideStoreKeys: [],
    };
}
exports.Module = {
    typeUrl: '/cosmos.app.runtime.v1alpha1.Module',
    aminoType: 'cosmos-sdk/Module',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Module.typeUrl ||
                (typeof o.appName === 'string' &&
                    Array.isArray(o.beginBlockers) &&
                    (!o.beginBlockers.length || typeof o.beginBlockers[0] === 'string') &&
                    Array.isArray(o.endBlockers) &&
                    (!o.endBlockers.length || typeof o.endBlockers[0] === 'string') &&
                    Array.isArray(o.initGenesis) &&
                    (!o.initGenesis.length || typeof o.initGenesis[0] === 'string') &&
                    Array.isArray(o.exportGenesis) &&
                    (!o.exportGenesis.length || typeof o.exportGenesis[0] === 'string') &&
                    Array.isArray(o.overrideStoreKeys) &&
                    (!o.overrideStoreKeys.length ||
                        exports.StoreKeyConfig.is(o.overrideStoreKeys[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Module.typeUrl ||
                (typeof o.app_name === 'string' &&
                    Array.isArray(o.begin_blockers) &&
                    (!o.begin_blockers.length ||
                        typeof o.begin_blockers[0] === 'string') &&
                    Array.isArray(o.end_blockers) &&
                    (!o.end_blockers.length || typeof o.end_blockers[0] === 'string') &&
                    Array.isArray(o.init_genesis) &&
                    (!o.init_genesis.length || typeof o.init_genesis[0] === 'string') &&
                    Array.isArray(o.export_genesis) &&
                    (!o.export_genesis.length ||
                        typeof o.export_genesis[0] === 'string') &&
                    Array.isArray(o.override_store_keys) &&
                    (!o.override_store_keys.length ||
                        exports.StoreKeyConfig.isSDK(o.override_store_keys[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Module.typeUrl ||
                (typeof o.app_name === 'string' &&
                    Array.isArray(o.begin_blockers) &&
                    (!o.begin_blockers.length ||
                        typeof o.begin_blockers[0] === 'string') &&
                    Array.isArray(o.end_blockers) &&
                    (!o.end_blockers.length || typeof o.end_blockers[0] === 'string') &&
                    Array.isArray(o.init_genesis) &&
                    (!o.init_genesis.length || typeof o.init_genesis[0] === 'string') &&
                    Array.isArray(o.export_genesis) &&
                    (!o.export_genesis.length ||
                        typeof o.export_genesis[0] === 'string') &&
                    Array.isArray(o.override_store_keys) &&
                    (!o.override_store_keys.length ||
                        exports.StoreKeyConfig.isAmino(o.override_store_keys[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.appName !== '') {
            writer.uint32(10).string(message.appName);
        }
        for (const v of message.beginBlockers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.endBlockers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.initGenesis) {
            writer.uint32(34).string(v);
        }
        for (const v of message.exportGenesis) {
            writer.uint32(42).string(v);
        }
        for (const v of message.overrideStoreKeys) {
            exports.StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appName = reader.string();
                    break;
                case 2:
                    message.beginBlockers.push(reader.string());
                    break;
                case 3:
                    message.endBlockers.push(reader.string());
                    break;
                case 4:
                    message.initGenesis.push(reader.string());
                    break;
                case 5:
                    message.exportGenesis.push(reader.string());
                    break;
                case 6:
                    message.overrideStoreKeys.push(exports.StoreKeyConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.appName = object.appName ?? '';
        message.beginBlockers = object.beginBlockers?.map(e => e) || [];
        message.endBlockers = object.endBlockers?.map(e => e) || [];
        message.initGenesis = object.initGenesis?.map(e => e) || [];
        message.exportGenesis = object.exportGenesis?.map(e => e) || [];
        message.overrideStoreKeys =
            object.overrideStoreKeys?.map(e => exports.StoreKeyConfig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModule();
        if (object.app_name !== undefined && object.app_name !== null) {
            message.appName = object.app_name;
        }
        message.beginBlockers = object.begin_blockers?.map(e => e) || [];
        message.endBlockers = object.end_blockers?.map(e => e) || [];
        message.initGenesis = object.init_genesis?.map(e => e) || [];
        message.exportGenesis = object.export_genesis?.map(e => e) || [];
        message.overrideStoreKeys =
            object.override_store_keys?.map(e => exports.StoreKeyConfig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app_name = message.appName === '' ? undefined : message.appName;
        if (message.beginBlockers) {
            obj.begin_blockers = message.beginBlockers.map(e => e);
        }
        else {
            obj.begin_blockers = message.beginBlockers;
        }
        if (message.endBlockers) {
            obj.end_blockers = message.endBlockers.map(e => e);
        }
        else {
            obj.end_blockers = message.endBlockers;
        }
        if (message.initGenesis) {
            obj.init_genesis = message.initGenesis.map(e => e);
        }
        else {
            obj.init_genesis = message.initGenesis;
        }
        if (message.exportGenesis) {
            obj.export_genesis = message.exportGenesis.map(e => e);
        }
        else {
            obj.export_genesis = message.exportGenesis;
        }
        if (message.overrideStoreKeys) {
            obj.override_store_keys = message.overrideStoreKeys.map(e => e ? exports.StoreKeyConfig.toAmino(e) : undefined);
        }
        else {
            obj.override_store_keys = message.overrideStoreKeys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/Module',
            value: exports.Module.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Module.decode(message.value);
    },
    toProto(message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.app.runtime.v1alpha1.Module',
            value: exports.Module.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Module.typeUrl, exports.Module);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Module.aminoType, exports.Module.typeUrl);
function createBaseStoreKeyConfig() {
    return {
        moduleName: '',
        kvStoreKey: '',
    };
}
exports.StoreKeyConfig = {
    typeUrl: '/cosmos.app.runtime.v1alpha1.StoreKeyConfig',
    aminoType: 'cosmos-sdk/StoreKeyConfig',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.StoreKeyConfig.typeUrl ||
                (typeof o.moduleName === 'string' && typeof o.kvStoreKey === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.StoreKeyConfig.typeUrl ||
                (typeof o.module_name === 'string' &&
                    typeof o.kv_store_key === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.StoreKeyConfig.typeUrl ||
                (typeof o.module_name === 'string' &&
                    typeof o.kv_store_key === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleName !== '') {
            writer.uint32(10).string(message.moduleName);
        }
        if (message.kvStoreKey !== '') {
            writer.uint32(18).string(message.kvStoreKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKeyConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                case 2:
                    message.kvStoreKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStoreKeyConfig();
        message.moduleName = object.moduleName ?? '';
        message.kvStoreKey = object.kvStoreKey ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreKeyConfig();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
            message.kvStoreKey = object.kv_store_key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name =
            message.moduleName === '' ? undefined : message.moduleName;
        obj.kv_store_key =
            message.kvStoreKey === '' ? undefined : message.kvStoreKey;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreKeyConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/StoreKeyConfig',
            value: exports.StoreKeyConfig.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.StoreKeyConfig.decode(message.value);
    },
    toProto(message) {
        return exports.StoreKeyConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.app.runtime.v1alpha1.StoreKeyConfig',
            value: exports.StoreKeyConfig.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.StoreKeyConfig.typeUrl, exports.StoreKeyConfig);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.StoreKeyConfig.aminoType, exports.StoreKeyConfig.typeUrl);
