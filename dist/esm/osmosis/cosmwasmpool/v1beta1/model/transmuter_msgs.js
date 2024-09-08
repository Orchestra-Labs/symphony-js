//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseEmptyRequest() {
    return {};
}
export const EmptyRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.EmptyRequest',
    aminoType: 'osmosis/cosmwasmpool/empty-request',
    is(o) {
        return o && o.$typeUrl === EmptyRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === EmptyRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === EmptyRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseEmptyRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseEmptyRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return EmptyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/empty-request',
            value: EmptyRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return EmptyRequest.decode(message.value);
    },
    toProto(message) {
        return EmptyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.EmptyRequest',
            value: EmptyRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(EmptyRequest.typeUrl, EmptyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EmptyRequest.aminoType, EmptyRequest.typeUrl);
function createBaseJoinPoolExecuteMsgRequest() {
    return {
        joinPool: EmptyRequest.fromPartial({}),
    };
}
export const JoinPoolExecuteMsgRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest',
    aminoType: 'osmosis/cosmwasmpool/join-pool-execute-msg-request',
    is(o) {
        return (o &&
            (o.$typeUrl === JoinPoolExecuteMsgRequest.typeUrl ||
                EmptyRequest.is(o.joinPool)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === JoinPoolExecuteMsgRequest.typeUrl ||
                EmptyRequest.isSDK(o.join_pool)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === JoinPoolExecuteMsgRequest.typeUrl ||
                EmptyRequest.isAmino(o.join_pool)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.joinPool !== undefined) {
            EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinPoolExecuteMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.joinPool = EmptyRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseJoinPoolExecuteMsgRequest();
        message.joinPool =
            object.joinPool !== undefined && object.joinPool !== null
                ? EmptyRequest.fromPartial(object.joinPool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseJoinPoolExecuteMsgRequest();
        if (object.join_pool !== undefined && object.join_pool !== null) {
            message.joinPool = EmptyRequest.fromAmino(object.join_pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.join_pool = message.joinPool
            ? EmptyRequest.toAmino(message.joinPool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return JoinPoolExecuteMsgRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/join-pool-execute-msg-request',
            value: JoinPoolExecuteMsgRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return JoinPoolExecuteMsgRequest.decode(message.value);
    },
    toProto(message) {
        return JoinPoolExecuteMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest',
            value: JoinPoolExecuteMsgRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(JoinPoolExecuteMsgRequest.typeUrl, JoinPoolExecuteMsgRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(JoinPoolExecuteMsgRequest.aminoType, JoinPoolExecuteMsgRequest.typeUrl);
function createBaseJoinPoolExecuteMsgResponse() {
    return {};
}
export const JoinPoolExecuteMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/join-pool-execute-msg-response',
    is(o) {
        return o && o.$typeUrl === JoinPoolExecuteMsgResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === JoinPoolExecuteMsgResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === JoinPoolExecuteMsgResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinPoolExecuteMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseJoinPoolExecuteMsgResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseJoinPoolExecuteMsgResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return JoinPoolExecuteMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/join-pool-execute-msg-response',
            value: JoinPoolExecuteMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return JoinPoolExecuteMsgResponse.decode(message.value);
    },
    toProto(message) {
        return JoinPoolExecuteMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse',
            value: JoinPoolExecuteMsgResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(JoinPoolExecuteMsgResponse.typeUrl, JoinPoolExecuteMsgResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(JoinPoolExecuteMsgResponse.aminoType, JoinPoolExecuteMsgResponse.typeUrl);
function createBaseExitPoolExecuteMsgRequest() {
    return {
        exitPool: EmptyRequest.fromPartial({}),
    };
}
export const ExitPoolExecuteMsgRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest',
    aminoType: 'osmosis/cosmwasmpool/exit-pool-execute-msg-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ExitPoolExecuteMsgRequest.typeUrl ||
                EmptyRequest.is(o.exitPool)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ExitPoolExecuteMsgRequest.typeUrl ||
                EmptyRequest.isSDK(o.exit_pool)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ExitPoolExecuteMsgRequest.typeUrl ||
                EmptyRequest.isAmino(o.exit_pool)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.exitPool !== undefined) {
            EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExitPoolExecuteMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exitPool = EmptyRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExitPoolExecuteMsgRequest();
        message.exitPool =
            object.exitPool !== undefined && object.exitPool !== null
                ? EmptyRequest.fromPartial(object.exitPool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseExitPoolExecuteMsgRequest();
        if (object.exit_pool !== undefined && object.exit_pool !== null) {
            message.exitPool = EmptyRequest.fromAmino(object.exit_pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exit_pool = message.exitPool
            ? EmptyRequest.toAmino(message.exitPool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ExitPoolExecuteMsgRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/exit-pool-execute-msg-request',
            value: ExitPoolExecuteMsgRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ExitPoolExecuteMsgRequest.decode(message.value);
    },
    toProto(message) {
        return ExitPoolExecuteMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest',
            value: ExitPoolExecuteMsgRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ExitPoolExecuteMsgRequest.typeUrl, ExitPoolExecuteMsgRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ExitPoolExecuteMsgRequest.aminoType, ExitPoolExecuteMsgRequest.typeUrl);
function createBaseExitPoolExecuteMsgResponse() {
    return {};
}
export const ExitPoolExecuteMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/exit-pool-execute-msg-response',
    is(o) {
        return o && o.$typeUrl === ExitPoolExecuteMsgResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ExitPoolExecuteMsgResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ExitPoolExecuteMsgResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExitPoolExecuteMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseExitPoolExecuteMsgResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseExitPoolExecuteMsgResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ExitPoolExecuteMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/exit-pool-execute-msg-response',
            value: ExitPoolExecuteMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ExitPoolExecuteMsgResponse.decode(message.value);
    },
    toProto(message) {
        return ExitPoolExecuteMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse',
            value: ExitPoolExecuteMsgResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ExitPoolExecuteMsgResponse.typeUrl, ExitPoolExecuteMsgResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ExitPoolExecuteMsgResponse.aminoType, ExitPoolExecuteMsgResponse.typeUrl);
