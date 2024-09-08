//@ts-nocheck
import { Plan, ModuleVersion, } from './upgrade';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { bytesFromBase64, base64FromBytes } from '../../../helpers';
function createBaseQueryCurrentPlanRequest() {
    return {};
}
export const QueryCurrentPlanRequest = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest',
    aminoType: 'cosmos-sdk/QueryCurrentPlanRequest',
    is(o) {
        return o && o.$typeUrl === QueryCurrentPlanRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryCurrentPlanRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryCurrentPlanRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryCurrentPlanRequest',
            value: QueryCurrentPlanRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCurrentPlanRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest',
            value: QueryCurrentPlanRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCurrentPlanRequest.typeUrl, QueryCurrentPlanRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCurrentPlanRequest.aminoType, QueryCurrentPlanRequest.typeUrl);
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: undefined,
    };
}
export const QueryCurrentPlanResponse = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse',
    aminoType: 'cosmos-sdk/QueryCurrentPlanResponse',
    is(o) {
        return o && o.$typeUrl === QueryCurrentPlanResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryCurrentPlanResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryCurrentPlanResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan =
            object.plan !== undefined && object.plan !== null
                ? Plan.fromPartial(object.plan)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentPlanResponse();
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryCurrentPlanResponse',
            value: QueryCurrentPlanResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCurrentPlanResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse',
            value: QueryCurrentPlanResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCurrentPlanResponse.typeUrl, QueryCurrentPlanResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCurrentPlanResponse.aminoType, QueryCurrentPlanResponse.typeUrl);
function createBaseQueryAppliedPlanRequest() {
    return {
        name: '',
    };
}
export const QueryAppliedPlanRequest = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest',
    aminoType: 'cosmos-sdk/QueryAppliedPlanRequest',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAppliedPlanRequest.typeUrl ||
                typeof o.name === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAppliedPlanRequest.typeUrl ||
                typeof o.name === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAppliedPlanRequest.typeUrl ||
                typeof o.name === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === '' ? undefined : message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAppliedPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryAppliedPlanRequest',
            value: QueryAppliedPlanRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAppliedPlanRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAppliedPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest',
            value: QueryAppliedPlanRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAppliedPlanRequest.typeUrl, QueryAppliedPlanRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAppliedPlanRequest.aminoType, QueryAppliedPlanRequest.typeUrl);
function createBaseQueryAppliedPlanResponse() {
    return {
        height: BigInt(0),
    };
}
export const QueryAppliedPlanResponse = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse',
    aminoType: 'cosmos-sdk/QueryAppliedPlanResponse',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAppliedPlanResponse.typeUrl ||
                typeof o.height === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAppliedPlanResponse.typeUrl ||
                typeof o.height === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAppliedPlanResponse.typeUrl ||
                typeof o.height === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height =
            object.height !== undefined && object.height !== null
                ? BigInt(object.height.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height =
            message.height !== BigInt(0) ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAppliedPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryAppliedPlanResponse',
            value: QueryAppliedPlanResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAppliedPlanResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAppliedPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse',
            value: QueryAppliedPlanResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAppliedPlanResponse.typeUrl, QueryAppliedPlanResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAppliedPlanResponse.aminoType, QueryAppliedPlanResponse.typeUrl);
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        lastHeight: BigInt(0),
    };
}
export const QueryUpgradedConsensusStateRequest = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest',
    aminoType: 'cosmos-sdk/QueryUpgradedConsensusStateRequest',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl ||
                typeof o.lastHeight === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl ||
                typeof o.last_height === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl ||
                typeof o.last_height === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lastHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight =
            object.lastHeight !== undefined && object.lastHeight !== null
                ? BigInt(object.lastHeight.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        if (object.last_height !== undefined && object.last_height !== null) {
            message.lastHeight = BigInt(object.last_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_height =
            message.lastHeight !== BigInt(0)
                ? message.lastHeight.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryUpgradedConsensusStateRequest',
            value: QueryUpgradedConsensusStateRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest',
            value: QueryUpgradedConsensusStateRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryUpgradedConsensusStateRequest.typeUrl, QueryUpgradedConsensusStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUpgradedConsensusStateRequest.aminoType, QueryUpgradedConsensusStateRequest.typeUrl);
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: new Uint8Array(),
    };
}
export const QueryUpgradedConsensusStateResponse = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse',
    aminoType: 'cosmos-sdk/QueryUpgradedConsensusStateResponse',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl ||
                o.upgradedConsensusState instanceof Uint8Array ||
                typeof o.upgradedConsensusState === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl ||
                o.upgraded_consensus_state instanceof Uint8Array ||
                typeof o.upgraded_consensus_state === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl ||
                o.upgraded_consensus_state instanceof Uint8Array ||
                typeof o.upgraded_consensus_state === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgradedConsensusState = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState =
            object.upgradedConsensusState ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined &&
            object.upgraded_consensus_state !== null) {
            message.upgradedConsensusState = bytesFromBase64(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState
            ? base64FromBytes(message.upgradedConsensusState)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryUpgradedConsensusStateResponse',
            value: QueryUpgradedConsensusStateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse',
            value: QueryUpgradedConsensusStateResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryUpgradedConsensusStateResponse.typeUrl, QueryUpgradedConsensusStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUpgradedConsensusStateResponse.aminoType, QueryUpgradedConsensusStateResponse.typeUrl);
function createBaseQueryModuleVersionsRequest() {
    return {
        moduleName: '',
    };
}
export const QueryModuleVersionsRequest = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest',
    aminoType: 'cosmos-sdk/QueryModuleVersionsRequest',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryModuleVersionsRequest.typeUrl ||
                typeof o.moduleName === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryModuleVersionsRequest.typeUrl ||
                typeof o.module_name === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryModuleVersionsRequest.typeUrl ||
                typeof o.module_name === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.moduleName !== '') {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = object.moduleName ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsRequest();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name =
            message.moduleName === '' ? undefined : message.moduleName;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleVersionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryModuleVersionsRequest',
            value: QueryModuleVersionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryModuleVersionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleVersionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest',
            value: QueryModuleVersionsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryModuleVersionsRequest.typeUrl, QueryModuleVersionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryModuleVersionsRequest.aminoType, QueryModuleVersionsRequest.typeUrl);
function createBaseQueryModuleVersionsResponse() {
    return {
        moduleVersions: [],
    };
}
export const QueryModuleVersionsResponse = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse',
    aminoType: 'cosmos-sdk/QueryModuleVersionsResponse',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryModuleVersionsResponse.typeUrl ||
                (Array.isArray(o.moduleVersions) &&
                    (!o.moduleVersions.length || ModuleVersion.is(o.moduleVersions[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryModuleVersionsResponse.typeUrl ||
                (Array.isArray(o.module_versions) &&
                    (!o.module_versions.length ||
                        ModuleVersion.isSDK(o.module_versions[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryModuleVersionsResponse.typeUrl ||
                (Array.isArray(o.module_versions) &&
                    (!o.module_versions.length ||
                        ModuleVersion.isAmino(o.module_versions[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.moduleVersions) {
            ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions =
            object.moduleVersions?.map(e => ModuleVersion.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions =
            object.module_versions?.map(e => ModuleVersion.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleVersions) {
            obj.module_versions = message.moduleVersions.map(e => e ? ModuleVersion.toAmino(e) : undefined);
        }
        else {
            obj.module_versions = message.moduleVersions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleVersionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryModuleVersionsResponse',
            value: QueryModuleVersionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryModuleVersionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleVersionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse',
            value: QueryModuleVersionsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryModuleVersionsResponse.typeUrl, QueryModuleVersionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryModuleVersionsResponse.aminoType, QueryModuleVersionsResponse.typeUrl);
function createBaseQueryAuthorityRequest() {
    return {};
}
export const QueryAuthorityRequest = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryAuthorityRequest',
    aminoType: 'cosmos-sdk/QueryAuthorityRequest',
    is(o) {
        return o && o.$typeUrl === QueryAuthorityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAuthorityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryAuthorityRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityRequest();
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
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuthorityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryAuthorityRequest',
            value: QueryAuthorityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAuthorityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuthorityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryAuthorityRequest',
            value: QueryAuthorityRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAuthorityRequest.typeUrl, QueryAuthorityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAuthorityRequest.aminoType, QueryAuthorityRequest.typeUrl);
function createBaseQueryAuthorityResponse() {
    return {
        address: '',
    };
}
export const QueryAuthorityResponse = {
    typeUrl: '/cosmos.upgrade.v1beta1.QueryAuthorityResponse',
    aminoType: 'cosmos-sdk/QueryAuthorityResponse',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAuthorityResponse.typeUrl ||
                typeof o.address === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAuthorityResponse.typeUrl ||
                typeof o.address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAuthorityResponse.typeUrl ||
                typeof o.address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAuthorityResponse();
        message.address = object.address ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuthorityResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === '' ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuthorityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'cosmos-sdk/QueryAuthorityResponse',
            value: QueryAuthorityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAuthorityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAuthorityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/cosmos.upgrade.v1beta1.QueryAuthorityResponse',
            value: QueryAuthorityResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAuthorityResponse.typeUrl, QueryAuthorityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAuthorityResponse.aminoType, QueryAuthorityResponse.typeUrl);
