"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnbondConvertAndStakeResponse = exports.MsgUnbondConvertAndStake = exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse = exports.MsgAddToConcentratedLiquiditySuperfluidPosition = exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = exports.MsgUnPoolWhitelistedPoolResponse = exports.MsgUnPoolWhitelistedPool = exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse = exports.MsgCreateFullRangePositionAndSuperfluidDelegate = exports.MsgLockAndSuperfluidDelegateResponse = exports.MsgLockAndSuperfluidDelegate = exports.MsgSuperfluidUndelegateAndUnbondLockResponse = exports.MsgSuperfluidUndelegateAndUnbondLock = exports.MsgSuperfluidUnbondLockResponse = exports.MsgSuperfluidUnbondLock = exports.MsgSuperfluidUndelegateResponse = exports.MsgSuperfluidUndelegate = exports.MsgSuperfluidDelegateResponse = exports.MsgSuperfluidDelegate = void 0;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../helpers");
function createBaseMsgSuperfluidDelegate() {
    return {
        sender: '',
        lockId: BigInt(0),
        valAddr: '',
    };
}
exports.MsgSuperfluidDelegate = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
    aminoType: 'osmosis/superfluid-delegate',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lockId === 'bigint' &&
                    typeof o.valAddr === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    typeof o.val_addr === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    typeof o.val_addr === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegate',
            value: exports.MsgSuperfluidDelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegate',
            value: exports.MsgSuperfluidDelegate.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidDelegate.typeUrl, exports.MsgSuperfluidDelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidDelegate.aminoType, exports.MsgSuperfluidDelegate.typeUrl);
function createBaseMsgSuperfluidDelegateResponse() {
    return {};
}
exports.MsgSuperfluidDelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegateResponse',
    aminoType: 'osmosis/superfluid-delegate-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidDelegateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidDelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidDelegateResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-delegate-response',
            value: exports.MsgSuperfluidDelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidDelegateResponse',
            value: exports.MsgSuperfluidDelegateResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidDelegateResponse.typeUrl, exports.MsgSuperfluidDelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidDelegateResponse.aminoType, exports.MsgSuperfluidDelegateResponse.typeUrl);
function createBaseMsgSuperfluidUndelegate() {
    return {
        sender: '',
        lockId: BigInt(0),
    };
}
exports.MsgSuperfluidUndelegate = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
    aminoType: 'osmosis/superfluid-undelegate',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegate.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lockId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegate.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegate.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate',
            value: exports.MsgSuperfluidUndelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegate',
            value: exports.MsgSuperfluidUndelegate.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUndelegate.typeUrl, exports.MsgSuperfluidUndelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUndelegate.aminoType, exports.MsgSuperfluidUndelegate.typeUrl);
function createBaseMsgSuperfluidUndelegateResponse() {
    return {};
}
exports.MsgSuperfluidUndelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateResponse',
    aminoType: 'osmosis/superfluid-undelegate-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUndelegateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUndelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUndelegateResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate-response',
            value: exports.MsgSuperfluidUndelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateResponse',
            value: exports.MsgSuperfluidUndelegateResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUndelegateResponse.typeUrl, exports.MsgSuperfluidUndelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUndelegateResponse.aminoType, exports.MsgSuperfluidUndelegateResponse.typeUrl);
function createBaseMsgSuperfluidUnbondLock() {
    return {
        sender: '',
        lockId: BigInt(0),
    };
}
exports.MsgSuperfluidUnbondLock = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
    aminoType: 'osmosis/superfluid-unbond-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUnbondLock.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lockId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUnbondLock.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUnbondLock.typeUrl ||
                (typeof o.sender === 'string' && typeof o.lock_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-unbond-lock',
            value: exports.MsgSuperfluidUnbondLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLock',
            value: exports.MsgSuperfluidUnbondLock.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUnbondLock.typeUrl, exports.MsgSuperfluidUnbondLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUnbondLock.aminoType, exports.MsgSuperfluidUnbondLock.typeUrl);
function createBaseMsgSuperfluidUnbondLockResponse() {
    return {};
}
exports.MsgSuperfluidUnbondLockResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLockResponse',
    aminoType: 'osmosis/superfluid-unbond-lock-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSuperfluidUnbondLockResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-unbond-lock-response',
            value: exports.MsgSuperfluidUnbondLockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUnbondLockResponse',
            value: exports.MsgSuperfluidUnbondLockResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUnbondLockResponse.typeUrl, exports.MsgSuperfluidUnbondLockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUnbondLockResponse.aminoType, exports.MsgSuperfluidUnbondLockResponse.typeUrl);
function createBaseMsgSuperfluidUndelegateAndUnbondLock() {
    return {
        sender: '',
        lockId: BigInt(0),
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgSuperfluidUndelegateAndUnbondLock = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
    aminoType: 'osmosis/superfluid-undelegate-and-unbond-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegateAndUnbondLock.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lockId === 'bigint' &&
                    coin_1.Coin.is(o.coin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegateAndUnbondLock.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    coin_1.Coin.isSDK(o.coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegateAndUnbondLock.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    coin_1.Coin.isAmino(o.coin))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
                ? coin_1.Coin.fromPartial(object.coin)
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
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUndelegateAndUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate-and-unbond-lock',
            value: exports.MsgSuperfluidUndelegateAndUnbondLock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegateAndUnbondLock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegateAndUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock',
            value: exports.MsgSuperfluidUndelegateAndUnbondLock.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUndelegateAndUnbondLock.typeUrl, exports.MsgSuperfluidUndelegateAndUnbondLock);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUndelegateAndUnbondLock.aminoType, exports.MsgSuperfluidUndelegateAndUnbondLock.typeUrl);
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse() {
    return {
        lockId: BigInt(0),
    };
}
exports.MsgSuperfluidUndelegateAndUnbondLockResponse = {
    typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse',
    aminoType: 'osmosis/superfluid-undelegate-and-unbond-lock-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSuperfluidUndelegateAndUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/superfluid-undelegate-and-unbond-lock-response',
            value: exports.MsgSuperfluidUndelegateAndUnbondLockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegateAndUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegateAndUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLockResponse',
            value: exports.MsgSuperfluidUndelegateAndUnbondLockResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl, exports.MsgSuperfluidUndelegateAndUnbondLockResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSuperfluidUndelegateAndUnbondLockResponse.aminoType, exports.MsgSuperfluidUndelegateAndUnbondLockResponse.typeUrl);
function createBaseMsgLockAndSuperfluidDelegate() {
    return {
        sender: '',
        coins: [],
        valAddr: '',
    };
}
exports.MsgLockAndSuperfluidDelegate = {
    typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
    aminoType: 'osmosis/lock-and-superfluid-delegate',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgLockAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.is(o.coins[0])) &&
                    typeof o.valAddr === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgLockAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) &&
                    typeof o.val_addr === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgLockAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) &&
                    typeof o.val_addr === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== '') {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        obj.val_addr = message.valAddr === '' ? undefined : message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lock-and-superfluid-delegate',
            value: exports.MsgLockAndSuperfluidDelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegate',
            value: exports.MsgLockAndSuperfluidDelegate.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLockAndSuperfluidDelegate.typeUrl, exports.MsgLockAndSuperfluidDelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLockAndSuperfluidDelegate.aminoType, exports.MsgLockAndSuperfluidDelegate.typeUrl);
function createBaseMsgLockAndSuperfluidDelegateResponse() {
    return {
        iD: BigInt(0),
    };
}
exports.MsgLockAndSuperfluidDelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse',
    aminoType: 'osmosis/lock-and-superfluid-delegate-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgLockAndSuperfluidDelegateResponse.typeUrl ||
                typeof o.iD === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgLockAndSuperfluidDelegateResponse.typeUrl ||
                typeof o.ID === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgLockAndSuperfluidDelegateResponse.typeUrl ||
                typeof o.ID === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgLockAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lock-and-superfluid-delegate-response',
            value: exports.MsgLockAndSuperfluidDelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse',
            value: exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLockAndSuperfluidDelegateResponse.typeUrl, exports.MsgLockAndSuperfluidDelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLockAndSuperfluidDelegateResponse.aminoType, exports.MsgLockAndSuperfluidDelegateResponse.typeUrl);
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegate() {
    return {
        sender: '',
        coins: [],
        valAddr: '',
        poolId: BigInt(0),
    };
}
exports.MsgCreateFullRangePositionAndSuperfluidDelegate = {
    typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
    aminoType: 'osmosis/full-range-and-sf-delegate',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.is(o.coins[0])) &&
                    typeof o.valAddr === 'string' &&
                    typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])) &&
                    typeof o.val_addr === 'string' &&
                    typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])) &&
                    typeof o.val_addr === 'string' &&
                    typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
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
            obj.coins = message.coins.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
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
        return exports.MsgCreateFullRangePositionAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/full-range-and-sf-delegate',
            value: exports.MsgCreateFullRangePositionAndSuperfluidDelegate.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateFullRangePositionAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateFullRangePositionAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate',
            value: exports.MsgCreateFullRangePositionAndSuperfluidDelegate.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl, exports.MsgCreateFullRangePositionAndSuperfluidDelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateFullRangePositionAndSuperfluidDelegate.aminoType, exports.MsgCreateFullRangePositionAndSuperfluidDelegate.typeUrl);
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse() {
    return {
        lockID: BigInt(0),
        positionID: BigInt(0),
    };
}
exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse = {
    typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse',
    aminoType: 'osmosis/create-full-range-position-and-superfluid-delegate-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl ||
                (typeof o.lockID === 'bigint' && typeof o.positionID === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl ||
                (typeof o.lockID === 'bigint' && typeof o.positionID === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl ||
                (typeof o.lockID === 'bigint' && typeof o.positionID === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockID !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockID);
        }
        if (message.positionID !== BigInt(0)) {
            writer.uint32(16).uint64(message.positionID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/create-full-range-position-and-superfluid-delegate-response',
            value: exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegateResponse',
            value: exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl, exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.aminoType, exports.MsgCreateFullRangePositionAndSuperfluidDelegateResponse.typeUrl);
function createBaseMsgUnPoolWhitelistedPool() {
    return {
        sender: '',
        poolId: BigInt(0),
    };
}
exports.MsgUnPoolWhitelistedPool = {
    typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
    aminoType: 'osmosis/unpool-whitelisted-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnPoolWhitelistedPool.typeUrl ||
                (typeof o.sender === 'string' && typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnPoolWhitelistedPool.typeUrl ||
                (typeof o.sender === 'string' && typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnPoolWhitelistedPool.typeUrl ||
                (typeof o.sender === 'string' && typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUnPoolWhitelistedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unpool-whitelisted-pool',
            value: exports.MsgUnPoolWhitelistedPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPool',
            value: exports.MsgUnPoolWhitelistedPool.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnPoolWhitelistedPool.typeUrl, exports.MsgUnPoolWhitelistedPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnPoolWhitelistedPool.aminoType, exports.MsgUnPoolWhitelistedPool.typeUrl);
function createBaseMsgUnPoolWhitelistedPoolResponse() {
    return {
        exitedLockIds: [],
    };
}
exports.MsgUnPoolWhitelistedPoolResponse = {
    typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse',
    aminoType: 'osmosis/un-pool-whitelisted-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnPoolWhitelistedPoolResponse.typeUrl ||
                (Array.isArray(o.exitedLockIds) &&
                    (!o.exitedLockIds.length || typeof o.exitedLockIds[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnPoolWhitelistedPoolResponse.typeUrl ||
                (Array.isArray(o.exited_lock_ids) &&
                    (!o.exited_lock_ids.length ||
                        typeof o.exited_lock_ids[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnPoolWhitelistedPoolResponse.typeUrl ||
                (Array.isArray(o.exited_lock_ids) &&
                    (!o.exited_lock_ids.length ||
                        typeof o.exited_lock_ids[0] === 'bigint'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.exitedLockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUnPoolWhitelistedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/un-pool-whitelisted-pool-response',
            value: exports.MsgUnPoolWhitelistedPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse',
            value: exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnPoolWhitelistedPoolResponse.typeUrl, exports.MsgUnPoolWhitelistedPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnPoolWhitelistedPoolResponse.aminoType, exports.MsgUnPoolWhitelistedPoolResponse.typeUrl);
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition() {
    return {
        sender: '',
        lockId: BigInt(0),
        sharesToMigrate: coin_1.Coin.fromPartial({}),
        tokenOutMins: [],
    };
}
exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = {
    typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
    aminoType: 'osmosis/unlock-and-migrate',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lockId === 'bigint' &&
                    coin_1.Coin.is(o.sharesToMigrate) &&
                    Array.isArray(o.tokenOutMins) &&
                    (!o.tokenOutMins.length || coin_1.Coin.is(o.tokenOutMins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    coin_1.Coin.isSDK(o.shares_to_migrate) &&
                    Array.isArray(o.token_out_mins) &&
                    (!o.token_out_mins.length || coin_1.Coin.isSDK(o.token_out_mins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.lock_id === 'bigint' &&
                    coin_1.Coin.isAmino(o.shares_to_migrate) &&
                    Array.isArray(o.token_out_mins) &&
                    (!o.token_out_mins.length || coin_1.Coin.isAmino(o.token_out_mins[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).int64(message.lockId);
        }
        if (message.sharesToMigrate !== undefined) {
            coin_1.Coin.encode(message.sharesToMigrate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.tokenOutMins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.sharesToMigrate = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
                ? coin_1.Coin.fromPartial(object.sharesToMigrate)
                : undefined;
        message.tokenOutMins =
            object.tokenOutMins?.map(e => coin_1.Coin.fromPartial(e)) || [];
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
            message.sharesToMigrate = coin_1.Coin.fromAmino(object.shares_to_migrate);
        }
        message.tokenOutMins =
            object.token_out_mins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.lock_id =
            message.lockId !== BigInt(0) ? message.lockId.toString() : undefined;
        obj.shares_to_migrate = message.sharesToMigrate
            ? coin_1.Coin.toAmino(message.sharesToMigrate)
            : undefined;
        if (message.tokenOutMins) {
            obj.token_out_mins = message.tokenOutMins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = message.tokenOutMins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unlock-and-migrate',
            value: exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition',
            value: exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl, exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.aminoType, exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.typeUrl);
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse() {
    return {
        amount0: '',
        amount1: '',
        liquidityCreated: '',
        joinTime: new Date(),
    };
}
exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = {
    typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse',
    aminoType: 'osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidityCreated === 'string' &&
                    timestamp_1.Timestamp.is(o.joinTime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidity_created === 'string' &&
                    timestamp_1.Timestamp.isSDK(o.join_time))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl ||
                (typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.liquidity_created === 'string' &&
                    timestamp_1.Timestamp.isAmino(o.join_time))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount0 !== '') {
            writer.uint32(10).string(message.amount0);
        }
        if (message.amount1 !== '') {
            writer.uint32(18).string(message.amount1);
        }
        if (message.liquidityCreated !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.liquidityCreated, 18).atomics);
        }
        if (message.joinTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.joinTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.liquidityCreated = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.joinTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            message.joinTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.join_time));
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
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.joinTime))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unlock-and-migrate-shares-to-full-range-concentrated-position-response',
            value: exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse',
            value: exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl, exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.aminoType, exports.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.typeUrl);
function createBaseMsgAddToConcentratedLiquiditySuperfluidPosition() {
    return {
        positionId: BigInt(0),
        sender: '',
        tokenDesired0: coin_1.Coin.fromPartial({}),
        tokenDesired1: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgAddToConcentratedLiquiditySuperfluidPosition = {
    typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
    aminoType: 'osmosis/add-to-cl-superfluid-position',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    coin_1.Coin.is(o.tokenDesired0) &&
                    coin_1.Coin.is(o.tokenDesired1))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    coin_1.Coin.isSDK(o.token_desired0) &&
                    coin_1.Coin.isSDK(o.token_desired1))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    coin_1.Coin.isAmino(o.token_desired0) &&
                    coin_1.Coin.isAmino(o.token_desired1))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        if (message.tokenDesired0 !== undefined) {
            coin_1.Coin.encode(message.tokenDesired0, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenDesired1 !== undefined) {
            coin_1.Coin.encode(message.tokenDesired1, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.tokenDesired0 = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenDesired1 = coin_1.Coin.decode(reader, reader.uint32());
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
                ? coin_1.Coin.fromPartial(object.tokenDesired0)
                : undefined;
        message.tokenDesired1 =
            object.tokenDesired1 !== undefined && object.tokenDesired1 !== null
                ? coin_1.Coin.fromPartial(object.tokenDesired1)
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
            message.tokenDesired0 = coin_1.Coin.fromAmino(object.token_desired0);
        }
        if (object.token_desired1 !== undefined && object.token_desired1 !== null) {
            message.tokenDesired1 = coin_1.Coin.fromAmino(object.token_desired1);
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
            ? coin_1.Coin.toAmino(message.tokenDesired0)
            : undefined;
        obj.token_desired1 = message.tokenDesired1
            ? coin_1.Coin.toAmino(message.tokenDesired1)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddToConcentratedLiquiditySuperfluidPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/add-to-cl-superfluid-position',
            value: exports.MsgAddToConcentratedLiquiditySuperfluidPosition.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToConcentratedLiquiditySuperfluidPosition.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToConcentratedLiquiditySuperfluidPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition',
            value: exports.MsgAddToConcentratedLiquiditySuperfluidPosition.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl, exports.MsgAddToConcentratedLiquiditySuperfluidPosition);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToConcentratedLiquiditySuperfluidPosition.aminoType, exports.MsgAddToConcentratedLiquiditySuperfluidPosition.typeUrl);
function createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse() {
    return {
        positionId: BigInt(0),
        amount0: '',
        amount1: '',
        newLiquidity: '',
        lockId: BigInt(0),
    };
}
exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse = {
    typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse',
    aminoType: 'osmosis/add-to-concentrated-liquidity-superfluid-position-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl ||
                (typeof o.positionId === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.newLiquidity === 'string' &&
                    typeof o.lockId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.new_liquidity === 'string' &&
                    typeof o.lock_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl ||
                (typeof o.position_id === 'bigint' &&
                    typeof o.amount0 === 'string' &&
                    typeof o.amount1 === 'string' &&
                    typeof o.new_liquidity === 'string' &&
                    typeof o.lock_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
                .string(math_1.Decimal.fromUserInput(message.newLiquidity, 18).atomics);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.newLiquidity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/add-to-concentrated-liquidity-superfluid-position-response',
            value: exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPositionResponse',
            value: exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl, exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.aminoType, exports.MsgAddToConcentratedLiquiditySuperfluidPositionResponse.typeUrl);
function createBaseMsgUnbondConvertAndStake() {
    return {
        lockId: BigInt(0),
        sender: '',
        valAddr: '',
        minAmtToStake: '',
        sharesToConvert: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgUnbondConvertAndStake = {
    typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
    aminoType: 'osmosis/unbond-convert-and-stake',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnbondConvertAndStake.typeUrl ||
                (typeof o.lockId === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.valAddr === 'string' &&
                    typeof o.minAmtToStake === 'string' &&
                    coin_1.Coin.is(o.sharesToConvert))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnbondConvertAndStake.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.min_amt_to_stake === 'string' &&
                    coin_1.Coin.isSDK(o.shares_to_convert))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnbondConvertAndStake.typeUrl ||
                (typeof o.lock_id === 'bigint' &&
                    typeof o.sender === 'string' &&
                    typeof o.val_addr === 'string' &&
                    typeof o.min_amt_to_stake === 'string' &&
                    coin_1.Coin.isAmino(o.shares_to_convert))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            coin_1.Coin.encode(message.sharesToConvert, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.sharesToConvert = coin_1.Coin.decode(reader, reader.uint32());
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
                ? coin_1.Coin.fromPartial(object.sharesToConvert)
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
            message.sharesToConvert = coin_1.Coin.fromAmino(object.shares_to_convert);
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
            ? coin_1.Coin.toAmino(message.sharesToConvert)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnbondConvertAndStake.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unbond-convert-and-stake',
            value: exports.MsgUnbondConvertAndStake.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnbondConvertAndStake.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnbondConvertAndStake.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStake',
            value: exports.MsgUnbondConvertAndStake.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnbondConvertAndStake.typeUrl, exports.MsgUnbondConvertAndStake);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnbondConvertAndStake.aminoType, exports.MsgUnbondConvertAndStake.typeUrl);
function createBaseMsgUnbondConvertAndStakeResponse() {
    return {
        totalAmtStaked: '',
    };
}
exports.MsgUnbondConvertAndStakeResponse = {
    typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStakeResponse',
    aminoType: 'osmosis/unbond-convert-and-stake-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnbondConvertAndStakeResponse.typeUrl ||
                typeof o.totalAmtStaked === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnbondConvertAndStakeResponse.typeUrl ||
                typeof o.total_amt_staked === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUnbondConvertAndStakeResponse.typeUrl ||
                typeof o.total_amt_staked === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalAmtStaked !== '') {
            writer.uint32(10).string(message.totalAmtStaked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUnbondConvertAndStakeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/unbond-convert-and-stake-response',
            value: exports.MsgUnbondConvertAndStakeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnbondConvertAndStakeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnbondConvertAndStakeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.MsgUnbondConvertAndStakeResponse',
            value: exports.MsgUnbondConvertAndStakeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnbondConvertAndStakeResponse.typeUrl, exports.MsgUnbondConvertAndStakeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnbondConvertAndStakeResponse.aminoType, exports.MsgUnbondConvertAndStakeResponse.typeUrl);
