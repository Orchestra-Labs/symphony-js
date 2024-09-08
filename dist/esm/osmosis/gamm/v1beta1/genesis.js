//@ts-nocheck
import { Coin, } from '../../../cosmos/base/v1beta1/coin';
import { Any, } from '../../../google/protobuf/any';
import { MigrationRecords, } from './shared';
import { Pool as Pool1 } from '../../concentratedliquidity/v1beta1/pool';
import { CosmWasmPool, } from '../../cosmwasmpool/v1beta1/model/pool';
import { Pool as Pool2 } from '../poolmodels/stableswap/v1beta1/stableswap_pool';
import { Pool as Pool3 } from './balancerPool';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseParams() {
    return {
        poolCreationFee: [],
    };
}
export const Params = {
    typeUrl: '/osmosis.gamm.v1beta1.Params',
    aminoType: 'osmosis/gamm/params',
    is(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.poolCreationFee) &&
                    (!o.poolCreationFee.length || Coin.is(o.poolCreationFee[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.pool_creation_fee) &&
                    (!o.pool_creation_fee.length || Coin.isSDK(o.pool_creation_fee[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === Params.typeUrl ||
                (Array.isArray(o.pool_creation_fee) &&
                    (!o.pool_creation_fee.length ||
                        Coin.isAmino(o.pool_creation_fee[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.poolCreationFee =
            object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.poolCreationFee =
            object.pool_creation_fee?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = message.poolCreationFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/params',
            value: Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.Params',
            value: Params.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseGenesisState() {
    return {
        pools: [],
        nextPoolNumber: BigInt(0),
        params: Params.fromPartial({}),
        migrationRecords: undefined,
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.gamm.v1beta1.GenesisState',
    aminoType: 'osmosis/gamm/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.is(o.pools[0]) ||
                        CosmWasmPool.is(o.pools[0]) ||
                        Pool2.is(o.pools[0]) ||
                        Pool3.is(o.pools[0]) ||
                        Any.is(o.pools[0])) &&
                    typeof o.nextPoolNumber === 'bigint' &&
                    Params.is(o.params))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isSDK(o.pools[0]) ||
                        CosmWasmPool.isSDK(o.pools[0]) ||
                        Pool2.isSDK(o.pools[0]) ||
                        Pool3.isSDK(o.pools[0]) ||
                        Any.isSDK(o.pools[0])) &&
                    typeof o.next_pool_number === 'bigint' &&
                    Params.isSDK(o.params))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Array.isArray(o.pools) &&
                    (!o.pools.length ||
                        Pool1.isAmino(o.pools[0]) ||
                        CosmWasmPool.isAmino(o.pools[0]) ||
                        Pool2.isAmino(o.pools[0]) ||
                        Pool3.isAmino(o.pools[0]) ||
                        Any.isAmino(o.pools[0])) &&
                    typeof o.next_pool_number === 'bigint' &&
                    Params.isAmino(o.params))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(GlobalDecoderRegistry.wrapAny(v), writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPoolNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextPoolNumber);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        if (message.migrationRecords !== undefined) {
            MigrationRecords.encode(message.migrationRecords, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
                    break;
                case 2:
                    message.nextPoolNumber = reader.uint64();
                    break;
                case 3:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
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
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        message.nextPoolNumber =
            object.nextPoolNumber !== undefined && object.nextPoolNumber !== null
                ? BigInt(object.nextPoolNumber.toString())
                : BigInt(0);
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        message.migrationRecords =
            object.migrationRecords !== undefined && object.migrationRecords !== null
                ? MigrationRecords.fromPartial(object.migrationRecords)
                : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.pools =
            object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        if (object.next_pool_number !== undefined &&
            object.next_pool_number !== null) {
            message.nextPoolNumber = BigInt(object.next_pool_number);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.migration_records !== undefined &&
            object.migration_records !== null) {
            message.migrationRecords = MigrationRecords.fromAmino(object.migration_records);
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
        obj.next_pool_number =
            message.nextPoolNumber !== BigInt(0)
                ? message.nextPoolNumber.toString()
                : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.migration_records = message.migrationRecords
            ? MigrationRecords.toAmino(message.migrationRecords)
            : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/gamm/genesis-state',
            value: GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.gamm.v1beta1.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
