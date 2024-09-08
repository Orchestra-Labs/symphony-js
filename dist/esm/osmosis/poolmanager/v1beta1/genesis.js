//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { ModuleRoute, } from './module_route';
import { DenomPairTakerFee, } from './tx';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseParams() {
    return {
        poolCreationFee: [],
        takerFeeParams: TakerFeeParams.fromPartial({}),
        authorizedQuoteDenoms: [],
    };
}
export const Params = {
    typeUrl: '/osmosis.poolmanager.v1beta1.Params',
    aminoType: 'osmosis/poolmanager/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.poolCreationFee) &&
                    (!o.poolCreationFee.length || Coin.is(o.poolCreationFee[0])) &&
                    TakerFeeParams.is(o.takerFeeParams) &&
                    Array.isArray(o.authorizedQuoteDenoms) &&
                    (!o.authorizedQuoteDenoms.length ||
                        typeof o.authorizedQuoteDenoms[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.pool_creation_fee) &&
                    (!o.pool_creation_fee.length || Coin.isSDK(o.pool_creation_fee[0])) &&
                    TakerFeeParams.isSDK(o.taker_fee_params) &&
                    Array.isArray(o.authorized_quote_denoms) &&
                    (!o.authorized_quote_denoms.length ||
                        typeof o.authorized_quote_denoms[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.pool_creation_fee) &&
                    (!o.pool_creation_fee.length ||
                        Coin.isAmino(o.pool_creation_fee[0])) &&
                    TakerFeeParams.isAmino(o.taker_fee_params) &&
                    Array.isArray(o.authorized_quote_denoms) &&
                    (!o.authorized_quote_denoms.length ||
                        typeof o.authorized_quote_denoms[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.takerFeeParams !== undefined) {
            TakerFeeParams.encode(message.takerFeeParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.authorizedQuoteDenoms) {
            writer.uint32(26).string(v);
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
                    message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.takerFeeParams = TakerFeeParams.decode(reader, reader.uint32());
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
            object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
        message.takerFeeParams =
            object.takerFeeParams !== undefined && object.takerFeeParams !== null
                ? TakerFeeParams.fromPartial(object.takerFeeParams)
                : undefined;
        message.authorizedQuoteDenoms =
            object.authorizedQuoteDenoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.poolCreationFee =
            object.pool_creation_fee?.map(e => Coin.fromAmino(e)) || [];
        if (object.taker_fee_params !== undefined &&
            object.taker_fee_params !== null) {
            message.takerFeeParams = TakerFeeParams.fromAmino(object.taker_fee_params);
        }
        message.authorizedQuoteDenoms =
            object.authorized_quote_denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = message.poolCreationFee;
        }
        obj.taker_fee_params = message.takerFeeParams
            ? TakerFeeParams.toAmino(message.takerFeeParams)
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
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/params',
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
            typeUrl: '/osmosis.poolmanager.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseGenesisState() {
    return {
        nextPoolId: BigInt(0),
        params: Params.fromPartial({}),
        poolRoutes: [],
        takerFeesTracker: undefined,
        poolVolumes: [],
        denomPairTakerFeeStore: [],
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.poolmanager.v1beta1.GenesisState',
    aminoType: 'osmosis/poolmanager/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (typeof o.nextPoolId === 'bigint' &&
                    Params.is(o.params) &&
                    Array.isArray(o.poolRoutes) &&
                    (!o.poolRoutes.length || ModuleRoute.is(o.poolRoutes[0])) &&
                    Array.isArray(o.poolVolumes) &&
                    (!o.poolVolumes.length || PoolVolume.is(o.poolVolumes[0])) &&
                    Array.isArray(o.denomPairTakerFeeStore) &&
                    (!o.denomPairTakerFeeStore.length ||
                        DenomPairTakerFee.is(o.denomPairTakerFeeStore[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (typeof o.next_pool_id === 'bigint' &&
                    Params.isSDK(o.params) &&
                    Array.isArray(o.pool_routes) &&
                    (!o.pool_routes.length || ModuleRoute.isSDK(o.pool_routes[0])) &&
                    Array.isArray(o.pool_volumes) &&
                    (!o.pool_volumes.length || PoolVolume.isSDK(o.pool_volumes[0])) &&
                    Array.isArray(o.denom_pair_taker_fee_store) &&
                    (!o.denom_pair_taker_fee_store.length ||
                        DenomPairTakerFee.isSDK(o.denom_pair_taker_fee_store[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (typeof o.next_pool_id === 'bigint' &&
                    Params.isAmino(o.params) &&
                    Array.isArray(o.pool_routes) &&
                    (!o.pool_routes.length || ModuleRoute.isAmino(o.pool_routes[0])) &&
                    Array.isArray(o.pool_volumes) &&
                    (!o.pool_volumes.length || PoolVolume.isAmino(o.pool_volumes[0])) &&
                    Array.isArray(o.denom_pair_taker_fee_store) &&
                    (!o.denom_pair_taker_fee_store.length ||
                        DenomPairTakerFee.isAmino(o.denom_pair_taker_fee_store[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.nextPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextPoolId);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.poolRoutes) {
            ModuleRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.takerFeesTracker !== undefined) {
            TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.poolVolumes) {
            PoolVolume.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.denomPairTakerFeeStore) {
            DenomPairTakerFee.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextPoolId = reader.uint64();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolRoutes.push(ModuleRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.takerFeesTracker = TakerFeesTracker.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.poolVolumes.push(PoolVolume.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.denomPairTakerFeeStore.push(DenomPairTakerFee.decode(reader, reader.uint32()));
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
                ? Params.fromPartial(object.params)
                : undefined;
        message.poolRoutes =
            object.poolRoutes?.map(e => ModuleRoute.fromPartial(e)) || [];
        message.takerFeesTracker =
            object.takerFeesTracker !== undefined && object.takerFeesTracker !== null
                ? TakerFeesTracker.fromPartial(object.takerFeesTracker)
                : undefined;
        message.poolVolumes =
            object.poolVolumes?.map(e => PoolVolume.fromPartial(e)) || [];
        message.denomPairTakerFeeStore =
            object.denomPairTakerFeeStore?.map(e => DenomPairTakerFee.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
            message.nextPoolId = BigInt(object.next_pool_id);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.poolRoutes =
            object.pool_routes?.map(e => ModuleRoute.fromAmino(e)) || [];
        if (object.taker_fees_tracker !== undefined &&
            object.taker_fees_tracker !== null) {
            message.takerFeesTracker = TakerFeesTracker.fromAmino(object.taker_fees_tracker);
        }
        message.poolVolumes =
            object.pool_volumes?.map(e => PoolVolume.fromAmino(e)) || [];
        message.denomPairTakerFeeStore =
            object.denom_pair_taker_fee_store?.map(e => DenomPairTakerFee.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_pool_id =
            message.nextPoolId !== BigInt(0)
                ? message.nextPoolId.toString()
                : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.poolRoutes) {
            obj.pool_routes = message.poolRoutes.map(e => e ? ModuleRoute.toAmino(e) : undefined);
        }
        else {
            obj.pool_routes = message.poolRoutes;
        }
        obj.taker_fees_tracker = message.takerFeesTracker
            ? TakerFeesTracker.toAmino(message.takerFeesTracker)
            : undefined;
        if (message.poolVolumes) {
            obj.pool_volumes = message.poolVolumes.map(e => e ? PoolVolume.toAmino(e) : undefined);
        }
        else {
            obj.pool_volumes = message.poolVolumes;
        }
        if (message.denomPairTakerFeeStore) {
            obj.denom_pair_taker_fee_store = message.denomPairTakerFeeStore.map(e => e ? DenomPairTakerFee.toAmino(e) : undefined);
        }
        else {
            obj.denom_pair_taker_fee_store = message.denomPairTakerFeeStore;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/genesis-state',
            value: GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseTakerFeeParams() {
    return {
        defaultTakerFee: '',
        osmoTakerFeeDistribution: TakerFeeDistributionPercentage.fromPartial({}),
        nonOsmoTakerFeeDistribution: TakerFeeDistributionPercentage.fromPartial({}),
        adminAddresses: [],
        communityPoolDenomToSwapNonWhitelistedAssetsTo: '',
        reducedFeeWhitelist: [],
    };
}
export const TakerFeeParams = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeParams',
    aminoType: 'osmosis/poolmanager/taker-fee-params',
    is(o) {
        return (o &&
            (o.$typeUrl === TakerFeeParams.typeUrl ||
                (typeof o.defaultTakerFee === 'string' &&
                    TakerFeeDistributionPercentage.is(o.osmoTakerFeeDistribution) &&
                    TakerFeeDistributionPercentage.is(o.nonOsmoTakerFeeDistribution) &&
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
            (o.$typeUrl === TakerFeeParams.typeUrl ||
                (typeof o.default_taker_fee === 'string' &&
                    TakerFeeDistributionPercentage.isSDK(o.osmo_taker_fee_distribution) &&
                    TakerFeeDistributionPercentage.isSDK(o.non_osmo_taker_fee_distribution) &&
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
            (o.$typeUrl === TakerFeeParams.typeUrl ||
                (typeof o.default_taker_fee === 'string' &&
                    TakerFeeDistributionPercentage.isAmino(o.osmo_taker_fee_distribution) &&
                    TakerFeeDistributionPercentage.isAmino(o.non_osmo_taker_fee_distribution) &&
                    Array.isArray(o.admin_addresses) &&
                    (!o.admin_addresses.length ||
                        typeof o.admin_addresses[0] === 'string') &&
                    typeof o.community_pool_denom_to_swap_non_whitelisted_assets_to ===
                        'string' &&
                    Array.isArray(o.reduced_fee_whitelist) &&
                    (!o.reduced_fee_whitelist.length ||
                        typeof o.reduced_fee_whitelist[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.defaultTakerFee !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.defaultTakerFee, 18).atomics);
        }
        if (message.osmoTakerFeeDistribution !== undefined) {
            TakerFeeDistributionPercentage.encode(message.osmoTakerFeeDistribution, writer.uint32(18).fork()).ldelim();
        }
        if (message.nonOsmoTakerFeeDistribution !== undefined) {
            TakerFeeDistributionPercentage.encode(message.nonOsmoTakerFeeDistribution, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultTakerFee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.osmoTakerFeeDistribution =
                        TakerFeeDistributionPercentage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nonOsmoTakerFeeDistribution =
                        TakerFeeDistributionPercentage.decode(reader, reader.uint32());
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
                ? TakerFeeDistributionPercentage.fromPartial(object.osmoTakerFeeDistribution)
                : undefined;
        message.nonOsmoTakerFeeDistribution =
            object.nonOsmoTakerFeeDistribution !== undefined &&
                object.nonOsmoTakerFeeDistribution !== null
                ? TakerFeeDistributionPercentage.fromPartial(object.nonOsmoTakerFeeDistribution)
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
                TakerFeeDistributionPercentage.fromAmino(object.osmo_taker_fee_distribution);
        }
        if (object.non_osmo_taker_fee_distribution !== undefined &&
            object.non_osmo_taker_fee_distribution !== null) {
            message.nonOsmoTakerFeeDistribution =
                TakerFeeDistributionPercentage.fromAmino(object.non_osmo_taker_fee_distribution);
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
            ? TakerFeeDistributionPercentage.toAmino(message.osmoTakerFeeDistribution)
            : undefined;
        obj.non_osmo_taker_fee_distribution = message.nonOsmoTakerFeeDistribution
            ? TakerFeeDistributionPercentage.toAmino(message.nonOsmoTakerFeeDistribution)
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
        return TakerFeeParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/taker-fee-params',
            value: TakerFeeParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TakerFeeParams.decode(message.value);
    },
    toProto(message) {
        return TakerFeeParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeParams',
            value: TakerFeeParams.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TakerFeeParams.typeUrl, TakerFeeParams);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeParams.aminoType, TakerFeeParams.typeUrl);
function createBaseTakerFeeDistributionPercentage() {
    return {
        stakingRewards: '',
        communityPool: '',
    };
}
export const TakerFeeDistributionPercentage = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage',
    aminoType: 'osmosis/poolmanager/taker-fee-distribution-percentage',
    is(o) {
        return (o &&
            (o.$typeUrl === TakerFeeDistributionPercentage.typeUrl ||
                (typeof o.stakingRewards === 'string' &&
                    typeof o.communityPool === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TakerFeeDistributionPercentage.typeUrl ||
                (typeof o.staking_rewards === 'string' &&
                    typeof o.community_pool === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TakerFeeDistributionPercentage.typeUrl ||
                (typeof o.staking_rewards === 'string' &&
                    typeof o.community_pool === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.stakingRewards !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
        }
        if (message.communityPool !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.communityPool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeeDistributionPercentage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingRewards = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return TakerFeeDistributionPercentage.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/taker-fee-distribution-percentage',
            value: TakerFeeDistributionPercentage.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TakerFeeDistributionPercentage.decode(message.value);
    },
    toProto(message) {
        return TakerFeeDistributionPercentage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage',
            value: TakerFeeDistributionPercentage.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TakerFeeDistributionPercentage.typeUrl, TakerFeeDistributionPercentage);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeDistributionPercentage.aminoType, TakerFeeDistributionPercentage.typeUrl);
function createBaseTakerFeesTracker() {
    return {
        takerFeesToStakers: [],
        takerFeesToCommunityPool: [],
        heightAccountingStartsFrom: BigInt(0),
    };
}
export const TakerFeesTracker = {
    typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeesTracker',
    aminoType: 'osmosis/poolmanager/taker-fees-tracker',
    is(o) {
        return (o &&
            (o.$typeUrl === TakerFeesTracker.typeUrl ||
                (Array.isArray(o.takerFeesToStakers) &&
                    (!o.takerFeesToStakers.length || Coin.is(o.takerFeesToStakers[0])) &&
                    Array.isArray(o.takerFeesToCommunityPool) &&
                    (!o.takerFeesToCommunityPool.length ||
                        Coin.is(o.takerFeesToCommunityPool[0])) &&
                    typeof o.heightAccountingStartsFrom === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TakerFeesTracker.typeUrl ||
                (Array.isArray(o.taker_fees_to_stakers) &&
                    (!o.taker_fees_to_stakers.length ||
                        Coin.isSDK(o.taker_fees_to_stakers[0])) &&
                    Array.isArray(o.taker_fees_to_community_pool) &&
                    (!o.taker_fees_to_community_pool.length ||
                        Coin.isSDK(o.taker_fees_to_community_pool[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TakerFeesTracker.typeUrl ||
                (Array.isArray(o.taker_fees_to_stakers) &&
                    (!o.taker_fees_to_stakers.length ||
                        Coin.isAmino(o.taker_fees_to_stakers[0])) &&
                    Array.isArray(o.taker_fees_to_community_pool) &&
                    (!o.taker_fees_to_community_pool.length ||
                        Coin.isAmino(o.taker_fees_to_community_pool[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.takerFeesToStakers) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.takerFeesToCommunityPool) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.heightAccountingStartsFrom !== BigInt(0)) {
            writer.uint32(24).int64(message.heightAccountingStartsFrom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTakerFeesTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFeesToStakers.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.takerFeesToCommunityPool.push(Coin.decode(reader, reader.uint32()));
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
            object.takerFeesToStakers?.map(e => Coin.fromPartial(e)) || [];
        message.takerFeesToCommunityPool =
            object.takerFeesToCommunityPool?.map(e => Coin.fromPartial(e)) || [];
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
            object.taker_fees_to_stakers?.map(e => Coin.fromAmino(e)) || [];
        message.takerFeesToCommunityPool =
            object.taker_fees_to_community_pool?.map(e => Coin.fromAmino(e)) || [];
        if (object.height_accounting_starts_from !== undefined &&
            object.height_accounting_starts_from !== null) {
            message.heightAccountingStartsFrom = BigInt(object.height_accounting_starts_from);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.takerFeesToStakers) {
            obj.taker_fees_to_stakers = message.takerFeesToStakers.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.taker_fees_to_stakers = message.takerFeesToStakers;
        }
        if (message.takerFeesToCommunityPool) {
            obj.taker_fees_to_community_pool = message.takerFeesToCommunityPool.map(e => (e ? Coin.toAmino(e) : undefined));
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
        return TakerFeesTracker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/taker-fees-tracker',
            value: TakerFeesTracker.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TakerFeesTracker.decode(message.value);
    },
    toProto(message) {
        return TakerFeesTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.TakerFeesTracker',
            value: TakerFeesTracker.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TakerFeesTracker.typeUrl, TakerFeesTracker);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeesTracker.aminoType, TakerFeesTracker.typeUrl);
function createBasePoolVolume() {
    return {
        poolId: BigInt(0),
        poolVolume: [],
    };
}
export const PoolVolume = {
    typeUrl: '/osmosis.poolmanager.v1beta1.PoolVolume',
    aminoType: 'osmosis/poolmanager/pool-volume',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolVolume.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    Array.isArray(o.poolVolume) &&
                    (!o.poolVolume.length || Coin.is(o.poolVolume[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolVolume.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.pool_volume) &&
                    (!o.pool_volume.length || Coin.isSDK(o.pool_volume[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolVolume.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.pool_volume) &&
                    (!o.pool_volume.length || Coin.isAmino(o.pool_volume[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.poolVolume) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolVolume.push(Coin.decode(reader, reader.uint32()));
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
        message.poolVolume = object.poolVolume?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolVolume();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.poolVolume = object.pool_volume?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.poolVolume) {
            obj.pool_volume = message.poolVolume.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_volume = message.poolVolume;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PoolVolume.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/pool-volume',
            value: PoolVolume.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolVolume.decode(message.value);
    },
    toProto(message) {
        return PoolVolume.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.PoolVolume',
            value: PoolVolume.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolVolume.typeUrl, PoolVolume);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolVolume.aminoType, PoolVolume.typeUrl);
