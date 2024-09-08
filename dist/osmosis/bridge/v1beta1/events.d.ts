import { Asset, AssetAmino, AssetSDKType, AssetWithStatus, AssetWithStatusAmino, AssetWithStatusSDKType } from './bridge';
import { BinaryReader, BinaryWriter } from '../../../binary';
export interface EventInboundTransfer {
    /** Sender is a sender's address */
    sender: string;
    /** DestAddr is a destination Osmosis address */
    destAddr: string;
    /** Asset contains a source chain and a target denom */
    asset: Asset;
    /** Amount of coins to transfer */
    amount: string;
}
export interface EventInboundTransferProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.EventInboundTransfer';
    value: Uint8Array;
}
export interface EventInboundTransferAmino {
    /** Sender is a sender's address */
    sender?: string;
    /** DestAddr is a destination Osmosis address */
    dest_addr?: string;
    /** Asset contains a source chain and a target denom */
    asset?: AssetAmino;
    /** Amount of coins to transfer */
    amount?: string;
}
export interface EventInboundTransferAminoMsg {
    type: 'osmosis/bridge/event-inbound-transfer';
    value: EventInboundTransferAmino;
}
export interface EventInboundTransferSDKType {
    sender: string;
    dest_addr: string;
    asset: AssetSDKType;
    amount: string;
}
export interface EventOutboundTransfer {
    /** Sender is a sender's address */
    sender: string;
    /** DestAddr is a destination Osmosis address */
    destAddr: string;
    /** Asset contains a source chain and a target denom */
    asset: Asset;
    /** Amount of coins to transfer */
    amount: string;
}
export interface EventOutboundTransferProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.EventOutboundTransfer';
    value: Uint8Array;
}
export interface EventOutboundTransferAmino {
    /** Sender is a sender's address */
    sender?: string;
    /** DestAddr is a destination Osmosis address */
    dest_addr?: string;
    /** Asset contains a source chain and a target denom */
    asset?: AssetAmino;
    /** Amount of coins to transfer */
    amount?: string;
}
export interface EventOutboundTransferAminoMsg {
    type: 'osmosis/bridge/event-outbound-transfer';
    value: EventOutboundTransferAmino;
}
export interface EventOutboundTransferSDKType {
    sender: string;
    dest_addr: string;
    asset: AssetSDKType;
    amount: string;
}
export interface EventUpdateParams {
    newSigners: string[];
    createdSigners: string[];
    deletedSigners: string[];
    newAssets: AssetWithStatus[];
    createdAssets: AssetWithStatus[];
    deletedAssets: AssetWithStatus[];
}
export interface EventUpdateParamsProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.EventUpdateParams';
    value: Uint8Array;
}
export interface EventUpdateParamsAmino {
    new_signers?: string[];
    created_signers?: string[];
    deleted_signers?: string[];
    new_assets?: AssetWithStatusAmino[];
    created_assets?: AssetWithStatusAmino[];
    deleted_assets?: AssetWithStatusAmino[];
}
export interface EventUpdateParamsAminoMsg {
    type: 'osmosis/bridge/event-update-params';
    value: EventUpdateParamsAmino;
}
export interface EventUpdateParamsSDKType {
    new_signers: string[];
    created_signers: string[];
    deleted_signers: string[];
    new_assets: AssetWithStatusSDKType[];
    created_assets: AssetWithStatusSDKType[];
    deleted_assets: AssetWithStatusSDKType[];
}
export interface EventChangeAssetStatus {
    /** Sender is a sender's address */
    sender: string;
    /** NewAssetStatus is a pair of the asset and its new status */
    oldAssetStatus: AssetWithStatus;
    newAssetStatus: AssetWithStatus;
}
export interface EventChangeAssetStatusProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.EventChangeAssetStatus';
    value: Uint8Array;
}
export interface EventChangeAssetStatusAmino {
    /** Sender is a sender's address */
    sender?: string;
    /** NewAssetStatus is a pair of the asset and its new status */
    old_asset_status?: AssetWithStatusAmino;
    new_asset_status?: AssetWithStatusAmino;
}
export interface EventChangeAssetStatusAminoMsg {
    type: 'osmosis/bridge/event-change-asset-status';
    value: EventChangeAssetStatusAmino;
}
export interface EventChangeAssetStatusSDKType {
    sender: string;
    old_asset_status: AssetWithStatusSDKType;
    new_asset_status: AssetWithStatusSDKType;
}
export declare const EventInboundTransfer: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventInboundTransfer;
    isSDK(o: any): o is EventInboundTransferSDKType;
    isAmino(o: any): o is EventInboundTransferAmino;
    encode(message: EventInboundTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventInboundTransfer;
    fromPartial(object: Partial<EventInboundTransfer>): EventInboundTransfer;
    fromAmino(object: EventInboundTransferAmino): EventInboundTransfer;
    toAmino(message: EventInboundTransfer): EventInboundTransferAmino;
    fromAminoMsg(object: EventInboundTransferAminoMsg): EventInboundTransfer;
    toAminoMsg(message: EventInboundTransfer): EventInboundTransferAminoMsg;
    fromProtoMsg(message: EventInboundTransferProtoMsg): EventInboundTransfer;
    toProto(message: EventInboundTransfer): Uint8Array;
    toProtoMsg(message: EventInboundTransfer): EventInboundTransferProtoMsg;
};
export declare const EventOutboundTransfer: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventOutboundTransfer;
    isSDK(o: any): o is EventOutboundTransferSDKType;
    isAmino(o: any): o is EventOutboundTransferAmino;
    encode(message: EventOutboundTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventOutboundTransfer;
    fromPartial(object: Partial<EventOutboundTransfer>): EventOutboundTransfer;
    fromAmino(object: EventOutboundTransferAmino): EventOutboundTransfer;
    toAmino(message: EventOutboundTransfer): EventOutboundTransferAmino;
    fromAminoMsg(object: EventOutboundTransferAminoMsg): EventOutboundTransfer;
    toAminoMsg(message: EventOutboundTransfer): EventOutboundTransferAminoMsg;
    fromProtoMsg(message: EventOutboundTransferProtoMsg): EventOutboundTransfer;
    toProto(message: EventOutboundTransfer): Uint8Array;
    toProtoMsg(message: EventOutboundTransfer): EventOutboundTransferProtoMsg;
};
export declare const EventUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventUpdateParams;
    isSDK(o: any): o is EventUpdateParamsSDKType;
    isAmino(o: any): o is EventUpdateParamsAmino;
    encode(message: EventUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
    fromAmino(object: EventUpdateParamsAmino): EventUpdateParams;
    toAmino(message: EventUpdateParams): EventUpdateParamsAmino;
    fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams;
    toAminoMsg(message: EventUpdateParams): EventUpdateParamsAminoMsg;
    fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams;
    toProto(message: EventUpdateParams): Uint8Array;
    toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg;
};
export declare const EventChangeAssetStatus: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EventChangeAssetStatus;
    isSDK(o: any): o is EventChangeAssetStatusSDKType;
    isAmino(o: any): o is EventChangeAssetStatusAmino;
    encode(message: EventChangeAssetStatus, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventChangeAssetStatus;
    fromPartial(object: Partial<EventChangeAssetStatus>): EventChangeAssetStatus;
    fromAmino(object: EventChangeAssetStatusAmino): EventChangeAssetStatus;
    toAmino(message: EventChangeAssetStatus): EventChangeAssetStatusAmino;
    fromAminoMsg(object: EventChangeAssetStatusAminoMsg): EventChangeAssetStatus;
    toAminoMsg(message: EventChangeAssetStatus): EventChangeAssetStatusAminoMsg;
    fromProtoMsg(message: EventChangeAssetStatusProtoMsg): EventChangeAssetStatus;
    toProto(message: EventChangeAssetStatus): Uint8Array;
    toProtoMsg(message: EventChangeAssetStatus): EventChangeAssetStatusProtoMsg;
};
