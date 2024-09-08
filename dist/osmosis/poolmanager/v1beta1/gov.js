"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomPairTakerFeeProposal = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseDenomPairTakerFeeProposal() {
    return {
        title: '',
        description: '',
        denomPairTakerFee: [],
    };
}
exports.DenomPairTakerFeeProposal = {
    typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal',
    aminoType: 'osmosis/poolmanager/denom-pair-taker-fee-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.DenomPairTakerFeeProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.denomPairTakerFee) &&
                    (!o.denomPairTakerFee.length ||
                        tx_1.DenomPairTakerFee.is(o.denomPairTakerFee[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.DenomPairTakerFeeProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        tx_1.DenomPairTakerFee.isSDK(o.denom_pair_taker_fee[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.DenomPairTakerFeeProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.denom_pair_taker_fee) &&
                    (!o.denom_pair_taker_fee.length ||
                        tx_1.DenomPairTakerFee.isAmino(o.denom_pair_taker_fee[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomPairTakerFee) {
            tx_1.DenomPairTakerFee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.denomPairTakerFee.push(tx_1.DenomPairTakerFee.decode(reader, reader.uint32()));
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
            object.denomPairTakerFee?.map(e => tx_1.DenomPairTakerFee.fromPartial(e)) ||
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
            object.denom_pair_taker_fee?.map(e => tx_1.DenomPairTakerFee.fromAmino(e)) ||
                [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.denomPairTakerFee) {
            obj.denom_pair_taker_fee = message.denomPairTakerFee.map(e => e ? tx_1.DenomPairTakerFee.toAmino(e) : undefined);
        }
        else {
            obj.denom_pair_taker_fee = message.denomPairTakerFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomPairTakerFeeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/denom-pair-taker-fee-proposal',
            value: exports.DenomPairTakerFeeProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.DenomPairTakerFeeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.DenomPairTakerFeeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal',
            value: exports.DenomPairTakerFeeProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.DenomPairTakerFeeProposal.typeUrl, exports.DenomPairTakerFeeProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DenomPairTakerFeeProposal.aminoType, exports.DenomPairTakerFeeProposal.typeUrl);
