//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { bytesFromBase64, base64FromBytes } from '../../../helpers';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParams() {
    return {
        exchangePool: new Uint8Array(),
    };
}
export const Params = {
    typeUrl: '/osmosis.market.v1beta1.Params',
    aminoType: 'osmosis/market/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                o.exchangePool instanceof Uint8Array ||
                typeof o.exchangePool === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                o.exchange_pool instanceof Uint8Array ||
                typeof o.exchange_pool === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                o.exchange_pool instanceof Uint8Array ||
                typeof o.exchange_pool === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.exchangePool.length !== 0) {
            writer.uint32(10).bytes(message.exchangePool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.exchangePool = bytesFromBase64(object.exchange_pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exchange_pool = message.exchangePool
            ? base64FromBytes(message.exchangePool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/market/params',
            value: Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.market.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
