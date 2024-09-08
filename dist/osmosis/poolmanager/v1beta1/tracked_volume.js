"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedVolume = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseTrackedVolume() {
    return {
        amount: [],
    };
}
exports.TrackedVolume = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TrackedVolume',
    aminoType: 'osmosis/poolmanager/tracked-volume',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TrackedVolume.typeUrl ||
                (Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TrackedVolume.typeUrl ||
                (Array.isArray(o.amount) &&
                    (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TrackedVolume.typeUrl ||
                (Array.isArray(o.amount) &&
                    (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrackedVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTrackedVolume();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrackedVolume();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TrackedVolume.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/tracked-volume',
            value: exports.TrackedVolume.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TrackedVolume.decode(message.value);
    },
    toProto(message) {
        return exports.TrackedVolume.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TrackedVolume',
            value: exports.TrackedVolume.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TrackedVolume.typeUrl, exports.TrackedVolume);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TrackedVolume.aminoType, exports.TrackedVolume.typeUrl);
