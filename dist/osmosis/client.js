"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigningOsmosisClient = exports.getSigningOsmosisClientOptions = exports.osmosisProtoRegistry = exports.osmosisAminoConverters = void 0;
//@ts-nocheck
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const osmosisBridgeV1beta1TxRegistry = __importStar(require("./bridge/v1beta1/tx.registry"));
const osmosisConcentratedliquidityPoolmodelConcentratedV1beta1TxRegistry = __importStar(require("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry"));
const osmosisConcentratedliquidityV1beta1TxRegistry = __importStar(require("./concentratedliquidity/v1beta1/tx.registry"));
const osmosisGammPoolmodelsBalancerV1beta1TxRegistry = __importStar(require("./gamm/poolmodels/balancer/v1beta1/tx.registry"));
const osmosisGammPoolmodelsStableswapV1beta1TxRegistry = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/tx.registry"));
const osmosisGammV1beta1TxRegistry = __importStar(require("./gamm/v1beta1/tx.registry"));
const osmosisIbchooksTxRegistry = __importStar(require("./ibchooks/tx.registry"));
const osmosisIncentivesTxRegistry = __importStar(require("./incentives/tx.registry"));
const osmosisLockupTxRegistry = __importStar(require("./lockup/tx.registry"));
const osmosisMarketV1beta1TxRegistry = __importStar(require("./market/v1beta1/tx.registry"));
const osmosisPoolmanagerV1beta1TxRegistry = __importStar(require("./poolmanager/v1beta1/tx.registry"));
const osmosisProtorevV1beta1TxRegistry = __importStar(require("./protorev/v1beta1/tx.registry"));
const osmosisSuperfluidTxRegistry = __importStar(require("./superfluid/tx.registry"));
const osmosisTokenfactoryV1beta1TxRegistry = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const osmosisValsetprefV1beta1TxRegistry = __importStar(require("./valsetpref/v1beta1/tx.registry"));
const osmosisBridgeV1beta1TxAmino = __importStar(require("./bridge/v1beta1/tx.amino"));
const osmosisConcentratedliquidityPoolmodelConcentratedV1beta1TxAmino = __importStar(require("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino"));
const osmosisConcentratedliquidityV1beta1TxAmino = __importStar(require("./concentratedliquidity/v1beta1/tx.amino"));
const osmosisGammPoolmodelsBalancerV1beta1TxAmino = __importStar(require("./gamm/poolmodels/balancer/v1beta1/tx.amino"));
const osmosisGammPoolmodelsStableswapV1beta1TxAmino = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/tx.amino"));
const osmosisGammV1beta1TxAmino = __importStar(require("./gamm/v1beta1/tx.amino"));
const osmosisIbchooksTxAmino = __importStar(require("./ibchooks/tx.amino"));
const osmosisIncentivesTxAmino = __importStar(require("./incentives/tx.amino"));
const osmosisLockupTxAmino = __importStar(require("./lockup/tx.amino"));
const osmosisMarketV1beta1TxAmino = __importStar(require("./market/v1beta1/tx.amino"));
const osmosisPoolmanagerV1beta1TxAmino = __importStar(require("./poolmanager/v1beta1/tx.amino"));
const osmosisProtorevV1beta1TxAmino = __importStar(require("./protorev/v1beta1/tx.amino"));
const osmosisSuperfluidTxAmino = __importStar(require("./superfluid/tx.amino"));
const osmosisTokenfactoryV1beta1TxAmino = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const osmosisValsetprefV1beta1TxAmino = __importStar(require("./valsetpref/v1beta1/tx.amino"));
exports.osmosisAminoConverters = {
    ...osmosisBridgeV1beta1TxAmino.AminoConverter,
    ...osmosisConcentratedliquidityPoolmodelConcentratedV1beta1TxAmino.AminoConverter,
    ...osmosisConcentratedliquidityV1beta1TxAmino.AminoConverter,
    ...osmosisGammPoolmodelsBalancerV1beta1TxAmino.AminoConverter,
    ...osmosisGammPoolmodelsStableswapV1beta1TxAmino.AminoConverter,
    ...osmosisGammV1beta1TxAmino.AminoConverter,
    ...osmosisIbchooksTxAmino.AminoConverter,
    ...osmosisIncentivesTxAmino.AminoConverter,
    ...osmosisLockupTxAmino.AminoConverter,
    ...osmosisMarketV1beta1TxAmino.AminoConverter,
    ...osmosisPoolmanagerV1beta1TxAmino.AminoConverter,
    ...osmosisProtorevV1beta1TxAmino.AminoConverter,
    ...osmosisSuperfluidTxAmino.AminoConverter,
    ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter,
    ...osmosisValsetprefV1beta1TxAmino.AminoConverter,
};
exports.osmosisProtoRegistry = [
    ...osmosisBridgeV1beta1TxRegistry.registry,
    ...osmosisConcentratedliquidityPoolmodelConcentratedV1beta1TxRegistry.registry,
    ...osmosisConcentratedliquidityV1beta1TxRegistry.registry,
    ...osmosisGammPoolmodelsBalancerV1beta1TxRegistry.registry,
    ...osmosisGammPoolmodelsStableswapV1beta1TxRegistry.registry,
    ...osmosisGammV1beta1TxRegistry.registry,
    ...osmosisIbchooksTxRegistry.registry,
    ...osmosisIncentivesTxRegistry.registry,
    ...osmosisLockupTxRegistry.registry,
    ...osmosisMarketV1beta1TxRegistry.registry,
    ...osmosisPoolmanagerV1beta1TxRegistry.registry,
    ...osmosisProtorevV1beta1TxRegistry.registry,
    ...osmosisSuperfluidTxRegistry.registry,
    ...osmosisTokenfactoryV1beta1TxRegistry.registry,
    ...osmosisValsetprefV1beta1TxRegistry.registry,
];
const getSigningOsmosisClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes, } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.osmosisProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.osmosisAminoConverters,
    });
    return {
        registry,
        aminoTypes,
    };
};
exports.getSigningOsmosisClientOptions = getSigningOsmosisClientOptions;
const getSigningOsmosisClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes, }) => {
    const { registry, aminoTypes } = (0, exports.getSigningOsmosisClientOptions)({
        defaultTypes,
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes,
    });
    return client;
};
exports.getSigningOsmosisClient = getSigningOsmosisClient;
