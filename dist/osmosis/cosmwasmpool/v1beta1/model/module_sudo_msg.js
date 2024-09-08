"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapExactAmountOutSudoMsgResponse = exports.SwapExactAmountOutSudoMsg = exports.SwapExactAmountOut = exports.SwapExactAmountInSudoMsgResponse = exports.SwapExactAmountInSudoMsg = exports.SwapExactAmountIn = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../../registry");
function createBaseSwapExactAmountIn() {
    return {
        sender: '',
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutDenom: '',
        tokenOutMinAmount: '',
        swapFee: '',
    };
}
exports.SwapExactAmountIn = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-in',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.is(o.tokenIn) &&
                    typeof o.tokenOutDenom === 'string' &&
                    typeof o.tokenOutMinAmount === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isSDK(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isAmino(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
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
                .string(math_1.Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                case 5:
                    message.swapFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
                ? coin_1.Coin.fromPartial(object.tokenIn)
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
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
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
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        obj.token_out_min_amount =
            message.tokenOutMinAmount === '' ? undefined : message.tokenOutMinAmount;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-in',
            value: exports.SwapExactAmountIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.SwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn',
            value: exports.SwapExactAmountIn.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapExactAmountIn.typeUrl, exports.SwapExactAmountIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapExactAmountIn.aminoType, exports.SwapExactAmountIn.typeUrl);
function createBaseSwapExactAmountInSudoMsg() {
    return {
        swapExactAmountIn: exports.SwapExactAmountIn.fromPartial({}),
    };
}
exports.SwapExactAmountInSudoMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountInSudoMsg.typeUrl ||
                exports.SwapExactAmountIn.is(o.swapExactAmountIn)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountInSudoMsg.typeUrl ||
                exports.SwapExactAmountIn.isSDK(o.swap_exact_amount_in)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountInSudoMsg.typeUrl ||
                exports.SwapExactAmountIn.isAmino(o.swap_exact_amount_in)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapExactAmountIn !== undefined) {
            exports.SwapExactAmountIn.encode(message.swapExactAmountIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountInSudoMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapExactAmountIn = exports.SwapExactAmountIn.decode(reader, reader.uint32());
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
                ? exports.SwapExactAmountIn.fromPartial(object.swapExactAmountIn)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountInSudoMsg();
        if (object.swap_exact_amount_in !== undefined &&
            object.swap_exact_amount_in !== null) {
            message.swapExactAmountIn = exports.SwapExactAmountIn.fromAmino(object.swap_exact_amount_in);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_exact_amount_in = message.swapExactAmountIn
            ? exports.SwapExactAmountIn.toAmino(message.swapExactAmountIn)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapExactAmountInSudoMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg',
            value: exports.SwapExactAmountInSudoMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapExactAmountInSudoMsg.decode(message.value);
    },
    toProto(message) {
        return exports.SwapExactAmountInSudoMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg',
            value: exports.SwapExactAmountInSudoMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapExactAmountInSudoMsg.typeUrl, exports.SwapExactAmountInSudoMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapExactAmountInSudoMsg.aminoType, exports.SwapExactAmountInSudoMsg.typeUrl);
function createBaseSwapExactAmountInSudoMsgResponse() {
    return {
        tokenOutAmount: '',
    };
}
exports.SwapExactAmountInSudoMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountInSudoMsgResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountInSudoMsgResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountInSudoMsgResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== '') {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.SwapExactAmountInSudoMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-in-sudo-msg-response',
            value: exports.SwapExactAmountInSudoMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapExactAmountInSudoMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SwapExactAmountInSudoMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse',
            value: exports.SwapExactAmountInSudoMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapExactAmountInSudoMsgResponse.typeUrl, exports.SwapExactAmountInSudoMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapExactAmountInSudoMsgResponse.aminoType, exports.SwapExactAmountInSudoMsgResponse.typeUrl);
function createBaseSwapExactAmountOut() {
    return {
        sender: '',
        tokenOut: coin_1.Coin.fromPartial({}),
        tokenInDenom: '',
        tokenInMaxAmount: '',
        swapFee: '',
    };
}
exports.SwapExactAmountOut = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-out',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.is(o.tokenOut) &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.tokenInMaxAmount === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isSDK(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isAmino(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
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
                .string(math_1.Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 5:
                    message.swapFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
                ? coin_1.Coin.fromPartial(object.tokenOut)
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
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
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
            ? coin_1.Coin.toAmino(message.tokenOut)
            : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.token_in_max_amount =
            message.tokenInMaxAmount === '' ? undefined : message.tokenInMaxAmount;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-out',
            value: exports.SwapExactAmountOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.SwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut',
            value: exports.SwapExactAmountOut.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapExactAmountOut.typeUrl, exports.SwapExactAmountOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapExactAmountOut.aminoType, exports.SwapExactAmountOut.typeUrl);
function createBaseSwapExactAmountOutSudoMsg() {
    return {
        swapExactAmountOut: exports.SwapExactAmountOut.fromPartial({}),
    };
}
exports.SwapExactAmountOutSudoMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOutSudoMsg.typeUrl ||
                exports.SwapExactAmountOut.is(o.swapExactAmountOut)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOutSudoMsg.typeUrl ||
                exports.SwapExactAmountOut.isSDK(o.swap_exact_amount_out)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOutSudoMsg.typeUrl ||
                exports.SwapExactAmountOut.isAmino(o.swap_exact_amount_out)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapExactAmountOut !== undefined) {
            exports.SwapExactAmountOut.encode(message.swapExactAmountOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapExactAmountOutSudoMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapExactAmountOut = exports.SwapExactAmountOut.decode(reader, reader.uint32());
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
                ? exports.SwapExactAmountOut.fromPartial(object.swapExactAmountOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapExactAmountOutSudoMsg();
        if (object.swap_exact_amount_out !== undefined &&
            object.swap_exact_amount_out !== null) {
            message.swapExactAmountOut = exports.SwapExactAmountOut.fromAmino(object.swap_exact_amount_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_exact_amount_out = message.swapExactAmountOut
            ? exports.SwapExactAmountOut.toAmino(message.swapExactAmountOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapExactAmountOutSudoMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg',
            value: exports.SwapExactAmountOutSudoMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapExactAmountOutSudoMsg.decode(message.value);
    },
    toProto(message) {
        return exports.SwapExactAmountOutSudoMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg',
            value: exports.SwapExactAmountOutSudoMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapExactAmountOutSudoMsg.typeUrl, exports.SwapExactAmountOutSudoMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapExactAmountOutSudoMsg.aminoType, exports.SwapExactAmountOutSudoMsg.typeUrl);
function createBaseSwapExactAmountOutSudoMsgResponse() {
    return {
        tokenInAmount: '',
    };
}
exports.SwapExactAmountOutSudoMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOutSudoMsgResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOutSudoMsgResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapExactAmountOutSudoMsgResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== '') {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.SwapExactAmountOutSudoMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/swap-exact-amount-out-sudo-msg-response',
            value: exports.SwapExactAmountOutSudoMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapExactAmountOutSudoMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SwapExactAmountOutSudoMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse',
            value: exports.SwapExactAmountOutSudoMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapExactAmountOutSudoMsgResponse.typeUrl, exports.SwapExactAmountOutSudoMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapExactAmountOutSudoMsgResponse.aminoType, exports.SwapExactAmountOutSudoMsgResponse.typeUrl);
