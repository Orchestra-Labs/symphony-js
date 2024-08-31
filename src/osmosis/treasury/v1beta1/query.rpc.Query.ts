//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTaxRateRequest, QueryTaxRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TaxRate return the current tax rate */
  taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.taxRate = this.taxRate.bind(this);
    this.params = this.params.bind(this);
  }
  taxRate(request: QueryTaxRateRequest = {}): Promise<QueryTaxRateResponse> {
    const data = QueryTaxRateRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.treasury.v1beta1.Query", "TaxRate", data);
    return promise.then(data => QueryTaxRateResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.treasury.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse> {
      return queryService.taxRate(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};