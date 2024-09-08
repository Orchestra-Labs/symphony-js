import { BinaryReader, BinaryWriter } from '../../../binary';
export declare enum AssetStatus {
    ASSET_STATUS_UNSPECIFIED = 0,
    ASSET_STATUS_OK = 1,
    ASSET_STATUS_BLOCKED_INBOUND = 2,
    ASSET_STATUS_BLOCKED_OUTBOUND = 3,
    ASSET_STATUS_BLOCKED_BOTH = 4,
    UNRECOGNIZED = -1
}
export declare const AssetStatusSDKType: typeof AssetStatus;
export declare const AssetStatusAmino: typeof AssetStatus;
export declare function assetStatusFromJSON(object: any): AssetStatus;
export declare function assetStatusToJSON(object: AssetStatus): string;
/** Params defines params for x/bridge module. */
export interface Params {
    /** Signers used to sign inbound and release outbound transactions */
    signers: string[];
    /**
     * Assets is a list used to create tokenfactory denoms
     * for corresponding trading pairs
     */
    assets: AssetWithStatus[];
}
export interface ParamsProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.Params';
    value: Uint8Array;
}
/** Params defines params for x/bridge module. */
export interface ParamsAmino {
    /** Signers used to sign inbound and release outbound transactions */
    signers?: string[];
    /**
     * Assets is a list used to create tokenfactory denoms
     * for corresponding trading pairs
     */
    assets?: AssetWithStatusAmino[];
}
export interface ParamsAminoMsg {
    type: 'osmosis/bridge/params';
    value: ParamsAmino;
}
/** Params defines params for x/bridge module. */
export interface ParamsSDKType {
    signers: string[];
    assets: AssetWithStatusSDKType[];
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatus {
    asset: Asset;
    assetStatus: AssetStatus;
}
export interface AssetWithStatusProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.AssetWithStatus';
    value: Uint8Array;
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatusAmino {
    asset?: AssetAmino;
    asset_status?: AssetStatus;
}
export interface AssetWithStatusAminoMsg {
    type: 'osmosis/bridge/asset-with-status';
    value: AssetWithStatusAmino;
}
/** AssetWithStatus defines a pair of the asset and its current status. */
export interface AssetWithStatusSDKType {
    asset: AssetSDKType;
    asset_status: AssetStatus;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface Asset {
    /** SourceChain is a source chain name */
    sourceChain: string;
    /** Denom is the Osmosis representation of the SourceChain */
    denom: string;
    /** Precision used for coins representation */
    precision: bigint;
}
export interface AssetProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.Asset';
    value: Uint8Array;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface AssetAmino {
    /** SourceChain is a source chain name */
    source_chain?: string;
    /** Denom is the Osmosis representation of the SourceChain */
    denom?: string;
    /** Precision used for coins representation */
    precision?: string;
}
export interface AssetAminoMsg {
    type: 'osmosis/bridge/asset';
    value: AssetAmino;
}
/**
 * Asset defines a pair of the source chain name and its Osmosis representation
 * denoted by denom. It also includes a precision used for coins representation.
 */
export interface AssetSDKType {
    source_chain: string;
    denom: string;
    precision: bigint;
}
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const AssetWithStatus: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is AssetWithStatus;
    isSDK(o: any): o is AssetWithStatusSDKType;
    isAmino(o: any): o is AssetWithStatusAmino;
    encode(message: AssetWithStatus, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetWithStatus;
    fromPartial(object: Partial<AssetWithStatus>): AssetWithStatus;
    fromAmino(object: AssetWithStatusAmino): AssetWithStatus;
    toAmino(message: AssetWithStatus): AssetWithStatusAmino;
    fromAminoMsg(object: AssetWithStatusAminoMsg): AssetWithStatus;
    toAminoMsg(message: AssetWithStatus): AssetWithStatusAminoMsg;
    fromProtoMsg(message: AssetWithStatusProtoMsg): AssetWithStatus;
    toProto(message: AssetWithStatus): Uint8Array;
    toProtoMsg(message: AssetWithStatus): AssetWithStatusProtoMsg;
};
export declare const Asset: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Asset;
    isSDK(o: any): o is AssetSDKType;
    isAmino(o: any): o is AssetAmino;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    toAminoMsg(message: Asset): AssetAminoMsg;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
