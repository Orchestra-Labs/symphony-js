"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcInAmtGivenOutResponse = exports.CalcInAmtGivenOutRequest = exports.CalcInAmtGivenOut = exports.CalcOutAmtGivenInResponse = exports.CalcOutAmtGivenInRequest = exports.CalcOutAmtGivenIn = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../../registry");
function createBaseCalcOutAmtGivenIn() {
    return {
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutDenom: '',
        swapFee: '',
    };
}
exports.CalcOutAmtGivenIn = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn',
    aminoType: 'osmosis/cosmwasmpool/calc-out-amt-given-in',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenIn.typeUrl ||
                (coin_1.Coin.is(o.tokenIn) &&
                    typeof o.tokenOutDenom === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenIn.typeUrl ||
                (coin_1.Coin.isSDK(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenIn.typeUrl ||
                (coin_1.Coin.isAmino(o.token_in) &&
                    typeof o.token_out_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        if (message.swapFee !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
                case 3:
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
        const message = createBaseCalcOutAmtGivenIn();
        message.tokenIn =
            object.tokenIn !== undefined && object.tokenIn !== null
                ? coin_1.Coin.fromPartial(object.tokenIn)
                : undefined;
        message.tokenOutDenom = object.tokenOutDenom ?? '';
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcOutAmtGivenIn();
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
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
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalcOutAmtGivenIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-out-amt-given-in',
            value: exports.CalcOutAmtGivenIn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CalcOutAmtGivenIn.decode(message.value);
    },
    toProto(message) {
        return exports.CalcOutAmtGivenIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn',
            value: exports.CalcOutAmtGivenIn.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CalcOutAmtGivenIn.typeUrl, exports.CalcOutAmtGivenIn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CalcOutAmtGivenIn.aminoType, exports.CalcOutAmtGivenIn.typeUrl);
function createBaseCalcOutAmtGivenInRequest() {
    return {
        calcOutAmtGivenIn: exports.CalcOutAmtGivenIn.fromPartial({}),
    };
}
exports.CalcOutAmtGivenInRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest',
    aminoType: 'osmosis/cosmwasmpool/calc-out-amt-given-in-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenInRequest.typeUrl ||
                exports.CalcOutAmtGivenIn.is(o.calcOutAmtGivenIn)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenInRequest.typeUrl ||
                exports.CalcOutAmtGivenIn.isSDK(o.calc_out_amt_given_in)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenInRequest.typeUrl ||
                exports.CalcOutAmtGivenIn.isAmino(o.calc_out_amt_given_in)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.calcOutAmtGivenIn !== undefined) {
            exports.CalcOutAmtGivenIn.encode(message.calcOutAmtGivenIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calcOutAmtGivenIn = exports.CalcOutAmtGivenIn.decode(reader, reader.uint32());
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
                ? exports.CalcOutAmtGivenIn.fromPartial(object.calcOutAmtGivenIn)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcOutAmtGivenInRequest();
        if (object.calc_out_amt_given_in !== undefined &&
            object.calc_out_amt_given_in !== null) {
            message.calcOutAmtGivenIn = exports.CalcOutAmtGivenIn.fromAmino(object.calc_out_amt_given_in);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.calc_out_amt_given_in = message.calcOutAmtGivenIn
            ? exports.CalcOutAmtGivenIn.toAmino(message.calcOutAmtGivenIn)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalcOutAmtGivenInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-out-amt-given-in-request',
            value: exports.CalcOutAmtGivenInRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CalcOutAmtGivenInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.CalcOutAmtGivenInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest',
            value: exports.CalcOutAmtGivenInRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CalcOutAmtGivenInRequest.typeUrl, exports.CalcOutAmtGivenInRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CalcOutAmtGivenInRequest.aminoType, exports.CalcOutAmtGivenInRequest.typeUrl);
function createBaseCalcOutAmtGivenInResponse() {
    return {
        tokenOut: coin_1.Coin.fromPartial({}),
    };
}
exports.CalcOutAmtGivenInResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse',
    aminoType: 'osmosis/cosmwasmpool/calc-out-amt-given-in-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenInResponse.typeUrl || coin_1.Coin.is(o.tokenOut)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenInResponse.typeUrl ||
                coin_1.Coin.isSDK(o.token_out)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CalcOutAmtGivenInResponse.typeUrl ||
                coin_1.Coin.isAmino(o.token_out)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcOutAmtGivenInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseCalcOutAmtGivenInResponse();
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? coin_1.Coin.fromPartial(object.tokenOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcOutAmtGivenInResponse();
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out = message.tokenOut
            ? coin_1.Coin.toAmino(message.tokenOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalcOutAmtGivenInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-out-amt-given-in-response',
            value: exports.CalcOutAmtGivenInResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CalcOutAmtGivenInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.CalcOutAmtGivenInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse',
            value: exports.CalcOutAmtGivenInResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CalcOutAmtGivenInResponse.typeUrl, exports.CalcOutAmtGivenInResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CalcOutAmtGivenInResponse.aminoType, exports.CalcOutAmtGivenInResponse.typeUrl);
function createBaseCalcInAmtGivenOut() {
    return {
        tokenOut: coin_1.Coin.fromPartial({}),
        tokenInDenom: '',
        swapFee: '',
    };
}
exports.CalcInAmtGivenOut = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut',
    aminoType: 'osmosis/cosmwasmpool/calc-in-amt-given-out',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOut.typeUrl ||
                (coin_1.Coin.is(o.tokenOut) &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.swapFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOut.typeUrl ||
                (coin_1.Coin.isSDK(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOut.typeUrl ||
                (coin_1.Coin.isAmino(o.token_out) &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.swap_fee === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.swapFee !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                case 3:
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
        const message = createBaseCalcInAmtGivenOut();
        message.tokenOut =
            object.tokenOut !== undefined && object.tokenOut !== null
                ? coin_1.Coin.fromPartial(object.tokenOut)
                : undefined;
        message.tokenInDenom = object.tokenInDenom ?? '';
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcInAmtGivenOut();
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
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
            ? coin_1.Coin.toAmino(message.tokenOut)
            : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalcInAmtGivenOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-in-amt-given-out',
            value: exports.CalcInAmtGivenOut.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CalcInAmtGivenOut.decode(message.value);
    },
    toProto(message) {
        return exports.CalcInAmtGivenOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut',
            value: exports.CalcInAmtGivenOut.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CalcInAmtGivenOut.typeUrl, exports.CalcInAmtGivenOut);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CalcInAmtGivenOut.aminoType, exports.CalcInAmtGivenOut.typeUrl);
function createBaseCalcInAmtGivenOutRequest() {
    return {
        calcInAmtGivenOut: exports.CalcInAmtGivenOut.fromPartial({}),
    };
}
exports.CalcInAmtGivenOutRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest',
    aminoType: 'osmosis/cosmwasmpool/calc-in-amt-given-out-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOutRequest.typeUrl ||
                exports.CalcInAmtGivenOut.is(o.calcInAmtGivenOut)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOutRequest.typeUrl ||
                exports.CalcInAmtGivenOut.isSDK(o.calc_in_amt_given_out)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOutRequest.typeUrl ||
                exports.CalcInAmtGivenOut.isAmino(o.calc_in_amt_given_out)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.calcInAmtGivenOut !== undefined) {
            exports.CalcInAmtGivenOut.encode(message.calcInAmtGivenOut, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calcInAmtGivenOut = exports.CalcInAmtGivenOut.decode(reader, reader.uint32());
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
                ? exports.CalcInAmtGivenOut.fromPartial(object.calcInAmtGivenOut)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcInAmtGivenOutRequest();
        if (object.calc_in_amt_given_out !== undefined &&
            object.calc_in_amt_given_out !== null) {
            message.calcInAmtGivenOut = exports.CalcInAmtGivenOut.fromAmino(object.calc_in_amt_given_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.calc_in_amt_given_out = message.calcInAmtGivenOut
            ? exports.CalcInAmtGivenOut.toAmino(message.calcInAmtGivenOut)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalcInAmtGivenOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-in-amt-given-out-request',
            value: exports.CalcInAmtGivenOutRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CalcInAmtGivenOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.CalcInAmtGivenOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest',
            value: exports.CalcInAmtGivenOutRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CalcInAmtGivenOutRequest.typeUrl, exports.CalcInAmtGivenOutRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CalcInAmtGivenOutRequest.aminoType, exports.CalcInAmtGivenOutRequest.typeUrl);
function createBaseCalcInAmtGivenOutResponse() {
    return {
        tokenIn: coin_1.Coin.fromPartial({}),
    };
}
exports.CalcInAmtGivenOutResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse',
    aminoType: 'osmosis/cosmwasmpool/calc-in-amt-given-out-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOutResponse.typeUrl || coin_1.Coin.is(o.tokenIn)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOutResponse.typeUrl ||
                coin_1.Coin.isSDK(o.token_in)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CalcInAmtGivenOutResponse.typeUrl ||
                coin_1.Coin.isAmino(o.token_in)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCalcInAmtGivenOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
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
                ? coin_1.Coin.fromPartial(object.tokenIn)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCalcInAmtGivenOutResponse();
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CalcInAmtGivenOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/calc-in-amt-given-out-response',
            value: exports.CalcInAmtGivenOutResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CalcInAmtGivenOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.CalcInAmtGivenOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse',
            value: exports.CalcInAmtGivenOutResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CalcInAmtGivenOutResponse.typeUrl, exports.CalcInAmtGivenOutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CalcInAmtGivenOutResponse.aminoType, exports.CalcInAmtGivenOutResponse.typeUrl);
