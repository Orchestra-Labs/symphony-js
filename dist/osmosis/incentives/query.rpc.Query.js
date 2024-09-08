"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.ModuleToDistributeCoinsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'ModuleToDistributeCoins', data);
        return promise.then(data => query_1.ModuleToDistributeCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    gaugeByID(request) {
        const data = query_1.GaugeByIDRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'GaugeByID', data);
        return promise.then(data => query_1.GaugeByIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    gauges(request = {
        pagination: undefined,
    }) {
        const data = query_1.GaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'Gauges', data);
        return promise.then(data => query_1.GaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    activeGauges(request = {
        pagination: undefined,
    }) {
        const data = query_1.ActiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'ActiveGauges', data);
        return promise.then(data => query_1.ActiveGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    activeGaugesPerDenom(request) {
        const data = query_1.ActiveGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'ActiveGaugesPerDenom', data);
        return promise.then(data => query_1.ActiveGaugesPerDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    upcomingGauges(request = {
        pagination: undefined,
    }) {
        const data = query_1.UpcomingGaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'UpcomingGauges', data);
        return promise.then(data => query_1.UpcomingGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    upcomingGaugesPerDenom(request) {
        const data = query_1.UpcomingGaugesPerDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'UpcomingGaugesPerDenom', data);
        return promise.then(data => query_1.UpcomingGaugesPerDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    rewardsEst(request) {
        const data = query_1.RewardsEstRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'RewardsEst', data);
        return promise.then(data => query_1.RewardsEstResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockableDurations(request = {}) {
        const data = query_1.QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'LockableDurations', data);
        return promise.then(data => query_1.QueryLockableDurationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    allGroups(request = {}) {
        const data = query_1.QueryAllGroupsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'AllGroups', data);
        return promise.then(data => query_1.QueryAllGroupsResponse.decode(new binary_1.BinaryReader(data)));
    }
    allGroupsGauges(request = {}) {
        const data = query_1.QueryAllGroupsGaugesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'AllGroupsGauges', data);
        return promise.then(data => query_1.QueryAllGroupsGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
    allGroupsWithGauge(request = {}) {
        const data = query_1.QueryAllGroupsWithGaugeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'AllGroupsWithGauge', data);
        return promise.then(data => query_1.QueryAllGroupsWithGaugeResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupByGroupGaugeID(request) {
        const data = query_1.QueryGroupByGroupGaugeIDRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'GroupByGroupGaugeID', data);
        return promise.then(data => query_1.QueryGroupByGroupGaugeIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    currentWeightByGroupGaugeID(request) {
        const data = query_1.QueryCurrentWeightByGroupGaugeIDRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Query', 'CurrentWeightByGroupGaugeID', data);
        return promise.then(data => query_1.QueryCurrentWeightByGroupGaugeIDResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
