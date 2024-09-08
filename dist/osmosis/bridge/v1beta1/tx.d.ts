import { Asset, AssetAmino, AssetSDKType, Params, ParamsAmino, ParamsSDKType, AssetWithStatus, AssetWithStatusAmino, AssetWithStatusSDKType } from './bridge';
import { BinaryReader, BinaryWriter } from '../../../binary';
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransfer {
    /** Sender is a sender's address */
    sender: string;
    /** DestAddr is a destination Osmosis address */
    destAddr: string;
    /** Asset contains a source chain and a target denom */
    asset: Asset;
    /** Amount of coins to transfer */
    amount: string;
}
export interface MsgInboundTransferProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransfer';
    value: Uint8Array;
}
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransferAmino {
    /** Sender is a sender's address */
    sender?: string;
    /** DestAddr is a destination Osmosis address */
    dest_addr?: string;
    /** Asset contains a source chain and a target denom */
    asset?: AssetAmino;
    /** Amount of coins to transfer */
    amount?: string;
}
export interface MsgInboundTransferAminoMsg {
    type: 'osmosis/bridge/inbound-transfer';
    value: MsgInboundTransferAmino;
}
/**
 * MsgInboundTransfer defines the message structure for the InboundTransfer gRPC
 * service method. It allows a sender to perform an inbound cross-chain
 * transfer, i.e., to transfer their tokens from the source chain to Osmosis and
 * get the equivalent amount of the corresponding token (specified in subdenom)
 * on Osmosis in return. The tokens are minted through the x/tokenfactory module
 * to the destination address.
 */
export interface MsgInboundTransferSDKType {
    sender: string;
    dest_addr: string;
    asset: AssetSDKType;
    amount: string;
}
export interface MsgInboundTransferResponse {
}
export interface MsgInboundTransferResponseProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgInboundTransferResponse';
    value: Uint8Array;
}
export interface MsgInboundTransferResponseAmino {
}
export interface MsgInboundTransferResponseAminoMsg {
    type: 'osmosis/bridge/inbound-transfer-response';
    value: MsgInboundTransferResponseAmino;
}
export interface MsgInboundTransferResponseSDKType {
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransfer {
    /** Sender is a sender's Osmosis address */
    sender: string;
    /** DestAddr is a destination address */
    destAddr: string;
    /** Asset contains a target chain and a source denom */
    asset: Asset;
    /** Amount of coins to transfer */
    amount: string;
}
export interface MsgOutboundTransferProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransfer';
    value: Uint8Array;
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransferAmino {
    /** Sender is a sender's Osmosis address */
    sender?: string;
    /** DestAddr is a destination address */
    dest_addr?: string;
    /** Asset contains a target chain and a source denom */
    asset?: AssetAmino;
    /** Amount of coins to transfer */
    amount?: string;
}
export interface MsgOutboundTransferAminoMsg {
    type: 'osmosis/bridge/outbound-transfer';
    value: MsgOutboundTransferAmino;
}
/**
 * MsgOutboundTransfer defines the message structure for the OutboundTransfer
 * gRPC service method. It allows a sender to perform an outbound cross-chain
 * transfer, i.e., to transfer their tokens from Osmosis to the destination
 * chain. The tokens are burned through the x/tokenfactory module from the
 * sender's address.
 */
export interface MsgOutboundTransferSDKType {
    sender: string;
    dest_addr: string;
    asset: AssetSDKType;
    amount: string;
}
export interface MsgOutboundTransferResponse {
}
export interface MsgOutboundTransferResponseProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgOutboundTransferResponse';
    value: Uint8Array;
}
export interface MsgOutboundTransferResponseAmino {
}
export interface MsgOutboundTransferResponseAminoMsg {
    type: 'osmosis/bridge/outbound-transfer-response';
    value: MsgOutboundTransferResponseAmino;
}
export interface MsgOutboundTransferResponseSDKType {
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParams {
    /** Sender is a sender's address */
    sender: string;
    /** NewParams should be fully populated */
    newParams: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParams';
    value: Uint8Array;
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParamsAmino {
    /** Sender is a sender's address */
    sender?: string;
    /** NewParams should be fully populated */
    new_params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: 'osmosis/bridge/update-params';
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams allows to update module params. It contains UpdateParams
 * instead of just Params to forbid status updating using this method.
 * All new assets introduced with this method have ASSET_STATUS_BLOCKED_BOTH
 * status by default.
 */
export interface MsgUpdateParamsSDKType {
    sender: string;
    new_params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgUpdateParamsResponse';
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: 'osmosis/bridge/update-params-response';
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatus {
    /** Sender is a sender's address */
    sender: string;
    /**
     * NewAssetStatus is a pair of the asset and its new status.
     * The asset should be known; otherwise, the method will failed.
     */
    newAssetStatus: AssetWithStatus;
}
export interface MsgChangeAssetStatusProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatus';
    value: Uint8Array;
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatusAmino {
    /** Sender is a sender's address */
    sender?: string;
    /**
     * NewAssetStatus is a pair of the asset and its new status.
     * The asset should be known; otherwise, the method will failed.
     */
    new_asset_status?: AssetWithStatusAmino;
}
export interface MsgChangeAssetStatusAminoMsg {
    type: 'osmosis/bridge/change-asset-status';
    value: MsgChangeAssetStatusAmino;
}
/** MsgChangeAssetStatus changes the status of the provided asset. */
export interface MsgChangeAssetStatusSDKType {
    sender: string;
    new_asset_status: AssetWithStatusSDKType;
}
export interface MsgChangeAssetStatusResponse {
}
export interface MsgChangeAssetStatusResponseProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.MsgChangeAssetStatusResponse';
    value: Uint8Array;
}
export interface MsgChangeAssetStatusResponseAmino {
}
export interface MsgChangeAssetStatusResponseAminoMsg {
    type: 'osmosis/bridge/change-asset-status-response';
    value: MsgChangeAssetStatusResponseAmino;
}
export interface MsgChangeAssetStatusResponseSDKType {
}
export declare const MsgInboundTransfer: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgInboundTransfer;
    isSDK(o: any): o is MsgInboundTransferSDKType;
    isAmino(o: any): o is MsgInboundTransferAmino;
    encode(message: MsgInboundTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInboundTransfer;
    fromPartial(object: Partial<MsgInboundTransfer>): MsgInboundTransfer;
    fromAmino(object: MsgInboundTransferAmino): MsgInboundTransfer;
    toAmino(message: MsgInboundTransfer): MsgInboundTransferAmino;
    fromAminoMsg(object: MsgInboundTransferAminoMsg): MsgInboundTransfer;
    toAminoMsg(message: MsgInboundTransfer): MsgInboundTransferAminoMsg;
    fromProtoMsg(message: MsgInboundTransferProtoMsg): MsgInboundTransfer;
    toProto(message: MsgInboundTransfer): Uint8Array;
    toProtoMsg(message: MsgInboundTransfer): MsgInboundTransferProtoMsg;
};
export declare const MsgInboundTransferResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgInboundTransferResponse;
    isSDK(o: any): o is MsgInboundTransferResponseSDKType;
    isAmino(o: any): o is MsgInboundTransferResponseAmino;
    encode(_: MsgInboundTransferResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInboundTransferResponse;
    fromPartial(_: Partial<MsgInboundTransferResponse>): MsgInboundTransferResponse;
    fromAmino(_: MsgInboundTransferResponseAmino): MsgInboundTransferResponse;
    toAmino(_: MsgInboundTransferResponse): MsgInboundTransferResponseAmino;
    fromAminoMsg(object: MsgInboundTransferResponseAminoMsg): MsgInboundTransferResponse;
    toAminoMsg(message: MsgInboundTransferResponse): MsgInboundTransferResponseAminoMsg;
    fromProtoMsg(message: MsgInboundTransferResponseProtoMsg): MsgInboundTransferResponse;
    toProto(message: MsgInboundTransferResponse): Uint8Array;
    toProtoMsg(message: MsgInboundTransferResponse): MsgInboundTransferResponseProtoMsg;
};
export declare const MsgOutboundTransfer: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgOutboundTransfer;
    isSDK(o: any): o is MsgOutboundTransferSDKType;
    isAmino(o: any): o is MsgOutboundTransferAmino;
    encode(message: MsgOutboundTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOutboundTransfer;
    fromPartial(object: Partial<MsgOutboundTransfer>): MsgOutboundTransfer;
    fromAmino(object: MsgOutboundTransferAmino): MsgOutboundTransfer;
    toAmino(message: MsgOutboundTransfer): MsgOutboundTransferAmino;
    fromAminoMsg(object: MsgOutboundTransferAminoMsg): MsgOutboundTransfer;
    toAminoMsg(message: MsgOutboundTransfer): MsgOutboundTransferAminoMsg;
    fromProtoMsg(message: MsgOutboundTransferProtoMsg): MsgOutboundTransfer;
    toProto(message: MsgOutboundTransfer): Uint8Array;
    toProtoMsg(message: MsgOutboundTransfer): MsgOutboundTransferProtoMsg;
};
export declare const MsgOutboundTransferResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgOutboundTransferResponse;
    isSDK(o: any): o is MsgOutboundTransferResponseSDKType;
    isAmino(o: any): o is MsgOutboundTransferResponseAmino;
    encode(_: MsgOutboundTransferResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOutboundTransferResponse;
    fromPartial(_: Partial<MsgOutboundTransferResponse>): MsgOutboundTransferResponse;
    fromAmino(_: MsgOutboundTransferResponseAmino): MsgOutboundTransferResponse;
    toAmino(_: MsgOutboundTransferResponse): MsgOutboundTransferResponseAmino;
    fromAminoMsg(object: MsgOutboundTransferResponseAminoMsg): MsgOutboundTransferResponse;
    toAminoMsg(message: MsgOutboundTransferResponse): MsgOutboundTransferResponseAminoMsg;
    fromProtoMsg(message: MsgOutboundTransferResponseProtoMsg): MsgOutboundTransferResponse;
    toProto(message: MsgOutboundTransferResponse): Uint8Array;
    toProtoMsg(message: MsgOutboundTransferResponse): MsgOutboundTransferResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgChangeAssetStatus: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChangeAssetStatus;
    isSDK(o: any): o is MsgChangeAssetStatusSDKType;
    isAmino(o: any): o is MsgChangeAssetStatusAmino;
    encode(message: MsgChangeAssetStatus, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAssetStatus;
    fromPartial(object: Partial<MsgChangeAssetStatus>): MsgChangeAssetStatus;
    fromAmino(object: MsgChangeAssetStatusAmino): MsgChangeAssetStatus;
    toAmino(message: MsgChangeAssetStatus): MsgChangeAssetStatusAmino;
    fromAminoMsg(object: MsgChangeAssetStatusAminoMsg): MsgChangeAssetStatus;
    toAminoMsg(message: MsgChangeAssetStatus): MsgChangeAssetStatusAminoMsg;
    fromProtoMsg(message: MsgChangeAssetStatusProtoMsg): MsgChangeAssetStatus;
    toProto(message: MsgChangeAssetStatus): Uint8Array;
    toProtoMsg(message: MsgChangeAssetStatus): MsgChangeAssetStatusProtoMsg;
};
export declare const MsgChangeAssetStatusResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChangeAssetStatusResponse;
    isSDK(o: any): o is MsgChangeAssetStatusResponseSDKType;
    isAmino(o: any): o is MsgChangeAssetStatusResponseAmino;
    encode(_: MsgChangeAssetStatusResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAssetStatusResponse;
    fromPartial(_: Partial<MsgChangeAssetStatusResponse>): MsgChangeAssetStatusResponse;
    fromAmino(_: MsgChangeAssetStatusResponseAmino): MsgChangeAssetStatusResponse;
    toAmino(_: MsgChangeAssetStatusResponse): MsgChangeAssetStatusResponseAmino;
    fromAminoMsg(object: MsgChangeAssetStatusResponseAminoMsg): MsgChangeAssetStatusResponse;
    toAminoMsg(message: MsgChangeAssetStatusResponse): MsgChangeAssetStatusResponseAminoMsg;
    fromProtoMsg(message: MsgChangeAssetStatusResponseProtoMsg): MsgChangeAssetStatusResponse;
    toProto(message: MsgChangeAssetStatusResponse): Uint8Array;
    toProtoMsg(message: MsgChangeAssetStatusResponse): MsgChangeAssetStatusResponseProtoMsg;
};
