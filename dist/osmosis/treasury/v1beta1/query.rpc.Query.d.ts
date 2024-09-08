import { Rpc } from '../../../helpers';
import { QueryClient } from '@cosmjs/stargate';
import { QueryTaxRateRequest, QueryTaxRateResponse, QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
    /** TaxRate return the current tax rate */
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
