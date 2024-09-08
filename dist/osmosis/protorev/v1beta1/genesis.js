"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const protorev_1 = require("./protorev");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        tokenPairArbRoutes: [],
        baseDenoms: [],
        daysSinceModuleGenesis: BigInt(0),
        developerFees: [],
        latestBlockHeight: BigInt(0),
        developerAddress: '',
        maxPoolPointsPerBlock: BigInt(0),
        maxPoolPointsPerTx: BigInt(0),
        pointCountForBlock: BigInt(0),
        profits: [],
        infoByPoolType: protorev_1.InfoByPoolType.fromPartial({}),
        cyclicArbTracker: undefined,
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.protorev.v1beta1.GenesisState',
    aminoType: 'osmosis/protorev/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.is(o.params) &&
                    Array.isArray(o.tokenPairArbRoutes) &&
                    (!o.tokenPairArbRoutes.length ||
                        protorev_1.TokenPairArbRoutes.is(o.tokenPairArbRoutes[0])) &&
                    Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || protorev_1.BaseDenom.is(o.baseDenoms[0])) &&
                    typeof o.daysSinceModuleGenesis === 'bigint' &&
                    Array.isArray(o.developerFees) &&
                    (!o.developerFees.length || coin_1.Coin.is(o.developerFees[0])) &&
                    typeof o.latestBlockHeight === 'bigint' &&
                    typeof o.developerAddress === 'string' &&
                    typeof o.maxPoolPointsPerBlock === 'bigint' &&
                    typeof o.maxPoolPointsPerTx === 'bigint' &&
                    typeof o.pointCountForBlock === 'bigint' &&
                    Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.is(o.profits[0])) &&
                    protorev_1.InfoByPoolType.is(o.infoByPoolType))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isSDK(o.params) &&
                    Array.isArray(o.token_pair_arb_routes) &&
                    (!o.token_pair_arb_routes.length ||
                        protorev_1.TokenPairArbRoutes.isSDK(o.token_pair_arb_routes[0])) &&
                    Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || protorev_1.BaseDenom.isSDK(o.base_denoms[0])) &&
                    typeof o.days_since_module_genesis === 'bigint' &&
                    Array.isArray(o.developer_fees) &&
                    (!o.developer_fees.length || coin_1.Coin.isSDK(o.developer_fees[0])) &&
                    typeof o.latest_block_height === 'bigint' &&
                    typeof o.developer_address === 'string' &&
                    typeof o.max_pool_points_per_block === 'bigint' &&
                    typeof o.max_pool_points_per_tx === 'bigint' &&
                    typeof o.point_count_for_block === 'bigint' &&
                    Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.isSDK(o.profits[0])) &&
                    protorev_1.InfoByPoolType.isSDK(o.info_by_pool_type))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (params_1.Params.isAmino(o.params) &&
                    Array.isArray(o.token_pair_arb_routes) &&
                    (!o.token_pair_arb_routes.length ||
                        protorev_1.TokenPairArbRoutes.isAmino(o.token_pair_arb_routes[0])) &&
                    Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || protorev_1.BaseDenom.isAmino(o.base_denoms[0])) &&
                    typeof o.days_since_module_genesis === 'bigint' &&
                    Array.isArray(o.developer_fees) &&
                    (!o.developer_fees.length || coin_1.Coin.isAmino(o.developer_fees[0])) &&
                    typeof o.latest_block_height === 'bigint' &&
                    typeof o.developer_address === 'string' &&
                    typeof o.max_pool_points_per_block === 'bigint' &&
                    typeof o.max_pool_points_per_tx === 'bigint' &&
                    typeof o.point_count_for_block === 'bigint' &&
                    Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.isAmino(o.profits[0])) &&
                    protorev_1.InfoByPoolType.isAmino(o.info_by_pool_type))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokenPairArbRoutes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.baseDenoms) {
            protorev_1.BaseDenom.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.daysSinceModuleGenesis !== BigInt(0)) {
            writer.uint32(40).uint64(message.daysSinceModuleGenesis);
        }
        for (const v of message.developerFees) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestBlockHeight !== BigInt(0)) {
            writer.uint32(56).uint64(message.latestBlockHeight);
        }
        if (message.developerAddress !== '') {
            writer.uint32(66).string(message.developerAddress);
        }
        if (message.maxPoolPointsPerBlock !== BigInt(0)) {
            writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
        }
        if (message.maxPoolPointsPerTx !== BigInt(0)) {
            writer.uint32(80).uint64(message.maxPoolPointsPerTx);
        }
        if (message.pointCountForBlock !== BigInt(0)) {
            writer.uint32(88).uint64(message.pointCountForBlock);
        }
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.infoByPoolType !== undefined) {
            protorev_1.InfoByPoolType.encode(message.infoByPoolType, writer.uint32(106).fork()).ldelim();
        }
        if (message.cyclicArbTracker !== undefined) {
            protorev_1.CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(114).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenPairArbRoutes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.baseDenoms.push(protorev_1.BaseDenom.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.daysSinceModuleGenesis = reader.uint64();
                    break;
                case 6:
                    message.developerFees.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.latestBlockHeight = reader.uint64();
                    break;
                case 8:
                    message.developerAddress = reader.string();
                    break;
                case 9:
                    message.maxPoolPointsPerBlock = reader.uint64();
                    break;
                case 10:
                    message.maxPoolPointsPerTx = reader.uint64();
                    break;
                case 11:
                    message.pointCountForBlock = reader.uint64();
                    break;
                case 12:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.infoByPoolType = protorev_1.InfoByPoolType.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.cyclicArbTracker = protorev_1.CyclicArbTracker.decode(reader, reader.uint32());
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
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.tokenPairArbRoutes =
            object.tokenPairArbRoutes?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) ||
                [];
        message.baseDenoms =
            object.baseDenoms?.map(e => protorev_1.BaseDenom.fromPartial(e)) || [];
        message.daysSinceModuleGenesis =
            object.daysSinceModuleGenesis !== undefined &&
                object.daysSinceModuleGenesis !== null
                ? BigInt(object.daysSinceModuleGenesis.toString())
                : BigInt(0);
        message.developerFees =
            object.developerFees?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.latestBlockHeight =
            object.latestBlockHeight !== undefined &&
                object.latestBlockHeight !== null
                ? BigInt(object.latestBlockHeight.toString())
                : BigInt(0);
        message.developerAddress = object.developerAddress ?? '';
        message.maxPoolPointsPerBlock =
            object.maxPoolPointsPerBlock !== undefined &&
                object.maxPoolPointsPerBlock !== null
                ? BigInt(object.maxPoolPointsPerBlock.toString())
                : BigInt(0);
        message.maxPoolPointsPerTx =
            object.maxPoolPointsPerTx !== undefined &&
                object.maxPoolPointsPerTx !== null
                ? BigInt(object.maxPoolPointsPerTx.toString())
                : BigInt(0);
        message.pointCountForBlock =
            object.pointCountForBlock !== undefined &&
                object.pointCountForBlock !== null
                ? BigInt(object.pointCountForBlock.toString())
                : BigInt(0);
        message.profits = object.profits?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.infoByPoolType =
            object.infoByPoolType !== undefined && object.infoByPoolType !== null
                ? protorev_1.InfoByPoolType.fromPartial(object.infoByPoolType)
                : undefined;
        message.cyclicArbTracker =
            object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null
                ? protorev_1.CyclicArbTracker.fromPartial(object.cyclicArbTracker)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.tokenPairArbRoutes =
            object.token_pair_arb_routes?.map(e => protorev_1.TokenPairArbRoutes.fromAmino(e)) ||
                [];
        message.baseDenoms =
            object.base_denoms?.map(e => protorev_1.BaseDenom.fromAmino(e)) || [];
        if (object.days_since_module_genesis !== undefined &&
            object.days_since_module_genesis !== null) {
            message.daysSinceModuleGenesis = BigInt(object.days_since_module_genesis);
        }
        message.developerFees =
            object.developer_fees?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.latest_block_height !== undefined &&
            object.latest_block_height !== null) {
            message.latestBlockHeight = BigInt(object.latest_block_height);
        }
        if (object.developer_address !== undefined &&
            object.developer_address !== null) {
            message.developerAddress = object.developer_address;
        }
        if (object.max_pool_points_per_block !== undefined &&
            object.max_pool_points_per_block !== null) {
            message.maxPoolPointsPerBlock = BigInt(object.max_pool_points_per_block);
        }
        if (object.max_pool_points_per_tx !== undefined &&
            object.max_pool_points_per_tx !== null) {
            message.maxPoolPointsPerTx = BigInt(object.max_pool_points_per_tx);
        }
        if (object.point_count_for_block !== undefined &&
            object.point_count_for_block !== null) {
            message.pointCountForBlock = BigInt(object.point_count_for_block);
        }
        message.profits = object.profits?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.info_by_pool_type !== undefined &&
            object.info_by_pool_type !== null) {
            message.infoByPoolType = protorev_1.InfoByPoolType.fromAmino(object.info_by_pool_type);
        }
        if (object.cyclic_arb_tracker !== undefined &&
            object.cyclic_arb_tracker !== null) {
            message.cyclicArbTracker = protorev_1.CyclicArbTracker.fromAmino(object.cyclic_arb_tracker);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.tokenPairArbRoutes) {
            obj.token_pair_arb_routes = message.tokenPairArbRoutes.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.token_pair_arb_routes = message.tokenPairArbRoutes;
        }
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? protorev_1.BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        obj.days_since_module_genesis =
            message.daysSinceModuleGenesis !== BigInt(0)
                ? message.daysSinceModuleGenesis.toString()
                : undefined;
        if (message.developerFees) {
            obj.developer_fees = message.developerFees.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.developer_fees = message.developerFees;
        }
        obj.latest_block_height =
            message.latestBlockHeight !== BigInt(0)
                ? message.latestBlockHeight.toString()
                : undefined;
        obj.developer_address =
            message.developerAddress === '' ? undefined : message.developerAddress;
        obj.max_pool_points_per_block =
            message.maxPoolPointsPerBlock !== BigInt(0)
                ? message.maxPoolPointsPerBlock.toString()
                : undefined;
        obj.max_pool_points_per_tx =
            message.maxPoolPointsPerTx !== BigInt(0)
                ? message.maxPoolPointsPerTx.toString()
                : undefined;
        obj.point_count_for_block =
            message.pointCountForBlock !== BigInt(0)
                ? message.pointCountForBlock.toString()
                : undefined;
        if (message.profits) {
            obj.profits = message.profits.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.profits = message.profits;
        }
        obj.info_by_pool_type = message.infoByPoolType
            ? protorev_1.InfoByPoolType.toAmino(message.infoByPoolType)
            : undefined;
        obj.cyclic_arb_tracker = message.cyclicArbTracker
            ? protorev_1.CyclicArbTracker.toAmino(message.cyclicArbTracker)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/genesis-state',
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
            typeUrl: '/osmosis.protorev.v1beta1.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
