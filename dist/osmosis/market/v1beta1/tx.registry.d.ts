import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgSwap, MsgSwapSend } from './tx';
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        swap(value: MsgSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapSend(value: MsgSwapSend): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        swapSend(value: MsgSwapSend): {
            typeUrl: string;
            value: MsgSwapSend;
        };
    };
    fromPartial: {
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        swapSend(value: MsgSwapSend): {
            typeUrl: string;
            value: MsgSwapSend;
        };
    };
};
