"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDelegateBondedTokensResponse = exports.MsgDelegateBondedTokens = exports.MsgWithdrawDelegationRewardsResponse = exports.MsgWithdrawDelegationRewards = exports.MsgRedelegateValidatorSetResponse = exports.MsgRedelegateValidatorSet = exports.MsgUndelegateFromRebalancedValidatorSetResponse = exports.MsgUndelegateFromRebalancedValidatorSet = exports.MsgUndelegateFromValidatorSetResponse = exports.MsgUndelegateFromValidatorSet = exports.MsgDelegateToValidatorSetResponse = exports.MsgDelegateToValidatorSet = exports.MsgSetValidatorSetPreferenceResponse = exports.MsgSetValidatorSetPreference = void 0;
//@ts-nocheck
const state_1 = require("./state");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgSetValidatorSetPreference() {
    return {
        delegator: '',
        preferences: [],
    };
}
exports.MsgSetValidatorSetPreference = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference',
    aminoType: 'osmosis/MsgSetValidatorSetPreference',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetValidatorSetPreference.typeUrl ||
                (typeof o.delegator === 'string' &&
                    Array.isArray(o.preferences) &&
                    (!o.preferences.length || state_1.ValidatorPreference.is(o.preferences[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetValidatorSetPreference.typeUrl ||
                (typeof o.delegator === 'string' &&
                    Array.isArray(o.preferences) &&
                    (!o.preferences.length ||
                        state_1.ValidatorPreference.isSDK(o.preferences[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetValidatorSetPreference.typeUrl ||
                (typeof o.delegator === 'string' &&
                    Array.isArray(o.preferences) &&
                    (!o.preferences.length ||
                        state_1.ValidatorPreference.isAmino(o.preferences[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetValidatorSetPreference();
        message.delegator = object.delegator ?? '';
        message.preferences =
            object.preferences?.map(e => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetValidatorSetPreference();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        message.preferences =
            object.preferences?.map(e => state_1.ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetValidatorSetPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgSetValidatorSetPreference',
            value: exports.MsgSetValidatorSetPreference.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetValidatorSetPreference.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetValidatorSetPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference',
            value: exports.MsgSetValidatorSetPreference.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetValidatorSetPreference.typeUrl, exports.MsgSetValidatorSetPreference);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetValidatorSetPreference.aminoType, exports.MsgSetValidatorSetPreference.typeUrl);
function createBaseMsgSetValidatorSetPreferenceResponse() {
    return {};
}
exports.MsgSetValidatorSetPreferenceResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse',
    aminoType: 'osmosis/valsetpref/set-validator-set-preference-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetValidatorSetPreferenceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetValidatorSetPreferenceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetValidatorSetPreferenceResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
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
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetValidatorSetPreferenceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/set-validator-set-preference-response',
            value: exports.MsgSetValidatorSetPreferenceResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetValidatorSetPreferenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetValidatorSetPreferenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse',
            value: exports.MsgSetValidatorSetPreferenceResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetValidatorSetPreferenceResponse.typeUrl, exports.MsgSetValidatorSetPreferenceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetValidatorSetPreferenceResponse.aminoType, exports.MsgSetValidatorSetPreferenceResponse.typeUrl);
function createBaseMsgDelegateToValidatorSet() {
    return {
        delegator: '',
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgDelegateToValidatorSet = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet',
    aminoType: 'osmosis/MsgDelegateToValidatorSet',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgDelegateToValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.is(o.coin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgDelegateToValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.isSDK(o.coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgDelegateToValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.isAmino(o.coin))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgDelegateToValidatorSet();
        message.delegator = object.delegator ?? '';
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegateToValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateToValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgDelegateToValidatorSet',
            value: exports.MsgDelegateToValidatorSet.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateToValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateToValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet',
            value: exports.MsgDelegateToValidatorSet.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDelegateToValidatorSet.typeUrl, exports.MsgDelegateToValidatorSet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDelegateToValidatorSet.aminoType, exports.MsgDelegateToValidatorSet.typeUrl);
function createBaseMsgDelegateToValidatorSetResponse() {
    return {};
}
exports.MsgDelegateToValidatorSetResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse',
    aminoType: 'osmosis/valsetpref/delegate-to-validator-set-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgDelegateToValidatorSetResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgDelegateToValidatorSetResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDelegateToValidatorSetResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateToValidatorSetResponse();
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
        const message = createBaseMsgDelegateToValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateToValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateToValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/delegate-to-validator-set-response',
            value: exports.MsgDelegateToValidatorSetResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateToValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateToValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse',
            value: exports.MsgDelegateToValidatorSetResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDelegateToValidatorSetResponse.typeUrl, exports.MsgDelegateToValidatorSetResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDelegateToValidatorSetResponse.aminoType, exports.MsgDelegateToValidatorSetResponse.typeUrl);
function createBaseMsgUndelegateFromValidatorSet() {
    return {
        delegator: '',
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgUndelegateFromValidatorSet = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
    aminoType: 'osmosis/MsgUndelegateFromValidatorSet',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUndelegateFromValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.is(o.coin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUndelegateFromValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.isSDK(o.coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUndelegateFromValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.isAmino(o.coin))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
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
        const message = createBaseMsgUndelegateFromValidatorSet();
        message.delegator = object.delegator ?? '';
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegateFromValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateFromValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgUndelegateFromValidatorSet',
            value: exports.MsgUndelegateFromValidatorSet.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateFromValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateFromValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet',
            value: exports.MsgUndelegateFromValidatorSet.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndelegateFromValidatorSet.typeUrl, exports.MsgUndelegateFromValidatorSet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUndelegateFromValidatorSet.aminoType, exports.MsgUndelegateFromValidatorSet.typeUrl);
function createBaseMsgUndelegateFromValidatorSetResponse() {
    return {};
}
exports.MsgUndelegateFromValidatorSetResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse',
    aminoType: 'osmosis/valsetpref/undelegate-from-validator-set-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgUndelegateFromValidatorSetResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUndelegateFromValidatorSetResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUndelegateFromValidatorSetResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
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
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUndelegateFromValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/undelegate-from-validator-set-response',
            value: exports.MsgUndelegateFromValidatorSetResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateFromValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateFromValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse',
            value: exports.MsgUndelegateFromValidatorSetResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndelegateFromValidatorSetResponse.typeUrl, exports.MsgUndelegateFromValidatorSetResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUndelegateFromValidatorSetResponse.aminoType, exports.MsgUndelegateFromValidatorSetResponse.typeUrl);
function createBaseMsgUndelegateFromRebalancedValidatorSet() {
    return {
        delegator: '',
        coin: coin_1.Coin.fromPartial({}),
    };
}
exports.MsgUndelegateFromRebalancedValidatorSet = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
    aminoType: 'osmosis/MsgUndelegateFromRebalValset',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUndelegateFromRebalancedValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.is(o.coin))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUndelegateFromRebalancedValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.isSDK(o.coin))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgUndelegateFromRebalancedValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' && coin_1.Coin.isAmino(o.coin))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
        message.delegator = object.delegator ?? '';
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegateFromRebalancedValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_1.Coin.fromAmino(object.coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        obj.coin = message.coin ? coin_1.Coin.toAmino(message.coin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateFromRebalancedValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgUndelegateFromRebalValset',
            value: exports.MsgUndelegateFromRebalancedValidatorSet.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateFromRebalancedValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateFromRebalancedValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet',
            value: exports.MsgUndelegateFromRebalancedValidatorSet.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndelegateFromRebalancedValidatorSet.typeUrl, exports.MsgUndelegateFromRebalancedValidatorSet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUndelegateFromRebalancedValidatorSet.aminoType, exports.MsgUndelegateFromRebalancedValidatorSet.typeUrl);
function createBaseMsgUndelegateFromRebalancedValidatorSetResponse() {
    return {};
}
exports.MsgUndelegateFromRebalancedValidatorSetResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse',
    aminoType: 'osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response',
    is(o) {
        return (o &&
            o.$typeUrl === exports.MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl);
    },
    isSDK(o) {
        return (o &&
            o.$typeUrl === exports.MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl);
    },
    isAmino(o) {
        return (o &&
            o.$typeUrl === exports.MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl);
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
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
        const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUndelegateFromRebalancedValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateFromRebalancedValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/undelegate-from-rebalanced-validator-set-response',
            value: exports.MsgUndelegateFromRebalancedValidatorSetResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateFromRebalancedValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateFromRebalancedValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse',
            value: exports.MsgUndelegateFromRebalancedValidatorSetResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl, exports.MsgUndelegateFromRebalancedValidatorSetResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUndelegateFromRebalancedValidatorSetResponse.aminoType, exports.MsgUndelegateFromRebalancedValidatorSetResponse.typeUrl);
function createBaseMsgRedelegateValidatorSet() {
    return {
        delegator: '',
        preferences: [],
    };
}
exports.MsgRedelegateValidatorSet = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet',
    aminoType: 'osmosis/MsgRedelegateValidatorSet',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgRedelegateValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' &&
                    Array.isArray(o.preferences) &&
                    (!o.preferences.length || state_1.ValidatorPreference.is(o.preferences[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgRedelegateValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' &&
                    Array.isArray(o.preferences) &&
                    (!o.preferences.length ||
                        state_1.ValidatorPreference.isSDK(o.preferences[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgRedelegateValidatorSet.typeUrl ||
                (typeof o.delegator === 'string' &&
                    Array.isArray(o.preferences) &&
                    (!o.preferences.length ||
                        state_1.ValidatorPreference.isAmino(o.preferences[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRedelegateValidatorSet();
        message.delegator = object.delegator ?? '';
        message.preferences =
            object.preferences?.map(e => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRedelegateValidatorSet();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        message.preferences =
            object.preferences?.map(e => state_1.ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedelegateValidatorSet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgRedelegateValidatorSet',
            value: exports.MsgRedelegateValidatorSet.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRedelegateValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedelegateValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet',
            value: exports.MsgRedelegateValidatorSet.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRedelegateValidatorSet.typeUrl, exports.MsgRedelegateValidatorSet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRedelegateValidatorSet.aminoType, exports.MsgRedelegateValidatorSet.typeUrl);
function createBaseMsgRedelegateValidatorSetResponse() {
    return {};
}
exports.MsgRedelegateValidatorSetResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse',
    aminoType: 'osmosis/valsetpref/redelegate-validator-set-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgRedelegateValidatorSetResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgRedelegateValidatorSetResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgRedelegateValidatorSetResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedelegateValidatorSetResponse();
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
        const message = createBaseMsgRedelegateValidatorSetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRedelegateValidatorSetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedelegateValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/redelegate-validator-set-response',
            value: exports.MsgRedelegateValidatorSetResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRedelegateValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedelegateValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse',
            value: exports.MsgRedelegateValidatorSetResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRedelegateValidatorSetResponse.typeUrl, exports.MsgRedelegateValidatorSetResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRedelegateValidatorSetResponse.aminoType, exports.MsgRedelegateValidatorSetResponse.typeUrl);
function createBaseMsgWithdrawDelegationRewards() {
    return {
        delegator: '',
    };
}
exports.MsgWithdrawDelegationRewards = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
    aminoType: 'osmosis/MsgWithdrawDelegationRewards',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawDelegationRewards.typeUrl ||
                typeof o.delegator === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawDelegationRewards.typeUrl ||
                typeof o.delegator === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgWithdrawDelegationRewards.typeUrl ||
                typeof o.delegator === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegationRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegationRewards();
        message.delegator = object.delegator ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawDelegationRewards();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDelegationRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/MsgWithdrawDelegationRewards',
            value: exports.MsgWithdrawDelegationRewards.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegationRewards.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegationRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards',
            value: exports.MsgWithdrawDelegationRewards.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawDelegationRewards.typeUrl, exports.MsgWithdrawDelegationRewards);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawDelegationRewards.aminoType, exports.MsgWithdrawDelegationRewards.typeUrl);
function createBaseMsgWithdrawDelegationRewardsResponse() {
    return {};
}
exports.MsgWithdrawDelegationRewardsResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse',
    aminoType: 'osmosis/valsetpref/withdraw-delegation-rewards-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgWithdrawDelegationRewardsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgWithdrawDelegationRewardsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgWithdrawDelegationRewardsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
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
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawDelegationRewardsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/withdraw-delegation-rewards-response',
            value: exports.MsgWithdrawDelegationRewardsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse',
            value: exports.MsgWithdrawDelegationRewardsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawDelegationRewardsResponse.typeUrl, exports.MsgWithdrawDelegationRewardsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawDelegationRewardsResponse.aminoType, exports.MsgWithdrawDelegationRewardsResponse.typeUrl);
function createBaseMsgDelegateBondedTokens() {
    return {
        delegator: '',
        lockID: BigInt(0),
    };
}
exports.MsgDelegateBondedTokens = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens',
    aminoType: 'osmosis/valsetpref/delegate-bonded-tokens',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgDelegateBondedTokens.typeUrl ||
                (typeof o.delegator === 'string' && typeof o.lockID === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgDelegateBondedTokens.typeUrl ||
                (typeof o.delegator === 'string' && typeof o.lockID === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgDelegateBondedTokens.typeUrl ||
                (typeof o.delegator === 'string' && typeof o.lockID === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator !== '') {
            writer.uint32(10).string(message.delegator);
        }
        if (message.lockID !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateBondedTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.lockID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateBondedTokens();
        message.delegator = object.delegator ?? '';
        message.lockID =
            object.lockID !== undefined && object.lockID !== null
                ? BigInt(object.lockID.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegateBondedTokens();
        if (object.delegator !== undefined && object.delegator !== null) {
            message.delegator = object.delegator;
        }
        if (object.lockID !== undefined && object.lockID !== null) {
            message.lockID = BigInt(object.lockID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator === '' ? undefined : message.delegator;
        obj.lockID =
            message.lockID !== BigInt(0) ? message.lockID.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateBondedTokens.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/delegate-bonded-tokens',
            value: exports.MsgDelegateBondedTokens.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateBondedTokens.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateBondedTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens',
            value: exports.MsgDelegateBondedTokens.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDelegateBondedTokens.typeUrl, exports.MsgDelegateBondedTokens);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDelegateBondedTokens.aminoType, exports.MsgDelegateBondedTokens.typeUrl);
function createBaseMsgDelegateBondedTokensResponse() {
    return {};
}
exports.MsgDelegateBondedTokensResponse = {
    typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse',
    aminoType: 'osmosis/valsetpref/delegate-bonded-tokens-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgDelegateBondedTokensResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgDelegateBondedTokensResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDelegateBondedTokensResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateBondedTokensResponse();
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
        const message = createBaseMsgDelegateBondedTokensResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateBondedTokensResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateBondedTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/delegate-bonded-tokens-response',
            value: exports.MsgDelegateBondedTokensResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateBondedTokensResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateBondedTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse',
            value: exports.MsgDelegateBondedTokensResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDelegateBondedTokensResponse.typeUrl, exports.MsgDelegateBondedTokensResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDelegateBondedTokensResponse.aminoType, exports.MsgDelegateBondedTokensResponse.typeUrl);
