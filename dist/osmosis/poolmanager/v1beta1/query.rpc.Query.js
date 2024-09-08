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
        this.params = this.params.bind(this);
        this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountInWithPrimitiveTypes =
            this.estimateSwapExactAmountInWithPrimitiveTypes.bind(this);
        this.estimateSinglePoolSwapExactAmountIn =
            this.estimateSinglePoolSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountOut =
            this.estimateSwapExactAmountOut.bind(this);
        this.estimateSwapExactAmountOutWithPrimitiveTypes =
            this.estimateSwapExactAmountOutWithPrimitiveTypes.bind(this);
        this.estimateSinglePoolSwapExactAmountOut =
            this.estimateSinglePoolSwapExactAmountOut.bind(this);
        this.numPools = this.numPools.bind(this);
        this.pool = this.pool.bind(this);
        this.allPools = this.allPools.bind(this);
        this.listPoolsByDenom = this.listPoolsByDenom.bind(this);
        this.spotPrice = this.spotPrice.bind(this);
        this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
        this.totalLiquidity = this.totalLiquidity.bind(this);
        this.totalVolumeForPool = this.totalVolumeForPool.bind(this);
        this.tradingPairTakerFee = this.tradingPairTakerFee.bind(this);
        this.estimateTradeBasedOnPriceImpact =
            this.estimateTradeBasedOnPriceImpact.bind(this);
    }
    params(request = {}) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'Params', data);
        return promise.then(data => query_1.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountIn(request) {
        const data = query_1.EstimateSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountIn', data);
        return promise.then(data => query_1.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountInWithPrimitiveTypes(request) {
        const data = query_1.EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountInWithPrimitiveTypes', data);
        return promise.then(data => query_1.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSinglePoolSwapExactAmountIn(request) {
        const data = query_1.EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSinglePoolSwapExactAmountIn', data);
        return promise.then(data => query_1.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountOut(request) {
        const data = query_1.EstimateSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountOut', data);
        return promise.then(data => query_1.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountOutWithPrimitiveTypes(request) {
        const data = query_1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountOutWithPrimitiveTypes', data);
        return promise.then(data => query_1.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSinglePoolSwapExactAmountOut(request) {
        const data = query_1.EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSinglePoolSwapExactAmountOut', data);
        return promise.then(data => query_1.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    numPools(request = {}) {
        const data = query_1.NumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'NumPools', data);
        return promise.then(data => query_1.NumPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    pool(request) {
        const data = query_1.PoolRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'Pool', data);
        return promise.then(data => query_1.PoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    allPools(request = {}) {
        const data = query_1.AllPoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'AllPools', data);
        return promise.then(data => query_1.AllPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    listPoolsByDenom(request) {
        const data = query_1.ListPoolsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'ListPoolsByDenom', data);
        return promise.then(data => query_1.ListPoolsByDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotPrice(request) {
        const data = query_1.SpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'SpotPrice', data);
        return promise.then(data => query_1.SpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalPoolLiquidity(request) {
        const data = query_1.TotalPoolLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TotalPoolLiquidity', data);
        return promise.then(data => query_1.TotalPoolLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalLiquidity(request = {}) {
        const data = query_1.TotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TotalLiquidity', data);
        return promise.then(data => query_1.TotalLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalVolumeForPool(request) {
        const data = query_1.TotalVolumeForPoolRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TotalVolumeForPool', data);
        return promise.then(data => query_1.TotalVolumeForPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    tradingPairTakerFee(request) {
        const data = query_1.TradingPairTakerFeeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TradingPairTakerFee', data);
        return promise.then(data => query_1.TradingPairTakerFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateTradeBasedOnPriceImpact(request) {
        const data = query_1.EstimateTradeBasedOnPriceImpactRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateTradeBasedOnPriceImpact', data);
        return promise.then(data => query_1.EstimateTradeBasedOnPriceImpactResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        estimateSwapExactAmountIn(request) {
            return queryService.estimateSwapExactAmountIn(request);
        },
        estimateSwapExactAmountInWithPrimitiveTypes(request) {
            return queryService.estimateSwapExactAmountInWithPrimitiveTypes(request);
        },
        estimateSinglePoolSwapExactAmountIn(request) {
            return queryService.estimateSinglePoolSwapExactAmountIn(request);
        },
        estimateSwapExactAmountOut(request) {
            return queryService.estimateSwapExactAmountOut(request);
        },
        estimateSwapExactAmountOutWithPrimitiveTypes(request) {
            return queryService.estimateSwapExactAmountOutWithPrimitiveTypes(request);
        },
        estimateSinglePoolSwapExactAmountOut(request) {
            return queryService.estimateSinglePoolSwapExactAmountOut(request);
        },
        numPools(request) {
            return queryService.numPools(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        allPools(request) {
            return queryService.allPools(request);
        },
        listPoolsByDenom(request) {
            return queryService.listPoolsByDenom(request);
        },
        spotPrice(request) {
            return queryService.spotPrice(request);
        },
        totalPoolLiquidity(request) {
            return queryService.totalPoolLiquidity(request);
        },
        totalLiquidity(request) {
            return queryService.totalLiquidity(request);
        },
        totalVolumeForPool(request) {
            return queryService.totalVolumeForPool(request);
        },
        tradingPairTakerFee(request) {
            return queryService.tradingPairTakerFee(request);
        },
        estimateTradeBasedOnPriceImpact(request) {
            return queryService.estimateTradeBasedOnPriceImpact(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
