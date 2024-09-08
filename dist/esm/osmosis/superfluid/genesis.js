//@ts-nocheck
import { Params } from './params';
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection, } from './superfluid';
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        superfluidAssets: [],
        osmoEquivalentMultipliers: [],
        intermediaryAccounts: [],
        intemediaryAccountConnections: [],
    };
}
export const GenesisState = {
    typeUrl: '/osmosis.superfluid.GenesisState',
    aminoType: 'osmosis/genesis-state',
    is(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.is(o.params) &&
                    Array.isArray(o.superfluidAssets) &&
                    (!o.superfluidAssets.length ||
                        SuperfluidAsset.is(o.superfluidAssets[0])) &&
                    Array.isArray(o.osmoEquivalentMultipliers) &&
                    (!o.osmoEquivalentMultipliers.length ||
                        OsmoEquivalentMultiplierRecord.is(o.osmoEquivalentMultipliers[0])) &&
                    Array.isArray(o.intermediaryAccounts) &&
                    (!o.intermediaryAccounts.length ||
                        SuperfluidIntermediaryAccount.is(o.intermediaryAccounts[0])) &&
                    Array.isArray(o.intemediaryAccountConnections) &&
                    (!o.intemediaryAccountConnections.length ||
                        LockIdIntermediaryAccountConnection.is(o.intemediaryAccountConnections[0])))));
    },
    isSDK(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isSDK(o.params) &&
                    Array.isArray(o.superfluid_assets) &&
                    (!o.superfluid_assets.length ||
                        SuperfluidAsset.isSDK(o.superfluid_assets[0])) &&
                    Array.isArray(o.osmo_equivalent_multipliers) &&
                    (!o.osmo_equivalent_multipliers.length ||
                        OsmoEquivalentMultiplierRecord.isSDK(o.osmo_equivalent_multipliers[0])) &&
                    Array.isArray(o.intermediary_accounts) &&
                    (!o.intermediary_accounts.length ||
                        SuperfluidIntermediaryAccount.isSDK(o.intermediary_accounts[0])) &&
                    Array.isArray(o.intemediary_account_connections) &&
                    (!o.intemediary_account_connections.length ||
                        LockIdIntermediaryAccountConnection.isSDK(o.intemediary_account_connections[0])))));
    },
    isAmino(o) {
        return (o &&
            (o.$typeUrl === GenesisState.typeUrl ||
                (Params.isAmino(o.params) &&
                    Array.isArray(o.superfluid_assets) &&
                    (!o.superfluid_assets.length ||
                        SuperfluidAsset.isAmino(o.superfluid_assets[0])) &&
                    Array.isArray(o.osmo_equivalent_multipliers) &&
                    (!o.osmo_equivalent_multipliers.length ||
                        OsmoEquivalentMultiplierRecord.isAmino(o.osmo_equivalent_multipliers[0])) &&
                    Array.isArray(o.intermediary_accounts) &&
                    (!o.intermediary_accounts.length ||
                        SuperfluidIntermediaryAccount.isAmino(o.intermediary_accounts[0])) &&
                    Array.isArray(o.intemediary_account_connections) &&
                    (!o.intemediary_account_connections.length ||
                        LockIdIntermediaryAccountConnection.isAmino(o.intemediary_account_connections[0])))));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.superfluidAssets) {
            SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.osmoEquivalentMultipliers) {
            OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.intermediaryAccounts) {
            SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.intemediaryAccountConnections) {
            LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.superfluidAssets.push(SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.osmoEquivalentMultipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.intermediaryAccounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.intemediaryAccountConnections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
                ? Params.fromPartial(object.params)
                : undefined;
        message.superfluidAssets =
            object.superfluidAssets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
        message.osmoEquivalentMultipliers =
            object.osmoEquivalentMultipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
        message.intermediaryAccounts =
            object.intermediaryAccounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
        message.intemediaryAccountConnections =
            object.intemediaryAccountConnections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.superfluidAssets =
            object.superfluid_assets?.map(e => SuperfluidAsset.fromAmino(e)) || [];
        message.osmoEquivalentMultipliers =
            object.osmo_equivalent_multipliers?.map(e => OsmoEquivalentMultiplierRecord.fromAmino(e)) || [];
        message.intermediaryAccounts =
            object.intermediary_accounts?.map(e => SuperfluidIntermediaryAccount.fromAmino(e)) || [];
        message.intemediaryAccountConnections =
            object.intemediary_account_connections?.map(e => LockIdIntermediaryAccountConnection.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.superfluidAssets) {
            obj.superfluid_assets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_assets = message.superfluidAssets;
        }
        if (message.osmoEquivalentMultipliers) {
            obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => (e ? OsmoEquivalentMultiplierRecord.toAmino(e) : undefined));
        }
        else {
            obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers;
        }
        if (message.intermediaryAccounts) {
            obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toAmino(e) : undefined);
        }
        else {
            obj.intermediary_accounts = message.intermediaryAccounts;
        }
        if (message.intemediaryAccountConnections) {
            obj.intemediary_account_connections =
                message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
        }
        else {
            obj.intemediary_account_connections =
                message.intemediaryAccountConnections;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: 'osmosis/genesis-state',
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
            typeUrl: '/osmosis.superfluid.GenesisState',
            value: GenesisState.encode(message).finish(),
        };
    },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
