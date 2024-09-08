//@ts-nocheck
import { FeeToken } from './feetoken';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseGenesisState() {
    return {
        basedenom: '',
        feetokens: [],
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.txfees.v1beta1.GenesisState',
    aminoType: 'osmosis/txfees/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (typeof o.basedenom === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || FeeToken.is(o.feetokens[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (typeof o.basedenom === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || FeeToken.isSDK(o.feetokens[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (typeof o.basedenom === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || FeeToken.isAmino(o.feetokens[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.basedenom !== '') {
            writer.uint32(10).string(message.basedenom);
        }
        for (const v of message.feetokens) {
            FeeToken.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.basedenom = reader.string();
                    break;
                case 2:
                    message.feetokens.push(FeeToken.decode(reader, reader.uint32()));
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
        message.basedenom = object.basedenom ?? '';
        message.feetokens =
            object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.basedenom !== undefined && object.basedenom !== null) {
            message.basedenom = object.basedenom;
        }
        message.feetokens = object.feetokens?.map(e => FeeToken.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basedenom = message.basedenom === '' ? undefined : message.basedenom;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.feetokens = message.feetokens;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/txfees/genesis-state',
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
            typeUrl: '/osmosis.txfees.v1beta1.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
