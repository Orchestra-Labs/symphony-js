//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwap {
  trader: string;
  offerCoin: Coin;
  askDenom: string;
}
export interface MsgSwapProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.MsgSwap";
  value: Uint8Array;
}
/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwapAmino {
  trader?: string;
  offer_coin?: CoinAmino;
  ask_denom?: string;
}
export interface MsgSwapAminoMsg {
  type: "osmosis/market/swap";
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
  typeUrl: "/osmosis.market.v1beta1.MsgSwapResponse";
  value: Uint8Array;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseAmino {
  swap_coin?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgSwapResponseAminoMsg {
  type: "osmosis/market/swap-response";
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
  typeUrl: "/osmosis.market.v1beta1.MsgSwapSend";
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
  type: "osmosis/market/swap-send";
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
  typeUrl: "/osmosis.market.v1beta1.MsgSwapSendResponse";
  value: Uint8Array;
}
/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponseAmino {
  swap_coin?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgSwapSendResponseAminoMsg {
  type: "osmosis/market/swap-send-response";
  value: MsgSwapSendResponseAmino;
}
/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponseSDKType {
  swap_coin: CoinSDKType;
  swap_fee: CoinSDKType;
}
function createBaseMsgSwap(): MsgSwap {
  return {
    trader: "",
    offerCoin: Coin.fromPartial({}),
    askDenom: ""
  };
}
export const MsgSwap = {
  typeUrl: "/osmosis.market.v1beta1.MsgSwap",
  aminoType: "osmosis/market/swap",
  is(o: any): o is MsgSwap {
    return o && (o.$typeUrl === MsgSwap.typeUrl || typeof o.trader === "string" && Coin.is(o.offerCoin) && typeof o.askDenom === "string");
  },
  isSDK(o: any): o is MsgSwapSDKType {
    return o && (o.$typeUrl === MsgSwap.typeUrl || typeof o.trader === "string" && Coin.isSDK(o.offer_coin) && typeof o.ask_denom === "string");
  },
  isAmino(o: any): o is MsgSwapAmino {
    return o && (o.$typeUrl === MsgSwap.typeUrl || typeof o.trader === "string" && Coin.isAmino(o.offer_coin) && typeof o.ask_denom === "string");
  },
  encode(message: MsgSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.askDenom !== "") {
      writer.uint32(26).string(message.askDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trader = reader.string();
          break;
        case 2:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.askDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.trader = object.trader ?? "";
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.askDenom = object.askDenom ?? "";
    return message;
  },
  fromAmino(object: MsgSwapAmino): MsgSwap {
    const message = createBaseMsgSwap();
    if (object.trader !== undefined && object.trader !== null) {
      message.trader = object.trader;
    }
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offerCoin = Coin.fromAmino(object.offer_coin);
    }
    if (object.ask_denom !== undefined && object.ask_denom !== null) {
      message.askDenom = object.ask_denom;
    }
    return message;
  },
  toAmino(message: MsgSwap): MsgSwapAmino {
    const obj: any = {};
    obj.trader = message.trader === "" ? undefined : message.trader;
    obj.offer_coin = message.offerCoin ? Coin.toAmino(message.offerCoin) : undefined;
    obj.ask_denom = message.askDenom === "" ? undefined : message.askDenom;
    return obj;
  },
  fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap {
    return MsgSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwap): MsgSwapAminoMsg {
    return {
      type: "osmosis/market/swap",
      value: MsgSwap.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap {
    return MsgSwap.decode(message.value);
  },
  toProto(message: MsgSwap): Uint8Array {
    return MsgSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgSwap): MsgSwapProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.MsgSwap",
      value: MsgSwap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSwap.typeUrl, MsgSwap);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwap.aminoType, MsgSwap.typeUrl);
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {
    swapCoin: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgSwapResponse = {
  typeUrl: "/osmosis.market.v1beta1.MsgSwapResponse",
  aminoType: "osmosis/market/swap-response",
  is(o: any): o is MsgSwapResponse {
    return o && (o.$typeUrl === MsgSwapResponse.typeUrl || Coin.is(o.swapCoin) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is MsgSwapResponseSDKType {
    return o && (o.$typeUrl === MsgSwapResponse.typeUrl || Coin.isSDK(o.swap_coin) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is MsgSwapResponseAmino {
    return o && (o.$typeUrl === MsgSwapResponse.typeUrl || Coin.isAmino(o.swap_coin) && Coin.isAmino(o.swap_fee));
  },
  encode(message: MsgSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapCoin !== undefined) {
      Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    message.swapCoin = object.swapCoin !== undefined && object.swapCoin !== null ? Coin.fromPartial(object.swapCoin) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSwapResponseAmino): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    if (object.swap_coin !== undefined && object.swap_coin !== null) {
      message.swapCoin = Coin.fromAmino(object.swap_coin);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: MsgSwapResponse): MsgSwapResponseAmino {
    const obj: any = {};
    obj.swap_coin = message.swapCoin ? Coin.toAmino(message.swapCoin) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse {
    return MsgSwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapResponse): MsgSwapResponseAminoMsg {
    return {
      type: "osmosis/market/swap-response",
      value: MsgSwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse {
    return MsgSwapResponse.decode(message.value);
  },
  toProto(message: MsgSwapResponse): Uint8Array {
    return MsgSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.MsgSwapResponse",
      value: MsgSwapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSwapResponse.typeUrl, MsgSwapResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapResponse.aminoType, MsgSwapResponse.typeUrl);
function createBaseMsgSwapSend(): MsgSwapSend {
  return {
    fromAddress: "",
    toAddress: "",
    offerCoin: Coin.fromPartial({}),
    askDenom: ""
  };
}
export const MsgSwapSend = {
  typeUrl: "/osmosis.market.v1beta1.MsgSwapSend",
  aminoType: "osmosis/market/swap-send",
  is(o: any): o is MsgSwapSend {
    return o && (o.$typeUrl === MsgSwapSend.typeUrl || typeof o.fromAddress === "string" && typeof o.toAddress === "string" && Coin.is(o.offerCoin) && typeof o.askDenom === "string");
  },
  isSDK(o: any): o is MsgSwapSendSDKType {
    return o && (o.$typeUrl === MsgSwapSend.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Coin.isSDK(o.offer_coin) && typeof o.ask_denom === "string");
  },
  isAmino(o: any): o is MsgSwapSendAmino {
    return o && (o.$typeUrl === MsgSwapSend.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Coin.isAmino(o.offer_coin) && typeof o.ask_denom === "string");
  },
  encode(message: MsgSwapSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.askDenom !== "") {
      writer.uint32(34).string(message.askDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.askDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapSend>): MsgSwapSend {
    const message = createBaseMsgSwapSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.askDenom = object.askDenom ?? "";
    return message;
  },
  fromAmino(object: MsgSwapSendAmino): MsgSwapSend {
    const message = createBaseMsgSwapSend();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offerCoin = Coin.fromAmino(object.offer_coin);
    }
    if (object.ask_denom !== undefined && object.ask_denom !== null) {
      message.askDenom = object.ask_denom;
    }
    return message;
  },
  toAmino(message: MsgSwapSend): MsgSwapSendAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    obj.offer_coin = message.offerCoin ? Coin.toAmino(message.offerCoin) : undefined;
    obj.ask_denom = message.askDenom === "" ? undefined : message.askDenom;
    return obj;
  },
  fromAminoMsg(object: MsgSwapSendAminoMsg): MsgSwapSend {
    return MsgSwapSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapSend): MsgSwapSendAminoMsg {
    return {
      type: "osmosis/market/swap-send",
      value: MsgSwapSend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapSendProtoMsg): MsgSwapSend {
    return MsgSwapSend.decode(message.value);
  },
  toProto(message: MsgSwapSend): Uint8Array {
    return MsgSwapSend.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapSend): MsgSwapSendProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.MsgSwapSend",
      value: MsgSwapSend.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSwapSend.typeUrl, MsgSwapSend);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapSend.aminoType, MsgSwapSend.typeUrl);
function createBaseMsgSwapSendResponse(): MsgSwapSendResponse {
  return {
    swapCoin: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgSwapSendResponse = {
  typeUrl: "/osmosis.market.v1beta1.MsgSwapSendResponse",
  aminoType: "osmosis/market/swap-send-response",
  is(o: any): o is MsgSwapSendResponse {
    return o && (o.$typeUrl === MsgSwapSendResponse.typeUrl || Coin.is(o.swapCoin) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is MsgSwapSendResponseSDKType {
    return o && (o.$typeUrl === MsgSwapSendResponse.typeUrl || Coin.isSDK(o.swap_coin) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is MsgSwapSendResponseAmino {
    return o && (o.$typeUrl === MsgSwapSendResponse.typeUrl || Coin.isAmino(o.swap_coin) && Coin.isAmino(o.swap_fee));
  },
  encode(message: MsgSwapSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapCoin !== undefined) {
      Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.swapFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapSendResponse>): MsgSwapSendResponse {
    const message = createBaseMsgSwapSendResponse();
    message.swapCoin = object.swapCoin !== undefined && object.swapCoin !== null ? Coin.fromPartial(object.swapCoin) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSwapSendResponseAmino): MsgSwapSendResponse {
    const message = createBaseMsgSwapSendResponse();
    if (object.swap_coin !== undefined && object.swap_coin !== null) {
      message.swapCoin = Coin.fromAmino(object.swap_coin);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: MsgSwapSendResponse): MsgSwapSendResponseAmino {
    const obj: any = {};
    obj.swap_coin = message.swapCoin ? Coin.toAmino(message.swapCoin) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapSendResponseAminoMsg): MsgSwapSendResponse {
    return MsgSwapSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapSendResponse): MsgSwapSendResponseAminoMsg {
    return {
      type: "osmosis/market/swap-send-response",
      value: MsgSwapSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapSendResponseProtoMsg): MsgSwapSendResponse {
    return MsgSwapSendResponse.decode(message.value);
  },
  toProto(message: MsgSwapSendResponse): Uint8Array {
    return MsgSwapSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapSendResponse): MsgSwapSendResponseProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.MsgSwapSendResponse",
      value: MsgSwapSendResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSwapSendResponse.typeUrl, MsgSwapSendResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapSendResponse.aminoType, MsgSwapSendResponse.typeUrl);