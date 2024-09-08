//@ts-nocheck
import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination';
import { Params } from './params';
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord, ConcentratedPoolUserPositionRecord, } from './superfluid';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { SyntheticLock, } from '../lockup/lock';
import { DelegationResponse, } from '../../cosmos/staking/v1beta1/staking';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
import { isSet } from '../../helpers';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.superfluid.QueryParamsRequest',
    aminoType: 'osmosis/query-params-request',
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-params-request',
            value: QueryParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryParamsRequest',
            value: QueryParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const QueryParamsResponse = {
    typeUrl: '/osmosis.superfluid.QueryParamsResponse',
    aminoType: 'osmosis/query-params-response',
    is(o) {
        return (o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params)));
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
        const message = createBaseQueryParamsResponse();
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
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
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
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-params-response',
            value: QueryParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseAssetTypeRequest() {
    return {
        denom: '',
    };
}
export const AssetTypeRequest = {
    typeUrl: '/osmosis.superfluid.AssetTypeRequest',
    aminoType: 'osmosis/asset-type-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AssetTypeRequest.typeUrl || typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AssetTypeRequest.typeUrl || typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AssetTypeRequest.typeUrl || typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetTypeRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/asset-type-request',
            value: AssetTypeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AssetTypeRequest.decode(message.value);
    },
    toProto(message) {
        return AssetTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AssetTypeRequest',
            value: AssetTypeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AssetTypeRequest.typeUrl, AssetTypeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetTypeRequest.aminoType, AssetTypeRequest.typeUrl);
function createBaseAssetTypeResponse() {
    return {
        assetType: 0,
    };
}
export const AssetTypeResponse = {
    typeUrl: '/osmosis.superfluid.AssetTypeResponse',
    aminoType: 'osmosis/asset-type-response',
    is(o) {
        return (o && (o.$typeUrl === AssetTypeResponse.typeUrl || isSet(o.assetType)));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === AssetTypeResponse.typeUrl || isSet(o.asset_type)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === AssetTypeResponse.typeUrl || isSet(o.asset_type)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.assetType !== 0) {
            writer.uint32(8).int32(message.assetType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeResponse();
        message.assetType = object.assetType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetTypeResponse();
        if (object.asset_type !== undefined && object.asset_type !== null) {
            message.assetType = object.asset_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset_type = message.assetType === 0 ? undefined : message.assetType;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/asset-type-response',
            value: AssetTypeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AssetTypeResponse.decode(message.value);
    },
    toProto(message) {
        return AssetTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AssetTypeResponse',
            value: AssetTypeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AssetTypeResponse.typeUrl, AssetTypeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetTypeResponse.aminoType, AssetTypeResponse.typeUrl);
function createBaseAllAssetsRequest() {
    return {};
}
export const AllAssetsRequest = {
    typeUrl: '/osmosis.superfluid.AllAssetsRequest',
    aminoType: 'osmosis/all-assets-request',
    is(o) {
        return o && o.$typeUrl === AllAssetsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === AllAssetsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === AllAssetsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsRequest();
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
        const message = createBaseAllAssetsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseAllAssetsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return AllAssetsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/all-assets-request',
            value: AllAssetsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return AllAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AllAssetsRequest',
            value: AllAssetsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllAssetsRequest.typeUrl, AllAssetsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllAssetsRequest.aminoType, AllAssetsRequest.typeUrl);
function createBaseAllAssetsResponse() {
    return {
        assets: [],
    };
}
export const AllAssetsResponse = {
    typeUrl: '/osmosis.superfluid.AllAssetsResponse',
    aminoType: 'osmosis/all-assets-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AllAssetsResponse.typeUrl ||
                (Array.isArray(o.assets) &&
                    (!o.assets.length || SuperfluidAsset.is(o.assets[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AllAssetsResponse.typeUrl ||
                (Array.isArray(o.assets) &&
                    (!o.assets.length || SuperfluidAsset.isSDK(o.assets[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AllAssetsResponse.typeUrl ||
                (Array.isArray(o.assets) &&
                    (!o.assets.length || SuperfluidAsset.isAmino(o.assets[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllAssetsResponse();
        message.assets =
            object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllAssetsResponse();
        message.assets =
            object.assets?.map(e => SuperfluidAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AllAssetsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/all-assets-response',
            value: AllAssetsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return AllAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AllAssetsResponse',
            value: AllAssetsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllAssetsResponse.typeUrl, AllAssetsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllAssetsResponse.aminoType, AllAssetsResponse.typeUrl);
function createBaseAssetMultiplierRequest() {
    return {
        denom: '',
    };
}
export const AssetMultiplierRequest = {
    typeUrl: '/osmosis.superfluid.AssetMultiplierRequest',
    aminoType: 'osmosis/asset-multiplier-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AssetMultiplierRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AssetMultiplierRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AssetMultiplierRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetMultiplierRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetMultiplierRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/asset-multiplier-request',
            value: AssetMultiplierRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AssetMultiplierRequest.decode(message.value);
    },
    toProto(message) {
        return AssetMultiplierRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AssetMultiplierRequest',
            value: AssetMultiplierRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AssetMultiplierRequest.typeUrl, AssetMultiplierRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetMultiplierRequest.aminoType, AssetMultiplierRequest.typeUrl);
function createBaseAssetMultiplierResponse() {
    return {
        osmoEquivalentMultiplier: undefined,
    };
}
export const AssetMultiplierResponse = {
    typeUrl: '/osmosis.superfluid.AssetMultiplierResponse',
    aminoType: 'osmosis/asset-multiplier-response',
    is(o) {
        return o && o.$typeUrl === AssetMultiplierResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === AssetMultiplierResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === AssetMultiplierResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.osmoEquivalentMultiplier !== undefined) {
            OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osmoEquivalentMultiplier =
                        OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierResponse();
        message.osmoEquivalentMultiplier =
            object.osmoEquivalentMultiplier !== undefined &&
                object.osmoEquivalentMultiplier !== null
                ? OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetMultiplierResponse();
        if (object.osmo_equivalent_multiplier !== undefined &&
            object.osmo_equivalent_multiplier !== null) {
            message.osmoEquivalentMultiplier =
                OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier
            ? OsmoEquivalentMultiplierRecord.toAmino(message.osmoEquivalentMultiplier)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetMultiplierResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/asset-multiplier-response',
            value: AssetMultiplierResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AssetMultiplierResponse.decode(message.value);
    },
    toProto(message) {
        return AssetMultiplierResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AssetMultiplierResponse',
            value: AssetMultiplierResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AssetMultiplierResponse.typeUrl, AssetMultiplierResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetMultiplierResponse.aminoType, AssetMultiplierResponse.typeUrl);
function createBaseSuperfluidIntermediaryAccountInfo() {
    return {
        denom: '',
        valAddr: '',
        gaugeId: BigInt(0),
        address: '',
    };
}
export const SuperfluidIntermediaryAccountInfo = {
    typeUrl: '/osmosis.superfluid.SuperfluidIntermediaryAccountInfo',
    aminoType: 'osmosis/superfluid-intermediary-account-info',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidIntermediaryAccountInfo.typeUrl ||
                (typeof o.denom === 'string' &&
                    typeof o.valAddr === 'string' &&
                    typeof o.gaugeId === 'bigint' &&
                    typeof o.address === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidIntermediaryAccountInfo.typeUrl ||
                (typeof o.denom === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.gauge_id === 'bigint' &&
                    typeof o.address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidIntermediaryAccountInfo.typeUrl ||
                (typeof o.denom === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.gauge_id === 'bigint' &&
                    typeof o.address === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.valAddr !== '') {
            writer.uint32(18).string(message.valAddr);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        if (message.address !== '') {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.valAddr = reader.string();
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                case 4:
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
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        message.denom = object.denom ?? '';
        message.valAddr = object.valAddr ?? '';
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        message.address = object.address ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        obj.address = message.address === '' ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidIntermediaryAccountInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-intermediary-account-info',
            value: SuperfluidIntermediaryAccountInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidIntermediaryAccountInfo.decode(message.value);
    },
    toProto(message) {
        return SuperfluidIntermediaryAccountInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidIntermediaryAccountInfo',
            value: SuperfluidIntermediaryAccountInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidIntermediaryAccountInfo.typeUrl, SuperfluidIntermediaryAccountInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidIntermediaryAccountInfo.aminoType, SuperfluidIntermediaryAccountInfo.typeUrl);
function createBaseAllIntermediaryAccountsRequest() {
    return {
        pagination: undefined,
    };
}
export const AllIntermediaryAccountsRequest = {
    typeUrl: '/osmosis.superfluid.AllIntermediaryAccountsRequest',
    aminoType: 'osmosis/all-intermediary-accounts-request',
    is(o) {
        return o && o.$typeUrl === AllIntermediaryAccountsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === AllIntermediaryAccountsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === AllIntermediaryAccountsRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseAllIntermediaryAccountsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllIntermediaryAccountsRequest();
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
        return AllIntermediaryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/all-intermediary-accounts-request',
            value: AllIntermediaryAccountsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllIntermediaryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return AllIntermediaryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AllIntermediaryAccountsRequest',
            value: AllIntermediaryAccountsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllIntermediaryAccountsRequest.typeUrl, AllIntermediaryAccountsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllIntermediaryAccountsRequest.aminoType, AllIntermediaryAccountsRequest.typeUrl);
function createBaseAllIntermediaryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined,
    };
}
export const AllIntermediaryAccountsResponse = {
    typeUrl: '/osmosis.superfluid.AllIntermediaryAccountsResponse',
    aminoType: 'osmosis/all-intermediary-accounts-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AllIntermediaryAccountsResponse.typeUrl ||
                (Array.isArray(o.accounts) &&
                    (!o.accounts.length ||
                        SuperfluidIntermediaryAccountInfo.is(o.accounts[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AllIntermediaryAccountsResponse.typeUrl ||
                (Array.isArray(o.accounts) &&
                    (!o.accounts.length ||
                        SuperfluidIntermediaryAccountInfo.isSDK(o.accounts[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AllIntermediaryAccountsResponse.typeUrl ||
                (Array.isArray(o.accounts) &&
                    (!o.accounts.length ||
                        SuperfluidIntermediaryAccountInfo.isAmino(o.accounts[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
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
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts =
            object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts =
            object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AllIntermediaryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/all-intermediary-accounts-response',
            value: AllIntermediaryAccountsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllIntermediaryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return AllIntermediaryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.AllIntermediaryAccountsResponse',
            value: AllIntermediaryAccountsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllIntermediaryAccountsResponse.typeUrl, AllIntermediaryAccountsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllIntermediaryAccountsResponse.aminoType, AllIntermediaryAccountsResponse.typeUrl);
function createBaseConnectedIntermediaryAccountRequest() {
    return {
        lockId: BigInt(0),
    };
}
export const ConnectedIntermediaryAccountRequest = {
    typeUrl: '/osmosis.superfluid.ConnectedIntermediaryAccountRequest',
    aminoType: 'osmosis/connected-intermediary-account-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ConnectedIntermediaryAccountRequest.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ConnectedIntermediaryAccountRequest.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ConnectedIntermediaryAccountRequest.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountRequest();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConnectedIntermediaryAccountRequest();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectedIntermediaryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/connected-intermediary-account-request',
            value: ConnectedIntermediaryAccountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConnectedIntermediaryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return ConnectedIntermediaryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.ConnectedIntermediaryAccountRequest',
            value: ConnectedIntermediaryAccountRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConnectedIntermediaryAccountRequest.typeUrl, ConnectedIntermediaryAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ConnectedIntermediaryAccountRequest.aminoType, ConnectedIntermediaryAccountRequest.typeUrl);
function createBaseConnectedIntermediaryAccountResponse() {
    return {
        account: undefined,
    };
}
export const ConnectedIntermediaryAccountResponse = {
    typeUrl: '/osmosis.superfluid.ConnectedIntermediaryAccountResponse',
    aminoType: 'osmosis/connected-intermediary-account-response',
    is(o) {
        return o && o.$typeUrl === ConnectedIntermediaryAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ConnectedIntermediaryAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ConnectedIntermediaryAccountResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== undefined) {
            SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        message.account =
            object.account !== undefined && object.account !== null
                ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = SuperfluidIntermediaryAccountInfo.fromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account
            ? SuperfluidIntermediaryAccountInfo.toAmino(message.account)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectedIntermediaryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/connected-intermediary-account-response',
            value: ConnectedIntermediaryAccountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConnectedIntermediaryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return ConnectedIntermediaryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.ConnectedIntermediaryAccountResponse',
            value: ConnectedIntermediaryAccountResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConnectedIntermediaryAccountResponse.typeUrl, ConnectedIntermediaryAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ConnectedIntermediaryAccountResponse.aminoType, ConnectedIntermediaryAccountResponse.typeUrl);
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
    return {
        denom: '',
    };
}
export const QueryTotalDelegationByValidatorForDenomRequest = {
    typeUrl: '/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest',
    aminoType: 'osmosis/query-total-delegation-by-validator-for-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByValidatorForDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByValidatorForDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByValidatorForDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByValidatorForDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-total-delegation-by-validator-for-denom-request',
            value: QueryTotalDelegationByValidatorForDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByValidatorForDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest',
            value: QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalDelegationByValidatorForDenomRequest.typeUrl, QueryTotalDelegationByValidatorForDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalDelegationByValidatorForDenomRequest.aminoType, QueryTotalDelegationByValidatorForDenomRequest.typeUrl);
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
    return {
        assets: [],
    };
}
export const QueryTotalDelegationByValidatorForDenomResponse = {
    typeUrl: '/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse',
    aminoType: 'osmosis/query-total-delegation-by-validator-for-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByValidatorForDenomResponse.typeUrl ||
                (Array.isArray(o.assets) &&
                    (!o.assets.length || Delegations.is(o.assets[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByValidatorForDenomResponse.typeUrl ||
                (Array.isArray(o.assets) &&
                    (!o.assets.length || Delegations.isSDK(o.assets[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByValidatorForDenomResponse.typeUrl ||
                (Array.isArray(o.assets) &&
                    (!o.assets.length || Delegations.isAmino(o.assets[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            Delegations.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(Delegations.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map(e => Delegations.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map(e => Delegations.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Delegations.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByValidatorForDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-total-delegation-by-validator-for-denom-response',
            value: QueryTotalDelegationByValidatorForDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByValidatorForDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse',
            value: QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalDelegationByValidatorForDenomResponse.typeUrl, QueryTotalDelegationByValidatorForDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalDelegationByValidatorForDenomResponse.aminoType, QueryTotalDelegationByValidatorForDenomResponse.typeUrl);
function createBaseDelegations() {
    return {
        valAddr: '',
        amountSfsd: '',
        osmoEquivalent: '',
    };
}
export const Delegations = {
    typeUrl: '/osmosis.superfluid.Delegations',
    aminoType: 'osmosis/delegations',
    is(o) {
        return (o &&
            (o.$typeUrl === Delegations.typeUrl ||
                (typeof o.valAddr === 'string' &&
                    typeof o.amountSfsd === 'string' &&
                    typeof o.osmoEquivalent === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Delegations.typeUrl ||
                (typeof o.val_addr === 'string' &&
                    typeof o.amount_sfsd === 'string' &&
                    typeof o.osmo_equivalent === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Delegations.typeUrl ||
                (typeof o.val_addr === 'string' &&
                    typeof o.amount_sfsd === 'string' &&
                    typeof o.osmo_equivalent === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.valAddr !== '') {
            writer.uint32(10).string(message.valAddr);
        }
        if (message.amountSfsd !== '') {
            writer.uint32(18).string(message.amountSfsd);
        }
        if (message.osmoEquivalent !== '') {
            writer.uint32(26).string(message.osmoEquivalent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valAddr = reader.string();
                    break;
                case 2:
                    message.amountSfsd = reader.string();
                    break;
                case 3:
                    message.osmoEquivalent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegations();
        message.valAddr = object.valAddr ?? '';
        message.amountSfsd = object.amountSfsd ?? '';
        message.osmoEquivalent = object.osmoEquivalent ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegations();
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.amount_sfsd !== undefined && object.amount_sfsd !== null) {
            message.amountSfsd = object.amount_sfsd;
        }
        if (object.osmo_equivalent !== undefined &&
            object.osmo_equivalent !== null) {
            message.osmoEquivalent = object.osmo_equivalent;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        obj.amount_sfsd =
            message.amountSfsd === '' ? undefined : message.amountSfsd;
        obj.osmo_equivalent =
            message.osmoEquivalent === '' ? undefined : message.osmoEquivalent;
        return obj;
    },
    fromAminoMsg(object) {
        return Delegations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/delegations',
            value: Delegations.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Delegations.decode(message.value);
    },
    toProto(message) {
        return Delegations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.Delegations',
            value: Delegations.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Delegations.typeUrl, Delegations);
GlobalDecoderRegistry.registerAminoProtoMapping(Delegations.aminoType, Delegations.typeUrl);
function createBaseTotalSuperfluidDelegationsRequest() {
    return {};
}
export const TotalSuperfluidDelegationsRequest = {
    typeUrl: '/osmosis.superfluid.TotalSuperfluidDelegationsRequest',
    aminoType: 'osmosis/total-superfluid-delegations-request',
    is(o) {
        return o && o.$typeUrl === TotalSuperfluidDelegationsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === TotalSuperfluidDelegationsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === TotalSuperfluidDelegationsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsRequest();
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
        const message = createBaseTotalSuperfluidDelegationsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseTotalSuperfluidDelegationsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return TotalSuperfluidDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/total-superfluid-delegations-request',
            value: TotalSuperfluidDelegationsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalSuperfluidDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return TotalSuperfluidDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.TotalSuperfluidDelegationsRequest',
            value: TotalSuperfluidDelegationsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalSuperfluidDelegationsRequest.typeUrl, TotalSuperfluidDelegationsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalSuperfluidDelegationsRequest.aminoType, TotalSuperfluidDelegationsRequest.typeUrl);
function createBaseTotalSuperfluidDelegationsResponse() {
    return {
        totalDelegations: '',
    };
}
export const TotalSuperfluidDelegationsResponse = {
    typeUrl: '/osmosis.superfluid.TotalSuperfluidDelegationsResponse',
    aminoType: 'osmosis/total-superfluid-delegations-response',
    is(o) {
        return (o &&
            (o.$typeUrl === TotalSuperfluidDelegationsResponse.typeUrl ||
                typeof o.totalDelegations === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TotalSuperfluidDelegationsResponse.typeUrl ||
                typeof o.total_delegations === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TotalSuperfluidDelegationsResponse.typeUrl ||
                typeof o.total_delegations === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalDelegations !== '') {
            writer.uint32(10).string(message.totalDelegations);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDelegations = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTotalSuperfluidDelegationsResponse();
        message.totalDelegations = object.totalDelegations ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTotalSuperfluidDelegationsResponse();
        if (object.total_delegations !== undefined &&
            object.total_delegations !== null) {
            message.totalDelegations = object.total_delegations;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_delegations =
            message.totalDelegations === '' ? undefined : message.totalDelegations;
        return obj;
    },
    fromAminoMsg(object) {
        return TotalSuperfluidDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/total-superfluid-delegations-response',
            value: TotalSuperfluidDelegationsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TotalSuperfluidDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return TotalSuperfluidDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.TotalSuperfluidDelegationsResponse',
            value: TotalSuperfluidDelegationsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TotalSuperfluidDelegationsResponse.typeUrl, TotalSuperfluidDelegationsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalSuperfluidDelegationsResponse.aminoType, TotalSuperfluidDelegationsResponse.typeUrl);
function createBaseSuperfluidDelegationAmountRequest() {
    return {
        delegatorAddress: '',
        validatorAddress: '',
        denom: '',
    };
}
export const SuperfluidDelegationAmountRequest = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationAmountRequest',
    aminoType: 'osmosis/superfluid-delegation-amount-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationAmountRequest.typeUrl ||
                (typeof o.delegatorAddress === 'string' &&
                    typeof o.validatorAddress === 'string' &&
                    typeof o.denom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationAmountRequest.typeUrl ||
                (typeof o.delegator_address === 'string' &&
                    typeof o.validator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationAmountRequest.typeUrl ||
                (typeof o.delegator_address === 'string' &&
                    typeof o.validator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== '') {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountRequest();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.validatorAddress = object.validatorAddress ?? '';
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationAmountRequest();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        obj.validator_address =
            message.validatorAddress === '' ? undefined : message.validatorAddress;
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegation-amount-request',
            value: SuperfluidDelegationAmountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationAmountRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationAmountRequest',
            value: SuperfluidDelegationAmountRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationAmountRequest.typeUrl, SuperfluidDelegationAmountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationAmountRequest.aminoType, SuperfluidDelegationAmountRequest.typeUrl);
function createBaseSuperfluidDelegationAmountResponse() {
    return {
        amount: [],
    };
}
export const SuperfluidDelegationAmountResponse = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationAmountResponse',
    aminoType: 'osmosis/superfluid-delegation-amount-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationAmountResponse.typeUrl ||
                (Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationAmountResponse.typeUrl ||
                (Array.isArray(o.amount) &&
                    (!o.amount.length || Coin.isSDK(o.amount[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationAmountResponse.typeUrl ||
                (Array.isArray(o.amount) &&
                    (!o.amount.length || Coin.isAmino(o.amount[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegation-amount-response',
            value: SuperfluidDelegationAmountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationAmountResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationAmountResponse',
            value: SuperfluidDelegationAmountResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationAmountResponse.typeUrl, SuperfluidDelegationAmountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationAmountResponse.aminoType, SuperfluidDelegationAmountResponse.typeUrl);
function createBaseSuperfluidDelegationsByDelegatorRequest() {
    return {
        delegatorAddress: '',
    };
}
export const SuperfluidDelegationsByDelegatorRequest = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest',
    aminoType: 'osmosis/superfluid-delegations-by-delegator-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByDelegatorRequest.typeUrl ||
                typeof o.delegatorAddress === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByDelegatorRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByDelegatorRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegations-by-delegator-request',
            value: SuperfluidDelegationsByDelegatorRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest',
            value: SuperfluidDelegationsByDelegatorRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationsByDelegatorRequest.typeUrl, SuperfluidDelegationsByDelegatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationsByDelegatorRequest.aminoType, SuperfluidDelegationsByDelegatorRequest.typeUrl);
function createBaseSuperfluidDelegationsByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        totalDelegatedCoins: [],
        totalEquivalentStakedAmount: Coin.fromPartial({}),
    };
}
export const SuperfluidDelegationsByDelegatorResponse = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse',
    aminoType: 'osmosis/superfluid-delegations-by-delegator-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluidDelegationRecords) &&
                    (!o.superfluidDelegationRecords.length ||
                        SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) &&
                    Array.isArray(o.totalDelegatedCoins) &&
                    (!o.totalDelegatedCoins.length ||
                        Coin.is(o.totalDelegatedCoins[0])) &&
                    Coin.is(o.totalEquivalentStakedAmount))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) &&
                    Array.isArray(o.total_delegated_coins) &&
                    (!o.total_delegated_coins.length ||
                        Coin.isSDK(o.total_delegated_coins[0])) &&
                    Coin.isSDK(o.total_equivalent_staked_amount))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) &&
                    Array.isArray(o.total_delegated_coins) &&
                    (!o.total_delegated_coins.length ||
                        Coin.isAmino(o.total_delegated_coins[0])) &&
                    Coin.isAmino(o.total_equivalent_staked_amount))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalDelegatedCoins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalEquivalentStakedAmount !== undefined) {
            Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.totalDelegatedCoins =
            object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
        message.totalEquivalentStakedAmount =
            object.totalEquivalentStakedAmount !== undefined &&
                object.totalEquivalentStakedAmount !== null
                ? Coin.fromPartial(object.totalEquivalentStakedAmount)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
        message.totalDelegatedCoins =
            object.total_delegated_coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.total_equivalent_staked_amount !== undefined &&
            object.total_equivalent_staked_amount !== null) {
            message.totalEquivalentStakedAmount = Coin.fromAmino(object.total_equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records =
                message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords;
        }
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = message.totalDelegatedCoins;
        }
        obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount
            ? Coin.toAmino(message.totalEquivalentStakedAmount)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegations-by-delegator-response',
            value: SuperfluidDelegationsByDelegatorResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse',
            value: SuperfluidDelegationsByDelegatorResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationsByDelegatorResponse.typeUrl, SuperfluidDelegationsByDelegatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationsByDelegatorResponse.aminoType, SuperfluidDelegationsByDelegatorResponse.typeUrl);
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
    return {
        delegatorAddress: '',
        denom: '',
    };
}
export const SuperfluidUndelegationsByDelegatorRequest = {
    typeUrl: '/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest',
    aminoType: 'osmosis/superfluid-undelegations-by-delegator-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidUndelegationsByDelegatorRequest.typeUrl ||
                (typeof o.delegatorAddress === 'string' && typeof o.denom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidUndelegationsByDelegatorRequest.typeUrl ||
                (typeof o.delegator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidUndelegationsByDelegatorRequest.typeUrl ||
                (typeof o.delegator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? '';
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidUndelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegations-by-delegator-request',
            value: SuperfluidUndelegationsByDelegatorRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidUndelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidUndelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest',
            value: SuperfluidUndelegationsByDelegatorRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidUndelegationsByDelegatorRequest.typeUrl, SuperfluidUndelegationsByDelegatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidUndelegationsByDelegatorRequest.aminoType, SuperfluidUndelegationsByDelegatorRequest.typeUrl);
function createBaseSuperfluidUndelegationsByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        totalUndelegatedCoins: [],
        syntheticLocks: [],
    };
}
export const SuperfluidUndelegationsByDelegatorResponse = {
    typeUrl: '/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse',
    aminoType: 'osmosis/superfluid-undelegations-by-delegator-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidUndelegationsByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluidDelegationRecords) &&
                    (!o.superfluidDelegationRecords.length ||
                        SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) &&
                    Array.isArray(o.totalUndelegatedCoins) &&
                    (!o.totalUndelegatedCoins.length ||
                        Coin.is(o.totalUndelegatedCoins[0])) &&
                    Array.isArray(o.syntheticLocks) &&
                    (!o.syntheticLocks.length || SyntheticLock.is(o.syntheticLocks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidUndelegationsByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) &&
                    Array.isArray(o.total_undelegated_coins) &&
                    (!o.total_undelegated_coins.length ||
                        Coin.isSDK(o.total_undelegated_coins[0])) &&
                    Array.isArray(o.synthetic_locks) &&
                    (!o.synthetic_locks.length ||
                        SyntheticLock.isSDK(o.synthetic_locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidUndelegationsByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) &&
                    Array.isArray(o.total_undelegated_coins) &&
                    (!o.total_undelegated_coins.length ||
                        Coin.isAmino(o.total_undelegated_coins[0])) &&
                    Array.isArray(o.synthetic_locks) &&
                    (!o.synthetic_locks.length ||
                        SyntheticLock.isAmino(o.synthetic_locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.totalUndelegatedCoins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.syntheticLocks) {
            SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.totalUndelegatedCoins =
            object.totalUndelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
        message.syntheticLocks =
            object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
        message.totalUndelegatedCoins =
            object.total_undelegated_coins?.map(e => Coin.fromAmino(e)) || [];
        message.syntheticLocks =
            object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records =
                message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords;
        }
        if (message.totalUndelegatedCoins) {
            obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = message.totalUndelegatedCoins;
        }
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = message.syntheticLocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidUndelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegations-by-delegator-response',
            value: SuperfluidUndelegationsByDelegatorResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidUndelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidUndelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse',
            value: SuperfluidUndelegationsByDelegatorResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidUndelegationsByDelegatorResponse.typeUrl, SuperfluidUndelegationsByDelegatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidUndelegationsByDelegatorResponse.aminoType, SuperfluidUndelegationsByDelegatorResponse.typeUrl);
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
    return {
        validatorAddress: '',
        denom: '',
    };
}
export const SuperfluidDelegationsByValidatorDenomRequest = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest',
    aminoType: 'osmosis/superfluid-delegations-by-validator-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByValidatorDenomRequest.typeUrl ||
                (typeof o.validatorAddress === 'string' && typeof o.denom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByValidatorDenomRequest.typeUrl ||
                (typeof o.validator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByValidatorDenomRequest.typeUrl ||
                (typeof o.validator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        message.validatorAddress = object.validatorAddress ?? '';
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address =
            message.validatorAddress === '' ? undefined : message.validatorAddress;
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegations-by-validator-denom-request',
            value: SuperfluidDelegationsByValidatorDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest',
            value: SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationsByValidatorDenomRequest.typeUrl, SuperfluidDelegationsByValidatorDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationsByValidatorDenomRequest.aminoType, SuperfluidDelegationsByValidatorDenomRequest.typeUrl);
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
    return {
        superfluidDelegationRecords: [],
    };
}
export const SuperfluidDelegationsByValidatorDenomResponse = {
    typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse',
    aminoType: 'osmosis/superfluid-delegations-by-validator-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByValidatorDenomResponse.typeUrl ||
                (Array.isArray(o.superfluidDelegationRecords) &&
                    (!o.superfluidDelegationRecords.length ||
                        SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByValidatorDenomResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SuperfluidDelegationsByValidatorDenomResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluidDelegationRecords =
            object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records =
                message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegations-by-validator-denom-response',
            value: SuperfluidDelegationsByValidatorDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse',
            value: SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SuperfluidDelegationsByValidatorDenomResponse.typeUrl, SuperfluidDelegationsByValidatorDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SuperfluidDelegationsByValidatorDenomResponse.aminoType, SuperfluidDelegationsByValidatorDenomResponse.typeUrl);
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
    return {
        validatorAddress: '',
        denom: '',
    };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
    typeUrl: '/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest',
    aminoType: 'osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl ||
                (typeof o.validatorAddress === 'string' && typeof o.denom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl ||
                (typeof o.validator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl ||
                (typeof o.validator_address === 'string' &&
                    typeof o.denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        message.validatorAddress = object.validatorAddress ?? '';
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        if (object.validator_address !== undefined &&
            object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address =
            message.validatorAddress === '' ? undefined : message.validatorAddress;
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request',
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest',
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.aminoType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.typeUrl);
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
    return {
        totalDelegatedCoins: [],
    };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
    typeUrl: '/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse',
    aminoType: 'osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl ||
                (Array.isArray(o.totalDelegatedCoins) &&
                    (!o.totalDelegatedCoins.length || Coin.is(o.totalDelegatedCoins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl ||
                (Array.isArray(o.total_delegated_coins) &&
                    (!o.total_delegated_coins.length ||
                        Coin.isSDK(o.total_delegated_coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl ||
                (Array.isArray(o.total_delegated_coins) &&
                    (!o.total_delegated_coins.length ||
                        Coin.isAmino(o.total_delegated_coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.totalDelegatedCoins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.totalDelegatedCoins =
            object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.totalDelegatedCoins =
            object.total_delegated_coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = message.totalDelegatedCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response',
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse',
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.aminoType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.typeUrl);
function createBaseQueryTotalDelegationByDelegatorRequest() {
    return {
        delegatorAddress: '',
    };
}
export const QueryTotalDelegationByDelegatorRequest = {
    typeUrl: '/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest',
    aminoType: 'osmosis/query-total-delegation-by-delegator-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByDelegatorRequest.typeUrl ||
                typeof o.delegatorAddress === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByDelegatorRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByDelegatorRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        message.delegatorAddress = object.delegatorAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-total-delegation-by-delegator-request',
            value: QueryTotalDelegationByDelegatorRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest',
            value: QueryTotalDelegationByDelegatorRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalDelegationByDelegatorRequest.typeUrl, QueryTotalDelegationByDelegatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalDelegationByDelegatorRequest.aminoType, QueryTotalDelegationByDelegatorRequest.typeUrl);
function createBaseQueryTotalDelegationByDelegatorResponse() {
    return {
        superfluidDelegationRecords: [],
        delegationResponse: [],
        totalDelegatedCoins: [],
        totalEquivalentStakedAmount: Coin.fromPartial({}),
    };
}
export const QueryTotalDelegationByDelegatorResponse = {
    typeUrl: '/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse',
    aminoType: 'osmosis/query-total-delegation-by-delegator-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluidDelegationRecords) &&
                    (!o.superfluidDelegationRecords.length ||
                        SuperfluidDelegationRecord.is(o.superfluidDelegationRecords[0])) &&
                    Array.isArray(o.delegationResponse) &&
                    (!o.delegationResponse.length ||
                        DelegationResponse.is(o.delegationResponse[0])) &&
                    Array.isArray(o.totalDelegatedCoins) &&
                    (!o.totalDelegatedCoins.length ||
                        Coin.is(o.totalDelegatedCoins[0])) &&
                    Coin.is(o.totalEquivalentStakedAmount))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isSDK(o.superfluid_delegation_records[0])) &&
                    Array.isArray(o.delegation_response) &&
                    (!o.delegation_response.length ||
                        DelegationResponse.isSDK(o.delegation_response[0])) &&
                    Array.isArray(o.total_delegated_coins) &&
                    (!o.total_delegated_coins.length ||
                        Coin.isSDK(o.total_delegated_coins[0])) &&
                    Coin.isSDK(o.total_equivalent_staked_amount))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryTotalDelegationByDelegatorResponse.typeUrl ||
                (Array.isArray(o.superfluid_delegation_records) &&
                    (!o.superfluid_delegation_records.length ||
                        SuperfluidDelegationRecord.isAmino(o.superfluid_delegation_records[0])) &&
                    Array.isArray(o.delegation_response) &&
                    (!o.delegation_response.length ||
                        DelegationResponse.isAmino(o.delegation_response[0])) &&
                    Array.isArray(o.total_delegated_coins) &&
                    (!o.total_delegated_coins.length ||
                        Coin.isAmino(o.total_delegated_coins[0])) &&
                    Coin.isAmino(o.total_equivalent_staked_amount))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluidDelegationRecords) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.delegationResponse) {
            DelegationResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.totalDelegatedCoins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalEquivalentStakedAmount !== undefined) {
            Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.delegationResponse =
            object.delegationResponse?.map(e => DelegationResponse.fromPartial(e)) ||
                [];
        message.totalDelegatedCoins =
            object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
        message.totalEquivalentStakedAmount =
            object.totalEquivalentStakedAmount !== undefined &&
                object.totalEquivalentStakedAmount !== null
                ? Coin.fromPartial(object.totalEquivalentStakedAmount)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluidDelegationRecords =
            object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromAmino(e)) || [];
        message.delegationResponse =
            object.delegation_response?.map(e => DelegationResponse.fromAmino(e)) ||
                [];
        message.totalDelegatedCoins =
            object.total_delegated_coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.total_equivalent_staked_amount !== undefined &&
            object.total_equivalent_staked_amount !== null) {
            message.totalEquivalentStakedAmount = Coin.fromAmino(object.total_equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluidDelegationRecords) {
            obj.superfluid_delegation_records =
                message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = message.superfluidDelegationRecords;
        }
        if (message.delegationResponse) {
            obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_response = message.delegationResponse;
        }
        if (message.totalDelegatedCoins) {
            obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = message.totalDelegatedCoins;
        }
        obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount
            ? Coin.toAmino(message.totalEquivalentStakedAmount)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-total-delegation-by-delegator-response',
            value: QueryTotalDelegationByDelegatorResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse',
            value: QueryTotalDelegationByDelegatorResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryTotalDelegationByDelegatorResponse.typeUrl, QueryTotalDelegationByDelegatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTotalDelegationByDelegatorResponse.aminoType, QueryTotalDelegationByDelegatorResponse.typeUrl);
function createBaseQueryUnpoolWhitelistRequest() {
    return {};
}
export const QueryUnpoolWhitelistRequest = {
    typeUrl: '/osmosis.superfluid.QueryUnpoolWhitelistRequest',
    aminoType: 'osmosis/query-unpool-whitelist-request',
    is(o) {
        return o && o.$typeUrl === QueryUnpoolWhitelistRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryUnpoolWhitelistRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryUnpoolWhitelistRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistRequest();
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
        const message = createBaseQueryUnpoolWhitelistRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryUnpoolWhitelistRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnpoolWhitelistRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-unpool-whitelist-request',
            value: QueryUnpoolWhitelistRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryUnpoolWhitelistRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnpoolWhitelistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryUnpoolWhitelistRequest',
            value: QueryUnpoolWhitelistRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryUnpoolWhitelistRequest.typeUrl, QueryUnpoolWhitelistRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnpoolWhitelistRequest.aminoType, QueryUnpoolWhitelistRequest.typeUrl);
function createBaseQueryUnpoolWhitelistResponse() {
    return {
        poolIds: [],
    };
}
export const QueryUnpoolWhitelistResponse = {
    typeUrl: '/osmosis.superfluid.QueryUnpoolWhitelistResponse',
    aminoType: 'osmosis/query-unpool-whitelist-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryUnpoolWhitelistResponse.typeUrl ||
                (Array.isArray(o.poolIds) &&
                    (!o.poolIds.length || typeof o.poolIds[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryUnpoolWhitelistResponse.typeUrl ||
                (Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryUnpoolWhitelistResponse.typeUrl ||
                (Array.isArray(o.pool_ids) &&
                    (!o.pool_ids.length || typeof o.pool_ids[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.poolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUnpoolWhitelistResponse();
        message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnpoolWhitelistResponse();
        message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolIds) {
            obj.pool_ids = message.poolIds.map(e => e.toString());
        }
        else {
            obj.pool_ids = message.poolIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnpoolWhitelistResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-unpool-whitelist-response',
            value: QueryUnpoolWhitelistResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryUnpoolWhitelistResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnpoolWhitelistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryUnpoolWhitelistResponse',
            value: QueryUnpoolWhitelistResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryUnpoolWhitelistResponse.typeUrl, QueryUnpoolWhitelistResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnpoolWhitelistResponse.aminoType, QueryUnpoolWhitelistResponse.typeUrl);
function createBaseUserConcentratedSuperfluidPositionsDelegatedRequest() {
    return {
        delegatorAddress: '',
    };
}
export const UserConcentratedSuperfluidPositionsDelegatedRequest = {
    typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedRequest',
    aminoType: 'osmosis/user-concentrated-superfluid-positions-delegated-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsDelegatedRequest.typeUrl ||
                typeof o.delegatorAddress === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsDelegatedRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsDelegatedRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
        message.delegatorAddress = object.delegatorAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedRequest();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return UserConcentratedSuperfluidPositionsDelegatedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/user-concentrated-superfluid-positions-delegated-request',
            value: UserConcentratedSuperfluidPositionsDelegatedRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserConcentratedSuperfluidPositionsDelegatedRequest.decode(message.value);
    },
    toProto(message) {
        return UserConcentratedSuperfluidPositionsDelegatedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedRequest',
            value: UserConcentratedSuperfluidPositionsDelegatedRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserConcentratedSuperfluidPositionsDelegatedRequest.typeUrl, UserConcentratedSuperfluidPositionsDelegatedRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UserConcentratedSuperfluidPositionsDelegatedRequest.aminoType, UserConcentratedSuperfluidPositionsDelegatedRequest.typeUrl);
function createBaseUserConcentratedSuperfluidPositionsDelegatedResponse() {
    return {
        clPoolUserPositionRecords: [],
    };
}
export const UserConcentratedSuperfluidPositionsDelegatedResponse = {
    typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedResponse',
    aminoType: 'osmosis/user-concentrated-superfluid-positions-delegated-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsDelegatedResponse.typeUrl ||
                (Array.isArray(o.clPoolUserPositionRecords) &&
                    (!o.clPoolUserPositionRecords.length ||
                        ConcentratedPoolUserPositionRecord.is(o.clPoolUserPositionRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsDelegatedResponse.typeUrl ||
                (Array.isArray(o.cl_pool_user_position_records) &&
                    (!o.cl_pool_user_position_records.length ||
                        ConcentratedPoolUserPositionRecord.isSDK(o.cl_pool_user_position_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsDelegatedResponse.typeUrl ||
                (Array.isArray(o.cl_pool_user_position_records) &&
                    (!o.cl_pool_user_position_records.length ||
                        ConcentratedPoolUserPositionRecord.isAmino(o.cl_pool_user_position_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.clPoolUserPositionRecords) {
            ConcentratedPoolUserPositionRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clPoolUserPositionRecords.push(ConcentratedPoolUserPositionRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
        message.clPoolUserPositionRecords =
            object.clPoolUserPositionRecords?.map(e => ConcentratedPoolUserPositionRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsDelegatedResponse();
        message.clPoolUserPositionRecords =
            object.cl_pool_user_position_records?.map(e => ConcentratedPoolUserPositionRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.clPoolUserPositionRecords) {
            obj.cl_pool_user_position_records = message.clPoolUserPositionRecords.map(e => (e ? ConcentratedPoolUserPositionRecord.toAmino(e) : undefined));
        }
        else {
            obj.cl_pool_user_position_records = message.clPoolUserPositionRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UserConcentratedSuperfluidPositionsDelegatedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/user-concentrated-superfluid-positions-delegated-response',
            value: UserConcentratedSuperfluidPositionsDelegatedResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserConcentratedSuperfluidPositionsDelegatedResponse.decode(message.value);
    },
    toProto(message) {
        return UserConcentratedSuperfluidPositionsDelegatedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedResponse',
            value: UserConcentratedSuperfluidPositionsDelegatedResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserConcentratedSuperfluidPositionsDelegatedResponse.typeUrl, UserConcentratedSuperfluidPositionsDelegatedResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UserConcentratedSuperfluidPositionsDelegatedResponse.aminoType, UserConcentratedSuperfluidPositionsDelegatedResponse.typeUrl);
function createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest() {
    return {
        delegatorAddress: '',
    };
}
export const UserConcentratedSuperfluidPositionsUndelegatingRequest = {
    typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingRequest',
    aminoType: 'osmosis/user-concentrated-superfluid-positions-undelegating-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsUndelegatingRequest.typeUrl ||
                typeof o.delegatorAddress === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsUndelegatingRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsUndelegatingRequest.typeUrl ||
                typeof o.delegator_address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== '') {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
        message.delegatorAddress = object.delegatorAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingRequest();
        if (object.delegator_address !== undefined &&
            object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address =
            message.delegatorAddress === '' ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return UserConcentratedSuperfluidPositionsUndelegatingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/user-concentrated-superfluid-positions-undelegating-request',
            value: UserConcentratedSuperfluidPositionsUndelegatingRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserConcentratedSuperfluidPositionsUndelegatingRequest.decode(message.value);
    },
    toProto(message) {
        return UserConcentratedSuperfluidPositionsUndelegatingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingRequest',
            value: UserConcentratedSuperfluidPositionsUndelegatingRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserConcentratedSuperfluidPositionsUndelegatingRequest.typeUrl, UserConcentratedSuperfluidPositionsUndelegatingRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UserConcentratedSuperfluidPositionsUndelegatingRequest.aminoType, UserConcentratedSuperfluidPositionsUndelegatingRequest.typeUrl);
function createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse() {
    return {
        clPoolUserPositionRecords: [],
    };
}
export const UserConcentratedSuperfluidPositionsUndelegatingResponse = {
    typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingResponse',
    aminoType: 'osmosis/user-concentrated-superfluid-positions-undelegating-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsUndelegatingResponse.typeUrl ||
                (Array.isArray(o.clPoolUserPositionRecords) &&
                    (!o.clPoolUserPositionRecords.length ||
                        ConcentratedPoolUserPositionRecord.is(o.clPoolUserPositionRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsUndelegatingResponse.typeUrl ||
                (Array.isArray(o.cl_pool_user_position_records) &&
                    (!o.cl_pool_user_position_records.length ||
                        ConcentratedPoolUserPositionRecord.isSDK(o.cl_pool_user_position_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                UserConcentratedSuperfluidPositionsUndelegatingResponse.typeUrl ||
                (Array.isArray(o.cl_pool_user_position_records) &&
                    (!o.cl_pool_user_position_records.length ||
                        ConcentratedPoolUserPositionRecord.isAmino(o.cl_pool_user_position_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.clPoolUserPositionRecords) {
            ConcentratedPoolUserPositionRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clPoolUserPositionRecords.push(ConcentratedPoolUserPositionRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
        message.clPoolUserPositionRecords =
            object.clPoolUserPositionRecords?.map(e => ConcentratedPoolUserPositionRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserConcentratedSuperfluidPositionsUndelegatingResponse();
        message.clPoolUserPositionRecords =
            object.cl_pool_user_position_records?.map(e => ConcentratedPoolUserPositionRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.clPoolUserPositionRecords) {
            obj.cl_pool_user_position_records = message.clPoolUserPositionRecords.map(e => (e ? ConcentratedPoolUserPositionRecord.toAmino(e) : undefined));
        }
        else {
            obj.cl_pool_user_position_records = message.clPoolUserPositionRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UserConcentratedSuperfluidPositionsUndelegatingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/user-concentrated-superfluid-positions-undelegating-response',
            value: UserConcentratedSuperfluidPositionsUndelegatingResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserConcentratedSuperfluidPositionsUndelegatingResponse.decode(message.value);
    },
    toProto(message) {
        return UserConcentratedSuperfluidPositionsUndelegatingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingResponse',
            value: UserConcentratedSuperfluidPositionsUndelegatingResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserConcentratedSuperfluidPositionsUndelegatingResponse.typeUrl, UserConcentratedSuperfluidPositionsUndelegatingResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UserConcentratedSuperfluidPositionsUndelegatingResponse.aminoType, UserConcentratedSuperfluidPositionsUndelegatingResponse.typeUrl);
function createBaseQueryRestSupplyRequest() {
    return {
        denom: '',
    };
}
export const QueryRestSupplyRequest = {
    typeUrl: '/osmosis.superfluid.QueryRestSupplyRequest',
    aminoType: 'osmosis/query-rest-supply-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryRestSupplyRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryRestSupplyRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryRestSupplyRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRestSupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRestSupplyRequest();
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRestSupplyRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRestSupplyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-rest-supply-request',
            value: QueryRestSupplyRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryRestSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRestSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryRestSupplyRequest',
            value: QueryRestSupplyRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryRestSupplyRequest.typeUrl, QueryRestSupplyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRestSupplyRequest.aminoType, QueryRestSupplyRequest.typeUrl);
function createBaseQueryRestSupplyResponse() {
    return {
        amount: Coin.fromPartial({}),
    };
}
export const QueryRestSupplyResponse = {
    typeUrl: '/osmosis.superfluid.QueryRestSupplyResponse',
    aminoType: 'osmosis/query-rest-supply-response',
    is(o) {
        return (o && (o.$typeUrl === QueryRestSupplyResponse.typeUrl || Coin.is(o.amount)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryRestSupplyResponse.typeUrl || Coin.isSDK(o.amount)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryRestSupplyResponse.typeUrl || Coin.isAmino(o.amount)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRestSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRestSupplyResponse();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRestSupplyResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRestSupplyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/query-rest-supply-response',
            value: QueryRestSupplyResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryRestSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRestSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.QueryRestSupplyResponse',
            value: QueryRestSupplyResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryRestSupplyResponse.typeUrl, QueryRestSupplyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryRestSupplyResponse.aminoType, QueryRestSupplyResponse.typeUrl);
