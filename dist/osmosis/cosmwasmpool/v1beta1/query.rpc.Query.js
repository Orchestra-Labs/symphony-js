"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.PoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.cosmwasmpool.v1beta1.Query', 'Pools', data);
        return promise.then(data => query_1.PoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.cosmwasmpool.v1beta1.Query', 'Params', data);
        return promise.then(data => query_1.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    contractInfoByPoolId(request) {
        const data = query_1.ContractInfoByPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.cosmwasmpool.v1beta1.Query', 'ContractInfoByPoolId', data);
        return promise.then(data => query_1.ContractInfoByPoolIdResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
