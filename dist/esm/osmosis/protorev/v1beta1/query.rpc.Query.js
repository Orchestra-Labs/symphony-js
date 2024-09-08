import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevInfoByPoolTypeRequest, QueryGetProtoRevInfoByPoolTypeResponse, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponse, QueryGetProtoRevPoolRequest, QueryGetProtoRevPoolResponse, QueryGetAllProtocolRevenueRequest, QueryGetAllProtocolRevenueResponse, } from './query';
export class QueryClientImpl {
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
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'Params', data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevNumberOfTrades(request = {}) {
        const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevNumberOfTrades', data);
        return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
    }
    getProtoRevProfitsByDenom(request) {
        const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevProfitsByDenom', data);
        return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
    }
    getProtoRevAllProfits(request = {}) {
        const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevAllProfits', data);
        return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevStatisticsByRoute(request) {
        const data = QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevStatisticsByRoute', data);
        return promise.then(data => QueryGetProtoRevStatisticsByRouteResponse.decode(new BinaryReader(data)));
    }
    getProtoRevAllRouteStatistics(request = {}) {
        const data = QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevAllRouteStatistics', data);
        return promise.then(data => QueryGetProtoRevAllRouteStatisticsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevTokenPairArbRoutes(request = {}) {
        const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevTokenPairArbRoutes', data);
        return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
    }
    getProtoRevAdminAccount(request = {}) {
        const data = QueryGetProtoRevAdminAccountRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevAdminAccount', data);
        return promise.then(data => QueryGetProtoRevAdminAccountResponse.decode(new BinaryReader(data)));
    }
    getProtoRevDeveloperAccount(request = {}) {
        const data = QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevDeveloperAccount', data);
        return promise.then(data => QueryGetProtoRevDeveloperAccountResponse.decode(new BinaryReader(data)));
    }
    getProtoRevInfoByPoolType(request = {}) {
        const data = QueryGetProtoRevInfoByPoolTypeRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevInfoByPoolType', data);
        return promise.then(data => QueryGetProtoRevInfoByPoolTypeResponse.decode(new BinaryReader(data)));
    }
    getProtoRevMaxPoolPointsPerTx(request = {}) {
        const data = QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevMaxPoolPointsPerTx', data);
        return promise.then(data => QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
    }
    getProtoRevMaxPoolPointsPerBlock(request = {}) {
        const data = QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevMaxPoolPointsPerBlock', data);
        return promise.then(data => QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)));
    }
    getProtoRevBaseDenoms(request = {}) {
        const data = QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevBaseDenoms', data);
        return promise.then(data => QueryGetProtoRevBaseDenomsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevEnabled(request = {}) {
        const data = QueryGetProtoRevEnabledRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevEnabled', data);
        return promise.then(data => QueryGetProtoRevEnabledResponse.decode(new BinaryReader(data)));
    }
    getProtoRevPool(request) {
        const data = QueryGetProtoRevPoolRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetProtoRevPool', data);
        return promise.then(data => QueryGetProtoRevPoolResponse.decode(new BinaryReader(data)));
    }
    getAllProtocolRevenue(request = {}) {
        const data = QueryGetAllProtocolRevenueRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Query', 'GetAllProtocolRevenue', data);
        return promise.then(data => QueryGetAllProtocolRevenueResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
