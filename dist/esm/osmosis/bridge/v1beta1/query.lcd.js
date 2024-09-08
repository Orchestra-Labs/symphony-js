export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
    }
    /* Params returns x/bridge module params. */
    async params(_params = {}) {
        const endpoint = `osmosis/bridge/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
