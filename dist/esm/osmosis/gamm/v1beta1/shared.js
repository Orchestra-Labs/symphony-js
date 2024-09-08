//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseMigrationRecords() {
    return {
        balancerToConcentratedPoolLinks: [],
    };
}
export const MigrationRecords = {
    typeUrl: '/osmosis.gamm.v1beta1.MigrationRecords',
    aminoType: 'osmosis/gamm/migration-records',
    is(o) {
        return (o &&
            (o.$typeUrl === MigrationRecords.typeUrl ||
                (Array.isArray(o.balancerToConcentratedPoolLinks) &&
                    (!o.balancerToConcentratedPoolLinks.length ||
                        BalancerToConcentratedPoolLink.is(o.balancerToConcentratedPoolLinks[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MigrationRecords.typeUrl ||
                (Array.isArray(o.balancer_to_concentrated_pool_links) &&
                    (!o.balancer_to_concentrated_pool_links.length ||
                        BalancerToConcentratedPoolLink.isSDK(o.balancer_to_concentrated_pool_links[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MigrationRecords.typeUrl ||
                (Array.isArray(o.balancer_to_concentrated_pool_links) &&
                    (!o.balancer_to_concentrated_pool_links.length ||
                        BalancerToConcentratedPoolLink.isAmino(o.balancer_to_concentrated_pool_links[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balancerToConcentratedPoolLinks) {
            BalancerToConcentratedPoolLink.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrationRecords();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balancerToConcentratedPoolLinks.push(BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
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
            object.balancerToConcentratedPoolLinks?.map(e => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigrationRecords();
        message.balancerToConcentratedPoolLinks =
            object.balancer_to_concentrated_pool_links?.map(e => BalancerToConcentratedPoolLink.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balancerToConcentratedPoolLinks) {
            obj.balancer_to_concentrated_pool_links =
                message.balancerToConcentratedPoolLinks.map(e => e ? BalancerToConcentratedPoolLink.toAmino(e) : undefined);
        }
        else {
            obj.balancer_to_concentrated_pool_links =
                message.balancerToConcentratedPoolLinks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MigrationRecords.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/migration-records',
            value: MigrationRecords.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MigrationRecords.decode(message.value);
    },
    toProto(message) {
        return MigrationRecords.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.MigrationRecords',
            value: MigrationRecords.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MigrationRecords.typeUrl, MigrationRecords);
GlobalDecoderRegistry.registerAminoProtoMapping(MigrationRecords.aminoType, MigrationRecords.typeUrl);
function createBaseBalancerToConcentratedPoolLink() {
    return {
        balancerPoolId: BigInt(0),
        clPoolId: BigInt(0),
    };
}
export const BalancerToConcentratedPoolLink = {
    typeUrl: '/osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink',
    aminoType: 'osmosis/gamm/balancer-to-concentrated-pool-link',
    is(o) {
        return (o &&
            (o.$typeUrl === BalancerToConcentratedPoolLink.typeUrl ||
                (typeof o.balancerPoolId === 'bigint' &&
                    typeof o.clPoolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === BalancerToConcentratedPoolLink.typeUrl ||
                (typeof o.balancer_pool_id === 'bigint' &&
                    typeof o.cl_pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === BalancerToConcentratedPoolLink.typeUrl ||
                (typeof o.balancer_pool_id === 'bigint' &&
                    typeof o.cl_pool_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.balancerPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.balancerPoolId);
        }
        if (message.clPoolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.clPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BalancerToConcentratedPoolLink.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/balancer-to-concentrated-pool-link',
            value: BalancerToConcentratedPoolLink.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return BalancerToConcentratedPoolLink.decode(message.value);
    },
    toProto(message) {
        return BalancerToConcentratedPoolLink.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink',
            value: BalancerToConcentratedPoolLink.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(BalancerToConcentratedPoolLink.typeUrl, BalancerToConcentratedPoolLink);
GlobalDecoderRegistry.registerAminoProtoMapping(BalancerToConcentratedPoolLink.aminoType, BalancerToConcentratedPoolLink.typeUrl);
