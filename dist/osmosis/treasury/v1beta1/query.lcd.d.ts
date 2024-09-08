import { LCDClient } from '@cosmology/lcd';
import { QueryTaxRateRequest, QueryTaxRateResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from './query';
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    taxRate(_params?: QueryTaxRateRequest): Promise<QueryTaxRateResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
