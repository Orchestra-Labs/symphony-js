"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapAmountOutSplitRoute = exports.SwapAmountInSplitRoute = exports.SwapAmountOutRoute = exports.SwapAmountInRoute = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: '',
    };
}
exports.SwapAmountInRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-in-route',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountInRoute.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.tokenOutDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountInRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_out_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountInRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_out_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== '') {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-in-route',
            value: exports.SwapAmountInRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInRoute',
            value: exports.SwapAmountInRoute.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapAmountInRoute.typeUrl, exports.SwapAmountInRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapAmountInRoute.aminoType, exports.SwapAmountInRoute.typeUrl);
function createBaseSwapAmountOutRoute() {
    return {
        poolId: BigInt(0),
        tokenInDenom: '',
    };
}
exports.SwapAmountOutRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-out-route',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountOutRoute.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.tokenInDenom === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountOutRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.token_in_denom === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountOutRoute.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.token_in_denom === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-out-route',
            value: exports.SwapAmountOutRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutRoute',
            value: exports.SwapAmountOutRoute.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapAmountOutRoute.typeUrl, exports.SwapAmountOutRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapAmountOutRoute.aminoType, exports.SwapAmountOutRoute.typeUrl);
function createBaseSwapAmountInSplitRoute() {
    return {
        pools: [],
        tokenInAmount: '',
    };
}
exports.SwapAmountInSplitRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-in-split-route',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountInSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || exports.SwapAmountInRoute.is(o.pools[0])) &&
                    typeof o.tokenInAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountInSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || exports.SwapAmountInRoute.isSDK(o.pools[0])) &&
                    typeof o.token_in_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountInSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || exports.SwapAmountInRoute.isAmino(o.pools[0])) &&
                    typeof o.token_in_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            exports.SwapAmountInRoute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenInAmount !== '') {
            writer.uint32(18).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInSplitRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(exports.SwapAmountInRoute.decode(reader, reader.uint32()));
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
            object.pools?.map(e => exports.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenInAmount = object.tokenInAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountInSplitRoute();
        message.pools =
            object.pools?.map(e => exports.SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in_amount !== undefined &&
            object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? exports.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.token_in_amount =
            message.tokenInAmount === '' ? undefined : message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountInSplitRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-in-split-route',
            value: exports.SwapAmountInSplitRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountInSplitRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountInSplitRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountInSplitRoute',
            value: exports.SwapAmountInSplitRoute.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapAmountInSplitRoute.typeUrl, exports.SwapAmountInSplitRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapAmountInSplitRoute.aminoType, exports.SwapAmountInSplitRoute.typeUrl);
function createBaseSwapAmountOutSplitRoute() {
    return {
        pools: [],
        tokenOutAmount: '',
    };
}
exports.SwapAmountOutSplitRoute = {
    typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute',
    aminoType: 'osmosis/poolmanager/swap-amount-out-split-route',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountOutSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || exports.SwapAmountOutRoute.is(o.pools[0])) &&
                    typeof o.tokenOutAmount === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountOutSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || exports.SwapAmountOutRoute.isSDK(o.pools[0])) &&
                    typeof o.token_out_amount === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.SwapAmountOutSplitRoute.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length || exports.SwapAmountOutRoute.isAmino(o.pools[0])) &&
                    typeof o.token_out_amount === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            exports.SwapAmountOutRoute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tokenOutAmount !== '') {
            writer.uint32(18).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutSplitRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(exports.SwapAmountOutRoute.decode(reader, reader.uint32()));
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
            object.pools?.map(e => exports.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOutAmount = object.tokenOutAmount ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountOutSplitRoute();
        message.pools =
            object.pools?.map(e => exports.SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_out_amount !== undefined &&
            object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? exports.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.token_out_amount =
            message.tokenOutAmount === '' ? undefined : message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountOutSplitRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/poolmanager/swap-amount-out-split-route',
            value: exports.SwapAmountOutSplitRoute.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountOutSplitRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountOutSplitRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.poolmanager.v1beta1.SwapAmountOutSplitRoute',
            value: exports.SwapAmountOutSplitRoute.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.SwapAmountOutSplitRoute.typeUrl, exports.SwapAmountOutSplitRoute);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SwapAmountOutSplitRoute.aminoType, exports.SwapAmountOutSplitRoute.typeUrl);
