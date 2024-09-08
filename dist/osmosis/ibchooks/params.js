"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
function createBaseParams() {
    return {
        allowedAsyncAckContracts: [],
    };
}
exports.Params = {
    typeUrl: '/osmosis.ibchooks.Params',
    aminoType: 'osmosis/ibchooks/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.allowedAsyncAckContracts) &&
                    (!o.allowedAsyncAckContracts.length ||
                        typeof o.allowedAsyncAckContracts[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.allowed_async_ack_contracts) &&
                    (!o.allowed_async_ack_contracts.length ||
                        typeof o.allowed_async_ack_contracts[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.allowed_async_ack_contracts) &&
                    (!o.allowed_async_ack_contracts.length ||
                        typeof o.allowed_async_ack_contracts[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowedAsyncAckContracts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowedAsyncAckContracts.push(reader.string());
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
        message.allowedAsyncAckContracts =
            object.allowedAsyncAckContracts?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.allowedAsyncAckContracts =
            object.allowed_async_ack_contracts?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowedAsyncAckContracts) {
            obj.allowed_async_ack_contracts = message.allowedAsyncAckContracts.map(e => e);
        }
        else {
            obj.allowed_async_ack_contracts = message.allowedAsyncAckContracts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ibchooks/params',
            value: exports.Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.ibchooks.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
