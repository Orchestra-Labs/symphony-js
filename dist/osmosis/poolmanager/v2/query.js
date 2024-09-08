"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotPriceResponse = exports.SpotPriceRequest = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseSpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: '',
        quoteAssetDenom: '',
    };
}
exports.SpotPriceRequest = {
    typeUrl: '/osmosis.poolmanager.v2.SpotPriceRequest',
    aminoType: 'osmosis/poolmanager/v2/spot-price-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.baseAssetDenom === 'string' &&
                    typeof o.quoteAssetDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.base_asset_denom === 'string' &&
                    typeof o.quote_asset_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== '') {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== '') {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotPriceRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.baseAssetDenom = object.baseAssetDenom ?? '';
        message.quoteAssetDenom = object.quoteAssetDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPriceRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset_denom !== undefined &&
            object.base_asset_denom !== null) {
            message.baseAssetDenom = object.base_asset_denom;
        }
        if (object.quote_asset_denom !== undefined &&
            object.quote_asset_denom !== null) {
            message.quoteAssetDenom = object.quote_asset_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.base_asset_denom =
            message.baseAssetDenom === '' ? undefined : message.baseAssetDenom;
        obj.quote_asset_denom =
            message.quoteAssetDenom === '' ? undefined : message.quoteAssetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/v2/spot-price-request',
            value: exports.SpotPriceRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v2.SpotPriceRequest',
            value: exports.SpotPriceRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPriceRequest.typeUrl, exports.SpotPriceRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPriceRequest.aminoType, exports.SpotPriceRequest.typeUrl);
function createBaseSpotPriceResponse() {
    return {
        spotPrice: '',
    };
}
exports.SpotPriceResponse = {
    typeUrl: '/osmosis.poolmanager.v2.SpotPriceResponse',
    aminoType: 'osmosis/poolmanager/v2/spot-price-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceResponse.typeUrl ||
                typeof o.spotPrice === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceResponse.typeUrl ||
                typeof o.spot_price === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SpotPriceResponse.typeUrl ||
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
        const message = createBaseSpotPriceResponse();
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
        const message = createBaseSpotPriceResponse();
        message.spotPrice = object.spotPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotPriceResponse();
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
        return exports.SpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/v2/spot-price-response',
            value: exports.SpotPriceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v2.SpotPriceResponse',
            value: exports.SpotPriceResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SpotPriceResponse.typeUrl, exports.SpotPriceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SpotPriceResponse.aminoType, exports.SpotPriceResponse.typeUrl);
