//@ts-nocheck
import { Duration, } from '../../google/protobuf/duration';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { PeriodLock } from './lock';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseMsgLockTokens() {
    return {
        owner: '',
        duration: Duration.fromPartial({}),
        coins: [],
    };
}
export const MsgLockTokens = {
    typeUrl: '/osmosis.lockup.MsgLockTokens',
    aminoType: 'osmosis/lockup/lock-tokens',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgLockTokens.typeUrl ||
                (typeof o.owner === 'string' &&
                    Duration.is(o.duration) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgLockTokens.typeUrl ||
                (typeof o.owner === 'string' &&
                    Duration.isSDK(o.duration) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgLockTokens.typeUrl ||
                (typeof o.owner === 'string' &&
                    Duration.isAmino(o.duration) &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokens();
        message.owner = object.owner ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokens();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockTokens.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/lock-tokens',
            value: MsgLockTokens.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgLockTokens.decode(message.value);
    },
    toProto(message) {
        return MsgLockTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgLockTokens',
            value: MsgLockTokens.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgLockTokens.typeUrl, MsgLockTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockTokens.aminoType, MsgLockTokens.typeUrl);
function createBaseMsgLockTokensResponse() {
    return {
        iD: BigInt(0),
    };
}
export const MsgLockTokensResponse = {
    typeUrl: '/osmosis.lockup.MsgLockTokensResponse',
    aminoType: 'osmosis/lockup/lock-tokens-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgLockTokensResponse.typeUrl || typeof o.iD === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgLockTokensResponse.typeUrl || typeof o.ID === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgLockTokensResponse.typeUrl || typeof o.ID === 'bigint'));
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
        const message = createBaseMsgLockTokensResponse();
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
        const message = createBaseMsgLockTokensResponse();
        message.iD =
            object.iD !== undefined && object.iD !== null
                ? BigInt(object.iD.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokensResponse();
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
        return MsgLockTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/lock-tokens-response',
            value: MsgLockTokensResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgLockTokensResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLockTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgLockTokensResponse',
            value: MsgLockTokensResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgLockTokensResponse.typeUrl, MsgLockTokensResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockTokensResponse.aminoType, MsgLockTokensResponse.typeUrl);
function createBaseMsgBeginUnlockingAll() {
    return {
        owner: '',
    };
}
export const MsgBeginUnlockingAll = {
    typeUrl: '/osmosis.lockup.MsgBeginUnlockingAll',
    aminoType: 'osmosis/lockup/begin-unlock-tokens',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingAll.typeUrl ||
                typeof o.owner === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingAll.typeUrl ||
                typeof o.owner === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingAll.typeUrl ||
                typeof o.owner === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAll();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAll();
        message.owner = object.owner ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAll();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingAll.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/begin-unlock-tokens',
            value: MsgBeginUnlockingAll.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingAll.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingAll.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgBeginUnlockingAll',
            value: MsgBeginUnlockingAll.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgBeginUnlockingAll.typeUrl, MsgBeginUnlockingAll);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlockingAll.aminoType, MsgBeginUnlockingAll.typeUrl);
function createBaseMsgBeginUnlockingAllResponse() {
    return {
        unlocks: [],
    };
}
export const MsgBeginUnlockingAllResponse = {
    typeUrl: '/osmosis.lockup.MsgBeginUnlockingAllResponse',
    aminoType: 'osmosis/lockup/begin-unlocking-all-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingAllResponse.typeUrl ||
                (Array.isArray(o.unlocks) &&
                    (!o.unlocks.length || PeriodLock.is(o.unlocks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingAllResponse.typeUrl ||
                (Array.isArray(o.unlocks) &&
                    (!o.unlocks.length || PeriodLock.isSDK(o.unlocks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingAllResponse.typeUrl ||
                (Array.isArray(o.unlocks) &&
                    (!o.unlocks.length || PeriodLock.isAmino(o.unlocks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.unlocks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.unlocks = message.unlocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingAllResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/begin-unlocking-all-response',
            value: MsgBeginUnlockingAllResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingAllResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingAllResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgBeginUnlockingAllResponse',
            value: MsgBeginUnlockingAllResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgBeginUnlockingAllResponse.typeUrl, MsgBeginUnlockingAllResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlockingAllResponse.aminoType, MsgBeginUnlockingAllResponse.typeUrl);
function createBaseMsgBeginUnlocking() {
    return {
        owner: '',
        iD: BigInt(0),
        coins: [],
    };
}
export const MsgBeginUnlocking = {
    typeUrl: '/osmosis.lockup.MsgBeginUnlocking',
    aminoType: 'osmosis/lockup/begin-unlock-period-lock',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlocking.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.iD === 'bigint' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlocking.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.ID === 'bigint' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlocking.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.ID === 'bigint' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlocking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.iD = reader.uint64();
                    break;
                case 3:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlocking();
        message.owner = object.owner ?? '';
        message.iD =
            object.iD !== undefined && object.iD !== null
                ? BigInt(object.iD.toString())
                : BigInt(0);
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlocking();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? message.iD.toString() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlocking.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/begin-unlock-period-lock',
            value: MsgBeginUnlocking.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlocking.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlocking.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgBeginUnlocking',
            value: MsgBeginUnlocking.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgBeginUnlocking.typeUrl, MsgBeginUnlocking);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlocking.aminoType, MsgBeginUnlocking.typeUrl);
function createBaseMsgBeginUnlockingResponse() {
    return {
        success: false,
        unlockingLockID: BigInt(0),
    };
}
export const MsgBeginUnlockingResponse = {
    typeUrl: '/osmosis.lockup.MsgBeginUnlockingResponse',
    aminoType: 'osmosis/lockup/begin-unlocking-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingResponse.typeUrl ||
                (typeof o.success === 'boolean' &&
                    typeof o.unlockingLockID === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingResponse.typeUrl ||
                (typeof o.success === 'boolean' &&
                    typeof o.unlockingLockID === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgBeginUnlockingResponse.typeUrl ||
                (typeof o.success === 'boolean' &&
                    typeof o.unlockingLockID === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        if (message.unlockingLockID !== BigInt(0)) {
            writer.uint32(16).uint64(message.unlockingLockID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.unlockingLockID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        message.success = object.success ?? false;
        message.unlockingLockID =
            object.unlockingLockID !== undefined && object.unlockingLockID !== null
                ? BigInt(object.unlockingLockID.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        if (object.unlockingLockID !== undefined &&
            object.unlockingLockID !== null) {
            message.unlockingLockID = BigInt(object.unlockingLockID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        obj.unlockingLockID =
            message.unlockingLockID !== BigInt(0)
                ? message.unlockingLockID.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/begin-unlocking-response',
            value: MsgBeginUnlockingResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgBeginUnlockingResponse',
            value: MsgBeginUnlockingResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgBeginUnlockingResponse.typeUrl, MsgBeginUnlockingResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlockingResponse.aminoType, MsgBeginUnlockingResponse.typeUrl);
function createBaseMsgExtendLockup() {
    return {
        owner: '',
        iD: BigInt(0),
        duration: Duration.fromPartial({}),
    };
}
export const MsgExtendLockup = {
    typeUrl: '/osmosis.lockup.MsgExtendLockup',
    aminoType: 'osmosis/lockup/extend-lockup',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgExtendLockup.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.iD === 'bigint' &&
                    Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgExtendLockup.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.ID === 'bigint' &&
                    Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgExtendLockup.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.ID === 'bigint' &&
                    Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.iD = reader.uint64();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockup();
        message.owner = object.owner ?? '';
        message.iD =
            object.iD !== undefined && object.iD !== null
                ? BigInt(object.iD.toString())
                : BigInt(0);
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExtendLockup();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? message.iD.toString() : undefined;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExtendLockup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/extend-lockup',
            value: MsgExtendLockup.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgExtendLockup.decode(message.value);
    },
    toProto(message) {
        return MsgExtendLockup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgExtendLockup',
            value: MsgExtendLockup.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgExtendLockup.typeUrl, MsgExtendLockup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExtendLockup.aminoType, MsgExtendLockup.typeUrl);
function createBaseMsgExtendLockupResponse() {
    return {
        success: false,
    };
}
export const MsgExtendLockupResponse = {
    typeUrl: '/osmosis.lockup.MsgExtendLockupResponse',
    aminoType: 'osmosis/lockup/extend-lockup-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgExtendLockupResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgExtendLockupResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgExtendLockupResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockupResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExtendLockupResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExtendLockupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/extend-lockup-response',
            value: MsgExtendLockupResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgExtendLockupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExtendLockupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgExtendLockupResponse',
            value: MsgExtendLockupResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgExtendLockupResponse.typeUrl, MsgExtendLockupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExtendLockupResponse.aminoType, MsgExtendLockupResponse.typeUrl);
function createBaseMsgForceUnlock() {
    return {
        owner: '',
        iD: BigInt(0),
        coins: [],
    };
}
export const MsgForceUnlock = {
    typeUrl: '/osmosis.lockup.MsgForceUnlock',
    aminoType: 'osmosis/lockup/force-unlock-tokens',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgForceUnlock.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.iD === 'bigint' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgForceUnlock.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.ID === 'bigint' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgForceUnlock.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.ID === 'bigint' &&
                    Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.iD = reader.uint64();
                    break;
                case 3:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlock();
        message.owner = object.owner ?? '';
        message.iD =
            object.iD !== undefined && object.iD !== null
                ? BigInt(object.iD.toString())
                : BigInt(0);
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgForceUnlock();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? message.iD.toString() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceUnlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/force-unlock-tokens',
            value: MsgForceUnlock.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgForceUnlock.decode(message.value);
    },
    toProto(message) {
        return MsgForceUnlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgForceUnlock',
            value: MsgForceUnlock.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgForceUnlock.typeUrl, MsgForceUnlock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgForceUnlock.aminoType, MsgForceUnlock.typeUrl);
function createBaseMsgForceUnlockResponse() {
    return {
        success: false,
    };
}
export const MsgForceUnlockResponse = {
    typeUrl: '/osmosis.lockup.MsgForceUnlockResponse',
    aminoType: 'osmosis/lockup/force-unlock-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgForceUnlockResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgForceUnlockResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgForceUnlockResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlockResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgForceUnlockResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceUnlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/force-unlock-response',
            value: MsgForceUnlockResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgForceUnlockResponse.decode(message.value);
    },
    toProto(message) {
        return MsgForceUnlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgForceUnlockResponse',
            value: MsgForceUnlockResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgForceUnlockResponse.typeUrl, MsgForceUnlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgForceUnlockResponse.aminoType, MsgForceUnlockResponse.typeUrl);
function createBaseMsgSetRewardReceiverAddress() {
    return {
        owner: '',
        lockID: BigInt(0),
        rewardReceiver: '',
    };
}
export const MsgSetRewardReceiverAddress = {
    typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddress',
    aminoType: 'osmosis/lockup/set-reward-receiver-address',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetRewardReceiverAddress.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.lockID === 'bigint' &&
                    typeof o.rewardReceiver === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetRewardReceiverAddress.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.lockID === 'bigint' &&
                    typeof o.reward_receiver === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetRewardReceiverAddress.typeUrl ||
                (typeof o.owner === 'string' &&
                    typeof o.lockID === 'bigint' &&
                    typeof o.reward_receiver === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.lockID !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockID);
        }
        if (message.rewardReceiver !== '') {
            writer.uint32(26).string(message.rewardReceiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetRewardReceiverAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.lockID = reader.uint64();
                    break;
                case 3:
                    message.rewardReceiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetRewardReceiverAddress();
        message.owner = object.owner ?? '';
        message.lockID =
            object.lockID !== undefined && object.lockID !== null
                ? BigInt(object.lockID.toString())
                : BigInt(0);
        message.rewardReceiver = object.rewardReceiver ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetRewardReceiverAddress();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.lockID !== undefined && object.lockID !== null) {
            message.lockID = BigInt(object.lockID);
        }
        if (object.reward_receiver !== undefined &&
            object.reward_receiver !== null) {
            message.rewardReceiver = object.reward_receiver;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.lockID =
            message.lockID !== BigInt(0) ? message.lockID.toString() : undefined;
        obj.reward_receiver =
            message.rewardReceiver === '' ? undefined : message.rewardReceiver;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetRewardReceiverAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/set-reward-receiver-address',
            value: MsgSetRewardReceiverAddress.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetRewardReceiverAddress.decode(message.value);
    },
    toProto(message) {
        return MsgSetRewardReceiverAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddress',
            value: MsgSetRewardReceiverAddress.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetRewardReceiverAddress.typeUrl, MsgSetRewardReceiverAddress);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetRewardReceiverAddress.aminoType, MsgSetRewardReceiverAddress.typeUrl);
function createBaseMsgSetRewardReceiverAddressResponse() {
    return {
        success: false,
    };
}
export const MsgSetRewardReceiverAddressResponse = {
    typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddressResponse',
    aminoType: 'osmosis/lockup/set-reward-receiver-address-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetRewardReceiverAddressResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetRewardReceiverAddressResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetRewardReceiverAddressResponse.typeUrl ||
                typeof o.success === 'boolean'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetRewardReceiverAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetRewardReceiverAddressResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetRewardReceiverAddressResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetRewardReceiverAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/set-reward-receiver-address-response',
            value: MsgSetRewardReceiverAddressResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetRewardReceiverAddressResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetRewardReceiverAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.MsgSetRewardReceiverAddressResponse',
            value: MsgSetRewardReceiverAddressResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetRewardReceiverAddressResponse.typeUrl, MsgSetRewardReceiverAddressResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetRewardReceiverAddressResponse.aminoType, MsgSetRewardReceiverAddressResponse.typeUrl);
