//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseMsgEmitIBCAck() {
    return {
        sender: '',
        packetSequence: BigInt(0),
        channel: '',
    };
}
export const MsgEmitIBCAck = {
    typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
    aminoType: 'osmosis/ibchooks/emit-ibc-ack',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgEmitIBCAck.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.packetSequence === 'bigint' &&
                    typeof o.channel === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgEmitIBCAck.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.packet_sequence === 'bigint' &&
                    typeof o.channel === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgEmitIBCAck.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.packet_sequence === 'bigint' &&
                    typeof o.channel === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.packetSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.packetSequence);
        }
        if (message.channel !== '') {
            writer.uint32(26).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEmitIBCAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.packetSequence = reader.uint64();
                    break;
                case 3:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgEmitIBCAck();
        message.sender = object.sender ?? '';
        message.packetSequence =
            object.packetSequence !== undefined && object.packetSequence !== null
                ? BigInt(object.packetSequence.toString())
                : BigInt(0);
        message.channel = object.channel ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEmitIBCAck();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.packet_sequence !== undefined &&
            object.packet_sequence !== null) {
            message.packetSequence = BigInt(object.packet_sequence);
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = object.channel;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.packet_sequence =
            message.packetSequence !== BigInt(0)
                ? message.packetSequence.toString()
                : undefined;
        obj.channel = message.channel === '' ? undefined : message.channel;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEmitIBCAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ibchooks/emit-ibc-ack',
            value: MsgEmitIBCAck.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgEmitIBCAck.decode(message.value);
    },
    toProto(message) {
        return MsgEmitIBCAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
            value: MsgEmitIBCAck.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgEmitIBCAck.typeUrl, MsgEmitIBCAck);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgEmitIBCAck.aminoType, MsgEmitIBCAck.typeUrl);
function createBaseMsgEmitIBCAckResponse() {
    return {
        contractResult: '',
        ibcAck: '',
    };
}
export const MsgEmitIBCAckResponse = {
    typeUrl: '/osmosis.ibchooks.MsgEmitIBCAckResponse',
    aminoType: 'osmosis/ibchooks/emit-ibc-ack-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgEmitIBCAckResponse.typeUrl ||
                (typeof o.contractResult === 'string' && typeof o.ibcAck === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgEmitIBCAckResponse.typeUrl ||
                (typeof o.contract_result === 'string' &&
                    typeof o.ibc_ack === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgEmitIBCAckResponse.typeUrl ||
                (typeof o.contract_result === 'string' &&
                    typeof o.ibc_ack === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.contractResult !== '') {
            writer.uint32(10).string(message.contractResult);
        }
        if (message.ibcAck !== '') {
            writer.uint32(18).string(message.ibcAck);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEmitIBCAckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractResult = reader.string();
                    break;
                case 2:
                    message.ibcAck = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgEmitIBCAckResponse();
        message.contractResult = object.contractResult ?? '';
        message.ibcAck = object.ibcAck ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEmitIBCAckResponse();
        if (object.contract_result !== undefined &&
            object.contract_result !== null) {
            message.contractResult = object.contract_result;
        }
        if (object.ibc_ack !== undefined && object.ibc_ack !== null) {
            message.ibcAck = object.ibc_ack;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_result =
            message.contractResult === '' ? undefined : message.contractResult;
        obj.ibc_ack = message.ibcAck === '' ? undefined : message.ibcAck;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEmitIBCAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/ibchooks/emit-ibc-ack-response',
            value: MsgEmitIBCAckResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgEmitIBCAckResponse.decode(message.value);
    },
    toProto(message) {
        return MsgEmitIBCAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.ibchooks.MsgEmitIBCAckResponse',
            value: MsgEmitIBCAckResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgEmitIBCAckResponse.typeUrl, MsgEmitIBCAckResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgEmitIBCAckResponse.aminoType, MsgEmitIBCAckResponse.typeUrl);
