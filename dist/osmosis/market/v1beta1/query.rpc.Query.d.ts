import { Rpc } from '../../../helpers';
import { QueryClient } from '@cosmjs/stargate';
import { QuerySwapRequest, QuerySwapResponse, QueryParamsRequest, QueryParamsResponse, QueryExchangeRequirementsRequest, QueryExchangeRequirementsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
    /** Swap returns simulated swap amount. */
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    exchangeRequirements(request?: QueryExchangeRequirementsRequest): Promise<QueryExchangeRequirementsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    exchangeRequirements(request?: QueryExchangeRequirementsRequest): Promise<QueryExchangeRequirementsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    exchangeRequirements(request?: QueryExchangeRequirementsRequest): Promise<QueryExchangeRequirementsResponse>;
};
