//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./market";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
  /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
  offerCoin: string;
  /** ask_denom defines the denom of the coin to swap to */
  askDenom: string;
}
export interface QuerySwapRequestProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.QuerySwapRequest";
  value: Uint8Array;
}
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequestAmino {
  /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
  offer_coin?: string;
  /** ask_denom defines the denom of the coin to swap to */
  ask_denom?: string;
}
export interface QuerySwapRequestAminoMsg {
  type: "osmosis/market/query-swap-request";
  value: QuerySwapRequestAmino;
}
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequestSDKType {
  offer_coin: string;
  ask_denom: string;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponse {
  /** return_coin defines the coin returned as a result of the swap simulation. */
  returnCoin: Coin;
}
export interface QuerySwapResponseProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.QuerySwapResponse";
  value: Uint8Array;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseAmino {
  /** return_coin defines the coin returned as a result of the swap simulation. */
  return_coin?: CoinAmino;
}
export interface QuerySwapResponseAminoMsg {
  type: "osmosis/market/query-swap-response";
  value: QuerySwapResponseAmino;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseSDKType {
  return_coin: CoinSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "osmosis/market/query-params-request";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "osmosis/market/query-params-response";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryExchangeRequirementsRequest is the request type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsRequest {}
export interface QueryExchangeRequirementsRequestProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.QueryExchangeRequirementsRequest";
  value: Uint8Array;
}
/**
 * QueryExchangeRequirementsRequest is the request type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsRequestAmino {}
export interface QueryExchangeRequirementsRequestAminoMsg {
  type: "osmosis/market/query-exchange-requirements-request";
  value: QueryExchangeRequirementsRequestAmino;
}
/**
 * QueryExchangeRequirementsRequest is the request type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsRequestSDKType {}
/**
 * QueryExchangeRequirementsResponse is the response type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsResponse {
  exchangeRequirements: ExchangeRequirement[];
  total: Coin;
}
export interface QueryExchangeRequirementsResponseProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.QueryExchangeRequirementsResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRequirementsResponse is the response type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsResponseAmino {
  exchange_requirements?: ExchangeRequirementAmino[];
  total?: CoinAmino;
}
export interface QueryExchangeRequirementsResponseAminoMsg {
  type: "osmosis/market/query-exchange-requirements-response";
  value: QueryExchangeRequirementsResponseAmino;
}
/**
 * QueryExchangeRequirementsResponse is the response type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsResponseSDKType {
  exchange_requirements: ExchangeRequirementSDKType[];
  total: CoinSDKType;
}
export interface ExchangeRequirement {
  baseCurrency: Coin;
  exchangeRate: string;
}
export interface ExchangeRequirementProtoMsg {
  typeUrl: "/osmosis.market.v1beta1.ExchangeRequirement";
  value: Uint8Array;
}
export interface ExchangeRequirementAmino {
  base_currency?: CoinAmino;
  exchange_rate?: string;
}
export interface ExchangeRequirementAminoMsg {
  type: "osmosis/market/exchange-requirement";
  value: ExchangeRequirementAmino;
}
export interface ExchangeRequirementSDKType {
  base_currency: CoinSDKType;
  exchange_rate: string;
}
function createBaseQuerySwapRequest(): QuerySwapRequest {
  return {
    offerCoin: "",
    askDenom: ""
  };
}
export const QuerySwapRequest = {
  typeUrl: "/osmosis.market.v1beta1.QuerySwapRequest",
  aminoType: "osmosis/market/query-swap-request",
  is(o: any): o is QuerySwapRequest {
    return o && (o.$typeUrl === QuerySwapRequest.typeUrl || typeof o.offerCoin === "string" && typeof o.askDenom === "string");
  },
  isSDK(o: any): o is QuerySwapRequestSDKType {
    return o && (o.$typeUrl === QuerySwapRequest.typeUrl || typeof o.offer_coin === "string" && typeof o.ask_denom === "string");
  },
  isAmino(o: any): o is QuerySwapRequestAmino {
    return o && (o.$typeUrl === QuerySwapRequest.typeUrl || typeof o.offer_coin === "string" && typeof o.ask_denom === "string");
  },
  encode(message: QuerySwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offerCoin !== "") {
      writer.uint32(10).string(message.offerCoin);
    }
    if (message.askDenom !== "") {
      writer.uint32(18).string(message.askDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerCoin = reader.string();
          break;
        case 2:
          message.askDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapRequest>): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.offerCoin = object.offerCoin ?? "";
    message.askDenom = object.askDenom ?? "";
    return message;
  },
  fromAmino(object: QuerySwapRequestAmino): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offerCoin = object.offer_coin;
    }
    if (object.ask_denom !== undefined && object.ask_denom !== null) {
      message.askDenom = object.ask_denom;
    }
    return message;
  },
  toAmino(message: QuerySwapRequest): QuerySwapRequestAmino {
    const obj: any = {};
    obj.offer_coin = message.offerCoin === "" ? undefined : message.offerCoin;
    obj.ask_denom = message.askDenom === "" ? undefined : message.askDenom;
    return obj;
  },
  fromAminoMsg(object: QuerySwapRequestAminoMsg): QuerySwapRequest {
    return QuerySwapRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySwapRequest): QuerySwapRequestAminoMsg {
    return {
      type: "osmosis/market/query-swap-request",
      value: QuerySwapRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySwapRequestProtoMsg): QuerySwapRequest {
    return QuerySwapRequest.decode(message.value);
  },
  toProto(message: QuerySwapRequest): Uint8Array {
    return QuerySwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapRequest): QuerySwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.QuerySwapRequest",
      value: QuerySwapRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapRequest.typeUrl, QuerySwapRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapRequest.aminoType, QuerySwapRequest.typeUrl);
function createBaseQuerySwapResponse(): QuerySwapResponse {
  return {
    returnCoin: Coin.fromPartial({})
  };
}
export const QuerySwapResponse = {
  typeUrl: "/osmosis.market.v1beta1.QuerySwapResponse",
  aminoType: "osmosis/market/query-swap-response",
  is(o: any): o is QuerySwapResponse {
    return o && (o.$typeUrl === QuerySwapResponse.typeUrl || Coin.is(o.returnCoin));
  },
  isSDK(o: any): o is QuerySwapResponseSDKType {
    return o && (o.$typeUrl === QuerySwapResponse.typeUrl || Coin.isSDK(o.return_coin));
  },
  isAmino(o: any): o is QuerySwapResponseAmino {
    return o && (o.$typeUrl === QuerySwapResponse.typeUrl || Coin.isAmino(o.return_coin));
  },
  encode(message: QuerySwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.returnCoin !== undefined) {
      Coin.encode(message.returnCoin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returnCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapResponse>): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.returnCoin = object.returnCoin !== undefined && object.returnCoin !== null ? Coin.fromPartial(object.returnCoin) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapResponseAmino): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    if (object.return_coin !== undefined && object.return_coin !== null) {
      message.returnCoin = Coin.fromAmino(object.return_coin);
    }
    return message;
  },
  toAmino(message: QuerySwapResponse): QuerySwapResponseAmino {
    const obj: any = {};
    obj.return_coin = message.returnCoin ? Coin.toAmino(message.returnCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapResponseAminoMsg): QuerySwapResponse {
    return QuerySwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySwapResponse): QuerySwapResponseAminoMsg {
    return {
      type: "osmosis/market/query-swap-response",
      value: QuerySwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySwapResponseProtoMsg): QuerySwapResponse {
    return QuerySwapResponse.decode(message.value);
  },
  toProto(message: QuerySwapResponse): Uint8Array {
    return QuerySwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapResponse): QuerySwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.QuerySwapResponse",
      value: QuerySwapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapResponse.typeUrl, QuerySwapResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySwapResponse.aminoType, QuerySwapResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.market.v1beta1.QueryParamsRequest",
  aminoType: "osmosis/market/query-params-request",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/market/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.market.v1beta1.QueryParamsResponse",
  aminoType: "osmosis/market/query-params-response",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/market/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryExchangeRequirementsRequest(): QueryExchangeRequirementsRequest {
  return {};
}
export const QueryExchangeRequirementsRequest = {
  typeUrl: "/osmosis.market.v1beta1.QueryExchangeRequirementsRequest",
  aminoType: "osmosis/market/query-exchange-requirements-request",
  is(o: any): o is QueryExchangeRequirementsRequest {
    return o && o.$typeUrl === QueryExchangeRequirementsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryExchangeRequirementsRequestSDKType {
    return o && o.$typeUrl === QueryExchangeRequirementsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryExchangeRequirementsRequestAmino {
    return o && o.$typeUrl === QueryExchangeRequirementsRequest.typeUrl;
  },
  encode(_: QueryExchangeRequirementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRequirementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRequirementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryExchangeRequirementsRequest>): QueryExchangeRequirementsRequest {
    const message = createBaseQueryExchangeRequirementsRequest();
    return message;
  },
  fromAmino(_: QueryExchangeRequirementsRequestAmino): QueryExchangeRequirementsRequest {
    const message = createBaseQueryExchangeRequirementsRequest();
    return message;
  },
  toAmino(_: QueryExchangeRequirementsRequest): QueryExchangeRequirementsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRequirementsRequestAminoMsg): QueryExchangeRequirementsRequest {
    return QueryExchangeRequirementsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryExchangeRequirementsRequest): QueryExchangeRequirementsRequestAminoMsg {
    return {
      type: "osmosis/market/query-exchange-requirements-request",
      value: QueryExchangeRequirementsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryExchangeRequirementsRequestProtoMsg): QueryExchangeRequirementsRequest {
    return QueryExchangeRequirementsRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRequirementsRequest): Uint8Array {
    return QueryExchangeRequirementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRequirementsRequest): QueryExchangeRequirementsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.QueryExchangeRequirementsRequest",
      value: QueryExchangeRequirementsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExchangeRequirementsRequest.typeUrl, QueryExchangeRequirementsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryExchangeRequirementsRequest.aminoType, QueryExchangeRequirementsRequest.typeUrl);
function createBaseQueryExchangeRequirementsResponse(): QueryExchangeRequirementsResponse {
  return {
    exchangeRequirements: [],
    total: Coin.fromPartial({})
  };
}
export const QueryExchangeRequirementsResponse = {
  typeUrl: "/osmosis.market.v1beta1.QueryExchangeRequirementsResponse",
  aminoType: "osmosis/market/query-exchange-requirements-response",
  is(o: any): o is QueryExchangeRequirementsResponse {
    return o && (o.$typeUrl === QueryExchangeRequirementsResponse.typeUrl || Array.isArray(o.exchangeRequirements) && (!o.exchangeRequirements.length || ExchangeRequirement.is(o.exchangeRequirements[0])) && Coin.is(o.total));
  },
  isSDK(o: any): o is QueryExchangeRequirementsResponseSDKType {
    return o && (o.$typeUrl === QueryExchangeRequirementsResponse.typeUrl || Array.isArray(o.exchange_requirements) && (!o.exchange_requirements.length || ExchangeRequirement.isSDK(o.exchange_requirements[0])) && Coin.isSDK(o.total));
  },
  isAmino(o: any): o is QueryExchangeRequirementsResponseAmino {
    return o && (o.$typeUrl === QueryExchangeRequirementsResponse.typeUrl || Array.isArray(o.exchange_requirements) && (!o.exchange_requirements.length || ExchangeRequirement.isAmino(o.exchange_requirements[0])) && Coin.isAmino(o.total));
  },
  encode(message: QueryExchangeRequirementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exchangeRequirements) {
      ExchangeRequirement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== undefined) {
      Coin.encode(message.total, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRequirementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRequirementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRequirements.push(ExchangeRequirement.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExchangeRequirementsResponse>): QueryExchangeRequirementsResponse {
    const message = createBaseQueryExchangeRequirementsResponse();
    message.exchangeRequirements = object.exchangeRequirements?.map(e => ExchangeRequirement.fromPartial(e)) || [];
    message.total = object.total !== undefined && object.total !== null ? Coin.fromPartial(object.total) : undefined;
    return message;
  },
  fromAmino(object: QueryExchangeRequirementsResponseAmino): QueryExchangeRequirementsResponse {
    const message = createBaseQueryExchangeRequirementsResponse();
    message.exchangeRequirements = object.exchange_requirements?.map(e => ExchangeRequirement.fromAmino(e)) || [];
    if (object.total !== undefined && object.total !== null) {
      message.total = Coin.fromAmino(object.total);
    }
    return message;
  },
  toAmino(message: QueryExchangeRequirementsResponse): QueryExchangeRequirementsResponseAmino {
    const obj: any = {};
    if (message.exchangeRequirements) {
      obj.exchange_requirements = message.exchangeRequirements.map(e => e ? ExchangeRequirement.toAmino(e) : undefined);
    } else {
      obj.exchange_requirements = message.exchangeRequirements;
    }
    obj.total = message.total ? Coin.toAmino(message.total) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRequirementsResponseAminoMsg): QueryExchangeRequirementsResponse {
    return QueryExchangeRequirementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryExchangeRequirementsResponse): QueryExchangeRequirementsResponseAminoMsg {
    return {
      type: "osmosis/market/query-exchange-requirements-response",
      value: QueryExchangeRequirementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryExchangeRequirementsResponseProtoMsg): QueryExchangeRequirementsResponse {
    return QueryExchangeRequirementsResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRequirementsResponse): Uint8Array {
    return QueryExchangeRequirementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRequirementsResponse): QueryExchangeRequirementsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.QueryExchangeRequirementsResponse",
      value: QueryExchangeRequirementsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExchangeRequirementsResponse.typeUrl, QueryExchangeRequirementsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryExchangeRequirementsResponse.aminoType, QueryExchangeRequirementsResponse.typeUrl);
function createBaseExchangeRequirement(): ExchangeRequirement {
  return {
    baseCurrency: Coin.fromPartial({}),
    exchangeRate: ""
  };
}
export const ExchangeRequirement = {
  typeUrl: "/osmosis.market.v1beta1.ExchangeRequirement",
  aminoType: "osmosis/market/exchange-requirement",
  is(o: any): o is ExchangeRequirement {
    return o && (o.$typeUrl === ExchangeRequirement.typeUrl || Coin.is(o.baseCurrency) && typeof o.exchangeRate === "string");
  },
  isSDK(o: any): o is ExchangeRequirementSDKType {
    return o && (o.$typeUrl === ExchangeRequirement.typeUrl || Coin.isSDK(o.base_currency) && typeof o.exchange_rate === "string");
  },
  isAmino(o: any): o is ExchangeRequirementAmino {
    return o && (o.$typeUrl === ExchangeRequirement.typeUrl || Coin.isAmino(o.base_currency) && typeof o.exchange_rate === "string");
  },
  encode(message: ExchangeRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseCurrency !== undefined) {
      Coin.encode(message.baseCurrency, writer.uint32(10).fork()).ldelim();
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseCurrency = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExchangeRequirement>): ExchangeRequirement {
    const message = createBaseExchangeRequirement();
    message.baseCurrency = object.baseCurrency !== undefined && object.baseCurrency !== null ? Coin.fromPartial(object.baseCurrency) : undefined;
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromAmino(object: ExchangeRequirementAmino): ExchangeRequirement {
    const message = createBaseExchangeRequirement();
    if (object.base_currency !== undefined && object.base_currency !== null) {
      message.baseCurrency = Coin.fromAmino(object.base_currency);
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: ExchangeRequirement): ExchangeRequirementAmino {
    const obj: any = {};
    obj.base_currency = message.baseCurrency ? Coin.toAmino(message.baseCurrency) : undefined;
    obj.exchange_rate = message.exchangeRate === "" ? undefined : message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: ExchangeRequirementAminoMsg): ExchangeRequirement {
    return ExchangeRequirement.fromAmino(object.value);
  },
  toAminoMsg(message: ExchangeRequirement): ExchangeRequirementAminoMsg {
    return {
      type: "osmosis/market/exchange-requirement",
      value: ExchangeRequirement.toAmino(message)
    };
  },
  fromProtoMsg(message: ExchangeRequirementProtoMsg): ExchangeRequirement {
    return ExchangeRequirement.decode(message.value);
  },
  toProto(message: ExchangeRequirement): Uint8Array {
    return ExchangeRequirement.encode(message).finish();
  },
  toProtoMsg(message: ExchangeRequirement): ExchangeRequirementProtoMsg {
    return {
      typeUrl: "/osmosis.market.v1beta1.ExchangeRequirement",
      value: ExchangeRequirement.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExchangeRequirement.typeUrl, ExchangeRequirement);
GlobalDecoderRegistry.registerAminoProtoMapping(ExchangeRequirement.aminoType, ExchangeRequirement.typeUrl);