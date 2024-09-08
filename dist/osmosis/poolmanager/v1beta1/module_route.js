"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRoute = exports.PoolTypeAmino = exports.PoolTypeSDKType = exports.PoolType = void 0;
exports.poolTypeFromJSON = poolTypeFromJSON;
exports.poolTypeToJSON = poolTypeToJSON;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
/** PoolType is an enumeration of all supported pool types. */
var PoolType;
(function (PoolType) {
    /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
    PoolType[PoolType["Balancer"] = 0] = "Balancer";
    /**
     * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     */
    PoolType[PoolType["Stableswap"] = 1] = "Stableswap";
    /**
     * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
     * defined in x/concentrated-liquidity.
     */
    PoolType[PoolType["Concentrated"] = 2] = "Concentrated";
    /**
     * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
     * x/cosmwasmpool.
     */
    PoolType[PoolType["CosmWasm"] = 3] = "CosmWasm";
    PoolType[PoolType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PoolType || (exports.PoolType = PoolType = {}));
exports.PoolTypeSDKType = PoolType;
exports.PoolTypeAmino = PoolType;
function poolTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'Balancer':
            return PoolType.Balancer;
        case 1:
        case 'Stableswap':
            return PoolType.Stableswap;
        case 2:
        case 'Concentrated':
            return PoolType.Concentrated;
        case 3:
        case 'CosmWasm':
            return PoolType.CosmWasm;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PoolType.UNRECOGNIZED;
    }
}
function poolTypeToJSON(object) {
    switch (object) {
        case PoolType.Balancer:
            return 'Balancer';
        case PoolType.Stableswap:
            return 'Stableswap';
        case PoolType.Concentrated:
            return 'Concentrated';
        case PoolType.CosmWasm:
            return 'CosmWasm';
        case PoolType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseModuleRoute() {
    return {
        poolType: 0,
        poolId: undefined,
    };
}
exports.ModuleRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.ModuleRoute',
    aminoType: 'osmosis/poolmanager/module-route',
    is(o) {
        return o && (o.$typeUrl === exports.ModuleRoute.typeUrl || (0, helpers_1.isSet)(o.poolType));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ModuleRoute.typeUrl || (0, helpers_1.isSet)(o.pool_type));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ModuleRoute.typeUrl || (0, helpers_1.isSet)(o.pool_type));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolType !== 0) {
            writer.uint32(8).int32(message.poolType);
        }
        if (message.poolId !== undefined) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolType = reader.int32();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleRoute();
        message.poolType = object.poolType ?? 0;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleRoute();
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_type = message.poolType === 0 ? undefined : message.poolType;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/module-route',
            value: exports.ModuleRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleRoute.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.ModuleRoute',
            value: exports.ModuleRoute.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ModuleRoute.typeUrl, exports.ModuleRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ModuleRoute.aminoType, exports.ModuleRoute.typeUrl);
