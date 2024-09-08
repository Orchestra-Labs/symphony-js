//@ts-nocheck
import { Params } from './treasury';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        taxRate: '',
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.treasury.v1beta1.GenesisState',
    aminoType: 'osmosis/treasury/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.is(o.params) && typeof o.taxRate === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isSDK(o.params) && typeof o.tax_rate === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isAmino(o.params) && typeof o.tax_rate === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.taxRate !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.taxRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.taxRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        message.taxRate = object.taxRate ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.tax_rate !== undefined && object.tax_rate !== null) {
            message.taxRate = object.tax_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.tax_rate = message.taxRate === '' ? undefined : message.taxRate;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/genesis-state',
            value: GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
