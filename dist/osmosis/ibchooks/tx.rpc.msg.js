"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.emitIBCAck = this.emitIBCAck.bind(this);
    }
    emitIBCAck(request) {
        const data = tx_1.MsgEmitIBCAck.encode(request).finish();
        const promise = this.rpc.request('osmosis.ibchooks.Msg', 'EmitIBCAck', data);
        return promise.then(data => tx_1.MsgEmitIBCAckResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
