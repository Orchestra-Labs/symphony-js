import { BinaryReader } from '../../../binary';
import { MsgSwap, MsgSwapResponse, MsgSwapSend, MsgSwapSendResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.swap = this.swap.bind(this);
        this.swapSend = this.swapSend.bind(this);
    }
    swap(request) {
        const data = MsgSwap.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Msg', 'Swap', data);
        return promise.then(data => MsgSwapResponse.decode(new BinaryReader(data)));
    }
    swapSend(request) {
        const data = MsgSwapSend.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Msg', 'SwapSend', data);
        return promise.then(data => MsgSwapSendResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
