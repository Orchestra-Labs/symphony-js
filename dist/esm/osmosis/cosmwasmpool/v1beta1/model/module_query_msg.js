//@ts-nocheck
import { Coin, } from '../../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseCalcOutAmtGivenIn() {
    return {
        tokenIn: Coin.fromPartial({}),
        tokenOutDenom: '',
        swapFee: '',
    };
}
export const CalcOutAmtGivenIn = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn',
    aminoType: 'osmosis/cosmwasmpool/calc-out-amt-given-in',
    is(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenIn.typeUrl ||
                (Coin.is(o.tokenIn) &&
                    typeof o.tokenOutDenom === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenIn.typeUrl ||
                (Coin.isSDK(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenIn.typeUrl ||
                (Coin.isAmino(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        if (message.swapFee !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenIn = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
                case 3:
                    message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalcOutAmtGivenIn();
        message.tokenIn =
            object.tokenIn !== undefined && object.tokenIn !== null
                ? Coin.fromPartial(object.tokenIn)
                : undefined;
        message.tokenOutDenom = object.tokenOutDenom ?? '';
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcOutAmtGivenIn();
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = Coin.fromAmino(object.token_in);
        }
        if (object.token_out_denom !== undefined &&
            object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return CalcOutAmtGivenIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-out-amt-given-in',
            value: CalcOutAmtGivenIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CalcOutAmtGivenIn.decode(message.value);
    },
    toProto(message) {
        return CalcOutAmtGivenIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn',
            value: CalcOutAmtGivenIn.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CalcOutAmtGivenIn.typeUrl, CalcOutAmtGivenIn);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcOutAmtGivenIn.aminoType, CalcOutAmtGivenIn.typeUrl);
function createBaseCalcOutAmtGivenInRequest() {
    return {
        calcOutAmtGivenIn: CalcOutAmtGivenIn.fromPartial({}),
    };
}
export const CalcOutAmtGivenInRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest',
    aminoType: 'osmosis/cosmwasmpool/calc-out-amt-given-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenInRequest.typeUrl ||
                CalcOutAmtGivenIn.is(o.calcOutAmtGivenIn)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenInRequest.typeUrl ||
                CalcOutAmtGivenIn.isSDK(o.calc_out_amt_given_in)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenInRequest.typeUrl ||
                CalcOutAmtGivenIn.isAmino(o.calc_out_amt_given_in)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.calcOutAmtGivenIn !== undefined) {
            CalcOutAmtGivenIn.encode(message.calcOutAmtGivenIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calcOutAmtGivenIn = CalcOutAmtGivenIn.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalcOutAmtGivenInRequest();
        message.calcOutAmtGivenIn =
            object.calcOutAmtGivenIn !== undefined &&
                object.calcOutAmtGivenIn !== null
                ? CalcOutAmtGivenIn.fromPartial(object.calcOutAmtGivenIn)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcOutAmtGivenInRequest();
        if (object.calc_out_amt_given_in !== undefined &&
            object.calc_out_amt_given_in !== null) {
            message.calcOutAmtGivenIn = CalcOutAmtGivenIn.fromAmino(object.calc_out_amt_given_in);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.calc_out_amt_given_in = message.calcOutAmtGivenIn
            ? CalcOutAmtGivenIn.toAmino(message.calcOutAmtGivenIn)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CalcOutAmtGivenInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-out-amt-given-in-request',
            value: CalcOutAmtGivenInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CalcOutAmtGivenInRequest.decode(message.value);
    },
    toProto(message) {
        return CalcOutAmtGivenInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest',
            value: CalcOutAmtGivenInRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CalcOutAmtGivenInRequest.typeUrl, CalcOutAmtGivenInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcOutAmtGivenInRequest.aminoType, CalcOutAmtGivenInRequest.typeUrl);
function createBaseCalcOutAmtGivenInResponse() {
    return {
        tokenOut: Coin.fromPartial({}),
    };
}
export const CalcOutAmtGivenInResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse',
    aminoType: 'osmosis/cosmwasmpool/calc-out-amt-given-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenInResponse.typeUrl || Coin.is(o.tokenOut)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenInResponse.typeUrl ||
                Coin.isSDK(o.token_out)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CalcOutAmtGivenInResponse.typeUrl ||
                Coin.isAmino(o.token_out)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalcOutAmtGivenInResponse();
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? Coin.fromPartial(object.tokenOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcOutAmtGivenInResponse();
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out = message.tokenOut
            ? Coin.toAmino(message.tokenOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CalcOutAmtGivenInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-out-amt-given-in-response',
            value: CalcOutAmtGivenInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CalcOutAmtGivenInResponse.decode(message.value);
    },
    toProto(message) {
        return CalcOutAmtGivenInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse',
            value: CalcOutAmtGivenInResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CalcOutAmtGivenInResponse.typeUrl, CalcOutAmtGivenInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcOutAmtGivenInResponse.aminoType, CalcOutAmtGivenInResponse.typeUrl);
function createBaseCalcInAmtGivenOut() {
    return {
        tokenOut: Coin.fromPartial({}),
        tokenInDenom: '',
        swapFee: '',
    };
}
export const CalcInAmtGivenOut = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut',
    aminoType: 'osmosis/cosmwasmpool/calc-in-amt-given-out',
    is(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOut.typeUrl ||
                (Coin.is(o.tokenOut) &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOut.typeUrl ||
                (Coin.isSDK(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOut.typeUrl ||
                (Coin.isAmino(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.swapFee !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                case 3:
                    message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalcInAmtGivenOut();
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? Coin.fromPartial(object.tokenOut)
                : undefined;
        message.tokenInDenom = object.tokenInDenom ?? '';
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcInAmtGivenOut();
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = Coin.fromAmino(object.token_out);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out = message.tokenOut
            ? Coin.toAmino(message.tokenOut)
            : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return CalcInAmtGivenOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-in-amt-given-out',
            value: CalcInAmtGivenOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CalcInAmtGivenOut.decode(message.value);
    },
    toProto(message) {
        return CalcInAmtGivenOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut',
            value: CalcInAmtGivenOut.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CalcInAmtGivenOut.typeUrl, CalcInAmtGivenOut);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcInAmtGivenOut.aminoType, CalcInAmtGivenOut.typeUrl);
function createBaseCalcInAmtGivenOutRequest() {
    return {
        calcInAmtGivenOut: CalcInAmtGivenOut.fromPartial({}),
    };
}
export const CalcInAmtGivenOutRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest',
    aminoType: 'osmosis/cosmwasmpool/calc-in-amt-given-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOutRequest.typeUrl ||
                CalcInAmtGivenOut.is(o.calcInAmtGivenOut)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOutRequest.typeUrl ||
                CalcInAmtGivenOut.isSDK(o.calc_in_amt_given_out)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOutRequest.typeUrl ||
                CalcInAmtGivenOut.isAmino(o.calc_in_amt_given_out)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.calcInAmtGivenOut !== undefined) {
            CalcInAmtGivenOut.encode(message.calcInAmtGivenOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calcInAmtGivenOut = CalcInAmtGivenOut.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalcInAmtGivenOutRequest();
        message.calcInAmtGivenOut =
            object.calcInAmtGivenOut !== undefined &&
                object.calcInAmtGivenOut !== null
                ? CalcInAmtGivenOut.fromPartial(object.calcInAmtGivenOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcInAmtGivenOutRequest();
        if (object.calc_in_amt_given_out !== undefined &&
            object.calc_in_amt_given_out !== null) {
            message.calcInAmtGivenOut = CalcInAmtGivenOut.fromAmino(object.calc_in_amt_given_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.calc_in_amt_given_out = message.calcInAmtGivenOut
            ? CalcInAmtGivenOut.toAmino(message.calcInAmtGivenOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CalcInAmtGivenOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-in-amt-given-out-request',
            value: CalcInAmtGivenOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CalcInAmtGivenOutRequest.decode(message.value);
    },
    toProto(message) {
        return CalcInAmtGivenOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest',
            value: CalcInAmtGivenOutRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CalcInAmtGivenOutRequest.typeUrl, CalcInAmtGivenOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcInAmtGivenOutRequest.aminoType, CalcInAmtGivenOutRequest.typeUrl);
function createBaseCalcInAmtGivenOutResponse() {
    return {
        tokenIn: Coin.fromPartial({}),
    };
}
export const CalcInAmtGivenOutResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse',
    aminoType: 'osmosis/cosmwasmpool/calc-in-amt-given-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOutResponse.typeUrl || Coin.is(o.tokenIn)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOutResponse.typeUrl ||
                Coin.isSDK(o.token_in)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CalcInAmtGivenOutResponse.typeUrl ||
                Coin.isAmino(o.token_in)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenIn = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCalcInAmtGivenOutResponse();
        message.tokenIn =
            object.tokenIn !== undefined && object.tokenIn !== null
                ? Coin.fromPartial(object.tokenIn)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcInAmtGivenOutResponse();
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = Coin.fromAmino(object.token_in);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CalcInAmtGivenOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-in-amt-given-out-response',
            value: CalcInAmtGivenOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CalcInAmtGivenOutResponse.decode(message.value);
    },
    toProto(message) {
        return CalcInAmtGivenOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse',
            value: CalcInAmtGivenOutResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CalcInAmtGivenOutResponse.typeUrl, CalcInAmtGivenOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CalcInAmtGivenOutResponse.aminoType, CalcInAmtGivenOutResponse.typeUrl);
