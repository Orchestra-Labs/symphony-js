"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumNextInitializedTicksResponse = exports.NumNextInitializedTicksRequest = exports.GetTotalLiquidityResponse = exports.GetTotalLiquidityRequest = exports.UserUnbondingPositionsResponse = exports.UserUnbondingPositionsRequest = exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse = exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest = exports.IncentiveRecordsResponse = exports.IncentiveRecordsRequest = exports.TickAccumulatorTrackersResponse = exports.TickAccumulatorTrackersRequest = exports.PoolAccumulatorRewardsResponse = exports.PoolAccumulatorRewardsRequest = exports.ClaimableIncentivesResponse = exports.ClaimableIncentivesRequest = exports.ClaimableSpreadRewardsResponse = exports.ClaimableSpreadRewardsRequest = exports.LiquidityPerTickRangeResponse = exports.LiquidityPerTickRangeRequest = exports.LiquidityNetInDirectionResponse = exports.LiquidityNetInDirectionRequest = exports.LiquidityDepthWithRange = exports.TickLiquidityNet = exports.ParamsResponse = exports.ParamsRequest = exports.PoolsResponse = exports.PoolsRequest = exports.NumPoolPositionsResponse = exports.NumPoolPositionsRequest = exports.PositionByIdResponse = exports.PositionByIdRequest = exports.UserPositionsResponse = exports.UserPositionsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const position_1 = require("./position");
const any_1 = require("../../../google/protobuf/any");
const params_1 = require("../params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const tick_info_1 = require("./tick_info");
const incentive_record_1 = require("./incentive_record");
const pool_1 = require("./pool");
const pool_2 = require("../../cosmwasmpool/v1beta1/model/pool");
const stableswap_pool_1 = require("../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool");
const balancerPool_1 = require("../../gamm/v1beta1/balancerPool");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
function createBaseUserPositionsRequest() {
    return {
        address: '',
        poolId: BigInt(0),
        pagination: undefined,
    };
}
exports.UserPositionsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest',
    aminoType: 'osmosis/concentratedliquidity/user-positions-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UserPositionsRequest.typeUrl ||
                (typeof o.address === 'string' && typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UserPositionsRequest.typeUrl ||
                (typeof o.address === 'string' && typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UserPositionsRequest.typeUrl ||
                (typeof o.address === 'string' && typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserPositionsRequest();
        message.address = object.address ?? '';
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserPositionsRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === '' ? undefined : message.address;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination
            ? pagination_1.PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UserPositionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-positions-request',
            value: exports.UserPositionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UserPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UserPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest',
            value: exports.UserPositionsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UserPositionsRequest.typeUrl, exports.UserPositionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UserPositionsRequest.aminoType, exports.UserPositionsRequest.typeUrl);
function createBaseUserPositionsResponse() {
    return {
        positions: [],
        pagination: undefined,
    };
}
exports.UserPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/user-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UserPositionsResponse.typeUrl ||
                (Array.isArray(o.positions) &&
                    (!o.positions.length || position_1.FullPositionBreakdown.is(o.positions[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UserPositionsResponse.typeUrl ||
                (Array.isArray(o.positions) &&
                    (!o.positions.length || position_1.FullPositionBreakdown.isSDK(o.positions[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UserPositionsResponse.typeUrl ||
                (Array.isArray(o.positions) &&
                    (!o.positions.length ||
                        position_1.FullPositionBreakdown.isAmino(o.positions[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.positions) {
            position_1.FullPositionBreakdown.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positions.push(position_1.FullPositionBreakdown.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserPositionsResponse();
        message.positions =
            object.positions?.map(e => position_1.FullPositionBreakdown.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserPositionsResponse();
        message.positions =
            object.positions?.map(e => position_1.FullPositionBreakdown.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positions) {
            obj.positions = message.positions.map(e => e ? position_1.FullPositionBreakdown.toAmino(e) : undefined);
        }
        else {
            obj.positions = message.positions;
        }
        obj.pagination = message.pagination
            ? pagination_1.PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UserPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-positions-response',
            value: exports.UserPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UserPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UserPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse',
            value: exports.UserPositionsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UserPositionsResponse.typeUrl, exports.UserPositionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UserPositionsResponse.aminoType, exports.UserPositionsResponse.typeUrl);
function createBasePositionByIdRequest() {
    return {
        positionId: BigInt(0),
    };
}
exports.PositionByIdRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest',
    aminoType: 'osmosis/concentratedliquidity/position-by-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PositionByIdRequest.typeUrl ||
                typeof o.positionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PositionByIdRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PositionByIdRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePositionByIdRequest();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionByIdRequest();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PositionByIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-by-id-request',
            value: exports.PositionByIdRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PositionByIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.PositionByIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest',
            value: exports.PositionByIdRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PositionByIdRequest.typeUrl, exports.PositionByIdRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PositionByIdRequest.aminoType, exports.PositionByIdRequest.typeUrl);
function createBasePositionByIdResponse() {
    return {
        position: position_1.FullPositionBreakdown.fromPartial({}),
    };
}
exports.PositionByIdResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse',
    aminoType: 'osmosis/concentratedliquidity/position-by-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PositionByIdResponse.typeUrl ||
                position_1.FullPositionBreakdown.is(o.position)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PositionByIdResponse.typeUrl ||
                position_1.FullPositionBreakdown.isSDK(o.position)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PositionByIdResponse.typeUrl ||
                position_1.FullPositionBreakdown.isAmino(o.position)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.position !== undefined) {
            position_1.FullPositionBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = position_1.FullPositionBreakdown.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePositionByIdResponse();
        message.position =
            object.position !== undefined && object.position !== null
                ? position_1.FullPositionBreakdown.fromPartial(object.position)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionByIdResponse();
        if (object.position !== undefined && object.position !== null) {
            message.position = position_1.FullPositionBreakdown.fromAmino(object.position);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? position_1.FullPositionBreakdown.toAmino(message.position)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PositionByIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-by-id-response',
            value: exports.PositionByIdResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PositionByIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.PositionByIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse',
            value: exports.PositionByIdResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PositionByIdResponse.typeUrl, exports.PositionByIdResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PositionByIdResponse.aminoType, exports.PositionByIdResponse.typeUrl);
function createBaseNumPoolPositionsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.NumPoolPositionsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest',
    aminoType: 'osmosis/concentratedliquidity/num-pool-positions-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolPositionsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolPositionsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolPositionsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolPositionsRequest();
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
        const message = createBaseNumPoolPositionsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNumPoolPositionsRequest();
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
        return exports.NumPoolPositionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-pool-positions-request',
            value: exports.NumPoolPositionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.NumPoolPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.NumPoolPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest',
            value: exports.NumPoolPositionsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.NumPoolPositionsRequest.typeUrl, exports.NumPoolPositionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NumPoolPositionsRequest.aminoType, exports.NumPoolPositionsRequest.typeUrl);
function createBaseNumPoolPositionsResponse() {
    return {
        positionCount: BigInt(0),
    };
}
exports.NumPoolPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/num-pool-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolPositionsResponse.typeUrl ||
                typeof o.positionCount === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolPositionsResponse.typeUrl ||
                typeof o.position_count === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.NumPoolPositionsResponse.typeUrl ||
                typeof o.position_count === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionCount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNumPoolPositionsResponse();
        message.positionCount =
            object.positionCount !== undefined && object.positionCount !== null
                ? BigInt(object.positionCount.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNumPoolPositionsResponse();
        if (object.position_count !== undefined && object.position_count !== null) {
            message.positionCount = BigInt(object.position_count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_count =
            message.positionCount !== BigInt(0)
                ? message.positionCount.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NumPoolPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-pool-positions-response',
            value: exports.NumPoolPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.NumPoolPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.NumPoolPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse',
            value: exports.NumPoolPositionsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.NumPoolPositionsResponse.typeUrl, exports.NumPoolPositionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NumPoolPositionsResponse.aminoType, exports.NumPoolPositionsResponse.typeUrl);
function createBasePoolsRequest() {
    return {
        pagination: undefined,
    };
}
exports.PoolsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsRequest',
    aminoType: 'osmosis/concentratedliquidity/pools-request',
    is(o) {
        return o && o.$typeUrl === exports.PoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.PoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.PoolsRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination
            ? pagination_1.PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pools-request',
            value: exports.PoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.PoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsRequest',
            value: exports.PoolsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolsRequest.typeUrl, exports.PoolsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolsRequest.aminoType, exports.PoolsRequest.typeUrl);
function createBasePoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
exports.PoolsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsResponse',
    aminoType: 'osmosis/concentratedliquidity/pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.is(o.pools[0]) ||
                        pool_2.CosmWasmPool.is(o.pools[0]) ||
                        stableswap_pool_1.Pool.is(o.pools[0]) ||
                        balancerPool_1.Pool.is(o.pools[0]) ||
                        any_1.Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isSDK(o.pools[0]) ||
                        pool_2.CosmWasmPool.isSDK(o.pools[0]) ||
                        stableswap_pool_1.Pool.isSDK(o.pools[0]) ||
                        balancerPool_1.Pool.isSDK(o.pools[0]) ||
                        any_1.Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        pool_1.Pool.isAmino(o.pools[0]) ||
                        pool_2.CosmWasmPool.isAmino(o.pools[0]) ||
                        stableswap_pool_1.Pool.isAmino(o.pools[0]) ||
                        balancerPool_1.Pool.isAmino(o.pools[0]) ||
                        any_1.Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(registry_1.GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsResponse();
        message.pools =
            object.pools?.map(e => registry_1.GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? registry_1.GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination
            ? pagination_1.PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pools-response',
            value: exports.PoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.PoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsResponse',
            value: exports.PoolsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolsResponse.typeUrl, exports.PoolsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolsResponse.aminoType, exports.PoolsResponse.typeUrl);
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsRequest',
    aminoType: 'osmosis/concentratedliquidity/params-request',
    is(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/params-request',
            value: exports.ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsRequest',
            value: exports.ParamsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsRequest.typeUrl, exports.ParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsRequest.aminoType, exports.ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: params_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsResponse',
    aminoType: 'osmosis/concentratedliquidity/params-response',
    is(o) {
        return o && (o.$typeUrl === exports.ParamsResponse.typeUrl || params_1.Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || params_1.Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === exports.ParamsResponse.typeUrl || params_1.Params.isAmino(o.params)));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/params-response',
            value: exports.ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsResponse',
            value: exports.ParamsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ParamsResponse.typeUrl, exports.ParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ParamsResponse.aminoType, exports.ParamsResponse.typeUrl);
function createBaseTickLiquidityNet() {
    return {
        liquidityNet: '',
        tickIndex: BigInt(0),
    };
}
exports.TickLiquidityNet = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet',
    aminoType: 'osmosis/concentratedliquidity/tick-liquidity-net',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TickLiquidityNet.typeUrl ||
                (typeof o.liquidityNet === 'string' && typeof o.tickIndex === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TickLiquidityNet.typeUrl ||
                (typeof o.liquidity_net === 'string' &&
                    typeof o.tick_index === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TickLiquidityNet.typeUrl ||
                (typeof o.liquidity_net === 'string' &&
                    typeof o.tick_index === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.liquidityNet !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.liquidityNet, 18).atomics);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickLiquidityNet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityNet = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.tickIndex = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTickLiquidityNet();
        message.liquidityNet = object.liquidityNet ?? '';
        message.tickIndex =
            object.tickIndex !== undefined && object.tickIndex !== null
                ? BigInt(object.tickIndex.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickLiquidityNet();
        if (object.liquidity_net !== undefined && object.liquidity_net !== null) {
            message.liquidityNet = object.liquidity_net;
        }
        if (object.tick_index !== undefined && object.tick_index !== null) {
            message.tickIndex = BigInt(object.tick_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.liquidity_net =
            message.liquidityNet === '' ? undefined : message.liquidityNet;
        obj.tick_index =
            message.tickIndex !== BigInt(0)
                ? message.tickIndex.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TickLiquidityNet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-liquidity-net',
            value: exports.TickLiquidityNet.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TickLiquidityNet.decode(message.value);
    },
    toProto(message) {
        return exports.TickLiquidityNet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet',
            value: exports.TickLiquidityNet.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TickLiquidityNet.typeUrl, exports.TickLiquidityNet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TickLiquidityNet.aminoType, exports.TickLiquidityNet.typeUrl);
function createBaseLiquidityDepthWithRange() {
    return {
        liquidityAmount: '',
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
    };
}
exports.LiquidityDepthWithRange = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange',
    aminoType: 'osmosis/concentratedliquidity/liquidity-depth-with-range',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityDepthWithRange.typeUrl ||
                (typeof o.liquidityAmount === 'string' &&
                    typeof o.lowerTick === 'bigint' &&
                    typeof o.upperTick === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityDepthWithRange.typeUrl ||
                (typeof o.liquidity_amount === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityDepthWithRange.typeUrl ||
                (typeof o.liquidity_amount === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.liquidityAmount !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
        }
        if (message.lowerTick !== BigInt(0)) {
            writer.uint32(16).int64(message.lowerTick);
        }
        if (message.upperTick !== BigInt(0)) {
            writer.uint32(24).int64(message.upperTick);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityDepthWithRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityAmount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.lowerTick = reader.int64();
                    break;
                case 3:
                    message.upperTick = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidityDepthWithRange();
        message.liquidityAmount = object.liquidityAmount ?? '';
        message.lowerTick =
            object.lowerTick !== undefined && object.lowerTick !== null
                ? BigInt(object.lowerTick.toString())
                : BigInt(0);
        message.upperTick =
            object.upperTick !== undefined && object.upperTick !== null
                ? BigInt(object.upperTick.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLiquidityDepthWithRange();
        if (object.liquidity_amount !== undefined &&
            object.liquidity_amount !== null) {
            message.liquidityAmount = object.liquidity_amount;
        }
        if (object.lower_tick !== undefined && object.lower_tick !== null) {
            message.lowerTick = BigInt(object.lower_tick);
        }
        if (object.upper_tick !== undefined && object.upper_tick !== null) {
            message.upperTick = BigInt(object.upper_tick);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.liquidity_amount =
            message.liquidityAmount === '' ? undefined : message.liquidityAmount;
        obj.lower_tick =
            message.lowerTick !== BigInt(0)
                ? message.lowerTick.toString()
                : undefined;
        obj.upper_tick =
            message.upperTick !== BigInt(0)
                ? message.upperTick.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LiquidityDepthWithRange.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-depth-with-range',
            value: exports.LiquidityDepthWithRange.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.LiquidityDepthWithRange.decode(message.value);
    },
    toProto(message) {
        return exports.LiquidityDepthWithRange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange',
            value: exports.LiquidityDepthWithRange.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.LiquidityDepthWithRange.typeUrl, exports.LiquidityDepthWithRange);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LiquidityDepthWithRange.aminoType, exports.LiquidityDepthWithRange.typeUrl);
function createBaseLiquidityNetInDirectionRequest() {
    return {
        poolId: BigInt(0),
        tokenIn: '',
        startTick: BigInt(0),
        useCurTick: false,
        boundTick: BigInt(0),
        useNoBound: false,
    };
}
exports.LiquidityNetInDirectionRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest',
    aminoType: 'osmosis/concentratedliquidity/liquidity-net-in-direction-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityNetInDirectionRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.startTick === 'bigint' &&
                    typeof o.useCurTick === 'boolean' &&
                    typeof o.boundTick === 'bigint' &&
                    typeof o.useNoBound === 'boolean')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityNetInDirectionRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.start_tick === 'bigint' &&
                    typeof o.use_cur_tick === 'boolean' &&
                    typeof o.bound_tick === 'bigint' &&
                    typeof o.use_no_bound === 'boolean')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityNetInDirectionRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.start_tick === 'bigint' &&
                    typeof o.use_cur_tick === 'boolean' &&
                    typeof o.bound_tick === 'bigint' &&
                    typeof o.use_no_bound === 'boolean')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenIn !== '') {
            writer.uint32(18).string(message.tokenIn);
        }
        if (message.startTick !== BigInt(0)) {
            writer.uint32(24).int64(message.startTick);
        }
        if (message.useCurTick === true) {
            writer.uint32(32).bool(message.useCurTick);
        }
        if (message.boundTick !== BigInt(0)) {
            writer.uint32(40).int64(message.boundTick);
        }
        if (message.useNoBound === true) {
            writer.uint32(48).bool(message.useNoBound);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityNetInDirectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenIn = reader.string();
                    break;
                case 3:
                    message.startTick = reader.int64();
                    break;
                case 4:
                    message.useCurTick = reader.bool();
                    break;
                case 5:
                    message.boundTick = reader.int64();
                    break;
                case 6:
                    message.useNoBound = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidityNetInDirectionRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenIn = object.tokenIn ?? '';
        message.startTick =
            object.startTick !== undefined && object.startTick !== null
                ? BigInt(object.startTick.toString())
                : BigInt(0);
        message.useCurTick = object.useCurTick ?? false;
        message.boundTick =
            object.boundTick !== undefined && object.boundTick !== null
                ? BigInt(object.boundTick.toString())
                : BigInt(0);
        message.useNoBound = object.useNoBound ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLiquidityNetInDirectionRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        if (object.start_tick !== undefined && object.start_tick !== null) {
            message.startTick = BigInt(object.start_tick);
        }
        if (object.use_cur_tick !== undefined && object.use_cur_tick !== null) {
            message.useCurTick = object.use_cur_tick;
        }
        if (object.bound_tick !== undefined && object.bound_tick !== null) {
            message.boundTick = BigInt(object.bound_tick);
        }
        if (object.use_no_bound !== undefined && object.use_no_bound !== null) {
            message.useNoBound = object.use_no_bound;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
        obj.start_tick =
            message.startTick !== BigInt(0)
                ? message.startTick.toString()
                : undefined;
        obj.use_cur_tick =
            message.useCurTick === false ? undefined : message.useCurTick;
        obj.bound_tick =
            message.boundTick !== BigInt(0)
                ? message.boundTick.toString()
                : undefined;
        obj.use_no_bound =
            message.useNoBound === false ? undefined : message.useNoBound;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LiquidityNetInDirectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-net-in-direction-request',
            value: exports.LiquidityNetInDirectionRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.LiquidityNetInDirectionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.LiquidityNetInDirectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest',
            value: exports.LiquidityNetInDirectionRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.LiquidityNetInDirectionRequest.typeUrl, exports.LiquidityNetInDirectionRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LiquidityNetInDirectionRequest.aminoType, exports.LiquidityNetInDirectionRequest.typeUrl);
function createBaseLiquidityNetInDirectionResponse() {
    return {
        liquidityDepths: [],
        currentTick: BigInt(0),
        currentLiquidity: '',
        currentSqrtPrice: '',
    };
}
exports.LiquidityNetInDirectionResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse',
    aminoType: 'osmosis/concentratedliquidity/liquidity-net-in-direction-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityNetInDirectionResponse.typeUrl ||
                (Array.isArray(o.liquidityDepths) &&
                    (!o.liquidityDepths.length ||
                        exports.TickLiquidityNet.is(o.liquidityDepths[0])) &&
                    typeof o.currentTick === 'bigint' &&
                    typeof o.currentLiquidity === 'string' &&
                    typeof o.currentSqrtPrice === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityNetInDirectionResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        exports.TickLiquidityNet.isSDK(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string' &&
                    typeof o.current_sqrt_price === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityNetInDirectionResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        exports.TickLiquidityNet.isAmino(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string' &&
                    typeof o.current_sqrt_price === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidityDepths) {
            exports.TickLiquidityNet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentTick !== BigInt(0)) {
            writer.uint32(16).int64(message.currentTick);
        }
        if (message.currentLiquidity !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
        }
        if (message.currentSqrtPrice !== '') {
            writer.uint32(34).string(message.currentSqrtPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityNetInDirectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityDepths.push(exports.TickLiquidityNet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.currentTick = reader.int64();
                    break;
                case 3:
                    message.currentLiquidity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.currentSqrtPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidityNetInDirectionResponse();
        message.liquidityDepths =
            object.liquidityDepths?.map(e => exports.TickLiquidityNet.fromPartial(e)) || [];
        message.currentTick =
            object.currentTick !== undefined && object.currentTick !== null
                ? BigInt(object.currentTick.toString())
                : BigInt(0);
        message.currentLiquidity = object.currentLiquidity ?? '';
        message.currentSqrtPrice = object.currentSqrtPrice ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseLiquidityNetInDirectionResponse();
        message.liquidityDepths =
            object.liquidity_depths?.map(e => exports.TickLiquidityNet.fromAmino(e)) || [];
        if (object.current_tick !== undefined && object.current_tick !== null) {
            message.currentTick = BigInt(object.current_tick);
        }
        if (object.current_liquidity !== undefined &&
            object.current_liquidity !== null) {
            message.currentLiquidity = object.current_liquidity;
        }
        if (object.current_sqrt_price !== undefined &&
            object.current_sqrt_price !== null) {
            message.currentSqrtPrice = object.current_sqrt_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidityDepths) {
            obj.liquidity_depths = message.liquidityDepths.map(e => e ? exports.TickLiquidityNet.toAmino(e) : undefined);
        }
        else {
            obj.liquidity_depths = message.liquidityDepths;
        }
        obj.current_tick =
            message.currentTick !== BigInt(0)
                ? message.currentTick.toString()
                : undefined;
        obj.current_liquidity =
            message.currentLiquidity === '' ? undefined : message.currentLiquidity;
        obj.current_sqrt_price =
            message.currentSqrtPrice === '' ? undefined : message.currentSqrtPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LiquidityNetInDirectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-net-in-direction-response',
            value: exports.LiquidityNetInDirectionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.LiquidityNetInDirectionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.LiquidityNetInDirectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse',
            value: exports.LiquidityNetInDirectionResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.LiquidityNetInDirectionResponse.typeUrl, exports.LiquidityNetInDirectionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LiquidityNetInDirectionResponse.aminoType, exports.LiquidityNetInDirectionResponse.typeUrl);
function createBaseLiquidityPerTickRangeRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.LiquidityPerTickRangeRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest',
    aminoType: 'osmosis/concentratedliquidity/liquidity-per-tick-range-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityPerTickRangeRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityPerTickRangeRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityPerTickRangeRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityPerTickRangeRequest();
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
        const message = createBaseLiquidityPerTickRangeRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLiquidityPerTickRangeRequest();
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
        return exports.LiquidityPerTickRangeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-per-tick-range-request',
            value: exports.LiquidityPerTickRangeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.LiquidityPerTickRangeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.LiquidityPerTickRangeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest',
            value: exports.LiquidityPerTickRangeRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.LiquidityPerTickRangeRequest.typeUrl, exports.LiquidityPerTickRangeRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LiquidityPerTickRangeRequest.aminoType, exports.LiquidityPerTickRangeRequest.typeUrl);
function createBaseLiquidityPerTickRangeResponse() {
    return {
        liquidity: [],
        bucketIndex: BigInt(0),
    };
}
exports.LiquidityPerTickRangeResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse',
    aminoType: 'osmosis/concentratedliquidity/liquidity-per-tick-range-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityPerTickRangeResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || exports.LiquidityDepthWithRange.is(o.liquidity[0])) &&
                    typeof o.bucketIndex === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityPerTickRangeResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length ||
                        exports.LiquidityDepthWithRange.isSDK(o.liquidity[0])) &&
                    typeof o.bucket_index === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.LiquidityPerTickRangeResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length ||
                        exports.LiquidityDepthWithRange.isAmino(o.liquidity[0])) &&
                    typeof o.bucket_index === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            exports.LiquidityDepthWithRange.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.bucketIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.bucketIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityPerTickRangeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(exports.LiquidityDepthWithRange.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.bucketIndex = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLiquidityPerTickRangeResponse();
        message.liquidity =
            object.liquidity?.map(e => exports.LiquidityDepthWithRange.fromPartial(e)) || [];
        message.bucketIndex =
            object.bucketIndex !== undefined && object.bucketIndex !== null
                ? BigInt(object.bucketIndex.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLiquidityPerTickRangeResponse();
        message.liquidity =
            object.liquidity?.map(e => exports.LiquidityDepthWithRange.fromAmino(e)) || [];
        if (object.bucket_index !== undefined && object.bucket_index !== null) {
            message.bucketIndex = BigInt(object.bucket_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? exports.LiquidityDepthWithRange.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        obj.bucket_index =
            message.bucketIndex !== BigInt(0)
                ? message.bucketIndex.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LiquidityPerTickRangeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-per-tick-range-response',
            value: exports.LiquidityPerTickRangeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.LiquidityPerTickRangeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.LiquidityPerTickRangeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse',
            value: exports.LiquidityPerTickRangeResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.LiquidityPerTickRangeResponse.typeUrl, exports.LiquidityPerTickRangeResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LiquidityPerTickRangeResponse.aminoType, exports.LiquidityPerTickRangeResponse.typeUrl);
function createBaseClaimableSpreadRewardsRequest() {
    return {
        positionId: BigInt(0),
    };
}
exports.ClaimableSpreadRewardsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest',
    aminoType: 'osmosis/concentratedliquidity/claimable-spread-rewards-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableSpreadRewardsRequest.typeUrl ||
                typeof o.positionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableSpreadRewardsRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableSpreadRewardsRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableSpreadRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimableSpreadRewardsRequest();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimableSpreadRewardsRequest();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimableSpreadRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-spread-rewards-request',
            value: exports.ClaimableSpreadRewardsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ClaimableSpreadRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimableSpreadRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest',
            value: exports.ClaimableSpreadRewardsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ClaimableSpreadRewardsRequest.typeUrl, exports.ClaimableSpreadRewardsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClaimableSpreadRewardsRequest.aminoType, exports.ClaimableSpreadRewardsRequest.typeUrl);
function createBaseClaimableSpreadRewardsResponse() {
    return {
        claimableSpreadRewards: [],
    };
}
exports.ClaimableSpreadRewardsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse',
    aminoType: 'osmosis/concentratedliquidity/claimable-spread-rewards-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.claimableSpreadRewards) &&
                    (!o.claimableSpreadRewards.length ||
                        coin_1.Coin.is(o.claimableSpreadRewards[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        coin_1.Coin.isSDK(o.claimable_spread_rewards[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        coin_1.Coin.isAmino(o.claimable_spread_rewards[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.claimableSpreadRewards) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableSpreadRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimableSpreadRewards.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimableSpreadRewardsResponse();
        message.claimableSpreadRewards =
            object.claimableSpreadRewards?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimableSpreadRewardsResponse();
        message.claimableSpreadRewards =
            object.claimable_spread_rewards?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claimableSpreadRewards) {
            obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_spread_rewards = message.claimableSpreadRewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimableSpreadRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-spread-rewards-response',
            value: exports.ClaimableSpreadRewardsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ClaimableSpreadRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimableSpreadRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse',
            value: exports.ClaimableSpreadRewardsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ClaimableSpreadRewardsResponse.typeUrl, exports.ClaimableSpreadRewardsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClaimableSpreadRewardsResponse.aminoType, exports.ClaimableSpreadRewardsResponse.typeUrl);
function createBaseClaimableIncentivesRequest() {
    return {
        positionId: BigInt(0),
    };
}
exports.ClaimableIncentivesRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest',
    aminoType: 'osmosis/concentratedliquidity/claimable-incentives-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableIncentivesRequest.typeUrl ||
                typeof o.positionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableIncentivesRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableIncentivesRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableIncentivesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimableIncentivesRequest();
        message.positionId =
            object.positionId !== undefined && object.positionId !== null
                ? BigInt(object.positionId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimableIncentivesRequest();
        if (object.position_id !== undefined && object.position_id !== null) {
            message.positionId = BigInt(object.position_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position_id =
            message.positionId !== BigInt(0)
                ? message.positionId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimableIncentivesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-incentives-request',
            value: exports.ClaimableIncentivesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ClaimableIncentivesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimableIncentivesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest',
            value: exports.ClaimableIncentivesRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ClaimableIncentivesRequest.typeUrl, exports.ClaimableIncentivesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClaimableIncentivesRequest.aminoType, exports.ClaimableIncentivesRequest.typeUrl);
function createBaseClaimableIncentivesResponse() {
    return {
        claimableIncentives: [],
        forfeitedIncentives: [],
    };
}
exports.ClaimableIncentivesResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse',
    aminoType: 'osmosis/concentratedliquidity/claimable-incentives-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableIncentivesResponse.typeUrl ||
                (Array.isArray(o.claimableIncentives) &&
                    (!o.claimableIncentives.length ||
                        coin_1.Coin.is(o.claimableIncentives[0])) &&
                    Array.isArray(o.forfeitedIncentives) &&
                    (!o.forfeitedIncentives.length || coin_1.Coin.is(o.forfeitedIncentives[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableIncentivesResponse.typeUrl ||
                (Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        coin_1.Coin.isSDK(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        coin_1.Coin.isSDK(o.forfeited_incentives[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.ClaimableIncentivesResponse.typeUrl ||
                (Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        coin_1.Coin.isAmino(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        coin_1.Coin.isAmino(o.forfeited_incentives[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.claimableIncentives) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableIncentivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimableIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.forfeitedIncentives.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimableIncentivesResponse();
        message.claimableIncentives =
            object.claimableIncentives?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.forfeitedIncentives =
            object.forfeitedIncentives?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimableIncentivesResponse();
        message.claimableIncentives =
            object.claimable_incentives?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.forfeitedIncentives =
            object.forfeited_incentives?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claimableIncentives) {
            obj.claimable_incentives = message.claimableIncentives.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_incentives = message.claimableIncentives;
        }
        if (message.forfeitedIncentives) {
            obj.forfeited_incentives = message.forfeitedIncentives.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.forfeited_incentives = message.forfeitedIncentives;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimableIncentivesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-incentives-response',
            value: exports.ClaimableIncentivesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.ClaimableIncentivesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimableIncentivesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse',
            value: exports.ClaimableIncentivesResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.ClaimableIncentivesResponse.typeUrl, exports.ClaimableIncentivesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClaimableIncentivesResponse.aminoType, exports.ClaimableIncentivesResponse.typeUrl);
function createBasePoolAccumulatorRewardsRequest() {
    return {
        poolId: BigInt(0),
    };
}
exports.PoolAccumulatorRewardsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest',
    aminoType: 'osmosis/concentratedliquidity/pool-accumulator-rewards-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAccumulatorRewardsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAccumulatorRewardsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAccumulatorRewardsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAccumulatorRewardsRequest();
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
        const message = createBasePoolAccumulatorRewardsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolAccumulatorRewardsRequest();
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
        return exports.PoolAccumulatorRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-accumulator-rewards-request',
            value: exports.PoolAccumulatorRewardsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolAccumulatorRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.PoolAccumulatorRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest',
            value: exports.PoolAccumulatorRewardsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolAccumulatorRewardsRequest.typeUrl, exports.PoolAccumulatorRewardsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolAccumulatorRewardsRequest.aminoType, exports.PoolAccumulatorRewardsRequest.typeUrl);
function createBasePoolAccumulatorRewardsResponse() {
    return {
        spreadRewardGrowthGlobal: [],
        uptimeGrowthGlobal: [],
    };
}
exports.PoolAccumulatorRewardsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse',
    aminoType: 'osmosis/concentratedliquidity/pool-accumulator-rewards-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAccumulatorRewardsResponse.typeUrl ||
                (Array.isArray(o.spreadRewardGrowthGlobal) &&
                    (!o.spreadRewardGrowthGlobal.length ||
                        coin_1.DecCoin.is(o.spreadRewardGrowthGlobal[0])) &&
                    Array.isArray(o.uptimeGrowthGlobal) &&
                    (!o.uptimeGrowthGlobal.length ||
                        tick_info_1.UptimeTracker.is(o.uptimeGrowthGlobal[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAccumulatorRewardsResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_global) &&
                    (!o.spread_reward_growth_global.length ||
                        coin_1.DecCoin.isSDK(o.spread_reward_growth_global[0])) &&
                    Array.isArray(o.uptime_growth_global) &&
                    (!o.uptime_growth_global.length ||
                        tick_info_1.UptimeTracker.isSDK(o.uptime_growth_global[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.PoolAccumulatorRewardsResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_global) &&
                    (!o.spread_reward_growth_global.length ||
                        coin_1.DecCoin.isAmino(o.spread_reward_growth_global[0])) &&
                    Array.isArray(o.uptime_growth_global) &&
                    (!o.uptime_growth_global.length ||
                        tick_info_1.UptimeTracker.isAmino(o.uptime_growth_global[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spreadRewardGrowthGlobal) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uptimeGrowthGlobal) {
            tick_info_1.UptimeTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAccumulatorRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spreadRewardGrowthGlobal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uptimeGrowthGlobal.push(tick_info_1.UptimeTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolAccumulatorRewardsResponse();
        message.spreadRewardGrowthGlobal =
            object.spreadRewardGrowthGlobal?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.uptimeGrowthGlobal =
            object.uptimeGrowthGlobal?.map(e => tick_info_1.UptimeTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolAccumulatorRewardsResponse();
        message.spreadRewardGrowthGlobal =
            object.spread_reward_growth_global?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        message.uptimeGrowthGlobal =
            object.uptime_growth_global?.map(e => tick_info_1.UptimeTracker.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spreadRewardGrowthGlobal) {
            obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal.map(e => (e ? coin_1.DecCoin.toAmino(e) : undefined));
        }
        else {
            obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal;
        }
        if (message.uptimeGrowthGlobal) {
            obj.uptime_growth_global = message.uptimeGrowthGlobal.map(e => e ? tick_info_1.UptimeTracker.toAmino(e) : undefined);
        }
        else {
            obj.uptime_growth_global = message.uptimeGrowthGlobal;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolAccumulatorRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-accumulator-rewards-response',
            value: exports.PoolAccumulatorRewardsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.PoolAccumulatorRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.PoolAccumulatorRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse',
            value: exports.PoolAccumulatorRewardsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.PoolAccumulatorRewardsResponse.typeUrl, exports.PoolAccumulatorRewardsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PoolAccumulatorRewardsResponse.aminoType, exports.PoolAccumulatorRewardsResponse.typeUrl);
function createBaseTickAccumulatorTrackersRequest() {
    return {
        poolId: BigInt(0),
        tickIndex: BigInt(0),
    };
}
exports.TickAccumulatorTrackersRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest',
    aminoType: 'osmosis/concentratedliquidity/tick-accumulator-trackers-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TickAccumulatorTrackersRequest.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.tickIndex === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TickAccumulatorTrackersRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.tick_index === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TickAccumulatorTrackersRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.tick_index === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickAccumulatorTrackersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tickIndex = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTickAccumulatorTrackersRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tickIndex =
            object.tickIndex !== undefined && object.tickIndex !== null
                ? BigInt(object.tickIndex.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickAccumulatorTrackersRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.tick_index !== undefined && object.tick_index !== null) {
            message.tickIndex = BigInt(object.tick_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.tick_index =
            message.tickIndex !== BigInt(0)
                ? message.tickIndex.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TickAccumulatorTrackersRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-accumulator-trackers-request',
            value: exports.TickAccumulatorTrackersRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TickAccumulatorTrackersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TickAccumulatorTrackersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest',
            value: exports.TickAccumulatorTrackersRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TickAccumulatorTrackersRequest.typeUrl, exports.TickAccumulatorTrackersRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TickAccumulatorTrackersRequest.aminoType, exports.TickAccumulatorTrackersRequest.typeUrl);
function createBaseTickAccumulatorTrackersResponse() {
    return {
        spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
        uptimeTrackers: [],
    };
}
exports.TickAccumulatorTrackersResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse',
    aminoType: 'osmosis/concentratedliquidity/tick-accumulator-trackers-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.TickAccumulatorTrackersResponse.typeUrl ||
                (Array.isArray(o.spreadRewardGrowthOppositeDirectionOfLastTraversal) &&
                    (!o.spreadRewardGrowthOppositeDirectionOfLastTraversal.length ||
                        coin_1.DecCoin.is(o.spreadRewardGrowthOppositeDirectionOfLastTraversal[0])) &&
                    Array.isArray(o.uptimeTrackers) &&
                    (!o.uptimeTrackers.length || tick_info_1.UptimeTracker.is(o.uptimeTrackers[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.TickAccumulatorTrackersResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        coin_1.DecCoin.isSDK(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    Array.isArray(o.uptime_trackers) &&
                    (!o.uptime_trackers.length ||
                        tick_info_1.UptimeTracker.isSDK(o.uptime_trackers[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.TickAccumulatorTrackersResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        coin_1.DecCoin.isAmino(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    Array.isArray(o.uptime_trackers) &&
                    (!o.uptime_trackers.length ||
                        tick_info_1.UptimeTracker.isAmino(o.uptime_trackers[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uptimeTrackers) {
            tick_info_1.UptimeTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickAccumulatorTrackersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uptimeTrackers.push(tick_info_1.UptimeTracker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTickAccumulatorTrackersResponse();
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.uptimeTrackers =
            object.uptimeTrackers?.map(e => tick_info_1.UptimeTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickAccumulatorTrackersResponse();
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        message.uptimeTrackers =
            object.uptime_trackers?.map(e => tick_info_1.UptimeTracker.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal;
        }
        if (message.uptimeTrackers) {
            obj.uptime_trackers = message.uptimeTrackers.map(e => e ? tick_info_1.UptimeTracker.toAmino(e) : undefined);
        }
        else {
            obj.uptime_trackers = message.uptimeTrackers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TickAccumulatorTrackersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-accumulator-trackers-response',
            value: exports.TickAccumulatorTrackersResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.TickAccumulatorTrackersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TickAccumulatorTrackersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse',
            value: exports.TickAccumulatorTrackersResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.TickAccumulatorTrackersResponse.typeUrl, exports.TickAccumulatorTrackersResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TickAccumulatorTrackersResponse.aminoType, exports.TickAccumulatorTrackersResponse.typeUrl);
function createBaseIncentiveRecordsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined,
    };
}
exports.IncentiveRecordsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest',
    aminoType: 'osmosis/concentratedliquidity/incentive-records-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecordsRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentiveRecordsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination
            ? pagination_1.PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentiveRecordsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/incentive-records-request',
            value: exports.IncentiveRecordsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.IncentiveRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.IncentiveRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest',
            value: exports.IncentiveRecordsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.IncentiveRecordsRequest.typeUrl, exports.IncentiveRecordsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IncentiveRecordsRequest.aminoType, exports.IncentiveRecordsRequest.typeUrl);
function createBaseIncentiveRecordsResponse() {
    return {
        incentiveRecords: [],
        pagination: undefined,
    };
}
exports.IncentiveRecordsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse',
    aminoType: 'osmosis/concentratedliquidity/incentive-records-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordsResponse.typeUrl ||
                (Array.isArray(o.incentiveRecords) &&
                    (!o.incentiveRecords.length ||
                        incentive_record_1.IncentiveRecord.is(o.incentiveRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordsResponse.typeUrl ||
                (Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        incentive_record_1.IncentiveRecord.isSDK(o.incentive_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.IncentiveRecordsResponse.typeUrl ||
                (Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        incentive_record_1.IncentiveRecord.isAmino(o.incentive_records[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.incentiveRecords) {
            incentive_record_1.IncentiveRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentiveRecords.push(incentive_record_1.IncentiveRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIncentiveRecordsResponse();
        message.incentiveRecords =
            object.incentiveRecords?.map(e => incentive_record_1.IncentiveRecord.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentiveRecordsResponse();
        message.incentiveRecords =
            object.incentive_records?.map(e => incentive_record_1.IncentiveRecord.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentiveRecords) {
            obj.incentive_records = message.incentiveRecords.map(e => e ? incentive_record_1.IncentiveRecord.toAmino(e) : undefined);
        }
        else {
            obj.incentive_records = message.incentiveRecords;
        }
        obj.pagination = message.pagination
            ? pagination_1.PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentiveRecordsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/incentive-records-response',
            value: exports.IncentiveRecordsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.IncentiveRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.IncentiveRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse',
            value: exports.IncentiveRecordsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.IncentiveRecordsResponse.typeUrl, exports.IncentiveRecordsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IncentiveRecordsResponse.aminoType, exports.IncentiveRecordsResponse.typeUrl);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest() {
    return {
        concentratedPoolId: BigInt(0),
    };
}
exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest',
    aminoType: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
                typeof o.concentratedPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.concentratedPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.concentratedPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.concentratedPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
        message.concentratedPoolId =
            object.concentratedPoolId !== undefined &&
                object.concentratedPoolId !== null
                ? BigInt(object.concentratedPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
        if (object.concentrated_pool_id !== undefined &&
            object.concentrated_pool_id !== null) {
            message.concentratedPoolId = BigInt(object.concentrated_pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.concentrated_pool_id =
            message.concentratedPoolId !== BigInt(0)
                ? message.concentratedPoolId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request',
            value: exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest',
            value: exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl, exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.aminoType, exports.CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse() {
    return {
        cfmmPoolId: BigInt(0),
    };
}
exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse',
    aminoType: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
                typeof o.cfmmPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cfmmPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.cfmmPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cfmmPoolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
        message.cfmmPoolId =
            object.cfmmPoolId !== undefined && object.cfmmPoolId !== null
                ? BigInt(object.cfmmPoolId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
        if (object.cfmm_pool_id !== undefined && object.cfmm_pool_id !== null) {
            message.cfmmPoolId = BigInt(object.cfmm_pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cfmm_pool_id =
            message.cfmmPoolId !== BigInt(0)
                ? message.cfmmPoolId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response',
            value: exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse',
            value: exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl, exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.aminoType, exports.CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl);
function createBaseUserUnbondingPositionsRequest() {
    return {
        address: '',
    };
}
exports.UserUnbondingPositionsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest',
    aminoType: 'osmosis/concentratedliquidity/user-unbonding-positions-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UserUnbondingPositionsRequest.typeUrl ||
                typeof o.address === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UserUnbondingPositionsRequest.typeUrl ||
                typeof o.address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UserUnbondingPositionsRequest.typeUrl ||
                typeof o.address === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserUnbondingPositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserUnbondingPositionsRequest();
        message.address = object.address ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserUnbondingPositionsRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === '' ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UserUnbondingPositionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-unbonding-positions-request',
            value: exports.UserUnbondingPositionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UserUnbondingPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UserUnbondingPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest',
            value: exports.UserUnbondingPositionsRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UserUnbondingPositionsRequest.typeUrl, exports.UserUnbondingPositionsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UserUnbondingPositionsRequest.aminoType, exports.UserUnbondingPositionsRequest.typeUrl);
function createBaseUserUnbondingPositionsResponse() {
    return {
        positionsWithPeriodLock: [],
    };
}
exports.UserUnbondingPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/user-unbonding-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.UserUnbondingPositionsResponse.typeUrl ||
                (Array.isArray(o.positionsWithPeriodLock) &&
                    (!o.positionsWithPeriodLock.length ||
                        position_1.PositionWithPeriodLock.is(o.positionsWithPeriodLock[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.UserUnbondingPositionsResponse.typeUrl ||
                (Array.isArray(o.positions_with_period_lock) &&
                    (!o.positions_with_period_lock.length ||
                        position_1.PositionWithPeriodLock.isSDK(o.positions_with_period_lock[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.UserUnbondingPositionsResponse.typeUrl ||
                (Array.isArray(o.positions_with_period_lock) &&
                    (!o.positions_with_period_lock.length ||
                        position_1.PositionWithPeriodLock.isAmino(o.positions_with_period_lock[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.positionsWithPeriodLock) {
            position_1.PositionWithPeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserUnbondingPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionsWithPeriodLock.push(position_1.PositionWithPeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUserUnbondingPositionsResponse();
        message.positionsWithPeriodLock =
            object.positionsWithPeriodLock?.map(e => position_1.PositionWithPeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserUnbondingPositionsResponse();
        message.positionsWithPeriodLock =
            object.positions_with_period_lock?.map(e => position_1.PositionWithPeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positionsWithPeriodLock) {
            obj.positions_with_period_lock = message.positionsWithPeriodLock.map(e => e ? position_1.PositionWithPeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.positions_with_period_lock = message.positionsWithPeriodLock;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UserUnbondingPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-unbonding-positions-response',
            value: exports.UserUnbondingPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.UserUnbondingPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UserUnbondingPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse',
            value: exports.UserUnbondingPositionsResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.UserUnbondingPositionsResponse.typeUrl, exports.UserUnbondingPositionsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UserUnbondingPositionsResponse.aminoType, exports.UserUnbondingPositionsResponse.typeUrl);
function createBaseGetTotalLiquidityRequest() {
    return {};
}
exports.GetTotalLiquidityRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest',
    aminoType: 'osmosis/concentratedliquidity/get-total-liquidity-request',
    is(o) {
        return o && o.$typeUrl === exports.GetTotalLiquidityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.GetTotalLiquidityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.GetTotalLiquidityRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalLiquidityRequest();
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
        const message = createBaseGetTotalLiquidityRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetTotalLiquidityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/get-total-liquidity-request',
            value: exports.GetTotalLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest',
            value: exports.GetTotalLiquidityRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetTotalLiquidityRequest.typeUrl, exports.GetTotalLiquidityRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTotalLiquidityRequest.aminoType, exports.GetTotalLiquidityRequest.typeUrl);
function createBaseGetTotalLiquidityResponse() {
    return {
        totalLiquidity: [],
    };
}
exports.GetTotalLiquidityResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse',
    aminoType: 'osmosis/concentratedliquidity/get-total-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.totalLiquidity) &&
                    (!o.totalLiquidity.length || coin_1.Coin.is(o.totalLiquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.total_liquidity) &&
                    (!o.total_liquidity.length || coin_1.Coin.isSDK(o.total_liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GetTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.total_liquidity) &&
                    (!o.total_liquidity.length || coin_1.Coin.isAmino(o.total_liquidity[0])))));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.totalLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGetTotalLiquidityResponse();
        message.totalLiquidity =
            object.totalLiquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTotalLiquidityResponse();
        message.totalLiquidity =
            object.total_liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.totalLiquidity) {
            obj.total_liquidity = message.totalLiquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_liquidity = message.totalLiquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/get-total-liquidity-response',
            value: exports.GetTotalLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GetTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse',
            value: exports.GetTotalLiquidityResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GetTotalLiquidityResponse.typeUrl, exports.GetTotalLiquidityResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GetTotalLiquidityResponse.aminoType, exports.GetTotalLiquidityResponse.typeUrl);
function createBaseNumNextInitializedTicksRequest() {
    return {
        poolId: BigInt(0),
        tokenInDenom: '',
        numNextInitializedTicks: BigInt(0),
    };
}
exports.NumNextInitializedTicksRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest',
    aminoType: 'osmosis/concentratedliquidity/num-next-initialized-ticks-request',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.NumNextInitializedTicksRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.numNextInitializedTicks === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.NumNextInitializedTicksRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.num_next_initialized_ticks === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.NumNextInitializedTicksRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.num_next_initialized_ticks === 'bigint')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== '') {
            writer.uint32(18).string(message.tokenInDenom);
        }
        if (message.numNextInitializedTicks !== BigInt(0)) {
            writer.uint32(24).uint64(message.numNextInitializedTicks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumNextInitializedTicksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                case 3:
                    message.numNextInitializedTicks = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNumNextInitializedTicksRequest();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? BigInt(object.poolId.toString())
                : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? '';
        message.numNextInitializedTicks =
            object.numNextInitializedTicks !== undefined &&
                object.numNextInitializedTicks !== null
                ? BigInt(object.numNextInitializedTicks.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNumNextInitializedTicksRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.num_next_initialized_ticks !== undefined &&
            object.num_next_initialized_ticks !== null) {
            message.numNextInitializedTicks = BigInt(object.num_next_initialized_ticks);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.token_in_denom =
            message.tokenInDenom === '' ? undefined : message.tokenInDenom;
        obj.num_next_initialized_ticks =
            message.numNextInitializedTicks !== BigInt(0)
                ? message.numNextInitializedTicks.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NumNextInitializedTicksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-next-initialized-ticks-request',
            value: exports.NumNextInitializedTicksRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.NumNextInitializedTicksRequest.decode(message.value);
    },
    toProto(message) {
        return exports.NumNextInitializedTicksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest',
            value: exports.NumNextInitializedTicksRequest.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.NumNextInitializedTicksRequest.typeUrl, exports.NumNextInitializedTicksRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NumNextInitializedTicksRequest.aminoType, exports.NumNextInitializedTicksRequest.typeUrl);
function createBaseNumNextInitializedTicksResponse() {
    return {
        liquidityDepths: [],
        currentTick: BigInt(0),
        currentLiquidity: '',
    };
}
exports.NumNextInitializedTicksResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse',
    aminoType: 'osmosis/concentratedliquidity/num-next-initialized-ticks-response',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.NumNextInitializedTicksResponse.typeUrl ||
                (Array.isArray(o.liquidityDepths) &&
                    (!o.liquidityDepths.length ||
                        exports.TickLiquidityNet.is(o.liquidityDepths[0])) &&
                    typeof o.currentTick === 'bigint' &&
                    typeof o.currentLiquidity === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.NumNextInitializedTicksResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        exports.TickLiquidityNet.isSDK(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.NumNextInitializedTicksResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        exports.TickLiquidityNet.isAmino(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidityDepths) {
            exports.TickLiquidityNet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentTick !== BigInt(0)) {
            writer.uint32(16).int64(message.currentTick);
        }
        if (message.currentLiquidity !== '') {
            writer
                .uint32(26)
                .string(math_1.Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumNextInitializedTicksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityDepths.push(exports.TickLiquidityNet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.currentTick = reader.int64();
                    break;
                case 3:
                    message.currentLiquidity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNumNextInitializedTicksResponse();
        message.liquidityDepths =
            object.liquidityDepths?.map(e => exports.TickLiquidityNet.fromPartial(e)) || [];
        message.currentTick =
            object.currentTick !== undefined && object.currentTick !== null
                ? BigInt(object.currentTick.toString())
                : BigInt(0);
        message.currentLiquidity = object.currentLiquidity ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseNumNextInitializedTicksResponse();
        message.liquidityDepths =
            object.liquidity_depths?.map(e => exports.TickLiquidityNet.fromAmino(e)) || [];
        if (object.current_tick !== undefined && object.current_tick !== null) {
            message.currentTick = BigInt(object.current_tick);
        }
        if (object.current_liquidity !== undefined &&
            object.current_liquidity !== null) {
            message.currentLiquidity = object.current_liquidity;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidityDepths) {
            obj.liquidity_depths = message.liquidityDepths.map(e => e ? exports.TickLiquidityNet.toAmino(e) : undefined);
        }
        else {
            obj.liquidity_depths = message.liquidityDepths;
        }
        obj.current_tick =
            message.currentTick !== BigInt(0)
                ? message.currentTick.toString()
                : undefined;
        obj.current_liquidity =
            message.currentLiquidity === '' ? undefined : message.currentLiquidity;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NumNextInitializedTicksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-next-initialized-ticks-response',
            value: exports.NumNextInitializedTicksResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.NumNextInitializedTicksResponse.decode(message.value);
    },
    toProto(message) {
        return exports.NumNextInitializedTicksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse',
            value: exports.NumNextInitializedTicksResponse.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.NumNextInitializedTicksResponse.typeUrl, exports.NumNextInitializedTicksResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NumNextInitializedTicksResponse.aminoType, exports.NumNextInitializedTicksResponse.typeUrl);
