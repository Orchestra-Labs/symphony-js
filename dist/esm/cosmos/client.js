//@ts-nocheck
import { Registry } from '@cosmjs/proto-signing';
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import * as cosmosAuthV1beta1TxRegistry from './auth/v1beta1/tx.registry';
import * as cosmosAuthzV1beta1TxRegistry from './authz/v1beta1/tx.registry';
import * as cosmosBankV1beta1TxRegistry from './bank/v1beta1/tx.registry';
import * as cosmosConsensusV1TxRegistry from './consensus/v1/tx.registry';
import * as cosmosDistributionV1beta1TxRegistry from './distribution/v1beta1/tx.registry';
import * as cosmosGovV1beta1TxRegistry from './gov/v1beta1/tx.registry';
import * as cosmosStakingV1beta1TxRegistry from './staking/v1beta1/tx.registry';
import * as cosmosUpgradeV1beta1TxRegistry from './upgrade/v1beta1/tx.registry';
import * as cosmosAuthV1beta1TxAmino from './auth/v1beta1/tx.amino';
import * as cosmosAuthzV1beta1TxAmino from './authz/v1beta1/tx.amino';
import * as cosmosBankV1beta1TxAmino from './bank/v1beta1/tx.amino';
import * as cosmosConsensusV1TxAmino from './consensus/v1/tx.amino';
import * as cosmosDistributionV1beta1TxAmino from './distribution/v1beta1/tx.amino';
import * as cosmosGovV1beta1TxAmino from './gov/v1beta1/tx.amino';
import * as cosmosStakingV1beta1TxAmino from './staking/v1beta1/tx.amino';
import * as cosmosUpgradeV1beta1TxAmino from './upgrade/v1beta1/tx.amino';
export const cosmosAminoConverters = {
    ...cosmosAuthV1beta1TxAmino.AminoConverter,
    ...cosmosAuthzV1beta1TxAmino.AminoConverter,
    ...cosmosBankV1beta1TxAmino.AminoConverter,
    ...cosmosConsensusV1TxAmino.AminoConverter,
    ...cosmosDistributionV1beta1TxAmino.AminoConverter,
    ...cosmosGovV1beta1TxAmino.AminoConverter,
    ...cosmosStakingV1beta1TxAmino.AminoConverter,
    ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
};
export const cosmosProtoRegistry = [
    ...cosmosAuthV1beta1TxRegistry.registry,
    ...cosmosAuthzV1beta1TxRegistry.registry,
    ...cosmosBankV1beta1TxRegistry.registry,
    ...cosmosConsensusV1TxRegistry.registry,
    ...cosmosDistributionV1beta1TxRegistry.registry,
    ...cosmosGovV1beta1TxRegistry.registry,
    ...cosmosStakingV1beta1TxRegistry.registry,
    ...cosmosUpgradeV1beta1TxRegistry.registry,
];
export const getSigningCosmosClientOptions = () => {
    const registry = new Registry([...cosmosProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...cosmosAminoConverters,
    });
    return {
        registry,
        aminoTypes,
    };
};
export const getSigningCosmosClient = async ({ rpcEndpoint, signer, }) => {
    const { registry, aminoTypes } = getSigningCosmosClientOptions();
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes,
    });
    return client;
};
