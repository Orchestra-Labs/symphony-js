//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParams() {
    return {
        codeIdWhitelist: [],
        poolMigrationLimit: BigInt(0),
    };
}
export const Params = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.Params',
    aminoType: 'osmosis/cosmwasmpool/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.codeIdWhitelist) &&
                    (!o.codeIdWhitelist.length ||
                        typeof o.codeIdWhitelist[0] === 'bigint') &&
                    typeof o.poolMigrationLimit === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.code_id_whitelist) &&
                    (!o.code_id_whitelist.length ||
                        typeof o.code_id_whitelist[0] === 'bigint') &&
                    typeof o.pool_migration_limit === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.code_id_whitelist) &&
                    (!o.code_id_whitelist.length ||
                        typeof o.code_id_whitelist[0] === 'bigint') &&
                    typeof o.pool_migration_limit === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.codeIdWhitelist) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.poolMigrationLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolMigrationLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIdWhitelist.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIdWhitelist.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.poolMigrationLimit = reader.uint64();
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
        message.codeIdWhitelist =
            object.codeIdWhitelist?.map(e => BigInt(e.toString())) || [];
        message.poolMigrationLimit =
            object.poolMigrationLimit !== undefined &&
                object.poolMigrationLimit !== null
                ? BigInt(object.poolMigrationLimit.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.codeIdWhitelist =
            object.code_id_whitelist?.map(e => BigInt(e)) || [];
        if (object.pool_migration_limit !== undefined &&
            object.pool_migration_limit !== null) {
            message.poolMigrationLimit = BigInt(object.pool_migration_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.codeIdWhitelist) {
            obj.code_id_whitelist = message.codeIdWhitelist.map(e => e.toString());
        }
        else {
            obj.code_id_whitelist = message.codeIdWhitelist;
        }
        obj.pool_migration_limit =
            message.poolMigrationLimit !== BigInt(0)
                ? message.poolMigrationLimit.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/params',
            value: Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
