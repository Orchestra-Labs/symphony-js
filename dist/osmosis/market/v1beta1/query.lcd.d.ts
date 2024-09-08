import { LCDClient } from '@cosmology/lcd';
import { QuerySwapRequest, QuerySwapResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryExchangeRequirementsRequest, QueryExchangeRequirementsResponseSDKType } from './query';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    swap(params: QuerySwapRequest): Promise<QuerySwapResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    exchangeRequirements(_params?: QueryExchangeRequirementsRequest): Promise<QueryExchangeRequirementsResponseSDKType>;
}
