import { BinaryReader } from '../../binary';
import { MsgEmitIBCAck, MsgEmitIBCAckResponse } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.emitIBCAck = this.emitIBCAck.bind(this);
    }
    emitIBCAck(request) {
        const data = MsgEmitIBCAck.encode(request).finish();
        const promise = this.rpc.request('osmosis.ibchooks.Msg', 'EmitIBCAck', data);
        return promise.then(data => MsgEmitIBCAckResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
