//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { isSet } from '../../../helpers';
export var AssetStatus;
(function (AssetStatus) {
    AssetStatus[AssetStatus["ASSET_STATUS_UNSPECIFIED"] = 0] = "ASSET_STATUS_UNSPECIFIED";
    AssetStatus[AssetStatus["ASSET_STATUS_OK"] = 1] = "ASSET_STATUS_OK";
    AssetStatus[AssetStatus["ASSET_STATUS_BLOCKED_INBOUND"] = 2] = "ASSET_STATUS_BLOCKED_INBOUND";
    AssetStatus[AssetStatus["ASSET_STATUS_BLOCKED_OUTBOUND"] = 3] = "ASSET_STATUS_BLOCKED_OUTBOUND";
    AssetStatus[AssetStatus["ASSET_STATUS_BLOCKED_BOTH"] = 4] = "ASSET_STATUS_BLOCKED_BOTH";
    AssetStatus[AssetStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AssetStatus || (AssetStatus = {}));
export const AssetStatusSDKType = AssetStatus;
export const AssetStatusAmino = AssetStatus;
export function assetStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'ASSET_STATUS_UNSPECIFIED':
            return AssetStatus.ASSET_STATUS_UNSPECIFIED;
        case 1:
        case 'ASSET_STATUS_OK':
            return AssetStatus.ASSET_STATUS_OK;
        case 2:
        case 'ASSET_STATUS_BLOCKED_INBOUND':
            return AssetStatus.ASSET_STATUS_BLOCKED_INBOUND;
        case 3:
        case 'ASSET_STATUS_BLOCKED_OUTBOUND':
            return AssetStatus.ASSET_STATUS_BLOCKED_OUTBOUND;
        case 4:
        case 'ASSET_STATUS_BLOCKED_BOTH':
            return AssetStatus.ASSET_STATUS_BLOCKED_BOTH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AssetStatus.UNRECOGNIZED;
    }
}
export function assetStatusToJSON(object) {
    switch (object) {
        case AssetStatus.ASSET_STATUS_UNSPECIFIED:
            return 'ASSET_STATUS_UNSPECIFIED';
        case AssetStatus.ASSET_STATUS_OK:
            return 'ASSET_STATUS_OK';
        case AssetStatus.ASSET_STATUS_BLOCKED_INBOUND:
            return 'ASSET_STATUS_BLOCKED_INBOUND';
        case AssetStatus.ASSET_STATUS_BLOCKED_OUTBOUND:
            return 'ASSET_STATUS_BLOCKED_OUTBOUND';
        case AssetStatus.ASSET_STATUS_BLOCKED_BOTH:
            return 'ASSET_STATUS_BLOCKED_BOTH';
        case AssetStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseParams() {
    return {
        signers: [],
        assets: [],
    };
}
export const Params = {
    typeUrl: '/osmosis.bridge.v1beta1.Params',
    aminoType: 'osmosis/bridge/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.signers) &&
                    (!o.signers.length || typeof o.signers[0] === 'string') &&
                    Array.isArray(o.assets) &&
                    (!o.assets.length || AssetWithStatus.is(o.assets[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.signers) &&
                    (!o.signers.length || typeof o.signers[0] === 'string') &&
                    Array.isArray(o.assets) &&
                    (!o.assets.length || AssetWithStatus.isSDK(o.assets[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.signers) &&
                    (!o.signers.length || typeof o.signers[0] === 'string') &&
                    Array.isArray(o.assets) &&
                    (!o.assets.length || AssetWithStatus.isAmino(o.assets[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signers) {
            writer.uint32(10).string(v);
        }
        for (const v of message.assets) {
            AssetWithStatus.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signers.push(reader.string());
                    break;
                case 2:
                    message.assets.push(AssetWithStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.signers = object.signers?.map(e => e) || [];
        message.assets =
            object.assets?.map(e => AssetWithStatus.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.signers = object.signers?.map(e => e) || [];
        message.assets =
            object.assets?.map(e => AssetWithStatus.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signers) {
            obj.signers = message.signers.map(e => e);
        }
        else {
            obj.signers = message.signers;
        }
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? AssetWithStatus.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/params',
            value: Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseAssetWithStatus() {
    return {
        asset: Asset.fromPartial({}),
        assetStatus: 0,
    };
}
export const AssetWithStatus = {
    typeUrl: '/osmosis.bridge.v1beta1.AssetWithStatus',
    aminoType: 'osmosis/bridge/asset-with-status',
    is(o) {
        return (o &&
            (o.$typeUrl === AssetWithStatus.typeUrl ||
                (Asset.is(o.asset) && isSet(o.assetStatus))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AssetWithStatus.typeUrl ||
                (Asset.isSDK(o.asset) && isSet(o.asset_status))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AssetWithStatus.typeUrl ||
                (Asset.isAmino(o.asset) && isSet(o.asset_status))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset !== undefined) {
            Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        if (message.assetStatus !== 0) {
            writer.uint32(16).int32(message.assetStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetWithStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = Asset.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.assetStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAssetWithStatus();
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? Asset.fromPartial(object.asset)
                : undefined;
        message.assetStatus = object.assetStatus ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetWithStatus();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Asset.fromAmino(object.asset);
        }
        if (object.asset_status !== undefined && object.asset_status !== null) {
            message.assetStatus = object.asset_status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        obj.asset_status =
            message.assetStatus === 0 ? undefined : message.assetStatus;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetWithStatus.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/asset-with-status',
            value: AssetWithStatus.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AssetWithStatus.decode(message.value);
    },
    toProto(message) {
        return AssetWithStatus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.AssetWithStatus',
            value: AssetWithStatus.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AssetWithStatus.typeUrl, AssetWithStatus);
GlobalDecoderRegistry.registerAminoProtoMapping(AssetWithStatus.aminoType, AssetWithStatus.typeUrl);
function createBaseAsset() {
    return {
        sourceChain: '',
        denom: '',
        precision: BigInt(0),
    };
}
export const Asset = {
    typeUrl: '/osmosis.bridge.v1beta1.Asset',
    aminoType: 'osmosis/bridge/asset',
    is(o) {
        return (o &&
            (o.$typeUrl === Asset.typeUrl ||
                (typeof o.sourceChain === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.precision === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Asset.typeUrl ||
                (typeof o.source_chain === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.precision === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Asset.typeUrl ||
                (typeof o.source_chain === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.precision === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sourceChain !== '') {
            writer.uint32(10).string(message.sourceChain);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.precision !== BigInt(0)) {
            writer.uint32(24).uint64(message.precision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceChain = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.precision = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAsset();
        message.sourceChain = object.sourceChain ?? '';
        message.denom = object.denom ?? '';
        message.precision =
            object.precision !== undefined && object.precision !== null
                ? BigInt(object.precision.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseAsset();
        if (object.source_chain !== undefined && object.source_chain !== null) {
            message.sourceChain = object.source_chain;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = BigInt(object.precision);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_chain =
            message.sourceChain === '' ? undefined : message.sourceChain;
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.precision =
            message.precision !== BigInt(0)
                ? message.precision.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Asset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/asset',
            value: Asset.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Asset.decode(message.value);
    },
    toProto(message) {
        return Asset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.Asset',
            value: Asset.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Asset.typeUrl, Asset);
GlobalDecoderRegistry.registerAminoProtoMapping(Asset.aminoType, Asset.typeUrl);
