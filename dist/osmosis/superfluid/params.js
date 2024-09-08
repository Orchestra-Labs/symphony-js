"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
const registry_1 = require("../../registry");
function createBaseParams() {
    return {
        minimumRiskFactor: '',
    };
}
exports.Params = {
    typeUrl: '/osmosis.superfluid.Params',
    aminoType: 'osmosis/params',
    is(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl || typeof o.minimumRiskFactor === 'string'));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                typeof o.minimum_risk_factor === 'string'));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === exports.Params.typeUrl ||
                typeof o.minimum_risk_factor === 'string'));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minimumRiskFactor !== '') {
            writer
                .uint32(10)
                .string(math_1.Decimal.fromUserInput(message.minimumRiskFactor, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimumRiskFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.minimumRiskFactor = object.minimumRiskFactor ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.minimum_risk_factor !== undefined &&
            object.minimum_risk_factor !== null) {
            message.minimumRiskFactor = object.minimum_risk_factor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_risk_factor =
            message.minimumRiskFactor === '' ? undefined : message.minimumRiskFactor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/params',
            value: exports.Params.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.superfluid.Params',
            value: exports.Params.encode(message).finish(),
        };
    },
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
