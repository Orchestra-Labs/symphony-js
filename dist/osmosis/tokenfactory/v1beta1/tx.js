"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgForceTransferResponse = exports.MsgForceTransfer = exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgSetBeforeSendHookResponse = exports.MsgSetBeforeSendHook = exports.MsgChangeAdminResponse = exports.MsgChangeAdmin = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const bank_1 = require("../../../cosmos/bank/v1beta1/bank");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgCreateDenom() {
    return {
        sender: '',
        subdenom: '',
    };
}
exports.MsgCreateDenom = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenom',
    aminoType: 'osmosis/tokenfactory/create-denom',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateDenom.typeUrl ||
                (typeof o.sender === 'string' && typeof o.subdenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateDenom.typeUrl ||
                (typeof o.sender === 'string' && typeof o.subdenom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateDenom.typeUrl ||
                (typeof o.sender === 'string' && typeof o.subdenom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== '') {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.sender = object.sender ?? '';
        message.subdenom = object.subdenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDenom();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.subdenom !== undefined && object.subdenom !== null) {
            message.subdenom = object.subdenom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.subdenom = message.subdenom === '' ? undefined : message.subdenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/create-denom',
            value: exports.MsgCreateDenom.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenom',
            value: exports.MsgCreateDenom.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateDenom.typeUrl, exports.MsgCreateDenom);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateDenom.aminoType, exports.MsgCreateDenom.typeUrl);
function createBaseMsgCreateDenomResponse() {
    return {
        newTokenDenom: '',
    };
}
exports.MsgCreateDenomResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse',
    aminoType: 'osmosis/tokenfactory/create-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateDenomResponse.typeUrl ||
                typeof o.newTokenDenom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateDenomResponse.typeUrl ||
                typeof o.new_token_denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgCreateDenomResponse.typeUrl ||
                typeof o.new_token_denom === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.newTokenDenom !== '') {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newTokenDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenomResponse();
        message.newTokenDenom = object.newTokenDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDenomResponse();
        if (object.new_token_denom !== undefined &&
            object.new_token_denom !== null) {
            message.newTokenDenom = object.new_token_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_token_denom =
            message.newTokenDenom === '' ? undefined : message.newTokenDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/create-denom-response',
            value: exports.MsgCreateDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse',
            value: exports.MsgCreateDenomResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateDenomResponse.typeUrl, exports.MsgCreateDenomResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateDenomResponse.aminoType, exports.MsgCreateDenomResponse.typeUrl);
function createBaseMsgMint() {
    return {
        sender: '',
        amount: coin_1.Coin.fromPartial({}),
        mintToAddress: '',
    };
}
exports.MsgMint = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMint',
    aminoType: 'osmosis/tokenfactory/mint',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgMint.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.is(o.amount) &&
                    typeof o.mintToAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgMint.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isSDK(o.amount) &&
                    typeof o.mintToAddress === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgMint.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isAmino(o.amount) &&
                    typeof o.mintToAddress === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.mintToAddress !== '') {
            writer.uint32(26).string(message.mintToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mintToAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? '';
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.mintToAddress = object.mintToAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMint();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.mintToAddress !== undefined && object.mintToAddress !== null) {
            message.mintToAddress = object.mintToAddress;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.mintToAddress = message.mintToAddress ?? '';
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/mint',
            value: exports.MsgMint.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMint.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMint',
            value: exports.MsgMint.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgMint.typeUrl, exports.MsgMint);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgMint.aminoType, exports.MsgMint.typeUrl);
function createBaseMsgMintResponse() {
    return {};
}
exports.MsgMintResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMintResponse',
    aminoType: 'osmosis/tokenfactory/mint-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgMintResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgMintResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgMintResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintResponse();
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
        const message = createBaseMsgMintResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgMintResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMintResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/mint-response',
            value: exports.MsgMintResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMintResponse',
            value: exports.MsgMintResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgMintResponse.typeUrl, exports.MsgMintResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgMintResponse.aminoType, exports.MsgMintResponse.typeUrl);
function createBaseMsgBurn() {
    return {
        sender: '',
        amount: coin_1.Coin.fromPartial({}),
        burnFromAddress: '',
    };
}
exports.MsgBurn = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurn',
    aminoType: 'osmosis/tokenfactory/burn',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgBurn.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.is(o.amount) &&
                    typeof o.burnFromAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgBurn.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isSDK(o.amount) &&
                    typeof o.burnFromAddress === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgBurn.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isAmino(o.amount) &&
                    typeof o.burnFromAddress === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.burnFromAddress !== '') {
            writer.uint32(26).string(message.burnFromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.burnFromAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? '';
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.burnFromAddress = object.burnFromAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBurn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.burnFromAddress !== undefined &&
            object.burnFromAddress !== null) {
            message.burnFromAddress = object.burnFromAddress;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.burnFromAddress = message.burnFromAddress ?? '';
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/burn',
            value: exports.MsgBurn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBurn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurn',
            value: exports.MsgBurn.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBurn.typeUrl, exports.MsgBurn);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBurn.aminoType, exports.MsgBurn.typeUrl);
function createBaseMsgBurnResponse() {
    return {};
}
exports.MsgBurnResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurnResponse',
    aminoType: 'osmosis/tokenfactory/burn-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgBurnResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgBurnResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgBurnResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnResponse();
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
        const message = createBaseMsgBurnResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBurnResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBurnResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/burn-response',
            value: exports.MsgBurnResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurnResponse',
            value: exports.MsgBurnResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBurnResponse.typeUrl, exports.MsgBurnResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBurnResponse.aminoType, exports.MsgBurnResponse.typeUrl);
function createBaseMsgChangeAdmin() {
    return {
        sender: '',
        denom: '',
        newAdmin: '',
    };
}
exports.MsgChangeAdmin = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdmin',
    aminoType: 'osmosis/tokenfactory/change-admin',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgChangeAdmin.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.newAdmin === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgChangeAdmin.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.new_admin === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgChangeAdmin.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.new_admin === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== '') {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeAdmin();
        message.sender = object.sender ?? '';
        message.denom = object.denom ?? '';
        message.newAdmin = object.newAdmin ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChangeAdmin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.new_admin = message.newAdmin === '' ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChangeAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/change-admin',
            value: exports.MsgChangeAdmin.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdmin',
            value: exports.MsgChangeAdmin.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChangeAdmin.typeUrl, exports.MsgChangeAdmin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChangeAdmin.aminoType, exports.MsgChangeAdmin.typeUrl);
function createBaseMsgChangeAdminResponse() {
    return {};
}
exports.MsgChangeAdminResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse',
    aminoType: 'osmosis/tokenfactory/change-admin-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgChangeAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgChangeAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChangeAdminResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdminResponse();
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
        const message = createBaseMsgChangeAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChangeAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChangeAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/change-admin-response',
            value: exports.MsgChangeAdminResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse',
            value: exports.MsgChangeAdminResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChangeAdminResponse.typeUrl, exports.MsgChangeAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChangeAdminResponse.aminoType, exports.MsgChangeAdminResponse.typeUrl);
function createBaseMsgSetBeforeSendHook() {
    return {
        sender: '',
        denom: '',
        cosmwasmAddress: '',
    };
}
exports.MsgSetBeforeSendHook = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook',
    aminoType: 'osmosis/tokenfactory/set-bef-send-hook',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetBeforeSendHook.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.cosmwasmAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetBeforeSendHook.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.cosmwasm_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetBeforeSendHook.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.cosmwasm_address === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.cosmwasmAddress !== '') {
            writer.uint32(26).string(message.cosmwasmAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBeforeSendHook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.cosmwasmAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetBeforeSendHook();
        message.sender = object.sender ?? '';
        message.denom = object.denom ?? '';
        message.cosmwasmAddress = object.cosmwasmAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetBeforeSendHook();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.cosmwasm_address !== undefined &&
            object.cosmwasm_address !== null) {
            message.cosmwasmAddress = object.cosmwasm_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.cosmwasm_address = message.cosmwasmAddress ?? '';
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetBeforeSendHook.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-bef-send-hook',
            value: exports.MsgSetBeforeSendHook.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetBeforeSendHook.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetBeforeSendHook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook',
            value: exports.MsgSetBeforeSendHook.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetBeforeSendHook.typeUrl, exports.MsgSetBeforeSendHook);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetBeforeSendHook.aminoType, exports.MsgSetBeforeSendHook.typeUrl);
function createBaseMsgSetBeforeSendHookResponse() {
    return {};
}
exports.MsgSetBeforeSendHookResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse',
    aminoType: 'osmosis/tokenfactory/set-before-send-hook-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetBeforeSendHookResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetBeforeSendHookResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetBeforeSendHookResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBeforeSendHookResponse();
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
        const message = createBaseMsgSetBeforeSendHookResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetBeforeSendHookResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetBeforeSendHookResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-before-send-hook-response',
            value: exports.MsgSetBeforeSendHookResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetBeforeSendHookResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetBeforeSendHookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse',
            value: exports.MsgSetBeforeSendHookResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetBeforeSendHookResponse.typeUrl, exports.MsgSetBeforeSendHookResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetBeforeSendHookResponse.aminoType, exports.MsgSetBeforeSendHookResponse.typeUrl);
function createBaseMsgSetDenomMetadata() {
    return {
        sender: '',
        metadata: bank_1.Metadata.fromPartial({}),
    };
}
exports.MsgSetDenomMetadata = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata',
    aminoType: 'osmosis/tokenfactory/set-denom-metadata',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomMetadata.typeUrl ||
                (typeof o.sender === 'string' && bank_1.Metadata.is(o.metadata))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomMetadata.typeUrl ||
                (typeof o.sender === 'string' && bank_1.Metadata.isSDK(o.metadata))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgSetDenomMetadata.typeUrl ||
                (typeof o.sender === 'string' && bank_1.Metadata.isAmino(o.metadata))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomMetadata();
        message.sender = object.sender ?? '';
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? bank_1.Metadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomMetadata();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bank_1.Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.metadata = message.metadata
            ? bank_1.Metadata.toAmino(message.metadata)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-denom-metadata',
            value: exports.MsgSetDenomMetadata.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata',
            value: exports.MsgSetDenomMetadata.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetDenomMetadata.typeUrl, exports.MsgSetDenomMetadata);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetDenomMetadata.aminoType, exports.MsgSetDenomMetadata.typeUrl);
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
exports.MsgSetDenomMetadataResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse',
    aminoType: 'osmosis/tokenfactory/set-denom-metadata-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgSetDenomMetadataResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetDenomMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetDenomMetadataResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadataResponse();
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
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-denom-metadata-response',
            value: exports.MsgSetDenomMetadataResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse',
            value: exports.MsgSetDenomMetadataResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetDenomMetadataResponse.typeUrl, exports.MsgSetDenomMetadataResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetDenomMetadataResponse.aminoType, exports.MsgSetDenomMetadataResponse.typeUrl);
function createBaseMsgForceTransfer() {
    return {
        sender: '',
        amount: coin_1.Coin.fromPartial({}),
        transferFromAddress: '',
        transferToAddress: '',
    };
}
exports.MsgForceTransfer = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransfer',
    aminoType: 'osmosis/tokenfactory/force-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MsgForceTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.is(o.amount) &&
                    typeof o.transferFromAddress === 'string' &&
                    typeof o.transferToAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MsgForceTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isSDK(o.amount) &&
                    typeof o.transferFromAddress === 'string' &&
                    typeof o.transferToAddress === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MsgForceTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    coin_1.Coin.isAmino(o.amount) &&
                    typeof o.transferFromAddress === 'string' &&
                    typeof o.transferToAddress === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.transferFromAddress !== '') {
            writer.uint32(26).string(message.transferFromAddress);
        }
        if (message.transferToAddress !== '') {
            writer.uint32(34).string(message.transferToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transferFromAddress = reader.string();
                    break;
                case 4:
                    message.transferToAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgForceTransfer();
        message.sender = object.sender ?? '';
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.transferFromAddress = object.transferFromAddress ?? '';
        message.transferToAddress = object.transferToAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgForceTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.transferFromAddress !== undefined &&
            object.transferFromAddress !== null) {
            message.transferFromAddress = object.transferFromAddress;
        }
        if (object.transferToAddress !== undefined &&
            object.transferToAddress !== null) {
            message.transferToAddress = object.transferToAddress;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.transferFromAddress =
            message.transferFromAddress === ''
                ? undefined
                : message.transferFromAddress;
        obj.transferToAddress =
            message.transferToAddress === '' ? undefined : message.transferToAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/force-transfer',
            value: exports.MsgForceTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgForceTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransfer',
            value: exports.MsgForceTransfer.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgForceTransfer.typeUrl, exports.MsgForceTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgForceTransfer.aminoType, exports.MsgForceTransfer.typeUrl);
function createBaseMsgForceTransferResponse() {
    return {};
}
exports.MsgForceTransferResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse',
    aminoType: 'osmosis/tokenfactory/force-transfer-response',
    is(o) {
        return o && o.$typeUrl === exports.MsgForceTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgForceTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgForceTransferResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransferResponse();
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
        const message = createBaseMsgForceTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgForceTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/force-transfer-response',
            value: exports.MsgForceTransferResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MsgForceTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse',
            value: exports.MsgForceTransferResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MsgForceTransferResponse.typeUrl, exports.MsgForceTransferResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgForceTransferResponse.aminoType, exports.MsgForceTransferResponse.typeUrl);
