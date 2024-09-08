"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createPosition = this.createPosition.bind(this);
        this.withdrawPosition = this.withdrawPosition.bind(this);
        this.addToPosition = this.addToPosition.bind(this);
        this.collectSpreadRewards = this.collectSpreadRewards.bind(this);
        this.collectIncentives = this.collectIncentives.bind(this);
        this.transferPositions = this.transferPositions.bind(this);
    }
    createPosition(request) {
        const data = tx_1.MsgCreatePosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'CreatePosition', data);
        return promise.then(data => tx_1.MsgCreatePositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawPosition(request) {
        const data = tx_1.MsgWithdrawPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'WithdrawPosition', data);
        return promise.then(data => tx_1.MsgWithdrawPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    addToPosition(request) {
        const data = tx_1.MsgAddToPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'AddToPosition', data);
        return promise.then(data => tx_1.MsgAddToPositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    collectSpreadRewards(request) {
        const data = tx_1.MsgCollectSpreadRewards.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'CollectSpreadRewards', data);
        return promise.then(data => tx_1.MsgCollectSpreadRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    collectIncentives(request) {
        const data = tx_1.MsgCollectIncentives.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'CollectIncentives', data);
        return promise.then(data => tx_1.MsgCollectIncentivesResponse.decode(new binary_1.BinaryReader(data)));
    }
    transferPositions(request) {
        const data = tx_1.MsgTransferPositions.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'TransferPositions', data);
        return promise.then(data => tx_1.MsgTransferPositionsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
