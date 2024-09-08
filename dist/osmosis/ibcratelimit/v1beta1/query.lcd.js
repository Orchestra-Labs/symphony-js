"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
    }
    /* Params defines a gRPC query method that returns the ibc-rate-limit module's
     parameters. */
    async params(_params = {}) {
        const endpoint = `osmosis/ibc-rate-limit/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
