import { BinaryReader } from '../../../binary';
import { MsgInboundTransfer, MsgInboundTransferResponse, MsgOutboundTransfer, MsgOutboundTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgChangeAssetStatus, MsgChangeAssetStatusResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.inboundTransfer = this.inboundTransfer.bind(this);
        this.outboundTransfer = this.outboundTransfer.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.changeAssetStatus = this.changeAssetStatus.bind(this);
    }
    inboundTransfer(request) {
        const data = MsgInboundTransfer.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'InboundTransfer', data);
        return promise.then(data => MsgInboundTransferResponse.decode(new BinaryReader(data)));
    }
    outboundTransfer(request) {
        const data = MsgOutboundTransfer.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'OutboundTransfer', data);
        return promise.then(data => MsgOutboundTransferResponse.decode(new BinaryReader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'UpdateParams', data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
    }
    changeAssetStatus(request) {
        const data = MsgChangeAssetStatus.encode(request).finish();
        const promise = this.rpc.request('osmosis.bridge.v1beta1.Msg', 'ChangeAssetStatus', data);
        return promise.then(data => MsgChangeAssetStatusResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
