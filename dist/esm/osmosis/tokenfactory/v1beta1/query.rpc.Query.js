import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponse, QueryAllBeforeSendHooksAddressesRequest, QueryAllBeforeSendHooksAddressesResponse, } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
        this.denomsFromCreator = this.denomsFromCreator.bind(this);
        this.beforeSendHookAddress = this.beforeSendHookAddress.bind(this);
        this.allBeforeSendHooksAddresses =
            this.allBeforeSendHooksAddresses.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.tokenfactory.v1beta1.Query', 'Params', data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    denomAuthorityMetadata(request) {
        const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.tokenfactory.v1beta1.Query', 'DenomAuthorityMetadata', data);
        return promise.then(data => QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data)));
    }
    denomsFromCreator(request) {
        const data = QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.tokenfactory.v1beta1.Query', 'DenomsFromCreator', data);
        return promise.then(data => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)));
    }
    beforeSendHookAddress(request) {
        const data = QueryBeforeSendHookAddressRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.tokenfactory.v1beta1.Query', 'BeforeSendHookAddress', data);
        return promise.then(data => QueryBeforeSendHookAddressResponse.decode(new BinaryReader(data)));
    }
    allBeforeSendHooksAddresses(request = {}) {
        const data = QueryAllBeforeSendHooksAddressesRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.tokenfactory.v1beta1.Query', 'AllBeforeSendHooksAddresses', data);
        return promise.then(data => QueryAllBeforeSendHooksAddressesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        denomAuthorityMetadata(request) {
            return queryService.denomAuthorityMetadata(request);
        },
        denomsFromCreator(request) {
            return queryService.denomsFromCreator(request);
        },
        beforeSendHookAddress(request) {
            return queryService.beforeSendHookAddress(request);
        },
        allBeforeSendHooksAddresses(request) {
            return queryService.allBeforeSendHooksAddresses(request);
        },
    };
};
