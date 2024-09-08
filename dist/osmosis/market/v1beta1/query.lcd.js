"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.swap = this.swap.bind(this);
        this.params = this.params.bind(this);
        this.exchangeRequirements = this.exchangeRequirements.bind(this);
    }
    /* Swap returns simulated swap amount. */
    async swap(params) {
        const options = {
            params: {},
        };
        if (typeof params?.offerCoin !== 'undefined') {
            options.params.offer_coin = params.offerCoin;
        }
        if (typeof params?.askDenom !== 'undefined') {
            options.params.ask_denom = params.askDenom;
        }
        const endpoint = `osmosis/market/v1beta1/swap`;
        return await this.req.get(endpoint, options);
    }
    /* Params queries all parameters. */
    async params(_params = {}) {
        const endpoint = `osmosis/market/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* ExchangeRequirements */
    async exchangeRequirements(_params = {}) {
        const endpoint = `osmosis/market/v1beta1/exchange_requirements`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
