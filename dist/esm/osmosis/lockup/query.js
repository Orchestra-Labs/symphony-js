//@ts-nocheck
import { Timestamp } from '../../google/protobuf/timestamp';
import { Duration, } from '../../google/protobuf/duration';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { PeriodLock, SyntheticLock, } from './lock';
import { Params } from './params';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
import { toTimestamp, fromTimestamp } from '../../helpers';
function createBaseModuleBalanceRequest() {
    return {};
}
export const ModuleBalanceRequest = {
    typeUrl: '/osmosis.lockup.ModuleBalanceRequest',
    aminoType: 'osmosis/lockup/module-balance-request',
    is(o) {
        return o && o.$typeUrl === ModuleBalanceRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ModuleBalanceRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ModuleBalanceRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceRequest();
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
        const message = createBaseModuleBalanceRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseModuleBalanceRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/module-balance-request',
            value: ModuleBalanceRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ModuleBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return ModuleBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.ModuleBalanceRequest',
            value: ModuleBalanceRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ModuleBalanceRequest.typeUrl, ModuleBalanceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleBalanceRequest.aminoType, ModuleBalanceRequest.typeUrl);
function createBaseModuleBalanceResponse() {
    return {
        coins: [],
    };
}
export const ModuleBalanceResponse = {
    typeUrl: '/osmosis.lockup.ModuleBalanceResponse',
    aminoType: 'osmosis/lockup/module-balance-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ModuleBalanceResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ModuleBalanceResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ModuleBalanceResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseModuleBalanceResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleBalanceResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/module-balance-response',
            value: ModuleBalanceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ModuleBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return ModuleBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.ModuleBalanceResponse',
            value: ModuleBalanceResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ModuleBalanceResponse.typeUrl, ModuleBalanceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleBalanceResponse.aminoType, ModuleBalanceResponse.typeUrl);
function createBaseModuleLockedAmountRequest() {
    return {};
}
export const ModuleLockedAmountRequest = {
    typeUrl: '/osmosis.lockup.ModuleLockedAmountRequest',
    aminoType: 'osmosis/lockup/module-locked-amount-request',
    is(o) {
        return o && o.$typeUrl === ModuleLockedAmountRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ModuleLockedAmountRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ModuleLockedAmountRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountRequest();
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
        const message = createBaseModuleLockedAmountRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseModuleLockedAmountRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleLockedAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/module-locked-amount-request',
            value: ModuleLockedAmountRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ModuleLockedAmountRequest.decode(message.value);
    },
    toProto(message) {
        return ModuleLockedAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.ModuleLockedAmountRequest',
            value: ModuleLockedAmountRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ModuleLockedAmountRequest.typeUrl, ModuleLockedAmountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleLockedAmountRequest.aminoType, ModuleLockedAmountRequest.typeUrl);
function createBaseModuleLockedAmountResponse() {
    return {
        coins: [],
    };
}
export const ModuleLockedAmountResponse = {
    typeUrl: '/osmosis.lockup.ModuleLockedAmountResponse',
    aminoType: 'osmosis/lockup/module-locked-amount-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ModuleLockedAmountResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ModuleLockedAmountResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ModuleLockedAmountResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseModuleLockedAmountResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleLockedAmountResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleLockedAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/module-locked-amount-response',
            value: ModuleLockedAmountResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ModuleLockedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return ModuleLockedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.ModuleLockedAmountResponse',
            value: ModuleLockedAmountResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ModuleLockedAmountResponse.typeUrl, ModuleLockedAmountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleLockedAmountResponse.aminoType, ModuleLockedAmountResponse.typeUrl);
function createBaseAccountUnlockableCoinsRequest() {
    return {
        owner: '',
    };
}
export const AccountUnlockableCoinsRequest = {
    typeUrl: '/osmosis.lockup.AccountUnlockableCoinsRequest',
    aminoType: 'osmosis/lockup/account-unlockable-coins-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockableCoinsRequest.typeUrl ||
                typeof o.owner === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockableCoinsRequest.typeUrl ||
                typeof o.owner === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockableCoinsRequest.typeUrl ||
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
        const message = createBaseAccountUnlockableCoinsRequest();
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
        const message = createBaseAccountUnlockableCoinsRequest();
        message.owner = object.owner ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockableCoinsRequest();
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
        return AccountUnlockableCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-unlockable-coins-request',
            value: AccountUnlockableCoinsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockableCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockableCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountUnlockableCoinsRequest',
            value: AccountUnlockableCoinsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountUnlockableCoinsRequest.typeUrl, AccountUnlockableCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockableCoinsRequest.aminoType, AccountUnlockableCoinsRequest.typeUrl);
function createBaseAccountUnlockableCoinsResponse() {
    return {
        coins: [],
    };
}
export const AccountUnlockableCoinsResponse = {
    typeUrl: '/osmosis.lockup.AccountUnlockableCoinsResponse',
    aminoType: 'osmosis/lockup/account-unlockable-coins-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockableCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockableCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockableCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockableCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseAccountUnlockableCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockableCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockableCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-unlockable-coins-response',
            value: AccountUnlockableCoinsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockableCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockableCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountUnlockableCoinsResponse',
            value: AccountUnlockableCoinsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountUnlockableCoinsResponse.typeUrl, AccountUnlockableCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockableCoinsResponse.aminoType, AccountUnlockableCoinsResponse.typeUrl);
function createBaseAccountUnlockingCoinsRequest() {
    return {
        owner: '',
    };
}
export const AccountUnlockingCoinsRequest = {
    typeUrl: '/osmosis.lockup.AccountUnlockingCoinsRequest',
    aminoType: 'osmosis/lockup/account-unlocking-coins-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockingCoinsRequest.typeUrl ||
                typeof o.owner === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockingCoinsRequest.typeUrl ||
                typeof o.owner === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockingCoinsRequest.typeUrl ||
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
        const message = createBaseAccountUnlockingCoinsRequest();
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
        const message = createBaseAccountUnlockingCoinsRequest();
        message.owner = object.owner ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockingCoinsRequest();
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
        return AccountUnlockingCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-unlocking-coins-request',
            value: AccountUnlockingCoinsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockingCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockingCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountUnlockingCoinsRequest',
            value: AccountUnlockingCoinsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountUnlockingCoinsRequest.typeUrl, AccountUnlockingCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockingCoinsRequest.aminoType, AccountUnlockingCoinsRequest.typeUrl);
function createBaseAccountUnlockingCoinsResponse() {
    return {
        coins: [],
    };
}
export const AccountUnlockingCoinsResponse = {
    typeUrl: '/osmosis.lockup.AccountUnlockingCoinsResponse',
    aminoType: 'osmosis/lockup/account-unlocking-coins-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockingCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockingCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockingCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockingCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseAccountUnlockingCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockingCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockingCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-unlocking-coins-response',
            value: AccountUnlockingCoinsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockingCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockingCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountUnlockingCoinsResponse',
            value: AccountUnlockingCoinsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountUnlockingCoinsResponse.typeUrl, AccountUnlockingCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockingCoinsResponse.aminoType, AccountUnlockingCoinsResponse.typeUrl);
function createBaseAccountLockedCoinsRequest() {
    return {
        owner: '',
    };
}
export const AccountLockedCoinsRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedCoinsRequest',
    aminoType: 'osmosis/lockup/account-locked-coins-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedCoinsRequest.typeUrl ||
                typeof o.owner === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedCoinsRequest.typeUrl ||
                typeof o.owner === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedCoinsRequest.typeUrl ||
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
        const message = createBaseAccountLockedCoinsRequest();
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
        const message = createBaseAccountLockedCoinsRequest();
        message.owner = object.owner ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedCoinsRequest();
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
        return AccountLockedCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-coins-request',
            value: AccountLockedCoinsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedCoinsRequest',
            value: AccountLockedCoinsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedCoinsRequest.typeUrl, AccountLockedCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedCoinsRequest.aminoType, AccountLockedCoinsRequest.typeUrl);
function createBaseAccountLockedCoinsResponse() {
    return {
        coins: [],
    };
}
export const AccountLockedCoinsResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedCoinsResponse',
    aminoType: 'osmosis/lockup/account-locked-coins-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseAccountLockedCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-coins-response',
            value: AccountLockedCoinsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedCoinsResponse',
            value: AccountLockedCoinsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedCoinsResponse.typeUrl, AccountLockedCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedCoinsResponse.aminoType, AccountLockedCoinsResponse.typeUrl);
function createBaseAccountLockedPastTimeRequest() {
    return {
        owner: '',
        timestamp: new Date(),
    };
}
export const AccountLockedPastTimeRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedPastTimeRequest',
    aminoType: 'osmosis/lockup/account-locked-past-time-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.is(o.timestamp))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.isSDK(o.timestamp))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.isAmino(o.timestamp))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeRequest();
        message.owner = object.owner ?? '';
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.timestamp = message.timestamp
            ? Timestamp.toAmino(toTimestamp(message.timestamp))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-past-time-request',
            value: AccountLockedPastTimeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedPastTimeRequest',
            value: AccountLockedPastTimeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedPastTimeRequest.typeUrl, AccountLockedPastTimeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeRequest.aminoType, AccountLockedPastTimeRequest.typeUrl);
function createBaseAccountLockedPastTimeResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedPastTimeResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedPastTimeResponse',
    aminoType: 'osmosis/lockup/account-locked-past-time-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-past-time-response',
            value: AccountLockedPastTimeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedPastTimeResponse',
            value: AccountLockedPastTimeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedPastTimeResponse.typeUrl, AccountLockedPastTimeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeResponse.aminoType, AccountLockedPastTimeResponse.typeUrl);
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
    return {
        owner: '',
        timestamp: new Date(),
    };
}
export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest',
    aminoType: 'osmosis/lockup/account-locked-past-time-not-unlocking-only-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.is(o.timestamp))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.isSDK(o.timestamp))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.isAmino(o.timestamp))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        message.owner = object.owner ?? '';
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.timestamp = message.timestamp
            ? Timestamp.toAmino(toTimestamp(message.timestamp))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-past-time-not-unlocking-only-request',
            value: AccountLockedPastTimeNotUnlockingOnlyRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest',
            value: AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl, AccountLockedPastTimeNotUnlockingOnlyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeNotUnlockingOnlyRequest.aminoType, AccountLockedPastTimeNotUnlockingOnlyRequest.typeUrl);
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse',
    aminoType: 'osmosis/lockup/account-locked-past-time-not-unlocking-only-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-past-time-not-unlocking-only-response',
            value: AccountLockedPastTimeNotUnlockingOnlyResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse',
            value: AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl, AccountLockedPastTimeNotUnlockingOnlyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeNotUnlockingOnlyResponse.aminoType, AccountLockedPastTimeNotUnlockingOnlyResponse.typeUrl);
function createBaseAccountUnlockedBeforeTimeRequest() {
    return {
        owner: '',
        timestamp: new Date(),
    };
}
export const AccountUnlockedBeforeTimeRequest = {
    typeUrl: '/osmosis.lockup.AccountUnlockedBeforeTimeRequest',
    aminoType: 'osmosis/lockup/account-unlocked-before-time-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockedBeforeTimeRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.is(o.timestamp))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockedBeforeTimeRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.isSDK(o.timestamp))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockedBeforeTimeRequest.typeUrl ||
                (typeof o.owner === 'string' && Timestamp.isAmino(o.timestamp))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        message.owner = object.owner ?? '';
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.timestamp = message.timestamp
            ? Timestamp.toAmino(toTimestamp(message.timestamp))
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockedBeforeTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-unlocked-before-time-request',
            value: AccountUnlockedBeforeTimeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockedBeforeTimeRequest.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockedBeforeTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountUnlockedBeforeTimeRequest',
            value: AccountUnlockedBeforeTimeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountUnlockedBeforeTimeRequest.typeUrl, AccountUnlockedBeforeTimeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockedBeforeTimeRequest.aminoType, AccountUnlockedBeforeTimeRequest.typeUrl);
function createBaseAccountUnlockedBeforeTimeResponse() {
    return {
        locks: [],
    };
}
export const AccountUnlockedBeforeTimeResponse = {
    typeUrl: '/osmosis.lockup.AccountUnlockedBeforeTimeResponse',
    aminoType: 'osmosis/lockup/account-unlocked-before-time-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockedBeforeTimeResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockedBeforeTimeResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountUnlockedBeforeTimeResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockedBeforeTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-unlocked-before-time-response',
            value: AccountUnlockedBeforeTimeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockedBeforeTimeResponse.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockedBeforeTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountUnlockedBeforeTimeResponse',
            value: AccountUnlockedBeforeTimeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountUnlockedBeforeTimeResponse.typeUrl, AccountUnlockedBeforeTimeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountUnlockedBeforeTimeResponse.aminoType, AccountUnlockedBeforeTimeResponse.typeUrl);
function createBaseAccountLockedPastTimeDenomRequest() {
    return {
        owner: '',
        timestamp: new Date(),
        denom: '',
    };
}
export const AccountLockedPastTimeDenomRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedPastTimeDenomRequest',
    aminoType: 'osmosis/lockup/account-locked-past-time-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeDenomRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Timestamp.is(o.timestamp) &&
                    typeof o.denom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeDenomRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Timestamp.isSDK(o.timestamp) &&
                    typeof o.denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeDenomRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Timestamp.isAmino(o.timestamp) &&
                    typeof o.denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomRequest();
        message.owner = object.owner ?? '';
        message.timestamp = object.timestamp ?? undefined;
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeDenomRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.timestamp = message.timestamp
            ? Timestamp.toAmino(toTimestamp(message.timestamp))
            : undefined;
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-past-time-denom-request',
            value: AccountLockedPastTimeDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeDenomRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedPastTimeDenomRequest',
            value: AccountLockedPastTimeDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedPastTimeDenomRequest.typeUrl, AccountLockedPastTimeDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeDenomRequest.aminoType, AccountLockedPastTimeDenomRequest.typeUrl);
function createBaseAccountLockedPastTimeDenomResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedPastTimeDenomResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedPastTimeDenomResponse',
    aminoType: 'osmosis/lockup/account-locked-past-time-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeDenomResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeDenomResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedPastTimeDenomResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-past-time-denom-response',
            value: AccountLockedPastTimeDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeDenomResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedPastTimeDenomResponse',
            value: AccountLockedPastTimeDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedPastTimeDenomResponse.typeUrl, AccountLockedPastTimeDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedPastTimeDenomResponse.aminoType, AccountLockedPastTimeDenomResponse.typeUrl);
function createBaseLockedDenomRequest() {
    return {
        denom: '',
        duration: Duration.fromPartial({}),
    };
}
export const LockedDenomRequest = {
    typeUrl: '/osmosis.lockup.LockedDenomRequest',
    aminoType: 'osmosis/lockup/locked-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === LockedDenomRequest.typeUrl ||
                (typeof o.denom === 'string' && Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockedDenomRequest.typeUrl ||
                (typeof o.denom === 'string' && Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockedDenomRequest.typeUrl ||
                (typeof o.denom === 'string' && Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
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
        const message = createBaseLockedDenomRequest();
        message.denom = object.denom ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockedDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/locked-denom-request',
            value: LockedDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockedDenomRequest.decode(message.value);
    },
    toProto(message) {
        return LockedDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.LockedDenomRequest',
            value: LockedDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockedDenomRequest.typeUrl, LockedDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedDenomRequest.aminoType, LockedDenomRequest.typeUrl);
function createBaseLockedDenomResponse() {
    return {
        amount: '',
    };
}
export const LockedDenomResponse = {
    typeUrl: '/osmosis.lockup.LockedDenomResponse',
    aminoType: 'osmosis/lockup/locked-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === LockedDenomResponse.typeUrl ||
                typeof o.amount === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockedDenomResponse.typeUrl ||
                typeof o.amount === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockedDenomResponse.typeUrl ||
                typeof o.amount === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomResponse();
        message.amount = object.amount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockedDenomResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount === '' ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/locked-denom-response',
            value: LockedDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockedDenomResponse.decode(message.value);
    },
    toProto(message) {
        return LockedDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.LockedDenomResponse',
            value: LockedDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockedDenomResponse.typeUrl, LockedDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedDenomResponse.aminoType, LockedDenomResponse.typeUrl);
function createBaseLockedRequest() {
    return {
        lockId: BigInt(0),
    };
}
export const LockedRequest = {
    typeUrl: '/osmosis.lockup.LockedRequest',
    aminoType: 'osmosis/lockup/locked-request',
    is(o) {
        return (o &&
            (o.$typeUrl === LockedRequest.typeUrl || typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockedRequest.typeUrl || typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockedRequest.typeUrl || typeof o.lock_id === 'bigint'));
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
        const message = createBaseLockedRequest();
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
        const message = createBaseLockedRequest();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockedRequest();
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
        return LockedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/locked-request',
            value: LockedRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockedRequest.decode(message.value);
    },
    toProto(message) {
        return LockedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.LockedRequest',
            value: LockedRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockedRequest.typeUrl, LockedRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedRequest.aminoType, LockedRequest.typeUrl);
function createBaseLockedResponse() {
    return {
        lock: undefined,
    };
}
export const LockedResponse = {
    typeUrl: '/osmosis.lockup.LockedResponse',
    aminoType: 'osmosis/lockup/locked-response',
    is(o) {
        return o && o.$typeUrl === LockedResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === LockedResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === LockedResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock !== undefined) {
            PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock = PeriodLock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockedResponse();
        message.lock =
            object.lock !== undefined && object.lock !== null
                ? PeriodLock.fromPartial(object.lock)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockedResponse();
        if (object.lock !== undefined && object.lock !== null) {
            message.lock = PeriodLock.fromAmino(object.lock);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock = message.lock ? PeriodLock.toAmino(message.lock) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/locked-response',
            value: LockedResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockedResponse.decode(message.value);
    },
    toProto(message) {
        return LockedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.LockedResponse',
            value: LockedResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockedResponse.typeUrl, LockedResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LockedResponse.aminoType, LockedResponse.typeUrl);
function createBaseLockRewardReceiverRequest() {
    return {
        lockId: BigInt(0),
    };
}
export const LockRewardReceiverRequest = {
    typeUrl: '/osmosis.lockup.LockRewardReceiverRequest',
    aminoType: 'osmosis/lockup/lock-reward-receiver-request',
    is(o) {
        return (o &&
            (o.$typeUrl === LockRewardReceiverRequest.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockRewardReceiverRequest.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockRewardReceiverRequest.typeUrl ||
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
        const message = createBaseLockRewardReceiverRequest();
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
        const message = createBaseLockRewardReceiverRequest();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockRewardReceiverRequest();
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
        return LockRewardReceiverRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/lock-reward-receiver-request',
            value: LockRewardReceiverRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockRewardReceiverRequest.decode(message.value);
    },
    toProto(message) {
        return LockRewardReceiverRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.LockRewardReceiverRequest',
            value: LockRewardReceiverRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockRewardReceiverRequest.typeUrl, LockRewardReceiverRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LockRewardReceiverRequest.aminoType, LockRewardReceiverRequest.typeUrl);
function createBaseLockRewardReceiverResponse() {
    return {
        rewardReceiver: '',
    };
}
export const LockRewardReceiverResponse = {
    typeUrl: '/osmosis.lockup.LockRewardReceiverResponse',
    aminoType: 'osmosis/lockup/lock-reward-receiver-response',
    is(o) {
        return (o &&
            (o.$typeUrl === LockRewardReceiverResponse.typeUrl ||
                typeof o.rewardReceiver === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LockRewardReceiverResponse.typeUrl ||
                typeof o.reward_receiver === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LockRewardReceiverResponse.typeUrl ||
                typeof o.reward_receiver === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.rewardReceiver !== '') {
            writer.uint32(10).string(message.rewardReceiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockRewardReceiverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseLockRewardReceiverResponse();
        message.rewardReceiver = object.rewardReceiver ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockRewardReceiverResponse();
        if (object.reward_receiver !== undefined &&
            object.reward_receiver !== null) {
            message.rewardReceiver = object.reward_receiver;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reward_receiver =
            message.rewardReceiver === '' ? undefined : message.rewardReceiver;
        return obj;
    },
    fromAminoMsg(object) {
        return LockRewardReceiverResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/lock-reward-receiver-response',
            value: LockRewardReceiverResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LockRewardReceiverResponse.decode(message.value);
    },
    toProto(message) {
        return LockRewardReceiverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.LockRewardReceiverResponse',
            value: LockRewardReceiverResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LockRewardReceiverResponse.typeUrl, LockRewardReceiverResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LockRewardReceiverResponse.aminoType, LockRewardReceiverResponse.typeUrl);
function createBaseNextLockIDRequest() {
    return {};
}
export const NextLockIDRequest = {
    typeUrl: '/osmosis.lockup.NextLockIDRequest',
    aminoType: 'osmosis/lockup/next-lock-id-request',
    is(o) {
        return o && o.$typeUrl === NextLockIDRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === NextLockIDRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === NextLockIDRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextLockIDRequest();
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
        const message = createBaseNextLockIDRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseNextLockIDRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return NextLockIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/next-lock-id-request',
            value: NextLockIDRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NextLockIDRequest.decode(message.value);
    },
    toProto(message) {
        return NextLockIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.NextLockIDRequest',
            value: NextLockIDRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NextLockIDRequest.typeUrl, NextLockIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NextLockIDRequest.aminoType, NextLockIDRequest.typeUrl);
function createBaseNextLockIDResponse() {
    return {
        lockId: BigInt(0),
    };
}
export const NextLockIDResponse = {
    typeUrl: '/osmosis.lockup.NextLockIDResponse',
    aminoType: 'osmosis/lockup/next-lock-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === NextLockIDResponse.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === NextLockIDResponse.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === NextLockIDResponse.typeUrl ||
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
        const message = createBaseNextLockIDResponse();
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
        const message = createBaseNextLockIDResponse();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNextLockIDResponse();
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
        return NextLockIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/next-lock-id-response',
            value: NextLockIDResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NextLockIDResponse.decode(message.value);
    },
    toProto(message) {
        return NextLockIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.NextLockIDResponse',
            value: NextLockIDResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NextLockIDResponse.typeUrl, NextLockIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NextLockIDResponse.aminoType, NextLockIDResponse.typeUrl);
function createBaseSyntheticLockupsByLockupIDRequest() {
    return {
        lockId: BigInt(0),
    };
}
export const SyntheticLockupsByLockupIDRequest = {
    typeUrl: '/osmosis.lockup.SyntheticLockupsByLockupIDRequest',
    aminoType: 'osmosis/lockup/synthetic-lockups-by-lockup-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupsByLockupIDRequest.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupsByLockupIDRequest.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupsByLockupIDRequest.typeUrl ||
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
        const message = createBaseSyntheticLockupsByLockupIDRequest();
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
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLockupsByLockupIDRequest();
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
        return SyntheticLockupsByLockupIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/synthetic-lockups-by-lockup-id-request',
            value: SyntheticLockupsByLockupIDRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SyntheticLockupsByLockupIDRequest.decode(message.value);
    },
    toProto(message) {
        return SyntheticLockupsByLockupIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.SyntheticLockupsByLockupIDRequest',
            value: SyntheticLockupsByLockupIDRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SyntheticLockupsByLockupIDRequest.typeUrl, SyntheticLockupsByLockupIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLockupsByLockupIDRequest.aminoType, SyntheticLockupsByLockupIDRequest.typeUrl);
function createBaseSyntheticLockupsByLockupIDResponse() {
    return {
        syntheticLocks: [],
    };
}
export const SyntheticLockupsByLockupIDResponse = {
    typeUrl: '/osmosis.lockup.SyntheticLockupsByLockupIDResponse',
    aminoType: 'osmosis/lockup/synthetic-lockups-by-lockup-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupsByLockupIDResponse.typeUrl ||
                (Array.isArray(o.syntheticLocks) &&
                    (!o.syntheticLocks.length || SyntheticLock.is(o.syntheticLocks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupsByLockupIDResponse.typeUrl ||
                (Array.isArray(o.synthetic_locks) &&
                    (!o.synthetic_locks.length ||
                        SyntheticLock.isSDK(o.synthetic_locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupsByLockupIDResponse.typeUrl ||
                (Array.isArray(o.synthetic_locks) &&
                    (!o.synthetic_locks.length ||
                        SyntheticLock.isAmino(o.synthetic_locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.syntheticLocks) {
            SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.syntheticLocks =
            object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.syntheticLocks =
            object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = message.syntheticLocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SyntheticLockupsByLockupIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/synthetic-lockups-by-lockup-id-response',
            value: SyntheticLockupsByLockupIDResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SyntheticLockupsByLockupIDResponse.decode(message.value);
    },
    toProto(message) {
        return SyntheticLockupsByLockupIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.SyntheticLockupsByLockupIDResponse',
            value: SyntheticLockupsByLockupIDResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SyntheticLockupsByLockupIDResponse.typeUrl, SyntheticLockupsByLockupIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLockupsByLockupIDResponse.aminoType, SyntheticLockupsByLockupIDResponse.typeUrl);
function createBaseSyntheticLockupByLockupIDRequest() {
    return {
        lockId: BigInt(0),
    };
}
export const SyntheticLockupByLockupIDRequest = {
    typeUrl: '/osmosis.lockup.SyntheticLockupByLockupIDRequest',
    aminoType: 'osmosis/lockup/synthetic-lockup-by-lockup-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupByLockupIDRequest.typeUrl ||
                typeof o.lockId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupByLockupIDRequest.typeUrl ||
                typeof o.lock_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupByLockupIDRequest.typeUrl ||
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
        const message = createBaseSyntheticLockupByLockupIDRequest();
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
        const message = createBaseSyntheticLockupByLockupIDRequest();
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? BigInt(object.lockId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLockupByLockupIDRequest();
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
        return SyntheticLockupByLockupIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/synthetic-lockup-by-lockup-id-request',
            value: SyntheticLockupByLockupIDRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SyntheticLockupByLockupIDRequest.decode(message.value);
    },
    toProto(message) {
        return SyntheticLockupByLockupIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.SyntheticLockupByLockupIDRequest',
            value: SyntheticLockupByLockupIDRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SyntheticLockupByLockupIDRequest.typeUrl, SyntheticLockupByLockupIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLockupByLockupIDRequest.aminoType, SyntheticLockupByLockupIDRequest.typeUrl);
function createBaseSyntheticLockupByLockupIDResponse() {
    return {
        syntheticLock: SyntheticLock.fromPartial({}),
    };
}
export const SyntheticLockupByLockupIDResponse = {
    typeUrl: '/osmosis.lockup.SyntheticLockupByLockupIDResponse',
    aminoType: 'osmosis/lockup/synthetic-lockup-by-lockup-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupByLockupIDResponse.typeUrl ||
                SyntheticLock.is(o.syntheticLock)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupByLockupIDResponse.typeUrl ||
                SyntheticLock.isSDK(o.synthetic_lock)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SyntheticLockupByLockupIDResponse.typeUrl ||
                SyntheticLock.isAmino(o.synthetic_lock)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.syntheticLock !== undefined) {
            SyntheticLock.encode(message.syntheticLock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syntheticLock = SyntheticLock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupByLockupIDResponse();
        message.syntheticLock =
            object.syntheticLock !== undefined && object.syntheticLock !== null
                ? SyntheticLock.fromPartial(object.syntheticLock)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSyntheticLockupByLockupIDResponse();
        if (object.synthetic_lock !== undefined && object.synthetic_lock !== null) {
            message.syntheticLock = SyntheticLock.fromAmino(object.synthetic_lock);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.synthetic_lock = message.syntheticLock
            ? SyntheticLock.toAmino(message.syntheticLock)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SyntheticLockupByLockupIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/synthetic-lockup-by-lockup-id-response',
            value: SyntheticLockupByLockupIDResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SyntheticLockupByLockupIDResponse.decode(message.value);
    },
    toProto(message) {
        return SyntheticLockupByLockupIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.SyntheticLockupByLockupIDResponse',
            value: SyntheticLockupByLockupIDResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SyntheticLockupByLockupIDResponse.typeUrl, SyntheticLockupByLockupIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLockupByLockupIDResponse.aminoType, SyntheticLockupByLockupIDResponse.typeUrl);
function createBaseAccountLockedLongerDurationRequest() {
    return {
        owner: '',
        duration: Duration.fromPartial({}),
    };
}
export const AccountLockedLongerDurationRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedLongerDurationRequest',
    aminoType: 'osmosis/lockup/account-locked-longer-duration-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const message = createBaseAccountLockedLongerDurationRequest();
        message.owner = object.owner ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-longer-duration-request',
            value: AccountLockedLongerDurationRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedLongerDurationRequest',
            value: AccountLockedLongerDurationRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationRequest.typeUrl, AccountLockedLongerDurationRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationRequest.aminoType, AccountLockedLongerDurationRequest.typeUrl);
function createBaseAccountLockedLongerDurationResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedLongerDurationResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedLongerDurationResponse',
    aminoType: 'osmosis/lockup/account-locked-longer-duration-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-longer-duration-response',
            value: AccountLockedLongerDurationResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedLongerDurationResponse',
            value: AccountLockedLongerDurationResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationResponse.typeUrl, AccountLockedLongerDurationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationResponse.aminoType, AccountLockedLongerDurationResponse.typeUrl);
function createBaseAccountLockedDurationRequest() {
    return {
        owner: '',
        duration: Duration.fromPartial({}),
    };
}
export const AccountLockedDurationRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedDurationRequest',
    aminoType: 'osmosis/lockup/account-locked-duration-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedDurationRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedDurationRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedDurationRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const message = createBaseAccountLockedDurationRequest();
        message.owner = object.owner ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedDurationRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-duration-request',
            value: AccountLockedDurationRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedDurationRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedDurationRequest',
            value: AccountLockedDurationRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedDurationRequest.typeUrl, AccountLockedDurationRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedDurationRequest.aminoType, AccountLockedDurationRequest.typeUrl);
function createBaseAccountLockedDurationResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedDurationResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedDurationResponse',
    aminoType: 'osmosis/lockup/account-locked-duration-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedDurationResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedDurationResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedDurationResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-duration-response',
            value: AccountLockedDurationResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedDurationResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedDurationResponse',
            value: AccountLockedDurationResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedDurationResponse.typeUrl, AccountLockedDurationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedDurationResponse.aminoType, AccountLockedDurationResponse.typeUrl);
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
    return {
        owner: '',
        duration: Duration.fromPartial({}),
    };
}
export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest',
    aminoType: 'osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.is(o.duration))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.isSDK(o.duration))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl ||
                (typeof o.owner === 'string' && Duration.isAmino(o.duration))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        message.owner = object.owner ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request',
            value: AccountLockedLongerDurationNotUnlockingOnlyRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest',
            value: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl, AccountLockedLongerDurationNotUnlockingOnlyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationNotUnlockingOnlyRequest.aminoType, AccountLockedLongerDurationNotUnlockingOnlyRequest.typeUrl);
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse',
    aminoType: 'osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response',
    is(o) {
        return (o &&
            (o.$typeUrl ===
                AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl ===
                AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl ===
                AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response',
            value: AccountLockedLongerDurationNotUnlockingOnlyResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse',
            value: AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl, AccountLockedLongerDurationNotUnlockingOnlyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationNotUnlockingOnlyResponse.aminoType, AccountLockedLongerDurationNotUnlockingOnlyResponse.typeUrl);
function createBaseAccountLockedLongerDurationDenomRequest() {
    return {
        owner: '',
        duration: Duration.fromPartial({}),
        denom: '',
    };
}
export const AccountLockedLongerDurationDenomRequest = {
    typeUrl: '/osmosis.lockup.AccountLockedLongerDurationDenomRequest',
    aminoType: 'osmosis/lockup/account-locked-longer-duration-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationDenomRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Duration.is(o.duration) &&
                    typeof o.denom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationDenomRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Duration.isSDK(o.duration) &&
                    typeof o.denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationDenomRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Duration.isAmino(o.duration) &&
                    typeof o.denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomRequest();
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
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        message.owner = object.owner ?? '';
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? Duration.fromPartial(object.duration)
                : undefined;
        message.denom = object.denom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        obj.duration = message.duration
            ? Duration.toAmino(message.duration)
            : undefined;
        obj.denom = message.denom === '' ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-longer-duration-denom-request',
            value: AccountLockedLongerDurationDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationDenomRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedLongerDurationDenomRequest',
            value: AccountLockedLongerDurationDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationDenomRequest.typeUrl, AccountLockedLongerDurationDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationDenomRequest.aminoType, AccountLockedLongerDurationDenomRequest.typeUrl);
function createBaseAccountLockedLongerDurationDenomResponse() {
    return {
        locks: [],
    };
}
export const AccountLockedLongerDurationDenomResponse = {
    typeUrl: '/osmosis.lockup.AccountLockedLongerDurationDenomResponse',
    aminoType: 'osmosis/lockup/account-locked-longer-duration-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationDenomResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.is(o.locks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationDenomResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isSDK(o.locks[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AccountLockedLongerDurationDenomResponse.typeUrl ||
                (Array.isArray(o.locks) &&
                    (!o.locks.length || PeriodLock.isAmino(o.locks[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/account-locked-longer-duration-denom-response',
            value: AccountLockedLongerDurationDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationDenomResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.AccountLockedLongerDurationDenomResponse',
            value: AccountLockedLongerDurationDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AccountLockedLongerDurationDenomResponse.typeUrl, AccountLockedLongerDurationDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AccountLockedLongerDurationDenomResponse.aminoType, AccountLockedLongerDurationDenomResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/osmosis.lockup.QueryParamsRequest',
    aminoType: 'osmosis/lockup/query-params-request',
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/query-params-request',
            value: QueryParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.QueryParamsRequest',
            value: QueryParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const QueryParamsResponse = {
    typeUrl: '/osmosis.lockup.QueryParamsResponse',
    aminoType: 'osmosis/lockup/query-params-response',
    is(o) {
        return (o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/lockup/query-params-response',
            value: QueryParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.lockup.QueryParamsResponse',
            value: QueryParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
