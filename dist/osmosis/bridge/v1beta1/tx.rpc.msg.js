"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.inboundTransfer = this.inboundTransfer.bind(this);
        this.outboundTransfer = this.outboundTransfer.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.changeAssetStatus = this.changeAssetStatus.bind(this);
    }
    inboundTransfer(request) {
        const data = tx_1.MsgInboundTransfer.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'InboundTransfer', data);
        return promise.then(data => tx_1.MsgInboundTransferResponse.decode(new binary_1.BinaryReader(data)));
    }
    outboundTransfer(request) {
        const data = tx_1.MsgOutboundTransfer.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'OutboundTransfer', data);
        return promise.then(data => tx_1.MsgOutboundTransferResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'UpdateParams', data);
        return promise.then(data => tx_1.MsgUpdateParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    changeAssetStatus(request) {
        const data = tx_1.MsgChangeAssetStatus.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'ChangeAssetStatus', data);
        return promise.then(data => tx_1.MsgChangeAssetStatusResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
