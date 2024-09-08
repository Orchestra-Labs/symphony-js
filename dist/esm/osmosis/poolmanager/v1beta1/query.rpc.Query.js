import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInWithPrimitiveTypesRequest, EstimateSinglePoolSwapExactAmountInRequest, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutWithPrimitiveTypesRequest, EstimateSinglePoolSwapExactAmountOutRequest, NumPoolsRequest, NumPoolsResponse, PoolRequest, PoolResponse, AllPoolsRequest, AllPoolsResponse, ListPoolsByDenomRequest, ListPoolsByDenomResponse, SpotPriceRequest, SpotPriceResponse, TotalPoolLiquidityRequest, TotalPoolLiquidityResponse, TotalLiquidityRequest, TotalLiquidityResponse, TotalVolumeForPoolRequest, TotalVolumeForPoolResponse, TradingPairTakerFeeRequest, TradingPairTakerFeeResponse, EstimateTradeBasedOnPriceImpactRequest, EstimateTradeBasedOnPriceImpactResponse, } from './query';
export class QueryClientImpl {
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
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'Params', data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountIn(request) {
        const data = EstimateSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountIn', data);
        return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountInWithPrimitiveTypes(request) {
        const data = EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountInWithPrimitiveTypes', data);
        return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    estimateSinglePoolSwapExactAmountIn(request) {
        const data = EstimateSinglePoolSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSinglePoolSwapExactAmountIn', data);
        return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountOut(request) {
        const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountOut', data);
        return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountOutWithPrimitiveTypes(request) {
        const data = EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSwapExactAmountOutWithPrimitiveTypes', data);
        return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    estimateSinglePoolSwapExactAmountOut(request) {
        const data = EstimateSinglePoolSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateSinglePoolSwapExactAmountOut', data);
        return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    numPools(request = {}) {
        const data = NumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'NumPools', data);
        return promise.then(data => NumPoolsResponse.decode(new BinaryReader(data)));
    }
    pool(request) {
        const data = PoolRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'Pool', data);
        return promise.then(data => PoolResponse.decode(new BinaryReader(data)));
    }
    allPools(request = {}) {
        const data = AllPoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'AllPools', data);
        return promise.then(data => AllPoolsResponse.decode(new BinaryReader(data)));
    }
    listPoolsByDenom(request) {
        const data = ListPoolsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'ListPoolsByDenom', data);
        return promise.then(data => ListPoolsByDenomResponse.decode(new BinaryReader(data)));
    }
    spotPrice(request) {
        const data = SpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'SpotPrice', data);
        return promise.then(data => SpotPriceResponse.decode(new BinaryReader(data)));
    }
    totalPoolLiquidity(request) {
        const data = TotalPoolLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TotalPoolLiquidity', data);
        return promise.then(data => TotalPoolLiquidityResponse.decode(new BinaryReader(data)));
    }
    totalLiquidity(request = {}) {
        const data = TotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TotalLiquidity', data);
        return promise.then(data => TotalLiquidityResponse.decode(new BinaryReader(data)));
    }
    totalVolumeForPool(request) {
        const data = TotalVolumeForPoolRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TotalVolumeForPool', data);
        return promise.then(data => TotalVolumeForPoolResponse.decode(new BinaryReader(data)));
    }
    tradingPairTakerFee(request) {
        const data = TradingPairTakerFeeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'TradingPairTakerFee', data);
        return promise.then(data => TradingPairTakerFeeResponse.decode(new BinaryReader(data)));
    }
    estimateTradeBasedOnPriceImpact(request) {
        const data = EstimateTradeBasedOnPriceImpactRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Query', 'EstimateTradeBasedOnPriceImpact', data);
        return promise.then(data => EstimateTradeBasedOnPriceImpactResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
