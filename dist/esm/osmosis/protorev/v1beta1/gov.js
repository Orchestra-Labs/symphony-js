//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseSetProtoRevEnabledProposal() {
    return {
        $typeUrl: '/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal',
        title: '',
        description: '',
        enabled: false,
    };
}
export const SetProtoRevEnabledProposal = {
    typeUrl: '/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal',
    aminoType: 'osmosis/SetProtoRevEnabledProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === SetProtoRevEnabledProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.enabled === 'boolean')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SetProtoRevEnabledProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.enabled === 'boolean')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SetProtoRevEnabledProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.enabled === 'boolean')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetProtoRevEnabledProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetProtoRevEnabledProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetProtoRevEnabledProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return SetProtoRevEnabledProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/SetProtoRevEnabledProposal',
            value: SetProtoRevEnabledProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SetProtoRevEnabledProposal.decode(message.value);
    },
    toProto(message) {
        return SetProtoRevEnabledProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal',
            value: SetProtoRevEnabledProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SetProtoRevEnabledProposal.typeUrl, SetProtoRevEnabledProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SetProtoRevEnabledProposal.aminoType, SetProtoRevEnabledProposal.typeUrl);
function createBaseSetProtoRevAdminAccountProposal() {
    return {
        $typeUrl: '/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal',
        title: '',
        description: '',
        account: '',
    };
}
export const SetProtoRevAdminAccountProposal = {
    typeUrl: '/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal',
    aminoType: 'osmosis/SetProtoRevAdminAccountProposal',
    is(o) {
        return (o &&
            (o.$typeUrl === SetProtoRevAdminAccountProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.account === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SetProtoRevAdminAccountProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.account === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SetProtoRevAdminAccountProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    typeof o.account === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.account !== '') {
            writer.uint32(26).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetProtoRevAdminAccountProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetProtoRevAdminAccountProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.account = object.account ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetProtoRevAdminAccountProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        obj.account = message.account === '' ? undefined : message.account;
        return obj;
    },
    fromAminoMsg(object) {
        return SetProtoRevAdminAccountProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/SetProtoRevAdminAccountProposal',
            value: SetProtoRevAdminAccountProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SetProtoRevAdminAccountProposal.decode(message.value);
    },
    toProto(message) {
        return SetProtoRevAdminAccountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal',
            value: SetProtoRevAdminAccountProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SetProtoRevAdminAccountProposal.typeUrl, SetProtoRevAdminAccountProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SetProtoRevAdminAccountProposal.aminoType, SetProtoRevAdminAccountProposal.typeUrl);
