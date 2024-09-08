import { BinaryReader, BinaryWriter } from '../../../binary';
/** Params defines the parameters for the market module. */
export interface Params {
    exchangePool: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.Params';
    value: Uint8Array;
}
/** Params defines the parameters for the market module. */
export interface ParamsAmino {
    exchange_pool?: string;
}
export interface ParamsAminoMsg {
    type: 'osmosis/market/params';
    value: ParamsAmino;
}
/** Params defines the parameters for the market module. */
export interface ParamsSDKType {
    exchange_pool: Uint8Array;
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
