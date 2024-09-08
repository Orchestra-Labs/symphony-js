//@ts-nocheck
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
import { Decimal } from '@cosmjs/math';
import { toTimestamp, fromTimestamp } from '../../helpers';
function createBaseMsgSuperfluidDelegate() {
    return {
        sender: '',
        lockId: BigInt(0),
        valAddr: '',
    };
}
export const MsgSuperfluidDelegate = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
    aminoType: 'osmosis/superfluid-delegate',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lockId === 'bigint' &&
                    typeof o.valAddr === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    typeof o.val_addr === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    typeof o.val_addr === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.valAddr !== '') {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidDelegate();
        message.sender = object.sender ?? '';
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.valAddr = object.valAddr ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegate',
            value: MsgSuperfluidDelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
            value: MsgSuperfluidDelegate.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidDelegate.typeUrl, MsgSuperfluidDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidDelegate.aminoType, MsgSuperfluidDelegate.typeUrl);
function createBaseMsgSuperfluidDelegateResponse() {
    return {};
}
export const MsgSuperfluidDelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegateResponse',
    aminoType: 'osmosis/superfluid-delegate-response',
    is(o) {
        return o && o.$typeUrl === MsgSuperfluidDelegateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSuperfluidDelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSuperfluidDelegateResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        const message = createBaseMsgSuperfluidDelegateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSuperfluidDelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegate-response',
            value: MsgSuperfluidDelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegateResponse',
            value: MsgSuperfluidDelegateResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidDelegateResponse.typeUrl, MsgSuperfluidDelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidDelegateResponse.aminoType, MsgSuperfluidDelegateResponse.typeUrl);
function createBaseMsgSuperfluidUndelegate() {
    return {
        sender: '',
        lockId: BigInt(0),
    };
}
export const MsgSuperfluidUndelegate = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
    aminoType: 'osmosis/superfluid-undelegate',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegate.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lockId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegate.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegate.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        message.sender = object.sender ?? '';
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate',
            value: MsgSuperfluidUndelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidUndelegate.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
            value: MsgSuperfluidUndelegate.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidUndelegate.typeUrl, MsgSuperfluidUndelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUndelegate.aminoType, MsgSuperfluidUndelegate.typeUrl);
function createBaseMsgSuperfluidUndelegateResponse() {
    return {};
}
export const MsgSuperfluidUndelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateResponse',
    aminoType: 'osmosis/superfluid-undelegate-response',
    is(o) {
        return o && o.$typeUrl === MsgSuperfluidUndelegateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSuperfluidUndelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSuperfluidUndelegateResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        const message = createBaseMsgSuperfluidUndelegateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSuperfluidUndelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate-response',
            value: MsgSuperfluidUndelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateResponse',
            value: MsgSuperfluidUndelegateResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidUndelegateResponse.typeUrl, MsgSuperfluidUndelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUndelegateResponse.aminoType, MsgSuperfluidUndelegateResponse.typeUrl);
function createBaseMsgSuperfluidUnbondLock() {
    return {
        sender: '',
        lockId: BigInt(0),
    };
}
export const MsgSuperfluidUnbondLock = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
    aminoType: 'osmosis/superfluid-unbond-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUnbondLock.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lockId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUnbondLock.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUnbondLock.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        message.sender = object.sender ?? '';
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-unbond-lock',
            value: MsgSuperfluidUnbondLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidUnbondLock.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
            value: MsgSuperfluidUnbondLock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidUnbondLock.typeUrl, MsgSuperfluidUnbondLock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUnbondLock.aminoType, MsgSuperfluidUnbondLock.typeUrl);
function createBaseMsgSuperfluidUnbondLockResponse() {
    return {};
}
export const MsgSuperfluidUnbondLockResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLockResponse',
    aminoType: 'osmosis/superfluid-unbond-lock-response',
    is(o) {
        return o && o.$typeUrl === MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        const message = createBaseMsgSuperfluidUnbondLockResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSuperfluidUnbondLockResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-unbond-lock-response',
            value: MsgSuperfluidUnbondLockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLockResponse',
            value: MsgSuperfluidUnbondLockResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidUnbondLockResponse.typeUrl, MsgSuperfluidUnbondLockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUnbondLockResponse.aminoType, MsgSuperfluidUnbondLockResponse.typeUrl);
function createBaseMsgSuperfluidUndelegateAndUnbondLock() {
    return {
        sender: '',
        lockId: BigInt(0),
        coin: Coin.fromPartial({}),
    };
}
export const MsgSuperfluidUndelegateAndUnbondLock = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
    aminoType: 'osmosis/superfluid-undelegate-and-unbond-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegateAndUnbondLock.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lockId === 'bigint' &&
                    Coin.is(o.coin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegateAndUnbondLock.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    Coin.isSDK(o.coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegateAndUnbondLock.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    Coin.isAmino(o.coin))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.coin !== undefined) {
            Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.coin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
        message.sender = object.sender ?? '';
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidUndelegateAndUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate-and-unbond-lock',
            value: MsgSuperfluidUndelegateAndUnbondLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidUndelegateAndUnbondLock.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidUndelegateAndUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
            value: MsgSuperfluidUndelegateAndUnbondLock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidUndelegateAndUnbondLock.typeUrl, MsgSuperfluidUndelegateAndUnbondLock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUndelegateAndUnbondLock.aminoType, MsgSuperfluidUndelegateAndUnbondLock.typeUrl);
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse() {
    return {
        lockId: BigInt(0),
    };
}
export const MsgSuperfluidUndelegateAndUnbondLockResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse',
    aminoType: 'osmosis/superfluid-undelegate-and-unbond-lock-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSuperfluidUndelegateAndUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate-and-unbond-lock-response',
            value: MsgSuperfluidUndelegateAndUnbondLockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSuperfluidUndelegateAndUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSuperfluidUndelegateAndUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse',
            value: MsgSuperfluidUndelegateAndUnbondLockResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl, MsgSuperfluidUndelegateAndUnbondLockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSuperfluidUndelegateAndUnbondLockResponse.aminoType, MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl);
function createBaseMsgLockAndSuperfluidDelegate() {
    return {
        sender: '',
        coins: [],
        valAddr: '',
    };
}
export const MsgLockAndSuperfluidDelegate = {
    typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
    aminoType: 'osmosis/lock-and-superfluid-delegate',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgLockAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])) &&
                    typeof o.valAddr === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgLockAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])) &&
                    typeof o.val_addr === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgLockAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])) &&
                    typeof o.val_addr === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== '') {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        message.sender = object.sender ?? '';
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lock-and-superfluid-delegate',
            value: MsgLockAndSuperfluidDelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgLockAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return MsgLockAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
            value: MsgLockAndSuperfluidDelegate.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgLockAndSuperfluidDelegate.typeUrl, MsgLockAndSuperfluidDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockAndSuperfluidDelegate.aminoType, MsgLockAndSuperfluidDelegate.typeUrl);
function createBaseMsgLockAndSuperfluidDelegateResponse() {
    return {
        iD: BigInt(0),
    };
}
export const MsgLockAndSuperfluidDelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse',
    aminoType: 'osmosis/lock-and-superfluid-delegate-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgLockAndSuperfluidDelegateResponse.typeUrl ||
                typeof o.iD === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgLockAndSuperfluidDelegateResponse.typeUrl ||
                typeof o.ID === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgLockAndSuperfluidDelegateResponse.typeUrl ||
                typeof o.ID === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iD = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
        message.iD =
            object.iD !== undefined && object.iD !== null
                ? BigInt(object.iD.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.iD !== BigInt(0) ? message.iD.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lock-and-superfluid-delegate-response',
            value: MsgLockAndSuperfluidDelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgLockAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLockAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse',
            value: MsgLockAndSuperfluidDelegateResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgLockAndSuperfluidDelegateResponse.typeUrl, MsgLockAndSuperfluidDelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockAndSuperfluidDelegateResponse.aminoType, MsgLockAndSuperfluidDelegateResponse.typeUrl);
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegate() {
    return {
        sender: '',
        coins: [],
        valAddr: '',
        poolId: BigInt(0),
    };
}
export const MsgCreateFullRangePositionAndSuperfluidDelegate = {
    typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
    aminoType: 'osmosis/full-range-and-sf-delegate',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])) &&
                    typeof o.valAddr === 'string' &&
                    typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])) &&
                    typeof o.val_addr === 'string' &&
                    typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])) &&
                    typeof o.val_addr === 'string' &&
                    typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== '') {
            writer.uint32(26).string(message.valAddr);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(32).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                case 4:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        message.sender = object.sender ?? '';
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateFullRangePositionAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/full-range-and-sf-delegate',
            value: MsgCreateFullRangePositionAndSuperfluidDelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateFullRangePositionAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return MsgCreateFullRangePositionAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
            value: MsgCreateFullRangePositionAndSuperfluidDelegate.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl, MsgCreateFullRangePositionAndSuperfluidDelegate);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateFullRangePositionAndSuperfluidDelegate.aminoType, MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl);
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse() {
    return {
        lockID: BigInt(0),
        positionID: BigInt(0),
    };
}
export const MsgCreateFullRangePositionAndSuperfluidDelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse',
    aminoType: 'osmosis/create-full-range-position-and-superfluid-delegate-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl ||
                (typeof o.lockID === 'bigint' && typeof o.positionID === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl ||
                (typeof o.lockID === 'bigint' && typeof o.positionID === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl ||
                (typeof o.lockID === 'bigint' && typeof o.positionID === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lockID !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockID);
        }
        if (message.positionID !== BigInt(0)) {
            writer.uint32(16).uint64(message.positionID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockID = reader.uint64();
                    break;
                case 2:
                    message.positionID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
        message.lockID =
            object.lockID !== undefined && object.lockID !== null
                ? BigInt(object.lockID.toString())
                : BigInt(0);
        message.positionID =
            object.positionID !== undefined && object.positionID !== null
                ? BigInt(object.positionID.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
        if (object.lockID !== undefined && object.lockID !== null) {
            message.lockID = BigInt(object.lockID);
        }
        if (object.positionID !== undefined && object.positionID !== null) {
            message.positionID = BigInt(object.positionID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lockID =
            message.lockID !== BigInt(0) ? message.lockID.toString() : undefined;
        obj.positionID =
            message.positionID !== BigInt(0)
                ? message.positionID.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateFullRangePositionAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/create-full-range-position-and-superfluid-delegate-response',
            value: MsgCreateFullRangePositionAndSuperfluidDelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateFullRangePositionAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse',
            value: MsgCreateFullRangePositionAndSuperfluidDelegateResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl, MsgCreateFullRangePositionAndSuperfluidDelegateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateFullRangePositionAndSuperfluidDelegateResponse.aminoType, MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl);
function createBaseMsgUnPoolWhitelistedPool() {
    return {
        sender: '',
        poolId: BigInt(0),
    };
}
export const MsgUnPoolWhitelistedPool = {
    typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
    aminoType: 'osmosis/unpool-whitelisted-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgUnPoolWhitelistedPool.typeUrl ||
                (typeof o.sender === 'string' && typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgUnPoolWhitelistedPool.typeUrl ||
                (typeof o.sender === 'string' && typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgUnPoolWhitelistedPool.typeUrl ||
                (typeof o.sender === 'string' && typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        message.sender = object.sender ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnPoolWhitelistedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unpool-whitelisted-pool',
            value: MsgUnPoolWhitelistedPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUnPoolWhitelistedPool.decode(message.value);
    },
    toProto(message) {
        return MsgUnPoolWhitelistedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
            value: MsgUnPoolWhitelistedPool.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUnPoolWhitelistedPool.typeUrl, MsgUnPoolWhitelistedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnPoolWhitelistedPool.aminoType, MsgUnPoolWhitelistedPool.typeUrl);
function createBaseMsgUnPoolWhitelistedPoolResponse() {
    return {
        exitedLockIds: [],
    };
}
export const MsgUnPoolWhitelistedPoolResponse = {
    typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse',
    aminoType: 'osmosis/un-pool-whitelisted-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgUnPoolWhitelistedPoolResponse.typeUrl ||
                (Array.isArray(o.exitedLockIds) &&
                    (!o.exitedLockIds.length || typeof o.exitedLockIds[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgUnPoolWhitelistedPoolResponse.typeUrl ||
                (Array.isArray(o.exited_lock_ids) &&
                    (!o.exited_lock_ids.length ||
                        typeof o.exited_lock_ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgUnPoolWhitelistedPoolResponse.typeUrl ||
                (Array.isArray(o.exited_lock_ids) &&
                    (!o.exited_lock_ids.length ||
                        typeof o.exited_lock_ids[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.exitedLockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.exitedLockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.exitedLockIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds =
            object.exitedLockIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds = object.exited_lock_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exitedLockIds) {
            obj.exited_lock_ids = message.exitedLockIds.map(e => e.toString());
        }
        else {
            obj.exited_lock_ids = message.exitedLockIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnPoolWhitelistedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/un-pool-whitelisted-pool-response',
            value: MsgUnPoolWhitelistedPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUnPoolWhitelistedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnPoolWhitelistedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse',
            value: MsgUnPoolWhitelistedPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUnPoolWhitelistedPoolResponse.typeUrl, MsgUnPoolWhitelistedPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnPoolWhitelistedPoolResponse.aminoType, MsgUnPoolWhitelistedPoolResponse.typeUrl);
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition() {
    return {
        sender: '',
        lockId: BigInt(0),
        sharesToMigrate: Coin.fromPartial({}),
        tokenOutMins: [],
    };
}
export const MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = {
    typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
    aminoType: 'osmosis/unlock-and-migrate',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lockId === 'bigint' &&
                    Coin.is(o.sharesToMigrate) &&
                    Array.isArray(o.tokenOutMins) &&
                    (!o.tokenOutMins.length || Coin.is(o.tokenOutMins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    Coin.isSDK(o.shares_to_migrate) &&
                    Array.isArray(o.token_out_mins) &&
                    (!o.token_out_mins.length || Coin.isSDK(o.token_out_mins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    Coin.isAmino(o.shares_to_migrate) &&
                    Array.isArray(o.token_out_mins) &&
                    (!o.token_out_mins.length || Coin.isAmino(o.token_out_mins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).int64(message.lockId);
        }
        if (message.sharesToMigrate !== undefined) {
            Coin.encode(message.sharesToMigrate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.tokenOutMins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.int64();
                    break;
                case 3:
                    message.sharesToMigrate = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
        message.sender = object.sender ?? '';
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.sharesToMigrate =
            object.sharesToMigrate !== undefined && object.sharesToMigrate !== null
                ? Coin.fromPartial(object.sharesToMigrate)
                : undefined;
        message.tokenOutMins =
            object.tokenOutMins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.shares_to_migrate !== undefined &&
            object.shares_to_migrate !== null) {
            message.sharesToMigrate = Coin.fromAmino(object.shares_to_migrate);
        }
        message.tokenOutMins =
            object.token_out_mins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.shares_to_migrate = message.sharesToMigrate
            ? Coin.toAmino(message.sharesToMigrate)
            : undefined;
        if (message.tokenOutMins) {
            obj.token_out_mins = message.tokenOutMins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = message.tokenOutMins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unlock-and-migrate',
            value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.decode(message.value);
    },
    toProto(message) {
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
            value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.aminoType, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl);
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse() {
    return {
        amount0: '',
        amount1: '',
        liquidityCreated: '',
        joinTime: new Date(),
    };
}
export const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = {
    typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse',
    aminoType: 'osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidityCreated === 'string' &&
                    Timestamp.is(o.joinTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidity_created === 'string' &&
                    Timestamp.isSDK(o.join_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidity_created === 'string' &&
                    Timestamp.isAmino(o.join_time))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount0 !== '') {
            writer.uint32(10).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(18).string(message.amount1);
        }
        if (message.liquidityCreated !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.liquidityCreated, 18).atomics);
        }
        if (message.joinTime !== undefined) {
            Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount0 = reader.string();
                    break;
                case 2:
                    message.amount1 = reader.string();
                    break;
                case 3:
                    message.liquidityCreated = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
        message.amount0 = object.amount0 ?? '';
        message.amount1 = object.amount1 ?? '';
        message.liquidityCreated = object.liquidityCreated ?? '';
        message.joinTime = object.joinTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
        if (object.amount0 !== undefined && object.amount0 !== null) {
            message.amount0 = object.amount0;
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        if (object.liquidity_created !== undefined &&
            object.liquidity_created !== null) {
            message.liquidityCreated = object.liquidity_created;
        }
        if (object.join_time !== undefined && object.join_time !== null) {
            message.joinTime = fromTimestamp(Timestamp.fromAmino(object.join_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount0 = message.amount0 === '' ? undefined : message.amount0;
        obj.amount1 = message.amount1 === '' ? undefined : message.amount1;
        obj.liquidity_created =
            message.liquidityCreated === '' ? undefined : message.liquidityCreated;
        obj.join_time = message.joinTime
            ? Timestamp.toAmino(toTimestamp(message.joinTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position-response',
            value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse',
            value: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.aminoType, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl);
function createBaseMsgAddToConcentratedLiquiditySuperfluidPosition() {
    return {
        positionId: BigInt(0),
        sender: '',
        tokenDesired0: Coin.fromPartial({}),
        tokenDesired1: Coin.fromPartial({}),
    };
}
export const MsgAddToConcentratedLiquiditySuperfluidPosition = {
    typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
    aminoType: 'osmosis/add-to-cl-superfluid-position',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    Coin.is(o.tokenDesired0) &&
                    Coin.is(o.tokenDesired1))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    Coin.isSDK(o.token_desired0) &&
                    Coin.isSDK(o.token_desired1))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    Coin.isAmino(o.token_desired0) &&
                    Coin.isAmino(o.token_desired1))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.tokenDesired0 !== undefined) {
            Coin.encode(message.tokenDesired0, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenDesired1 !== undefined) {
            Coin.encode(message.tokenDesired1, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.tokenDesired0 = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenDesired1 = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.sender = object.sender ?? '';
        message.tokenDesired0 =
            object.tokenDesired0 !== undefined && object.tokenDesired0 !== null
                ? Coin.fromPartial(object.tokenDesired0)
                : undefined;
        message.tokenDesired1 =
            object.tokenDesired1 !== undefined && object.tokenDesired1 !== null
                ? Coin.fromPartial(object.tokenDesired1)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.token_desired0 !== undefined && object.token_desired0 !== null) {
            message.tokenDesired0 = Coin.fromAmino(object.token_desired0);
        }
        if (object.token_desired1 !== undefined && object.token_desired1 !== null) {
            message.tokenDesired1 = Coin.fromAmino(object.token_desired1);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.token_desired0 = message.tokenDesired0
            ? Coin.toAmino(message.tokenDesired0)
            : undefined;
        obj.token_desired1 = message.tokenDesired1
            ? Coin.toAmino(message.tokenDesired1)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddToConcentratedLiquiditySuperfluidPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/add-to-cl-superfluid-position',
            value: MsgAddToConcentratedLiquiditySuperfluidPosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgAddToConcentratedLiquiditySuperfluidPosition.decode(message.value);
    },
    toProto(message) {
        return MsgAddToConcentratedLiquiditySuperfluidPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
            value: MsgAddToConcentratedLiquiditySuperfluidPosition.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl, MsgAddToConcentratedLiquiditySuperfluidPosition);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddToConcentratedLiquiditySuperfluidPosition.aminoType, MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl);
function createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: '',
        amount1: '',
        newLiquidity: '',
        lockId: BigInt(0),
    };
}
export const MsgAddToConcentratedLiquiditySuperfluidPositionResponse = {
    typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse',
    aminoType: 'osmosis/add-to-concentrated-liquidity-superfluid-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.newLiquidity === 'string' &&
                    typeof o.lockId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.new_liquidity === 'string' &&
                    typeof o.lock_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.new_liquidity === 'string' &&
                    typeof o.lock_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.amount0 !== '') {
            writer.uint32(18).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(26).string(message.amount1);
        }
        if (message.newLiquidity !== '') {
            writer
                .uint32(42)
                .string(Decimal.fromUserInput(message.newLiquidity, 18).atomics);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                case 2:
                    message.amount0 = reader.string();
                    break;
                case 3:
                    message.amount1 = reader.string();
                    break;
                case 5:
                    message.newLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        message.amount0 = object.amount0 ?? '';
        message.amount1 = object.amount1 ?? '';
        message.newLiquidity = object.newLiquidity ?? '';
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        if (object.amount0 !== undefined && object.amount0 !== null) {
            message.amount0 = object.amount0;
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        if (object.new_liquidity !== undefined && object.new_liquidity !== null) {
            message.newLiquidity = object.new_liquidity;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        obj.amount0 = message.amount0 === '' ? undefined : message.amount0;
        obj.amount1 = message.amount1 === '' ? undefined : message.amount1;
        obj.new_liquidity =
            message.newLiquidity === '' ? undefined : message.newLiquidity;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddToConcentratedLiquiditySuperfluidPositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/add-to-concentrated-liquidity-superfluid-position-response',
            value: MsgAddToConcentratedLiquiditySuperfluidPositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddToConcentratedLiquiditySuperfluidPositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse',
            value: MsgAddToConcentratedLiquiditySuperfluidPositionResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl, MsgAddToConcentratedLiquiditySuperfluidPositionResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddToConcentratedLiquiditySuperfluidPositionResponse.aminoType, MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl);
function createBaseMsgUnbondConvertAndStake() {
    return {
        lockId: BigInt(0),
        sender: '',
        valAddr: '',
        minAmtToStake: '',
        sharesToConvert: Coin.fromPartial({}),
    };
}
export const MsgUnbondConvertAndStake = {
    typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
    aminoType: 'osmosis/unbond-convert-and-stake',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgUnbondConvertAndStake.typeUrl ||
                (typeof o.lockId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.valAddr === 'string' &&
                    typeof o.minAmtToStake === 'string' &&
                    Coin.is(o.sharesToConvert))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgUnbondConvertAndStake.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.min_amt_to_stake === 'string' &&
                    Coin.isSDK(o.shares_to_convert))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgUnbondConvertAndStake.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.min_amt_to_stake === 'string' &&
                    Coin.isAmino(o.shares_to_convert))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.valAddr !== '') {
            writer.uint32(26).string(message.valAddr);
        }
        if (message.minAmtToStake !== '') {
            writer.uint32(34).string(message.minAmtToStake);
        }
        if (message.sharesToConvert !== undefined) {
            Coin.encode(message.sharesToConvert, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbondConvertAndStake();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                case 4:
                    message.minAmtToStake = reader.string();
                    break;
                case 5:
                    message.sharesToConvert = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnbondConvertAndStake();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        message.sender = object.sender ?? '';
        message.valAddr = object.valAddr ?? '';
        message.minAmtToStake = object.minAmtToStake ?? '';
        message.sharesToConvert =
            object.sharesToConvert !== undefined && object.sharesToConvert !== null
                ? Coin.fromPartial(object.sharesToConvert)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnbondConvertAndStake();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.min_amt_to_stake !== undefined &&
            object.min_amt_to_stake !== null) {
            message.minAmtToStake = object.min_amt_to_stake;
        }
        if (object.shares_to_convert !== undefined &&
            object.shares_to_convert !== null) {
            message.sharesToConvert = Coin.fromAmino(object.shares_to_convert);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        obj.min_amt_to_stake =
            message.minAmtToStake === '' ? undefined : message.minAmtToStake;
        obj.shares_to_convert = message.sharesToConvert
            ? Coin.toAmino(message.sharesToConvert)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnbondConvertAndStake.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unbond-convert-and-stake',
            value: MsgUnbondConvertAndStake.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUnbondConvertAndStake.decode(message.value);
    },
    toProto(message) {
        return MsgUnbondConvertAndStake.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
            value: MsgUnbondConvertAndStake.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUnbondConvertAndStake.typeUrl, MsgUnbondConvertAndStake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnbondConvertAndStake.aminoType, MsgUnbondConvertAndStake.typeUrl);
function createBaseMsgUnbondConvertAndStakeResponse() {
    return {
        totalAmtStaked: '',
    };
}
export const MsgUnbondConvertAndStakeResponse = {
    typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStakeResponse',
    aminoType: 'osmosis/unbond-convert-and-stake-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgUnbondConvertAndStakeResponse.typeUrl ||
                typeof o.totalAmtStaked === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgUnbondConvertAndStakeResponse.typeUrl ||
                typeof o.total_amt_staked === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgUnbondConvertAndStakeResponse.typeUrl ||
                typeof o.total_amt_staked === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalAmtStaked !== '') {
            writer.uint32(10).string(message.totalAmtStaked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbondConvertAndStakeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalAmtStaked = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnbondConvertAndStakeResponse();
        message.totalAmtStaked = object.totalAmtStaked ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnbondConvertAndStakeResponse();
        if (object.total_amt_staked !== undefined &&
            object.total_amt_staked !== null) {
            message.totalAmtStaked = object.total_amt_staked;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_amt_staked =
            message.totalAmtStaked === '' ? undefined : message.totalAmtStaked;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnbondConvertAndStakeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unbond-convert-and-stake-response',
            value: MsgUnbondConvertAndStakeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgUnbondConvertAndStakeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnbondConvertAndStakeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStakeResponse',
            value: MsgUnbondConvertAndStakeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgUnbondConvertAndStakeResponse.typeUrl, MsgUnbondConvertAndStakeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnbondConvertAndStakeResponse.aminoType, MsgUnbondConvertAndStakeResponse.typeUrl);
