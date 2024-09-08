//@ts-nocheck
import { Asset, Params, AssetWithStatus, } from './bridge';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseMsgInboundTransfer() {
    return {
        sender: '',
        destAddr: '',
        asset: Asset.fromPartial({}),
        amount: '',
    };
}
export const MsgInboundTransfer = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
    aminoType: 'osmosis/bridge/inbound-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.destAddr === 'string' &&
                    Asset.is(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    Asset.isSDK(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgInboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    Asset.isAmino(o.asset) &&
                    typeof o.amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.destAddr !== '') {
            writer.uint32(18).string(message.destAddr);
        }
        if (message.asset !== undefined) {
            Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.asset = Asset.decode(reader, reader.uint32());
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
                ? Asset.fromPartial(object.asset)
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
            message.asset = Asset.fromAmino(object.asset);
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
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        obj.amount = message.amount === '' ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInboundTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/inbound-transfer',
            value: MsgInboundTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgInboundTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgInboundTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer',
            value: MsgInboundTransfer.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgInboundTransfer.typeUrl, MsgInboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInboundTransfer.aminoType, MsgInboundTransfer.typeUrl);
function createBaseMsgInboundTransferResponse() {
    return {};
}
export const MsgInboundTransferResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransferResponse',
    aminoType: 'osmosis/bridge/inbound-transfer-response',
    is(o) {
        return o && o.$typeUrl === MsgInboundTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgInboundTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgInboundTransferResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgInboundTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/inbound-transfer-response',
            value: MsgInboundTransferResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgInboundTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInboundTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransferResponse',
            value: MsgInboundTransferResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgInboundTransferResponse.typeUrl, MsgInboundTransferResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInboundTransferResponse.aminoType, MsgInboundTransferResponse.typeUrl);
function createBaseMsgOutboundTransfer() {
    return {
        sender: '',
        destAddr: '',
        asset: Asset.fromPartial({}),
        amount: '',
    };
}
export const MsgOutboundTransfer = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
    aminoType: 'osmosis/bridge/outbound-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.destAddr === 'string' &&
                    Asset.is(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    Asset.isSDK(o.asset) &&
                    typeof o.amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgOutboundTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.dest_addr === 'string' &&
                    Asset.isAmino(o.asset) &&
                    typeof o.amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.destAddr !== '') {
            writer.uint32(18).string(message.destAddr);
        }
        if (message.asset !== undefined) {
            Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.asset = Asset.decode(reader, reader.uint32());
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
                ? Asset.fromPartial(object.asset)
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
            message.asset = Asset.fromAmino(object.asset);
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
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        obj.amount = message.amount === '' ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgOutboundTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/outbound-transfer',
            value: MsgOutboundTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgOutboundTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgOutboundTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer',
            value: MsgOutboundTransfer.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgOutboundTransfer.typeUrl, MsgOutboundTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgOutboundTransfer.aminoType, MsgOutboundTransfer.typeUrl);
function createBaseMsgOutboundTransferResponse() {
    return {};
}
export const MsgOutboundTransferResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransferResponse',
    aminoType: 'osmosis/bridge/outbound-transfer-response',
    is(o) {
        return o && o.$typeUrl === MsgOutboundTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgOutboundTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgOutboundTransferResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgOutboundTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/outbound-transfer-response',
            value: MsgOutboundTransferResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgOutboundTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgOutboundTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransferResponse',
            value: MsgOutboundTransferResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgOutboundTransferResponse.typeUrl, MsgOutboundTransferResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgOutboundTransferResponse.aminoType, MsgOutboundTransferResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        sender: '',
        newParams: Params.fromPartial({}),
    };
}
export const MsgUpdateParams = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
    aminoType: 'osmosis/bridge/update-params',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgUpdateParams.typeUrl ||
                (typeof o.sender === 'string' && Params.is(o.newParams))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgUpdateParams.typeUrl ||
                (typeof o.sender === 'string' && Params.isSDK(o.new_params))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgUpdateParams.typeUrl ||
                (typeof o.sender === 'string' && Params.isAmino(o.new_params))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.newParams !== undefined) {
            Params.encode(message.newParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.newParams = Params.decode(reader, reader.uint32());
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
                ? Params.fromPartial(object.newParams)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.new_params !== undefined && object.new_params !== null) {
            message.newParams = Params.fromAmino(object.new_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.new_params = message.newParams
            ? Params.toAmino(message.newParams)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/update-params',
            value: MsgUpdateParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams',
            value: MsgUpdateParams.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParamsResponse',
    aminoType: 'osmosis/bridge/update-params-response',
    is(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/update-params-response',
            value: MsgUpdateParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParamsResponse',
            value: MsgUpdateParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
function createBaseMsgChangeAssetStatus() {
    return {
        sender: '',
        newAssetStatus: AssetWithStatus.fromPartial({}),
    };
}
export const MsgChangeAssetStatus = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
    aminoType: 'osmosis/bridge/change-asset-status',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' && AssetWithStatus.is(o.newAssetStatus))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    AssetWithStatus.isSDK(o.new_asset_status))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgChangeAssetStatus.typeUrl ||
                (typeof o.sender === 'string' &&
                    AssetWithStatus.isAmino(o.new_asset_status))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.newAssetStatus !== undefined) {
            AssetWithStatus.encode(message.newAssetStatus, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAssetStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.newAssetStatus = AssetWithStatus.decode(reader, reader.uint32());
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
                ? AssetWithStatus.fromPartial(object.newAssetStatus)
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
            message.newAssetStatus = AssetWithStatus.fromAmino(object.new_asset_status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.new_asset_status = message.newAssetStatus
            ? AssetWithStatus.toAmino(message.newAssetStatus)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChangeAssetStatus.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/change-asset-status',
            value: MsgChangeAssetStatus.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgChangeAssetStatus.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAssetStatus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus',
            value: MsgChangeAssetStatus.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgChangeAssetStatus.typeUrl, MsgChangeAssetStatus);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChangeAssetStatus.aminoType, MsgChangeAssetStatus.typeUrl);
function createBaseMsgChangeAssetStatusResponse() {
    return {};
}
export const MsgChangeAssetStatusResponse = {
    typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse',
    aminoType: 'osmosis/bridge/change-asset-status-response',
    is(o) {
        return o && o.$typeUrl === MsgChangeAssetStatusResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChangeAssetStatusResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgChangeAssetStatusResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgChangeAssetStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/bridge/change-asset-status-response',
            value: MsgChangeAssetStatusResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgChangeAssetStatusResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAssetStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse',
            value: MsgChangeAssetStatusResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgChangeAssetStatusResponse.typeUrl, MsgChangeAssetStatusResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChangeAssetStatusResponse.aminoType, MsgChangeAssetStatusResponse.typeUrl);
