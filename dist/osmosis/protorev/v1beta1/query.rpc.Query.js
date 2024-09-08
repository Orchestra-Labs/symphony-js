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
        this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
        this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
        this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
        this.getProtoRevStatisticsByRoute =
            this.getProtoRevStatisticsByRoute.bind(this);
        this.getProtoRevAllRouteStatistics =
            this.getProtoRevAllRouteStatistics.bind(this);
        this.getProtoRevTokenPairArbRoutes =
            this.getProtoRevTokenPairArbRoutes.bind(this);
        this.getProtoRevAdminAccount = this.getProtoRevAdminAccount.bind(this);
        this.getProtoRevDeveloperAccount =
            this.getProtoRevDeveloperAccount.bind(this);
        this.getProtoRevInfoByPoolType = this.getProtoRevInfoByPoolType.bind(this);
        this.getProtoRevMaxPoolPointsPerTx =
            this.getProtoRevMaxPoolPointsPerTx.bind(this);
        this.getProtoRevMaxPoolPointsPerBlock =
            this.getProtoRevMaxPoolPointsPerBlock.bind(this);
        this.getProtoRevBaseDenoms = this.getProtoRevBaseDenoms.bind(this);
        this.getProtoRevEnabled = this.getProtoRevEnabled.bind(this);
        this.getProtoRevPool = this.getProtoRevPool.bind(this);
        this.getAllProtocolRevenue = this.getAllProtocolRevenue.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'Params', data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevNumberOfTrades(request = {}) {
        const data = query_1.QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevNumberOfTrades', data);
        return promise.then(data => query_1.QueryGetProtoRevNumberOfTradesResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevProfitsByDenom(request) {
        const data = query_1.QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevProfitsByDenom', data);
        return promise.then(data => query_1.QueryGetProtoRevProfitsByDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevAllProfits(request = {}) {
        const data = query_1.QueryGetProtoRevAllProfitsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevAllProfits', data);
        return promise.then(data => query_1.QueryGetProtoRevAllProfitsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevStatisticsByRoute(request) {
        const data = query_1.QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevStatisticsByRoute', data);
        return promise.then(data => query_1.QueryGetProtoRevStatisticsByRouteResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevAllRouteStatistics(request = {}) {
        const data = query_1.QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevAllRouteStatistics', data);
        return promise.then(data => query_1.QueryGetProtoRevAllRouteStatisticsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevTokenPairArbRoutes(request = {}) {
        const data = query_1.QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevTokenPairArbRoutes', data);
        return promise.then(data => query_1.QueryGetProtoRevTokenPairArbRoutesResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevAdminAccount(request = {}) {
        const data = query_1.QueryGetProtoRevAdminAccountRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevAdminAccount', data);
        return promise.then(data => query_1.QueryGetProtoRevAdminAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevDeveloperAccount(request = {}) {
        const data = query_1.QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevDeveloperAccount', data);
        return promise.then(data => query_1.QueryGetProtoRevDeveloperAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevInfoByPoolType(request = {}) {
        const data = query_1.QueryGetProtoRevInfoByPoolTypeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevInfoByPoolType', data);
        return promise.then(data => query_1.QueryGetProtoRevInfoByPoolTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevMaxPoolPointsPerTx(request = {}) {
        const data = query_1.QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevMaxPoolPointsPerTx', data);
        return promise.then(data => query_1.QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevMaxPoolPointsPerBlock(request = {}) {
        const data = query_1.QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevMaxPoolPointsPerBlock', data);
        return promise.then(data => query_1.QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevBaseDenoms(request = {}) {
        const data = query_1.QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevBaseDenoms', data);
        return promise.then(data => query_1.QueryGetProtoRevBaseDenomsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevEnabled(request = {}) {
        const data = query_1.QueryGetProtoRevEnabledRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevEnabled', data);
        return promise.then(data => query_1.QueryGetProtoRevEnabledResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevPool(request) {
        const data = query_1.QueryGetProtoRevPoolRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevPool', data);
        return promise.then(data => query_1.QueryGetProtoRevPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    getAllProtocolRevenue(request = {}) {
        const data = query_1.QueryGetAllProtocolRevenueRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetAllProtocolRevenue', data);
        return promise.then(data => query_1.QueryGetAllProtocolRevenueResponse.decode(new binary_1.BinaryReader(data)));
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
        getProtoRevNumberOfTrades(request) {
            return queryService.getProtoRevNumberOfTrades(request);
        },
        getProtoRevProfitsByDenom(request) {
            return queryService.getProtoRevProfitsByDenom(request);
        },
        getProtoRevAllProfits(request) {
            return queryService.getProtoRevAllProfits(request);
        },
        getProtoRevStatisticsByRoute(request) {
            return queryService.getProtoRevStatisticsByRoute(request);
        },
        getProtoRevAllRouteStatistics(request) {
            return queryService.getProtoRevAllRouteStatistics(request);
        },
        getProtoRevTokenPairArbRoutes(request) {
            return queryService.getProtoRevTokenPairArbRoutes(request);
        },
        getProtoRevAdminAccount(request) {
            return queryService.getProtoRevAdminAccount(request);
        },
        getProtoRevDeveloperAccount(request) {
            return queryService.getProtoRevDeveloperAccount(request);
        },
        getProtoRevInfoByPoolType(request) {
            return queryService.getProtoRevInfoByPoolType(request);
        },
        getProtoRevMaxPoolPointsPerTx(request) {
            return queryService.getProtoRevMaxPoolPointsPerTx(request);
        },
        getProtoRevMaxPoolPointsPerBlock(request) {
            return queryService.getProtoRevMaxPoolPointsPerBlock(request);
        },
        getProtoRevBaseDenoms(request) {
            return queryService.getProtoRevBaseDenoms(request);
        },
        getProtoRevEnabled(request) {
            return queryService.getProtoRevEnabled(request);
        },
        getProtoRevPool(request) {
            return queryService.getProtoRevPool(request);
        },
        getAllProtocolRevenue(request) {
            return queryService.getAllProtocolRevenue(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
