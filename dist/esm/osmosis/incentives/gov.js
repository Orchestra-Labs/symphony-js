//@ts-nocheck
import { CreateGroup } from './group';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseCreateGroupsProposal() {
    return {
        $typeUrl: '/osmosis.incentives.CreateGroupsProposal',
        title: '',
        description: '',
        createGroups: [],
    };
}
export const CreateGroupsProposal = {
    typeUrl: '/osmosis.incentives.CreateGroupsProposal',
    aminoType: 'osmosis/incentives/create-groups-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === CreateGroupsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.createGroups) &&
                    (!o.createGroups.length || CreateGroup.is(o.createGroups[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CreateGroupsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.create_groups) &&
                    (!o.create_groups.length || CreateGroup.isSDK(o.create_groups[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CreateGroupsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.create_groups) &&
                    (!o.create_groups.length || CreateGroup.isAmino(o.create_groups[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.createGroups) {
            CreateGroup.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateGroupsProposal();
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
                    message.createGroups.push(CreateGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateGroupsProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.createGroups =
            object.createGroups?.map(e => CreateGroup.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateGroupsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.createGroups =
            object.create_groups?.map(e => CreateGroup.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.createGroups) {
            obj.create_groups = message.createGroups.map(e => e ? CreateGroup.toAmino(e) : undefined);
        }
        else {
            obj.create_groups = message.createGroups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CreateGroupsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-groups-proposal',
            value: CreateGroupsProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CreateGroupsProposal.decode(message.value);
    },
    toProto(message) {
        return CreateGroupsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.CreateGroupsProposal',
            value: CreateGroupsProposal.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CreateGroupsProposal.typeUrl, CreateGroupsProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateGroupsProposal.aminoType, CreateGroupsProposal.typeUrl);
