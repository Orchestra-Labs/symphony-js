import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwap {
    trader: string;
    offerCoin: Coin;
    askDenom: string;
}
export interface MsgSwapProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.MsgSwap';
    value: Uint8Array;
}
/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwapAmino {
    trader?: string;
    offer_coin?: CoinAmino;
    ask_denom?: string;
}
export interface MsgSwapAminoMsg {
    type: 'osmosis/market/swap';
    value: MsgSwapAmino;
}
/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwapSDKType {
    trader: string;
    offer_coin: CoinSDKType;
    ask_denom: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
    swapCoin: Coin;
    swapFee: Coin;
}
export interface MsgSwapResponseProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.MsgSwapResponse';
    value: Uint8Array;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseAmino {
    swap_coin?: CoinAmino;
    swap_fee?: CoinAmino;
}
export interface MsgSwapResponseAminoMsg {
    type: 'osmosis/market/swap-response';
    value: MsgSwapResponseAmino;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseSDKType {
    swap_coin: CoinSDKType;
    swap_fee: CoinSDKType;
}
/**
 * MsgSwapSend represents a message to swap coin and send all result coin to
 * recipient
 */
export interface MsgSwapSend {
    fromAddress: string;
    toAddress: string;
    offerCoin: Coin;
    askDenom: string;
}
export interface MsgSwapSendProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.MsgSwapSend';
    value: Uint8Array;
}
/**
 * MsgSwapSend represents a message to swap coin and send all result coin to
 * recipient
 */
export interface MsgSwapSendAmino {
    from_address?: string;
    to_address?: string;
    offer_coin?: CoinAmino;
    ask_denom?: string;
}
export interface MsgSwapSendAminoMsg {
    type: 'osmosis/market/swap-send';
    value: MsgSwapSendAmino;
}
/**
 * MsgSwapSend represents a message to swap coin and send all result coin to
 * recipient
 */
export interface MsgSwapSendSDKType {
    from_address: string;
    to_address: string;
    offer_coin: CoinSDKType;
    ask_denom: string;
}
/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponse {
    swapCoin: Coin;
    swapFee: Coin;
}
export interface MsgSwapSendResponseProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.MsgSwapSendResponse';
    value: Uint8Array;
}
/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponseAmino {
    swap_coin?: CoinAmino;
    swap_fee?: CoinAmino;
}
export interface MsgSwapSendResponseAminoMsg {
    type: 'osmosis/market/swap-send-response';
    value: MsgSwapSendResponseAmino;
}
/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponseSDKType {
    swap_coin: CoinSDKType;
    swap_fee: CoinSDKType;
}
export declare const MsgSwap: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSwap;
    isSDK(o: any): o is MsgSwapSDKType;
    isAmino(o: any): o is MsgSwapAmino;
    encode(message: MsgSwap, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwap;
    fromPartial(object: Partial<MsgSwap>): MsgSwap;
    fromAmino(object: MsgSwapAmino): MsgSwap;
    toAmino(message: MsgSwap): MsgSwapAmino;
    fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap;
    toAminoMsg(message: MsgSwap): MsgSwapAminoMsg;
    fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap;
    toProto(message: MsgSwap): Uint8Array;
    toProtoMsg(message: MsgSwap): MsgSwapProtoMsg;
};
export declare const MsgSwapResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSwapResponse;
    isSDK(o: any): o is MsgSwapResponseSDKType;
    isAmino(o: any): o is MsgSwapResponseAmino;
    encode(message: MsgSwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapResponse;
    fromPartial(object: Partial<MsgSwapResponse>): MsgSwapResponse;
    fromAmino(object: MsgSwapResponseAmino): MsgSwapResponse;
    toAmino(message: MsgSwapResponse): MsgSwapResponseAmino;
    fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse;
    toAminoMsg(message: MsgSwapResponse): MsgSwapResponseAminoMsg;
    fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse;
    toProto(message: MsgSwapResponse): Uint8Array;
    toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg;
};
export declare const MsgSwapSend: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSwapSend;
    isSDK(o: any): o is MsgSwapSendSDKType;
    isAmino(o: any): o is MsgSwapSendAmino;
    encode(message: MsgSwapSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapSend;
    fromPartial(object: Partial<MsgSwapSend>): MsgSwapSend;
    fromAmino(object: MsgSwapSendAmino): MsgSwapSend;
    toAmino(message: MsgSwapSend): MsgSwapSendAmino;
    fromAminoMsg(object: MsgSwapSendAminoMsg): MsgSwapSend;
    toAminoMsg(message: MsgSwapSend): MsgSwapSendAminoMsg;
    fromProtoMsg(message: MsgSwapSendProtoMsg): MsgSwapSend;
    toProto(message: MsgSwapSend): Uint8Array;
    toProtoMsg(message: MsgSwapSend): MsgSwapSendProtoMsg;
};
export declare const MsgSwapSendResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSwapSendResponse;
    isSDK(o: any): o is MsgSwapSendResponseSDKType;
    isAmino(o: any): o is MsgSwapSendResponseAmino;
    encode(message: MsgSwapSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapSendResponse;
    fromPartial(object: Partial<MsgSwapSendResponse>): MsgSwapSendResponse;
    fromAmino(object: MsgSwapSendResponseAmino): MsgSwapSendResponse;
    toAmino(message: MsgSwapSendResponse): MsgSwapSendResponseAmino;
    fromAminoMsg(object: MsgSwapSendResponseAminoMsg): MsgSwapSendResponse;
    toAminoMsg(message: MsgSwapSendResponse): MsgSwapSendResponseAminoMsg;
    fromProtoMsg(message: MsgSwapSendResponseProtoMsg): MsgSwapSendResponse;
    toProto(message: MsgSwapSendResponse): Uint8Array;
    toProtoMsg(message: MsgSwapSendResponse): MsgSwapSendResponseProtoMsg;
};
