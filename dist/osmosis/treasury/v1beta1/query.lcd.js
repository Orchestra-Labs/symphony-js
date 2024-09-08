"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.taxRate = this.taxRate.bind(this);
        this.params = this.params.bind(this);
    }
    /* TaxRate return the current tax rate */
    async taxRate(_params = {}) {
        const endpoint = `osmosis/treasury/v1beta1/tax_rate`;
        return await this.req.get(endpoint);
    }
    /* Params queries all parameters. */
    async params(_params = {}) {
        const endpoint = `osmosis/treasury/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
