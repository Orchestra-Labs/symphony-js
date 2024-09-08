import { Params, ParamsAmino, ParamsSDKType } from './bridge';
import { BinaryReader, BinaryWriter } from '../../../binary';
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** Params defines params for x/bridge module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: '/osmosis.bridge.v1beta1.GenesisState';
    value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
    /** Params defines params for x/bridge module. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: 'osmosis/bridge/genesis-state';
    value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
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
