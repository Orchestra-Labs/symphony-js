//@ts-nocheck
import { TokenPairArbRoutes, InfoByPoolType, BaseDenom, } from './protorev';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseMsgSetHotRoutes() {
    return {
        admin: '',
        hotRoutes: [],
    };
}
export const MsgSetHotRoutes = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
    aminoType: 'osmosis/MsgSetHotRoutes',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetHotRoutes.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.hotRoutes) &&
                    (!o.hotRoutes.length || TokenPairArbRoutes.is(o.hotRoutes[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetHotRoutes.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.hot_routes) &&
                    (!o.hot_routes.length || TokenPairArbRoutes.isSDK(o.hot_routes[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetHotRoutes.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.hot_routes) &&
                    (!o.hot_routes.length ||
                        TokenPairArbRoutes.isAmino(o.hot_routes[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.hotRoutes) {
            TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
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
            object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetHotRoutes();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.hotRoutes =
            object.hot_routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        if (message.hotRoutes) {
            obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.hot_routes = message.hotRoutes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetHotRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetHotRoutes',
            value: MsgSetHotRoutes.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetHotRoutes.decode(message.value);
    },
    toProto(message) {
        return MsgSetHotRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
            value: MsgSetHotRoutes.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetHotRoutes.typeUrl, MsgSetHotRoutes);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetHotRoutes.aminoType, MsgSetHotRoutes.typeUrl);
function createBaseMsgSetHotRoutesResponse() {
    return {};
}
export const MsgSetHotRoutesResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse',
    aminoType: 'osmosis/protorev/set-hot-routes-response',
    is(o) {
        return o && o.$typeUrl === MsgSetHotRoutesResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetHotRoutesResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetHotRoutesResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetHotRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-hot-routes-response',
            value: MsgSetHotRoutesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetHotRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetHotRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse',
            value: MsgSetHotRoutesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetHotRoutesResponse.typeUrl, MsgSetHotRoutesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetHotRoutesResponse.aminoType, MsgSetHotRoutesResponse.typeUrl);
function createBaseMsgSetDeveloperAccount() {
    return {
        admin: '',
        developerAccount: '',
    };
}
export const MsgSetDeveloperAccount = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
    aminoType: 'osmosis/MsgSetDeveloperAccount',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetDeveloperAccount.typeUrl ||
                (typeof o.admin === 'string' && typeof o.developerAccount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetDeveloperAccount.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.developer_account === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetDeveloperAccount.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.developer_account === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.developerAccount !== '') {
            writer.uint32(18).string(message.developerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetDeveloperAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetDeveloperAccount',
            value: MsgSetDeveloperAccount.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetDeveloperAccount.decode(message.value);
    },
    toProto(message) {
        return MsgSetDeveloperAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
            value: MsgSetDeveloperAccount.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetDeveloperAccount.typeUrl, MsgSetDeveloperAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDeveloperAccount.aminoType, MsgSetDeveloperAccount.typeUrl);
function createBaseMsgSetDeveloperAccountResponse() {
    return {};
}
export const MsgSetDeveloperAccountResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse',
    aminoType: 'osmosis/protorev/set-developer-account-response',
    is(o) {
        return o && o.$typeUrl === MsgSetDeveloperAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetDeveloperAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetDeveloperAccountResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-developer-account-response',
            value: MsgSetDeveloperAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse',
            value: MsgSetDeveloperAccountResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetDeveloperAccountResponse.typeUrl, MsgSetDeveloperAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDeveloperAccountResponse.aminoType, MsgSetDeveloperAccountResponse.typeUrl);
function createBaseMsgSetInfoByPoolType() {
    return {
        admin: '',
        infoByPoolType: InfoByPoolType.fromPartial({}),
    };
}
export const MsgSetInfoByPoolType = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
    aminoType: 'osmosis/MsgSetInfoByPoolType',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetInfoByPoolType.typeUrl ||
                (typeof o.admin === 'string' && InfoByPoolType.is(o.infoByPoolType))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetInfoByPoolType.typeUrl ||
                (typeof o.admin === 'string' &&
                    InfoByPoolType.isSDK(o.info_by_pool_type))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetInfoByPoolType.typeUrl ||
                (typeof o.admin === 'string' &&
                    InfoByPoolType.isAmino(o.info_by_pool_type))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.infoByPoolType !== undefined) {
            InfoByPoolType.encode(message.infoByPoolType, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetInfoByPoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.infoByPoolType = InfoByPoolType.decode(reader, reader.uint32());
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
                ? InfoByPoolType.fromPartial(object.infoByPoolType)
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
            message.infoByPoolType = InfoByPoolType.fromAmino(object.info_by_pool_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        obj.info_by_pool_type = message.infoByPoolType
            ? InfoByPoolType.toAmino(message.infoByPoolType)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetInfoByPoolType.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetInfoByPoolType',
            value: MsgSetInfoByPoolType.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetInfoByPoolType.decode(message.value);
    },
    toProto(message) {
        return MsgSetInfoByPoolType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
            value: MsgSetInfoByPoolType.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetInfoByPoolType.typeUrl, MsgSetInfoByPoolType);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetInfoByPoolType.aminoType, MsgSetInfoByPoolType.typeUrl);
function createBaseMsgSetInfoByPoolTypeResponse() {
    return {};
}
export const MsgSetInfoByPoolTypeResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse',
    aminoType: 'osmosis/protorev/set-info-by-pool-type-response',
    is(o) {
        return o && o.$typeUrl === MsgSetInfoByPoolTypeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetInfoByPoolTypeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetInfoByPoolTypeResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetInfoByPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-info-by-pool-type-response',
            value: MsgSetInfoByPoolTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetInfoByPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetInfoByPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse',
            value: MsgSetInfoByPoolTypeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetInfoByPoolTypeResponse.typeUrl, MsgSetInfoByPoolTypeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetInfoByPoolTypeResponse.aminoType, MsgSetInfoByPoolTypeResponse.typeUrl);
function createBaseMsgSetMaxPoolPointsPerTx() {
    return {
        admin: '',
        maxPoolPointsPerTx: BigInt(0),
    };
}
export const MsgSetMaxPoolPointsPerTx = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
    aminoType: 'osmosis/MsgSetMaxPoolPointsPerTx',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetMaxPoolPointsPerTx.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.maxPoolPointsPerTx === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetMaxPoolPointsPerTx.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_tx === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetMaxPoolPointsPerTx.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_tx === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxPoolPointsPerTx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetMaxPoolPointsPerTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetMaxPoolPointsPerTx',
            value: MsgSetMaxPoolPointsPerTx.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetMaxPoolPointsPerTx.decode(message.value);
    },
    toProto(message) {
        return MsgSetMaxPoolPointsPerTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
            value: MsgSetMaxPoolPointsPerTx.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerTx.typeUrl, MsgSetMaxPoolPointsPerTx);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerTx.aminoType, MsgSetMaxPoolPointsPerTx.typeUrl);
function createBaseMsgSetMaxPoolPointsPerTxResponse() {
    return {};
}
export const MsgSetMaxPoolPointsPerTxResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse',
    aminoType: 'osmosis/protorev/set-max-pool-points-per-tx-response',
    is(o) {
        return o && o.$typeUrl === MsgSetMaxPoolPointsPerTxResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetMaxPoolPointsPerTxResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetMaxPoolPointsPerTxResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetMaxPoolPointsPerTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-max-pool-points-per-tx-response',
            value: MsgSetMaxPoolPointsPerTxResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetMaxPoolPointsPerTxResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetMaxPoolPointsPerTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse',
            value: MsgSetMaxPoolPointsPerTxResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerTxResponse.typeUrl, MsgSetMaxPoolPointsPerTxResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerTxResponse.aminoType, MsgSetMaxPoolPointsPerTxResponse.typeUrl);
function createBaseMsgSetMaxPoolPointsPerBlock() {
    return {
        admin: '',
        maxPoolPointsPerBlock: BigInt(0),
    };
}
export const MsgSetMaxPoolPointsPerBlock = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
    aminoType: 'osmosis/MsgSetPoolWeights',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetMaxPoolPointsPerBlock.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.maxPoolPointsPerBlock === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetMaxPoolPointsPerBlock.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_block === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetMaxPoolPointsPerBlock.typeUrl ||
                (typeof o.admin === 'string' &&
                    typeof o.max_pool_points_per_block === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxPoolPointsPerBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetMaxPoolPointsPerBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetPoolWeights',
            value: MsgSetMaxPoolPointsPerBlock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetMaxPoolPointsPerBlock.decode(message.value);
    },
    toProto(message) {
        return MsgSetMaxPoolPointsPerBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
            value: MsgSetMaxPoolPointsPerBlock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerBlock.typeUrl, MsgSetMaxPoolPointsPerBlock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerBlock.aminoType, MsgSetMaxPoolPointsPerBlock.typeUrl);
function createBaseMsgSetMaxPoolPointsPerBlockResponse() {
    return {};
}
export const MsgSetMaxPoolPointsPerBlockResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse',
    aminoType: 'osmosis/protorev/set-max-pool-points-per-block-response',
    is(o) {
        return o && o.$typeUrl === MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetMaxPoolPointsPerBlockResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetMaxPoolPointsPerBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-max-pool-points-per-block-response',
            value: MsgSetMaxPoolPointsPerBlockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetMaxPoolPointsPerBlockResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse',
            value: MsgSetMaxPoolPointsPerBlockResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetMaxPoolPointsPerBlockResponse.typeUrl, MsgSetMaxPoolPointsPerBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetMaxPoolPointsPerBlockResponse.aminoType, MsgSetMaxPoolPointsPerBlockResponse.typeUrl);
function createBaseMsgSetBaseDenoms() {
    return {
        admin: '',
        baseDenoms: [],
    };
}
export const MsgSetBaseDenoms = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
    aminoType: 'osmosis/MsgSetBaseDenoms',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetBaseDenoms.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || BaseDenom.is(o.baseDenoms[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetBaseDenoms.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || BaseDenom.isSDK(o.base_denoms[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetBaseDenoms.typeUrl ||
                (typeof o.admin === 'string' &&
                    Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || BaseDenom.isAmino(o.base_denoms[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== '') {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.baseDenoms) {
            BaseDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBaseDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
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
            object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetBaseDenoms();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.baseDenoms =
            object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === '' ? undefined : message.admin;
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetBaseDenoms.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetBaseDenoms',
            value: MsgSetBaseDenoms.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetBaseDenoms.decode(message.value);
    },
    toProto(message) {
        return MsgSetBaseDenoms.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
            value: MsgSetBaseDenoms.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetBaseDenoms.typeUrl, MsgSetBaseDenoms);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetBaseDenoms.aminoType, MsgSetBaseDenoms.typeUrl);
function createBaseMsgSetBaseDenomsResponse() {
    return {};
}
export const MsgSetBaseDenomsResponse = {
    typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse',
    aminoType: 'osmosis/protorev/set-base-denoms-response',
    is(o) {
        return o && o.$typeUrl === MsgSetBaseDenomsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetBaseDenomsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetBaseDenomsResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetBaseDenomsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/set-base-denoms-response',
            value: MsgSetBaseDenomsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetBaseDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetBaseDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse',
            value: MsgSetBaseDenomsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetBaseDenomsResponse.typeUrl, MsgSetBaseDenomsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetBaseDenomsResponse.aminoType, MsgSetBaseDenomsResponse.typeUrl);
