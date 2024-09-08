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
        this.swap = this.swap.bind(this);
        this.params = this.params.bind(this);
        this.exchangeRequirements = this.exchangeRequirements.bind(this);
    }
    swap(request) {
        const data = query_1.QuerySwapRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Query', 'Swap', data);
        return promise.then(data => query_1.QuerySwapResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Query', 'Params', data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    exchangeRequirements(request = {}) {
        const data = query_1.QueryExchangeRequirementsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Query', 'ExchangeRequirements', data);
        return promise.then(data => query_1.QueryExchangeRequirementsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
