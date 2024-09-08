"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancerToConcentratedPoolLink = exports.MigrationRecords = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMigrationRecords() {
    return {
        balancerToConcentratedPoolLinks: [],
    };
}
exports.MigrationRecords = {
    typeUrl: '/osmosis.poolincentives.v1beta1.MigrationRecords',
    aminoType: 'osmosis/poolincentives/migration-records',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.MigrationRecords.typeUrl ||
                (Array.isArray(o.balancerToConcentratedPoolLinks) &&
                    (!o.balancerToConcentratedPoolLinks.length ||
                        exports.BalancerToConcentratedPoolLink.is(o.balancerToConcentratedPoolLinks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.MigrationRecords.typeUrl ||
                (Array.isArray(o.balancer_to_concentrated_pool_links) &&
                    (!o.balancer_to_concentrated_pool_links.length ||
                        exports.BalancerToConcentratedPoolLink.isSDK(o.balancer_to_concentrated_pool_links[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.MigrationRecords.typeUrl ||
                (Array.isArray(o.balancer_to_concentrated_pool_links) &&
                    (!o.balancer_to_concentrated_pool_links.length ||
                        exports.BalancerToConcentratedPoolLink.isAmino(o.balancer_to_concentrated_pool_links[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balancerToConcentratedPoolLinks) {
            exports.BalancerToConcentratedPoolLink.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrationRecords();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balancerToConcentratedPoolLinks.push(exports.BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMigrationRecords();
        message.balancerToConcentratedPoolLinks =
            object.balancerToConcentratedPoolLinks?.map(e => exports.BalancerToConcentratedPoolLink.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigrationRecords();
        message.balancerToConcentratedPoolLinks =
            object.balancer_to_concentrated_pool_links?.map(e => exports.BalancerToConcentratedPoolLink.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balancerToConcentratedPoolLinks) {
            obj.balancer_to_concentrated_pool_links =
                message.balancerToConcentratedPoolLinks.map(e => e ? exports.BalancerToConcentratedPoolLink.toAmino(e) : undefined);
        }
        else {
            obj.balancer_to_concentrated_pool_links =
                message.balancerToConcentratedPoolLinks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MigrationRecords.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/migration-records',
            value: exports.MigrationRecords.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.MigrationRecords.decode(message.value);
    },
    toProto(message) {
        return exports.MigrationRecords.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.MigrationRecords',
            value: exports.MigrationRecords.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.MigrationRecords.typeUrl, exports.MigrationRecords);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MigrationRecords.aminoType, exports.MigrationRecords.typeUrl);
function createBaseBalancerToConcentratedPoolLink() {
    return {
        balancerPoolId: BigInt(0),
        clPoolId: BigInt(0),
    };
}
exports.BalancerToConcentratedPoolLink = {
    typeUrl: '/osmosis.poolincentives.v1beta1.BalancerToConcentratedPoolLink',
    aminoType: 'osmosis/poolincentives/balancer-to-concentrated-pool-link',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.BalancerToConcentratedPoolLink.typeUrl ||
                (typeof o.balancerPoolId === 'bigint' &&
                    typeof o.clPoolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.BalancerToConcentratedPoolLink.typeUrl ||
                (typeof o.balancer_pool_id === 'bigint' &&
                    typeof o.cl_pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.BalancerToConcentratedPoolLink.typeUrl ||
                (typeof o.balancer_pool_id === 'bigint' &&
                    typeof o.cl_pool_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balancerPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.balancerPoolId);
        }
        if (message.clPoolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.clPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalancerToConcentratedPoolLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balancerPoolId = reader.uint64();
                    break;
                case 2:
                    message.clPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalancerToConcentratedPoolLink();
        message.balancerPoolId =
            object.balancerPoolId !== undefined && object.balancerPoolId !== null
                ? BigInt(object.balancerPoolId.toString())
                : BigInt(0);
        message.clPoolId =
            object.clPoolId !== undefined && object.clPoolId !== null
                ? BigInt(object.clPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalancerToConcentratedPoolLink();
        if (object.balancer_pool_id !== undefined &&
            object.balancer_pool_id !== null) {
            message.balancerPoolId = BigInt(object.balancer_pool_id);
        }
        if (object.cl_pool_id !== undefined && object.cl_pool_id !== null) {
            message.clPoolId = BigInt(object.cl_pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balancer_pool_id =
            message.balancerPoolId !== BigInt(0)
                ? message.balancerPoolId.toString()
                : undefined;
        obj.cl_pool_id =
            message.clPoolId !== BigInt(0) ? message.clPoolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BalancerToConcentratedPoolLink.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolincentives/balancer-to-concentrated-pool-link',
            value: exports.BalancerToConcentratedPoolLink.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.BalancerToConcentratedPoolLink.decode(message.value);
    },
    toProto(message) {
        return exports.BalancerToConcentratedPoolLink.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolincentives.v1beta1.BalancerToConcentratedPoolLink',
            value: exports.BalancerToConcentratedPoolLink.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.BalancerToConcentratedPoolLink.typeUrl, exports.BalancerToConcentratedPoolLink);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BalancerToConcentratedPoolLink.aminoType, exports.BalancerToConcentratedPoolLink.typeUrl);
