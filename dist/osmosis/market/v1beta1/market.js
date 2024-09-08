"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        exchangePool: new Uint8Array(),
    };
}
exports.Params = {
    typeUrl: '/osmosis.market.v1beta1.Params',
    aminoType: 'osmosis/market/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                o.exchangePool instanceof Uint8Array ||
                typeof o.exchangePool === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                o.exchange_pool instanceof Uint8Array ||
                typeof o.exchange_pool === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                o.exchange_pool instanceof Uint8Array ||
                typeof o.exchange_pool === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exchangePool.length !== 0) {
            writer.uint32(10).bytes(message.exchangePool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangePool = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.exchangePool = object.exchangePool ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.exchange_pool !== undefined && object.exchange_pool !== null) {
            message.exchangePool = (0, helpers_1.bytesFromBase64)(object.exchange_pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exchange_pool = message.exchangePool
            ? (0, helpers_1.base64FromBytes)(message.exchangePool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/params',
            value: exports.Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
