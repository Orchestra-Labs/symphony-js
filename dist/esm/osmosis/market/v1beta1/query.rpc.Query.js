import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QuerySwapRequest, QuerySwapResponse, QueryParamsRequest, QueryParamsResponse, QueryExchangeRequirementsRequest, QueryExchangeRequirementsResponse, } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.swap = this.swap.bind(this);
        this.params = this.params.bind(this);
        this.exchangeRequirements = this.exchangeRequirements.bind(this);
    }
    swap(request) {
        const data = QuerySwapRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Query', 'Swap', data);
        return promise.then(data => QuerySwapResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Query', 'Params', data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    exchangeRequirements(request = {}) {
        const data = QueryExchangeRequirementsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Query', 'ExchangeRequirements', data);
        return promise.then(data => QueryExchangeRequirementsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        swap(request) {
            return queryService.swap(request);
        },
        params(request) {
            return queryService.params(request);
        },
        exchangeRequirements(request) {
            return queryService.exchangeRequirements(request);
        },
    };
};
