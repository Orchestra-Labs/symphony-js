import { BinaryReader } from '../../../../../binary';
import { MsgCreateConcentratedPool, MsgCreateConcentratedPoolResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createConcentratedPool = this.createConcentratedPool.bind(this);
    }
    createConcentratedPool(request) {
        const data = MsgCreateConcentratedPool.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.Msg', 'CreateConcentratedPool', data);
        return promise.then(data => MsgCreateConcentratedPoolResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
