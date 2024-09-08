//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
function createBaseValidatorPreference() {
    return {
        valOperAddress: '',
        weight: '',
    };
}
export const ValidatorPreference = {
    typeUrl: '/osmosis.valsetpref.v1beta1.ValidatorPreference',
    aminoType: 'osmosis/valsetpref/validator-preference',
    is(o) {
        return (o &&
            (o.$typeUrl === ValidatorPreference.typeUrl ||
                (typeof o.valOperAddress === 'string' && typeof o.weight === 'string')));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ValidatorPreference.typeUrl ||
                (typeof o.val_oper_address === 'string' &&
                    typeof o.weight === 'string')));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ValidatorPreference.typeUrl ||
                (typeof o.val_oper_address === 'string' &&
                    typeof o.weight === 'string')));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.valOperAddress !== '') {
            writer.uint32(10).string(message.valOperAddress);
        }
        if (message.weight !== '') {
            writer
                .uint32(18)
                .string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valOperAddress = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorPreference();
        message.valOperAddress = object.valOperAddress ?? '';
        message.weight = object.weight ?? '';
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorPreference();
        if (object.val_oper_address !== undefined &&
            object.val_oper_address !== null) {
            message.valOperAddress = object.val_oper_address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val_oper_address =
            message.valOperAddress === '' ? undefined : message.valOperAddress;
        obj.weight = message.weight === '' ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/validator-preference',
            value: ValidatorPreference.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ValidatorPreference.decode(message.value);
    },
    toProto(message) {
        return ValidatorPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.ValidatorPreference',
            value: ValidatorPreference.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ValidatorPreference.typeUrl, ValidatorPreference);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorPreference.aminoType, ValidatorPreference.typeUrl);
function createBaseValidatorSetPreferences() {
    return {
        preferences: [],
    };
}
export const ValidatorSetPreferences = {
    typeUrl: '/osmosis.valsetpref.v1beta1.ValidatorSetPreferences',
    aminoType: 'osmosis/valsetpref/validator-set-preferences',
    is(o) {
        return (o &&
            (o.$typeUrl === ValidatorSetPreferences.typeUrl ||
                (Array.isArray(o.preferences) &&
                    (!o.preferences.length || ValidatorPreference.is(o.preferences[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === ValidatorSetPreferences.typeUrl ||
                (Array.isArray(o.preferences) &&
                    (!o.preferences.length ||
                        ValidatorPreference.isSDK(o.preferences[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === ValidatorSetPreferences.typeUrl ||
                (Array.isArray(o.preferences) &&
                    (!o.preferences.length ||
                        ValidatorPreference.isAmino(o.preferences[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.preferences) {
            ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSetPreferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences =
            object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences =
            object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSetPreferences.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/valsetpref/validator-set-preferences',
            value: ValidatorSetPreferences.toAmino(message),
        };
    },
    fromProtoMsg(message) {
        return ValidatorSetPreferences.decode(message.value);
    },
    toProto(message) {
        return ValidatorSetPreferences.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: '/osmosis.valsetpref.v1beta1.ValidatorSetPreferences',
            value: ValidatorSetPreferences.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(ValidatorSetPreferences.typeUrl, ValidatorSetPreferences);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSetPreferences.aminoType, ValidatorSetPreferences.typeUrl);
