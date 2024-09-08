"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeeTokenProposal = void 0;
//@ts-nocheck
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseUpdateFeeTokenProposal() {
    return {
        $typeUrl: '/osmosis.txfees.v1beta1.UpdateFeeTokenProposal',
        title: '',
        description: '',
        feetokens: [],
    };
}
exports.UpdateFeeTokenProposal = {
    typeUrl: '/osmosis.txfees.v1beta1.UpdateFeeTokenProposal',
    aminoType: 'osmosis/UpdateFeeTokenProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UpdateFeeTokenProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || feetoken_1.FeeToken.is(o.feetokens[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UpdateFeeTokenProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || feetoken_1.FeeToken.isSDK(o.feetokens[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UpdateFeeTokenProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.feetokens) &&
                    (!o.feetokens.length || feetoken_1.FeeToken.isAmino(o.feetokens[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.feetokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.feetokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
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
            object.feetokens?.map(e => feetoken_1.FeeToken.fromPartial(e)) || [];
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
        message.feetokens = object.feetokens?.map(e => feetoken_1.FeeToken.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? feetoken_1.FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.feetokens = message.feetokens;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateFeeTokenProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/UpdateFeeTokenProposal',
            value: exports.UpdateFeeTokenProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateFeeTokenProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateFeeTokenProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.txfees.v1beta1.UpdateFeeTokenProposal',
            value: exports.UpdateFeeTokenProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UpdateFeeTokenProposal.typeUrl, exports.UpdateFeeTokenProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpdateFeeTokenProposal.aminoType, exports.UpdateFeeTokenProposal.typeUrl);
