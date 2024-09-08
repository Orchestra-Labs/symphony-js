"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventChangeAssetStatus = exports.EventUpdateParams = exports.EventOutboundTransfer = exports.EventInboundTransfer = void 0;
//@ts-nocheck
const bridge_1 = require("./bridge");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseEventInboundTransfer() {
    return {
        sender: '',
        destAddr: '',
        asset: bridge_1.Asset.fromPartial({}),
        amount: '',
    };
}
exports.EventInboundTransfer = {
    typeUrl: '/osmosis.bridge.v1beta1.EventInboundTransfer',
    aminoType: 'osmosis/bridge/event-inbound-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EventInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.destAddr === 'string' &&
                    bridge_1.Asset.is(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EventInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    bridge_1.Asset.isSDK(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EventInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    bridge_1.Asset.isAmino(o.asset) &&
                    typeof o.amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.destAddr !== '') {
            writer.uint32(18).string(message.destAddr);
        }
        if (message.asset !== undefined) {
            bridge_1.Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventInboundTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.destAddr = reader.string();
                    break;
                case 3:
                    message.asset = bridge_1.Asset.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventInboundTransfer();
        message.sender = object.sender ?? '';
        message.destAddr = object.destAddr ?? '';
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? bridge_1.Asset.fromPartial(object.asset)
                : undefined;
        message.amount = object.amount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventInboundTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.dest_addr !== undefined && object.dest_addr !== null) {
            message.destAddr = object.dest_addr;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = bridge_1.Asset.fromAmino(object.asset);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.dest_addr = message.destAddr === '' ? undefined : message.destAddr;
        obj.asset = message.asset ? bridge_1.Asset.toAmino(message.asset) : undefined;
        obj.amount = message.amount === '' ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventInboundTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/event-inbound-transfer',
            value: exports.EventInboundTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EventInboundTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.EventInboundTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.EventInboundTransfer',
            value: exports.EventInboundTransfer.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EventInboundTransfer.typeUrl, exports.EventInboundTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventInboundTransfer.aminoType, exports.EventInboundTransfer.typeUrl);
function createBaseEventOutboundTransfer() {
    return {
        sender: '',
        destAddr: '',
        asset: bridge_1.Asset.fromPartial({}),
        amount: '',
    };
}
exports.EventOutboundTransfer = {
    typeUrl: '/osmosis.bridge.v1beta1.EventOutboundTransfer',
    aminoType: 'osmosis/bridge/event-outbound-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EventOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.destAddr === 'string' &&
                    bridge_1.Asset.is(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EventOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    bridge_1.Asset.isSDK(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EventOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    bridge_1.Asset.isAmino(o.asset) &&
                    typeof o.amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.destAddr !== '') {
            writer.uint32(18).string(message.destAddr);
        }
        if (message.asset !== undefined) {
            bridge_1.Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutboundTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.destAddr = reader.string();
                    break;
                case 3:
                    message.asset = bridge_1.Asset.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventOutboundTransfer();
        message.sender = object.sender ?? '';
        message.destAddr = object.destAddr ?? '';
        message.asset =
            object.asset !== undefined && object.asset !== null
                ? bridge_1.Asset.fromPartial(object.asset)
                : undefined;
        message.amount = object.amount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventOutboundTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.dest_addr !== undefined && object.dest_addr !== null) {
            message.destAddr = object.dest_addr;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = bridge_1.Asset.fromAmino(object.asset);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.dest_addr = message.destAddr === '' ? undefined : message.destAddr;
        obj.asset = message.asset ? bridge_1.Asset.toAmino(message.asset) : undefined;
        obj.amount = message.amount === '' ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventOutboundTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/event-outbound-transfer',
            value: exports.EventOutboundTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EventOutboundTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.EventOutboundTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.EventOutboundTransfer',
            value: exports.EventOutboundTransfer.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EventOutboundTransfer.typeUrl, exports.EventOutboundTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventOutboundTransfer.aminoType, exports.EventOutboundTransfer.typeUrl);
function createBaseEventUpdateParams() {
    return {
        newSigners: [],
        createdSigners: [],
        deletedSigners: [],
        newAssets: [],
        createdAssets: [],
        deletedAssets: [],
    };
}
exports.EventUpdateParams = {
    typeUrl: '/osmosis.bridge.v1beta1.EventUpdateParams',
    aminoType: 'osmosis/bridge/event-update-params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EventUpdateParams.typeUrl ||
                (Array.isArray(o.newSigners) &&
                    (!o.newSigners.length || typeof o.newSigners[0] === 'string') &&
                    Array.isArray(o.createdSigners) &&
                    (!o.createdSigners.length ||
                        typeof o.createdSigners[0] === 'string') &&
                    Array.isArray(o.deletedSigners) &&
                    (!o.deletedSigners.length ||
                        typeof o.deletedSigners[0] === 'string') &&
                    Array.isArray(o.newAssets) &&
                    (!o.newAssets.length || bridge_1.AssetWithStatus.is(o.newAssets[0])) &&
                    Array.isArray(o.createdAssets) &&
                    (!o.createdAssets.length || bridge_1.AssetWithStatus.is(o.createdAssets[0])) &&
                    Array.isArray(o.deletedAssets) &&
                    (!o.deletedAssets.length || bridge_1.AssetWithStatus.is(o.deletedAssets[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EventUpdateParams.typeUrl ||
                (Array.isArray(o.new_signers) &&
                    (!o.new_signers.length || typeof o.new_signers[0] === 'string') &&
                    Array.isArray(o.created_signers) &&
                    (!o.created_signers.length ||
                        typeof o.created_signers[0] === 'string') &&
                    Array.isArray(o.deleted_signers) &&
                    (!o.deleted_signers.length ||
                        typeof o.deleted_signers[0] === 'string') &&
                    Array.isArray(o.new_assets) &&
                    (!o.new_assets.length || bridge_1.AssetWithStatus.isSDK(o.new_assets[0])) &&
                    Array.isArray(o.created_assets) &&
                    (!o.created_assets.length ||
                        bridge_1.AssetWithStatus.isSDK(o.created_assets[0])) &&
                    Array.isArray(o.deleted_assets) &&
                    (!o.deleted_assets.length ||
                        bridge_1.AssetWithStatus.isSDK(o.deleted_assets[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EventUpdateParams.typeUrl ||
                (Array.isArray(o.new_signers) &&
                    (!o.new_signers.length || typeof o.new_signers[0] === 'string') &&
                    Array.isArray(o.created_signers) &&
                    (!o.created_signers.length ||
                        typeof o.created_signers[0] === 'string') &&
                    Array.isArray(o.deleted_signers) &&
                    (!o.deleted_signers.length ||
                        typeof o.deleted_signers[0] === 'string') &&
                    Array.isArray(o.new_assets) &&
                    (!o.new_assets.length || bridge_1.AssetWithStatus.isAmino(o.new_assets[0])) &&
                    Array.isArray(o.created_assets) &&
                    (!o.created_assets.length ||
                        bridge_1.AssetWithStatus.isAmino(o.created_assets[0])) &&
                    Array.isArray(o.deleted_assets) &&
                    (!o.deleted_assets.length ||
                        bridge_1.AssetWithStatus.isAmino(o.deleted_assets[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.newSigners) {
            writer.uint32(10).string(v);
        }
        for (const v of message.createdSigners) {
            writer.uint32(18).string(v);
        }
        for (const v of message.deletedSigners) {
            writer.uint32(26).string(v);
        }
        for (const v of message.newAssets) {
            bridge_1.AssetWithStatus.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.createdAssets) {
            bridge_1.AssetWithStatus.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.deletedAssets) {
            bridge_1.AssetWithStatus.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newSigners.push(reader.string());
                    break;
                case 2:
                    message.createdSigners.push(reader.string());
                    break;
                case 3:
                    message.deletedSigners.push(reader.string());
                    break;
                case 4:
                    message.newAssets.push(bridge_1.AssetWithStatus.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.createdAssets.push(bridge_1.AssetWithStatus.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deletedAssets.push(bridge_1.AssetWithStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateParams();
        message.newSigners = object.newSigners?.map(e => e) || [];
        message.createdSigners = object.createdSigners?.map(e => e) || [];
        message.deletedSigners = object.deletedSigners?.map(e => e) || [];
        message.newAssets =
            object.newAssets?.map(e => bridge_1.AssetWithStatus.fromPartial(e)) || [];
        message.createdAssets =
            object.createdAssets?.map(e => bridge_1.AssetWithStatus.fromPartial(e)) || [];
        message.deletedAssets =
            object.deletedAssets?.map(e => bridge_1.AssetWithStatus.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateParams();
        message.newSigners = object.new_signers?.map(e => e) || [];
        message.createdSigners = object.created_signers?.map(e => e) || [];
        message.deletedSigners = object.deleted_signers?.map(e => e) || [];
        message.newAssets =
            object.new_assets?.map(e => bridge_1.AssetWithStatus.fromAmino(e)) || [];
        message.createdAssets =
            object.created_assets?.map(e => bridge_1.AssetWithStatus.fromAmino(e)) || [];
        message.deletedAssets =
            object.deleted_assets?.map(e => bridge_1.AssetWithStatus.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.newSigners) {
            obj.new_signers = message.newSigners.map(e => e);
        }
        else {
            obj.new_signers = message.newSigners;
        }
        if (message.createdSigners) {
            obj.created_signers = message.createdSigners.map(e => e);
        }
        else {
            obj.created_signers = message.createdSigners;
        }
        if (message.deletedSigners) {
            obj.deleted_signers = message.deletedSigners.map(e => e);
        }
        else {
            obj.deleted_signers = message.deletedSigners;
        }
        if (message.newAssets) {
            obj.new_assets = message.newAssets.map(e => e ? bridge_1.AssetWithStatus.toAmino(e) : undefined);
        }
        else {
            obj.new_assets = message.newAssets;
        }
        if (message.createdAssets) {
            obj.created_assets = message.createdAssets.map(e => e ? bridge_1.AssetWithStatus.toAmino(e) : undefined);
        }
        else {
            obj.created_assets = message.createdAssets;
        }
        if (message.deletedAssets) {
            obj.deleted_assets = message.deletedAssets.map(e => e ? bridge_1.AssetWithStatus.toAmino(e) : undefined);
        }
        else {
            obj.deleted_assets = message.deletedAssets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/event-update-params',
            value: exports.EventUpdateParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.EventUpdateParams',
            value: exports.EventUpdateParams.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EventUpdateParams.typeUrl, exports.EventUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventUpdateParams.aminoType, exports.EventUpdateParams.typeUrl);
function createBaseEventChangeAssetStatus() {
    return {
        sender: '',
        oldAssetStatus: bridge_1.AssetWithStatus.fromPartial({}),
        newAssetStatus: bridge_1.AssetWithStatus.fromPartial({}),
    };
}
exports.EventChangeAssetStatus = {
    typeUrl: '/osmosis.bridge.v1beta1.EventChangeAssetStatus',
    aminoType: 'osmosis/bridge/event-change-asset-status',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.EventChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    bridge_1.AssetWithStatus.is(o.oldAssetStatus) &&
                    bridge_1.AssetWithStatus.is(o.newAssetStatus))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.EventChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    bridge_1.AssetWithStatus.isSDK(o.old_asset_status) &&
                    bridge_1.AssetWithStatus.isSDK(o.new_asset_status))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.EventChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    bridge_1.AssetWithStatus.isAmino(o.old_asset_status) &&
                    bridge_1.AssetWithStatus.isAmino(o.new_asset_status))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.oldAssetStatus !== undefined) {
            bridge_1.AssetWithStatus.encode(message.oldAssetStatus, writer.uint32(18).fork()).ldelim();
        }
        if (message.newAssetStatus !== undefined) {
            bridge_1.AssetWithStatus.encode(message.newAssetStatus, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventChangeAssetStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.oldAssetStatus = bridge_1.AssetWithStatus.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.newAssetStatus = bridge_1.AssetWithStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventChangeAssetStatus();
        message.sender = object.sender ?? '';
        message.oldAssetStatus =
            object.oldAssetStatus !== undefined && object.oldAssetStatus !== null
                ? bridge_1.AssetWithStatus.fromPartial(object.oldAssetStatus)
                : undefined;
        message.newAssetStatus =
            object.newAssetStatus !== undefined && object.newAssetStatus !== null
                ? bridge_1.AssetWithStatus.fromPartial(object.newAssetStatus)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventChangeAssetStatus();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.old_asset_status !== undefined &&
            object.old_asset_status !== null) {
            message.oldAssetStatus = bridge_1.AssetWithStatus.fromAmino(object.old_asset_status);
        }
        if (object.new_asset_status !== undefined &&
            object.new_asset_status !== null) {
            message.newAssetStatus = bridge_1.AssetWithStatus.fromAmino(object.new_asset_status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.old_asset_status = message.oldAssetStatus
            ? bridge_1.AssetWithStatus.toAmino(message.oldAssetStatus)
            : undefined;
        obj.new_asset_status = message.newAssetStatus
            ? bridge_1.AssetWithStatus.toAmino(message.newAssetStatus)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventChangeAssetStatus.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/event-change-asset-status',
            value: exports.EventChangeAssetStatus.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EventChangeAssetStatus.decode(message.value);
    },
    toProto(message) {
        return exports.EventChangeAssetStatus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.EventChangeAssetStatus',
            value: exports.EventChangeAssetStatus.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EventChangeAssetStatus.typeUrl, exports.EventChangeAssetStatus);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventChangeAssetStatus.aminoType, exports.EventChangeAssetStatus.typeUrl);
