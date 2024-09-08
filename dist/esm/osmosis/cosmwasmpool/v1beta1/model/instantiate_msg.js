//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { GlobalDecoderRegistry } from '../../../../registry';
function createBaseInstantiateMsg() {
    return {
        poolAssetDenoms: [],
    };
}
export const InstantiateMsg = {
    typeUrl: '/osmosis.cosmwasmpool.v1beta1.InstantiateMsg',
    aminoType: 'osmosis/cosmwasmpool/instantiate-msg',
    is(o) {
        return (o &&
            (o.$typeUrl === InstantiateMsg.typeUrl ||
                (Array.isArray(o.poolAssetDenoms) &&
                    (!o.poolAssetDenoms.length ||
                        typeof o.poolAssetDenoms[0] === 'string'))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === InstantiateMsg.typeUrl ||
                (Array.isArray(o.pool_asset_denoms) &&
                    (!o.pool_asset_denoms.length ||
                        typeof o.pool_asset_denoms[0] === 'string'))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === InstantiateMsg.typeUrl ||
                (Array.isArray(o.pool_asset_denoms) &&
                    (!o.pool_asset_denoms.length ||
                        typeof o.pool_asset_denoms[0] === 'string'))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.poolAssetDenoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolAssetDenoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInstantiateMsg();
        message.poolAssetDenoms = object.poolAssetDenoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInstantiateMsg();
        message.poolAssetDenoms = object.pool_asset_denoms?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolAssetDenoms) {
            obj.pool_asset_denoms = message.poolAssetDenoms.map(e => e);
        }
        else {
            obj.pool_asset_denoms = message.poolAssetDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return InstantiateMsg.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/cosmwasmpool/instantiate-msg',
            value: InstantiateMsg.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return InstantiateMsg.decode(message.value);
    },
    toProto(message) {
        return InstantiateMsg.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.cosmwasmpool.v1beta1.InstantiateMsg',
            value: InstantiateMsg.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(InstantiateMsg.typeUrl, InstantiateMsg);
GlobalDecoderRegistry.registerAminoProtoMapping(InstantiateMsg.aminoType, InstantiateMsg.typeUrl);
