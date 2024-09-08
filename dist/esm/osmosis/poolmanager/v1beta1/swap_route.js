//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: '',
    };
}
export const SwapAmountInRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-in-route',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapAmountInRoute.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.tokenOutDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapAmountInRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_out_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapAmountInRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_out_denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInRoute();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenOutDenom = object.tokenOutDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountInRoute();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out_denom !== undefined &&
            object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_out_denom =
            message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-in-route',
            value: SwapAmountInRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInRoute',
            value: SwapAmountInRoute.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapAmountInRoute.typeUrl, SwapAmountInRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapAmountInRoute.aminoType, SwapAmountInRoute.typeUrl);
function createBaseSwapAmountOutRoute() {
    return {
        poolId: BigInt(0),
        tokenInDenom: '',
    };
}
export const SwapAmountOutRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-out-route',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapAmountOutRoute.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.tokenInDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapAmountOutRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.token_in_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapAmountOutRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.token_in_denom === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutRoute();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountOutRoute();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-out-route',
            value: SwapAmountOutRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutRoute',
            value: SwapAmountOutRoute.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapAmountOutRoute.typeUrl, SwapAmountOutRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapAmountOutRoute.aminoType, SwapAmountOutRoute.typeUrl);
function createBaseSwapAmountInSplitRoute() {
    return {
        pools: [],
        tokenInAmount: '',
    };
}
export const SwapAmountInSplitRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-in-split-route',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapAmountInSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || SwapAmountInRoute.is(o.pools[0])) &&
                    typeof o.tokenInAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapAmountInSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || SwapAmountInRoute.isSDK(o.pools[0])) &&
                    typeof o.token_in_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapAmountInSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || SwapAmountInRoute.isAmino(o.pools[0])) &&
                    typeof o.token_in_amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            SwapAmountInRoute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenInAmount !== '') {
            writer.uint32(18).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInSplitRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInSplitRoute();
        message.pools =
            object.pools?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountInSplitRoute();
        message.pools =
            object.pools?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in_amount !== undefined &&
            object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.token_in_amount =
            message.tokenInAmount === '' ? undefined : message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapAmountInSplitRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-in-split-route',
            value: SwapAmountInSplitRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapAmountInSplitRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountInSplitRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute',
            value: SwapAmountInSplitRoute.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapAmountInSplitRoute.typeUrl, SwapAmountInSplitRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapAmountInSplitRoute.aminoType, SwapAmountInSplitRoute.typeUrl);
function createBaseSwapAmountOutSplitRoute() {
    return {
        pools: [],
        tokenOutAmount: '',
    };
}
export const SwapAmountOutSplitRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-out-split-route',
    is(o) {
        return (o &&
            (o.$typeUrl === SwapAmountOutSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || SwapAmountOutRoute.is(o.pools[0])) &&
                    typeof o.tokenOutAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === SwapAmountOutSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || SwapAmountOutRoute.isSDK(o.pools[0])) &&
                    typeof o.token_out_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === SwapAmountOutSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || SwapAmountOutRoute.isAmino(o.pools[0])) &&
                    typeof o.token_out_amount === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            SwapAmountOutRoute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenOutAmount !== '') {
            writer.uint32(18).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutSplitRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutSplitRoute();
        message.pools =
            object.pools?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountOutSplitRoute();
        message.pools =
            object.pools?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_out_amount !== undefined &&
            object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.token_out_amount =
            message.tokenOutAmount === '' ? undefined : message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return SwapAmountOutSplitRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-out-split-route',
            value: SwapAmountOutSplitRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return SwapAmountOutSplitRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountOutSplitRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute',
            value: SwapAmountOutSplitRoute.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(SwapAmountOutSplitRoute.typeUrl, SwapAmountOutSplitRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapAmountOutSplitRoute.aminoType, SwapAmountOutSplitRoute.typeUrl);
