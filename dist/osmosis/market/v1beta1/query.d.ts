import { Coin, CoinAmino, CoinSDKType } from '../../../cosmos/base/v1beta1/coin';
import { Params, ParamsAmino, ParamsSDKType } from './market';
import { BinaryReader, BinaryWriter } from '../../../binary';
/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
    /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
    offerCoin: string;
    /** ask_denom defines the denom of the coin to swap to */
    askDenom: string;
}
export interface QuerySwapRequestProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.QuerySwapRequest';
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
    type: 'osmosis/market/query-swap-request';
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
    typeUrl: '/osmosis.market.v1beta1.QuerySwapResponse';
    value: Uint8Array;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseAmino {
    /** return_coin defines the coin returned as a result of the swap simulation. */
    return_coin?: CoinAmino;
}
export interface QuerySwapResponseAminoMsg {
    type: 'osmosis/market/query-swap-response';
    value: QuerySwapResponseAmino;
}
/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponseSDKType {
    return_coin: CoinSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.QueryParamsRequest';
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: 'osmosis/market/query-params-request';
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.QueryParamsResponse';
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: 'osmosis/market/query-params-response';
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
export interface QueryExchangeRequirementsRequest {
}
export interface QueryExchangeRequirementsRequestProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsRequest';
    value: Uint8Array;
}
/**
 * QueryExchangeRequirementsRequest is the request type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsRequestAmino {
}
export interface QueryExchangeRequirementsRequestAminoMsg {
    type: 'osmosis/market/query-exchange-requirements-request';
    value: QueryExchangeRequirementsRequestAmino;
}
/**
 * QueryExchangeRequirementsRequest is the request type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsRequestSDKType {
}
/**
 * QueryExchangeRequirementsResponse is the response type for the
 * Query/ExchangeRequirements RPC method.
 */
export interface QueryExchangeRequirementsResponse {
    exchangeRequirements: ExchangeRequirement[];
    total: Coin;
}
export interface QueryExchangeRequirementsResponseProtoMsg {
    typeUrl: '/osmosis.market.v1beta1.QueryExchangeRequirementsResponse';
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
    type: 'osmosis/market/query-exchange-requirements-response';
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
    typeUrl: '/osmosis.market.v1beta1.ExchangeRequirement';
    value: Uint8Array;
}
export interface ExchangeRequirementAmino {
    base_currency?: CoinAmino;
    exchange_rate?: string;
}
export interface ExchangeRequirementAminoMsg {
    type: 'osmosis/market/exchange-requirement';
    value: ExchangeRequirementAmino;
}
export interface ExchangeRequirementSDKType {
    base_currency: CoinSDKType;
    exchange_rate: string;
}
export declare const QuerySwapRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySwapRequest;
    isSDK(o: any): o is QuerySwapRequestSDKType;
    isAmino(o: any): o is QuerySwapRequestAmino;
    encode(message: QuerySwapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapRequest;
    fromPartial(object: Partial<QuerySwapRequest>): QuerySwapRequest;
    fromAmino(object: QuerySwapRequestAmino): QuerySwapRequest;
    toAmino(message: QuerySwapRequest): QuerySwapRequestAmino;
    fromAminoMsg(object: QuerySwapRequestAminoMsg): QuerySwapRequest;
    toAminoMsg(message: QuerySwapRequest): QuerySwapRequestAminoMsg;
    fromProtoMsg(message: QuerySwapRequestProtoMsg): QuerySwapRequest;
    toProto(message: QuerySwapRequest): Uint8Array;
    toProtoMsg(message: QuerySwapRequest): QuerySwapRequestProtoMsg;
};
export declare const QuerySwapResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySwapResponse;
    isSDK(o: any): o is QuerySwapResponseSDKType;
    isAmino(o: any): o is QuerySwapResponseAmino;
    encode(message: QuerySwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapResponse;
    fromPartial(object: Partial<QuerySwapResponse>): QuerySwapResponse;
    fromAmino(object: QuerySwapResponseAmino): QuerySwapResponse;
    toAmino(message: QuerySwapResponse): QuerySwapResponseAmino;
    fromAminoMsg(object: QuerySwapResponseAminoMsg): QuerySwapResponse;
    toAminoMsg(message: QuerySwapResponse): QuerySwapResponseAminoMsg;
    fromProtoMsg(message: QuerySwapResponseProtoMsg): QuerySwapResponse;
    toProto(message: QuerySwapResponse): Uint8Array;
    toProtoMsg(message: QuerySwapResponse): QuerySwapResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryExchangeRequirementsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryExchangeRequirementsRequest;
    isSDK(o: any): o is QueryExchangeRequirementsRequestSDKType;
    isAmino(o: any): o is QueryExchangeRequirementsRequestAmino;
    encode(_: QueryExchangeRequirementsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRequirementsRequest;
    fromPartial(_: Partial<QueryExchangeRequirementsRequest>): QueryExchangeRequirementsRequest;
    fromAmino(_: QueryExchangeRequirementsRequestAmino): QueryExchangeRequirementsRequest;
    toAmino(_: QueryExchangeRequirementsRequest): QueryExchangeRequirementsRequestAmino;
    fromAminoMsg(object: QueryExchangeRequirementsRequestAminoMsg): QueryExchangeRequirementsRequest;
    toAminoMsg(message: QueryExchangeRequirementsRequest): QueryExchangeRequirementsRequestAminoMsg;
    fromProtoMsg(message: QueryExchangeRequirementsRequestProtoMsg): QueryExchangeRequirementsRequest;
    toProto(message: QueryExchangeRequirementsRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeRequirementsRequest): QueryExchangeRequirementsRequestProtoMsg;
};
export declare const QueryExchangeRequirementsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryExchangeRequirementsResponse;
    isSDK(o: any): o is QueryExchangeRequirementsResponseSDKType;
    isAmino(o: any): o is QueryExchangeRequirementsResponseAmino;
    encode(message: QueryExchangeRequirementsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRequirementsResponse;
    fromPartial(object: Partial<QueryExchangeRequirementsResponse>): QueryExchangeRequirementsResponse;
    fromAmino(object: QueryExchangeRequirementsResponseAmino): QueryExchangeRequirementsResponse;
    toAmino(message: QueryExchangeRequirementsResponse): QueryExchangeRequirementsResponseAmino;
    fromAminoMsg(object: QueryExchangeRequirementsResponseAminoMsg): QueryExchangeRequirementsResponse;
    toAminoMsg(message: QueryExchangeRequirementsResponse): QueryExchangeRequirementsResponseAminoMsg;
    fromProtoMsg(message: QueryExchangeRequirementsResponseProtoMsg): QueryExchangeRequirementsResponse;
    toProto(message: QueryExchangeRequirementsResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeRequirementsResponse): QueryExchangeRequirementsResponseProtoMsg;
};
export declare const ExchangeRequirement: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ExchangeRequirement;
    isSDK(o: any): o is ExchangeRequirementSDKType;
    isAmino(o: any): o is ExchangeRequirementAmino;
    encode(message: ExchangeRequirement, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRequirement;
    fromPartial(object: Partial<ExchangeRequirement>): ExchangeRequirement;
    fromAmino(object: ExchangeRequirementAmino): ExchangeRequirement;
    toAmino(message: ExchangeRequirement): ExchangeRequirementAmino;
    fromAminoMsg(object: ExchangeRequirementAminoMsg): ExchangeRequirement;
    toAminoMsg(message: ExchangeRequirement): ExchangeRequirementAminoMsg;
    fromProtoMsg(message: ExchangeRequirementProtoMsg): ExchangeRequirement;
    toProto(message: ExchangeRequirement): Uint8Array;
    toProtoMsg(message: ExchangeRequirement): ExchangeRequirementProtoMsg;
};
