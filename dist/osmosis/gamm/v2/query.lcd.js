"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.spotPrice = this.spotPrice.bind(this);
    }
    /* Deprecated: please use alternate in x/poolmanager */
    async spotPrice(params) {
        const options = {
            params: {},
        };
        if (typeof params?.baseAssetDenom !== 'undefined') {
            options.params.base_asset_denom = params.baseAssetDenom;
        }
        if (typeof params?.quoteAssetDenom !== 'undefined') {
            options.params.quote_asset_denom = params.quoteAssetDenom;
        }
        const endpoint = `osmosis/gamm/v2/pools/${params.poolId}/prices`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
