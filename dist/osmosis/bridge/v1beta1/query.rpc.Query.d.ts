import { Rpc } from '../../../helpers';
import { QueryClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse } from './query';
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns x/bridge module params. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
