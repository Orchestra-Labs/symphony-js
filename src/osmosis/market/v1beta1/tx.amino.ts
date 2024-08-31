//@ts-nocheck
import { MsgSwap, MsgSwapSend } from "./tx";
export const AminoConverter = {
  "/osmosis.market.v1beta1.MsgSwap": {
    aminoType: "osmosis/market/swap",
    toAmino: MsgSwap.toAmino,
    fromAmino: MsgSwap.fromAmino
  },
  "/osmosis.market.v1beta1.MsgSwapSend": {
    aminoType: "osmosis/market/swap-send",
    toAmino: MsgSwapSend.toAmino,
    fromAmino: MsgSwapSend.fromAmino
  }
};