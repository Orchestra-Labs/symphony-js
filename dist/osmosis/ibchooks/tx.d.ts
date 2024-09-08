import { BinaryReader, BinaryWriter } from '../../binary';
export interface MsgEmitIBCAck {
    sender: string;
    packetSequence: bigint;
    channel: string;
}
export interface MsgEmitIBCAckProtoMsg {
    typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck';
    value: Uint8Array;
}
export interface MsgEmitIBCAckAmino {
    sender?: string;
    packet_sequence?: string;
    channel?: string;
}
export interface MsgEmitIBCAckAminoMsg {
    type: 'osmosis/ibchooks/emit-ibc-ack';
    value: MsgEmitIBCAckAmino;
}
export interface MsgEmitIBCAckSDKType {
    sender: string;
    packet_sequence: bigint;
    channel: string;
}
export interface MsgEmitIBCAckResponse {
    contractResult: string;
    ibcAck: string;
}
export interface MsgEmitIBCAckResponseProtoMsg {
    typeUrl: '/osmosis.ibchooks.MsgEmitIBCAckResponse';
    value: Uint8Array;
}
export interface MsgEmitIBCAckResponseAmino {
    contract_result?: string;
    ibc_ack?: string;
}
export interface MsgEmitIBCAckResponseAminoMsg {
    type: 'osmosis/ibchooks/emit-ibc-ack-response';
    value: MsgEmitIBCAckResponseAmino;
}
export interface MsgEmitIBCAckResponseSDKType {
    contract_result: string;
    ibc_ack: string;
}
export declare const MsgEmitIBCAck: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgEmitIBCAck;
    isSDK(o: any): o is MsgEmitIBCAckSDKType;
    isAmino(o: any): o is MsgEmitIBCAckAmino;
    encode(message: MsgEmitIBCAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEmitIBCAck;
    fromPartial(object: Partial<MsgEmitIBCAck>): MsgEmitIBCAck;
    fromAmino(object: MsgEmitIBCAckAmino): MsgEmitIBCAck;
    toAmino(message: MsgEmitIBCAck): MsgEmitIBCAckAmino;
    fromAminoMsg(object: MsgEmitIBCAckAminoMsg): MsgEmitIBCAck;
    toAminoMsg(message: MsgEmitIBCAck): MsgEmitIBCAckAminoMsg;
    fromProtoMsg(message: MsgEmitIBCAckProtoMsg): MsgEmitIBCAck;
    toProto(message: MsgEmitIBCAck): Uint8Array;
    toProtoMsg(message: MsgEmitIBCAck): MsgEmitIBCAckProtoMsg;
};
export declare const MsgEmitIBCAckResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgEmitIBCAckResponse;
    isSDK(o: any): o is MsgEmitIBCAckResponseSDKType;
    isAmino(o: any): o is MsgEmitIBCAckResponseAmino;
    encode(message: MsgEmitIBCAckResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEmitIBCAckResponse;
    fromPartial(object: Partial<MsgEmitIBCAckResponse>): MsgEmitIBCAckResponse;
    fromAmino(object: MsgEmitIBCAckResponseAmino): MsgEmitIBCAckResponse;
    toAmino(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseAmino;
    fromAminoMsg(object: MsgEmitIBCAckResponseAminoMsg): MsgEmitIBCAckResponse;
    toAminoMsg(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseAminoMsg;
    fromProtoMsg(message: MsgEmitIBCAckResponseProtoMsg): MsgEmitIBCAckResponse;
    toProto(message: MsgEmitIBCAckResponse): Uint8Array;
    toProtoMsg(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseProtoMsg;
};
