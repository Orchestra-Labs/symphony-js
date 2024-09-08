"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const treasury_1 = require("./treasury");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: treasury_1.Params.fromPartial({}),
        taxRate: '',
    };
}
exports.GenesisState = {
    typeUrl: '/osmosis.treasury.v1beta1.GenesisState',
    aminoType: 'osmosis/treasury/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (treasury_1.Params.is(o.params) && typeof o.taxRate === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (treasury_1.Params.isSDK(o.params) && typeof o.tax_rate === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.GenesisState.typeUrl ||
                (treasury_1.Params.isAmino(o.params) && typeof o.tax_rate === 'string')));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            treasury_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.taxRate !== '') {
            writer
                .uint32(18)
                .string(math_1.Decimal.fromUserInput(message.taxRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = treasury_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.taxRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.params =
            object.params !== undefined && object.params !== null
                ? treasury_1.Params.fromPartial(object.params)
                : undefined;
        message.taxRate = object.taxRate ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = treasury_1.Params.fromAmino(object.params);
        }
        if (object.tax_rate !== undefined && object.tax_rate !== null) {
            message.taxRate = object.tax_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? treasury_1.Params.toAmino(message.params) : undefined;
        obj.tax_rate = message.taxRate === '' ? undefined : message.taxRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/treasury/genesis-state',
            value: exports.GenesisState.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.treasury.v1beta1.GenesisState',
            value: exports.GenesisState.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
