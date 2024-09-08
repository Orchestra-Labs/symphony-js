//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParams() {
    return {
        denomCreationFee: [],
        denomCreationGasConsume: undefined,
    };
}
export const Params = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.Params',
    aminoType: 'osmosis/tokenfactory/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.denomCreationFee) &&
                    (!o.denomCreationFee.length || Coin.is(o.denomCreationFee[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.denom_creation_fee) &&
                    (!o.denom_creation_fee.length ||
                        Coin.isSDK(o.denom_creation_fee[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.denom_creation_fee) &&
                    (!o.denom_creation_fee.length ||
                        Coin.isAmino(o.denom_creation_fee[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denomCreationFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.denomCreationGasConsume !== undefined) {
            writer.uint32(16).uint64(message.denomCreationGasConsume);
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
                    message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.denomCreationGasConsume = reader.uint64();
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
        message.denomCreationFee =
            object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
        message.denomCreationGasConsume =
            object.denomCreationGasConsume !== undefined &&
                object.denomCreationGasConsume !== null
                ? BigInt(object.denomCreationGasConsume.toString())
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.denomCreationFee =
            object.denom_creation_fee?.map(e => Coin.fromAmino(e)) || [];
        if (object.denom_creation_gas_consume !== undefined &&
            object.denom_creation_gas_consume !== null) {
            message.denomCreationGasConsume = BigInt(object.denom_creation_gas_consume);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.denom_creation_fee = message.denomCreationFee;
        }
        obj.denom_creation_gas_consume =
            message.denomCreationGasConsume !== BigInt(0)
                ? message.denomCreationGasConsume.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/params',
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
            typeUrl: '/osmosis.tokenfactory.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
