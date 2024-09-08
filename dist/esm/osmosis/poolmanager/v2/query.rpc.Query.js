import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { SpotPriceRequest, SpotPriceResponse } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.spotPriceV2 = this.spotPriceV2.bind(this);
    }
    spotPriceV2(request) {
        const data = SpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v2.Query', 'SpotPriceV2', data);
        return promise.then(data => SpotPriceResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        spotPriceV2(request) {
            return queryService.spotPriceV2(request);
        },
    };
};
