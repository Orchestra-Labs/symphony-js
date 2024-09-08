import { BinaryReader } from '../../binary';
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse, MsgCreateGroup, MsgCreateGroupResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createGauge = this.createGauge.bind(this);
        this.addToGauge = this.addToGauge.bind(this);
        this.createGroup = this.createGroup.bind(this);
    }
    createGauge(request) {
        const data = MsgCreateGauge.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Msg', 'CreateGauge', data);
        return promise.then(data => MsgCreateGaugeResponse.decode(new BinaryReader(data)));
    }
    addToGauge(request) {
        const data = MsgAddToGauge.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Msg', 'AddToGauge', data);
        return promise.then(data => MsgAddToGaugeResponse.decode(new BinaryReader(data)));
    }
    createGroup(request) {
        const data = MsgCreateGroup.encode(request).finish();
        const promise = this.rpc.request('osmosis.incentives.Msg', 'CreateGroup', data);
        return promise.then(data => MsgCreateGroupResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
