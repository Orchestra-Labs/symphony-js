import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { PoolsRequest, PoolsResponse, ParamsRequest, ParamsResponse, UserPositionsRequest, UserPositionsResponse, LiquidityPerTickRangeRequest, LiquidityPerTickRangeResponse, LiquidityNetInDirectionRequest, LiquidityNetInDirectionResponse, ClaimableSpreadRewardsRequest, ClaimableSpreadRewardsResponse, ClaimableIncentivesRequest, ClaimableIncentivesResponse, PositionByIdRequest, PositionByIdResponse, PoolAccumulatorRewardsRequest, PoolAccumulatorRewardsResponse, IncentiveRecordsRequest, IncentiveRecordsResponse, TickAccumulatorTrackersRequest, TickAccumulatorTrackersResponse, CFMMPoolIdLinkFromConcentratedPoolIdRequest, CFMMPoolIdLinkFromConcentratedPoolIdResponse, UserUnbondingPositionsRequest, UserUnbondingPositionsResponse, GetTotalLiquidityRequest, GetTotalLiquidityResponse, NumNextInitializedTicksRequest, NumNextInitializedTicksResponse, } from './query';
export class QueryClientImpl {
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
        const data = PoolsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'Pools', data);
        return promise.then(data => PoolsResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'Params', data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
    userPositions(request) {
        const data = UserPositionsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'UserPositions', data);
        return promise.then(data => UserPositionsResponse.decode(new BinaryReader(data)));
    }
    liquidityPerTickRange(request) {
        const data = LiquidityPerTickRangeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'LiquidityPerTickRange', data);
        return promise.then(data => LiquidityPerTickRangeResponse.decode(new BinaryReader(data)));
    }
    liquidityNetInDirection(request) {
        const data = LiquidityNetInDirectionRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'LiquidityNetInDirection', data);
        return promise.then(data => LiquidityNetInDirectionResponse.decode(new BinaryReader(data)));
    }
    claimableSpreadRewards(request) {
        const data = ClaimableSpreadRewardsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'ClaimableSpreadRewards', data);
        return promise.then(data => ClaimableSpreadRewardsResponse.decode(new BinaryReader(data)));
    }
    claimableIncentives(request) {
        const data = ClaimableIncentivesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'ClaimableIncentives', data);
        return promise.then(data => ClaimableIncentivesResponse.decode(new BinaryReader(data)));
    }
    positionById(request) {
        const data = PositionByIdRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'PositionById', data);
        return promise.then(data => PositionByIdResponse.decode(new BinaryReader(data)));
    }
    poolAccumulatorRewards(request) {
        const data = PoolAccumulatorRewardsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'PoolAccumulatorRewards', data);
        return promise.then(data => PoolAccumulatorRewardsResponse.decode(new BinaryReader(data)));
    }
    incentiveRecords(request) {
        const data = IncentiveRecordsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'IncentiveRecords', data);
        return promise.then(data => IncentiveRecordsResponse.decode(new BinaryReader(data)));
    }
    tickAccumulatorTrackers(request) {
        const data = TickAccumulatorTrackersRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'TickAccumulatorTrackers', data);
        return promise.then(data => TickAccumulatorTrackersResponse.decode(new BinaryReader(data)));
    }
    cFMMPoolIdLinkFromConcentratedPoolId(request) {
        const data = CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'CFMMPoolIdLinkFromConcentratedPoolId', data);
        return promise.then(data => CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(new BinaryReader(data)));
    }
    userUnbondingPositions(request) {
        const data = UserUnbondingPositionsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'UserUnbondingPositions', data);
        return promise.then(data => UserUnbondingPositionsResponse.decode(new BinaryReader(data)));
    }
    getTotalLiquidity(request = {}) {
        const data = GetTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'GetTotalLiquidity', data);
        return promise.then(data => GetTotalLiquidityResponse.decode(new BinaryReader(data)));
    }
    numNextInitializedTicks(request) {
        const data = NumNextInitializedTicksRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Query', 'NumNextInitializedTicks', data);
        return promise.then(data => NumNextInitializedTicksResponse.decode(new BinaryReader(data)));
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
