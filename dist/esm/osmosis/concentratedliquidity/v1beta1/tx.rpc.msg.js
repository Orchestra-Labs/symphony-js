import { BinaryReader } from '../../../binary';
import { MsgCreatePosition, MsgCreatePositionResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse, MsgAddToPosition, MsgAddToPositionResponse, MsgCollectSpreadRewards, MsgCollectSpreadRewardsResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgTransferPositions, MsgTransferPositionsResponse, } from './tx';
export class MsgClientImpl {
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
        const data = MsgCreatePosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'CreatePosition', data);
        return promise.then(data => MsgCreatePositionResponse.decode(new BinaryReader(data)));
    }
    withdrawPosition(request) {
        const data = MsgWithdrawPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'WithdrawPosition', data);
        return promise.then(data => MsgWithdrawPositionResponse.decode(new BinaryReader(data)));
    }
    addToPosition(request) {
        const data = MsgAddToPosition.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'AddToPosition', data);
        return promise.then(data => MsgAddToPositionResponse.decode(new BinaryReader(data)));
    }
    collectSpreadRewards(request) {
        const data = MsgCollectSpreadRewards.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'CollectSpreadRewards', data);
        return promise.then(data => MsgCollectSpreadRewardsResponse.decode(new BinaryReader(data)));
    }
    collectIncentives(request) {
        const data = MsgCollectIncentives.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'CollectIncentives', data);
        return promise.then(data => MsgCollectIncentivesResponse.decode(new BinaryReader(data)));
    }
    transferPositions(request) {
        const data = MsgTransferPositions.encode(request).finish();
        const promise = this.rpc.request('osmosis.concentratedliquidity.v1beta1.Msg', 'TransferPositions', data);
        return promise.then(data => MsgTransferPositionsResponse.decode(new BinaryReader(data)));
    }
}
export const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
