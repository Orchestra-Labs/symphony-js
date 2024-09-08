//@ts-nocheck
import { PoolParams, } from './stableswap_pool';
import { Coin, } from '../../../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../../../binary';
import { GlobalDecoderRegistry } from '../../../../../registry';
function createBaseMsgCreateStableswapPool() {
    return {
        sender: '',
        poolParams: undefined,
        initialPoolLiquidity: [],
        scalingFactors: [],
        futurePoolGovernor: '',
        scalingFactorController: '',
    };
}
export const MsgCreateStableswapPool = {
    typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool',
    aminoType: 'osmosis/gamm/create-stableswap-pool',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateStableswapPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.initialPoolLiquidity) &&
                    (!o.initialPoolLiquidity.length ||
                        Coin.is(o.initialPoolLiquidity[0])) &&
                    Array.isArray(o.scalingFactors) &&
                    (!o.scalingFactors.length ||
                        typeof o.scalingFactors[0] === 'bigint') &&
                    typeof o.futurePoolGovernor === 'string' &&
                    typeof o.scalingFactorController === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateStableswapPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.initial_pool_liquidity) &&
                    (!o.initial_pool_liquidity.length ||
                        Coin.isSDK(o.initial_pool_liquidity[0])) &&
                    Array.isArray(o.scaling_factors) &&
                    (!o.scaling_factors.length ||
                        typeof o.scaling_factors[0] === 'bigint') &&
                    typeof o.future_pool_governor === 'string' &&
                    typeof o.scaling_factor_controller === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateStableswapPool.typeUrl ||
                (typeof o.sender === 'string' &&
                    Array.isArray(o.initial_pool_liquidity) &&
                    (!o.initial_pool_liquidity.length ||
                        Coin.isAmino(o.initial_pool_liquidity[0])) &&
                    Array.isArray(o.scaling_factors) &&
                    (!o.scaling_factors.length ||
                        typeof o.scaling_factors[0] === 'bigint') &&
                    typeof o.future_pool_governor === 'string' &&
                    typeof o.scaling_factor_controller === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolLiquidity) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.futurePoolGovernor !== '') {
            writer.uint32(42).string(message.futurePoolGovernor);
        }
        if (message.scalingFactorController !== '') {
            writer.uint32(50).string(message.scalingFactorController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scalingFactors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scalingFactors.push(reader.uint64());
                    }
                    break;
                case 5:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 6:
                    message.scalingFactorController = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPool();
        message.sender = object.sender ?? '';
        message.poolParams =
            object.poolParams !== undefined && object.poolParams !== null
                ? PoolParams.fromPartial(object.poolParams)
                : undefined;
        message.initialPoolLiquidity =
            object.initialPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
        message.scalingFactors =
            object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        message.futurePoolGovernor = object.futurePoolGovernor ?? '';
        message.scalingFactorController = object.scalingFactorController ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStableswapPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = PoolParams.fromAmino(object.pool_params);
        }
        message.initialPoolLiquidity =
            object.initial_pool_liquidity?.map(e => Coin.fromAmino(e)) || [];
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        if (object.future_pool_governor !== undefined &&
            object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        if (object.scaling_factor_controller !== undefined &&
            object.scaling_factor_controller !== null) {
            message.scalingFactorController = object.scaling_factor_controller;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.pool_params = message.poolParams
            ? PoolParams.toAmino(message.poolParams)
            : undefined;
        if (message.initialPoolLiquidity) {
            obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = message.initialPoolLiquidity;
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = message.scalingFactors;
        }
        obj.future_pool_governor =
            message.futurePoolGovernor === ''
                ? undefined
                : message.futurePoolGovernor;
        obj.scaling_factor_controller =
            message.scalingFactorController === ''
                ? undefined
                : message.scalingFactorController;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateStableswapPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/create-stableswap-pool',
            value: MsgCreateStableswapPool.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateStableswapPool.decode(message.value);
    },
    toProto(message) {
        return MsgCreateStableswapPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool',
            value: MsgCreateStableswapPool.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateStableswapPool.typeUrl, MsgCreateStableswapPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateStableswapPool.aminoType, MsgCreateStableswapPool.typeUrl);
function createBaseMsgCreateStableswapPoolResponse() {
    return {
        poolId: BigInt(0),
    };
}
export const MsgCreateStableswapPoolResponse = {
    typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse',
    aminoType: 'osmosis/gamm/create-stableswap-pool-response',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgCreateStableswapPoolResponse.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgCreateStableswapPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgCreateStableswapPoolResponse.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateStableswapPoolResponse();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStableswapPoolResponse();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateStableswapPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/create-stableswap-pool-response',
            value: MsgCreateStableswapPoolResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgCreateStableswapPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateStableswapPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse',
            value: MsgCreateStableswapPoolResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgCreateStableswapPoolResponse.typeUrl, MsgCreateStableswapPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateStableswapPoolResponse.aminoType, MsgCreateStableswapPoolResponse.typeUrl);
function createBaseMsgStableSwapAdjustScalingFactors() {
    return {
        sender: '',
        poolId: BigInt(0),
        scalingFactors: [],
    };
}
export const MsgStableSwapAdjustScalingFactors = {
    typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors',
    aminoType: 'osmosis/gamm/stableswap-adjust-scaling-factors',
    is(o) {
        return (o &&
            (o.$typeUrl === MsgStableSwapAdjustScalingFactors.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.poolId === 'bigint' &&
                    Array.isArray(o.scalingFactors) &&
                    (!o.scalingFactors.length ||
                        typeof o.scalingFactors[0] === 'bigint'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === MsgStableSwapAdjustScalingFactors.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.scaling_factors) &&
                    (!o.scaling_factors.length ||
                        typeof o.scaling_factors[0] === 'bigint'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === MsgStableSwapAdjustScalingFactors.typeUrl ||
                (typeof o.sender === 'string' &&
                    typeof o.pool_id === 'bigint' &&
                    Array.isArray(o.scaling_factors) &&
                    (!o.scaling_factors.length ||
                        typeof o.scaling_factors[0] === 'bigint'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        writer.uint32(26).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scalingFactors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scalingFactors.push(reader.uint64());
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
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        message.sender = object.sender ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.scalingFactors =
            object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === '' ? undefined : message.sender;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = message.scalingFactors;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStableSwapAdjustScalingFactors.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/stableswap-adjust-scaling-factors',
            value: MsgStableSwapAdjustScalingFactors.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgStableSwapAdjustScalingFactors.decode(message.value);
    },
    toProto(message) {
        return MsgStableSwapAdjustScalingFactors.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors',
            value: MsgStableSwapAdjustScalingFactors.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgStableSwapAdjustScalingFactors.typeUrl, MsgStableSwapAdjustScalingFactors);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStableSwapAdjustScalingFactors.aminoType, MsgStableSwapAdjustScalingFactors.typeUrl);
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
    return {};
}
export const MsgStableSwapAdjustScalingFactorsResponse = {
    typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse',
    aminoType: 'osmosis/gamm/stable-swap-adjust-scaling-factors-response',
    is(o) {
        return (o && o.$typeUrl === MsgStableSwapAdjustScalingFactorsResponse.typeUrl);
    },
    isSDK(o) {
        return (o && o.$typeUrl === MsgStableSwapAdjustScalingFactorsResponse.typeUrl);
    },
    isAmino(o) {
        return (o && o.$typeUrl === MsgStableSwapAdjustScalingFactorsResponse.typeUrl);
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStableSwapAdjustScalingFactorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/stable-swap-adjust-scaling-factors-response',
            value: MsgStableSwapAdjustScalingFactorsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return MsgStableSwapAdjustScalingFactorsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse',
            value: MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(MsgStableSwapAdjustScalingFactorsResponse.typeUrl, MsgStableSwapAdjustScalingFactorsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStableSwapAdjustScalingFactorsResponse.aminoType, MsgStableSwapAdjustScalingFactorsResponse.typeUrl);
