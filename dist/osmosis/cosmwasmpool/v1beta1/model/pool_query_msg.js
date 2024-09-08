"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTotalSharesQueryMsgResponse = exports.GetTotalSharesQueryMsg = exports.GetTotalPoolLiquidityQueryMsgResponse = exports.GetTotalPoolLiquidityQueryMsg = exports.EmptyStruct = exports.SpotPriceQueryMsgResponse = exports.SpotPriceQueryMsg = exports.SpotPrice = exports.GetSwapFeeQueryMsgResponse = exports.GetSwapFeeQueryMsg = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseGetSwapFeeQueryMsg() {
    return {
        getSwapFee: exports.EmptyStruct.fromPartial({}),
    };
}
exports.GetSwapFeeQueryMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg',
    aminoType: 'osmosis/cosmwasmpool/get-swap-fee-query-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetSwapFeeQueryMsg.typeUrl ||
                exports.EmptyStruct.is(o.getSwapFee)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetSwapFeeQueryMsg.typeUrl ||
                exports.EmptyStruct.isSDK(o.get_swap_fee)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetSwapFeeQueryMsg.typeUrl ||
                exports.EmptyStruct.isAmino(o.get_swap_fee)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.getSwapFee !== undefined) {
            exports.EmptyStruct.encode(message.getSwapFee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSwapFeeQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.getSwapFee = exports.EmptyStruct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetSwapFeeQueryMsg();
        message.getSwapFee =
            object.getSwapFee !== undefined && object.getSwapFee !== null
                ? exports.EmptyStruct.fromPartial(object.getSwapFee)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetSwapFeeQueryMsg();
        if (object.get_swap_fee !== undefined && object.get_swap_fee !== null) {
            message.getSwapFee = exports.EmptyStruct.fromAmino(object.get_swap_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.get_swap_fee = message.getSwapFee
            ? exports.EmptyStruct.toAmino(message.getSwapFee)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetSwapFeeQueryMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/get-swap-fee-query-msg',
            value: exports.GetSwapFeeQueryMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetSwapFeeQueryMsg.decode(message.value);
    },
    toProto(message) {
        return exports.GetSwapFeeQueryMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsg',
            value: exports.GetSwapFeeQueryMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetSwapFeeQueryMsg.typeUrl, exports.GetSwapFeeQueryMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetSwapFeeQueryMsg.aminoType, exports.GetSwapFeeQueryMsg.typeUrl);
function createBaseGetSwapFeeQueryMsgResponse() {
    return {
        swapFee: '',
    };
}
exports.GetSwapFeeQueryMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/get-swap-fee-query-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetSwapFeeQueryMsgResponse.typeUrl ||
                typeof o.swapFee === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetSwapFeeQueryMsgResponse.typeUrl ||
                typeof o.swap_fee === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetSwapFeeQueryMsgResponse.typeUrl ||
                typeof o.swap_fee === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const message = createBaseGetSwapFeeQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
        const message = createBaseGetSwapFeeQueryMsgResponse();
        message.swapFee = object.swapFee ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetSwapFeeQueryMsgResponse();
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetSwapFeeQueryMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/get-swap-fee-query-msg-response',
            value: exports.GetSwapFeeQueryMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetSwapFeeQueryMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetSwapFeeQueryMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetSwapFeeQueryMsgResponse',
            value: exports.GetSwapFeeQueryMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetSwapFeeQueryMsgResponse.typeUrl, exports.GetSwapFeeQueryMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetSwapFeeQueryMsgResponse.aminoType, exports.GetSwapFeeQueryMsgResponse.typeUrl);
function createBaseSpotPrice() {
    return {
        quoteAssetDenom: '',
        baseAssetDenom: '',
    };
}
exports.SpotPrice = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SpotPrice',
    aminoType: 'osmosis/cosmwasmpool/spot-price',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPrice.typeUrl ||
                (typeof o.quoteAssetDenom === 'string' &&
                    typeof o.baseAssetDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPrice.typeUrl ||
                (typeof o.quote_asset_denom === 'string' &&
                    typeof o.base_asset_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPrice.typeUrl ||
                (typeof o.quote_asset_denom === 'string' &&
                    typeof o.base_asset_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quoteAssetDenom !== '') {
            writer.uint32(10).string(message.quoteAssetDenom);
        }
        if (message.baseAssetDenom !== '') {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quoteAssetDenom = reader.string();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotPrice();
        message.quoteAssetDenom = object.quoteAssetDenom ?? '';
        message.baseAssetDenom = object.baseAssetDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPrice();
        if (object.quote_asset_denom !== undefined &&
            object.quote_asset_denom !== null) {
            message.quoteAssetDenom = object.quote_asset_denom;
        }
        if (object.base_asset_denom !== undefined &&
            object.base_asset_denom !== null) {
            message.baseAssetDenom = object.base_asset_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quote_asset_denom =
            message.quoteAssetDenom === '' ? undefined : message.quoteAssetDenom;
        obj.base_asset_denom =
            message.baseAssetDenom === '' ? undefined : message.baseAssetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotPrice.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/spot-price',
            value: exports.SpotPrice.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPrice.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPrice.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SpotPrice',
            value: exports.SpotPrice.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPrice.typeUrl, exports.SpotPrice);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPrice.aminoType, exports.SpotPrice.typeUrl);
function createBaseSpotPriceQueryMsg() {
    return {
        spotPrice: exports.SpotPrice.fromPartial({}),
    };
}
exports.SpotPriceQueryMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg',
    aminoType: 'osmosis/cosmwasmpool/spot-price-query-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceQueryMsg.typeUrl || exports.SpotPrice.is(o.spotPrice)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceQueryMsg.typeUrl ||
                exports.SpotPrice.isSDK(o.spot_price)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceQueryMsg.typeUrl ||
                exports.SpotPrice.isAmino(o.spot_price)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== undefined) {
            exports.SpotPrice.encode(message.spotPrice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = exports.SpotPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceQueryMsg();
        message.spotPrice =
            object.spotPrice !== undefined && object.spotPrice !== null
                ? exports.SpotPrice.fromPartial(object.spotPrice)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPriceQueryMsg();
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = exports.SpotPrice.fromAmino(object.spot_price);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spotPrice
            ? exports.SpotPrice.toAmino(message.spotPrice)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotPriceQueryMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/spot-price-query-msg',
            value: exports.SpotPriceQueryMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPriceQueryMsg.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPriceQueryMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsg',
            value: exports.SpotPriceQueryMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPriceQueryMsg.typeUrl, exports.SpotPriceQueryMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPriceQueryMsg.aminoType, exports.SpotPriceQueryMsg.typeUrl);
function createBaseSpotPriceQueryMsgResponse() {
    return {
        spotPrice: '',
    };
}
exports.SpotPriceQueryMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/spot-price-query-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceQueryMsgResponse.typeUrl ||
                typeof o.spotPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceQueryMsgResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceQueryMsgResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== '') {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceQueryMsgResponse();
        message.spotPrice = object.spotPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPriceQueryMsgResponse();
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = object.spot_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spotPrice === '' ? undefined : message.spotPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotPriceQueryMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/spot-price-query-msg-response',
            value: exports.SpotPriceQueryMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPriceQueryMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPriceQueryMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.SpotPriceQueryMsgResponse',
            value: exports.SpotPriceQueryMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPriceQueryMsgResponse.typeUrl, exports.SpotPriceQueryMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPriceQueryMsgResponse.aminoType, exports.SpotPriceQueryMsgResponse.typeUrl);
function createBaseEmptyStruct() {
    return {};
}
exports.EmptyStruct = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.EmptyStruct',
    aminoType: 'osmosis/cosmwasmpool/empty-struct',
    is(o) {
        return o && o.$typeUrl === exports.EmptyStruct.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.EmptyStruct.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.EmptyStruct.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyStruct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseEmptyStruct();
        return message;
    },
    fromAmino(_) {
        const message = createBaseEmptyStruct();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EmptyStruct.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/empty-struct',
            value: exports.EmptyStruct.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EmptyStruct.decode(message.value);
    },
    toProto(message) {
        return exports.EmptyStruct.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.EmptyStruct',
            value: exports.EmptyStruct.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EmptyStruct.typeUrl, exports.EmptyStruct);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EmptyStruct.aminoType, exports.EmptyStruct.typeUrl);
function createBaseGetTotalPoolLiquidityQueryMsg() {
    return {
        getTotalPoolLiquidity: exports.EmptyStruct.fromPartial({}),
    };
}
exports.GetTotalPoolLiquidityQueryMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg',
    aminoType: 'osmosis/cosmwasmpool/get-total-pool-liquidity-query-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalPoolLiquidityQueryMsg.typeUrl ||
                exports.EmptyStruct.is(o.getTotalPoolLiquidity)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalPoolLiquidityQueryMsg.typeUrl ||
                exports.EmptyStruct.isSDK(o.get_total_pool_liquidity)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalPoolLiquidityQueryMsg.typeUrl ||
                exports.EmptyStruct.isAmino(o.get_total_pool_liquidity)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.getTotalPoolLiquidity !== undefined) {
            exports.EmptyStruct.encode(message.getTotalPoolLiquidity, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalPoolLiquidityQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.getTotalPoolLiquidity = exports.EmptyStruct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTotalPoolLiquidityQueryMsg();
        message.getTotalPoolLiquidity =
            object.getTotalPoolLiquidity !== undefined &&
                object.getTotalPoolLiquidity !== null
                ? exports.EmptyStruct.fromPartial(object.getTotalPoolLiquidity)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTotalPoolLiquidityQueryMsg();
        if (object.get_total_pool_liquidity !== undefined &&
            object.get_total_pool_liquidity !== null) {
            message.getTotalPoolLiquidity = exports.EmptyStruct.fromAmino(object.get_total_pool_liquidity);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.get_total_pool_liquidity = message.getTotalPoolLiquidity
            ? exports.EmptyStruct.toAmino(message.getTotalPoolLiquidity)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTotalPoolLiquidityQueryMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/get-total-pool-liquidity-query-msg',
            value: exports.GetTotalPoolLiquidityQueryMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetTotalPoolLiquidityQueryMsg.decode(message.value);
    },
    toProto(message) {
        return exports.GetTotalPoolLiquidityQueryMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsg',
            value: exports.GetTotalPoolLiquidityQueryMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetTotalPoolLiquidityQueryMsg.typeUrl, exports.GetTotalPoolLiquidityQueryMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTotalPoolLiquidityQueryMsg.aminoType, exports.GetTotalPoolLiquidityQueryMsg.typeUrl);
function createBaseGetTotalPoolLiquidityQueryMsgResponse() {
    return {
        totalPoolLiquidity: [],
    };
}
exports.GetTotalPoolLiquidityQueryMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/get-total-pool-liquidity-query-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalPoolLiquidityQueryMsgResponse.typeUrl ||
                (Array.isArray(o.totalPoolLiquidity) &&
                    (!o.totalPoolLiquidity.length || coin_1.Coin.is(o.totalPoolLiquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalPoolLiquidityQueryMsgResponse.typeUrl ||
                (Array.isArray(o.total_pool_liquidity) &&
                    (!o.total_pool_liquidity.length ||
                        coin_1.Coin.isSDK(o.total_pool_liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalPoolLiquidityQueryMsgResponse.typeUrl ||
                (Array.isArray(o.total_pool_liquidity) &&
                    (!o.total_pool_liquidity.length ||
                        coin_1.Coin.isAmino(o.total_pool_liquidity[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.totalPoolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalPoolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
        message.totalPoolLiquidity =
            object.totalPoolLiquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
        message.totalPoolLiquidity =
            object.total_pool_liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.totalPoolLiquidity) {
            obj.total_pool_liquidity = message.totalPoolLiquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_pool_liquidity = message.totalPoolLiquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTotalPoolLiquidityQueryMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/get-total-pool-liquidity-query-msg-response',
            value: exports.GetTotalPoolLiquidityQueryMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetTotalPoolLiquidityQueryMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTotalPoolLiquidityQueryMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalPoolLiquidityQueryMsgResponse',
            value: exports.GetTotalPoolLiquidityQueryMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetTotalPoolLiquidityQueryMsgResponse.typeUrl, exports.GetTotalPoolLiquidityQueryMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTotalPoolLiquidityQueryMsgResponse.aminoType, exports.GetTotalPoolLiquidityQueryMsgResponse.typeUrl);
function createBaseGetTotalSharesQueryMsg() {
    return {
        getTotalShares: exports.EmptyStruct.fromPartial({}),
    };
}
exports.GetTotalSharesQueryMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg',
    aminoType: 'osmosis/cosmwasmpool/get-total-shares-query-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalSharesQueryMsg.typeUrl ||
                exports.EmptyStruct.is(o.getTotalShares)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalSharesQueryMsg.typeUrl ||
                exports.EmptyStruct.isSDK(o.get_total_shares)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalSharesQueryMsg.typeUrl ||
                exports.EmptyStruct.isAmino(o.get_total_shares)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.getTotalShares !== undefined) {
            exports.EmptyStruct.encode(message.getTotalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalSharesQueryMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.getTotalShares = exports.EmptyStruct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTotalSharesQueryMsg();
        message.getTotalShares =
            object.getTotalShares !== undefined && object.getTotalShares !== null
                ? exports.EmptyStruct.fromPartial(object.getTotalShares)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTotalSharesQueryMsg();
        if (object.get_total_shares !== undefined &&
            object.get_total_shares !== null) {
            message.getTotalShares = exports.EmptyStruct.fromAmino(object.get_total_shares);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.get_total_shares = message.getTotalShares
            ? exports.EmptyStruct.toAmino(message.getTotalShares)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTotalSharesQueryMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/get-total-shares-query-msg',
            value: exports.GetTotalSharesQueryMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetTotalSharesQueryMsg.decode(message.value);
    },
    toProto(message) {
        return exports.GetTotalSharesQueryMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsg',
            value: exports.GetTotalSharesQueryMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetTotalSharesQueryMsg.typeUrl, exports.GetTotalSharesQueryMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTotalSharesQueryMsg.aminoType, exports.GetTotalSharesQueryMsg.typeUrl);
function createBaseGetTotalSharesQueryMsgResponse() {
    return {
        totalShares: '',
    };
}
exports.GetTotalSharesQueryMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/get-total-shares-query-msg-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalSharesQueryMsgResponse.typeUrl ||
                typeof o.totalShares === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalSharesQueryMsgResponse.typeUrl ||
                typeof o.total_shares === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalSharesQueryMsgResponse.typeUrl ||
                typeof o.total_shares === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalShares !== '') {
            writer.uint32(10).string(message.totalShares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalSharesQueryMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTotalSharesQueryMsgResponse();
        message.totalShares = object.totalShares ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTotalSharesQueryMsgResponse();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = object.total_shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares =
            message.totalShares === '' ? undefined : message.totalShares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTotalSharesQueryMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/get-total-shares-query-msg-response',
            value: exports.GetTotalSharesQueryMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetTotalSharesQueryMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTotalSharesQueryMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.GetTotalSharesQueryMsgResponse',
            value: exports.GetTotalSharesQueryMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetTotalSharesQueryMsgResponse.typeUrl, exports.GetTotalSharesQueryMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTotalSharesQueryMsgResponse.aminoType, exports.GetTotalSharesQueryMsgResponse.typeUrl);
