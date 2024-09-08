import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryTaxRateRequest, QueryTaxRateResponse, QueryParamsRequest, QueryParamsResponse, } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.taxRate = this.taxRate.bind(this);
        this.params = this.params.bind(this);
    }
    taxRate(request = {}) {
        const data = QueryTaxRateRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.treasury.v1beta1.Query', 'TaxRate', data);
        return promise.then(data => QueryTaxRateResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.treasury.v1beta1.Query', 'Params', data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        taxRate(request) {
            return queryService.taxRate(request);
        },
        params(request) {
            return queryService.params(request);
        },
    };
};
