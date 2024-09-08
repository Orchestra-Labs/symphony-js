"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgChangeAssetStatusResponse = exports.MsgChangeAssetStatus = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgOutboundTransferResponse = exports.MsgOutboundTransfer = exports.MsgInboundTransferResponse = exports.MsgInboundTransfer = void 0;
//@ts-nocheck
const bridge_1 = require("./bridge");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgInboundTransfer() {
    return {
        sender: '',
        destAddr: '',
        asset: bridge_1.Asset.fromPartial({}),
        amount: '',
    };
}
exports.MsgInboundTransfer = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
    aminoType: 'osmosis/bridge/inbound-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.destAddr === 'string' &&
                    bridge_1.Asset.is(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    bridge_1.Asset.isSDK(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgInboundTransfer.typeUrl ||
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
        const message = createBaseMsgInboundTransfer();
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
        const message = createBaseMsgInboundTransfer();
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
        const message = createBaseMsgInboundTransfer();
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
        return exports.MsgInboundTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/inbound-transfer',
            value: exports.MsgInboundTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgInboundTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInboundTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
            value: exports.MsgInboundTransfer.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgInboundTransfer.typeUrl, exports.MsgInboundTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgInboundTransfer.aminoType, exports.MsgInboundTransfer.typeUrl);
function createBaseMsgInboundTransferResponse() {
    return {};
}
exports.MsgInboundTransferResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransferResponse',
    aminoType: 'osmosis/bridge/inbound-transfer-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgInboundTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgInboundTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgInboundTransferResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInboundTransferResponse();
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
        const message = createBaseMsgInboundTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgInboundTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgInboundTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/inbound-transfer-response',
            value: exports.MsgInboundTransferResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgInboundTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInboundTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransferResponse',
            value: exports.MsgInboundTransferResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgInboundTransferResponse.typeUrl, exports.MsgInboundTransferResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgInboundTransferResponse.aminoType, exports.MsgInboundTransferResponse.typeUrl);
function createBaseMsgOutboundTransfer() {
    return {
        sender: '',
        destAddr: '',
        asset: bridge_1.Asset.fromPartial({}),
        amount: '',
    };
}
exports.MsgOutboundTransfer = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
    aminoType: 'osmosis/bridge/outbound-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.destAddr === 'string' &&
                    bridge_1.Asset.is(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    bridge_1.Asset.isSDK(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgOutboundTransfer.typeUrl ||
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
        const message = createBaseMsgOutboundTransfer();
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
        const message = createBaseMsgOutboundTransfer();
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
        const message = createBaseMsgOutboundTransfer();
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
        return exports.MsgOutboundTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/outbound-transfer',
            value: exports.MsgOutboundTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgOutboundTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgOutboundTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
            value: exports.MsgOutboundTransfer.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgOutboundTransfer.typeUrl, exports.MsgOutboundTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgOutboundTransfer.aminoType, exports.MsgOutboundTransfer.typeUrl);
function createBaseMsgOutboundTransferResponse() {
    return {};
}
exports.MsgOutboundTransferResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransferResponse',
    aminoType: 'osmosis/bridge/outbound-transfer-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgOutboundTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgOutboundTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgOutboundTransferResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOutboundTransferResponse();
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
        const message = createBaseMsgOutboundTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgOutboundTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgOutboundTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/outbound-transfer-response',
            value: exports.MsgOutboundTransferResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgOutboundTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgOutboundTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransferResponse',
            value: exports.MsgOutboundTransferResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgOutboundTransferResponse.typeUrl, exports.MsgOutboundTransferResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgOutboundTransferResponse.aminoType, exports.MsgOutboundTransferResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        sender: '',
        newParams: bridge_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
    aminoType: 'osmosis/bridge/update-params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUpdateParams.typeUrl ||
                (typeof o.sender === 'string' && bridge_1.Params.is(o.newParams))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUpdateParams.typeUrl ||
                (typeof o.sender === 'string' && bridge_1.Params.isSDK(o.new_params))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUpdateParams.typeUrl ||
                (typeof o.sender === 'string' && bridge_1.Params.isAmino(o.new_params))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.newParams !== undefined) {
            bridge_1.Params.encode(message.newParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.newParams = bridge_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.sender = object.sender ?? '';
        message.newParams =
            object.newParams !== undefined && object.newParams !== null
                ? bridge_1.Params.fromPartial(object.newParams)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.new_params !== undefined && object.new_params !== null) {
            message.newParams = bridge_1.Params.fromAmino(object.new_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.new_params = message.newParams
            ? bridge_1.Params.toAmino(message.newParams)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/update-params',
            value: exports.MsgUpdateParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
            value: exports.MsgUpdateParams.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParamsResponse',
    aminoType: 'osmosis/bridge/update-params-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/update-params-response',
            value: exports.MsgUpdateParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParamsResponse',
            value: exports.MsgUpdateParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
function createBaseMsgChangeAssetStatus() {
    return {
        sender: '',
        newAssetStatus: bridge_1.AssetWithStatus.fromPartial({}),
    };
}
exports.MsgChangeAssetStatus = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
    aminoType: 'osmosis/bridge/change-asset-status',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' && bridge_1.AssetWithStatus.is(o.newAssetStatus))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    bridge_1.AssetWithStatus.isSDK(o.new_asset_status))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    bridge_1.AssetWithStatus.isAmino(o.new_asset_status))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.newAssetStatus !== undefined) {
            bridge_1.AssetWithStatus.encode(message.newAssetStatus, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAssetStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgChangeAssetStatus();
        message.sender = object.sender ?? '';
        message.newAssetStatus =
            object.newAssetStatus !== undefined && object.newAssetStatus !== null
                ? bridge_1.AssetWithStatus.fromPartial(object.newAssetStatus)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChangeAssetStatus();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
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
        obj.new_asset_status = message.newAssetStatus
            ? bridge_1.AssetWithStatus.toAmino(message.newAssetStatus)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChangeAssetStatus.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/change-asset-status',
            value: exports.MsgChangeAssetStatus.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAssetStatus.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAssetStatus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
            value: exports.MsgChangeAssetStatus.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChangeAssetStatus.typeUrl, exports.MsgChangeAssetStatus);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChangeAssetStatus.aminoType, exports.MsgChangeAssetStatus.typeUrl);
function createBaseMsgChangeAssetStatusResponse() {
    return {};
}
exports.MsgChangeAssetStatusResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse',
    aminoType: 'osmosis/bridge/change-asset-status-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgChangeAssetStatusResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgChangeAssetStatusResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChangeAssetStatusResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAssetStatusResponse();
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
        const message = createBaseMsgChangeAssetStatusResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChangeAssetStatusResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChangeAssetStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/change-asset-status-response',
            value: exports.MsgChangeAssetStatusResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAssetStatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAssetStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse',
            value: exports.MsgChangeAssetStatusResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChangeAssetStatusResponse.typeUrl, exports.MsgChangeAssetStatusResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChangeAssetStatusResponse.aminoType, exports.MsgChangeAssetStatusResponse.typeUrl);
