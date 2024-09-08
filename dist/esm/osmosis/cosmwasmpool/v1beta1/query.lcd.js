//@ts-nocheck
import { setPaginationParams } from '../../../helpers';
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.pools = this.pools.bind(this);
        this.params = this.params.bind(this);
        this.contractInfoByPoolId = this.contractInfoByPoolId.bind(this);
    }
    /* Pools returns all cosmwasm pools */
    async pools(params = {
        pagination: undefined,
    }) {
        const options = {
            params: {},
        };
        if (typeof params?.pagination !== 'undefined') {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/cosmwasmpool/v1beta1/pools`;
        return await this.req.get(endpoint, options);
    }
    /* Params returns the parameters of the x/cosmwasmpool module. */
    async params(_params = {}) {
        const endpoint = `osmosis/cosmwasmpool/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* ContractInfoByPoolId */
    async contractInfoByPoolId(params) {
        const options = {
            params: {},
        };
        if (typeof params?.poolId !== 'undefined') {
            options.params.pool_id = params.poolId;
        }
        const endpoint = `osmosis/cosmwasmpool/v1beta1/contract_info`;
        return await this.req.get(endpoint, options);
    }
}
