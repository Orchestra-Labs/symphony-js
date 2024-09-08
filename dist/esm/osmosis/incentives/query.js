//@ts-nocheck
import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Gauge } from './gauge';
import { Duration, } from '../../google/protobuf/duration';
import { Group, GroupsWithGauge, } from './group';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
import { Decimal } from '@cosmjs/math';
function createBaseModuleToDistributeCoinsRequest() {
    return {};
}
export const ModuleToDistributeCoinsRequest = {
    typeUrl: '/osmosis.incentives.ModuleToDistributeCoinsRequest',
    aminoType: 'osmosis/incentives/module-to-distribute-coins-request',
    is(o) {
        return o && o.$typeUrl === ModuleToDistributeCoinsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ModuleToDistributeCoinsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ModuleToDistributeCoinsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsRequest();
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
        const message = createBaseModuleToDistributeCoinsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseModuleToDistributeCoinsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleToDistributeCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/module-to-distribute-coins-request',
            value: ModuleToDistributeCoinsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ModuleToDistributeCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return ModuleToDistributeCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.ModuleToDistributeCoinsRequest',
            value: ModuleToDistributeCoinsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ModuleToDistributeCoinsRequest.typeUrl, ModuleToDistributeCoinsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleToDistributeCoinsRequest.aminoType, ModuleToDistributeCoinsRequest.typeUrl);
function createBaseModuleToDistributeCoinsResponse() {
    return {
        coins: [],
    };
}
export const ModuleToDistributeCoinsResponse = {
    typeUrl: '/osmosis.incentives.ModuleToDistributeCoinsResponse',
    aminoType: 'osmosis/incentives/module-to-distribute-coins-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ModuleToDistributeCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ModuleToDistributeCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ModuleToDistributeCoinsResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleToDistributeCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/module-to-distribute-coins-response',
            value: ModuleToDistributeCoinsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ModuleToDistributeCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return ModuleToDistributeCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.ModuleToDistributeCoinsResponse',
            value: ModuleToDistributeCoinsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ModuleToDistributeCoinsResponse.typeUrl, ModuleToDistributeCoinsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleToDistributeCoinsResponse.aminoType, ModuleToDistributeCoinsResponse.typeUrl);
function createBaseGaugeByIDRequest() {
    return {
        id: BigInt(0),
    };
}
export const GaugeByIDRequest = {
    typeUrl: '/osmosis.incentives.GaugeByIDRequest',
    aminoType: 'osmosis/incentives/gauge-by-id-request',
    is(o) {
        return (o && (o.$typeUrl === GaugeByIDRequest.typeUrl || typeof o.id === 'bigint'));
    },
    isSDK(o) {
        return (o && (o.$typeUrl === GaugeByIDRequest.typeUrl || typeof o.id === 'bigint'));
    },
    isAmino(o) {
        return (o && (o.$typeUrl === GaugeByIDRequest.typeUrl || typeof o.id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? BigInt(object.id.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugeByIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/gauge-by-id-request',
            value: GaugeByIDRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GaugeByIDRequest.decode(message.value);
    },
    toProto(message) {
        return GaugeByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.GaugeByIDRequest',
            value: GaugeByIDRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GaugeByIDRequest.typeUrl, GaugeByIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugeByIDRequest.aminoType, GaugeByIDRequest.typeUrl);
function createBaseGaugeByIDResponse() {
    return {
        gauge: undefined,
    };
}
export const GaugeByIDResponse = {
    typeUrl: '/osmosis.incentives.GaugeByIDResponse',
    aminoType: 'osmosis/incentives/gauge-by-id-response',
    is(o) {
        return o && o.$typeUrl === GaugeByIDResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GaugeByIDResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GaugeByIDResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.gauge !== undefined) {
            Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge = Gauge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDResponse();
        message.gauge =
            object.gauge !== undefined && object.gauge !== null
                ? Gauge.fromPartial(object.gauge)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDResponse();
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = Gauge.fromAmino(object.gauge);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugeByIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/gauge-by-id-response',
            value: GaugeByIDResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GaugeByIDResponse.decode(message.value);
    },
    toProto(message) {
        return GaugeByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.GaugeByIDResponse',
            value: GaugeByIDResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GaugeByIDResponse.typeUrl, GaugeByIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugeByIDResponse.aminoType, GaugeByIDResponse.typeUrl);
function createBaseGaugesRequest() {
    return {
        pagination: undefined,
    };
}
export const GaugesRequest = {
    typeUrl: '/osmosis.incentives.GaugesRequest',
    aminoType: 'osmosis/incentives/gauges-request',
    is(o) {
        return o && o.$typeUrl === GaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GaugesRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseGaugesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugesRequest();
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
        return GaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/gauges-request',
            value: GaugesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GaugesRequest.decode(message.value);
    },
    toProto(message) {
        return GaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.GaugesRequest',
            value: GaugesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GaugesRequest.typeUrl, GaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugesRequest.aminoType, GaugesRequest.typeUrl);
function createBaseGaugesResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
export const GaugesResponse = {
    typeUrl: '/osmosis.incentives.GaugesResponse',
    aminoType: 'osmosis/incentives/gauges-response',
    is(o) {
        return (o &&
            (o.$typeUrl === GaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
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
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => (e ? Gauge.toAmino(e) : undefined));
        }
        else {
            obj.data = message.data;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/gauges-response',
            value: GaugesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GaugesResponse.decode(message.value);
    },
    toProto(message) {
        return GaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.GaugesResponse',
            value: GaugesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GaugesResponse.typeUrl, GaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugesResponse.aminoType, GaugesResponse.typeUrl);
function createBaseActiveGaugesRequest() {
    return {
        pagination: undefined,
    };
}
export const ActiveGaugesRequest = {
    typeUrl: '/osmosis.incentives.ActiveGaugesRequest',
    aminoType: 'osmosis/incentives/active-gauges-request',
    is(o) {
        return o && o.$typeUrl === ActiveGaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ActiveGaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ActiveGaugesRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseActiveGaugesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesRequest();
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
        return ActiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/active-gauges-request',
            value: ActiveGaugesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.ActiveGaugesRequest',
            value: ActiveGaugesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ActiveGaugesRequest.typeUrl, ActiveGaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesRequest.aminoType, ActiveGaugesRequest.typeUrl);
function createBaseActiveGaugesResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
export const ActiveGaugesResponse = {
    typeUrl: '/osmosis.incentives.ActiveGaugesResponse',
    aminoType: 'osmosis/incentives/active-gauges-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
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
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => (e ? Gauge.toAmino(e) : undefined));
        }
        else {
            obj.data = message.data;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/active-gauges-response',
            value: ActiveGaugesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.ActiveGaugesResponse',
            value: ActiveGaugesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ActiveGaugesResponse.typeUrl, ActiveGaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesResponse.aminoType, ActiveGaugesResponse.typeUrl);
function createBaseActiveGaugesPerDenomRequest() {
    return {
        denom: '',
        pagination: undefined,
    };
}
export const ActiveGaugesPerDenomRequest = {
    typeUrl: '/osmosis.incentives.ActiveGaugesPerDenomRequest',
    aminoType: 'osmosis/incentives/active-gauges-per-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesPerDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesPerDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesPerDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        const message = createBaseActiveGaugesPerDenomRequest();
        message.denom = object.denom ?? '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/active-gauges-per-denom-request',
            value: ActiveGaugesPerDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.ActiveGaugesPerDenomRequest',
            value: ActiveGaugesPerDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ActiveGaugesPerDenomRequest.typeUrl, ActiveGaugesPerDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesPerDenomRequest.aminoType, ActiveGaugesPerDenomRequest.typeUrl);
function createBaseActiveGaugesPerDenomResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
export const ActiveGaugesPerDenomResponse = {
    typeUrl: '/osmosis.incentives.ActiveGaugesPerDenomResponse',
    aminoType: 'osmosis/incentives/active-gauges-per-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesPerDenomResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesPerDenomResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ActiveGaugesPerDenomResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
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
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => (e ? Gauge.toAmino(e) : undefined));
        }
        else {
            obj.data = message.data;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/active-gauges-per-denom-response',
            value: ActiveGaugesPerDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.ActiveGaugesPerDenomResponse',
            value: ActiveGaugesPerDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ActiveGaugesPerDenomResponse.typeUrl, ActiveGaugesPerDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveGaugesPerDenomResponse.aminoType, ActiveGaugesPerDenomResponse.typeUrl);
function createBaseUpcomingGaugesRequest() {
    return {
        pagination: undefined,
    };
}
export const UpcomingGaugesRequest = {
    typeUrl: '/osmosis.incentives.UpcomingGaugesRequest',
    aminoType: 'osmosis/incentives/upcoming-gauges-request',
    is(o) {
        return o && o.$typeUrl === UpcomingGaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === UpcomingGaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === UpcomingGaugesRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseUpcomingGaugesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesRequest();
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
        return UpcomingGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/upcoming-gauges-request',
            value: UpcomingGaugesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.UpcomingGaugesRequest',
            value: UpcomingGaugesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UpcomingGaugesRequest.typeUrl, UpcomingGaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesRequest.aminoType, UpcomingGaugesRequest.typeUrl);
function createBaseUpcomingGaugesResponse() {
    return {
        data: [],
        pagination: undefined,
    };
}
export const UpcomingGaugesResponse = {
    typeUrl: '/osmosis.incentives.UpcomingGaugesResponse',
    aminoType: 'osmosis/incentives/upcoming-gauges-response',
    is(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesResponse.typeUrl ||
                (Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
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
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => (e ? Gauge.toAmino(e) : undefined));
        }
        else {
            obj.data = message.data;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/upcoming-gauges-response',
            value: UpcomingGaugesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.UpcomingGaugesResponse',
            value: UpcomingGaugesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UpcomingGaugesResponse.typeUrl, UpcomingGaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesResponse.aminoType, UpcomingGaugesResponse.typeUrl);
function createBaseUpcomingGaugesPerDenomRequest() {
    return {
        denom: '',
        pagination: undefined,
    };
}
export const UpcomingGaugesPerDenomRequest = {
    typeUrl: '/osmosis.incentives.UpcomingGaugesPerDenomRequest',
    aminoType: 'osmosis/incentives/upcoming-gauges-per-denom-request',
    is(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesPerDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesPerDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesPerDenomRequest.typeUrl ||
                typeof o.denom === 'string'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        const message = createBaseUpcomingGaugesPerDenomRequest();
        message.denom = object.denom ?? '';
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === '' ? undefined : message.denom;
        obj.pagination = message.pagination
            ? PageRequest.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/upcoming-gauges-per-denom-request',
            value: UpcomingGaugesPerDenomRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.UpcomingGaugesPerDenomRequest',
            value: UpcomingGaugesPerDenomRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UpcomingGaugesPerDenomRequest.typeUrl, UpcomingGaugesPerDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesPerDenomRequest.aminoType, UpcomingGaugesPerDenomRequest.typeUrl);
function createBaseUpcomingGaugesPerDenomResponse() {
    return {
        upcomingGauges: [],
        pagination: undefined,
    };
}
export const UpcomingGaugesPerDenomResponse = {
    typeUrl: '/osmosis.incentives.UpcomingGaugesPerDenomResponse',
    aminoType: 'osmosis/incentives/upcoming-gauges-per-denom-response',
    is(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesPerDenomResponse.typeUrl ||
                (Array.isArray(o.upcomingGauges) &&
                    (!o.upcomingGauges.length || Gauge.is(o.upcomingGauges[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesPerDenomResponse.typeUrl ||
                (Array.isArray(o.upcoming_gauges) &&
                    (!o.upcoming_gauges.length || Gauge.isSDK(o.upcoming_gauges[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === UpcomingGaugesPerDenomResponse.typeUrl ||
                (Array.isArray(o.upcoming_gauges) &&
                    (!o.upcoming_gauges.length || Gauge.isAmino(o.upcoming_gauges[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.upcomingGauges) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upcomingGauges.push(Gauge.decode(reader, reader.uint32()));
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
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges =
            object.upcomingGauges?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges =
            object.upcoming_gauges?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcoming_gauges = message.upcomingGauges.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.upcoming_gauges = message.upcomingGauges;
        }
        obj.pagination = message.pagination
            ? PageResponse.toAmino(message.pagination)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/upcoming-gauges-per-denom-response',
            value: UpcomingGaugesPerDenomResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.UpcomingGaugesPerDenomResponse',
            value: UpcomingGaugesPerDenomResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(UpcomingGaugesPerDenomResponse.typeUrl, UpcomingGaugesPerDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UpcomingGaugesPerDenomResponse.aminoType, UpcomingGaugesPerDenomResponse.typeUrl);
function createBaseRewardsEstRequest() {
    return {
        owner: '',
        lockIds: [],
        endEpoch: BigInt(0),
    };
}
export const RewardsEstRequest = {
    typeUrl: '/osmosis.incentives.RewardsEstRequest',
    aminoType: 'osmosis/incentives/rewards-est-request',
    is(o) {
        return (o &&
            (o.$typeUrl === RewardsEstRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Array.isArray(o.lockIds) &&
                    (!o.lockIds.length || typeof o.lockIds[0] === 'bigint') &&
                    typeof o.endEpoch === 'bigint')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === RewardsEstRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Array.isArray(o.lock_ids) &&
                    (!o.lock_ids.length || typeof o.lock_ids[0] === 'bigint') &&
                    typeof o.end_epoch === 'bigint')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === RewardsEstRequest.typeUrl ||
                (typeof o.owner === 'string' &&
                    Array.isArray(o.lock_ids) &&
                    (!o.lock_ids.length || typeof o.lock_ids[0] === 'bigint') &&
                    typeof o.end_epoch === 'bigint')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.lockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.endEpoch !== BigInt(0)) {
            writer.uint32(24).int64(message.endEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.lockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.lockIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.endEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstRequest();
        message.owner = object.owner ?? '';
        message.lockIds = object.lockIds?.map(e => BigInt(e.toString())) || [];
        message.endEpoch =
            object.endEpoch !== undefined && object.endEpoch !== null
                ? BigInt(object.endEpoch.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.lockIds = object.lock_ids?.map(e => BigInt(e)) || [];
        if (object.end_epoch !== undefined && object.end_epoch !== null) {
            message.endEpoch = BigInt(object.end_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === '' ? undefined : message.owner;
        if (message.lockIds) {
            obj.lock_ids = message.lockIds.map(e => e.toString());
        }
        else {
            obj.lock_ids = message.lockIds;
        }
        obj.end_epoch =
            message.endEpoch !== BigInt(0) ? message.endEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RewardsEstRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/rewards-est-request',
            value: RewardsEstRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return RewardsEstRequest.decode(message.value);
    },
    toProto(message) {
        return RewardsEstRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.RewardsEstRequest',
            value: RewardsEstRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(RewardsEstRequest.typeUrl, RewardsEstRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(RewardsEstRequest.aminoType, RewardsEstRequest.typeUrl);
function createBaseRewardsEstResponse() {
    return {
        coins: [],
    };
}
export const RewardsEstResponse = {
    typeUrl: '/osmosis.incentives.RewardsEstResponse',
    aminoType: 'osmosis/incentives/rewards-est-response',
    is(o) {
        return (o &&
            (o.$typeUrl === RewardsEstResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === RewardsEstResponse.typeUrl ||
                (Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === RewardsEstResponse.typeUrl ||
                (Array.isArray(o.coins) &&
                    (!o.coins.length || Coin.isAmino(o.coins[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => (e ? Coin.toAmino(e) : undefined));
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RewardsEstResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/rewards-est-response',
            value: RewardsEstResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return RewardsEstResponse.decode(message.value);
    },
    toProto(message) {
        return RewardsEstResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.RewardsEstResponse',
            value: RewardsEstResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(RewardsEstResponse.typeUrl, RewardsEstResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RewardsEstResponse.aminoType, RewardsEstResponse.typeUrl);
function createBaseQueryLockableDurationsRequest() {
    return {};
}
export const QueryLockableDurationsRequest = {
    typeUrl: '/osmosis.incentives.QueryLockableDurationsRequest',
    aminoType: 'osmosis/incentives/query-lockable-durations-request',
    is(o) {
        return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsRequest();
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
        const message = createBaseQueryLockableDurationsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryLockableDurationsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLockableDurationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-lockable-durations-request',
            value: QueryLockableDurationsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryLockableDurationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLockableDurationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryLockableDurationsRequest',
            value: QueryLockableDurationsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryLockableDurationsRequest.typeUrl, QueryLockableDurationsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryLockableDurationsRequest.aminoType, QueryLockableDurationsRequest.typeUrl);
function createBaseQueryLockableDurationsResponse() {
    return {
        lockableDurations: [],
    };
}
export const QueryLockableDurationsResponse = {
    typeUrl: '/osmosis.incentives.QueryLockableDurationsResponse',
    aminoType: 'osmosis/incentives/query-lockable-durations-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryLockableDurationsResponse.typeUrl ||
                (Array.isArray(o.lockableDurations) &&
                    (!o.lockableDurations.length || Duration.is(o.lockableDurations[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryLockableDurationsResponse.typeUrl ||
                (Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isSDK(o.lockable_durations[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryLockableDurationsResponse.typeUrl ||
                (Array.isArray(o.lockable_durations) &&
                    (!o.lockable_durations.length ||
                        Duration.isAmino(o.lockable_durations[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations =
            object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations =
            object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLockableDurationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-lockable-durations-response',
            value: QueryLockableDurationsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryLockableDurationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLockableDurationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryLockableDurationsResponse',
            value: QueryLockableDurationsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryLockableDurationsResponse.typeUrl, QueryLockableDurationsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryLockableDurationsResponse.aminoType, QueryLockableDurationsResponse.typeUrl);
function createBaseQueryAllGroupsRequest() {
    return {};
}
export const QueryAllGroupsRequest = {
    typeUrl: '/osmosis.incentives.QueryAllGroupsRequest',
    aminoType: 'osmosis/incentives/query-all-groups-request',
    is(o) {
        return o && o.$typeUrl === QueryAllGroupsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAllGroupsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryAllGroupsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsRequest();
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
        const message = createBaseQueryAllGroupsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAllGroupsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllGroupsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-all-groups-request',
            value: QueryAllGroupsRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllGroupsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllGroupsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryAllGroupsRequest',
            value: QueryAllGroupsRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllGroupsRequest.typeUrl, QueryAllGroupsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsRequest.aminoType, QueryAllGroupsRequest.typeUrl);
function createBaseQueryAllGroupsResponse() {
    return {
        groups: [],
    };
}
export const QueryAllGroupsResponse = {
    typeUrl: '/osmosis.incentives.QueryAllGroupsResponse',
    aminoType: 'osmosis/incentives/query-all-groups-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsResponse.typeUrl ||
                (Array.isArray(o.groups) &&
                    (!o.groups.length || Group.is(o.groups[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsResponse.typeUrl ||
                (Array.isArray(o.groups) &&
                    (!o.groups.length || Group.isSDK(o.groups[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsResponse.typeUrl ||
                (Array.isArray(o.groups) &&
                    (!o.groups.length || Group.isAmino(o.groups[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            Group.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(Group.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllGroupsResponse();
        message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllGroupsResponse();
        message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => (e ? Group.toAmino(e) : undefined));
        }
        else {
            obj.groups = message.groups;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllGroupsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-all-groups-response',
            value: QueryAllGroupsResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllGroupsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllGroupsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryAllGroupsResponse',
            value: QueryAllGroupsResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllGroupsResponse.typeUrl, QueryAllGroupsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsResponse.aminoType, QueryAllGroupsResponse.typeUrl);
function createBaseQueryAllGroupsGaugesRequest() {
    return {};
}
export const QueryAllGroupsGaugesRequest = {
    typeUrl: '/osmosis.incentives.QueryAllGroupsGaugesRequest',
    aminoType: 'osmosis/incentives/query-all-groups-gauges-request',
    is(o) {
        return o && o.$typeUrl === QueryAllGroupsGaugesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAllGroupsGaugesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryAllGroupsGaugesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsGaugesRequest();
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
        const message = createBaseQueryAllGroupsGaugesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAllGroupsGaugesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllGroupsGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-all-groups-gauges-request',
            value: QueryAllGroupsGaugesRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllGroupsGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllGroupsGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryAllGroupsGaugesRequest',
            value: QueryAllGroupsGaugesRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllGroupsGaugesRequest.typeUrl, QueryAllGroupsGaugesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsGaugesRequest.aminoType, QueryAllGroupsGaugesRequest.typeUrl);
function createBaseQueryAllGroupsGaugesResponse() {
    return {
        gauges: [],
    };
}
export const QueryAllGroupsGaugesResponse = {
    typeUrl: '/osmosis.incentives.QueryAllGroupsGaugesResponse',
    aminoType: 'osmosis/incentives/query-all-groups-gauges-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsGaugesResponse.typeUrl ||
                (Array.isArray(o.gauges) &&
                    (!o.gauges.length || Gauge.is(o.gauges[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsGaugesResponse.typeUrl ||
                (Array.isArray(o.gauges) &&
                    (!o.gauges.length || Gauge.isSDK(o.gauges[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsGaugesResponse.typeUrl ||
                (Array.isArray(o.gauges) &&
                    (!o.gauges.length || Gauge.isAmino(o.gauges[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.gauges) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauges.push(Gauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllGroupsGaugesResponse();
        message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllGroupsGaugesResponse();
        message.gauges = object.gauges?.map(e => Gauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => (e ? Gauge.toAmino(e) : undefined));
        }
        else {
            obj.gauges = message.gauges;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllGroupsGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-all-groups-gauges-response',
            value: QueryAllGroupsGaugesResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllGroupsGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllGroupsGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryAllGroupsGaugesResponse',
            value: QueryAllGroupsGaugesResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllGroupsGaugesResponse.typeUrl, QueryAllGroupsGaugesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsGaugesResponse.aminoType, QueryAllGroupsGaugesResponse.typeUrl);
function createBaseQueryAllGroupsWithGaugeRequest() {
    return {};
}
export const QueryAllGroupsWithGaugeRequest = {
    typeUrl: '/osmosis.incentives.QueryAllGroupsWithGaugeRequest',
    aminoType: 'osmosis/incentives/query-all-groups-with-gauge-request',
    is(o) {
        return o && o.$typeUrl === QueryAllGroupsWithGaugeRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryAllGroupsWithGaugeRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryAllGroupsWithGaugeRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsWithGaugeRequest();
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
        const message = createBaseQueryAllGroupsWithGaugeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAllGroupsWithGaugeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllGroupsWithGaugeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-all-groups-with-gauge-request',
            value: QueryAllGroupsWithGaugeRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllGroupsWithGaugeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllGroupsWithGaugeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryAllGroupsWithGaugeRequest',
            value: QueryAllGroupsWithGaugeRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllGroupsWithGaugeRequest.typeUrl, QueryAllGroupsWithGaugeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsWithGaugeRequest.aminoType, QueryAllGroupsWithGaugeRequest.typeUrl);
function createBaseQueryAllGroupsWithGaugeResponse() {
    return {
        groupsWithGauge: [],
    };
}
export const QueryAllGroupsWithGaugeResponse = {
    typeUrl: '/osmosis.incentives.QueryAllGroupsWithGaugeResponse',
    aminoType: 'osmosis/incentives/query-all-groups-with-gauge-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsWithGaugeResponse.typeUrl ||
                (Array.isArray(o.groupsWithGauge) &&
                    (!o.groupsWithGauge.length ||
                        GroupsWithGauge.is(o.groupsWithGauge[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsWithGaugeResponse.typeUrl ||
                (Array.isArray(o.groups_with_gauge) &&
                    (!o.groups_with_gauge.length ||
                        GroupsWithGauge.isSDK(o.groups_with_gauge[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryAllGroupsWithGaugeResponse.typeUrl ||
                (Array.isArray(o.groups_with_gauge) &&
                    (!o.groups_with_gauge.length ||
                        GroupsWithGauge.isAmino(o.groups_with_gauge[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groupsWithGauge) {
            GroupsWithGauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGroupsWithGaugeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupsWithGauge.push(GroupsWithGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllGroupsWithGaugeResponse();
        message.groupsWithGauge =
            object.groupsWithGauge?.map(e => GroupsWithGauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllGroupsWithGaugeResponse();
        message.groupsWithGauge =
            object.groups_with_gauge?.map(e => GroupsWithGauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupsWithGauge) {
            obj.groups_with_gauge = message.groupsWithGauge.map(e => e ? GroupsWithGauge.toAmino(e) : undefined);
        }
        else {
            obj.groups_with_gauge = message.groupsWithGauge;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllGroupsWithGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-all-groups-with-gauge-response',
            value: QueryAllGroupsWithGaugeResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryAllGroupsWithGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllGroupsWithGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryAllGroupsWithGaugeResponse',
            value: QueryAllGroupsWithGaugeResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryAllGroupsWithGaugeResponse.typeUrl, QueryAllGroupsWithGaugeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAllGroupsWithGaugeResponse.aminoType, QueryAllGroupsWithGaugeResponse.typeUrl);
function createBaseQueryGroupByGroupGaugeIDRequest() {
    return {
        id: BigInt(0),
    };
}
export const QueryGroupByGroupGaugeIDRequest = {
    typeUrl: '/osmosis.incentives.QueryGroupByGroupGaugeIDRequest',
    aminoType: 'osmosis/incentives/query-group-by-group-gauge-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGroupByGroupGaugeIDRequest.typeUrl ||
                typeof o.id === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGroupByGroupGaugeIDRequest.typeUrl ||
                typeof o.id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGroupByGroupGaugeIDRequest.typeUrl ||
                typeof o.id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupByGroupGaugeIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupByGroupGaugeIDRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? BigInt(object.id.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupByGroupGaugeIDRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupByGroupGaugeIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-group-by-group-gauge-id-request',
            value: QueryGroupByGroupGaugeIDRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGroupByGroupGaugeIDRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupByGroupGaugeIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryGroupByGroupGaugeIDRequest',
            value: QueryGroupByGroupGaugeIDRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGroupByGroupGaugeIDRequest.typeUrl, QueryGroupByGroupGaugeIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupByGroupGaugeIDRequest.aminoType, QueryGroupByGroupGaugeIDRequest.typeUrl);
function createBaseQueryGroupByGroupGaugeIDResponse() {
    return {
        group: Group.fromPartial({}),
    };
}
export const QueryGroupByGroupGaugeIDResponse = {
    typeUrl: '/osmosis.incentives.QueryGroupByGroupGaugeIDResponse',
    aminoType: 'osmosis/incentives/query-group-by-group-gauge-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryGroupByGroupGaugeIDResponse.typeUrl ||
                Group.is(o.group)));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryGroupByGroupGaugeIDResponse.typeUrl ||
                Group.isSDK(o.group)));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryGroupByGroupGaugeIDResponse.typeUrl ||
                Group.isAmino(o.group)));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group !== undefined) {
            Group.encode(message.group, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupByGroupGaugeIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group = Group.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupByGroupGaugeIDResponse();
        message.group =
            object.group !== undefined && object.group !== null
                ? Group.fromPartial(object.group)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupByGroupGaugeIDResponse();
        if (object.group !== undefined && object.group !== null) {
            message.group = Group.fromAmino(object.group);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group = message.group ? Group.toAmino(message.group) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupByGroupGaugeIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-group-by-group-gauge-id-response',
            value: QueryGroupByGroupGaugeIDResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryGroupByGroupGaugeIDResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupByGroupGaugeIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryGroupByGroupGaugeIDResponse',
            value: QueryGroupByGroupGaugeIDResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryGroupByGroupGaugeIDResponse.typeUrl, QueryGroupByGroupGaugeIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupByGroupGaugeIDResponse.aminoType, QueryGroupByGroupGaugeIDResponse.typeUrl);
function createBaseQueryCurrentWeightByGroupGaugeIDRequest() {
    return {
        groupGaugeId: BigInt(0),
    };
}
export const QueryCurrentWeightByGroupGaugeIDRequest = {
    typeUrl: '/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest',
    aminoType: 'osmosis/incentives/query-current-weight-by-group-gauge-id-request',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDRequest.typeUrl ||
                typeof o.groupGaugeId === 'bigint'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDRequest.typeUrl ||
                typeof o.group_gauge_id === 'bigint'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDRequest.typeUrl ||
                typeof o.group_gauge_id === 'bigint'));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupGaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupGaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupGaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
        message.groupGaugeId =
            object.groupGaugeId !== undefined && object.groupGaugeId !== null
                ? BigInt(object.groupGaugeId.toString())
                : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentWeightByGroupGaugeIDRequest();
        if (object.group_gauge_id !== undefined && object.group_gauge_id !== null) {
            message.groupGaugeId = BigInt(object.group_gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_gauge_id =
            message.groupGaugeId !== BigInt(0)
                ? message.groupGaugeId.toString()
                : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentWeightByGroupGaugeIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-current-weight-by-group-gauge-id-request',
            value: QueryCurrentWeightByGroupGaugeIDRequest.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCurrentWeightByGroupGaugeIDRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentWeightByGroupGaugeIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest',
            value: QueryCurrentWeightByGroupGaugeIDRequest.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCurrentWeightByGroupGaugeIDRequest.typeUrl, QueryCurrentWeightByGroupGaugeIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCurrentWeightByGroupGaugeIDRequest.aminoType, QueryCurrentWeightByGroupGaugeIDRequest.typeUrl);
function createBaseQueryCurrentWeightByGroupGaugeIDResponse() {
    return {
        gaugeWeight: [],
    };
}
export const QueryCurrentWeightByGroupGaugeIDResponse = {
    typeUrl: '/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse',
    aminoType: 'osmosis/incentives/query-current-weight-by-group-gauge-id-response',
    is(o) {
        return (o &&
            (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDResponse.typeUrl ||
                (Array.isArray(o.gaugeWeight) &&
                    (!o.gaugeWeight.length || GaugeWeight.is(o.gaugeWeight[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDResponse.typeUrl ||
                (Array.isArray(o.gauge_weight) &&
                    (!o.gauge_weight.length || GaugeWeight.isSDK(o.gauge_weight[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === QueryCurrentWeightByGroupGaugeIDResponse.typeUrl ||
                (Array.isArray(o.gauge_weight) &&
                    (!o.gauge_weight.length || GaugeWeight.isAmino(o.gauge_weight[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.gaugeWeight) {
            GaugeWeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeWeight.push(GaugeWeight.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
        message.gaugeWeight =
            object.gaugeWeight?.map(e => GaugeWeight.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentWeightByGroupGaugeIDResponse();
        message.gaugeWeight =
            object.gauge_weight?.map(e => GaugeWeight.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.gaugeWeight) {
            obj.gauge_weight = message.gaugeWeight.map(e => e ? GaugeWeight.toAmino(e) : undefined);
        }
        else {
            obj.gauge_weight = message.gaugeWeight;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentWeightByGroupGaugeIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/query-current-weight-by-group-gauge-id-response',
            value: QueryCurrentWeightByGroupGaugeIDResponse.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return QueryCurrentWeightByGroupGaugeIDResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentWeightByGroupGaugeIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse',
            value: QueryCurrentWeightByGroupGaugeIDResponse.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(QueryCurrentWeightByGroupGaugeIDResponse.typeUrl, QueryCurrentWeightByGroupGaugeIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCurrentWeightByGroupGaugeIDResponse.aminoType, QueryCurrentWeightByGroupGaugeIDResponse.typeUrl);
function createBaseGaugeWeight() {
    return {
        gaugeId: BigInt(0),
        weightRatio: '',
    };
}
export const GaugeWeight = {
    typeUrl: '/osmosis.incentives.GaugeWeight',
    aminoType: 'osmosis/incentives/gauge-weight',
    is(o) {
        return (o &&
            (o.$typeUrl === GaugeWeight.typeUrl ||
                (typeof o.gaugeId === 'bigint' && typeof o.weightRatio === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GaugeWeight.typeUrl ||
                (typeof o.gauge_id === 'bigint' && typeof o.weight_ratio === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GaugeWeight.typeUrl ||
                (typeof o.gauge_id === 'bigint' && typeof o.weight_ratio === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.weightRatio !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.weightRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeWeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.weightRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugeWeight();
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? BigInt(object.gaugeId.toString())
                : BigInt(0);
        message.weightRatio = object.weightRatio ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugeWeight();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.weight_ratio !== undefined && object.weight_ratio !== null) {
            message.weightRatio = object.weight_ratio;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id =
            message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
        obj.weight_ratio =
            message.weightRatio === '' ? undefined : message.weightRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugeWeight.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/incentives/gauge-weight',
            value: GaugeWeight.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GaugeWeight.decode(message.value);
    },
    toProto(message) {
        return GaugeWeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.incentives.GaugeWeight',
            value: GaugeWeight.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GaugeWeight.typeUrl, GaugeWeight);
GlobalDecoderRegistry.registerAminoProtoMapping(GaugeWeight.aminoType, GaugeWeight.typeUrl);
