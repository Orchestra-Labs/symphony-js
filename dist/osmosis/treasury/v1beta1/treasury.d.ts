import { BinaryReader, BinaryWriter } from '../../../binary';
/** Params defines the parameters for the oracle module. */
export interface Params {
    reserveAllowableOffset: string;
    maxFeeMultiplier: string;
    windowShort: bigint;
    windowLong: bigint;
    windowProbation: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: '/osmosis.treasury.v1beta1.Params';
    value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
    reserve_allowable_offset?: string;
    max_fee_multiplier?: string;
    window_short?: string;
    window_long?: string;
    window_probation?: string;
}
export interface ParamsAminoMsg {
    type: 'osmosis/treasury/params';
    value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
    reserve_allowable_offset: string;
    max_fee_multiplier: string;
    window_short: bigint;
    window_long: bigint;
    window_probation: bigint;
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
