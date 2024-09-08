//@ts-nocheck
import { Coin, } from '../../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseSwapExactAmountIn() {
    return {
        sender: '',
        tokenIn: Coin.fromPartial({}),
        tokenOutDenom: '',
        tokenOutMinAmount: '',
        swapFee: '',
    };
}
export const SwapExactAmountIn = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-in',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.is(o.tokenIn) &&
                    typeof o.tokenOutDenom === 'string' &&
                    typeof o.tokenOutMinAmount === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isSDK(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isAmino(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.tokenOutMinAmount !== '') {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        if (message.swapFee !== '') {
            writer
                .uint32(42)
                .string(Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.tokenIn = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                case 5:
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
        const message = createBaseSwapExactAmountIn();
        message.sender = object.sender ?? '';
        message.tokenIn =
            object.tokenIn !== undefined && object.tokenIn !== null
                ? Coin.fromPartial(object.tokenIn)
                : undefined;
        message.tokenOutDenom = object.tokenOutDenom ?? '';
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? '';
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = Coin.fromAmino(object.token_in);
        }
        if (object.token_out_denom !== undefined &&
            object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        if (object.token_out_min_amount !== undefined &&
            object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        obj.token_out_min_amount =
            message.tokenOutMinAmount === '' ? undefined : message.tokenOutMinAmount;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-in',
            value: SwapExactAmountIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return SwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn',
            value: SwapExactAmountIn.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapExactAmountIn.typeUrl, SwapExactAmountIn);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapExactAmountIn.aminoType, SwapExactAmountIn.typeUrl);
function createBaseSwapExactAmountInSudoMsg() {
    return {
        swapExactAmountIn: SwapExactAmountIn.fromPartial({}),
    };
}
export const SwapExactAmountInSudoMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountInSudoMsg.typeUrl ||
                SwapExactAmountIn.is(o.swapExactAmountIn)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountInSudoMsg.typeUrl ||
                SwapExactAmountIn.isSDK(o.swap_exact_amount_in)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountInSudoMsg.typeUrl ||
                SwapExactAmountIn.isAmino(o.swap_exact_amount_in)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.swapExactAmountIn !== undefined) {
            SwapExactAmountIn.encode(message.swapExactAmountIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountInSudoMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapExactAmountIn = SwapExactAmountIn.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountInSudoMsg();
        message.swapExactAmountIn =
            object.swapExactAmountIn !== undefined &&
                object.swapExactAmountIn !== null
                ? SwapExactAmountIn.fromPartial(object.swapExactAmountIn)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountInSudoMsg();
        if (object.swap_exact_amount_in !== undefined &&
            object.swap_exact_amount_in !== null) {
            message.swapExactAmountIn = SwapExactAmountIn.fromAmino(object.swap_exact_amount_in);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_exact_amount_in = message.swapExactAmountIn
            ? SwapExactAmountIn.toAmino(message.swapExactAmountIn)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapExactAmountInSudoMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg',
            value: SwapExactAmountInSudoMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapExactAmountInSudoMsg.decode(message.value);
    },
    toProto(message) {
        return SwapExactAmountInSudoMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg',
            value: SwapExactAmountInSudoMsg.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapExactAmountInSudoMsg.typeUrl, SwapExactAmountInSudoMsg);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapExactAmountInSudoMsg.aminoType, SwapExactAmountInSudoMsg.typeUrl);
function createBaseSwapExactAmountInSudoMsgResponse() {
    return {
        tokenOutAmount: '',
    };
}
export const SwapExactAmountInSudoMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountInSudoMsgResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountInSudoMsgResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountInSudoMsgResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOutAmount !== '') {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountInSudoMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountInSudoMsgResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountInSudoMsgResponse();
        if (object.token_out_amount !== undefined &&
            object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount =
            message.tokenOutAmount === '' ? undefined : message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapExactAmountInSudoMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg-response',
            value: SwapExactAmountInSudoMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapExactAmountInSudoMsgResponse.decode(message.value);
    },
    toProto(message) {
        return SwapExactAmountInSudoMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse',
            value: SwapExactAmountInSudoMsgResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapExactAmountInSudoMsgResponse.typeUrl, SwapExactAmountInSudoMsgResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapExactAmountInSudoMsgResponse.aminoType, SwapExactAmountInSudoMsgResponse.typeUrl);
function createBaseSwapExactAmountOut() {
    return {
        sender: '',
        tokenOut: Coin.fromPartial({}),
        tokenInDenom: '',
        tokenInMaxAmount: '',
        swapFee: '',
    };
}
export const SwapExactAmountOut = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-out',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.is(o.tokenOut) &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.tokenInMaxAmount === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isSDK(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isAmino(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.tokenInMaxAmount !== '') {
            writer.uint32(34).string(message.tokenInMaxAmount);
        }
        if (message.swapFee !== '') {
            writer
                .uint32(42)
                .string(Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.tokenOut = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 5:
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
        const message = createBaseSwapExactAmountOut();
        message.sender = object.sender ?? '';
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? Coin.fromPartial(object.tokenOut)
                : undefined;
        message.tokenInDenom = object.tokenInDenom ?? '';
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? '';
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = Coin.fromAmino(object.token_out);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.token_in_max_amount !== undefined &&
            object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.token_out = message.tokenOut
            ? Coin.toAmino(message.tokenOut)
            : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.token_in_max_amount =
            message.tokenInMaxAmount === '' ? undefined : message.tokenInMaxAmount;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-out',
            value: SwapExactAmountOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return SwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut',
            value: SwapExactAmountOut.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapExactAmountOut.typeUrl, SwapExactAmountOut);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapExactAmountOut.aminoType, SwapExactAmountOut.typeUrl);
function createBaseSwapExactAmountOutSudoMsg() {
    return {
        swapExactAmountOut: SwapExactAmountOut.fromPartial({}),
    };
}
export const SwapExactAmountOutSudoMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOutSudoMsg.typeUrl ||
                SwapExactAmountOut.is(o.swapExactAmountOut)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOutSudoMsg.typeUrl ||
                SwapExactAmountOut.isSDK(o.swap_exact_amount_out)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOutSudoMsg.typeUrl ||
                SwapExactAmountOut.isAmino(o.swap_exact_amount_out)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.swapExactAmountOut !== undefined) {
            SwapExactAmountOut.encode(message.swapExactAmountOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOutSudoMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapExactAmountOut = SwapExactAmountOut.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountOutSudoMsg();
        message.swapExactAmountOut =
            object.swapExactAmountOut !== undefined &&
                object.swapExactAmountOut !== null
                ? SwapExactAmountOut.fromPartial(object.swapExactAmountOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountOutSudoMsg();
        if (object.swap_exact_amount_out !== undefined &&
            object.swap_exact_amount_out !== null) {
            message.swapExactAmountOut = SwapExactAmountOut.fromAmino(object.swap_exact_amount_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_exact_amount_out = message.swapExactAmountOut
            ? SwapExactAmountOut.toAmino(message.swapExactAmountOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapExactAmountOutSudoMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg',
            value: SwapExactAmountOutSudoMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapExactAmountOutSudoMsg.decode(message.value);
    },
    toProto(message) {
        return SwapExactAmountOutSudoMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg',
            value: SwapExactAmountOutSudoMsg.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapExactAmountOutSudoMsg.typeUrl, SwapExactAmountOutSudoMsg);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapExactAmountOutSudoMsg.aminoType, SwapExactAmountOutSudoMsg.typeUrl);
function createBaseSwapExactAmountOutSudoMsgResponse() {
    return {
        tokenInAmount: '',
    };
}
export const SwapExactAmountOutSudoMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOutSudoMsgResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOutSudoMsgResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapExactAmountOutSudoMsgResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenInAmount !== '') {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOutSudoMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapExactAmountOutSudoMsgResponse();
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountOutSudoMsgResponse();
        if (object.token_in_amount !== undefined &&
            object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount =
            message.tokenInAmount === '' ? undefined : message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapExactAmountOutSudoMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg-response',
            value: SwapExactAmountOutSudoMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapExactAmountOutSudoMsgResponse.decode(message.value);
    },
    toProto(message) {
        return SwapExactAmountOutSudoMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse',
            value: SwapExactAmountOutSudoMsgResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapExactAmountOutSudoMsgResponse.typeUrl, SwapExactAmountOutSudoMsgResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapExactAmountOutSudoMsgResponse.aminoType, SwapExactAmountOutSudoMsgResponse.typeUrl);
