//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the oracle module. */
export interface Params {
  reserveAllowableOffset: string;
  maxFeeMultiplier: string;
  windowShort: bigint;
  windowLong: bigint;
  windowProbation: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.treasury.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsAmino {
  reserve_allowable_offset?: string;
  max_fee_multiplier?: string;
  window_short?: string;
  window_long?: string;
  window_probation?: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/treasury/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the oracle module. */
export interface ParamsSDKType {
  reserve_allowable_offset: string;
  max_fee_multiplier: string;
  window_short: bigint;
  window_long: bigint;
  window_probation: bigint;
}
function createBaseParams(): Params {
  return {
    reserveAllowableOffset: "",
    maxFeeMultiplier: "",
    windowShort: BigInt(0),
    windowLong: BigInt(0),
    windowProbation: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/osmosis.treasury.v1beta1.Params",
  aminoType: "osmosis/treasury/params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reserveAllowableOffset === "string" && typeof o.maxFeeMultiplier === "string" && typeof o.windowShort === "bigint" && typeof o.windowLong === "bigint" && typeof o.windowProbation === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reserve_allowable_offset === "string" && typeof o.max_fee_multiplier === "string" && typeof o.window_short === "bigint" && typeof o.window_long === "bigint" && typeof o.window_probation === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reserve_allowable_offset === "string" && typeof o.max_fee_multiplier === "string" && typeof o.window_short === "bigint" && typeof o.window_long === "bigint" && typeof o.window_probation === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reserveAllowableOffset !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.reserveAllowableOffset, 18).atomics);
    }
    if (message.maxFeeMultiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxFeeMultiplier, 18).atomics);
    }
    if (message.windowShort !== BigInt(0)) {
      writer.uint32(24).uint64(message.windowShort);
    }
    if (message.windowLong !== BigInt(0)) {
      writer.uint32(32).uint64(message.windowLong);
    }
    if (message.windowProbation !== BigInt(0)) {
      writer.uint32(40).uint64(message.windowProbation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAllowableOffset = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.windowShort = reader.uint64();
          break;
        case 4:
          message.windowLong = reader.uint64();
          break;
        case 5:
          message.windowProbation = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.reserveAllowableOffset = object.reserveAllowableOffset ?? "";
    message.maxFeeMultiplier = object.maxFeeMultiplier ?? "";
    message.windowShort = object.windowShort !== undefined && object.windowShort !== null ? BigInt(object.windowShort.toString()) : BigInt(0);
    message.windowLong = object.windowLong !== undefined && object.windowLong !== null ? BigInt(object.windowLong.toString()) : BigInt(0);
    message.windowProbation = object.windowProbation !== undefined && object.windowProbation !== null ? BigInt(object.windowProbation.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.reserve_allowable_offset !== undefined && object.reserve_allowable_offset !== null) {
      message.reserveAllowableOffset = object.reserve_allowable_offset;
    }
    if (object.max_fee_multiplier !== undefined && object.max_fee_multiplier !== null) {
      message.maxFeeMultiplier = object.max_fee_multiplier;
    }
    if (object.window_short !== undefined && object.window_short !== null) {
      message.windowShort = BigInt(object.window_short);
    }
    if (object.window_long !== undefined && object.window_long !== null) {
      message.windowLong = BigInt(object.window_long);
    }
    if (object.window_probation !== undefined && object.window_probation !== null) {
      message.windowProbation = BigInt(object.window_probation);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.reserve_allowable_offset = message.reserveAllowableOffset === "" ? undefined : message.reserveAllowableOffset;
    obj.max_fee_multiplier = message.maxFeeMultiplier === "" ? undefined : message.maxFeeMultiplier;
    obj.window_short = message.windowShort !== BigInt(0) ? message.windowShort.toString() : undefined;
    obj.window_long = message.windowLong !== BigInt(0) ? message.windowLong.toString() : undefined;
    obj.window_probation = message.windowProbation !== BigInt(0) ? message.windowProbation.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/treasury/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.treasury.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);