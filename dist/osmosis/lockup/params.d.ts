import { BinaryReader, BinaryWriter } from '../../binary';
export interface Params {
    forceUnlockAllowedAddresses: string[];
}
export interface ParamsProtoMsg {
    typeUrl: '/osmosis.lockup.Params';
    value: Uint8Array;
}
export interface ParamsAmino {
    force_unlock_allowed_addresses?: string[];
}
export interface ParamsAminoMsg {
    type: 'osmosis/lockup/params';
    value: ParamsAmino;
}
export interface ParamsSDKType {
    force_unlock_allowed_addresses: string[];
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
