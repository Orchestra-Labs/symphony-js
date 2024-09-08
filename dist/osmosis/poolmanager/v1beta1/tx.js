"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomPairTakerFee = exports.MsgSetDenomPairTakerFeeResponse = exports.MsgSetDenomPairTakerFee = exports.MsgSplitRouteSwapExactAmountOutResponse = exports.MsgSplitRouteSwapExactAmountOut = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSplitRouteSwapExactAmountInResponse = exports.MsgSplitRouteSwapExactAmountIn = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = void 0;
//@ts-nocheck
const swap_route_1 = require("./swap_route");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: '',
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: '',
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-in',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.is(o.routes[0])) &&
                    coin_1.Coin.is(o.tokenIn) &&
                    typeof o.tokenOutMinAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.isSDK(o.routes[0])) &&
                    coin_1.Coin.isSDK(o.token_in) &&
                    typeof o.token_out_min_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInRoute.isAmino(o.routes[0])) &&
                    coin_1.Coin.isAmino(o.token_in) &&
                    typeof o.token_out_min_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== '') {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? '';
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn =
            object.tokenIn !== undefined && object.tokenIn !== null
                ? coin_1.Coin.fromPartial(object.tokenIn)
                : undefined;
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
        }
        if (object.token_out_min_amount !== undefined &&
            object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_min_amount =
            message.tokenOutMinAmount === '' ? undefined : message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-in',
            value: exports.MsgSwapExactAmountIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
            value: exports.MsgSwapExactAmountIn.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountIn.typeUrl, exports.MsgSwapExactAmountIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountIn.aminoType, exports.MsgSwapExactAmountIn.typeUrl);
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
exports.MsgSwapExactAmountInResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountInResponse.typeUrl ||
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
        const message = createBaseMsgSwapExactAmountInResponse();
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
        const message = createBaseMsgSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
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
        return exports.MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-in-response',
            value: exports.MsgSwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse',
            value: exports.MsgSwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountInResponse.typeUrl, exports.MsgSwapExactAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountInResponse.aminoType, exports.MsgSwapExactAmountInResponse.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountIn() {
    return {
        sender: '',
        routes: [],
        tokenInDenom: '',
        tokenOutMinAmount: '',
    };
}
exports.MsgSplitRouteSwapExactAmountIn = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
    aminoType: 'osmosis/poolmanager/split-amount-in',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInSplitRoute.is(o.routes[0])) &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.tokenOutMinAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInSplitRoute.isSDK(o.routes[0])) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountInSplitRoute.isAmino(o.routes[0])) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInSplitRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.tokenOutMinAmount !== '') {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountInSplitRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountIn();
        message.sender = object.sender ?? '';
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountInSplitRoute.fromPartial(e)) || [];
        message.tokenInDenom = object.tokenInDenom ?? '';
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountInSplitRoute.fromAmino(e)) || [];
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.token_out_min_amount !== undefined &&
            object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInSplitRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.token_out_min_amount =
            message.tokenOutMinAmount === '' ? undefined : message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSplitRouteSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-amount-in',
            value: exports.MsgSplitRouteSwapExactAmountIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSplitRouteSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSplitRouteSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
            value: exports.MsgSplitRouteSwapExactAmountIn.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSplitRouteSwapExactAmountIn.typeUrl, exports.MsgSplitRouteSwapExactAmountIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSplitRouteSwapExactAmountIn.aminoType, exports.MsgSplitRouteSwapExactAmountIn.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
exports.MsgSplitRouteSwapExactAmountInResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse',
    aminoType: 'osmosis/poolmanager/split-route-swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountInResponse.typeUrl ||
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
        const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
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
        const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountInResponse();
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
        return exports.MsgSplitRouteSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-route-swap-exact-amount-in-response',
            value: exports.MsgSplitRouteSwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSplitRouteSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSplitRouteSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse',
            value: exports.MsgSplitRouteSwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSplitRouteSwapExactAmountInResponse.typeUrl, exports.MsgSplitRouteSwapExactAmountInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSplitRouteSwapExactAmountInResponse.aminoType, exports.MsgSplitRouteSwapExactAmountInResponse.typeUrl);
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: '',
        routes: [],
        tokenInMaxAmount: '',
        tokenOut: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSwapExactAmountOut = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-out',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.is(o.routes[0])) &&
                    typeof o.tokenInMaxAmount === 'string' &&
                    coin_1.Coin.is(o.tokenOut))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.isSDK(o.routes[0])) &&
                    typeof o.token_in_max_amount === 'string' &&
                    coin_1.Coin.isSDK(o.token_out))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutRoute.isAmino(o.routes[0])) &&
                    typeof o.token_in_max_amount === 'string' &&
                    coin_1.Coin.isAmino(o.token_out))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== '') {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? '';
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? '';
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? coin_1.Coin.fromPartial(object.tokenOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_in_max_amount !== undefined &&
            object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in_max_amount =
            message.tokenInMaxAmount === '' ? undefined : message.tokenInMaxAmount;
        obj.token_out = message.tokenOut
            ? coin_1.Coin.toAmino(message.tokenOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-out',
            value: exports.MsgSwapExactAmountOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
            value: exports.MsgSwapExactAmountOut.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountOut.typeUrl, exports.MsgSwapExactAmountOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountOut.aminoType, exports.MsgSwapExactAmountOut.typeUrl);
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
exports.MsgSwapExactAmountOutResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapExactAmountOutResponse.typeUrl ||
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
        const message = createBaseMsgSwapExactAmountOutResponse();
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
        const message = createBaseMsgSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
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
        return exports.MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-out-response',
            value: exports.MsgSwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse',
            value: exports.MsgSwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapExactAmountOutResponse.typeUrl, exports.MsgSwapExactAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapExactAmountOutResponse.aminoType, exports.MsgSwapExactAmountOutResponse.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountOut() {
    return {
        sender: '',
        routes: [],
        tokenOutDenom: '',
        tokenInMaxAmount: '',
    };
}
exports.MsgSplitRouteSwapExactAmountOut = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
    aminoType: 'osmosis/poolmanager/split-amount-out',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutSplitRoute.is(o.routes[0])) &&
                    typeof o.tokenOutDenom === 'string' &&
                    typeof o.tokenInMaxAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutSplitRoute.isSDK(o.routes[0])) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || swap_route_1.SwapAmountOutSplitRoute.isAmino(o.routes[0])) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutSplitRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.tokenInMaxAmount !== '') {
            writer.uint32(34).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountOutSplitRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.tokenInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountOut();
        message.sender = object.sender ?? '';
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountOutSplitRoute.fromPartial(e)) || [];
        message.tokenOutDenom = object.tokenOutDenom ?? '';
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes =
            object.routes?.map(e => swap_route_1.SwapAmountOutSplitRoute.fromAmino(e)) || [];
        if (object.token_out_denom !== undefined &&
            object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        if (object.token_in_max_amount !== undefined &&
            object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutSplitRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        obj.token_in_max_amount =
            message.tokenInMaxAmount === '' ? undefined : message.tokenInMaxAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSplitRouteSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-amount-out',
            value: exports.MsgSplitRouteSwapExactAmountOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSplitRouteSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSplitRouteSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
            value: exports.MsgSplitRouteSwapExactAmountOut.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSplitRouteSwapExactAmountOut.typeUrl, exports.MsgSplitRouteSwapExactAmountOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSplitRouteSwapExactAmountOut.aminoType, exports.MsgSplitRouteSwapExactAmountOut.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
exports.MsgSplitRouteSwapExactAmountOutResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse',
    aminoType: 'osmosis/poolmanager/split-route-swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSplitRouteSwapExactAmountOutResponse.typeUrl ||
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
        const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
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
        const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSplitRouteSwapExactAmountOutResponse();
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
        return exports.MsgSplitRouteSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-route-swap-exact-amount-out-response',
            value: exports.MsgSplitRouteSwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSplitRouteSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSplitRouteSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse',
            value: exports.MsgSplitRouteSwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSplitRouteSwapExactAmountOutResponse.typeUrl, exports.MsgSplitRouteSwapExactAmountOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSplitRouteSwapExactAmountOutResponse.aminoType, exports.MsgSplitRouteSwapExactAmountOutResponse.typeUrl);
function createBaseMsgSetDenomPairTakerFee() {
    return {
        sender: '',
        denomPairTakerFee: [],
    };
}
exports.MsgSetDenomPairTakerFee = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
    aminoType: 'osmosis/poolmanager/set-denom-pair-taker-fee',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomPairTakerFee.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.denomPairTakerFee) &&
                    (!o.denomPairTakerFee.length ||
                        exports.DenomPairTakerFee.is(o.denomPairTakerFee[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomPairTakerFee.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        exports.DenomPairTakerFee.isSDK(o.denom_pair_taker_fee[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomPairTakerFee.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        exports.DenomPairTakerFee.isAmino(o.denom_pair_taker_fee[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.denomPairTakerFee) {
            exports.DenomPairTakerFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomPairTakerFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denomPairTakerFee.push(exports.DenomPairTakerFee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomPairTakerFee();
        message.sender = object.sender ?? '';
        message.denomPairTakerFee =
            object.denomPairTakerFee?.map(e => exports.DenomPairTakerFee.fromPartial(e)) ||
                [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomPairTakerFee();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.denomPairTakerFee =
            object.denom_pair_taker_fee?.map(e => exports.DenomPairTakerFee.fromAmino(e)) ||
                [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.denomPairTakerFee) {
            obj.denom_pair_taker_fee = message.denomPairTakerFee.map(e => e ? exports.DenomPairTakerFee.toAmino(e) : undefined);
        }
        else {
            obj.denom_pair_taker_fee = message.denomPairTakerFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomPairTakerFee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/set-denom-pair-taker-fee',
            value: exports.MsgSetDenomPairTakerFee.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomPairTakerFee.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomPairTakerFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
            value: exports.MsgSetDenomPairTakerFee.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetDenomPairTakerFee.typeUrl, exports.MsgSetDenomPairTakerFee);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetDenomPairTakerFee.aminoType, exports.MsgSetDenomPairTakerFee.typeUrl);
function createBaseMsgSetDenomPairTakerFeeResponse() {
    return {
        success: false,
    };
}
exports.MsgSetDenomPairTakerFeeResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse',
    aminoType: 'osmosis/poolmanager/set-denom-pair-taker-fee-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomPairTakerFeeResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomPairTakerFeeResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomPairTakerFeeResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomPairTakerFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomPairTakerFeeResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomPairTakerFeeResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomPairTakerFeeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/set-denom-pair-taker-fee-response',
            value: exports.MsgSetDenomPairTakerFeeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomPairTakerFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomPairTakerFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse',
            value: exports.MsgSetDenomPairTakerFeeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetDenomPairTakerFeeResponse.typeUrl, exports.MsgSetDenomPairTakerFeeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetDenomPairTakerFeeResponse.aminoType, exports.MsgSetDenomPairTakerFeeResponse.typeUrl);
function createBaseDenomPairTakerFee() {
    return {
        denom0: '',
        denom1: '',
        takerFee: '',
    };
}
exports.DenomPairTakerFee = {
    typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFee',
    aminoType: 'osmosis/poolmanager/denom-pair-taker-fee',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.DenomPairTakerFee.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.takerFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.DenomPairTakerFee.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.taker_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.DenomPairTakerFee.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.taker_fee === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom0 !== '') {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== '') {
            writer.uint32(18).string(message.denom1);
        }
        if (message.takerFee !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.takerFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomPairTakerFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom0 = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                case 3:
                    message.takerFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomPairTakerFee();
        message.denom0 = object.denom0 ?? '';
        message.denom1 = object.denom1 ?? '';
        message.takerFee = object.takerFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomPairTakerFee();
        if (object.denom0 !== undefined && object.denom0 !== null) {
            message.denom0 = object.denom0;
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = object.denom1;
        }
        if (object.taker_fee !== undefined && object.taker_fee !== null) {
            message.takerFee = object.taker_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom0 = message.denom0 === '' ? undefined : message.denom0;
        obj.denom1 = message.denom1 === '' ? undefined : message.denom1;
        obj.taker_fee = message.takerFee === '' ? undefined : message.takerFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomPairTakerFee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/denom-pair-taker-fee',
            value: exports.DenomPairTakerFee.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.DenomPairTakerFee.decode(message.value);
    },
    toProto(message) {
        return exports.DenomPairTakerFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFee',
            value: exports.DenomPairTakerFee.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.DenomPairTakerFee.typeUrl, exports.DenomPairTakerFee);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DenomPairTakerFee.aminoType, exports.DenomPairTakerFee.typeUrl);
