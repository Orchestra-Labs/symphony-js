//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { Metadata, } from '../../../cosmos/bank/v1beta1/bank';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseMsgCreateDenom() {
    return {
        sender: '',
        subdenom: '',
    };
}
export const MsgCreateDenom = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenom',
    aminoType: 'osmosis/tokenfactory/create-denom',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateDenom.typeUrl ||
                (typeof o.sender === 'string' && typeof o.subdenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateDenom.typeUrl ||
                (typeof o.sender === 'string' && typeof o.subdenom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateDenom.typeUrl ||
                (typeof o.sender === 'string' && typeof o.subdenom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== '') {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/create-denom',
            value: MsgCreateDenom.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenom',
            value: MsgCreateDenom.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateDenom.typeUrl, MsgCreateDenom);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateDenom.aminoType, MsgCreateDenom.typeUrl);
function createBaseMsgCreateDenomResponse() {
    return {
        newTokenDenom: '',
    };
}
export const MsgCreateDenomResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse',
    aminoType: 'osmosis/tokenfactory/create-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateDenomResponse.typeUrl ||
                typeof o.newTokenDenom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateDenomResponse.typeUrl ||
                typeof o.new_token_denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateDenomResponse.typeUrl ||
                typeof o.new_token_denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.newTokenDenom !== '') {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/create-denom-response',
            value: MsgCreateDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse',
            value: MsgCreateDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateDenomResponse.typeUrl, MsgCreateDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateDenomResponse.aminoType, MsgCreateDenomResponse.typeUrl);
function createBaseMsgMint() {
    return {
        sender: '',
        amount: Coin.fromPartial({}),
        mintToAddress: '',
    };
}
export const MsgMint = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMint',
    aminoType: 'osmosis/tokenfactory/mint',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgMint.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.is(o.amount) &&
                    typeof o.mintToAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgMint.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isSDK(o.amount) &&
                    typeof o.mintToAddress === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgMint.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isAmino(o.amount) &&
                    typeof o.mintToAddress === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.mintToAddress !== '') {
            writer.uint32(26).string(message.mintToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
                ? Coin.fromPartial(object.amount)
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
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.mintToAddress !== undefined && object.mintToAddress !== null) {
            message.mintToAddress = object.mintToAddress;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.mintToAddress = message.mintToAddress ?? '';
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/mint',
            value: MsgMint.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgMint.decode(message.value);
    },
    toProto(message) {
        return MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMint',
            value: MsgMint.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgMint.typeUrl, MsgMint);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMint.aminoType, MsgMint.typeUrl);
function createBaseMsgMintResponse() {
    return {};
}
export const MsgMintResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMintResponse',
    aminoType: 'osmosis/tokenfactory/mint-response',
    is(o) {
        return o && o.$typeUrl === MsgMintResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgMintResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgMintResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgMintResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/mint-response',
            value: MsgMintResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgMintResponse',
            value: MsgMintResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgMintResponse.typeUrl, MsgMintResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMintResponse.aminoType, MsgMintResponse.typeUrl);
function createBaseMsgBurn() {
    return {
        sender: '',
        amount: Coin.fromPartial({}),
        burnFromAddress: '',
    };
}
export const MsgBurn = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurn',
    aminoType: 'osmosis/tokenfactory/burn',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgBurn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.is(o.amount) &&
                    typeof o.burnFromAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgBurn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isSDK(o.amount) &&
                    typeof o.burnFromAddress === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgBurn.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isAmino(o.amount) &&
                    typeof o.burnFromAddress === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.burnFromAddress !== '') {
            writer.uint32(26).string(message.burnFromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
                ? Coin.fromPartial(object.amount)
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
            message.amount = Coin.fromAmino(object.amount);
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
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.burnFromAddress = message.burnFromAddress ?? '';
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/burn',
            value: MsgBurn.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgBurn.decode(message.value);
    },
    toProto(message) {
        return MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurn',
            value: MsgBurn.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgBurn.typeUrl, MsgBurn);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBurn.aminoType, MsgBurn.typeUrl);
function createBaseMsgBurnResponse() {
    return {};
}
export const MsgBurnResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurnResponse',
    aminoType: 'osmosis/tokenfactory/burn-response',
    is(o) {
        return o && o.$typeUrl === MsgBurnResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgBurnResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgBurnResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgBurnResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/burn-response',
            value: MsgBurnResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgBurnResponse',
            value: MsgBurnResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgBurnResponse.typeUrl, MsgBurnResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBurnResponse.aminoType, MsgBurnResponse.typeUrl);
function createBaseMsgChangeAdmin() {
    return {
        sender: '',
        denom: '',
        newAdmin: '',
    };
}
export const MsgChangeAdmin = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdmin',
    aminoType: 'osmosis/tokenfactory/change-admin',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgChangeAdmin.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.newAdmin === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgChangeAdmin.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.new_admin === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgChangeAdmin.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.new_admin === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgChangeAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/change-admin',
            value: MsgChangeAdmin.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdmin',
            value: MsgChangeAdmin.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgChangeAdmin.typeUrl, MsgChangeAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChangeAdmin.aminoType, MsgChangeAdmin.typeUrl);
function createBaseMsgChangeAdminResponse() {
    return {};
}
export const MsgChangeAdminResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse',
    aminoType: 'osmosis/tokenfactory/change-admin-response',
    is(o) {
        return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgChangeAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/change-admin-response',
            value: MsgChangeAdminResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse',
            value: MsgChangeAdminResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgChangeAdminResponse.typeUrl, MsgChangeAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChangeAdminResponse.aminoType, MsgChangeAdminResponse.typeUrl);
function createBaseMsgSetBeforeSendHook() {
    return {
        sender: '',
        denom: '',
        cosmwasmAddress: '',
    };
}
export const MsgSetBeforeSendHook = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook',
    aminoType: 'osmosis/tokenfactory/set-bef-send-hook',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetBeforeSendHook.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.cosmwasmAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetBeforeSendHook.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.cosmwasm_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetBeforeSendHook.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.denom === 'string' &&
                    typeof o.cosmwasm_address === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetBeforeSendHook.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-bef-send-hook',
            value: MsgSetBeforeSendHook.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetBeforeSendHook.decode(message.value);
    },
    toProto(message) {
        return MsgSetBeforeSendHook.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook',
            value: MsgSetBeforeSendHook.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetBeforeSendHook.typeUrl, MsgSetBeforeSendHook);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetBeforeSendHook.aminoType, MsgSetBeforeSendHook.typeUrl);
function createBaseMsgSetBeforeSendHookResponse() {
    return {};
}
export const MsgSetBeforeSendHookResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse',
    aminoType: 'osmosis/tokenfactory/set-before-send-hook-response',
    is(o) {
        return o && o.$typeUrl === MsgSetBeforeSendHookResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetBeforeSendHookResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetBeforeSendHookResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetBeforeSendHookResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-before-send-hook-response',
            value: MsgSetBeforeSendHookResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetBeforeSendHookResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetBeforeSendHookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse',
            value: MsgSetBeforeSendHookResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetBeforeSendHookResponse.typeUrl, MsgSetBeforeSendHookResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetBeforeSendHookResponse.aminoType, MsgSetBeforeSendHookResponse.typeUrl);
function createBaseMsgSetDenomMetadata() {
    return {
        sender: '',
        metadata: Metadata.fromPartial({}),
    };
}
export const MsgSetDenomMetadata = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata',
    aminoType: 'osmosis/tokenfactory/set-denom-metadata',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomMetadata.typeUrl ||
                (typeof o.sender === 'string' && Metadata.is(o.metadata))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomMetadata.typeUrl ||
                (typeof o.sender === 'string' && Metadata.isSDK(o.metadata))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgSetDenomMetadata.typeUrl ||
                (typeof o.sender === 'string' && Metadata.isAmino(o.metadata))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
                ? Metadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetDenomMetadata();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = Metadata.fromAmino(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.metadata = message.metadata
            ? Metadata.toAmino(message.metadata)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDenomMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-denom-metadata',
            value: MsgSetDenomMetadata.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata',
            value: MsgSetDenomMetadata.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetDenomMetadata.typeUrl, MsgSetDenomMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDenomMetadata.aminoType, MsgSetDenomMetadata.typeUrl);
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
export const MsgSetDenomMetadataResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse',
    aminoType: 'osmosis/tokenfactory/set-denom-metadata-response',
    is(o) {
        return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/set-denom-metadata-response',
            value: MsgSetDenomMetadataResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse',
            value: MsgSetDenomMetadataResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgSetDenomMetadataResponse.typeUrl, MsgSetDenomMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetDenomMetadataResponse.aminoType, MsgSetDenomMetadataResponse.typeUrl);
function createBaseMsgForceTransfer() {
    return {
        sender: '',
        amount: Coin.fromPartial({}),
        transferFromAddress: '',
        transferToAddress: '',
    };
}
export const MsgForceTransfer = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransfer',
    aminoType: 'osmosis/tokenfactory/force-transfer',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgForceTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.is(o.amount) &&
                    typeof o.transferFromAddress === 'string' &&
                    typeof o.transferToAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgForceTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isSDK(o.amount) &&
                    typeof o.transferFromAddress === 'string' &&
                    typeof o.transferToAddress === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgForceTransfer.typeUrl ||
                (typeof o.sender === 'string' &&
                    Coin.isAmino(o.amount) &&
                    typeof o.transferFromAddress === 'string' &&
                    typeof o.transferToAddress === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
                ? Coin.fromPartial(object.amount)
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
            message.amount = Coin.fromAmino(object.amount);
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
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.transferFromAddress =
            message.transferFromAddress === ''
                ? undefined
                : message.transferFromAddress;
        obj.transferToAddress =
            message.transferToAddress === '' ? undefined : message.transferToAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/force-transfer',
            value: MsgForceTransfer.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgForceTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgForceTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransfer',
            value: MsgForceTransfer.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgForceTransfer.typeUrl, MsgForceTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgForceTransfer.aminoType, MsgForceTransfer.typeUrl);
function createBaseMsgForceTransferResponse() {
    return {};
}
export const MsgForceTransferResponse = {
    typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse',
    aminoType: 'osmosis/tokenfactory/force-transfer-response',
    is(o) {
        return o && o.$typeUrl === MsgForceTransferResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgForceTransferResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgForceTransferResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgForceTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/tokenfactory/force-transfer-response',
            value: MsgForceTransferResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgForceTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgForceTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse',
            value: MsgForceTransferResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgForceTransferResponse.typeUrl, MsgForceTransferResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgForceTransferResponse.aminoType, MsgForceTransferResponse.typeUrl);
