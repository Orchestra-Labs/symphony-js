"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSwapSendResponse = exports.MsgSwapSend = exports.MsgSwapResponse = exports.MsgSwap = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgSwap() {
    return {
        trader: '',
        offerCoin: coin_1.Coin.fromPartial({}),
        askDenom: '',
    };
}
exports.MsgSwap = {
    typeUrl: '/osmosis.market.v1beta1.MsgSwap',
    aminoType: 'osmosis/market/swap',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwap.typeUrl ||
                (typeof o.trader === 'string' &&
                    coin_1.Coin.is(o.offerCoin) &&
                    typeof o.askDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwap.typeUrl ||
                (typeof o.trader === 'string' &&
                    coin_1.Coin.isSDK(o.offer_coin) &&
                    typeof o.ask_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwap.typeUrl ||
                (typeof o.trader === 'string' &&
                    coin_1.Coin.isAmino(o.offer_coin) &&
                    typeof o.ask_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.trader !== '') {
            writer.uint32(10).string(message.trader);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(18).fork()).ldelim();
        }
        if (message.askDenom !== '') {
            writer.uint32(26).string(message.askDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trader = reader.string();
                    break;
                case 2:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.askDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwap();
        message.trader = object.trader ?? '';
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? coin_1.Coin.fromPartial(object.offerCoin)
                : undefined;
        message.askDenom = object.askDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwap();
        if (object.trader !== undefined && object.trader !== null) {
            message.trader = object.trader;
        }
        if (object.offer_coin !== undefined && object.offer_coin !== null) {
            message.offerCoin = coin_1.Coin.fromAmino(object.offer_coin);
        }
        if (object.ask_denom !== undefined && object.ask_denom !== null) {
            message.askDenom = object.ask_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.trader = message.trader === '' ? undefined : message.trader;
        obj.offer_coin = message.offerCoin
            ? coin_1.Coin.toAmino(message.offerCoin)
            : undefined;
        obj.ask_denom = message.askDenom === '' ? undefined : message.askDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwap.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/swap',
            value: exports.MsgSwap.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwap.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.MsgSwap',
            value: exports.MsgSwap.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwap.typeUrl, exports.MsgSwap);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwap.aminoType, exports.MsgSwap.typeUrl);
function createBaseMsgSwapResponse() {
    return {
        swapCoin: coin_1.Coin.fromPartial({}),
        swapFee: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSwapResponse = {
    typeUrl: '/osmosis.market.v1beta1.MsgSwapResponse',
    aminoType: 'osmosis/market/swap-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapResponse.typeUrl ||
                (coin_1.Coin.is(o.swapCoin) && coin_1.Coin.is(o.swapFee))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapResponse.typeUrl ||
                (coin_1.Coin.isSDK(o.swap_coin) && coin_1.Coin.isSDK(o.swap_fee))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapResponse.typeUrl ||
                (coin_1.Coin.isAmino(o.swap_coin) && coin_1.Coin.isAmino(o.swap_fee))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapCoin !== undefined) {
            coin_1.Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.swapFee !== undefined) {
            coin_1.Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.swapFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapResponse();
        message.swapCoin =
            object.swapCoin !== undefined && object.swapCoin !== null
                ? coin_1.Coin.fromPartial(object.swapCoin)
                : undefined;
        message.swapFee =
            object.swapFee !== undefined && object.swapFee !== null
                ? coin_1.Coin.fromPartial(object.swapFee)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapResponse();
        if (object.swap_coin !== undefined && object.swap_coin !== null) {
            message.swapCoin = coin_1.Coin.fromAmino(object.swap_coin);
        }
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = coin_1.Coin.fromAmino(object.swap_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_coin = message.swapCoin
            ? coin_1.Coin.toAmino(message.swapCoin)
            : undefined;
        obj.swap_fee = message.swapFee ? coin_1.Coin.toAmino(message.swapFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/swap-response',
            value: exports.MsgSwapResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.MsgSwapResponse',
            value: exports.MsgSwapResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapResponse.typeUrl, exports.MsgSwapResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapResponse.aminoType, exports.MsgSwapResponse.typeUrl);
function createBaseMsgSwapSend() {
    return {
        fromAddress: '',
        toAddress: '',
        offerCoin: coin_1.Coin.fromPartial({}),
        askDenom: '',
    };
}
exports.MsgSwapSend = {
    typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
    aminoType: 'osmosis/market/swap-send',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapSend.typeUrl ||
                (typeof o.fromAddress === 'string' &&
                    typeof o.toAddress === 'string' &&
                    coin_1.Coin.is(o.offerCoin) &&
                    typeof o.askDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapSend.typeUrl ||
                (typeof o.from_address === 'string' &&
                    typeof o.to_address === 'string' &&
                    coin_1.Coin.isSDK(o.offer_coin) &&
                    typeof o.ask_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapSend.typeUrl ||
                (typeof o.from_address === 'string' &&
                    typeof o.to_address === 'string' &&
                    coin_1.Coin.isAmino(o.offer_coin) &&
                    typeof o.ask_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== '') {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== '') {
            writer.uint32(18).string(message.toAddress);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(26).fork()).ldelim();
        }
        if (message.askDenom !== '') {
            writer.uint32(34).string(message.askDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.askDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapSend();
        message.fromAddress = object.fromAddress ?? '';
        message.toAddress = object.toAddress ?? '';
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? coin_1.Coin.fromPartial(object.offerCoin)
                : undefined;
        message.askDenom = object.askDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapSend();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        if (object.offer_coin !== undefined && object.offer_coin !== null) {
            message.offerCoin = coin_1.Coin.fromAmino(object.offer_coin);
        }
        if (object.ask_denom !== undefined && object.ask_denom !== null) {
            message.askDenom = object.ask_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address =
            message.fromAddress === '' ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === '' ? undefined : message.toAddress;
        obj.offer_coin = message.offerCoin
            ? coin_1.Coin.toAmino(message.offerCoin)
            : undefined;
        obj.ask_denom = message.askDenom === '' ? undefined : message.askDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/swap-send',
            value: exports.MsgSwapSend.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.MsgSwapSend',
            value: exports.MsgSwapSend.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapSend.typeUrl, exports.MsgSwapSend);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapSend.aminoType, exports.MsgSwapSend.typeUrl);
function createBaseMsgSwapSendResponse() {
    return {
        swapCoin: coin_1.Coin.fromPartial({}),
        swapFee: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSwapSendResponse = {
    typeUrl: '/osmosis.market.v1beta1.MsgSwapSendResponse',
    aminoType: 'osmosis/market/swap-send-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapSendResponse.typeUrl ||
                (coin_1.Coin.is(o.swapCoin) && coin_1.Coin.is(o.swapFee))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapSendResponse.typeUrl ||
                (coin_1.Coin.isSDK(o.swap_coin) && coin_1.Coin.isSDK(o.swap_fee))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSwapSendResponse.typeUrl ||
                (coin_1.Coin.isAmino(o.swap_coin) && coin_1.Coin.isAmino(o.swap_fee))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapCoin !== undefined) {
            coin_1.Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.swapFee !== undefined) {
            coin_1.Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.swapFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapSendResponse();
        message.swapCoin =
            object.swapCoin !== undefined && object.swapCoin !== null
                ? coin_1.Coin.fromPartial(object.swapCoin)
                : undefined;
        message.swapFee =
            object.swapFee !== undefined && object.swapFee !== null
                ? coin_1.Coin.fromPartial(object.swapFee)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapSendResponse();
        if (object.swap_coin !== undefined && object.swap_coin !== null) {
            message.swapCoin = coin_1.Coin.fromAmino(object.swap_coin);
        }
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = coin_1.Coin.fromAmino(object.swap_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_coin = message.swapCoin
            ? coin_1.Coin.toAmino(message.swapCoin)
            : undefined;
        obj.swap_fee = message.swapFee ? coin_1.Coin.toAmino(message.swapFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/swap-send-response',
            value: exports.MsgSwapSendResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.MsgSwapSendResponse',
            value: exports.MsgSwapSendResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSwapSendResponse.typeUrl, exports.MsgSwapSendResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSwapSendResponse.aminoType, exports.MsgSwapSendResponse.typeUrl);
