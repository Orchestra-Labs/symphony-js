"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyclicArbTracker = exports.AllProtocolRevenue = exports.BaseDenoms = exports.BaseDenom = exports.WeightMap = exports.CosmwasmPoolInfo = exports.ConcentratedPoolInfo = exports.BalancerPoolInfo = exports.StablePoolInfo = exports.InfoByPoolType = exports.PoolWeights = exports.RouteStatistics = exports.Trade = exports.Route = exports.TokenPairArbRoutes = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("../../poolmanager/v1beta1/genesis");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseTokenPairArbRoutes() {
    return {
        arbRoutes: [],
        tokenIn: '',
        tokenOut: '',
    };
}
exports.TokenPairArbRoutes = {
    typeUrl: '/osmosis.protorev.v1beta1.TokenPairArbRoutes',
    aminoType: 'osmosis/protorev/token-pair-arb-routes',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TokenPairArbRoutes.typeUrl ||
                (Array.isArray(o.arbRoutes) &&
                    (!o.arbRoutes.length || exports.Route.is(o.arbRoutes[0])) &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TokenPairArbRoutes.typeUrl ||
                (Array.isArray(o.arb_routes) &&
                    (!o.arb_routes.length || exports.Route.isSDK(o.arb_routes[0])) &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TokenPairArbRoutes.typeUrl ||
                (Array.isArray(o.arb_routes) &&
                    (!o.arb_routes.length || exports.Route.isAmino(o.arb_routes[0])) &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.arbRoutes) {
            exports.Route.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenIn !== '') {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOut !== '') {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPairArbRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arbRoutes.push(exports.Route.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arbRoutes = object.arbRoutes?.map(e => exports.Route.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn ?? '';
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arbRoutes = object.arb_routes?.map(e => exports.Route.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.arbRoutes) {
            obj.arb_routes = message.arbRoutes.map(e => e ? exports.Route.toAmino(e) : undefined);
        }
        else {
            obj.arb_routes = message.arbRoutes;
        }
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TokenPairArbRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/token-pair-arb-routes',
            value: exports.TokenPairArbRoutes.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TokenPairArbRoutes.decode(message.value);
    },
    toProto(message) {
        return exports.TokenPairArbRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.TokenPairArbRoutes',
            value: exports.TokenPairArbRoutes.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TokenPairArbRoutes.typeUrl, exports.TokenPairArbRoutes);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TokenPairArbRoutes.aminoType, exports.TokenPairArbRoutes.typeUrl);
function createBaseRoute() {
    return {
        trades: [],
        stepSize: '',
    };
}
exports.Route = {
    typeUrl: '/osmosis.protorev.v1beta1.Route',
    aminoType: 'osmosis/protorev/route',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Route.typeUrl ||
                (Array.isArray(o.trades) &&
                    (!o.trades.length || exports.Trade.is(o.trades[0])) &&
                    typeof o.stepSize === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Route.typeUrl ||
                (Array.isArray(o.trades) &&
                    (!o.trades.length || exports.Trade.isSDK(o.trades[0])) &&
                    typeof o.step_size === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Route.typeUrl ||
                (Array.isArray(o.trades) &&
                    (!o.trades.length || exports.Trade.isAmino(o.trades[0])) &&
                    typeof o.step_size === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.trades) {
            exports.Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.stepSize !== '') {
            writer.uint32(18).string(message.stepSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stepSize = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map(e => exports.Trade.fromPartial(e)) || [];
        message.stepSize = object.stepSize ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map(e => exports.Trade.fromAmino(e)) || [];
        if (object.step_size !== undefined && object.step_size !== null) {
            message.stepSize = object.step_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => (e ? exports.Trade.toAmino(e) : undefined));
        }
        else {
            obj.trades = message.trades;
        }
        obj.step_size = message.stepSize === '' ? undefined : message.stepSize;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Route.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/route',
            value: exports.Route.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Route.decode(message.value);
    },
    toProto(message) {
        return exports.Route.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.Route',
            value: exports.Route.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Route.typeUrl, exports.Route);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Route.aminoType, exports.Route.typeUrl);
function createBaseTrade() {
    return {
        pool: BigInt(0),
        tokenIn: '',
        tokenOut: '',
    };
}
exports.Trade = {
    typeUrl: '/osmosis.protorev.v1beta1.Trade',
    aminoType: 'osmosis/protorev/trade',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Trade.typeUrl ||
                (typeof o.pool === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Trade.typeUrl ||
                (typeof o.pool === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Trade.typeUrl ||
                (typeof o.pool === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool);
        }
        if (message.tokenIn !== '') {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.tokenOut !== '') {
            writer.uint32(26).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = reader.uint64();
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTrade();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? BigInt(object.pool.toString())
                : BigInt(0);
        message.tokenIn = object.tokenIn ?? '';
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrade();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = BigInt(object.pool);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool !== BigInt(0) ? message.pool.toString() : undefined;
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Trade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/trade',
            value: exports.Trade.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Trade.decode(message.value);
    },
    toProto(message) {
        return exports.Trade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.Trade',
            value: exports.Trade.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Trade.typeUrl, exports.Trade);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Trade.aminoType, exports.Trade.typeUrl);
function createBaseRouteStatistics() {
    return {
        profits: [],
        numberOfTrades: '',
        route: [],
    };
}
exports.RouteStatistics = {
    typeUrl: '/osmosis.protorev.v1beta1.RouteStatistics',
    aminoType: 'osmosis/protorev/route-statistics',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.RouteStatistics.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.is(o.profits[0])) &&
                    typeof o.numberOfTrades === 'string' &&
                    Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.RouteStatistics.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.isSDK(o.profits[0])) &&
                    typeof o.number_of_trades === 'string' &&
                    Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.RouteStatistics.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || coin_1.Coin.isAmino(o.profits[0])) &&
                    typeof o.number_of_trades === 'string' &&
                    Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numberOfTrades !== '') {
            writer.uint32(18).string(message.numberOfTrades);
        }
        writer.uint32(26).fork();
        for (const v of message.route) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numberOfTrades = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.route.push(reader.uint64());
                        }
                    }
                    else {
                        message.route.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRouteStatistics();
        message.profits = object.profits?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.numberOfTrades = object.numberOfTrades ?? '';
        message.route = object.route?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRouteStatistics();
        message.profits = object.profits?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.number_of_trades !== undefined &&
            object.number_of_trades !== null) {
            message.numberOfTrades = object.number_of_trades;
        }
        message.route = object.route?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => (e ? coin_1.Coin.toAmino(e) : undefined));
        }
        else {
            obj.profits = message.profits;
        }
        obj.number_of_trades =
            message.numberOfTrades === '' ? undefined : message.numberOfTrades;
        if (message.route) {
            obj.route = message.route.map(e => e.toString());
        }
        else {
            obj.route = message.route;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RouteStatistics.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/route-statistics',
            value: exports.RouteStatistics.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.RouteStatistics.decode(message.value);
    },
    toProto(message) {
        return exports.RouteStatistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.RouteStatistics',
            value: exports.RouteStatistics.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.RouteStatistics.typeUrl, exports.RouteStatistics);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RouteStatistics.aminoType, exports.RouteStatistics.typeUrl);
function createBasePoolWeights() {
    return {
        stableWeight: BigInt(0),
        balancerWeight: BigInt(0),
        concentratedWeight: BigInt(0),
        cosmwasmWeight: BigInt(0),
    };
}
exports.PoolWeights = {
    typeUrl: '/osmosis.protorev.v1beta1.PoolWeights',
    aminoType: 'osmosis/protorev/pool-weights',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolWeights.typeUrl ||
                (typeof o.stableWeight === 'bigint' &&
                    typeof o.balancerWeight === 'bigint' &&
                    typeof o.concentratedWeight === 'bigint' &&
                    typeof o.cosmwasmWeight === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolWeights.typeUrl ||
                (typeof o.stable_weight === 'bigint' &&
                    typeof o.balancer_weight === 'bigint' &&
                    typeof o.concentrated_weight === 'bigint' &&
                    typeof o.cosmwasm_weight === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolWeights.typeUrl ||
                (typeof o.stable_weight === 'bigint' &&
                    typeof o.balancer_weight === 'bigint' &&
                    typeof o.concentrated_weight === 'bigint' &&
                    typeof o.cosmwasm_weight === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stableWeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.stableWeight);
        }
        if (message.balancerWeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.balancerWeight);
        }
        if (message.concentratedWeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.concentratedWeight);
        }
        if (message.cosmwasmWeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.cosmwasmWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolWeights();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableWeight = reader.uint64();
                    break;
                case 2:
                    message.balancerWeight = reader.uint64();
                    break;
                case 3:
                    message.concentratedWeight = reader.uint64();
                    break;
                case 4:
                    message.cosmwasmWeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolWeights();
        message.stableWeight =
            object.stableWeight !== undefined && object.stableWeight !== null
                ? BigInt(object.stableWeight.toString())
                : BigInt(0);
        message.balancerWeight =
            object.balancerWeight !== undefined && object.balancerWeight !== null
                ? BigInt(object.balancerWeight.toString())
                : BigInt(0);
        message.concentratedWeight =
            object.concentratedWeight !== undefined &&
                object.concentratedWeight !== null
                ? BigInt(object.concentratedWeight.toString())
                : BigInt(0);
        message.cosmwasmWeight =
            object.cosmwasmWeight !== undefined && object.cosmwasmWeight !== null
                ? BigInt(object.cosmwasmWeight.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolWeights();
        if (object.stable_weight !== undefined && object.stable_weight !== null) {
            message.stableWeight = BigInt(object.stable_weight);
        }
        if (object.balancer_weight !== undefined &&
            object.balancer_weight !== null) {
            message.balancerWeight = BigInt(object.balancer_weight);
        }
        if (object.concentrated_weight !== undefined &&
            object.concentrated_weight !== null) {
            message.concentratedWeight = BigInt(object.concentrated_weight);
        }
        if (object.cosmwasm_weight !== undefined &&
            object.cosmwasm_weight !== null) {
            message.cosmwasmWeight = BigInt(object.cosmwasm_weight);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stable_weight =
            message.stableWeight !== BigInt(0)
                ? message.stableWeight.toString()
                : undefined;
        obj.balancer_weight =
            message.balancerWeight !== BigInt(0)
                ? message.balancerWeight.toString()
                : undefined;
        obj.concentrated_weight =
            message.concentratedWeight !== BigInt(0)
                ? message.concentratedWeight.toString()
                : undefined;
        obj.cosmwasm_weight =
            message.cosmwasmWeight !== BigInt(0)
                ? message.cosmwasmWeight.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolWeights.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/pool-weights',
            value: exports.PoolWeights.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolWeights.decode(message.value);
    },
    toProto(message) {
        return exports.PoolWeights.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.PoolWeights',
            value: exports.PoolWeights.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolWeights.typeUrl, exports.PoolWeights);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolWeights.aminoType, exports.PoolWeights.typeUrl);
function createBaseInfoByPoolType() {
    return {
        stable: exports.StablePoolInfo.fromPartial({}),
        balancer: exports.BalancerPoolInfo.fromPartial({}),
        concentrated: exports.ConcentratedPoolInfo.fromPartial({}),
        cosmwasm: exports.CosmwasmPoolInfo.fromPartial({}),
    };
}
exports.InfoByPoolType = {
    typeUrl: '/osmosis.protorev.v1beta1.InfoByPoolType',
    aminoType: 'osmosis/protorev/info-by-pool-type',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.InfoByPoolType.typeUrl ||
                (exports.StablePoolInfo.is(o.stable) &&
                    exports.BalancerPoolInfo.is(o.balancer) &&
                    exports.ConcentratedPoolInfo.is(o.concentrated) &&
                    exports.CosmwasmPoolInfo.is(o.cosmwasm))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.InfoByPoolType.typeUrl ||
                (exports.StablePoolInfo.isSDK(o.stable) &&
                    exports.BalancerPoolInfo.isSDK(o.balancer) &&
                    exports.ConcentratedPoolInfo.isSDK(o.concentrated) &&
                    exports.CosmwasmPoolInfo.isSDK(o.cosmwasm))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.InfoByPoolType.typeUrl ||
                (exports.StablePoolInfo.isAmino(o.stable) &&
                    exports.BalancerPoolInfo.isAmino(o.balancer) &&
                    exports.ConcentratedPoolInfo.isAmino(o.concentrated) &&
                    exports.CosmwasmPoolInfo.isAmino(o.cosmwasm))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.stable !== undefined) {
            exports.StablePoolInfo.encode(message.stable, writer.uint32(10).fork()).ldelim();
        }
        if (message.balancer !== undefined) {
            exports.BalancerPoolInfo.encode(message.balancer, writer.uint32(18).fork()).ldelim();
        }
        if (message.concentrated !== undefined) {
            exports.ConcentratedPoolInfo.encode(message.concentrated, writer.uint32(26).fork()).ldelim();
        }
        if (message.cosmwasm !== undefined) {
            exports.CosmwasmPoolInfo.encode(message.cosmwasm, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoByPoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stable = exports.StablePoolInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balancer = exports.BalancerPoolInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.concentrated = exports.ConcentratedPoolInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cosmwasm = exports.CosmwasmPoolInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInfoByPoolType();
        message.stable =
            object.stable !== undefined && object.stable !== null
                ? exports.StablePoolInfo.fromPartial(object.stable)
                : undefined;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? exports.BalancerPoolInfo.fromPartial(object.balancer)
                : undefined;
        message.concentrated =
            object.concentrated !== undefined && object.concentrated !== null
                ? exports.ConcentratedPoolInfo.fromPartial(object.concentrated)
                : undefined;
        message.cosmwasm =
            object.cosmwasm !== undefined && object.cosmwasm !== null
                ? exports.CosmwasmPoolInfo.fromPartial(object.cosmwasm)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseInfoByPoolType();
        if (object.stable !== undefined && object.stable !== null) {
            message.stable = exports.StablePoolInfo.fromAmino(object.stable);
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = exports.BalancerPoolInfo.fromAmino(object.balancer);
        }
        if (object.concentrated !== undefined && object.concentrated !== null) {
            message.concentrated = exports.ConcentratedPoolInfo.fromAmino(object.concentrated);
        }
        if (object.cosmwasm !== undefined && object.cosmwasm !== null) {
            message.cosmwasm = exports.CosmwasmPoolInfo.fromAmino(object.cosmwasm);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stable = message.stable
            ? exports.StablePoolInfo.toAmino(message.stable)
            : undefined;
        obj.balancer = message.balancer
            ? exports.BalancerPoolInfo.toAmino(message.balancer)
            : undefined;
        obj.concentrated = message.concentrated
            ? exports.ConcentratedPoolInfo.toAmino(message.concentrated)
            : undefined;
        obj.cosmwasm = message.cosmwasm
            ? exports.CosmwasmPoolInfo.toAmino(message.cosmwasm)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InfoByPoolType.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/info-by-pool-type',
            value: exports.InfoByPoolType.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.InfoByPoolType.decode(message.value);
    },
    toProto(message) {
        return exports.InfoByPoolType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.InfoByPoolType',
            value: exports.InfoByPoolType.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.InfoByPoolType.typeUrl, exports.InfoByPoolType);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InfoByPoolType.aminoType, exports.InfoByPoolType.typeUrl);
function createBaseStablePoolInfo() {
    return {
        weight: BigInt(0),
    };
}
exports.StablePoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.StablePoolInfo',
    aminoType: 'osmosis/protorev/stable-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.StablePoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.StablePoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.StablePoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStablePoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStablePoolInfo();
        message.weight =
            object.weight !== undefined && object.weight !== null
                ? BigInt(object.weight.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseStablePoolInfo();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.weight =
            message.weight !== BigInt(0) ? message.weight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StablePoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/stable-pool-info',
            value: exports.StablePoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.StablePoolInfo.decode(message.value);
    },
    toProto(message) {
        return exports.StablePoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.StablePoolInfo',
            value: exports.StablePoolInfo.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.StablePoolInfo.typeUrl, exports.StablePoolInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.StablePoolInfo.aminoType, exports.StablePoolInfo.typeUrl);
function createBaseBalancerPoolInfo() {
    return {
        weight: BigInt(0),
    };
}
exports.BalancerPoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.BalancerPoolInfo',
    aminoType: 'osmosis/protorev/balancer-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.BalancerPoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.BalancerPoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.BalancerPoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalancerPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalancerPoolInfo();
        message.weight =
            object.weight !== undefined && object.weight !== null
                ? BigInt(object.weight.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalancerPoolInfo();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.weight =
            message.weight !== BigInt(0) ? message.weight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BalancerPoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/balancer-pool-info',
            value: exports.BalancerPoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.BalancerPoolInfo.decode(message.value);
    },
    toProto(message) {
        return exports.BalancerPoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.BalancerPoolInfo',
            value: exports.BalancerPoolInfo.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.BalancerPoolInfo.typeUrl, exports.BalancerPoolInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BalancerPoolInfo.aminoType, exports.BalancerPoolInfo.typeUrl);
function createBaseConcentratedPoolInfo() {
    return {
        weight: BigInt(0),
        maxTicksCrossed: BigInt(0),
    };
}
exports.ConcentratedPoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.ConcentratedPoolInfo',
    aminoType: 'osmosis/protorev/concentrated-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ConcentratedPoolInfo.typeUrl ||
                (typeof o.weight === 'bigint' && typeof o.maxTicksCrossed === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ConcentratedPoolInfo.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.max_ticks_crossed === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ConcentratedPoolInfo.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.max_ticks_crossed === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        if (message.maxTicksCrossed !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxTicksCrossed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConcentratedPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                case 2:
                    message.maxTicksCrossed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConcentratedPoolInfo();
        message.weight =
            object.weight !== undefined && object.weight !== null
                ? BigInt(object.weight.toString())
                : BigInt(0);
        message.maxTicksCrossed =
            object.maxTicksCrossed !== undefined && object.maxTicksCrossed !== null
                ? BigInt(object.maxTicksCrossed.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConcentratedPoolInfo();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight);
        }
        if (object.max_ticks_crossed !== undefined &&
            object.max_ticks_crossed !== null) {
            message.maxTicksCrossed = BigInt(object.max_ticks_crossed);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.weight =
            message.weight !== BigInt(0) ? message.weight.toString() : undefined;
        obj.max_ticks_crossed =
            message.maxTicksCrossed !== BigInt(0)
                ? message.maxTicksCrossed.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConcentratedPoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/concentrated-pool-info',
            value: exports.ConcentratedPoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ConcentratedPoolInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ConcentratedPoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.ConcentratedPoolInfo',
            value: exports.ConcentratedPoolInfo.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ConcentratedPoolInfo.typeUrl, exports.ConcentratedPoolInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConcentratedPoolInfo.aminoType, exports.ConcentratedPoolInfo.typeUrl);
function createBaseCosmwasmPoolInfo() {
    return {
        weightMaps: [],
    };
}
exports.CosmwasmPoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.CosmwasmPoolInfo',
    aminoType: 'osmosis/protorev/cosmwasm-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CosmwasmPoolInfo.typeUrl ||
                (Array.isArray(o.weightMaps) &&
                    (!o.weightMaps.length || exports.WeightMap.is(o.weightMaps[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CosmwasmPoolInfo.typeUrl ||
                (Array.isArray(o.weight_maps) &&
                    (!o.weight_maps.length || exports.WeightMap.isSDK(o.weight_maps[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CosmwasmPoolInfo.typeUrl ||
                (Array.isArray(o.weight_maps) &&
                    (!o.weight_maps.length || exports.WeightMap.isAmino(o.weight_maps[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.weightMaps) {
            exports.WeightMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmwasmPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weightMaps.push(exports.WeightMap.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCosmwasmPoolInfo();
        message.weightMaps =
            object.weightMaps?.map(e => exports.WeightMap.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCosmwasmPoolInfo();
        message.weightMaps =
            object.weight_maps?.map(e => exports.WeightMap.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.weightMaps) {
            obj.weight_maps = message.weightMaps.map(e => e ? exports.WeightMap.toAmino(e) : undefined);
        }
        else {
            obj.weight_maps = message.weightMaps;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CosmwasmPoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/cosmwasm-pool-info',
            value: exports.CosmwasmPoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CosmwasmPoolInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CosmwasmPoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.CosmwasmPoolInfo',
            value: exports.CosmwasmPoolInfo.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CosmwasmPoolInfo.typeUrl, exports.CosmwasmPoolInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CosmwasmPoolInfo.aminoType, exports.CosmwasmPoolInfo.typeUrl);
function createBaseWeightMap() {
    return {
        weight: BigInt(0),
        contractAddress: '',
    };
}
exports.WeightMap = {
    typeUrl: '/osmosis.protorev.v1beta1.WeightMap',
    aminoType: 'osmosis/protorev/weight-map',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.WeightMap.typeUrl ||
                (typeof o.weight === 'bigint' && typeof o.contractAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.WeightMap.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.contract_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.WeightMap.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.contract_address === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        if (message.contractAddress !== '') {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weight = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightMap();
        message.weight =
            object.weight !== undefined && object.weight !== null
                ? BigInt(object.weight.toString())
                : BigInt(0);
        message.contractAddress = object.contractAddress ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightMap();
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = BigInt(object.weight);
        }
        if (object.contract_address !== undefined &&
            object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.weight =
            message.weight !== BigInt(0) ? message.weight.toString() : undefined;
        obj.contract_address =
            message.contractAddress === '' ? undefined : message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightMap.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/weight-map',
            value: exports.WeightMap.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.WeightMap.decode(message.value);
    },
    toProto(message) {
        return exports.WeightMap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.WeightMap',
            value: exports.WeightMap.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.WeightMap.typeUrl, exports.WeightMap);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.WeightMap.aminoType, exports.WeightMap.typeUrl);
function createBaseBaseDenom() {
    return {
        denom: '',
        stepSize: '',
    };
}
exports.BaseDenom = {
    typeUrl: '/osmosis.protorev.v1beta1.BaseDenom',
    aminoType: 'osmosis/protorev/base-denom',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.BaseDenom.typeUrl ||
                (typeof o.denom === 'string' && typeof o.stepSize === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.BaseDenom.typeUrl ||
                (typeof o.denom === 'string' && typeof o.step_size === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.BaseDenom.typeUrl ||
                (typeof o.denom === 'string' && typeof o.step_size === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.stepSize !== '') {
            writer.uint32(18).string(message.stepSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.stepSize = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBaseDenom();
        message.denom = object.denom ?? '';
        message.stepSize = object.stepSize ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseBaseDenom();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.step_size !== undefined && object.step_size !== null) {
            message.stepSize = object.step_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.step_size = message.stepSize === '' ? undefined : message.stepSize;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/base-denom',
            value: exports.BaseDenom.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.BaseDenom.decode(message.value);
    },
    toProto(message) {
        return exports.BaseDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.BaseDenom',
            value: exports.BaseDenom.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.BaseDenom.typeUrl, exports.BaseDenom);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BaseDenom.aminoType, exports.BaseDenom.typeUrl);
function createBaseBaseDenoms() {
    return {
        baseDenoms: [],
    };
}
exports.BaseDenoms = {
    typeUrl: '/osmosis.protorev.v1beta1.BaseDenoms',
    aminoType: 'osmosis/protorev/base-denoms',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.BaseDenoms.typeUrl ||
                (Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || exports.BaseDenom.is(o.baseDenoms[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.BaseDenoms.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || exports.BaseDenom.isSDK(o.base_denoms[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.BaseDenoms.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || exports.BaseDenom.isAmino(o.base_denoms[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.baseDenoms) {
            exports.BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenoms.push(exports.BaseDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBaseDenoms();
        message.baseDenoms =
            object.baseDenoms?.map(e => exports.BaseDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBaseDenoms();
        message.baseDenoms =
            object.base_denoms?.map(e => exports.BaseDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? exports.BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseDenoms.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/base-denoms',
            value: exports.BaseDenoms.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.BaseDenoms.decode(message.value);
    },
    toProto(message) {
        return exports.BaseDenoms.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.BaseDenoms',
            value: exports.BaseDenoms.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.BaseDenoms.typeUrl, exports.BaseDenoms);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BaseDenoms.aminoType, exports.BaseDenoms.typeUrl);
function createBaseAllProtocolRevenue() {
    return {
        takerFeesTracker: genesis_1.TakerFeesTracker.fromPartial({}),
        cyclicArbTracker: exports.CyclicArbTracker.fromPartial({}),
    };
}
exports.AllProtocolRevenue = {
    typeUrl: '/osmosis.protorev.v1beta1.AllProtocolRevenue',
    aminoType: 'osmosis/protorev/all-protocol-revenue',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.AllProtocolRevenue.typeUrl ||
                (genesis_1.TakerFeesTracker.is(o.takerFeesTracker) &&
                    exports.CyclicArbTracker.is(o.cyclicArbTracker))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.AllProtocolRevenue.typeUrl ||
                (genesis_1.TakerFeesTracker.isSDK(o.taker_fees_tracker) &&
                    exports.CyclicArbTracker.isSDK(o.cyclic_arb_tracker))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.AllProtocolRevenue.typeUrl ||
                (genesis_1.TakerFeesTracker.isAmino(o.taker_fees_tracker) &&
                    exports.CyclicArbTracker.isAmino(o.cyclic_arb_tracker))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.takerFeesTracker !== undefined) {
            genesis_1.TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(10).fork()).ldelim();
        }
        if (message.cyclicArbTracker !== undefined) {
            exports.CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllProtocolRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFeesTracker = genesis_1.TakerFeesTracker.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cyclicArbTracker = exports.CyclicArbTracker.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllProtocolRevenue();
        message.takerFeesTracker =
            object.takerFeesTracker !== undefined && object.takerFeesTracker !== null
                ? genesis_1.TakerFeesTracker.fromPartial(object.takerFeesTracker)
                : undefined;
        message.cyclicArbTracker =
            object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null
                ? exports.CyclicArbTracker.fromPartial(object.cyclicArbTracker)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllProtocolRevenue();
        if (object.taker_fees_tracker !== undefined &&
            object.taker_fees_tracker !== null) {
            message.takerFeesTracker = genesis_1.TakerFeesTracker.fromAmino(object.taker_fees_tracker);
        }
        if (object.cyclic_arb_tracker !== undefined &&
            object.cyclic_arb_tracker !== null) {
            message.cyclicArbTracker = exports.CyclicArbTracker.fromAmino(object.cyclic_arb_tracker);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.taker_fees_tracker = message.takerFeesTracker
            ? genesis_1.TakerFeesTracker.toAmino(message.takerFeesTracker)
            : undefined;
        obj.cyclic_arb_tracker = message.cyclicArbTracker
            ? exports.CyclicArbTracker.toAmino(message.cyclicArbTracker)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllProtocolRevenue.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/all-protocol-revenue',
            value: exports.AllProtocolRevenue.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.AllProtocolRevenue.decode(message.value);
    },
    toProto(message) {
        return exports.AllProtocolRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.AllProtocolRevenue',
            value: exports.AllProtocolRevenue.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.AllProtocolRevenue.typeUrl, exports.AllProtocolRevenue);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.AllProtocolRevenue.aminoType, exports.AllProtocolRevenue.typeUrl);
function createBaseCyclicArbTracker() {
    return {
        cyclicArb: [],
        heightAccountingStartsFrom: BigInt(0),
    };
}
exports.CyclicArbTracker = {
    typeUrl: '/osmosis.protorev.v1beta1.CyclicArbTracker',
    aminoType: 'osmosis/protorev/cyclic-arb-tracker',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CyclicArbTracker.typeUrl ||
                (Array.isArray(o.cyclicArb) &&
                    (!o.cyclicArb.length || coin_1.Coin.is(o.cyclicArb[0])) &&
                    typeof o.heightAccountingStartsFrom === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CyclicArbTracker.typeUrl ||
                (Array.isArray(o.cyclic_arb) &&
                    (!o.cyclic_arb.length || coin_1.Coin.isSDK(o.cyclic_arb[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CyclicArbTracker.typeUrl ||
                (Array.isArray(o.cyclic_arb) &&
                    (!o.cyclic_arb.length || coin_1.Coin.isAmino(o.cyclic_arb[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.cyclicArb) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.heightAccountingStartsFrom !== BigInt(0)) {
            writer.uint32(16).int64(message.heightAccountingStartsFrom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCyclicArbTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cyclicArb.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = createBaseCyclicArbTracker();
        message.cyclicArb = object.cyclicArb?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.heightAccountingStartsFrom =
            object.heightAccountingStartsFrom !== undefined &&
                object.heightAccountingStartsFrom !== null
                ? BigInt(object.heightAccountingStartsFrom.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCyclicArbTracker();
        message.cyclicArb = object.cyclic_arb?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.height_accounting_starts_from !== undefined &&
            object.height_accounting_starts_from !== null) {
            message.heightAccountingStartsFrom = BigInt(object.height_accounting_starts_from);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.cyclicArb) {
            obj.cyclic_arb = message.cyclicArb.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.cyclic_arb = message.cyclicArb;
        }
        obj.height_accounting_starts_from =
            message.heightAccountingStartsFrom !== BigInt(0)
                ? message.heightAccountingStartsFrom.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CyclicArbTracker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/cyclic-arb-tracker',
            value: exports.CyclicArbTracker.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CyclicArbTracker.decode(message.value);
    },
    toProto(message) {
        return exports.CyclicArbTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.CyclicArbTracker',
            value: exports.CyclicArbTracker.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CyclicArbTracker.typeUrl, exports.CyclicArbTracker);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CyclicArbTracker.aminoType, exports.CyclicArbTracker.typeUrl);
