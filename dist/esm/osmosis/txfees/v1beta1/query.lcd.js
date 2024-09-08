export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.feeTokens = this.feeTokens.bind(this);
        this.denomSpotPrice = this.denomSpotPrice.bind(this);
        this.denomPoolId = this.denomPoolId.bind(this);
        this.baseDenom = this.baseDenom.bind(this);
        this.getEipBaseFee = this.getEipBaseFee.bind(this);
    }
    /* FeeTokens returns a list of all the whitelisted fee tokens and their
     corresponding pools. It does not include the BaseDenom, which has its own
     query endpoint */
    async feeTokens(_params = {}) {
        const endpoint = `osmosis/txfees/v1beta1/fee_tokens`;
        return await this.req.get(endpoint);
    }
    /* DenomSpotPrice returns all spot prices by each registered token denom. */
    async denomSpotPrice(params) {
        const options = {
            params: {},
        };
        if (typeof params?.denom !== 'undefined') {
            options.params.denom = params.denom;
        }
        const endpoint = `osmosis/txfees/v1beta1/spot_price_by_denom`;
        return await this.req.get(endpoint, options);
    }
    /* Returns the poolID for a specified denom input. */
    async denomPoolId(params) {
        const endpoint = `osmosis/txfees/v1beta1/denom_pool_id/${params.denom}`;
        return await this.req.get(endpoint);
    }
    /* Returns a list of all base denom tokens and their corresponding pools. */
    async baseDenom(_params = {}) {
        const endpoint = `osmosis/txfees/v1beta1/base_denom`;
        return await this.req.get(endpoint);
    }
    /* Returns a list of all base denom tokens and their corresponding pools. */
    async getEipBaseFee(_params = {}) {
        const endpoint = `osmosis/txfees/v1beta1/cur_eip_base_fee`;
        return await this.req.get(endpoint);
    }
}
