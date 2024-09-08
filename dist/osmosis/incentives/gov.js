"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupsProposal = void 0;
//@ts-nocheck
const group_1 = require("./group");
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
function createBaseCreateGroupsProposal() {
    return {
        $typeUrl: '/osmosis.incentives.CreateGroupsProposal',
        title: '',
        description: '',
        createGroups: [],
    };
}
exports.CreateGroupsProposal = {
    typeUrl: '/osmosis.incentives.CreateGroupsProposal',
    aminoType: 'osmosis/incentives/create-groups-proposal',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CreateGroupsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.createGroups) &&
                    (!o.createGroups.length || group_1.CreateGroup.is(o.createGroups[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CreateGroupsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.create_groups) &&
                    (!o.create_groups.length || group_1.CreateGroup.isSDK(o.create_groups[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CreateGroupsProposal.typeUrl ||
                (typeof o.title === 'string' &&
                    typeof o.description === 'string' &&
                    Array.isArray(o.create_groups) &&
                    (!o.create_groups.length || group_1.CreateGroup.isAmino(o.create_groups[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.createGroups) {
            group_1.CreateGroup.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.createGroups.push(group_1.CreateGroup.decode(reader, reader.uint32()));
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
            object.createGroups?.map(e => group_1.CreateGroup.fromPartial(e)) || [];
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
            object.create_groups?.map(e => group_1.CreateGroup.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === '' ? undefined : message.title;
        obj.description =
            message.description === '' ? undefined : message.description;
        if (message.createGroups) {
            obj.create_groups = message.createGroups.map(e => e ? group_1.CreateGroup.toAmino(e) : undefined);
        }
        else {
            obj.create_groups = message.createGroups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateGroupsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/create-groups-proposal',
            value: exports.CreateGroupsProposal.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CreateGroupsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CreateGroupsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.CreateGroupsProposal',
            value: exports.CreateGroupsProposal.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CreateGroupsProposal.typeUrl, exports.CreateGroupsProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CreateGroupsProposal.aminoType, exports.CreateGroupsProposal.typeUrl);
