"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolVolume = exports.TakerFeesTracker = exports.TakerFeeDistributionPercentage = exports.TakerFeeParams = exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const module_route_1 = require("./module_route");
const tx_1 = require("./tx");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseParams() {
    return {
        poolCreationFee: [],
        takerFeeParams: exports.TakerFeeParams.fromPartial({}),
        authorizedQuoteDenoms: [],
    };
}
exports.Params = {
    typeUrl: '/osmosis.poolmanager.v1beta1.Params',
    aminoType: 'osmosis/poolmanager/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.poolCreationFee) &&
                    (!o.poolCreationFee.length || coin_1.Coin.is(o.poolCreationFee[0])) &&
                    exports.TakerFeeParams.is(o.takerFeeParams) &&
                    Array.isArray(o.authorizedQuoteDenoms) &&
                    (!o.authorizedQuoteDenoms.length ||
                        typeof o.authorizedQuoteDenoms[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.pool_creation_fee) &&
                    (!o.pool_creation_fee.length || coin_1.Coin.isSDK(o.pool_creation_fee[0])) &&
                    exports.TakerFeeParams.isSDK(o.taker_fee_params) &&
                    Array.isArray(o.authorized_quote_denoms) &&
                    (!o.authorized_quote_denoms.length ||
                        typeof o.authorized_quote_denoms[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                (Array.isArray(o.pool_creation_fee) &&
                    (!o.pool_creation_fee.length ||
                        coin_1.Coin.isAmino(o.pool_creation_fee[0])) &&
                    exports.TakerFeeParams.isAmino(o.taker_fee_params) &&
                    Array.isArray(o.authorized_quote_denoms) &&
                    (!o.authorized_quote_denoms.length ||
                        typeof o.authorized_quote_denoms[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.takerFeeParams !== undefined) {
            exports.TakerFeeParams.encode(message.takerFeeParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.authorizedQuoteDenoms) {
            writer.uint32(26).string(v);
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
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.takerFeeParams = exports.TakerFeeParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.authorizedQuoteDenoms.push(reader.string());
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
        message.poolCreationFee =
            object.poolCreationFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.takerFeeParams =
            object.takerFeeParams !== undefined && object.takerFeeParams !== null
                ? exports.TakerFeeParams.fromPartial(object.takerFeeParams)
                : undefined;
        message.authorizedQuoteDenoms =
            object.authorizedQuoteDenoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.poolCreationFee =
            object.pool_creation_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.taker_fee_params !== undefined &&
            object.taker_fee_params !== null) {
            message.takerFeeParams = exports.TakerFeeParams.fromAmino(object.taker_fee_params);
        }
        message.authorizedQuoteDenoms =
            object.authorized_quote_denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.pool_creation_fee = message.poolCreationFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = message.poolCreationFee;
        }
        obj.taker_fee_params = message.takerFeeParams
            ? exports.TakerFeeParams.toAmino(message.takerFeeParams)
            : undefined;
        if (message.authorizedQuoteDenoms) {
            obj.authorized_quote_denoms = message.authorizedQuoteDenoms.map(e => e);
        }
        else {
            obj.authorized_quote_denoms = message.authorizedQuoteDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/params',
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
            typeUrl: '/osmosis.poolmanager.v1beta1.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseGenesisState() {
    return {
        nextPoolId: BigInt(0),
        params: exports.Params.fromPartial({}),
        poolRoutes: [],
        takerFeesTracker: undefined,
        poolVolumes: [],
        denomPairTakerFeeStore: [],
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.poolmanager.v1beta1.GenesisState',
    aminoType: 'osmosis/poolmanager/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (typeof o.nextPoolId === 'bigint' &&
                    exports.Params.is(o.params) &&
                    Array.isArray(o.poolRoutes) &&
                    (!o.poolRoutes.length || module_route_1.ModuleRoute.is(o.poolRoutes[0])) &&
                    Array.isArray(o.poolVolumes) &&
                    (!o.poolVolumes.length || exports.PoolVolume.is(o.poolVolumes[0])) &&
                    Array.isArray(o.denomPairTakerFeeStore) &&
                    (!o.denomPairTakerFeeStore.length ||
                        tx_1.DenomPairTakerFee.is(o.denomPairTakerFeeStore[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (typeof o.next_pool_id === 'bigint' &&
                    exports.Params.isSDK(o.params) &&
                    Array.isArray(o.pool_routes) &&
                    (!o.pool_routes.length || module_route_1.ModuleRoute.isSDK(o.pool_routes[0])) &&
                    Array.isArray(o.pool_volumes) &&
                    (!o.pool_volumes.length || exports.PoolVolume.isSDK(o.pool_volumes[0])) &&
                    Array.isArray(o.denom_pair_taker_fee_store) &&
                    (!o.denom_pair_taker_fee_store.length ||
                        tx_1.DenomPairTakerFee.isSDK(o.denom_pair_taker_fee_store[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (typeof o.next_pool_id === 'bigint' &&
                    exports.Params.isAmino(o.params) &&
                    Array.isArray(o.pool_routes) &&
                    (!o.pool_routes.length || module_route_1.ModuleRoute.isAmino(o.pool_routes[0])) &&
                    Array.isArray(o.pool_volumes) &&
                    (!o.pool_volumes.length || exports.PoolVolume.isAmino(o.pool_volumes[0])) &&
                    Array.isArray(o.denom_pair_taker_fee_store) &&
                    (!o.denom_pair_taker_fee_store.length ||
                        tx_1.DenomPairTakerFee.isAmino(o.denom_pair_taker_fee_store[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nextPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextPoolId);
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.poolRoutes) {
            module_route_1.ModuleRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.takerFeesTracker !== undefined) {
            exports.TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.poolVolumes) {
            exports.PoolVolume.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.denomPairTakerFeeStore) {
            tx_1.DenomPairTakerFee.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextPoolId = reader.uint64();
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolRoutes.push(module_route_1.ModuleRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.takerFeesTracker = exports.TakerFeesTracker.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.poolVolumes.push(exports.PoolVolume.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.denomPairTakerFeeStore.push(tx_1.DenomPairTakerFee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.nextPoolId =
            object.nextPoolId !== undefined && object.nextPoolId !== null
                ? BigInt(object.nextPoolId.toString())
                : BigInt(0);
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.Params.fromPartial(object.params)
                : undefined;
        message.poolRoutes =
            object.poolRoutes?.map(e => module_route_1.ModuleRoute.fromPartial(e)) || [];
        message.takerFeesTracker =
            object.takerFeesTracker !== undefined && object.takerFeesTracker !== null
                ? exports.TakerFeesTracker.fromPartial(object.takerFeesTracker)
                : undefined;
        message.poolVolumes =
            object.poolVolumes?.map(e => exports.PoolVolume.fromPartial(e)) || [];
        message.denomPairTakerFeeStore =
            object.denomPairTakerFeeStore?.map(e => tx_1.DenomPairTakerFee.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
            message.nextPoolId = BigInt(object.next_pool_id);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromAmino(object.params);
        }
        message.poolRoutes =
            object.pool_routes?.map(e => module_route_1.ModuleRoute.fromAmino(e)) || [];
        if (object.taker_fees_tracker !== undefined &&
            object.taker_fees_tracker !== null) {
            message.takerFeesTracker = exports.TakerFeesTracker.fromAmino(object.taker_fees_tracker);
        }
        message.poolVolumes =
            object.pool_volumes?.map(e => exports.PoolVolume.fromAmino(e)) || [];
        message.denomPairTakerFeeStore =
            object.denom_pair_taker_fee_store?.map(e => tx_1.DenomPairTakerFee.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_pool_id =
            message.nextPoolId !== BigInt(0)
                ? message.nextPoolId.toString()
                : undefined;
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        if (message.poolRoutes) {
            obj.pool_routes = message.poolRoutes.map(e => e ? module_route_1.ModuleRoute.toAmino(e) : undefined);
        }
        else {
            obj.pool_routes = message.poolRoutes;
        }
        obj.taker_fees_tracker = message.takerFeesTracker
            ? exports.TakerFeesTracker.toAmino(message.takerFeesTracker)
            : undefined;
        if (message.poolVolumes) {
            obj.pool_volumes = message.poolVolumes.map(e => e ? exports.PoolVolume.toAmino(e) : undefined);
        }
        else {
            obj.pool_volumes = message.poolVolumes;
        }
        if (message.denomPairTakerFeeStore) {
            obj.denom_pair_taker_fee_store = message.denomPairTakerFeeStore.map(e => e ? tx_1.DenomPairTakerFee.toAmino(e) : undefined);
        }
        else {
            obj.denom_pair_taker_fee_store = message.denomPairTakerFeeStore;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/genesis-state',
            value: exports.GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseTakerFeeParams() {
    return {
        defaultTakerFee: '',
        osmoTakerFeeDistribution: exports.TakerFeeDistributionPercentage.fromPartial({}),
        nonOsmoTakerFeeDistribution: exports.TakerFeeDistributionPercentage.fromPartial({}),
        adminAddresses: [],
        communityPoolDenomToSwapNonWhitelistedAssetsTo: '',
        reducedFeeWhitelist: [],
    };
}
exports.TakerFeeParams = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeParams',
    aminoType: 'osmosis/poolmanager/taker-fee-params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeeParams.typeUrl ||
                (typeof o.defaultTakerFee === 'string' &&
                    exports.TakerFeeDistributionPercentage.is(o.osmoTakerFeeDistribution) &&
                    exports.TakerFeeDistributionPercentage.is(o.nonOsmoTakerFeeDistribution) &&
                    Array.isArray(o.adminAddresses) &&
                    (!o.adminAddresses.length ||
                        typeof o.adminAddresses[0] === 'string') &&
                    typeof o.communityPoolDenomToSwapNonWhitelistedAssetsTo ===
                        'string' &&
                    Array.isArray(o.reducedFeeWhitelist) &&
                    (!o.reducedFeeWhitelist.length ||
                        typeof o.reducedFeeWhitelist[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeeParams.typeUrl ||
                (typeof o.default_taker_fee === 'string' &&
                    exports.TakerFeeDistributionPercentage.isSDK(o.osmo_taker_fee_distribution) &&
                    exports.TakerFeeDistributionPercentage.isSDK(o.non_osmo_taker_fee_distribution) &&
                    Array.isArray(o.admin_addresses) &&
                    (!o.admin_addresses.length ||
                        typeof o.admin_addresses[0] === 'string') &&
                    typeof o.community_pool_denom_to_swap_non_whitelisted_assets_to ===
                        'string' &&
                    Array.isArray(o.reduced_fee_whitelist) &&
                    (!o.reduced_fee_whitelist.length ||
                        typeof o.reduced_fee_whitelist[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeeParams.typeUrl ||
                (typeof o.default_taker_fee === 'string' &&
                    exports.TakerFeeDistributionPercentage.isAmino(o.osmo_taker_fee_distribution) &&
                    exports.TakerFeeDistributionPercentage.isAmino(o.non_osmo_taker_fee_distribution) &&
                    Array.isArray(o.admin_addresses) &&
                    (!o.admin_addresses.length ||
                        typeof o.admin_addresses[0] === 'string') &&
                    typeof o.community_pool_denom_to_swap_non_whitelisted_assets_to ===
                        'string' &&
                    Array.isArray(o.reduced_fee_whitelist) &&
                    (!o.reduced_fee_whitelist.length ||
                        typeof o.reduced_fee_whitelist[0] === 'string'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.defaultTakerFee !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.defaultTakerFee, 18).atomics);
        }
        if (message.osmoTakerFeeDistribution !== undefined) {
            exports.TakerFeeDistributionPercentage.encode(message.osmoTakerFeeDistribution, writer.uint32(18).fork()).ldelim();
        }
        if (message.nonOsmoTakerFeeDistribution !== undefined) {
            exports.TakerFeeDistributionPercentage.encode(message.nonOsmoTakerFeeDistribution, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.adminAddresses) {
            writer.uint32(34).string(v);
        }
        if (message.communityPoolDenomToSwapNonWhitelistedAssetsTo !== '') {
            writer
                .uint32(42)
                .string(message.communityPoolDenomToSwapNonWhitelistedAssetsTo);
        }
        for (const v of message.reducedFeeWhitelist) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultTakerFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.osmoTakerFeeDistribution =
                        exports.TakerFeeDistributionPercentage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nonOsmoTakerFeeDistribution =
                        exports.TakerFeeDistributionPercentage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.adminAddresses.push(reader.string());
                    break;
                case 5:
                    message.communityPoolDenomToSwapNonWhitelistedAssetsTo =
                        reader.string();
                    break;
                case 6:
                    message.reducedFeeWhitelist.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTakerFeeParams();
        message.defaultTakerFee = object.defaultTakerFee ?? '';
        message.osmoTakerFeeDistribution =
            object.osmoTakerFeeDistribution !== undefined &&
                object.osmoTakerFeeDistribution !== null
                ? exports.TakerFeeDistributionPercentage.fromPartial(object.osmoTakerFeeDistribution)
                : undefined;
        message.nonOsmoTakerFeeDistribution =
            object.nonOsmoTakerFeeDistribution !== undefined &&
                object.nonOsmoTakerFeeDistribution !== null
                ? exports.TakerFeeDistributionPercentage.fromPartial(object.nonOsmoTakerFeeDistribution)
                : undefined;
        message.adminAddresses = object.adminAddresses?.map(e => e) || [];
        message.communityPoolDenomToSwapNonWhitelistedAssetsTo =
            object.communityPoolDenomToSwapNonWhitelistedAssetsTo ?? '';
        message.reducedFeeWhitelist = object.reducedFeeWhitelist?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTakerFeeParams();
        if (object.default_taker_fee !== undefined &&
            object.default_taker_fee !== null) {
            message.defaultTakerFee = object.default_taker_fee;
        }
        if (object.osmo_taker_fee_distribution !== undefined &&
            object.osmo_taker_fee_distribution !== null) {
            message.osmoTakerFeeDistribution =
                exports.TakerFeeDistributionPercentage.fromAmino(object.osmo_taker_fee_distribution);
        }
        if (object.non_osmo_taker_fee_distribution !== undefined &&
            object.non_osmo_taker_fee_distribution !== null) {
            message.nonOsmoTakerFeeDistribution =
                exports.TakerFeeDistributionPercentage.fromAmino(object.non_osmo_taker_fee_distribution);
        }
        message.adminAddresses = object.admin_addresses?.map(e => e) || [];
        if (object.community_pool_denom_to_swap_non_whitelisted_assets_to !==
            undefined &&
            object.community_pool_denom_to_swap_non_whitelisted_assets_to !== null) {
            message.communityPoolDenomToSwapNonWhitelistedAssetsTo =
                object.community_pool_denom_to_swap_non_whitelisted_assets_to;
        }
        message.reducedFeeWhitelist =
            object.reduced_fee_whitelist?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.default_taker_fee =
            message.defaultTakerFee === '' ? undefined : message.defaultTakerFee;
        obj.osmo_taker_fee_distribution = message.osmoTakerFeeDistribution
            ? exports.TakerFeeDistributionPercentage.toAmino(message.osmoTakerFeeDistribution)
            : undefined;
        obj.non_osmo_taker_fee_distribution = message.nonOsmoTakerFeeDistribution
            ? exports.TakerFeeDistributionPercentage.toAmino(message.nonOsmoTakerFeeDistribution)
            : undefined;
        if (message.adminAddresses) {
            obj.admin_addresses = message.adminAddresses.map(e => e);
        }
        else {
            obj.admin_addresses = message.adminAddresses;
        }
        obj.community_pool_denom_to_swap_non_whitelisted_assets_to =
            message.communityPoolDenomToSwapNonWhitelistedAssetsTo === ''
                ? undefined
                : message.communityPoolDenomToSwapNonWhitelistedAssetsTo;
        if (message.reducedFeeWhitelist) {
            obj.reduced_fee_whitelist = message.reducedFeeWhitelist.map(e => e);
        }
        else {
            obj.reduced_fee_whitelist = message.reducedFeeWhitelist;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TakerFeeParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/taker-fee-params',
            value: exports.TakerFeeParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TakerFeeParams.decode(message.value);
    },
    toProto(message) {
        return exports.TakerFeeParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeParams',
            value: exports.TakerFeeParams.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TakerFeeParams.typeUrl, exports.TakerFeeParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TakerFeeParams.aminoType, exports.TakerFeeParams.typeUrl);
function createBaseTakerFeeDistributionPercentage() {
    return {
        stakingRewards: '',
        communityPool: '',
    };
}
exports.TakerFeeDistributionPercentage = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage',
    aminoType: 'osmosis/poolmanager/taker-fee-distribution-percentage',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeeDistributionPercentage.typeUrl ||
                (typeof o.stakingRewards === 'string' &&
                    typeof o.communityPool === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeeDistributionPercentage.typeUrl ||
                (typeof o.staking_rewards === 'string' &&
                    typeof o.community_pool === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeeDistributionPercentage.typeUrl ||
                (typeof o.staking_rewards === 'string' &&
                    typeof o.community_pool === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stakingRewards !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.stakingRewards, 18).atomics);
        }
        if (message.communityPool !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.communityPool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeeDistributionPercentage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingRewards = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.communityPool = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTakerFeeDistributionPercentage();
        message.stakingRewards = object.stakingRewards ?? '';
        message.communityPool = object.communityPool ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTakerFeeDistributionPercentage();
        if (object.staking_rewards !== undefined &&
            object.staking_rewards !== null) {
            message.stakingRewards = object.staking_rewards;
        }
        if (object.community_pool !== undefined && object.community_pool !== null) {
            message.communityPool = object.community_pool;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.staking_rewards =
            message.stakingRewards === '' ? undefined : message.stakingRewards;
        obj.community_pool =
            message.communityPool === '' ? undefined : message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TakerFeeDistributionPercentage.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/taker-fee-distribution-percentage',
            value: exports.TakerFeeDistributionPercentage.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TakerFeeDistributionPercentage.decode(message.value);
    },
    toProto(message) {
        return exports.TakerFeeDistributionPercentage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage',
            value: exports.TakerFeeDistributionPercentage.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TakerFeeDistributionPercentage.typeUrl, exports.TakerFeeDistributionPercentage);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TakerFeeDistributionPercentage.aminoType, exports.TakerFeeDistributionPercentage.typeUrl);
function createBaseTakerFeesTracker() {
    return {
        takerFeesToStakers: [],
        takerFeesToCommunityPool: [],
        heightAccountingStartsFrom: BigInt(0),
    };
}
exports.TakerFeesTracker = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeesTracker',
    aminoType: 'osmosis/poolmanager/taker-fees-tracker',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeesTracker.typeUrl ||
                (Array.isArray(o.takerFeesToStakers) &&
                    (!o.takerFeesToStakers.length || coin_1.Coin.is(o.takerFeesToStakers[0])) &&
                    Array.isArray(o.takerFeesToCommunityPool) &&
                    (!o.takerFeesToCommunityPool.length ||
                        coin_1.Coin.is(o.takerFeesToCommunityPool[0])) &&
                    typeof o.heightAccountingStartsFrom === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeesTracker.typeUrl ||
                (Array.isArray(o.taker_fees_to_stakers) &&
                    (!o.taker_fees_to_stakers.length ||
                        coin_1.Coin.isSDK(o.taker_fees_to_stakers[0])) &&
                    Array.isArray(o.taker_fees_to_community_pool) &&
                    (!o.taker_fees_to_community_pool.length ||
                        coin_1.Coin.isSDK(o.taker_fees_to_community_pool[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TakerFeesTracker.typeUrl ||
                (Array.isArray(o.taker_fees_to_stakers) &&
                    (!o.taker_fees_to_stakers.length ||
                        coin_1.Coin.isAmino(o.taker_fees_to_stakers[0])) &&
                    Array.isArray(o.taker_fees_to_community_pool) &&
                    (!o.taker_fees_to_community_pool.length ||
                        coin_1.Coin.isAmino(o.taker_fees_to_community_pool[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.takerFeesToStakers) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.takerFeesToCommunityPool) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.heightAccountingStartsFrom !== BigInt(0)) {
            writer.uint32(24).int64(message.heightAccountingStartsFrom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeesTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFeesToStakers.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.takerFeesToCommunityPool.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.heightAccountingStartsFrom = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTakerFeesTracker();
        message.takerFeesToStakers =
            object.takerFeesToStakers?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.takerFeesToCommunityPool =
            object.takerFeesToCommunityPool?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.heightAccountingStartsFrom =
            object.heightAccountingStartsFrom !== undefined &&
                object.heightAccountingStartsFrom !== null
                ? BigInt(object.heightAccountingStartsFrom.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTakerFeesTracker();
        message.takerFeesToStakers =
            object.taker_fees_to_stakers?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.takerFeesToCommunityPool =
            object.taker_fees_to_community_pool?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.height_accounting_starts_from !== undefined &&
            object.height_accounting_starts_from !== null) {
            message.heightAccountingStartsFrom = BigInt(object.height_accounting_starts_from);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.takerFeesToStakers) {
            obj.taker_fees_to_stakers = message.takerFeesToStakers.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.taker_fees_to_stakers = message.takerFeesToStakers;
        }
        if (message.takerFeesToCommunityPool) {
            obj.taker_fees_to_community_pool = message.takerFeesToCommunityPool.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.taker_fees_to_community_pool = message.takerFeesToCommunityPool;
        }
        obj.height_accounting_starts_from =
            message.heightAccountingStartsFrom !== BigInt(0)
                ? message.heightAccountingStartsFrom.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TakerFeesTracker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/taker-fees-tracker',
            value: exports.TakerFeesTracker.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TakerFeesTracker.decode(message.value);
    },
    toProto(message) {
        return exports.TakerFeesTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeesTracker',
            value: exports.TakerFeesTracker.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TakerFeesTracker.typeUrl, exports.TakerFeesTracker);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TakerFeesTracker.aminoType, exports.TakerFeesTracker.typeUrl);
function createBasePoolVolume() {
    return {
        poolId: BigInt(0),
        poolVolume: [],
    };
}
exports.PoolVolume = {
    typeUrl: '/osmosis.poolmanager.v1beta1.PoolVolume',
    aminoType: 'osmosis/poolmanager/pool-volume',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolVolume.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.poolVolume) &&
                    (!o.poolVolume.length || coin_1.Coin.is(o.poolVolume[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolVolume.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.pool_volume) &&
                    (!o.pool_volume.length || coin_1.Coin.isSDK(o.pool_volume[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolVolume.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.pool_volume) &&
                    (!o.pool_volume.length || coin_1.Coin.isAmino(o.pool_volume[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.poolVolume) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolVolume.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolVolume();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.poolVolume = object.poolVolume?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolVolume();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.poolVolume = object.pool_volume?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.poolVolume) {
            obj.pool_volume = message.poolVolume.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_volume = message.poolVolume;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolVolume.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/pool-volume',
            value: exports.PoolVolume.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolVolume.decode(message.value);
    },
    toProto(message) {
        return exports.PoolVolume.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.PoolVolume',
            value: exports.PoolVolume.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolVolume.typeUrl, exports.PoolVolume);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolVolume.aminoType, exports.PoolVolume.typeUrl);
