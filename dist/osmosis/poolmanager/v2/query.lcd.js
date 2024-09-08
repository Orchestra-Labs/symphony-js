"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.spotPriceV2 = this.spotPriceV2.bind(this);
    }
    /* SpotPriceV2 defines a gRPC query handler that returns the spot price given
     a base denomination and a quote denomination.
     The returned spot price has 36 decimal places. However, some of
     modules perform sig fig rounding so most of the rightmost decimals can be
     zeroes. */
    async spotPriceV2(params) {
        const options = {
            params: {},
        };
        if (typeof params?.baseAssetDenom !== 'undefined') {
            options.params.base_asset_denom = params.baseAssetDenom;
        }
        if (typeof params?.quoteAssetDenom !== 'undefined') {
            options.params.quote_asset_denom = params.quoteAssetDenom;
        }
        const endpoint = `osmosis/poolmanager/v2/pools/${params.poolId}/prices`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
