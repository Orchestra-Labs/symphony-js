//@ts-nocheck
import { SwapAmountInRoute, SwapAmountOutRoute, SwapAmountInSplitRoute, SwapAmountOutSplitRoute, } from './swap_route';
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: '',
        routes: [],
        tokenIn: Coin.fromPartial({}),
        tokenOutMinAmount: '',
    };
}
export const MsgSwapExactAmountIn = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-in',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.is(o.routes[0])) &&
                    Coin.is(o.tokenIn) &&
                    typeof o.tokenOutMinAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])) &&
                    Coin.isSDK(o.token_in) &&
                    typeof o.token_out_min_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])) &&
                    Coin.isAmino(o.token_in) &&
                    typeof o.token_out_min_amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== '') {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = Coin.decode(reader, reader.uint32());
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
            object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn =
            object.tokenIn !== undefined && object.tokenIn !== null
                ? Coin.fromPartial(object.tokenIn)
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
            object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = Coin.fromAmino(object.token_in);
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
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_min_amount =
            message.tokenOutMinAmount === '' ? undefined : message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-in',
            value: MsgSwapExactAmountIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn',
            value: MsgSwapExactAmountIn.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSwapExactAmountIn.typeUrl, MsgSwapExactAmountIn);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapExactAmountIn.aminoType, MsgSwapExactAmountIn.typeUrl);
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
export const MsgSwapExactAmountInResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountInResponse.typeUrl ||
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
        return MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-in-response',
            value: MsgSwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountInResponse',
            value: MsgSwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSwapExactAmountInResponse.typeUrl, MsgSwapExactAmountInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapExactAmountInResponse.aminoType, MsgSwapExactAmountInResponse.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountIn() {
    return {
        sender: '',
        routes: [],
        tokenInDenom: '',
        tokenOutMinAmount: '',
    };
}
export const MsgSplitRouteSwapExactAmountIn = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
    aminoType: 'osmosis/poolmanager/split-amount-in',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInSplitRoute.is(o.routes[0])) &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.tokenOutMinAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInSplitRoute.isSDK(o.routes[0])) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountIn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountInSplitRoute.isAmino(o.routes[0])) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.token_out_min_amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountInSplitRoute.encode(v, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountInSplitRoute.decode(reader, reader.uint32()));
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
            object.routes?.map(e => SwapAmountInSplitRoute.fromPartial(e)) || [];
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
            object.routes?.map(e => SwapAmountInSplitRoute.fromAmino(e)) || [];
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
            obj.routes = message.routes.map(e => e ? SwapAmountInSplitRoute.toAmino(e) : undefined);
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
        return MsgSplitRouteSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-amount-in',
            value: MsgSplitRouteSwapExactAmountIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSplitRouteSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgSplitRouteSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
            value: MsgSplitRouteSwapExactAmountIn.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSplitRouteSwapExactAmountIn.typeUrl, MsgSplitRouteSwapExactAmountIn);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSplitRouteSwapExactAmountIn.aminoType, MsgSplitRouteSwapExactAmountIn.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountInResponse() {
    return {
        tokenOutAmount: '',
    };
}
export const MsgSplitRouteSwapExactAmountInResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse',
    aminoType: 'osmosis/poolmanager/split-route-swap-exact-amount-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountInResponse.typeUrl ||
                typeof o.tokenOutAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountInResponse.typeUrl ||
                typeof o.token_out_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountInResponse.typeUrl ||
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
        return MsgSplitRouteSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-route-swap-exact-amount-in-response',
            value: MsgSplitRouteSwapExactAmountInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSplitRouteSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSplitRouteSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountInResponse',
            value: MsgSplitRouteSwapExactAmountInResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSplitRouteSwapExactAmountInResponse.typeUrl, MsgSplitRouteSwapExactAmountInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSplitRouteSwapExactAmountInResponse.aminoType, MsgSplitRouteSwapExactAmountInResponse.typeUrl);
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: '',
        routes: [],
        tokenInMaxAmount: '',
        tokenOut: Coin.fromPartial({}),
    };
}
export const MsgSwapExactAmountOut = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-out',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) &&
                    typeof o.tokenInMaxAmount === 'string' &&
                    Coin.is(o.tokenOut))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) &&
                    typeof o.token_in_max_amount === 'string' &&
                    Coin.isSDK(o.token_out))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) &&
                    typeof o.token_in_max_amount === 'string' &&
                    Coin.isAmino(o.token_out))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== '') {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
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
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? '';
        message.routes =
            object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? '';
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? Coin.fromPartial(object.tokenOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes =
            object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_in_max_amount !== undefined &&
            object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in_max_amount =
            message.tokenInMaxAmount === '' ? undefined : message.tokenInMaxAmount;
        obj.token_out = message.tokenOut
            ? Coin.toAmino(message.tokenOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-out',
            value: MsgSwapExactAmountOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut',
            value: MsgSwapExactAmountOut.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSwapExactAmountOut.typeUrl, MsgSwapExactAmountOut);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapExactAmountOut.aminoType, MsgSwapExactAmountOut.typeUrl);
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
export const MsgSwapExactAmountOutResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse',
    aminoType: 'osmosis/poolmanager/swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSwapExactAmountOutResponse.typeUrl ||
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
        return MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-exact-amount-out-response',
            value: MsgSwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOutResponse',
            value: MsgSwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSwapExactAmountOutResponse.typeUrl, MsgSwapExactAmountOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSwapExactAmountOutResponse.aminoType, MsgSwapExactAmountOutResponse.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountOut() {
    return {
        sender: '',
        routes: [],
        tokenOutDenom: '',
        tokenInMaxAmount: '',
    };
}
export const MsgSplitRouteSwapExactAmountOut = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
    aminoType: 'osmosis/poolmanager/split-amount-out',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutSplitRoute.is(o.routes[0])) &&
                    typeof o.tokenOutDenom === 'string' &&
                    typeof o.tokenInMaxAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutSplitRoute.isSDK(o.routes[0])) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountOut.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.routes) &&
                    (!o.routes.length || SwapAmountOutSplitRoute.isAmino(o.routes[0])) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.token_in_max_amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountOutSplitRoute.encode(v, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSplitRouteSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountOutSplitRoute.decode(reader, reader.uint32()));
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
            object.routes?.map(e => SwapAmountOutSplitRoute.fromPartial(e)) || [];
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
            object.routes?.map(e => SwapAmountOutSplitRoute.fromAmino(e)) || [];
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
            obj.routes = message.routes.map(e => e ? SwapAmountOutSplitRoute.toAmino(e) : undefined);
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
        return MsgSplitRouteSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-amount-out',
            value: MsgSplitRouteSwapExactAmountOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSplitRouteSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgSplitRouteSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut',
            value: MsgSplitRouteSwapExactAmountOut.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSplitRouteSwapExactAmountOut.typeUrl, MsgSplitRouteSwapExactAmountOut);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSplitRouteSwapExactAmountOut.aminoType, MsgSplitRouteSwapExactAmountOut.typeUrl);
function createBaseMsgSplitRouteSwapExactAmountOutResponse() {
    return {
        tokenInAmount: '',
    };
}
export const MsgSplitRouteSwapExactAmountOutResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse',
    aminoType: 'osmosis/poolmanager/split-route-swap-exact-amount-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountOutResponse.typeUrl ||
                typeof o.tokenInAmount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountOutResponse.typeUrl ||
                typeof o.token_in_amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSplitRouteSwapExactAmountOutResponse.typeUrl ||
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
        return MsgSplitRouteSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/split-route-swap-exact-amount-out-response',
            value: MsgSplitRouteSwapExactAmountOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSplitRouteSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSplitRouteSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOutResponse',
            value: MsgSplitRouteSwapExactAmountOutResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSplitRouteSwapExactAmountOutResponse.typeUrl, MsgSplitRouteSwapExactAmountOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSplitRouteSwapExactAmountOutResponse.aminoType, MsgSplitRouteSwapExactAmountOutResponse.typeUrl);
function createBaseMsgSetDenomPairTakerFee() {
    return {
        sender: '',
        denomPairTakerFee: [],
    };
}
export const MsgSetDenomPairTakerFee = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
    aminoType: 'osmosis/poolmanager/set-denom-pair-taker-fee',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomPairTakerFee.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.denomPairTakerFee) &&
                    (!o.denomPairTakerFee.length ||
                        DenomPairTakerFee.is(o.denomPairTakerFee[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomPairTakerFee.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        DenomPairTakerFee.isSDK(o.denom_pair_taker_fee[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomPairTakerFee.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        DenomPairTakerFee.isAmino(o.denom_pair_taker_fee[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.denomPairTakerFee) {
            DenomPairTakerFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomPairTakerFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denomPairTakerFee.push(DenomPairTakerFee.decode(reader, reader.uint32()));
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
            object.denomPairTakerFee?.map(e => DenomPairTakerFee.fromPartial(e)) ||
                [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomPairTakerFee();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.denomPairTakerFee =
            object.denom_pair_taker_fee?.map(e => DenomPairTakerFee.fromAmino(e)) ||
                [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.denomPairTakerFee) {
            obj.denom_pair_taker_fee = message.denomPairTakerFee.map(e => e ? DenomPairTakerFee.toAmino(e) : undefined);
        }
        else {
            obj.denom_pair_taker_fee = message.denomPairTakerFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDenomPairTakerFee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/set-denom-pair-taker-fee',
            value: MsgSetDenomPairTakerFee.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetDenomPairTakerFee.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomPairTakerFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee',
            value: MsgSetDenomPairTakerFee.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetDenomPairTakerFee.typeUrl, MsgSetDenomPairTakerFee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDenomPairTakerFee.aminoType, MsgSetDenomPairTakerFee.typeUrl);
function createBaseMsgSetDenomPairTakerFeeResponse() {
    return {
        success: false,
    };
}
export const MsgSetDenomPairTakerFeeResponse = {
    typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse',
    aminoType: 'osmosis/poolmanager/set-denom-pair-taker-fee-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomPairTakerFeeResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomPairTakerFeeResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomPairTakerFeeResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetDenomPairTakerFeeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/set-denom-pair-taker-fee-response',
            value: MsgSetDenomPairTakerFeeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetDenomPairTakerFeeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomPairTakerFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFeeResponse',
            value: MsgSetDenomPairTakerFeeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetDenomPairTakerFeeResponse.typeUrl, MsgSetDenomPairTakerFeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDenomPairTakerFeeResponse.aminoType, MsgSetDenomPairTakerFeeResponse.typeUrl);
function createBaseDenomPairTakerFee() {
    return {
        denom0: '',
        denom1: '',
        takerFee: '',
    };
}
export const DenomPairTakerFee = {
    typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFee',
    aminoType: 'osmosis/poolmanager/denom-pair-taker-fee',
    is(o) {
        return (o &&
            (o.$typeUrl === DenomPairTakerFee.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.takerFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === DenomPairTakerFee.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.taker_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === DenomPairTakerFee.typeUrl ||
                (typeof o.denom0 === 'string' &&
                    typeof o.denom1 === 'string' &&
                    typeof o.taker_fee === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom0 !== '') {
            writer.uint32(10).string(message.denom0);
        }
        if (message.denom1 !== '') {
            writer.uint32(18).string(message.denom1);
        }
        if (message.takerFee !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.takerFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return DenomPairTakerFee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/denom-pair-taker-fee',
            value: DenomPairTakerFee.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return DenomPairTakerFee.decode(message.value);
    },
    toProto(message) {
        return DenomPairTakerFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFee',
            value: DenomPairTakerFee.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(DenomPairTakerFee.typeUrl, DenomPairTakerFee);
GlobalDecoderRegistry.registerAminoProtoMapping(DenomPairTakerFee.aminoType, DenomPairTakerFee.typeUrl);
