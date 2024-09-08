"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
function createBaseParams() {
    return {
        distrEpochIdentifier: '',
        groupCreationFee: [],
        unrestrictedCreatorWhitelist: [],
        internalUptime: duration_1.Duration.fromPartial({}),
    };
}
exports.Params = {
    typeUrl: '/osmosis.incentives.Params',
    aminoType: 'osmosis/incentives/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (typeof o.distrEpochIdentifier === 'string' &&
                    Array.isArray(o.groupCreationFee) &&
                    (!o.groupCreationFee.length || coin_1.Coin.is(o.groupCreationFee[0])) &&
                    Array.isArray(o.unrestrictedCreatorWhitelist) &&
                    (!o.unrestrictedCreatorWhitelist.length ||
                        typeof o.unrestrictedCreatorWhitelist[0] === 'string') &&
                    duration_1.Duration.is(o.internalUptime))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (typeof o.distr_epoch_identifier === 'string' &&
                    Array.isArray(o.group_creation_fee) &&
                    (!o.group_creation_fee.length ||
                        coin_1.Coin.isSDK(o.group_creation_fee[0])) &&
                    Array.isArray(o.unrestricted_creator_whitelist) &&
                    (!o.unrestricted_creator_whitelist.length ||
                        typeof o.unrestricted_creator_whitelist[0] === 'string') &&
                    duration_1.Duration.isSDK(o.internal_uptime))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (typeof o.distr_epoch_identifier === 'string' &&
                    Array.isArray(o.group_creation_fee) &&
                    (!o.group_creation_fee.length ||
                        coin_1.Coin.isAmino(o.group_creation_fee[0])) &&
                    Array.isArray(o.unrestricted_creator_whitelist) &&
                    (!o.unrestricted_creator_whitelist.length ||
                        typeof o.unrestricted_creator_whitelist[0] === 'string') &&
                    duration_1.Duration.isAmino(o.internal_uptime))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrEpochIdentifier !== '') {
            writer.uint32(10).string(message.distrEpochIdentifier);
        }
        for (const v of message.groupCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.unrestrictedCreatorWhitelist) {
            writer.uint32(26).string(v);
        }
        if (message.internalUptime !== undefined) {
            duration_1.Duration.encode(message.internalUptime, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distrEpochIdentifier = reader.string();
                    break;
                case 2:
                    message.groupCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.unrestrictedCreatorWhitelist.push(reader.string());
                    break;
                case 4:
                    message.internalUptime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distrEpochIdentifier = object.distrEpochIdentifier ?? '';
        message.groupCreationFee =
            object.groupCreationFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.unrestrictedCreatorWhitelist =
            object.unrestrictedCreatorWhitelist?.map(e => e) || [];
        message.internalUptime =
            object.internalUptime !== undefined && object.internalUptime !== null
                ? duration_1.Duration.fromPartial(object.internalUptime)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.distr_epoch_identifier !== undefined &&
            object.distr_epoch_identifier !== null) {
            message.distrEpochIdentifier = object.distr_epoch_identifier;
        }
        message.groupCreationFee =
            object.group_creation_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.unrestrictedCreatorWhitelist =
            object.unrestricted_creator_whitelist?.map(e => e) || [];
        if (object.internal_uptime !== undefined &&
            object.internal_uptime !== null) {
            message.internalUptime = duration_1.Duration.fromAmino(object.internal_uptime);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distr_epoch_identifier =
            message.distrEpochIdentifier === ''
                ? undefined
                : message.distrEpochIdentifier;
        if (message.groupCreationFee) {
            obj.group_creation_fee = message.groupCreationFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.group_creation_fee = message.groupCreationFee;
        }
        if (message.unrestrictedCreatorWhitelist) {
            obj.unrestricted_creator_whitelist =
                message.unrestrictedCreatorWhitelist.map(e => e);
        }
        else {
            obj.unrestricted_creator_whitelist = message.unrestrictedCreatorWhitelist;
        }
        obj.internal_uptime = message.internalUptime
            ? duration_1.Duration.toAmino(message.internalUptime)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/params',
            value: exports.Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
