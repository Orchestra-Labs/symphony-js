//@ts-nocheck
import { PageRequest, PageResponse, } from '../../../cosmos/base/query/v1beta1/pagination';
import { FullPositionBreakdown, PositionWithPeriodLock, } from './position';
import { Any, } from '../../../google/protobuf/any';
import { Params } from '../params';
import { Coin, DecCoin, } from '../../../cosmos/base/v1beta1/coin';
import { UptimeTracker, } from './tick_info';
import { IncentiveRecord, } from './incentive_record';
import { Pool as Pool1 } from './pool';
import { CosmWasmPool, } from '../../cosmwasmpool/v1beta1/model/pool';
import { Pool as Pool2 } from '../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import { Pool as Pool3 } from '../../gamm/v1beta1/balancerPool';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseUserPositionsRequest() {
    return {
        address: '',
        poolId: BigInt(0),
        pagination: undefined,
    };
}
export const UserPositionsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest',
    aminoType: 'osmosis/concentratedliquidity/user-positions-request',
    is(o) {
        return (o &&
            (o.$typeUrl === UserPositionsRequest.typeUrl ||
                (typeof o.address === 'string' && typeof o.poolId === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UserPositionsRequest.typeUrl ||
                (typeof o.address === 'string' && typeof o.pool_id === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UserPositionsRequest.typeUrl ||
                (typeof o.address === 'string' && typeof o.pool_id === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
                ? PageRequest.fromPartial(object.pagination)
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
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === '' ? undefined : message.address;
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UserPositionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-positions-request',
            value: UserPositionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return UserPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest',
            value: UserPositionsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserPositionsRequest.typeUrl, UserPositionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UserPositionsRequest.aminoType, UserPositionsRequest.typeUrl);
function createBaseUserPositionsResponse() {
    return {
        positions: [],
        pagination: undefined,
    };
}
export const UserPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/user-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === UserPositionsResponse.typeUrl ||
                (Array.isArray(o.positions) &&
                    (!o.positions.length || FullPositionBreakdown.is(o.positions[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UserPositionsResponse.typeUrl ||
                (Array.isArray(o.positions) &&
                    (!o.positions.length || FullPositionBreakdown.isSDK(o.positions[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UserPositionsResponse.typeUrl ||
                (Array.isArray(o.positions) &&
                    (!o.positions.length ||
                        FullPositionBreakdown.isAmino(o.positions[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.positions) {
            FullPositionBreakdown.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positions.push(FullPositionBreakdown.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            object.positions?.map(e => FullPositionBreakdown.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserPositionsResponse();
        message.positions =
            object.positions?.map(e => FullPositionBreakdown.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positions) {
            obj.positions = message.positions.map(e => e ? FullPositionBreakdown.toAmino(e) : undefined);
        }
        else {
            obj.positions = message.positions;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UserPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-positions-response',
            value: UserPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return UserPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse',
            value: UserPositionsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserPositionsResponse.typeUrl, UserPositionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UserPositionsResponse.aminoType, UserPositionsResponse.typeUrl);
function createBasePositionByIdRequest() {
    return {
        positionId: BigInt(0),
    };
}
export const PositionByIdRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest',
    aminoType: 'osmosis/concentratedliquidity/position-by-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === PositionByIdRequest.typeUrl ||
                typeof o.positionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PositionByIdRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PositionByIdRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return PositionByIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-by-id-request',
            value: PositionByIdRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PositionByIdRequest.decode(message.value);
    },
    toProto(message) {
        return PositionByIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest',
            value: PositionByIdRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PositionByIdRequest.typeUrl, PositionByIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionByIdRequest.aminoType, PositionByIdRequest.typeUrl);
function createBasePositionByIdResponse() {
    return {
        position: FullPositionBreakdown.fromPartial({}),
    };
}
export const PositionByIdResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse',
    aminoType: 'osmosis/concentratedliquidity/position-by-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === PositionByIdResponse.typeUrl ||
                FullPositionBreakdown.is(o.position)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PositionByIdResponse.typeUrl ||
                FullPositionBreakdown.isSDK(o.position)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PositionByIdResponse.typeUrl ||
                FullPositionBreakdown.isAmino(o.position)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.position !== undefined) {
            FullPositionBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = FullPositionBreakdown.decode(reader, reader.uint32());
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
                ? FullPositionBreakdown.fromPartial(object.position)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionByIdResponse();
        if (object.position !== undefined && object.position !== null) {
            message.position = FullPositionBreakdown.fromAmino(object.position);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position
            ? FullPositionBreakdown.toAmino(message.position)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PositionByIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/position-by-id-response',
            value: PositionByIdResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PositionByIdResponse.decode(message.value);
    },
    toProto(message) {
        return PositionByIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse',
            value: PositionByIdResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PositionByIdResponse.typeUrl, PositionByIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionByIdResponse.aminoType, PositionByIdResponse.typeUrl);
function createBaseNumPoolPositionsRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const NumPoolPositionsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest',
    aminoType: 'osmosis/concentratedliquidity/num-pool-positions-request',
    is(o) {
        return (o &&
            (o.$typeUrl === NumPoolPositionsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === NumPoolPositionsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === NumPoolPositionsRequest.typeUrl ||
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
        return NumPoolPositionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-pool-positions-request',
            value: NumPoolPositionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NumPoolPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return NumPoolPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest',
            value: NumPoolPositionsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NumPoolPositionsRequest.typeUrl, NumPoolPositionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolPositionsRequest.aminoType, NumPoolPositionsRequest.typeUrl);
function createBaseNumPoolPositionsResponse() {
    return {
        positionCount: BigInt(0),
    };
}
export const NumPoolPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/num-pool-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === NumPoolPositionsResponse.typeUrl ||
                typeof o.positionCount === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === NumPoolPositionsResponse.typeUrl ||
                typeof o.position_count === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === NumPoolPositionsResponse.typeUrl ||
                typeof o.position_count === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.positionCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return NumPoolPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-pool-positions-response',
            value: NumPoolPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NumPoolPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return NumPoolPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse',
            value: NumPoolPositionsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NumPoolPositionsResponse.typeUrl, NumPoolPositionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolPositionsResponse.aminoType, NumPoolPositionsResponse.typeUrl);
function createBasePoolsRequest() {
    return {
        pagination: undefined,
    };
}
export const PoolsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsRequest',
    aminoType: 'osmosis/concentratedliquidity/pools-request',
    is(o) {
        return o && o.$typeUrl === PoolsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === PoolsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === PoolsRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pools-request',
            value: PoolsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolsRequest.decode(message.value);
    },
    toProto(message) {
        return PoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsRequest',
            value: PoolsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolsRequest.typeUrl, PoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsRequest.aminoType, PoolsRequest.typeUrl);
function createBasePoolsResponse() {
    return {
        pools: [],
        pagination: undefined,
    };
}
export const PoolsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsResponse',
    aminoType: 'osmosis/concentratedliquidity/pools-response',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.is(o.pools[0]) ||
                        CosmWasmPool.is(o.pools[0]) ||
                        Pool2.is(o.pools[0]) ||
                        Pool3.is(o.pools[0]) ||
                        Any.is(o.pools[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isSDK(o.pools[0]) ||
                        CosmWasmPool.isSDK(o.pools[0]) ||
                        Pool2.isSDK(o.pools[0]) ||
                        Pool3.isSDK(o.pools[0]) ||
                        Any.isSDK(o.pools[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolsResponse.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isAmino(o.pools[0]) ||
                        CosmWasmPool.isAmino(o.pools[0]) ||
                        Pool2.isAmino(o.pools[0]) ||
                        Pool3.isAmino(o.pools[0]) ||
                        Any.isAmino(o.pools[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolsResponse();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pools-response',
            value: PoolsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolsResponse.decode(message.value);
    },
    toProto(message) {
        return PoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolsResponse',
            value: PoolsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolsResponse.typeUrl, PoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsResponse.aminoType, PoolsResponse.typeUrl);
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsRequest',
    aminoType: 'osmosis/concentratedliquidity/params-request',
    is(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ParamsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/params-request',
            value: ParamsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsRequest',
            value: ParamsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const ParamsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsResponse',
    aminoType: 'osmosis/concentratedliquidity/params-response',
    is(o) {
        return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params)));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/params-response',
            value: ParamsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ParamsResponse',
            value: ParamsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBaseTickLiquidityNet() {
    return {
        liquidityNet: '',
        tickIndex: BigInt(0),
    };
}
export const TickLiquidityNet = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet',
    aminoType: 'osmosis/concentratedliquidity/tick-liquidity-net',
    is(o) {
        return (o &&
            (o.$typeUrl === TickLiquidityNet.typeUrl ||
                (typeof o.liquidityNet === 'string' && typeof o.tickIndex === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TickLiquidityNet.typeUrl ||
                (typeof o.liquidity_net === 'string' &&
                    typeof o.tick_index === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TickLiquidityNet.typeUrl ||
                (typeof o.liquidity_net === 'string' &&
                    typeof o.tick_index === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.liquidityNet !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickLiquidityNet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityNet = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return TickLiquidityNet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-liquidity-net',
            value: TickLiquidityNet.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TickLiquidityNet.decode(message.value);
    },
    toProto(message) {
        return TickLiquidityNet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet',
            value: TickLiquidityNet.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TickLiquidityNet.typeUrl, TickLiquidityNet);
GlobalDecoderRegistry.registerAminoProtoMapping(TickLiquidityNet.aminoType, TickLiquidityNet.typeUrl);
function createBaseLiquidityDepthWithRange() {
    return {
        liquidityAmount: '',
        lowerTick: BigInt(0),
        upperTick: BigInt(0),
    };
}
export const LiquidityDepthWithRange = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange',
    aminoType: 'osmosis/concentratedliquidity/liquidity-depth-with-range',
    is(o) {
        return (o &&
            (o.$typeUrl === LiquidityDepthWithRange.typeUrl ||
                (typeof o.liquidityAmount === 'string' &&
                    typeof o.lowerTick === 'bigint' &&
                    typeof o.upperTick === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LiquidityDepthWithRange.typeUrl ||
                (typeof o.liquidity_amount === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LiquidityDepthWithRange.typeUrl ||
                (typeof o.liquidity_amount === 'string' &&
                    typeof o.lower_tick === 'bigint' &&
                    typeof o.upper_tick === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.liquidityAmount !== '') {
            writer
                .uint32(10)
                .string(Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityDepthWithRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityAmount = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return LiquidityDepthWithRange.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-depth-with-range',
            value: LiquidityDepthWithRange.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LiquidityDepthWithRange.decode(message.value);
    },
    toProto(message) {
        return LiquidityDepthWithRange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange',
            value: LiquidityDepthWithRange.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LiquidityDepthWithRange.typeUrl, LiquidityDepthWithRange);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityDepthWithRange.aminoType, LiquidityDepthWithRange.typeUrl);
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
export const LiquidityNetInDirectionRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest',
    aminoType: 'osmosis/concentratedliquidity/liquidity-net-in-direction-request',
    is(o) {
        return (o &&
            (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenIn === 'string' &&
                    typeof o.startTick === 'bigint' &&
                    typeof o.useCurTick === 'boolean' &&
                    typeof o.boundTick === 'bigint' &&
                    typeof o.useNoBound === 'boolean')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.start_tick === 'bigint' &&
                    typeof o.use_cur_tick === 'boolean' &&
                    typeof o.bound_tick === 'bigint' &&
                    typeof o.use_no_bound === 'boolean')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in === 'string' &&
                    typeof o.start_tick === 'bigint' &&
                    typeof o.use_cur_tick === 'boolean' &&
                    typeof o.bound_tick === 'bigint' &&
                    typeof o.use_no_bound === 'boolean')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return LiquidityNetInDirectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-net-in-direction-request',
            value: LiquidityNetInDirectionRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LiquidityNetInDirectionRequest.decode(message.value);
    },
    toProto(message) {
        return LiquidityNetInDirectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest',
            value: LiquidityNetInDirectionRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LiquidityNetInDirectionRequest.typeUrl, LiquidityNetInDirectionRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityNetInDirectionRequest.aminoType, LiquidityNetInDirectionRequest.typeUrl);
function createBaseLiquidityNetInDirectionResponse() {
    return {
        liquidityDepths: [],
        currentTick: BigInt(0),
        currentLiquidity: '',
        currentSqrtPrice: '',
    };
}
export const LiquidityNetInDirectionResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse',
    aminoType: 'osmosis/concentratedliquidity/liquidity-net-in-direction-response',
    is(o) {
        return (o &&
            (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl ||
                (Array.isArray(o.liquidityDepths) &&
                    (!o.liquidityDepths.length ||
                        TickLiquidityNet.is(o.liquidityDepths[0])) &&
                    typeof o.currentTick === 'bigint' &&
                    typeof o.currentLiquidity === 'string' &&
                    typeof o.currentSqrtPrice === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        TickLiquidityNet.isSDK(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string' &&
                    typeof o.current_sqrt_price === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        TickLiquidityNet.isAmino(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string' &&
                    typeof o.current_sqrt_price === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidityDepths) {
            TickLiquidityNet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentTick !== BigInt(0)) {
            writer.uint32(16).int64(message.currentTick);
        }
        if (message.currentLiquidity !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
        }
        if (message.currentSqrtPrice !== '') {
            writer.uint32(34).string(message.currentSqrtPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityNetInDirectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.currentTick = reader.int64();
                    break;
                case 3:
                    message.currentLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
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
            object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
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
            object.liquidity_depths?.map(e => TickLiquidityNet.fromAmino(e)) || [];
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
            obj.liquidity_depths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toAmino(e) : undefined);
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
        return LiquidityNetInDirectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-net-in-direction-response',
            value: LiquidityNetInDirectionResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LiquidityNetInDirectionResponse.decode(message.value);
    },
    toProto(message) {
        return LiquidityNetInDirectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse',
            value: LiquidityNetInDirectionResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LiquidityNetInDirectionResponse.typeUrl, LiquidityNetInDirectionResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityNetInDirectionResponse.aminoType, LiquidityNetInDirectionResponse.typeUrl);
function createBaseLiquidityPerTickRangeRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const LiquidityPerTickRangeRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest',
    aminoType: 'osmosis/concentratedliquidity/liquidity-per-tick-range-request',
    is(o) {
        return (o &&
            (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl ||
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
        return LiquidityPerTickRangeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-per-tick-range-request',
            value: LiquidityPerTickRangeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LiquidityPerTickRangeRequest.decode(message.value);
    },
    toProto(message) {
        return LiquidityPerTickRangeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest',
            value: LiquidityPerTickRangeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LiquidityPerTickRangeRequest.typeUrl, LiquidityPerTickRangeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityPerTickRangeRequest.aminoType, LiquidityPerTickRangeRequest.typeUrl);
function createBaseLiquidityPerTickRangeResponse() {
    return {
        liquidity: [],
        bucketIndex: BigInt(0),
    };
}
export const LiquidityPerTickRangeResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse',
    aminoType: 'osmosis/concentratedliquidity/liquidity-per-tick-range-response',
    is(o) {
        return (o &&
            (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length || LiquidityDepthWithRange.is(o.liquidity[0])) &&
                    typeof o.bucketIndex === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length ||
                        LiquidityDepthWithRange.isSDK(o.liquidity[0])) &&
                    typeof o.bucket_index === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl ||
                (Array.isArray(o.liquidity) &&
                    (!o.liquidity.length ||
                        LiquidityDepthWithRange.isAmino(o.liquidity[0])) &&
                    typeof o.bucket_index === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            LiquidityDepthWithRange.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.bucketIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.bucketIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidityPerTickRangeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(LiquidityDepthWithRange.decode(reader, reader.uint32()));
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
            object.liquidity?.map(e => LiquidityDepthWithRange.fromPartial(e)) || [];
        message.bucketIndex =
            object.bucketIndex !== undefined && object.bucketIndex !== null
                ? BigInt(object.bucketIndex.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLiquidityPerTickRangeResponse();
        message.liquidity =
            object.liquidity?.map(e => LiquidityDepthWithRange.fromAmino(e)) || [];
        if (object.bucket_index !== undefined && object.bucket_index !== null) {
            message.bucketIndex = BigInt(object.bucket_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? LiquidityDepthWithRange.toAmino(e) : undefined);
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
        return LiquidityPerTickRangeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/liquidity-per-tick-range-response',
            value: LiquidityPerTickRangeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return LiquidityPerTickRangeResponse.decode(message.value);
    },
    toProto(message) {
        return LiquidityPerTickRangeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse',
            value: LiquidityPerTickRangeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(LiquidityPerTickRangeResponse.typeUrl, LiquidityPerTickRangeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityPerTickRangeResponse.aminoType, LiquidityPerTickRangeResponse.typeUrl);
function createBaseClaimableSpreadRewardsRequest() {
    return {
        positionId: BigInt(0),
    };
}
export const ClaimableSpreadRewardsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest',
    aminoType: 'osmosis/concentratedliquidity/claimable-spread-rewards-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl ||
                typeof o.positionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ClaimableSpreadRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-spread-rewards-request',
            value: ClaimableSpreadRewardsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ClaimableSpreadRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return ClaimableSpreadRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest',
            value: ClaimableSpreadRewardsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ClaimableSpreadRewardsRequest.typeUrl, ClaimableSpreadRewardsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableSpreadRewardsRequest.aminoType, ClaimableSpreadRewardsRequest.typeUrl);
function createBaseClaimableSpreadRewardsResponse() {
    return {
        claimableSpreadRewards: [],
    };
}
export const ClaimableSpreadRewardsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse',
    aminoType: 'osmosis/concentratedliquidity/claimable-spread-rewards-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.claimableSpreadRewards) &&
                    (!o.claimableSpreadRewards.length ||
                        Coin.is(o.claimableSpreadRewards[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        Coin.isSDK(o.claimable_spread_rewards[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl ||
                (Array.isArray(o.claimable_spread_rewards) &&
                    (!o.claimable_spread_rewards.length ||
                        Coin.isAmino(o.claimable_spread_rewards[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.claimableSpreadRewards) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableSpreadRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimableSpreadRewards.push(Coin.decode(reader, reader.uint32()));
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
            object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimableSpreadRewardsResponse();
        message.claimableSpreadRewards =
            object.claimable_spread_rewards?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claimableSpreadRewards) {
            obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_spread_rewards = message.claimableSpreadRewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClaimableSpreadRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-spread-rewards-response',
            value: ClaimableSpreadRewardsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ClaimableSpreadRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return ClaimableSpreadRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse',
            value: ClaimableSpreadRewardsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ClaimableSpreadRewardsResponse.typeUrl, ClaimableSpreadRewardsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableSpreadRewardsResponse.aminoType, ClaimableSpreadRewardsResponse.typeUrl);
function createBaseClaimableIncentivesRequest() {
    return {
        positionId: BigInt(0),
    };
}
export const ClaimableIncentivesRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest',
    aminoType: 'osmosis/concentratedliquidity/claimable-incentives-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ClaimableIncentivesRequest.typeUrl ||
                typeof o.positionId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ClaimableIncentivesRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ClaimableIncentivesRequest.typeUrl ||
                typeof o.position_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.positionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.positionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ClaimableIncentivesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-incentives-request',
            value: ClaimableIncentivesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ClaimableIncentivesRequest.decode(message.value);
    },
    toProto(message) {
        return ClaimableIncentivesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest',
            value: ClaimableIncentivesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ClaimableIncentivesRequest.typeUrl, ClaimableIncentivesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableIncentivesRequest.aminoType, ClaimableIncentivesRequest.typeUrl);
function createBaseClaimableIncentivesResponse() {
    return {
        claimableIncentives: [],
        forfeitedIncentives: [],
    };
}
export const ClaimableIncentivesResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse',
    aminoType: 'osmosis/concentratedliquidity/claimable-incentives-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ClaimableIncentivesResponse.typeUrl ||
                (Array.isArray(o.claimableIncentives) &&
                    (!o.claimableIncentives.length ||
                        Coin.is(o.claimableIncentives[0])) &&
                    Array.isArray(o.forfeitedIncentives) &&
                    (!o.forfeitedIncentives.length || Coin.is(o.forfeitedIncentives[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ClaimableIncentivesResponse.typeUrl ||
                (Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        Coin.isSDK(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        Coin.isSDK(o.forfeited_incentives[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ClaimableIncentivesResponse.typeUrl ||
                (Array.isArray(o.claimable_incentives) &&
                    (!o.claimable_incentives.length ||
                        Coin.isAmino(o.claimable_incentives[0])) &&
                    Array.isArray(o.forfeited_incentives) &&
                    (!o.forfeited_incentives.length ||
                        Coin.isAmino(o.forfeited_incentives[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.claimableIncentives) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.forfeitedIncentives) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimableIncentivesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimableIncentives.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
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
            object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
        message.forfeitedIncentives =
            object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimableIncentivesResponse();
        message.claimableIncentives =
            object.claimable_incentives?.map(e => Coin.fromAmino(e)) || [];
        message.forfeitedIncentives =
            object.forfeited_incentives?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claimableIncentives) {
            obj.claimable_incentives = message.claimableIncentives.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_incentives = message.claimableIncentives;
        }
        if (message.forfeitedIncentives) {
            obj.forfeited_incentives = message.forfeitedIncentives.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.forfeited_incentives = message.forfeitedIncentives;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClaimableIncentivesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/claimable-incentives-response',
            value: ClaimableIncentivesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ClaimableIncentivesResponse.decode(message.value);
    },
    toProto(message) {
        return ClaimableIncentivesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse',
            value: ClaimableIncentivesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ClaimableIncentivesResponse.typeUrl, ClaimableIncentivesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableIncentivesResponse.aminoType, ClaimableIncentivesResponse.typeUrl);
function createBasePoolAccumulatorRewardsRequest() {
    return {
        poolId: BigInt(0),
    };
}
export const PoolAccumulatorRewardsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest',
    aminoType: 'osmosis/concentratedliquidity/pool-accumulator-rewards-request',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl ||
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
        return PoolAccumulatorRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-accumulator-rewards-request',
            value: PoolAccumulatorRewardsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolAccumulatorRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return PoolAccumulatorRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest',
            value: PoolAccumulatorRewardsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolAccumulatorRewardsRequest.typeUrl, PoolAccumulatorRewardsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolAccumulatorRewardsRequest.aminoType, PoolAccumulatorRewardsRequest.typeUrl);
function createBasePoolAccumulatorRewardsResponse() {
    return {
        spreadRewardGrowthGlobal: [],
        uptimeGrowthGlobal: [],
    };
}
export const PoolAccumulatorRewardsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse',
    aminoType: 'osmosis/concentratedliquidity/pool-accumulator-rewards-response',
    is(o) {
        return (o &&
            (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl ||
                (Array.isArray(o.spreadRewardGrowthGlobal) &&
                    (!o.spreadRewardGrowthGlobal.length ||
                        DecCoin.is(o.spreadRewardGrowthGlobal[0])) &&
                    Array.isArray(o.uptimeGrowthGlobal) &&
                    (!o.uptimeGrowthGlobal.length ||
                        UptimeTracker.is(o.uptimeGrowthGlobal[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_global) &&
                    (!o.spread_reward_growth_global.length ||
                        DecCoin.isSDK(o.spread_reward_growth_global[0])) &&
                    Array.isArray(o.uptime_growth_global) &&
                    (!o.uptime_growth_global.length ||
                        UptimeTracker.isSDK(o.uptime_growth_global[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_global) &&
                    (!o.spread_reward_growth_global.length ||
                        DecCoin.isAmino(o.spread_reward_growth_global[0])) &&
                    Array.isArray(o.uptime_growth_global) &&
                    (!o.uptime_growth_global.length ||
                        UptimeTracker.isAmino(o.uptime_growth_global[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.spreadRewardGrowthGlobal) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uptimeGrowthGlobal) {
            UptimeTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAccumulatorRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spreadRewardGrowthGlobal.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uptimeGrowthGlobal.push(UptimeTracker.decode(reader, reader.uint32()));
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
            object.spreadRewardGrowthGlobal?.map(e => DecCoin.fromPartial(e)) || [];
        message.uptimeGrowthGlobal =
            object.uptimeGrowthGlobal?.map(e => UptimeTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolAccumulatorRewardsResponse();
        message.spreadRewardGrowthGlobal =
            object.spread_reward_growth_global?.map(e => DecCoin.fromAmino(e)) || [];
        message.uptimeGrowthGlobal =
            object.uptime_growth_global?.map(e => UptimeTracker.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spreadRewardGrowthGlobal) {
            obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal.map(e => (e ? DecCoin.toAmino(e) : undefined));
        }
        else {
            obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal;
        }
        if (message.uptimeGrowthGlobal) {
            obj.uptime_growth_global = message.uptimeGrowthGlobal.map(e => e ? UptimeTracker.toAmino(e) : undefined);
        }
        else {
            obj.uptime_growth_global = message.uptimeGrowthGlobal;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PoolAccumulatorRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/pool-accumulator-rewards-response',
            value: PoolAccumulatorRewardsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return PoolAccumulatorRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return PoolAccumulatorRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse',
            value: PoolAccumulatorRewardsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(PoolAccumulatorRewardsResponse.typeUrl, PoolAccumulatorRewardsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolAccumulatorRewardsResponse.aminoType, PoolAccumulatorRewardsResponse.typeUrl);
function createBaseTickAccumulatorTrackersRequest() {
    return {
        poolId: BigInt(0),
        tickIndex: BigInt(0),
    };
}
export const TickAccumulatorTrackersRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest',
    aminoType: 'osmosis/concentratedliquidity/tick-accumulator-trackers-request',
    is(o) {
        return (o &&
            (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl ||
                (typeof o.poolId === 'bigint' && typeof o.tickIndex === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.tick_index === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' && typeof o.tick_index === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tickIndex !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return TickAccumulatorTrackersRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-accumulator-trackers-request',
            value: TickAccumulatorTrackersRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TickAccumulatorTrackersRequest.decode(message.value);
    },
    toProto(message) {
        return TickAccumulatorTrackersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest',
            value: TickAccumulatorTrackersRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TickAccumulatorTrackersRequest.typeUrl, TickAccumulatorTrackersRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TickAccumulatorTrackersRequest.aminoType, TickAccumulatorTrackersRequest.typeUrl);
function createBaseTickAccumulatorTrackersResponse() {
    return {
        spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
        uptimeTrackers: [],
    };
}
export const TickAccumulatorTrackersResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse',
    aminoType: 'osmosis/concentratedliquidity/tick-accumulator-trackers-response',
    is(o) {
        return (o &&
            (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl ||
                (Array.isArray(o.spreadRewardGrowthOppositeDirectionOfLastTraversal) &&
                    (!o.spreadRewardGrowthOppositeDirectionOfLastTraversal.length ||
                        DecCoin.is(o.spreadRewardGrowthOppositeDirectionOfLastTraversal[0])) &&
                    Array.isArray(o.uptimeTrackers) &&
                    (!o.uptimeTrackers.length || UptimeTracker.is(o.uptimeTrackers[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        DecCoin.isSDK(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    Array.isArray(o.uptime_trackers) &&
                    (!o.uptime_trackers.length ||
                        UptimeTracker.isSDK(o.uptime_trackers[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl ||
                (Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) &&
                    (!o.spread_reward_growth_opposite_direction_of_last_traversal
                        .length ||
                        DecCoin.isAmino(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) &&
                    Array.isArray(o.uptime_trackers) &&
                    (!o.uptime_trackers.length ||
                        UptimeTracker.isAmino(o.uptime_trackers[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uptimeTrackers) {
            UptimeTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickAccumulatorTrackersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uptimeTrackers.push(UptimeTracker.decode(reader, reader.uint32()));
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
            object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => DecCoin.fromPartial(e)) || [];
        message.uptimeTrackers =
            object.uptimeTrackers?.map(e => UptimeTracker.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTickAccumulatorTrackersResponse();
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
            object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e => DecCoin.fromAmino(e)) || [];
        message.uptimeTrackers =
            object.uptime_trackers?.map(e => UptimeTracker.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.spread_reward_growth_opposite_direction_of_last_traversal =
                message.spreadRewardGrowthOppositeDirectionOfLastTraversal;
        }
        if (message.uptimeTrackers) {
            obj.uptime_trackers = message.uptimeTrackers.map(e => e ? UptimeTracker.toAmino(e) : undefined);
        }
        else {
            obj.uptime_trackers = message.uptimeTrackers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TickAccumulatorTrackersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/tick-accumulator-trackers-response',
            value: TickAccumulatorTrackersResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return TickAccumulatorTrackersResponse.decode(message.value);
    },
    toProto(message) {
        return TickAccumulatorTrackersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse',
            value: TickAccumulatorTrackersResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(TickAccumulatorTrackersResponse.typeUrl, TickAccumulatorTrackersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TickAccumulatorTrackersResponse.aminoType, TickAccumulatorTrackersResponse.typeUrl);
function createBaseIncentiveRecordsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined,
    };
}
export const IncentiveRecordsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest',
    aminoType: 'osmosis/concentratedliquidity/incentive-records-request',
    is(o) {
        return (o &&
            (o.$typeUrl === IncentiveRecordsRequest.typeUrl ||
                typeof o.poolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === IncentiveRecordsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === IncentiveRecordsRequest.typeUrl ||
                typeof o.pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentiveRecordsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id =
            message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IncentiveRecordsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/incentive-records-request',
            value: IncentiveRecordsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return IncentiveRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return IncentiveRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest',
            value: IncentiveRecordsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(IncentiveRecordsRequest.typeUrl, IncentiveRecordsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(IncentiveRecordsRequest.aminoType, IncentiveRecordsRequest.typeUrl);
function createBaseIncentiveRecordsResponse() {
    return {
        incentiveRecords: [],
        pagination: undefined,
    };
}
export const IncentiveRecordsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse',
    aminoType: 'osmosis/concentratedliquidity/incentive-records-response',
    is(o) {
        return (o &&
            (o.$typeUrl === IncentiveRecordsResponse.typeUrl ||
                (Array.isArray(o.incentiveRecords) &&
                    (!o.incentiveRecords.length ||
                        IncentiveRecord.is(o.incentiveRecords[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === IncentiveRecordsResponse.typeUrl ||
                (Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        IncentiveRecord.isSDK(o.incentive_records[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === IncentiveRecordsResponse.typeUrl ||
                (Array.isArray(o.incentive_records) &&
                    (!o.incentive_records.length ||
                        IncentiveRecord.isAmino(o.incentive_records[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.incentiveRecords) {
            IncentiveRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentiveRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentiveRecordsResponse();
        message.incentiveRecords =
            object.incentive_records?.map(e => IncentiveRecord.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentiveRecords) {
            obj.incentive_records = message.incentiveRecords.map(e => e ? IncentiveRecord.toAmino(e) : undefined);
        }
        else {
            obj.incentive_records = message.incentiveRecords;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IncentiveRecordsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/incentive-records-response',
            value: IncentiveRecordsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return IncentiveRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return IncentiveRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse',
            value: IncentiveRecordsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(IncentiveRecordsResponse.typeUrl, IncentiveRecordsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(IncentiveRecordsResponse.aminoType, IncentiveRecordsResponse.typeUrl);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest() {
    return {
        concentratedPoolId: BigInt(0),
    };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest',
    aminoType: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
                typeof o.concentratedPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
                typeof o.concentrated_pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.concentratedPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.concentratedPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CFMMPoolIdLinkFromConcentratedPoolIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request',
            value: CFMMPoolIdLinkFromConcentratedPoolIdRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CFMMPoolIdLinkFromConcentratedPoolIdRequest.decode(message.value);
    },
    toProto(message) {
        return CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest',
            value: CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl, CFMMPoolIdLinkFromConcentratedPoolIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(CFMMPoolIdLinkFromConcentratedPoolIdRequest.aminoType, CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse() {
    return {
        cfmmPoolId: BigInt(0),
    };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse',
    aminoType: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
                typeof o.cfmmPoolId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
                typeof o.cfmm_pool_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.cfmmPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.cfmmPoolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CFMMPoolIdLinkFromConcentratedPoolIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response',
            value: CFMMPoolIdLinkFromConcentratedPoolIdResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(message.value);
    },
    toProto(message) {
        return CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse',
            value: CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl, CFMMPoolIdLinkFromConcentratedPoolIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CFMMPoolIdLinkFromConcentratedPoolIdResponse.aminoType, CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl);
function createBaseUserUnbondingPositionsRequest() {
    return {
        address: '',
    };
}
export const UserUnbondingPositionsRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest',
    aminoType: 'osmosis/concentratedliquidity/user-unbonding-positions-request',
    is(o) {
        return (o &&
            (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl ||
                typeof o.address === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl ||
                typeof o.address === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl ||
                typeof o.address === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return UserUnbondingPositionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-unbonding-positions-request',
            value: UserUnbondingPositionsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserUnbondingPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return UserUnbondingPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest',
            value: UserUnbondingPositionsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserUnbondingPositionsRequest.typeUrl, UserUnbondingPositionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UserUnbondingPositionsRequest.aminoType, UserUnbondingPositionsRequest.typeUrl);
function createBaseUserUnbondingPositionsResponse() {
    return {
        positionsWithPeriodLock: [],
    };
}
export const UserUnbondingPositionsResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse',
    aminoType: 'osmosis/concentratedliquidity/user-unbonding-positions-response',
    is(o) {
        return (o &&
            (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl ||
                (Array.isArray(o.positionsWithPeriodLock) &&
                    (!o.positionsWithPeriodLock.length ||
                        PositionWithPeriodLock.is(o.positionsWithPeriodLock[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl ||
                (Array.isArray(o.positions_with_period_lock) &&
                    (!o.positions_with_period_lock.length ||
                        PositionWithPeriodLock.isSDK(o.positions_with_period_lock[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl ||
                (Array.isArray(o.positions_with_period_lock) &&
                    (!o.positions_with_period_lock.length ||
                        PositionWithPeriodLock.isAmino(o.positions_with_period_lock[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.positionsWithPeriodLock) {
            PositionWithPeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserUnbondingPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positionsWithPeriodLock.push(PositionWithPeriodLock.decode(reader, reader.uint32()));
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
            object.positionsWithPeriodLock?.map(e => PositionWithPeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUserUnbondingPositionsResponse();
        message.positionsWithPeriodLock =
            object.positions_with_period_lock?.map(e => PositionWithPeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.positionsWithPeriodLock) {
            obj.positions_with_period_lock = message.positionsWithPeriodLock.map(e => e ? PositionWithPeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.positions_with_period_lock = message.positionsWithPeriodLock;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UserUnbondingPositionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/user-unbonding-positions-response',
            value: UserUnbondingPositionsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UserUnbondingPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return UserUnbondingPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse',
            value: UserUnbondingPositionsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UserUnbondingPositionsResponse.typeUrl, UserUnbondingPositionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UserUnbondingPositionsResponse.aminoType, UserUnbondingPositionsResponse.typeUrl);
function createBaseGetTotalLiquidityRequest() {
    return {};
}
export const GetTotalLiquidityRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest',
    aminoType: 'osmosis/concentratedliquidity/get-total-liquidity-request',
    is(o) {
        return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GetTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/get-total-liquidity-request',
            value: GetTotalLiquidityRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GetTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return GetTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest',
            value: GetTotalLiquidityRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GetTotalLiquidityRequest.typeUrl, GetTotalLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTotalLiquidityRequest.aminoType, GetTotalLiquidityRequest.typeUrl);
function createBaseGetTotalLiquidityResponse() {
    return {
        totalLiquidity: [],
    };
}
export const GetTotalLiquidityResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse',
    aminoType: 'osmosis/concentratedliquidity/get-total-liquidity-response',
    is(o) {
        return (o &&
            (o.$typeUrl === GetTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.totalLiquidity) &&
                    (!o.totalLiquidity.length || Coin.is(o.totalLiquidity[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GetTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.total_liquidity) &&
                    (!o.total_liquidity.length || Coin.isSDK(o.total_liquidity[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GetTotalLiquidityResponse.typeUrl ||
                (Array.isArray(o.total_liquidity) &&
                    (!o.total_liquidity.length || Coin.isAmino(o.total_liquidity[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.totalLiquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalLiquidity.push(Coin.decode(reader, reader.uint32()));
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
            object.totalLiquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTotalLiquidityResponse();
        message.totalLiquidity =
            object.total_liquidity?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.totalLiquidity) {
            obj.total_liquidity = message.totalLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_liquidity = message.totalLiquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GetTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/get-total-liquidity-response',
            value: GetTotalLiquidityResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GetTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return GetTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse',
            value: GetTotalLiquidityResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GetTotalLiquidityResponse.typeUrl, GetTotalLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTotalLiquidityResponse.aminoType, GetTotalLiquidityResponse.typeUrl);
function createBaseNumNextInitializedTicksRequest() {
    return {
        poolId: BigInt(0),
        tokenInDenom: '',
        numNextInitializedTicks: BigInt(0),
    };
}
export const NumNextInitializedTicksRequest = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest',
    aminoType: 'osmosis/concentratedliquidity/num-next-initialized-ticks-request',
    is(o) {
        return (o &&
            (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl ||
                (typeof o.poolId === 'bigint' &&
                    typeof o.tokenInDenom === 'string' &&
                    typeof o.numNextInitializedTicks === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.num_next_initialized_ticks === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl ||
                (typeof o.pool_id === 'bigint' &&
                    typeof o.token_in_denom === 'string' &&
                    typeof o.num_next_initialized_ticks === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return NumNextInitializedTicksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-next-initialized-ticks-request',
            value: NumNextInitializedTicksRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NumNextInitializedTicksRequest.decode(message.value);
    },
    toProto(message) {
        return NumNextInitializedTicksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest',
            value: NumNextInitializedTicksRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NumNextInitializedTicksRequest.typeUrl, NumNextInitializedTicksRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NumNextInitializedTicksRequest.aminoType, NumNextInitializedTicksRequest.typeUrl);
function createBaseNumNextInitializedTicksResponse() {
    return {
        liquidityDepths: [],
        currentTick: BigInt(0),
        currentLiquidity: '',
    };
}
export const NumNextInitializedTicksResponse = {
    typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse',
    aminoType: 'osmosis/concentratedliquidity/num-next-initialized-ticks-response',
    is(o) {
        return (o &&
            (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl ||
                (Array.isArray(o.liquidityDepths) &&
                    (!o.liquidityDepths.length ||
                        TickLiquidityNet.is(o.liquidityDepths[0])) &&
                    typeof o.currentTick === 'bigint' &&
                    typeof o.currentLiquidity === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        TickLiquidityNet.isSDK(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl ||
                (Array.isArray(o.liquidity_depths) &&
                    (!o.liquidity_depths.length ||
                        TickLiquidityNet.isAmino(o.liquidity_depths[0])) &&
                    typeof o.current_tick === 'bigint' &&
                    typeof o.current_liquidity === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidityDepths) {
            TickLiquidityNet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentTick !== BigInt(0)) {
            writer.uint32(16).int64(message.currentTick);
        }
        if (message.currentLiquidity !== '') {
            writer
                .uint32(26)
                .string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumNextInitializedTicksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.currentTick = reader.int64();
                    break;
                case 3:
                    message.currentLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
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
            object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
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
            object.liquidity_depths?.map(e => TickLiquidityNet.fromAmino(e)) || [];
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
            obj.liquidity_depths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toAmino(e) : undefined);
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
        return NumNextInitializedTicksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/concentratedliquidity/num-next-initialized-ticks-response',
            value: NumNextInitializedTicksResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return NumNextInitializedTicksResponse.decode(message.value);
    },
    toProto(message) {
        return NumNextInitializedTicksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse',
            value: NumNextInitializedTicksResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(NumNextInitializedTicksResponse.typeUrl, NumNextInitializedTicksResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NumNextInitializedTicksResponse.aminoType, NumNextInitializedTicksResponse.typeUrl);
