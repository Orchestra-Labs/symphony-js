"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../registry");
function createBaseParams() {
    return {
        authorizedTickSpacing: [],
        authorizedSpreadFactors: [],
        balancerSharesRewardDiscount: '',
        authorizedQuoteDenoms: [],
        authorizedUptimes: [],
        isPermissionlessPoolCreationEnabled: false,
        unrestrictedPoolCreatorWhitelist: [],
        hookGasLimit: BigInt(0),
    };
}
exports.Params = {
    typeUrl: '/osmosis.concentratedliquidity.Params',
    aminoType: 'osmosis/concentratedliquidity/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.authorizedTickSpacing) &&
                    (!o.authorizedTickSpacing.length ||
                        typeof o.authorizedTickSpacing[0] === 'bigint') &&
                    Array.isArray(o.authorizedSpreadFactors) &&
                    (!o.authorizedSpreadFactors.length ||
                        typeof o.authorizedSpreadFactors[0] === 'string') &&
                    typeof o.balancerSharesRewardDiscount === 'string' &&
                    Array.isArray(o.authorizedQuoteDenoms) &&
                    (!o.authorizedQuoteDenoms.length ||
                        typeof o.authorizedQuoteDenoms[0] === 'string') &&
                    Array.isArray(o.authorizedUptimes) &&
                    (!o.authorizedUptimes.length ||
                        duration_1.Duration.is(o.authorizedUptimes[0])) &&
                    typeof o.isPermissionlessPoolCreationEnabled === 'boolean' &&
                    Array.isArray(o.unrestrictedPoolCreatorWhitelist) &&
                    (!o.unrestrictedPoolCreatorWhitelist.length ||
                        typeof o.unrestrictedPoolCreatorWhitelist[0] === 'string') &&
                    typeof o.hookGasLimit === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.authorized_tick_spacing) &&
                    (!o.authorized_tick_spacing.length ||
                        typeof o.authorized_tick_spacing[0] === 'bigint') &&
                    Array.isArray(o.authorized_spread_factors) &&
                    (!o.authorized_spread_factors.length ||
                        typeof o.authorized_spread_factors[0] === 'string') &&
                    typeof o.balancer_shares_reward_discount === 'string' &&
                    Array.isArray(o.authorized_quote_denoms) &&
                    (!o.authorized_quote_denoms.length ||
                        typeof o.authorized_quote_denoms[0] === 'string') &&
                    Array.isArray(o.authorized_uptimes) &&
                    (!o.authorized_uptimes.length ||
                        duration_1.Duration.isSDK(o.authorized_uptimes[0])) &&
                    typeof o.is_permissionless_pool_creation_enabled === 'boolean' &&
                    Array.isArray(o.unrestricted_pool_creator_whitelist) &&
                    (!o.unrestricted_pool_creator_whitelist.length ||
                        typeof o.unrestricted_pool_creator_whitelist[0] === 'string') &&
                    typeof o.hook_gas_limit === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.authorized_tick_spacing) &&
                    (!o.authorized_tick_spacing.length ||
                        typeof o.authorized_tick_spacing[0] === 'bigint') &&
                    Array.isArray(o.authorized_spread_factors) &&
                    (!o.authorized_spread_factors.length ||
                        typeof o.authorized_spread_factors[0] === 'string') &&
                    typeof o.balancer_shares_reward_discount === 'string' &&
                    Array.isArray(o.authorized_quote_denoms) &&
                    (!o.authorized_quote_denoms.length ||
                        typeof o.authorized_quote_denoms[0] === 'string') &&
                    Array.isArray(o.authorized_uptimes) &&
                    (!o.authorized_uptimes.length ||
                        duration_1.Duration.isAmino(o.authorized_uptimes[0])) &&
                    typeof o.is_permissionless_pool_creation_enabled === 'boolean' &&
                    Array.isArray(o.unrestricted_pool_creator_whitelist) &&
                    (!o.unrestricted_pool_creator_whitelist.length ||
                        typeof o.unrestricted_pool_creator_whitelist[0] === 'string') &&
                    typeof o.hook_gas_limit === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.authorizedTickSpacing) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.authorizedSpreadFactors) {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(v, 18).atomics);
        }
        if (message.balancerSharesRewardDiscount !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.balancerSharesRewardDiscount, 18)
                .atomics);
        }
        for (const v of message.authorizedQuoteDenoms) {
            writer.uint32(34).string(v);
        }
        for (const v of message.authorizedUptimes) {
            duration_1.Duration.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.isPermissionlessPoolCreationEnabled === true) {
            writer.uint32(48).bool(message.isPermissionlessPoolCreationEnabled);
        }
        for (const v of message.unrestrictedPoolCreatorWhitelist) {
            writer.uint32(58).string(v);
        }
        if (message.hookGasLimit !== BigInt(0)) {
            writer.uint32(64).uint64(message.hookGasLimit);
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.authorizedTickSpacing.push(reader.uint64());
                        }
                    }
                    else {
                        message.authorizedTickSpacing.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.authorizedSpreadFactors.push(math_1.Decimal.fromAtomics(reader.string(), 18).toString());
                    break;
                case 3:
                    message.balancerSharesRewardDiscount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.authorizedQuoteDenoms.push(reader.string());
                    break;
                case 5:
                    message.authorizedUptimes.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.isPermissionlessPoolCreationEnabled = reader.bool();
                    break;
                case 7:
                    message.unrestrictedPoolCreatorWhitelist.push(reader.string());
                    break;
                case 8:
                    message.hookGasLimit = reader.uint64();
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
        message.authorizedTickSpacing =
            object.authorizedTickSpacing?.map(e => BigInt(e.toString())) || [];
        message.authorizedSpreadFactors =
            object.authorizedSpreadFactors?.map(e => e) || [];
        message.balancerSharesRewardDiscount =
            object.balancerSharesRewardDiscount ?? '';
        message.authorizedQuoteDenoms =
            object.authorizedQuoteDenoms?.map(e => e) || [];
        message.authorizedUptimes =
            object.authorizedUptimes?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.isPermissionlessPoolCreationEnabled =
            object.isPermissionlessPoolCreationEnabled ?? false;
        message.unrestrictedPoolCreatorWhitelist =
            object.unrestrictedPoolCreatorWhitelist?.map(e => e) || [];
        message.hookGasLimit =
            object.hookGasLimit !== undefined && object.hookGasLimit !== null
                ? BigInt(object.hookGasLimit.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.authorizedTickSpacing =
            object.authorized_tick_spacing?.map(e => BigInt(e)) || [];
        message.authorizedSpreadFactors =
            object.authorized_spread_factors?.map(e => e) || [];
        if (object.balancer_shares_reward_discount !== undefined &&
            object.balancer_shares_reward_discount !== null) {
            message.balancerSharesRewardDiscount =
                object.balancer_shares_reward_discount;
        }
        message.authorizedQuoteDenoms =
            object.authorized_quote_denoms?.map(e => e) || [];
        message.authorizedUptimes =
            object.authorized_uptimes?.map(e => duration_1.Duration.fromAmino(e)) || [];
        if (object.is_permissionless_pool_creation_enabled !== undefined &&
            object.is_permissionless_pool_creation_enabled !== null) {
            message.isPermissionlessPoolCreationEnabled =
                object.is_permissionless_pool_creation_enabled;
        }
        message.unrestrictedPoolCreatorWhitelist =
            object.unrestricted_pool_creator_whitelist?.map(e => e) || [];
        if (object.hook_gas_limit !== undefined && object.hook_gas_limit !== null) {
            message.hookGasLimit = BigInt(object.hook_gas_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.authorizedTickSpacing) {
            obj.authorized_tick_spacing = message.authorizedTickSpacing.map(e => e.toString());
        }
        else {
            obj.authorized_tick_spacing = message.authorizedTickSpacing;
        }
        if (message.authorizedSpreadFactors) {
            obj.authorized_spread_factors = message.authorizedSpreadFactors.map(e => e);
        }
        else {
            obj.authorized_spread_factors = message.authorizedSpreadFactors;
        }
        obj.balancer_shares_reward_discount =
            message.balancerSharesRewardDiscount === ''
                ? undefined
                : message.balancerSharesRewardDiscount;
        if (message.authorizedQuoteDenoms) {
            obj.authorized_quote_denoms = message.authorizedQuoteDenoms.map(e => e);
        }
        else {
            obj.authorized_quote_denoms = message.authorizedQuoteDenoms;
        }
        if (message.authorizedUptimes) {
            obj.authorized_uptimes = message.authorizedUptimes.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.authorized_uptimes = message.authorizedUptimes;
        }
        obj.is_permissionless_pool_creation_enabled =
            message.isPermissionlessPoolCreationEnabled === false
                ? undefined
                : message.isPermissionlessPoolCreationEnabled;
        if (message.unrestrictedPoolCreatorWhitelist) {
            obj.unrestricted_pool_creator_whitelist =
                message.unrestrictedPoolCreatorWhitelist.map(e => e);
        }
        else {
            obj.unrestricted_pool_creator_whitelist =
                message.unrestrictedPoolCreatorWhitelist;
        }
        obj.hook_gas_limit =
            message.hookGasLimit !== BigInt(0)
                ? message.hookGasLimit.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/params',
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
            typeUrl: '/osmosis.concentratedliquidity.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
