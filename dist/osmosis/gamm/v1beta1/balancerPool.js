"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.PoolAsset = exports.PoolParams = exports.SmoothWeightChangeParams = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseSmoothWeightChangeParams() {
    return {
        startTime: new Date(),
        duration: duration_1.Duration.fromPartial({}),
        initialPoolWeights: [],
        targetPoolWeights: [],
    };
}
exports.SmoothWeightChangeParams = {
    typeUrl: '/osmosis.gamm.v1beta1.SmoothWeightChangeParams',
    aminoType: 'osmosis/gamm/smooth-weight-change-params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SmoothWeightChangeParams.typeUrl ||
                (timestamp_1.Timestamp.is(o.startTime) &&
                    duration_1.Duration.is(o.duration) &&
                    Array.isArray(o.initialPoolWeights) &&
                    (!o.initialPoolWeights.length ||
                        exports.PoolAsset.is(o.initialPoolWeights[0])) &&
                    Array.isArray(o.targetPoolWeights) &&
                    (!o.targetPoolWeights.length ||
                        exports.PoolAsset.is(o.targetPoolWeights[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SmoothWeightChangeParams.typeUrl ||
                (timestamp_1.Timestamp.isSDK(o.start_time) &&
                    duration_1.Duration.isSDK(o.duration) &&
                    Array.isArray(o.initial_pool_weights) &&
                    (!o.initial_pool_weights.length ||
                        exports.PoolAsset.isSDK(o.initial_pool_weights[0])) &&
                    Array.isArray(o.target_pool_weights) &&
                    (!o.target_pool_weights.length ||
                        exports.PoolAsset.isSDK(o.target_pool_weights[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SmoothWeightChangeParams.typeUrl ||
                (timestamp_1.Timestamp.isAmino(o.start_time) &&
                    duration_1.Duration.isAmino(o.duration) &&
                    Array.isArray(o.initial_pool_weights) &&
                    (!o.initial_pool_weights.length ||
                        exports.PoolAsset.isAmino(o.initial_pool_weights[0])) &&
                    Array.isArray(o.target_pool_weights) &&
                    (!o.target_pool_weights.length ||
                        exports.PoolAsset.isAmino(o.target_pool_weights[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolWeights) {
            exports.PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.targetPoolWeights) {
            exports.PoolAsset.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSmoothWeightChangeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolWeights.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.targetPoolWeights.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSmoothWeightChangeParams();
        message.startTime = object.startTime ?? undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        message.initialPoolWeights =
            object.initialPoolWeights?.map(e => exports.PoolAsset.fromPartial(e)) || [];
        message.targetPoolWeights =
            object.targetPoolWeights?.map(e => exports.PoolAsset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSmoothWeightChangeParams();
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        message.initialPoolWeights =
            object.initial_pool_weights?.map(e => exports.PoolAsset.fromAmino(e)) || [];
        message.targetPoolWeights =
            object.target_pool_weights?.map(e => exports.PoolAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start_time = message.startTime
            ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime))
            : undefined;
        obj.duration = message.duration
            ? duration_1.Duration.toAmino(message.duration)
            : undefined;
        if (message.initialPoolWeights) {
            obj.initial_pool_weights = message.initialPoolWeights.map(e => e ? exports.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_weights = message.initialPoolWeights;
        }
        if (message.targetPoolWeights) {
            obj.target_pool_weights = message.targetPoolWeights.map(e => e ? exports.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.target_pool_weights = message.targetPoolWeights;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SmoothWeightChangeParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/smooth-weight-change-params',
            value: exports.SmoothWeightChangeParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SmoothWeightChangeParams.decode(message.value);
    },
    toProto(message) {
        return exports.SmoothWeightChangeParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.SmoothWeightChangeParams',
            value: exports.SmoothWeightChangeParams.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SmoothWeightChangeParams.typeUrl, exports.SmoothWeightChangeParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SmoothWeightChangeParams.aminoType, exports.SmoothWeightChangeParams.typeUrl);
function createBasePoolParams() {
    return {
        swapFee: '',
        exitFee: '',
        smoothWeightChangeParams: undefined,
    };
}
exports.PoolParams = {
    typeUrl: '/osmosis.gamm.v1beta1.PoolParams',
    aminoType: 'osmosis/gamm/BalancerPoolParams',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolParams.typeUrl ||
                (typeof o.swapFee === 'string' && typeof o.exitFee === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolParams.typeUrl ||
                (typeof o.swap_fee === 'string' && typeof o.exit_fee === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolParams.typeUrl ||
                (typeof o.swap_fee === 'string' && typeof o.exit_fee === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapFee !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        if (message.exitFee !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.exitFee, 18).atomics);
        }
        if (message.smoothWeightChangeParams !== undefined) {
            exports.SmoothWeightChangeParams.encode(message.smoothWeightChangeParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.exitFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.smoothWeightChangeParams = exports.SmoothWeightChangeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swapFee = object.swapFee ?? '';
        message.exitFee = object.exitFee ?? '';
        message.smoothWeightChangeParams =
            object.smoothWeightChangeParams !== undefined &&
                object.smoothWeightChangeParams !== null
                ? exports.SmoothWeightChangeParams.fromPartial(object.smoothWeightChangeParams)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolParams();
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        if (object.exit_fee !== undefined && object.exit_fee !== null) {
            message.exitFee = object.exit_fee;
        }
        if (object.smooth_weight_change_params !== undefined &&
            object.smooth_weight_change_params !== null) {
            message.smoothWeightChangeParams = exports.SmoothWeightChangeParams.fromAmino(object.smooth_weight_change_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swapFee === '' ? undefined : message.swapFee;
        obj.exit_fee = message.exitFee === '' ? undefined : message.exitFee;
        obj.smooth_weight_change_params = message.smoothWeightChangeParams
            ? exports.SmoothWeightChangeParams.toAmino(message.smoothWeightChangeParams)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/BalancerPoolParams',
            value: exports.PoolParams.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolParams.decode(message.value);
    },
    toProto(message) {
        return exports.PoolParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.PoolParams',
            value: exports.PoolParams.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolParams.typeUrl, exports.PoolParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolParams.aminoType, exports.PoolParams.typeUrl);
function createBasePoolAsset() {
    return {
        token: coin_1.Coin.fromPartial({}),
        weight: '',
    };
}
exports.PoolAsset = {
    typeUrl: '/osmosis.gamm.v1beta1.PoolAsset',
    aminoType: 'osmosis/gamm/pool-asset',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAsset.typeUrl ||
                (coin_1.Coin.is(o.token) && typeof o.weight === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAsset.typeUrl ||
                (coin_1.Coin.isSDK(o.token) && typeof o.weight === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAsset.typeUrl ||
                (coin_1.Coin.isAmino(o.token) && typeof o.weight === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        if (message.weight !== '') {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolAsset();
        message.token =
            object.token !== undefined && object.token !== null
                ? coin_1.Coin.fromPartial(object.token)
                : undefined;
        message.weight = object.weight ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolAsset();
        if (object.token !== undefined && object.token !== null) {
            message.token = coin_1.Coin.fromAmino(object.token);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token = message.token ? coin_1.Coin.toAmino(message.token) : undefined;
        obj.weight = message.weight === '' ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/pool-asset',
            value: exports.PoolAsset.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolAsset.decode(message.value);
    },
    toProto(message) {
        return exports.PoolAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.PoolAsset',
            value: exports.PoolAsset.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolAsset.typeUrl, exports.PoolAsset);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolAsset.aminoType, exports.PoolAsset.typeUrl);
function createBasePool() {
    return {
        $typeUrl: '/osmosis.gamm.v1beta1.Pool',
        address: '',
        id: BigInt(0),
        poolParams: exports.PoolParams.fromPartial({}),
        futurePoolGovernor: '',
        totalShares: coin_1.Coin.fromPartial({}),
        poolAssets: [],
        totalWeight: '',
    };
}
exports.Pool = {
    typeUrl: '/osmosis.gamm.v1beta1.Pool',
    aminoType: 'osmosis/gamm/BalancerPool',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Pool.typeUrl ||
                (typeof o.address === 'string' &&
                    typeof o.id === 'bigint' &&
                    exports.PoolParams.is(o.poolParams) &&
                    typeof o.futurePoolGovernor === 'string' &&
                    coin_1.Coin.is(o.totalShares) &&
                    Array.isArray(o.poolAssets) &&
                    (!o.poolAssets.length || exports.PoolAsset.is(o.poolAssets[0])) &&
                    typeof o.totalWeight === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Pool.typeUrl ||
                (typeof o.address === 'string' &&
                    typeof o.id === 'bigint' &&
                    exports.PoolParams.isSDK(o.pool_params) &&
                    typeof o.future_pool_governor === 'string' &&
                    coin_1.Coin.isSDK(o.total_shares) &&
                    Array.isArray(o.pool_assets) &&
                    (!o.pool_assets.length || exports.PoolAsset.isSDK(o.pool_assets[0])) &&
                    typeof o.total_weight === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Pool.typeUrl ||
                (typeof o.address === 'string' &&
                    typeof o.id === 'bigint' &&
                    exports.PoolParams.isAmino(o.pool_params) &&
                    typeof o.future_pool_governor === 'string' &&
                    coin_1.Coin.isAmino(o.total_shares) &&
                    Array.isArray(o.pool_assets) &&
                    (!o.pool_assets.length || exports.PoolAsset.isAmino(o.pool_assets[0])) &&
                    typeof o.total_weight === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.poolParams !== undefined) {
            exports.PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
        }
        if (message.futurePoolGovernor !== '') {
            writer.uint32(34).string(message.futurePoolGovernor);
        }
        if (message.totalShares !== undefined) {
            coin_1.Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.poolAssets) {
            exports.PoolAsset.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.totalWeight !== '') {
            writer.uint32(58).string(message.totalWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.poolParams = exports.PoolParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 5:
                    message.totalShares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.poolAssets.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalWeight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.address = object.address ?? '';
        message.id =
            object.id !== undefined && object.id !== null
                ? BigInt(object.id.toString())
                : BigInt(0);
        message.poolParams =
            object.poolParams !== undefined && object.poolParams !== null
                ? exports.PoolParams.fromPartial(object.poolParams)
                : undefined;
        message.futurePoolGovernor = object.futurePoolGovernor ?? '';
        message.totalShares =
            object.totalShares !== undefined && object.totalShares !== null
                ? coin_1.Coin.fromPartial(object.totalShares)
                : undefined;
        message.poolAssets =
            object.poolAssets?.map(e => exports.PoolAsset.fromPartial(e)) || [];
        message.totalWeight = object.totalWeight ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = exports.PoolParams.fromAmino(object.pool_params);
        }
        if (object.future_pool_governor !== undefined &&
            object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = coin_1.Coin.fromAmino(object.total_shares);
        }
        message.poolAssets =
            object.pool_assets?.map(e => exports.PoolAsset.fromAmino(e)) || [];
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === '' ? undefined : message.address;
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.pool_params = message.poolParams
            ? exports.PoolParams.toAmino(message.poolParams)
            : undefined;
        obj.future_pool_governor =
            message.futurePoolGovernor === ''
                ? undefined
                : message.futurePoolGovernor;
        obj.total_shares = message.totalShares
            ? coin_1.Coin.toAmino(message.totalShares)
            : undefined;
        if (message.poolAssets) {
            obj.pool_assets = message.poolAssets.map(e => e ? exports.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.pool_assets = message.poolAssets;
        }
        obj.total_weight =
            message.totalWeight === '' ? undefined : message.totalWeight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/BalancerPool',
            value: exports.Pool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.Pool',
            value: exports.Pool.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Pool.typeUrl, exports.Pool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Pool.aminoType, exports.Pool.typeUrl);
