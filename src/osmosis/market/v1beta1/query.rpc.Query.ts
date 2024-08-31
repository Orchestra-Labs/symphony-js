//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySwapRequest, QuerySwapResponse, QueryParamsRequest, QueryParamsResponse, QueryExchangeRequirementsRequest, QueryExchangeRequirementsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Swap returns simulated swap amount. */
  swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  exchangeRequirements(request?: QueryExchangeRequirementsRequest): Promise<QueryExchangeRequirementsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.swap = this.swap.bind(this);
    this.params = this.params.bind(this);
    this.exchangeRequirements = this.exchangeRequirements.bind(this);
  }
  swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.market.v1beta1.Query", "Swap", data);
    return promise.then(data => QuerySwapResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.market.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  exchangeRequirements(request: QueryExchangeRequirementsRequest = {}): Promise<QueryExchangeRequirementsResponse> {
    const data = QueryExchangeRequirementsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.market.v1beta1.Query", "ExchangeRequirements", data);
    return promise.then(data => QueryExchangeRequirementsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
      return queryService.swap(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    exchangeRequirements(request?: QueryExchangeRequirementsRequest): Promise<QueryExchangeRequirementsResponse> {
      return queryService.exchangeRequirements(request);
    }
  };
};