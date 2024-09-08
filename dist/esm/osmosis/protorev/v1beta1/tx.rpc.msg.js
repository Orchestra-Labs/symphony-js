import { BinaryReader } from '../../../binary';
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxResponse, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockResponse, MsgSetInfoByPoolType, MsgSetInfoByPoolTypeResponse, MsgSetBaseDenoms, MsgSetBaseDenomsResponse, } from './tx';
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setHotRoutes = this.setHotRoutes.bind(this);
        this.setDeveloperAccount = this.setDeveloperAccount.bind(this);
        this.setMaxPoolPointsPerTx = this.setMaxPoolPointsPerTx.bind(this);
        this.setMaxPoolPointsPerBlock = this.setMaxPoolPointsPerBlock.bind(this);
        this.setInfoByPoolType = this.setInfoByPoolType.bind(this);
        this.setBaseDenoms = this.setBaseDenoms.bind(this);
    }
    setHotRoutes(request) {
        const data = MsgSetHotRoutes.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetHotRoutes', data);
        return promise.then(data => MsgSetHotRoutesResponse.decode(new BinaryReader(data)));
    }
    setDeveloperAccount(request) {
        const data = MsgSetDeveloperAccount.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetDeveloperAccount', data);
        return promise.then(data => MsgSetDeveloperAccountResponse.decode(new BinaryReader(data)));
    }
    setMaxPoolPointsPerTx(request) {
        const data = MsgSetMaxPoolPointsPerTx.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetMaxPoolPointsPerTx', data);
        return promise.then(data => MsgSetMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
    }
    setMaxPoolPointsPerBlock(request) {
        const data = MsgSetMaxPoolPointsPerBlock.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetMaxPoolPointsPerBlock', data);
        return promise.then(data => MsgSetMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)));
    }
    setInfoByPoolType(request) {
        const data = MsgSetInfoByPoolType.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetInfoByPoolType', data);
        return promise.then(data => MsgSetInfoByPoolTypeResponse.decode(new BinaryReader(data)));
    }
    setBaseDenoms(request) {
        const data = MsgSetBaseDenoms.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetBaseDenoms', data);
        return promise.then(data => MsgSetBaseDenomsResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
