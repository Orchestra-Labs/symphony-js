"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSetBaseDenomsResponse = exports.MsgSetBaseDenoms = exports.MsgSetMaxPoolPointsPerBlockResponse = exports.MsgSetMaxPoolPointsPerBlock = exports.MsgSetMaxPoolPointsPerTxResponse = exports.MsgSetMaxPoolPointsPerTx = exports.MsgSetInfoByPoolTypeResponse = exports.MsgSetInfoByPoolType = exports.MsgSetDeveloperAccountResponse = exports.MsgSetDeveloperAccount = exports.MsgSetHotRoutesResponse = exports.MsgSetHotRoutes = void 0;
//@ts-nocheck
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgSetHotRoutes() {
    return {
        admin: '',
        hotRoutes: [],
    };
}
exports.MsgSetHotRoutes = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
    aminoType: 'osmosis/MsgSetHotRoutes',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetHotRoutes.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.hotRoutes) &&
                    (!o.hotRoutes.length || protorev_1.TokenPairArbRoutes.is(o.hotRoutes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetHotRoutes.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.hot_routes) &&
                    (!o.hot_routes.length || protorev_1.TokenPairArbRoutes.isSDK(o.hot_routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetHotRoutes.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.hot_routes) &&
                    (!o.hot_routes.length ||
                        protorev_1.TokenPairArbRoutes.isAmino(o.hot_routes[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.hotRoutes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.hotRoutes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetHotRoutes();
        message.admin = object.admin ?? '';
        message.hotRoutes =
            object.hotRoutes?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetHotRoutes();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.hotRoutes =
            object.hot_routes?.map(e => protorev_1.TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        if (message.hotRoutes) {
            obj.hot_routes = message.hotRoutes.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.hot_routes = message.hotRoutes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetHotRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetHotRoutes',
            value: exports.MsgSetHotRoutes.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetHotRoutes.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetHotRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
            value: exports.MsgSetHotRoutes.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetHotRoutes.typeUrl, exports.MsgSetHotRoutes);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetHotRoutes.aminoType, exports.MsgSetHotRoutes.typeUrl);
function createBaseMsgSetHotRoutesResponse() {
    return {};
}
exports.MsgSetHotRoutesResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse',
    aminoType: 'osmosis/protorev/set-hot-routes-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetHotRoutesResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetHotRoutesResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetHotRoutesResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutesResponse();
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
        const message = createBaseMsgSetHotRoutesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetHotRoutesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetHotRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-hot-routes-response',
            value: exports.MsgSetHotRoutesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetHotRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetHotRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse',
            value: exports.MsgSetHotRoutesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetHotRoutesResponse.typeUrl, exports.MsgSetHotRoutesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetHotRoutesResponse.aminoType, exports.MsgSetHotRoutesResponse.typeUrl);
function createBaseMsgSetDeveloperAccount() {
    return {
        admin: '',
        developerAccount: '',
    };
}
exports.MsgSetDeveloperAccount = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
    aminoType: 'osmosis/MsgSetDeveloperAccount',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDeveloperAccount.typeUrl ||
                (typeof o.admin === 'string' && typeof o.developerAccount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDeveloperAccount.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.developer_account === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDeveloperAccount.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.developer_account === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.developerAccount !== '') {
            writer.uint32(18).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.developerAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDeveloperAccount();
        message.admin = object.admin ?? '';
        message.developerAccount = object.developerAccount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDeveloperAccount();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.developer_account !== undefined &&
            object.developer_account !== null) {
            message.developerAccount = object.developer_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        obj.developer_account =
            message.developerAccount === '' ? undefined : message.developerAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDeveloperAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetDeveloperAccount',
            value: exports.MsgSetDeveloperAccount.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDeveloperAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDeveloperAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
            value: exports.MsgSetDeveloperAccount.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetDeveloperAccount.typeUrl, exports.MsgSetDeveloperAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetDeveloperAccount.aminoType, exports.MsgSetDeveloperAccount.typeUrl);
function createBaseMsgSetDeveloperAccountResponse() {
    return {};
}
exports.MsgSetDeveloperAccountResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse',
    aminoType: 'osmosis/protorev/set-developer-account-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetDeveloperAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetDeveloperAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetDeveloperAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccountResponse();
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
        const message = createBaseMsgSetDeveloperAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetDeveloperAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-developer-account-response',
            value: exports.MsgSetDeveloperAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse',
            value: exports.MsgSetDeveloperAccountResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetDeveloperAccountResponse.typeUrl, exports.MsgSetDeveloperAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetDeveloperAccountResponse.aminoType, exports.MsgSetDeveloperAccountResponse.typeUrl);
function createBaseMsgSetInfoByPoolType() {
    return {
        admin: '',
        infoByPoolType: protorev_1.InfoByPoolType.fromPartial({}),
    };
}
exports.MsgSetInfoByPoolType = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
    aminoType: 'osmosis/MsgSetInfoByPoolType',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetInfoByPoolType.typeUrl ||
                (typeof o.admin === 'string' && protorev_1.InfoByPoolType.is(o.infoByPoolType))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetInfoByPoolType.typeUrl ||
                (typeof o.admin === 'string' &&
                    protorev_1.InfoByPoolType.isSDK(o.info_by_pool_type))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetInfoByPoolType.typeUrl ||
                (typeof o.admin === 'string' &&
                    protorev_1.InfoByPoolType.isAmino(o.info_by_pool_type))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.infoByPoolType !== undefined) {
            protorev_1.InfoByPoolType.encode(message.infoByPoolType, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetInfoByPoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.infoByPoolType = protorev_1.InfoByPoolType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetInfoByPoolType();
        message.admin = object.admin ?? '';
        message.infoByPoolType =
            object.infoByPoolType !== undefined && object.infoByPoolType !== null
                ? protorev_1.InfoByPoolType.fromPartial(object.infoByPoolType)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetInfoByPoolType();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.info_by_pool_type !== undefined &&
            object.info_by_pool_type !== null) {
            message.infoByPoolType = protorev_1.InfoByPoolType.fromAmino(object.info_by_pool_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        obj.info_by_pool_type = message.infoByPoolType
            ? protorev_1.InfoByPoolType.toAmino(message.infoByPoolType)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetInfoByPoolType.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetInfoByPoolType',
            value: exports.MsgSetInfoByPoolType.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetInfoByPoolType.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetInfoByPoolType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
            value: exports.MsgSetInfoByPoolType.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetInfoByPoolType.typeUrl, exports.MsgSetInfoByPoolType);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetInfoByPoolType.aminoType, exports.MsgSetInfoByPoolType.typeUrl);
function createBaseMsgSetInfoByPoolTypeResponse() {
    return {};
}
exports.MsgSetInfoByPoolTypeResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse',
    aminoType: 'osmosis/protorev/set-info-by-pool-type-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetInfoByPoolTypeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetInfoByPoolTypeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetInfoByPoolTypeResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetInfoByPoolTypeResponse();
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
        const message = createBaseMsgSetInfoByPoolTypeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetInfoByPoolTypeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetInfoByPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-info-by-pool-type-response',
            value: exports.MsgSetInfoByPoolTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetInfoByPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetInfoByPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse',
            value: exports.MsgSetInfoByPoolTypeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetInfoByPoolTypeResponse.typeUrl, exports.MsgSetInfoByPoolTypeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetInfoByPoolTypeResponse.aminoType, exports.MsgSetInfoByPoolTypeResponse.typeUrl);
function createBaseMsgSetMaxPoolPointsPerTx() {
    return {
        admin: '',
        maxPoolPointsPerTx: BigInt(0),
    };
}
exports.MsgSetMaxPoolPointsPerTx = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
    aminoType: 'osmosis/MsgSetMaxPoolPointsPerTx',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetMaxPoolPointsPerTx.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.maxPoolPointsPerTx === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetMaxPoolPointsPerTx.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_tx === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetMaxPoolPointsPerTx.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_tx === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxPoolPointsPerTx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.maxPoolPointsPerTx = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetMaxPoolPointsPerTx();
        message.admin = object.admin ?? '';
        message.maxPoolPointsPerTx =
            object.maxPoolPointsPerTx !== undefined &&
                object.maxPoolPointsPerTx !== null
                ? BigInt(object.maxPoolPointsPerTx.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetMaxPoolPointsPerTx();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.max_pool_points_per_tx !== undefined &&
            object.max_pool_points_per_tx !== null) {
            message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        obj.max_pool_points_per_tx =
            message.maxPoolPointsPerTx !== BigInt(0)
                ? message.maxPoolPointsPerTx.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetMaxPoolPointsPerTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetMaxPoolPointsPerTx',
            value: exports.MsgSetMaxPoolPointsPerTx.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetMaxPoolPointsPerTx.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetMaxPoolPointsPerTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
            value: exports.MsgSetMaxPoolPointsPerTx.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetMaxPoolPointsPerTx.typeUrl, exports.MsgSetMaxPoolPointsPerTx);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetMaxPoolPointsPerTx.aminoType, exports.MsgSetMaxPoolPointsPerTx.typeUrl);
function createBaseMsgSetMaxPoolPointsPerTxResponse() {
    return {};
}
exports.MsgSetMaxPoolPointsPerTxResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse',
    aminoType: 'osmosis/protorev/set-max-pool-points-per-tx-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetMaxPoolPointsPerTxResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetMaxPoolPointsPerTxResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetMaxPoolPointsPerTxResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
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
        const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetMaxPoolPointsPerTxResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetMaxPoolPointsPerTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-max-pool-points-per-tx-response',
            value: exports.MsgSetMaxPoolPointsPerTxResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetMaxPoolPointsPerTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetMaxPoolPointsPerTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse',
            value: exports.MsgSetMaxPoolPointsPerTxResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetMaxPoolPointsPerTxResponse.typeUrl, exports.MsgSetMaxPoolPointsPerTxResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetMaxPoolPointsPerTxResponse.aminoType, exports.MsgSetMaxPoolPointsPerTxResponse.typeUrl);
function createBaseMsgSetMaxPoolPointsPerBlock() {
    return {
        admin: '',
        maxPoolPointsPerBlock: BigInt(0),
    };
}
exports.MsgSetMaxPoolPointsPerBlock = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
    aminoType: 'osmosis/MsgSetPoolWeights',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetMaxPoolPointsPerBlock.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.maxPoolPointsPerBlock === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetMaxPoolPointsPerBlock.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_block === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetMaxPoolPointsPerBlock.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_block === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.maxPoolPointsPerBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetMaxPoolPointsPerBlock();
        message.admin = object.admin ?? '';
        message.maxPoolPointsPerBlock =
            object.maxPoolPointsPerBlock !== undefined &&
                object.maxPoolPointsPerBlock !== null
                ? BigInt(object.maxPoolPointsPerBlock.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetMaxPoolPointsPerBlock();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.max_pool_points_per_block !== undefined &&
            object.max_pool_points_per_block !== null) {
            message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        obj.max_pool_points_per_block =
            message.maxPoolPointsPerBlock !== BigInt(0)
                ? message.maxPoolPointsPerBlock.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetMaxPoolPointsPerBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetPoolWeights',
            value: exports.MsgSetMaxPoolPointsPerBlock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetMaxPoolPointsPerBlock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetMaxPoolPointsPerBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
            value: exports.MsgSetMaxPoolPointsPerBlock.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetMaxPoolPointsPerBlock.typeUrl, exports.MsgSetMaxPoolPointsPerBlock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetMaxPoolPointsPerBlock.aminoType, exports.MsgSetMaxPoolPointsPerBlock.typeUrl);
function createBaseMsgSetMaxPoolPointsPerBlockResponse() {
    return {};
}
exports.MsgSetMaxPoolPointsPerBlockResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse',
    aminoType: 'osmosis/protorev/set-max-pool-points-per-block-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
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
        const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetMaxPoolPointsPerBlockResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetMaxPoolPointsPerBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-max-pool-points-per-block-response',
            value: exports.MsgSetMaxPoolPointsPerBlockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetMaxPoolPointsPerBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse',
            value: exports.MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetMaxPoolPointsPerBlockResponse.typeUrl, exports.MsgSetMaxPoolPointsPerBlockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetMaxPoolPointsPerBlockResponse.aminoType, exports.MsgSetMaxPoolPointsPerBlockResponse.typeUrl);
function createBaseMsgSetBaseDenoms() {
    return {
        admin: '',
        baseDenoms: [],
    };
}
exports.MsgSetBaseDenoms = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
    aminoType: 'osmosis/MsgSetBaseDenoms',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetBaseDenoms.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || protorev_1.BaseDenom.is(o.baseDenoms[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetBaseDenoms.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || protorev_1.BaseDenom.isSDK(o.base_denoms[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetBaseDenoms.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || protorev_1.BaseDenom.isAmino(o.base_denoms[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.baseDenoms) {
            protorev_1.BaseDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBaseDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.baseDenoms.push(protorev_1.BaseDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetBaseDenoms();
        message.admin = object.admin ?? '';
        message.baseDenoms =
            object.baseDenoms?.map(e => protorev_1.BaseDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetBaseDenoms();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.baseDenoms =
            object.base_denoms?.map(e => protorev_1.BaseDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? protorev_1.BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetBaseDenoms.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetBaseDenoms',
            value: exports.MsgSetBaseDenoms.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetBaseDenoms.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetBaseDenoms.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
            value: exports.MsgSetBaseDenoms.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetBaseDenoms.typeUrl, exports.MsgSetBaseDenoms);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetBaseDenoms.aminoType, exports.MsgSetBaseDenoms.typeUrl);
function createBaseMsgSetBaseDenomsResponse() {
    return {};
}
exports.MsgSetBaseDenomsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse',
    aminoType: 'osmosis/protorev/set-base-denoms-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetBaseDenomsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetBaseDenomsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetBaseDenomsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBaseDenomsResponse();
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
        const message = createBaseMsgSetBaseDenomsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetBaseDenomsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetBaseDenomsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-base-denoms-response',
            value: exports.MsgSetBaseDenomsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetBaseDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetBaseDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse',
            value: exports.MsgSetBaseDenomsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetBaseDenomsResponse.typeUrl, exports.MsgSetBaseDenomsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetBaseDenomsResponse.aminoType, exports.MsgSetBaseDenomsResponse.typeUrl);
