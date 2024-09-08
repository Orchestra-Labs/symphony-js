//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseTrackedVolume() {
    return {
        amount: [],
    };
}
export const TrackedVolume = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TrackedVolume',
    aminoType: 'osmosis/poolmanager/tracked-volume',
    is(o) {
        return (o &&
            (o.$typeUrl === TrackedVolume.typeUrl ||
                (Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TrackedVolume.typeUrl ||
                (Array.isArray(o.amount) &&
                    (!o.amount.length || Coin.isSDK(o.amount[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TrackedVolume.typeUrl ||
                (Array.isArray(o.amount) &&
                    (!o.amount.length || Coin.isAmino(o.amount[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrackedVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrackedVolume();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TrackedVolume.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/tracked-volume',
            value: TrackedVolume.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TrackedVolume.decode(message.value);
    },
    toProto(message) {
        return TrackedVolume.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TrackedVolume',
            value: TrackedVolume.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TrackedVolume.typeUrl, TrackedVolume);
GlobalDecoderRegistry.registerAminoProtoMapping(TrackedVolume.aminoType, TrackedVolume.typeUrl);
