"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgSetHotRoutes.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetHotRoutes', data);
        return promise.then(data => tx_1.MsgSetHotRoutesResponse.decode(new binary_1.BinaryReader(data)));
    }
    setDeveloperAccount(request) {
        const data = tx_1.MsgSetDeveloperAccount.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetDeveloperAccount', data);
        return promise.then(data => tx_1.MsgSetDeveloperAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    setMaxPoolPointsPerTx(request) {
        const data = tx_1.MsgSetMaxPoolPointsPerTx.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetMaxPoolPointsPerTx', data);
        return promise.then(data => tx_1.MsgSetMaxPoolPointsPerTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    setMaxPoolPointsPerBlock(request) {
        const data = tx_1.MsgSetMaxPoolPointsPerBlock.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetMaxPoolPointsPerBlock', data);
        return promise.then(data => tx_1.MsgSetMaxPoolPointsPerBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    setInfoByPoolType(request) {
        const data = tx_1.MsgSetInfoByPoolType.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetInfoByPoolType', data);
        return promise.then(data => tx_1.MsgSetInfoByPoolTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    setBaseDenoms(request) {
        const data = tx_1.MsgSetBaseDenoms.encode(request).finish();
        const promise = this.rpc.request('osmosis.protorev.v1beta1.Msg', 'SetBaseDenoms', data);
        return promise.then(data => tx_1.MsgSetBaseDenomsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
