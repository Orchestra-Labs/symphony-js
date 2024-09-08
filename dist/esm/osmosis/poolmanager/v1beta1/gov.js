//@ts-nocheck
import { DenomPairTakerFee, } from './tx';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseDenomPairTakerFeeProposal() {
    return {
        title: '',
        description: '',
        denomPairTakerFee: [],
    };
}
export const DenomPairTakerFeeProposal = {
    typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal',
    aminoType: 'osmosis/poolmanager/denom-pair-taker-fee-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === DenomPairTakerFeeProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.denomPairTakerFee) &&
                    (!o.denomPairTakerFee.length ||
                        DenomPairTakerFee.is(o.denomPairTakerFee[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === DenomPairTakerFeeProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        DenomPairTakerFee.isSDK(o.denom_pair_taker_fee[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === DenomPairTakerFeeProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        DenomPairTakerFee.isAmino(o.denom_pair_taker_fee[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomPairTakerFee) {
            DenomPairTakerFee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomPairTakerFeeProposal();
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
                    message.denomPairTakerFee.push(DenomPairTakerFee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomPairTakerFeeProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.denomPairTakerFee =
            object.denomPairTakerFee?.map(e => DenomPairTakerFee.fromPartial(e)) ||
                [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomPairTakerFeeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.denomPairTakerFee =
            object.denom_pair_taker_fee?.map(e => DenomPairTakerFee.fromAmino(e)) ||
                [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.denomPairTakerFee) {
            obj.denom_pair_taker_fee = message.denomPairTakerFee.map(e => e ? DenomPairTakerFee.toAmino(e) : undefined);
        }
        else {
            obj.denom_pair_taker_fee = message.denomPairTakerFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DenomPairTakerFeeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/denom-pair-taker-fee-proposal',
            value: DenomPairTakerFeeProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return DenomPairTakerFeeProposal.decode(message.value);
    },
    toProto(message) {
        return DenomPairTakerFeeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal',
            value: DenomPairTakerFeeProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(DenomPairTakerFeeProposal.typeUrl, DenomPairTakerFeeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(DenomPairTakerFeeProposal.aminoType, DenomPairTakerFeeProposal.typeUrl);
