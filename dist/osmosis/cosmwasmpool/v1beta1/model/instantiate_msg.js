"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstantiateMsg = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
function createBaseInstantiateMsg() {
    return {
        poolAssetDenoms: [],
    };
}
exports.InstantiateMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.InstantiateMsg',
    aminoType: 'osmosis/cosmwasmpool/instantiate-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.InstantiateMsg.typeUrl ||
                (Array.isArray(o.poolAssetDenoms) &&
                    (!o.poolAssetDenoms.length ||
                        typeof o.poolAssetDenoms[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.InstantiateMsg.typeUrl ||
                (Array.isArray(o.pool_asset_denoms) &&
                    (!o.pool_asset_denoms.length ||
                        typeof o.pool_asset_denoms[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.InstantiateMsg.typeUrl ||
                (Array.isArray(o.pool_asset_denoms) &&
                    (!o.pool_asset_denoms.length ||
                        typeof o.pool_asset_denoms[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolAssetDenoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolAssetDenoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInstantiateMsg();
        message.poolAssetDenoms = object.poolAssetDenoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInstantiateMsg();
        message.poolAssetDenoms = object.pool_asset_denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolAssetDenoms) {
            obj.pool_asset_denoms = message.poolAssetDenoms.map(e => e);
        }
        else {
            obj.pool_asset_denoms = message.poolAssetDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InstantiateMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/instantiate-msg',
            value: exports.InstantiateMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.InstantiateMsg.decode(message.value);
    },
    toProto(message) {
        return exports.InstantiateMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.InstantiateMsg',
            value: exports.InstantiateMsg.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.InstantiateMsg.typeUrl, exports.InstantiateMsg);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InstantiateMsg.aminoType, exports.InstantiateMsg.typeUrl);
