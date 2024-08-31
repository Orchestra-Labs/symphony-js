//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwap, MsgSwapSend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.market.v1beta1.MsgSwap", MsgSwap], ["/osmosis.market.v1beta1.MsgSwapSend", MsgSwapSend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/osmosis.market.v1beta1.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },
    swapSend(value: MsgSwapSend) {
      return {
        typeUrl: "/osmosis.market.v1beta1.MsgSwapSend",
        value: MsgSwapSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/osmosis.market.v1beta1.MsgSwap",
        value
      };
    },
    swapSend(value: MsgSwapSend) {
      return {
        typeUrl: "/osmosis.market.v1beta1.MsgSwapSend",
        value
      };
    }
  },
  fromPartial: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/osmosis.market.v1beta1.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },
    swapSend(value: MsgSwapSend) {
      return {
        typeUrl: "/osmosis.market.v1beta1.MsgSwapSend",
        value: MsgSwapSend.fromPartial(value)
      };
    }
  }
};