//@ts-nocheck
import { setPaginationParams } from '../../../helpers';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
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
    /* Pools returns all concentrated liquidity pools */
    async pools(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/pools`;
        return await this.req.get(endpoint, options);
    }
    /* Params returns concentrated liquidity module params. */
    async params(_params = {}) {
        const endpoint = `osmosis/concentratedliquidity/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* UserPositions returns all concentrated positions of some address. */
    async userPositions(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/positions/${params.address}`;
        return await this.req.get(endpoint, options);
    }
    /* LiquidityPerTickRange returns the amount of liquidity per every tick range
     existing within the given pool */
    async liquidityPerTickRange(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/liquidity_per_tick_range`;
        return await this.req.get(endpoint, options);
    }
    /* LiquidityNetInDirection returns liquidity net in the direction given.
     Uses the bound if specified, if not uses either min tick / max tick
     depending on the direction. */
    async liquidityNetInDirection(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        if (typeof params?.tokenIn !== 'undefined') {
            options.params.token_in = params.tokenIn;
        }
        if (typeof params?.startTick !== 'undefined') {
            options.params.start_tick = params.startTick;
        }
        if (typeof params?.useCurTick !== 'undefined') {
            options.params.use_cur_tick = params.useCurTick;
        }
        if (typeof params?.boundTick !== 'undefined') {
            options.params.bound_tick = params.boundTick;
        }
        if (typeof params?.useNoBound !== 'undefined') {
            options.params.use_no_bound = params.useNoBound;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/liquidity_net_in_direction`;
        return await this.req.get(endpoint, options);
    }
    /* ClaimableSpreadRewards returns the amount of spread rewards that can be
     claimed by a position with the given id. */
    async claimableSpreadRewards(params) {
        const options = {
            params: {},
        };
        if (typeof params?.positionId !== 'undefined') {
            options.params.position_id = params.positionId;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/claimable_spread_rewards`;
        return await this.req.get(endpoint, options);
    }
    /* ClaimableIncentives returns the amount of incentives that can be claimed
     and how many would be forfeited by a position with the given id. */
    async claimableIncentives(params) {
        const options = {
            params: {},
        };
        if (typeof params?.positionId !== 'undefined') {
            options.params.position_id = params.positionId;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/claimable_incentives`;
        return await this.req.get(endpoint, options);
    }
    /* PositionById returns a position with the given id. */
    async positionById(params) {
        const options = {
            params: {},
        };
        if (typeof params?.positionId !== 'undefined') {
            options.params.position_id = params.positionId;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/position_by_id`;
        return await this.req.get(endpoint, options);
    }
    /* PoolAccumulatorRewards returns the pool-global accumulator rewards.
     Contains spread factor rewards and uptime rewards. */
    async poolAccumulatorRewards(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/pool_accum_rewards`;
        return await this.req.get(endpoint, options);
    }
    /* IncentiveRecords returns the incentive records for a given poolId */
    async incentiveRecords(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/incentive_records`;
        return await this.req.get(endpoint, options);
    }
    /* TickAccumulatorTrackers returns the tick accumulator trackers.
     Contains spread factor and uptime accumulator trackers. */
    async tickAccumulatorTrackers(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        if (typeof params?.tickIndex !== 'undefined') {
            options.params.tick_index = params.tickIndex;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/tick_accum_trackers`;
        return await this.req.get(endpoint, options);
    }
    /* CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
     pool that is linked with the given concentrated pool. */
    async cFMMPoolIdLinkFromConcentratedPoolId(params) {
        const endpoint = `osmosis/concentratedliquidity/v1beta1/cfmm_pool_id_link_from_concentrated/${params.concentratedPoolId}`;
        return await this.req.get(endpoint);
    }
    /* UserUnbondingPositions returns the position and lock info of unbonding
     positions of the given address. */
    async userUnbondingPositions(params) {
        const endpoint = `osmosis/concentratedliquidity/v1beta1/user_unbonding_positions/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* GetTotalLiquidity returns total liquidity across all cl pools. */
    async getTotalLiquidity(_params = {}) {
        const endpoint = `osmosis/concentratedliquidity/v1beta1/get_total_liquidity`;
        return await this.req.get(endpoint);
    }
    /* NumNextInitializedTicks returns the provided number of next initialized
     ticks in the direction of swapping the token in denom. */
    async numNextInitializedTicks(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        if (typeof params?.tokenInDenom !== 'undefined') {
            options.params.token_in_denom = params.tokenInDenom;
        }
        if (typeof params?.numNextInitializedTicks !== 'undefined') {
            options.params.num_next_initialized_ticks =
                params.numNextInitializedTicks;
        }
        const endpoint = `osmosis/concentratedliquidity/v1beta1/num_next_initialized_ticks`;
        return await this.req.get(endpoint, options);
    }
}
