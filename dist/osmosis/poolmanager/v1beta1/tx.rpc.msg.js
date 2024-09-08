"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SwapExactAmountIn', data);
        return promise.then(data => tx_1.MsgSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    swapExactAmountOut(request) {
        const data = tx_1.MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SwapExactAmountOut', data);
        return promise.then(data => tx_1.MsgSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    splitRouteSwapExactAmountIn(request) {
        const data = tx_1.MsgSplitRouteSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SplitRouteSwapExactAmountIn', data);
        return promise.then(data => tx_1.MsgSplitRouteSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    splitRouteSwapExactAmountOut(request) {
        const data = tx_1.MsgSplitRouteSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SplitRouteSwapExactAmountOut', data);
        return promise.then(data => tx_1.MsgSplitRouteSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    setDenomPairTakerFee(request) {
        const data = tx_1.MsgSetDenomPairTakerFee.encode(request).finish();
        const promise = this.rpc.request('osmosis.poolmanager.v1beta1.Msg', 'SetDenomPairTakerFee', data);
        return promise.then(data => tx_1.MsgSetDenomPairTakerFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
