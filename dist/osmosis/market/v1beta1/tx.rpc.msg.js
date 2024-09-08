"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.swap = this.swap.bind(this);
        this.swapSend = this.swapSend.bind(this);
    }
    swap(request) {
        const data = tx_1.MsgSwap.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Msg', 'Swap', data);
        return promise.then(data => tx_1.MsgSwapResponse.decode(new binary_1.BinaryReader(data)));
    }
    swapSend(request) {
        const data = tx_1.MsgSwapSend.encode(request).finish();
        const promise = this.rpc.request('osmosis.market.v1beta1.Msg', 'SwapSend', data);
        return promise.then(data => tx_1.MsgSwapSendResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
