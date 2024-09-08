"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitPoolExecuteMsgResponse = exports.ExitPoolExecuteMsgRequest = exports.JoinPoolExecuteMsgResponse = exports.JoinPoolExecuteMsgRequest = exports.EmptyRequest = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
function createBaseEmptyRequest() {
    return {};
}
exports.EmptyRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.EmptyRequest',
    aminoType: 'osmosis/cosmwasmpool/empty-request',
    is(o) {
        return o && o.$typeUrl === exports.EmptyRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.EmptyRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.EmptyRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EmptyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/empty-request',
            value: exports.EmptyRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.EmptyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EmptyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.EmptyRequest',
            value: exports.EmptyRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.EmptyRequest.typeUrl, exports.EmptyRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EmptyRequest.aminoType, exports.EmptyRequest.typeUrl);
function createBaseJoinPoolExecuteMsgRequest() {
    return {
        joinPool: exports.EmptyRequest.fromPartial({}),
    };
}
exports.JoinPoolExecuteMsgRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest',
    aminoType: 'osmosis/cosmwasmpool/join-pool-execute-msg-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.JoinPoolExecuteMsgRequest.typeUrl ||
                exports.EmptyRequest.is(o.joinPool)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.JoinPoolExecuteMsgRequest.typeUrl ||
                exports.EmptyRequest.isSDK(o.join_pool)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.JoinPoolExecuteMsgRequest.typeUrl ||
                exports.EmptyRequest.isAmino(o.join_pool)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.joinPool !== undefined) {
            exports.EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinPoolExecuteMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.joinPool = exports.EmptyRequest.decode(reader, reader.uint32());
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
                ? exports.EmptyRequest.fromPartial(object.joinPool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseJoinPoolExecuteMsgRequest();
        if (object.join_pool !== undefined && object.join_pool !== null) {
            message.joinPool = exports.EmptyRequest.fromAmino(object.join_pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.join_pool = message.joinPool
            ? exports.EmptyRequest.toAmino(message.joinPool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.JoinPoolExecuteMsgRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/join-pool-execute-msg-request',
            value: exports.JoinPoolExecuteMsgRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.JoinPoolExecuteMsgRequest.decode(message.value);
    },
    toProto(message) {
        return exports.JoinPoolExecuteMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest',
            value: exports.JoinPoolExecuteMsgRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.JoinPoolExecuteMsgRequest.typeUrl, exports.JoinPoolExecuteMsgRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.JoinPoolExecuteMsgRequest.aminoType, exports.JoinPoolExecuteMsgRequest.typeUrl);
function createBaseJoinPoolExecuteMsgResponse() {
    return {};
}
exports.JoinPoolExecuteMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/join-pool-execute-msg-response',
    is(o) {
        return o && o.$typeUrl === exports.JoinPoolExecuteMsgResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.JoinPoolExecuteMsgResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.JoinPoolExecuteMsgResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.JoinPoolExecuteMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/join-pool-execute-msg-response',
            value: exports.JoinPoolExecuteMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.JoinPoolExecuteMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.JoinPoolExecuteMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse',
            value: exports.JoinPoolExecuteMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.JoinPoolExecuteMsgResponse.typeUrl, exports.JoinPoolExecuteMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.JoinPoolExecuteMsgResponse.aminoType, exports.JoinPoolExecuteMsgResponse.typeUrl);
function createBaseExitPoolExecuteMsgRequest() {
    return {
        exitPool: exports.EmptyRequest.fromPartial({}),
    };
}
exports.ExitPoolExecuteMsgRequest = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest',
    aminoType: 'osmosis/cosmwasmpool/exit-pool-execute-msg-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ExitPoolExecuteMsgRequest.typeUrl ||
                exports.EmptyRequest.is(o.exitPool)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ExitPoolExecuteMsgRequest.typeUrl ||
                exports.EmptyRequest.isSDK(o.exit_pool)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ExitPoolExecuteMsgRequest.typeUrl ||
                exports.EmptyRequest.isAmino(o.exit_pool)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exitPool !== undefined) {
            exports.EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExitPoolExecuteMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exitPool = exports.EmptyRequest.decode(reader, reader.uint32());
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
                ? exports.EmptyRequest.fromPartial(object.exitPool)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseExitPoolExecuteMsgRequest();
        if (object.exit_pool !== undefined && object.exit_pool !== null) {
            message.exitPool = exports.EmptyRequest.fromAmino(object.exit_pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exit_pool = message.exitPool
            ? exports.EmptyRequest.toAmino(message.exitPool)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExitPoolExecuteMsgRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/exit-pool-execute-msg-request',
            value: exports.ExitPoolExecuteMsgRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ExitPoolExecuteMsgRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ExitPoolExecuteMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest',
            value: exports.ExitPoolExecuteMsgRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ExitPoolExecuteMsgRequest.typeUrl, exports.ExitPoolExecuteMsgRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ExitPoolExecuteMsgRequest.aminoType, exports.ExitPoolExecuteMsgRequest.typeUrl);
function createBaseExitPoolExecuteMsgResponse() {
    return {};
}
exports.ExitPoolExecuteMsgResponse = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse',
    aminoType: 'osmosis/cosmwasmpool/exit-pool-execute-msg-response',
    is(o) {
        return o && o.$typeUrl === exports.ExitPoolExecuteMsgResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ExitPoolExecuteMsgResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ExitPoolExecuteMsgResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ExitPoolExecuteMsgResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/exit-pool-execute-msg-response',
            value: exports.ExitPoolExecuteMsgResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ExitPoolExecuteMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ExitPoolExecuteMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse',
            value: exports.ExitPoolExecuteMsgResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ExitPoolExecuteMsgResponse.typeUrl, exports.ExitPoolExecuteMsgResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ExitPoolExecuteMsgResponse.aminoType, exports.ExitPoolExecuteMsgResponse.typeUrl);
