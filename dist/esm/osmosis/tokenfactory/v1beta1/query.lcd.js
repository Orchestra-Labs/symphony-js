export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
        this.denomsFromCreator = this.denomsFromCreator.bind(this);
        this.beforeSendHookAddress = this.beforeSendHookAddress.bind(this);
        this.allBeforeSendHooksAddresses =
            this.allBeforeSendHooksAddresses.bind(this);
    }
    /* Params defines a gRPC query method that returns the tokenfactory module's
     parameters. */
    async params(_params = {}) {
        const endpoint = `osmosis/tokenfactory/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* DenomAuthorityMetadata defines a gRPC query method for fetching
     DenomAuthorityMetadata for a particular denom. */
    async denomAuthorityMetadata(params) {
        const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
        return await this.req.get(endpoint);
    }
    /* DenomsFromCreator defines a gRPC query method for fetching all
     denominations created by a specific admin/creator. */
    async denomsFromCreator(params) {
        const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
        return await this.req.get(endpoint);
    }
    /* BeforeSendHookAddress defines a gRPC query method for
     getting the address registered for the before send hook. */
    async beforeSendHookAddress(params) {
        const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/before_send_hook`;
        return await this.req.get(endpoint);
    }
    /* AllBeforeSendHooksAddresses defines a gRPC query method for
     getting all addresses with before send hook registered.
     The response returns two arrays, an array with a list of denom and an array
     of before send hook addresses. The idx of denom corresponds to before send
     hook addresse's idx. */
    async allBeforeSendHooksAddresses(_params = {}) {
        const endpoint = `osmosis/tokenfactory/v1beta1/all_before_send_hooks`;
        return await this.req.get(endpoint);
    }
}
