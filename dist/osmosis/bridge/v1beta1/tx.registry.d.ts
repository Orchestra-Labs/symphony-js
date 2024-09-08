import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgInboundTransfer, MsgOutboundTransfer, MsgUpdateParams, MsgChangeAssetStatus } from './tx';
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        inboundTransfer(value: MsgInboundTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        outboundTransfer(value: MsgOutboundTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeAssetStatus(value: MsgChangeAssetStatus): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        inboundTransfer(value: MsgInboundTransfer): {
            typeUrl: string;
            value: MsgInboundTransfer;
        };
        outboundTransfer(value: MsgOutboundTransfer): {
            typeUrl: string;
            value: MsgOutboundTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        changeAssetStatus(value: MsgChangeAssetStatus): {
            typeUrl: string;
            value: MsgChangeAssetStatus;
        };
    };
    fromPartial: {
        inboundTransfer(value: MsgInboundTransfer): {
            typeUrl: string;
            value: MsgInboundTransfer;
        };
        outboundTransfer(value: MsgOutboundTransfer): {
            typeUrl: string;
            value: MsgOutboundTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        changeAssetStatus(value: MsgChangeAssetStatus): {
            typeUrl: string;
            value: MsgChangeAssetStatus;
        };
    };
};
