import { BinaryReader } from '../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryAllGroupsRequest, QueryAllGroupsResponse, QueryAllGroupsGaugesRequest, QueryAllGroupsGaugesResponse, QueryAllGroupsWithGaugeRequest, QueryAllGroupsWithGaugeResponse, QueryGroupByGroupGaugeIDRequest, QueryGroupByGroupGaugeIDResponse, QueryCurrentWeightByGroupGaugeIDRequest, QueryCurrentWeightByGroupGaugeIDResponse, } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
        this.gaugeByID = this.gaugeByID.bind(this);
        this.gauges = this.gauges.bind(this);
        this.activeGauges = this.activeGauges.bind(this);
        this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
        this.upcomingGauges = this.upcomingGauges.bind(this);
        this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
        this.rewardsEst = this.rewardsEst.bind(this);
        this.lockableDurations = this.lockableDurations.bind(this);
        this.allGroups = this.allGroups.bind(this);
        this.allGroupsGauges = this.allGroupsGauges.bind(this);
        this.allGroupsWithGauge = this.allGroupsWithGauge.bind(this);
        this.groupByGroupGaugeID = this.groupByGroupGaugeID.bind(this);
        this.currentWeightByGroupGaugeID =
            this.currentWeightByGroupGaugeID.bind(this);
    }
    moduleToDistributeCoins(request = {}) {
        const data = ModuleToDistributeCoinsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'ModuleToDistributeCoins', data);
        return promise.then(data => ModuleToDistributeCoinsResponse.decode(new BinaryReader(data)));
    }
    gaugeByID(request) {
        const data = GaugeByIDRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'GaugeByID', data);
        return promise.then(data => GaugeByIDResponse.decode(new BinaryReader(data)));
    }
    gauges(request = {
        pagination: undefined,
    }) {
        const data = GaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'Gauges', data);
        return promise.then(data => GaugesResponse.decode(new BinaryReader(data)));
    }
    activeGauges(request = {
        pagination: undefined,
    }) {
        const data = ActiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'ActiveGauges', data);
        return promise.then(data => ActiveGaugesResponse.decode(new BinaryReader(data)));
    }
    activeGaugesPerDenom(request) {
        const data = ActiveGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'ActiveGaugesPerDenom', data);
        return promise.then(data => ActiveGaugesPerDenomResponse.decode(new BinaryReader(data)));
    }
    upcomingGauges(request = {
        pagination: undefined,
    }) {
        const data = UpcomingGaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'UpcomingGauges', data);
        return promise.then(data => UpcomingGaugesResponse.decode(new BinaryReader(data)));
    }
    upcomingGaugesPerDenom(request) {
        const data = UpcomingGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'UpcomingGaugesPerDenom', data);
        return promise.then(data => UpcomingGaugesPerDenomResponse.decode(new BinaryReader(data)));
    }
    rewardsEst(request) {
        const data = RewardsEstRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'RewardsEst', data);
        return promise.then(data => RewardsEstResponse.decode(new BinaryReader(data)));
    }
    lockableDurations(request = {}) {
        const data = QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'LockableDurations', data);
        return promise.then(data => QueryLockableDurationsResponse.decode(new BinaryReader(data)));
    }
    allGroups(request = {}) {
        const data = QueryAllGroupsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'AllGroups', data);
        return promise.then(data => QueryAllGroupsResponse.decode(new BinaryReader(data)));
    }
    allGroupsGauges(request = {}) {
        const data = QueryAllGroupsGaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'AllGroupsGauges', data);
        return promise.then(data => QueryAllGroupsGaugesResponse.decode(new BinaryReader(data)));
    }
    allGroupsWithGauge(request = {}) {
        const data = QueryAllGroupsWithGaugeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'AllGroupsWithGauge', data);
        return promise.then(data => QueryAllGroupsWithGaugeResponse.decode(new BinaryReader(data)));
    }
    groupByGroupGaugeID(request) {
        const data = QueryGroupByGroupGaugeIDRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'GroupByGroupGaugeID', data);
        return promise.then(data => QueryGroupByGroupGaugeIDResponse.decode(new BinaryReader(data)));
    }
    currentWeightByGroupGaugeID(request) {
        const data = QueryCurrentWeightByGroupGaugeIDRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'CurrentWeightByGroupGaugeID', data);
        return promise.then(data => QueryCurrentWeightByGroupGaugeIDResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        moduleToDistributeCoins(request) {
            return queryService.moduleToDistributeCoins(request);
        },
        gaugeByID(request) {
            return queryService.gaugeByID(request);
        },
        gauges(request) {
            return queryService.gauges(request);
        },
        activeGauges(request) {
            return queryService.activeGauges(request);
        },
        activeGaugesPerDenom(request) {
            return queryService.activeGaugesPerDenom(request);
        },
        upcomingGauges(request) {
            return queryService.upcomingGauges(request);
        },
        upcomingGaugesPerDenom(request) {
            return queryService.upcomingGaugesPerDenom(request);
        },
        rewardsEst(request) {
            return queryService.rewardsEst(request);
        },
        lockableDurations(request) {
            return queryService.lockableDurations(request);
        },
        allGroups(request) {
            return queryService.allGroups(request);
        },
        allGroupsGauges(request) {
            return queryService.allGroupsGauges(request);
        },
        allGroupsWithGauge(request) {
            return queryService.allGroupsWithGauge(request);
        },
        groupByGroupGaugeID(request) {
            return queryService.groupByGroupGaugeID(request);
        },
        currentWeightByGroupGaugeID(request) {
            return queryService.currentWeightByGroupGaugeID(request);
        },
    };
};
