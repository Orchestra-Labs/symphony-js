import { Rpc } from '../../../helpers';
import { QueryClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponse, QueryAllBeforeSendHooksAddressesRequest, QueryAllBeforeSendHooksAddressesResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    /**
     * BeforeSendHookAddress defines a gRPC query method for
     * getting the address registered for the before send hook.
     */
    beforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
    /**
     * AllBeforeSendHooksAddresses defines a gRPC query method for
     * getting all addresses with before send hook registered.
     * The response returns two arrays, an array with a list of denom and an array
     * of before send hook addresses. The idx of denom corresponds to before send
     * hook addresse's idx.
     */
    allBeforeSendHooksAddresses(request?: QueryAllBeforeSendHooksAddressesRequest): Promise<QueryAllBeforeSendHooksAddressesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    beforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
    allBeforeSendHooksAddresses(request?: QueryAllBeforeSendHooksAddressesRequest): Promise<QueryAllBeforeSendHooksAddressesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    beforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
    allBeforeSendHooksAddresses(request?: QueryAllBeforeSendHooksAddressesRequest): Promise<QueryAllBeforeSendHooksAddressesResponse>;
};
