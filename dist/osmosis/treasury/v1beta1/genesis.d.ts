import { Params, ParamsAmino, ParamsSDKType } from './treasury';
import { BinaryReader, BinaryWriter } from '../../../binary';
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params;
    taxRate: string;
}
export interface GenesisStateProtoMsg {
    typeUrl: '/osmosis.treasury.v1beta1.GenesisState';
    value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    tax_rate?: string;
}
export interface GenesisStateAminoMsg {
    type: 'osmosis/treasury/genesis-state';
    value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    tax_rate: string;
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
