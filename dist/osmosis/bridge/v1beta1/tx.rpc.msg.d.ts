import { Rpc } from '../../../helpers';
import { MsgInboundTransfer, MsgInboundTransferResponse, MsgOutboundTransfer, MsgOutboundTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgChangeAssetStatus, MsgChangeAssetStatusResponse } from './tx';
/** Msg defines the bridge module's gRPC message service. */
export interface Msg {
    /** InboundTransfer is used for inbound transfers (<other_chain> -> OSMO). */
    inboundTransfer(request: MsgInboundTransfer): Promise<MsgInboundTransferResponse>;
    /** OutboundTransfer is used for outbound transfers (OSMO -> <other_chain>). */
    outboundTransfer(request: MsgOutboundTransfer): Promise<MsgOutboundTransferResponse>;
    /** UpdateParams is used for updating module params. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** ChangeAssetStatus will change the provided asset's status. */
    changeAssetStatus(request: MsgChangeAssetStatus): Promise<MsgChangeAssetStatusResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    inboundTransfer(request: MsgInboundTransfer): Promise<MsgInboundTransferResponse>;
    outboundTransfer(request: MsgOutboundTransfer): Promise<MsgOutboundTransferResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    changeAssetStatus(request: MsgChangeAssetStatus): Promise<MsgChangeAssetStatusResponse>;
}
export declare const createClientImpl: (rpc: Rpc) => MsgClientImpl;
