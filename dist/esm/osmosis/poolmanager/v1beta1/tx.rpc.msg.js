import { BinaryReader } from '../../../binary';
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountInResponse, MsgSplitRouteSwapExactAmountOut, MsgSplitRouteSwapExactAmountOutResponse, MsgSetDenomPairTakerFee, MsgSetDenomPairTakerFeeResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
        this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
        this.splitRouteSwapExactAmountIn =
            this.splitRouteSwapExactAmountIn.bind(this);
        this.splitRouteSwapExactAmountOut =
            this.splitRouteSwapExactAmountOut.bind(this);
        this.setDenomPairTakerFee = this.setDenomPairTakerFee.bind(this);
    }
    swapExactAmountIn(request) {
        const data = MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SwapExactAmountIn', data);
        return promise.then(data => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    swapExactAmountOut(request) {
        const data = MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SwapExactAmountOut', data);
        return promise.then(data => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    splitRouteSwapExactAmountIn(request) {
        const data = MsgSplitRouteSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SplitRouteSwapExactAmountIn', data);
        return promise.then(data => MsgSplitRouteSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    splitRouteSwapExactAmountOut(request) {
        const data = MsgSplitRouteSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SplitRouteSwapExactAmountOut', data);
        return promise.then(data => MsgSplitRouteSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    setDenomPairTakerFee(request) {
        const data = MsgSetDenomPairTakerFee.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SetDenomPairTakerFee', data);
        return promise.then(data => MsgSetDenomPairTakerFeeResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
