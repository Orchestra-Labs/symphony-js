import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { PoolsRequest, PoolsResponse, ParamsRequest, ParamsResponse, ContractInfoByPoolIdRequest, ContractInfoByPoolIdResponse, } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.pools = this.pools.bind(this);
        this.params = this.params.bind(this);
        this.contractInfoByPoolId = this.contractInfoByPoolId.bind(this);
    }
    pools(request = {
        pagination: undefined,
    }) {
        const data = PoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.cosmwasmpool.v1beta1.Query', 'Pools', data);
        return promise.then(data => PoolsResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.cosmwasmpool.v1beta1.Query', 'Params', data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
    contractInfoByPoolId(request) {
        const data = ContractInfoByPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.cosmwasmpool.v1beta1.Query', 'ContractInfoByPoolId', data);
        return promise.then(data => ContractInfoByPoolIdResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        pools(request) {
            return queryService.pools(request);
        },
        params(request) {
            return queryService.params(request);
        },
        contractInfoByPoolId(request) {
            return queryService.contractInfoByPoolId(request);
        },
    };
};
