//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { TakerFeesTracker, } from '../../poolmanager/v1beta1/genesis';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseTokenPairArbRoutes() {
    return {
        arbRoutes: [],
        tokenIn: '',
        tokenOut: '',
    };
}
export const TokenPairArbRoutes = {
    typeUrl: '/osmosis.protorev.v1beta1.TokenPairArbRoutes',
    aminoType: 'osmosis/protorev/token-pair-arb-routes',
    is(o) {
        return (o &&
            (o.$typeUrl === TokenPairArbRoutes.typeUrl ||
                (Array.isArray(o.arbRoutes) &&
                    (!o.arbRoutes.length || Route.is(o.arbRoutes[0])) &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TokenPairArbRoutes.typeUrl ||
                (Array.isArray(o.arb_routes) &&
                    (!o.arb_routes.length || Route.isSDK(o.arb_routes[0])) &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TokenPairArbRoutes.typeUrl ||
                (Array.isArray(o.arb_routes) &&
                    (!o.arb_routes.length || Route.isAmino(o.arb_routes[0])) &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.arbRoutes) {
            Route.encode(v, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPairArbRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arbRoutes.push(Route.decode(reader, reader.uint32()));
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
        message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn ?? '';
        message.tokenOut = object.tokenOut ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arbRoutes = object.arb_routes?.map(e => Route.fromAmino(e)) || [];
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
            obj.arb_routes = message.arbRoutes.map(e => e ? Route.toAmino(e) : undefined);
        }
        else {
            obj.arb_routes = message.arbRoutes;
        }
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenPairArbRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/token-pair-arb-routes',
            value: TokenPairArbRoutes.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TokenPairArbRoutes.decode(message.value);
    },
    toProto(message) {
        return TokenPairArbRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.TokenPairArbRoutes',
            value: TokenPairArbRoutes.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TokenPairArbRoutes.typeUrl, TokenPairArbRoutes);
GlobalDecoderRegistry.registerAminoProtoMapping(TokenPairArbRoutes.aminoType, TokenPairArbRoutes.typeUrl);
function createBaseRoute() {
    return {
        trades: [],
        stepSize: '',
    };
}
export const Route = {
    typeUrl: '/osmosis.protorev.v1beta1.Route',
    aminoType: 'osmosis/protorev/route',
    is(o) {
        return (o &&
            (o.$typeUrl === Route.typeUrl ||
                (Array.isArray(o.trades) &&
                    (!o.trades.length || Trade.is(o.trades[0])) &&
                    typeof o.stepSize === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Route.typeUrl ||
                (Array.isArray(o.trades) &&
                    (!o.trades.length || Trade.isSDK(o.trades[0])) &&
                    typeof o.step_size === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Route.typeUrl ||
                (Array.isArray(o.trades) &&
                    (!o.trades.length || Trade.isAmino(o.trades[0])) &&
                    typeof o.step_size === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.trades) {
            Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.stepSize !== '') {
            writer.uint32(18).string(message.stepSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(Trade.decode(reader, reader.uint32()));
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
        message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
        message.stepSize = object.stepSize ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map(e => Trade.fromAmino(e)) || [];
        if (object.step_size !== undefined && object.step_size !== null) {
            message.stepSize = object.step_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => (e ? Trade.toAmino(e) : undefined));
        }
        else {
            obj.trades = message.trades;
        }
        obj.step_size = message.stepSize === '' ? undefined : message.stepSize;
        return obj;
    },
    fromAminoMsg(object) {
        return Route.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/route',
            value: Route.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Route.decode(message.value);
    },
    toProto(message) {
        return Route.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.Route',
            value: Route.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Route.typeUrl, Route);
GlobalDecoderRegistry.registerAminoProtoMapping(Route.aminoType, Route.typeUrl);
function createBaseTrade() {
    return {
        pool: BigInt(0),
        tokenIn: '',
        tokenOut: '',
    };
}
export const Trade = {
    typeUrl: '/osmosis.protorev.v1beta1.Trade',
    aminoType: 'osmosis/protorev/trade',
    is(o) {
        return (o &&
            (o.$typeUrl === Trade.typeUrl ||
                (typeof o.pool === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.tokenOut === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Trade.typeUrl ||
                (typeof o.pool === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Trade.typeUrl ||
                (typeof o.pool === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.token_out === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Trade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/trade',
            value: Trade.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Trade.decode(message.value);
    },
    toProto(message) {
        return Trade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.Trade',
            value: Trade.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Trade.typeUrl, Trade);
GlobalDecoderRegistry.registerAminoProtoMapping(Trade.aminoType, Trade.typeUrl);
function createBaseRouteStatistics() {
    return {
        profits: [],
        numberOfTrades: '',
        route: [],
    };
}
export const RouteStatistics = {
    typeUrl: '/osmosis.protorev.v1beta1.RouteStatistics',
    aminoType: 'osmosis/protorev/route-statistics',
    is(o) {
        return (o &&
            (o.$typeUrl === RouteStatistics.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || Coin.is(o.profits[0])) &&
                    typeof o.numberOfTrades === 'string' &&
                    Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === RouteStatistics.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || Coin.isSDK(o.profits[0])) &&
                    typeof o.number_of_trades === 'string' &&
                    Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === RouteStatistics.typeUrl ||
                (Array.isArray(o.profits) &&
                    (!o.profits.length || Coin.isAmino(o.profits[0])) &&
                    typeof o.number_of_trades === 'string' &&
                    Array.isArray(o.route) &&
                    (!o.route.length || typeof o.route[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.profits) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(Coin.decode(reader, reader.uint32()));
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
        message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
        message.numberOfTrades = object.numberOfTrades ?? '';
        message.route = object.route?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRouteStatistics();
        message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
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
            obj.profits = message.profits.map(e => (e ? Coin.toAmino(e) : undefined));
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
        return RouteStatistics.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/route-statistics',
            value: RouteStatistics.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return RouteStatistics.decode(message.value);
    },
    toProto(message) {
        return RouteStatistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.RouteStatistics',
            value: RouteStatistics.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(RouteStatistics.typeUrl, RouteStatistics);
GlobalDecoderRegistry.registerAminoProtoMapping(RouteStatistics.aminoType, RouteStatistics.typeUrl);
function createBasePoolWeights() {
    return {
        stableWeight: BigInt(0),
        balancerWeight: BigInt(0),
        concentratedWeight: BigInt(0),
        cosmwasmWeight: BigInt(0),
    };
}
export const PoolWeights = {
    typeUrl: '/osmosis.protorev.v1beta1.PoolWeights',
    aminoType: 'osmosis/protorev/pool-weights',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolWeights.typeUrl ||
                (typeof o.stableWeight === 'bigint' &&
                    typeof o.balancerWeight === 'bigint' &&
                    typeof o.concentratedWeight === 'bigint' &&
                    typeof o.cosmwasmWeight === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolWeights.typeUrl ||
                (typeof o.stable_weight === 'bigint' &&
                    typeof o.balancer_weight === 'bigint' &&
                    typeof o.concentrated_weight === 'bigint' &&
                    typeof o.cosmwasm_weight === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolWeights.typeUrl ||
                (typeof o.stable_weight === 'bigint' &&
                    typeof o.balancer_weight === 'bigint' &&
                    typeof o.concentrated_weight === 'bigint' &&
                    typeof o.cosmwasm_weight === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return PoolWeights.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/pool-weights',
            value: PoolWeights.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolWeights.decode(message.value);
    },
    toProto(message) {
        return PoolWeights.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.PoolWeights',
            value: PoolWeights.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolWeights.typeUrl, PoolWeights);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolWeights.aminoType, PoolWeights.typeUrl);
function createBaseInfoByPoolType() {
    return {
        stable: StablePoolInfo.fromPartial({}),
        balancer: BalancerPoolInfo.fromPartial({}),
        concentrated: ConcentratedPoolInfo.fromPartial({}),
        cosmwasm: CosmwasmPoolInfo.fromPartial({}),
    };
}
export const InfoByPoolType = {
    typeUrl: '/osmosis.protorev.v1beta1.InfoByPoolType',
    aminoType: 'osmosis/protorev/info-by-pool-type',
    is(o) {
        return (o &&
            (o.$typeUrl === InfoByPoolType.typeUrl ||
                (StablePoolInfo.is(o.stable) &&
                    BalancerPoolInfo.is(o.balancer) &&
                    ConcentratedPoolInfo.is(o.concentrated) &&
                    CosmwasmPoolInfo.is(o.cosmwasm))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === InfoByPoolType.typeUrl ||
                (StablePoolInfo.isSDK(o.stable) &&
                    BalancerPoolInfo.isSDK(o.balancer) &&
                    ConcentratedPoolInfo.isSDK(o.concentrated) &&
                    CosmwasmPoolInfo.isSDK(o.cosmwasm))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === InfoByPoolType.typeUrl ||
                (StablePoolInfo.isAmino(o.stable) &&
                    BalancerPoolInfo.isAmino(o.balancer) &&
                    ConcentratedPoolInfo.isAmino(o.concentrated) &&
                    CosmwasmPoolInfo.isAmino(o.cosmwasm))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.stable !== undefined) {
            StablePoolInfo.encode(message.stable, writer.uint32(10).fork()).ldelim();
        }
        if (message.balancer !== undefined) {
            BalancerPoolInfo.encode(message.balancer, writer.uint32(18).fork()).ldelim();
        }
        if (message.concentrated !== undefined) {
            ConcentratedPoolInfo.encode(message.concentrated, writer.uint32(26).fork()).ldelim();
        }
        if (message.cosmwasm !== undefined) {
            CosmwasmPoolInfo.encode(message.cosmwasm, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoByPoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stable = StablePoolInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balancer = BalancerPoolInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.concentrated = ConcentratedPoolInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cosmwasm = CosmwasmPoolInfo.decode(reader, reader.uint32());
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
                ? StablePoolInfo.fromPartial(object.stable)
                : undefined;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? BalancerPoolInfo.fromPartial(object.balancer)
                : undefined;
        message.concentrated =
            object.concentrated !== undefined && object.concentrated !== null
                ? ConcentratedPoolInfo.fromPartial(object.concentrated)
                : undefined;
        message.cosmwasm =
            object.cosmwasm !== undefined && object.cosmwasm !== null
                ? CosmwasmPoolInfo.fromPartial(object.cosmwasm)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseInfoByPoolType();
        if (object.stable !== undefined && object.stable !== null) {
            message.stable = StablePoolInfo.fromAmino(object.stable);
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = BalancerPoolInfo.fromAmino(object.balancer);
        }
        if (object.concentrated !== undefined && object.concentrated !== null) {
            message.concentrated = ConcentratedPoolInfo.fromAmino(object.concentrated);
        }
        if (object.cosmwasm !== undefined && object.cosmwasm !== null) {
            message.cosmwasm = CosmwasmPoolInfo.fromAmino(object.cosmwasm);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stable = message.stable
            ? StablePoolInfo.toAmino(message.stable)
            : undefined;
        obj.balancer = message.balancer
            ? BalancerPoolInfo.toAmino(message.balancer)
            : undefined;
        obj.concentrated = message.concentrated
            ? ConcentratedPoolInfo.toAmino(message.concentrated)
            : undefined;
        obj.cosmwasm = message.cosmwasm
            ? CosmwasmPoolInfo.toAmino(message.cosmwasm)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return InfoByPoolType.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/info-by-pool-type',
            value: InfoByPoolType.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return InfoByPoolType.decode(message.value);
    },
    toProto(message) {
        return InfoByPoolType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.InfoByPoolType',
            value: InfoByPoolType.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(InfoByPoolType.typeUrl, InfoByPoolType);
GlobalDecoderRegistry.registerAminoProtoMapping(InfoByPoolType.aminoType, InfoByPoolType.typeUrl);
function createBaseStablePoolInfo() {
    return {
        weight: BigInt(0),
    };
}
export const StablePoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.StablePoolInfo',
    aminoType: 'osmosis/protorev/stable-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === StablePoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === StablePoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === StablePoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return StablePoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/stable-pool-info',
            value: StablePoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return StablePoolInfo.decode(message.value);
    },
    toProto(message) {
        return StablePoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.StablePoolInfo',
            value: StablePoolInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(StablePoolInfo.typeUrl, StablePoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(StablePoolInfo.aminoType, StablePoolInfo.typeUrl);
function createBaseBalancerPoolInfo() {
    return {
        weight: BigInt(0),
    };
}
export const BalancerPoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.BalancerPoolInfo',
    aminoType: 'osmosis/protorev/balancer-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === BalancerPoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === BalancerPoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === BalancerPoolInfo.typeUrl || typeof o.weight === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BalancerPoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/balancer-pool-info',
            value: BalancerPoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return BalancerPoolInfo.decode(message.value);
    },
    toProto(message) {
        return BalancerPoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.BalancerPoolInfo',
            value: BalancerPoolInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(BalancerPoolInfo.typeUrl, BalancerPoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(BalancerPoolInfo.aminoType, BalancerPoolInfo.typeUrl);
function createBaseConcentratedPoolInfo() {
    return {
        weight: BigInt(0),
        maxTicksCrossed: BigInt(0),
    };
}
export const ConcentratedPoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.ConcentratedPoolInfo',
    aminoType: 'osmosis/protorev/concentrated-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolInfo.typeUrl ||
                (typeof o.weight === 'bigint' && typeof o.maxTicksCrossed === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolInfo.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.max_ticks_crossed === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ConcentratedPoolInfo.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.max_ticks_crossed === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        if (message.maxTicksCrossed !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxTicksCrossed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ConcentratedPoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/concentrated-pool-info',
            value: ConcentratedPoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ConcentratedPoolInfo.decode(message.value);
    },
    toProto(message) {
        return ConcentratedPoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.ConcentratedPoolInfo',
            value: ConcentratedPoolInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ConcentratedPoolInfo.typeUrl, ConcentratedPoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(ConcentratedPoolInfo.aminoType, ConcentratedPoolInfo.typeUrl);
function createBaseCosmwasmPoolInfo() {
    return {
        weightMaps: [],
    };
}
export const CosmwasmPoolInfo = {
    typeUrl: '/osmosis.protorev.v1beta1.CosmwasmPoolInfo',
    aminoType: 'osmosis/protorev/cosmwasm-pool-info',
    is(o) {
        return (o &&
            (o.$typeUrl === CosmwasmPoolInfo.typeUrl ||
                (Array.isArray(o.weightMaps) &&
                    (!o.weightMaps.length || WeightMap.is(o.weightMaps[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CosmwasmPoolInfo.typeUrl ||
                (Array.isArray(o.weight_maps) &&
                    (!o.weight_maps.length || WeightMap.isSDK(o.weight_maps[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CosmwasmPoolInfo.typeUrl ||
                (Array.isArray(o.weight_maps) &&
                    (!o.weight_maps.length || WeightMap.isAmino(o.weight_maps[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.weightMaps) {
            WeightMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCosmwasmPoolInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.weightMaps.push(WeightMap.decode(reader, reader.uint32()));
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
            object.weightMaps?.map(e => WeightMap.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCosmwasmPoolInfo();
        message.weightMaps =
            object.weight_maps?.map(e => WeightMap.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.weightMaps) {
            obj.weight_maps = message.weightMaps.map(e => e ? WeightMap.toAmino(e) : undefined);
        }
        else {
            obj.weight_maps = message.weightMaps;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CosmwasmPoolInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/cosmwasm-pool-info',
            value: CosmwasmPoolInfo.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CosmwasmPoolInfo.decode(message.value);
    },
    toProto(message) {
        return CosmwasmPoolInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.CosmwasmPoolInfo',
            value: CosmwasmPoolInfo.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CosmwasmPoolInfo.typeUrl, CosmwasmPoolInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(CosmwasmPoolInfo.aminoType, CosmwasmPoolInfo.typeUrl);
function createBaseWeightMap() {
    return {
        weight: BigInt(0),
        contractAddress: '',
    };
}
export const WeightMap = {
    typeUrl: '/osmosis.protorev.v1beta1.WeightMap',
    aminoType: 'osmosis/protorev/weight-map',
    is(o) {
        return (o &&
            (o.$typeUrl === WeightMap.typeUrl ||
                (typeof o.weight === 'bigint' && typeof o.contractAddress === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === WeightMap.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.contract_address === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === WeightMap.typeUrl ||
                (typeof o.weight === 'bigint' &&
                    typeof o.contract_address === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.weight !== BigInt(0)) {
            writer.uint32(8).uint64(message.weight);
        }
        if (message.contractAddress !== '') {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return WeightMap.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/weight-map',
            value: WeightMap.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return WeightMap.decode(message.value);
    },
    toProto(message) {
        return WeightMap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.WeightMap',
            value: WeightMap.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(WeightMap.typeUrl, WeightMap);
GlobalDecoderRegistry.registerAminoProtoMapping(WeightMap.aminoType, WeightMap.typeUrl);
function createBaseBaseDenom() {
    return {
        denom: '',
        stepSize: '',
    };
}
export const BaseDenom = {
    typeUrl: '/osmosis.protorev.v1beta1.BaseDenom',
    aminoType: 'osmosis/protorev/base-denom',
    is(o) {
        return (o &&
            (o.$typeUrl === BaseDenom.typeUrl ||
                (typeof o.denom === 'string' && typeof o.stepSize === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === BaseDenom.typeUrl ||
                (typeof o.denom === 'string' && typeof o.step_size === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === BaseDenom.typeUrl ||
                (typeof o.denom === 'string' && typeof o.step_size === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.stepSize !== '') {
            writer.uint32(18).string(message.stepSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BaseDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/base-denom',
            value: BaseDenom.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return BaseDenom.decode(message.value);
    },
    toProto(message) {
        return BaseDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.BaseDenom',
            value: BaseDenom.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(BaseDenom.typeUrl, BaseDenom);
GlobalDecoderRegistry.registerAminoProtoMapping(BaseDenom.aminoType, BaseDenom.typeUrl);
function createBaseBaseDenoms() {
    return {
        baseDenoms: [],
    };
}
export const BaseDenoms = {
    typeUrl: '/osmosis.protorev.v1beta1.BaseDenoms',
    aminoType: 'osmosis/protorev/base-denoms',
    is(o) {
        return (o &&
            (o.$typeUrl === BaseDenoms.typeUrl ||
                (Array.isArray(o.baseDenoms) &&
                    (!o.baseDenoms.length || BaseDenom.is(o.baseDenoms[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === BaseDenoms.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || BaseDenom.isSDK(o.base_denoms[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === BaseDenoms.typeUrl ||
                (Array.isArray(o.base_denoms) &&
                    (!o.base_denoms.length || BaseDenom.isAmino(o.base_denoms[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.baseDenoms) {
            BaseDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenoms.push(BaseDenom.decode(reader, reader.uint32()));
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
            object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBaseDenoms();
        message.baseDenoms =
            object.base_denoms?.map(e => BaseDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.baseDenoms) {
            obj.base_denoms = message.baseDenoms.map(e => e ? BaseDenom.toAmino(e) : undefined);
        }
        else {
            obj.base_denoms = message.baseDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BaseDenoms.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/base-denoms',
            value: BaseDenoms.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return BaseDenoms.decode(message.value);
    },
    toProto(message) {
        return BaseDenoms.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.BaseDenoms',
            value: BaseDenoms.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(BaseDenoms.typeUrl, BaseDenoms);
GlobalDecoderRegistry.registerAminoProtoMapping(BaseDenoms.aminoType, BaseDenoms.typeUrl);
function createBaseAllProtocolRevenue() {
    return {
        takerFeesTracker: TakerFeesTracker.fromPartial({}),
        cyclicArbTracker: CyclicArbTracker.fromPartial({}),
    };
}
export const AllProtocolRevenue = {
    typeUrl: '/osmosis.protorev.v1beta1.AllProtocolRevenue',
    aminoType: 'osmosis/protorev/all-protocol-revenue',
    is(o) {
        return (o &&
            (o.$typeUrl === AllProtocolRevenue.typeUrl ||
                (TakerFeesTracker.is(o.takerFeesTracker) &&
                    CyclicArbTracker.is(o.cyclicArbTracker))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === AllProtocolRevenue.typeUrl ||
                (TakerFeesTracker.isSDK(o.taker_fees_tracker) &&
                    CyclicArbTracker.isSDK(o.cyclic_arb_tracker))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === AllProtocolRevenue.typeUrl ||
                (TakerFeesTracker.isAmino(o.taker_fees_tracker) &&
                    CyclicArbTracker.isAmino(o.cyclic_arb_tracker))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.takerFeesTracker !== undefined) {
            TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(10).fork()).ldelim();
        }
        if (message.cyclicArbTracker !== undefined) {
            CyclicArbTracker.encode(message.cyclicArbTracker, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllProtocolRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerFeesTracker = TakerFeesTracker.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cyclicArbTracker = CyclicArbTracker.decode(reader, reader.uint32());
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
                ? TakerFeesTracker.fromPartial(object.takerFeesTracker)
                : undefined;
        message.cyclicArbTracker =
            object.cyclicArbTracker !== undefined && object.cyclicArbTracker !== null
                ? CyclicArbTracker.fromPartial(object.cyclicArbTracker)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllProtocolRevenue();
        if (object.taker_fees_tracker !== undefined &&
            object.taker_fees_tracker !== null) {
            message.takerFeesTracker = TakerFeesTracker.fromAmino(object.taker_fees_tracker);
        }
        if (object.cyclic_arb_tracker !== undefined &&
            object.cyclic_arb_tracker !== null) {
            message.cyclicArbTracker = CyclicArbTracker.fromAmino(object.cyclic_arb_tracker);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.taker_fees_tracker = message.takerFeesTracker
            ? TakerFeesTracker.toAmino(message.takerFeesTracker)
            : undefined;
        obj.cyclic_arb_tracker = message.cyclicArbTracker
            ? CyclicArbTracker.toAmino(message.cyclicArbTracker)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AllProtocolRevenue.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/all-protocol-revenue',
            value: AllProtocolRevenue.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return AllProtocolRevenue.decode(message.value);
    },
    toProto(message) {
        return AllProtocolRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.AllProtocolRevenue',
            value: AllProtocolRevenue.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(AllProtocolRevenue.typeUrl, AllProtocolRevenue);
GlobalDecoderRegistry.registerAminoProtoMapping(AllProtocolRevenue.aminoType, AllProtocolRevenue.typeUrl);
function createBaseCyclicArbTracker() {
    return {
        cyclicArb: [],
        heightAccountingStartsFrom: BigInt(0),
    };
}
export const CyclicArbTracker = {
    typeUrl: '/osmosis.protorev.v1beta1.CyclicArbTracker',
    aminoType: 'osmosis/protorev/cyclic-arb-tracker',
    is(o) {
        return (o &&
            (o.$typeUrl === CyclicArbTracker.typeUrl ||
                (Array.isArray(o.cyclicArb) &&
                    (!o.cyclicArb.length || Coin.is(o.cyclicArb[0])) &&
                    typeof o.heightAccountingStartsFrom === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CyclicArbTracker.typeUrl ||
                (Array.isArray(o.cyclic_arb) &&
                    (!o.cyclic_arb.length || Coin.isSDK(o.cyclic_arb[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CyclicArbTracker.typeUrl ||
                (Array.isArray(o.cyclic_arb) &&
                    (!o.cyclic_arb.length || Coin.isAmino(o.cyclic_arb[0])) &&
                    typeof o.height_accounting_starts_from === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.cyclicArb) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.heightAccountingStartsFrom !== BigInt(0)) {
            writer.uint32(16).int64(message.heightAccountingStartsFrom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCyclicArbTracker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cyclicArb.push(Coin.decode(reader, reader.uint32()));
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
        message.cyclicArb = object.cyclicArb?.map(e => Coin.fromPartial(e)) || [];
        message.heightAccountingStartsFrom =
            object.heightAccountingStartsFrom !== undefined &&
                object.heightAccountingStartsFrom !== null
                ? BigInt(object.heightAccountingStartsFrom.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCyclicArbTracker();
        message.cyclicArb = object.cyclic_arb?.map(e => Coin.fromAmino(e)) || [];
        if (object.height_accounting_starts_from !== undefined &&
            object.height_accounting_starts_from !== null) {
            message.heightAccountingStartsFrom = BigInt(object.height_accounting_starts_from);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.cyclicArb) {
            obj.cyclic_arb = message.cyclicArb.map(e => e ? Coin.toAmino(e) : undefined);
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
        return CyclicArbTracker.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/protorev/cyclic-arb-tracker',
            value: CyclicArbTracker.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CyclicArbTracker.decode(message.value);
    },
    toProto(message) {
        return CyclicArbTracker.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.protorev.v1beta1.CyclicArbTracker',
            value: CyclicArbTracker.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CyclicArbTracker.typeUrl, CyclicArbTracker);
GlobalDecoderRegistry.registerAminoProtoMapping(CyclicArbTracker.aminoType, CyclicArbTracker.typeUrl);
