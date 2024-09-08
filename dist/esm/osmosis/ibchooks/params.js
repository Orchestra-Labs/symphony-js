//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseParams() {
    return {
        allowedAsyncAckContracts: [],
    };
}
export const Params = {
    typeUrl: '/osmosis.ibchooks.Params',
    aminoType: 'osmosis/ibchooks/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.allowedAsyncAckContracts) &&
                    (!o.allowedAsyncAckContracts.length ||
                        typeof o.allowedAsyncAckContracts[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.allowed_async_ack_contracts) &&
                    (!o.allowed_async_ack_contracts.length ||
                        typeof o.allowed_async_ack_contracts[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.allowed_async_ack_contracts) &&
                    (!o.allowed_async_ack_contracts.length ||
                        typeof o.allowed_async_ack_contracts[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.allowedAsyncAckContracts) {
            writer.uint32(10).string(v);
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
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ibchooks/params',
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
            typeUrl: '/osmosis.ibchooks.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
