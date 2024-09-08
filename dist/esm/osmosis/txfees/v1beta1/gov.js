//@ts-nocheck
import { FeeToken } from './feetoken';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseUpdateFeeTokenProposal() {
    return {
        $typeUrl: '/osmosis.txfees.v1beta1.UpdateFeeTokenProposal',
        title: '',
        description: '',
        feetokens: [],
    };
}
export const UpdateFeeTokenProposal = {
    typeUrl: '/osmosis.txfees.v1beta1.UpdateFeeTokenProposal',
    aminoType: 'osmosis/UpdateFeeTokenProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === UpdateFeeTokenProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || FeeToken.is(o.feetokens[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UpdateFeeTokenProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || FeeToken.isSDK(o.feetokens[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UpdateFeeTokenProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || FeeToken.isAmino(o.feetokens[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.feetokens) {
            FeeToken.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFeeTokenProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
        const message = createBaseUpdateFeeTokenProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.feetokens =
            object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateFeeTokenProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.feetokens = object.feetokens?.map(e => FeeToken.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.feetokens = message.feetokens;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateFeeTokenProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/UpdateFeeTokenProposal',
            value: UpdateFeeTokenProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UpdateFeeTokenProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateFeeTokenProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.txfees.v1beta1.UpdateFeeTokenProposal',
            value: UpdateFeeTokenProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UpdateFeeTokenProposal.typeUrl, UpdateFeeTokenProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateFeeTokenProposal.aminoType, UpdateFeeTokenProposal.typeUrl);
