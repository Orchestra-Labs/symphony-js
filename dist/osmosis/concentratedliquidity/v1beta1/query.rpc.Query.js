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
        this.userPositions = this.userPositions.bind(this);
        this.liquidityPerTickRange = this.liquidityPerTickRange.bind(this);
        this.liquidityNetInDirection = this.liquidityNetInDirection.bind(this);
        this.claimableSpreadRewards = this.claimableSpreadRewards.bind(this);
        this.claimableIncentives = this.claimableIncentives.bind(this);
        this.positionById = this.positionById.bind(this);
        this.poolAccumulatorRewards = this.poolAccumulatorRewards.bind(this);
        this.incentiveRecords = this.incentiveRecords.bind(this);
        this.tickAccumulatorTrackers = this.tickAccumulatorTrackers.bind(this);
        this.cFMMPoolIdLinkFromConcentratedPoolId =
            this.cFMMPoolIdLinkFromConcentratedPoolId.bind(this);
        this.userUnbondingPositions = this.userUnbondingPositions.bind(this);
        this.getTotalLiquidity = this.getTotalLiquidity.bind(this);
        this.numNextInitializedTicks = this.numNextInitializedTicks.bind(this);
    }
    pools(request = {
        pagination: undefined,
    }) {
        const data = query_1.PoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'Pools', data);
        return promise.then(data => query_1.PoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'Params', data);
        return promise.then(data => query_1.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    userPositions(request) {
        const data = query_1.UserPositionsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'UserPositions', data);
        return promise.then(data => query_1.UserPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidityPerTickRange(request) {
        const data = query_1.LiquidityPerTickRangeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'LiquidityPerTickRange', data);
        return promise.then(data => query_1.LiquidityPerTickRangeResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidityNetInDirection(request) {
        const data = query_1.LiquidityNetInDirectionRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'LiquidityNetInDirection', data);
        return promise.then(data => query_1.LiquidityNetInDirectionResponse.decode(new binary_1.BinaryReader(data)));
    }
    claimableSpreadRewards(request) {
        const data = query_1.ClaimableSpreadRewardsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'ClaimableSpreadRewards', data);
        return promise.then(data => query_1.ClaimableSpreadRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    claimableIncentives(request) {
        const data = query_1.ClaimableIncentivesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'ClaimableIncentives', data);
        return promise.then(data => query_1.ClaimableIncentivesResponse.decode(new binary_1.BinaryReader(data)));
    }
    positionById(request) {
        const data = query_1.PositionByIdRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'PositionById', data);
        return promise.then(data => query_1.PositionByIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolAccumulatorRewards(request) {
        const data = query_1.PoolAccumulatorRewardsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'PoolAccumulatorRewards', data);
        return promise.then(data => query_1.PoolAccumulatorRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    incentiveRecords(request) {
        const data = query_1.IncentiveRecordsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'IncentiveRecords', data);
        return promise.then(data => query_1.IncentiveRecordsResponse.decode(new binary_1.BinaryReader(data)));
    }
    tickAccumulatorTrackers(request) {
        const data = query_1.TickAccumulatorTrackersRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'TickAccumulatorTrackers', data);
        return promise.then(data => query_1.TickAccumulatorTrackersResponse.decode(new binary_1.BinaryReader(data)));
    }
    cFMMPoolIdLinkFromConcentratedPoolId(request) {
        const data = query_1.CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'CFMMPoolIdLinkFromConcentratedPoolId', data);
        return promise.then(data => query_1.CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    userUnbondingPositions(request) {
        const data = query_1.UserUnbondingPositionsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'UserUnbondingPositions', data);
        return promise.then(data => query_1.UserUnbondingPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getTotalLiquidity(request = {}) {
        const data = query_1.GetTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'GetTotalLiquidity', data);
        return promise.then(data => query_1.GetTotalLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    numNextInitializedTicks(request) {
        const data = query_1.NumNextInitializedTicksRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'NumNextInitializedTicks', data);
        return promise.then(data => query_1.NumNextInitializedTicksResponse.decode(new binary_1.BinaryReader(data)));
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
        userPositions(request) {
            return queryService.userPositions(request);
        },
        liquidityPerTickRange(request) {
            return queryService.liquidityPerTickRange(request);
        },
        liquidityNetInDirection(request) {
            return queryService.liquidityNetInDirection(request);
        },
        claimableSpreadRewards(request) {
            return queryService.claimableSpreadRewards(request);
        },
        claimableIncentives(request) {
            return queryService.claimableIncentives(request);
        },
        positionById(request) {
            return queryService.positionById(request);
        },
        poolAccumulatorRewards(request) {
            return queryService.poolAccumulatorRewards(request);
        },
        incentiveRecords(request) {
            return queryService.incentiveRecords(request);
        },
        tickAccumulatorTrackers(request) {
            return queryService.tickAccumulatorTrackers(request);
        },
        cFMMPoolIdLinkFromConcentratedPoolId(request) {
            return queryService.cFMMPoolIdLinkFromConcentratedPoolId(request);
        },
        userUnbondingPositions(request) {
            return queryService.userUnbondingPositions(request);
        },
        getTotalLiquidity(request) {
            return queryService.getTotalLiquidity(request);
        },
        numNextInitializedTicks(request) {
            return queryService.numNextInitializedTicks(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
