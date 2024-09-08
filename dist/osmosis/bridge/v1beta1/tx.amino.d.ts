import { MsgInboundTransfer, MsgOutboundTransfer, MsgUpdateParams, MsgChangeAssetStatus } from './tx';
export declare const AminoConverter: {
    '/osmosis.bridge.v1beta1.MsgInboundTransfer': {
        aminoType: string;
        toAmino: (message: MsgInboundTransfer) => import("./tx").MsgInboundTransferAmino;
        fromAmino: (object: import("./tx").MsgInboundTransferAmino) => MsgInboundTransfer;
    };
    '/osmosis.bridge.v1beta1.MsgOutboundTransfer': {
        aminoType: string;
        toAmino: (message: MsgOutboundTransfer) => import("./tx").MsgOutboundTransferAmino;
        fromAmino: (object: import("./tx").MsgOutboundTransferAmino) => MsgOutboundTransfer;
    };
    '/osmosis.bridge.v1beta1.MsgUpdateParams': {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    '/osmosis.bridge.v1beta1.MsgChangeAssetStatus': {
        aminoType: string;
        toAmino: (message: MsgChangeAssetStatus) => import("./tx").MsgChangeAssetStatusAmino;
        fromAmino: (object: import("./tx").MsgChangeAssetStatusAmino) => MsgChangeAssetStatus;
    };
};
