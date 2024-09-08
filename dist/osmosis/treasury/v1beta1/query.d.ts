import { Params, ParamsAmino, ParamsSDKType } from './treasury';
import { BinaryReader, BinaryWriter } from '../../../binary';
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequest {
}
export interface QueryTaxRateRequestProtoMsg {
    typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateRequest';
    value: Uint8Array;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestAmino {
}
export interface QueryTaxRateRequestAminoMsg {
    type: 'osmosis/treasury/query-tax-rate-request';
    value: QueryTaxRateRequestAmino;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestSDKType {
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponse {
    taxRate: string;
}
export interface QueryTaxRateResponseProtoMsg {
    typeUrl: '/osmosis.treasury.v1beta1.QueryTaxRateResponse';
    value: Uint8Array;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseAmino {
    tax_rate?: string;
}
export interface QueryTaxRateResponseAminoMsg {
    type: 'osmosis/treasury/query-tax-rate-response';
    value: QueryTaxRateResponseAmino;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseSDKType {
    tax_rate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: '/osmosis.treasury.v1beta1.QueryParamsRequest';
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: 'osmosis/treasury/query-params-request';
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
    typeUrl: '/osmosis.treasury.v1beta1.QueryParamsResponse';
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: 'osmosis/treasury/query-params-response';
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryTaxRateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTaxRateRequest;
    isSDK(o: any): o is QueryTaxRateRequestSDKType;
    isAmino(o: any): o is QueryTaxRateRequestAmino;
    encode(_: QueryTaxRateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTaxRateRequest;
    fromPartial(_: Partial<QueryTaxRateRequest>): QueryTaxRateRequest;
    fromAmino(_: QueryTaxRateRequestAmino): QueryTaxRateRequest;
    toAmino(_: QueryTaxRateRequest): QueryTaxRateRequestAmino;
    fromAminoMsg(object: QueryTaxRateRequestAminoMsg): QueryTaxRateRequest;
    toAminoMsg(message: QueryTaxRateRequest): QueryTaxRateRequestAminoMsg;
    fromProtoMsg(message: QueryTaxRateRequestProtoMsg): QueryTaxRateRequest;
    toProto(message: QueryTaxRateRequest): Uint8Array;
    toProtoMsg(message: QueryTaxRateRequest): QueryTaxRateRequestProtoMsg;
};
export declare const QueryTaxRateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTaxRateResponse;
    isSDK(o: any): o is QueryTaxRateResponseSDKType;
    isAmino(o: any): o is QueryTaxRateResponseAmino;
    encode(message: QueryTaxRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTaxRateResponse;
    fromPartial(object: Partial<QueryTaxRateResponse>): QueryTaxRateResponse;
    fromAmino(object: QueryTaxRateResponseAmino): QueryTaxRateResponse;
    toAmino(message: QueryTaxRateResponse): QueryTaxRateResponseAmino;
    fromAminoMsg(object: QueryTaxRateResponseAminoMsg): QueryTaxRateResponse;
    toAminoMsg(message: QueryTaxRateResponse): QueryTaxRateResponseAminoMsg;
    fromProtoMsg(message: QueryTaxRateResponseProtoMsg): QueryTaxRateResponse;
    toProto(message: QueryTaxRateResponse): Uint8Array;
    toProtoMsg(message: QueryTaxRateResponse): QueryTaxRateResponseProtoMsg;
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
