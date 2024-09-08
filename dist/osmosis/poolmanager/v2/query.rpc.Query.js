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
        this.spotPriceV2 = this.spotPriceV2.bind(this);
    }
    spotPriceV2(request) {
        const data = query_1.SpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v2.Query', 'SpotPriceV2', data);
        return promise.then(data => query_1.SpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        spotPriceV2(request) {
            return queryService.spotPriceV2(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
