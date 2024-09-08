"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.protorev.v1beta1.MsgSetHotRoutes', tx_1.MsgSetHotRoutes],
    ['/osmosis.protorev.v1beta1.MsgSetDeveloperAccount', tx_1.MsgSetDeveloperAccount],
    [
        '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
        tx_1.MsgSetMaxPoolPointsPerTx,
    ],
    [
        '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
        tx_1.MsgSetMaxPoolPointsPerBlock,
    ],
    ['/osmosis.protorev.v1beta1.MsgSetInfoByPoolType', tx_1.MsgSetInfoByPoolType],
    ['/osmosis.protorev.v1beta1.MsgSetBaseDenoms', tx_1.MsgSetBaseDenoms],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setHotRoutes(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
                value: tx_1.MsgSetHotRoutes.encode(value).finish(),
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
                value: tx_1.MsgSetDeveloperAccount.encode(value).finish(),
            };
        },
        setMaxPoolPointsPerTx(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
                value: tx_1.MsgSetMaxPoolPointsPerTx.encode(value).finish(),
            };
        },
        setMaxPoolPointsPerBlock(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
                value: tx_1.MsgSetMaxPoolPointsPerBlock.encode(value).finish(),
            };
        },
        setInfoByPoolType(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
                value: tx_1.MsgSetInfoByPoolType.encode(value).finish(),
            };
        },
        setBaseDenoms(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
                value: tx_1.MsgSetBaseDenoms.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        setHotRoutes(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
                value,
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
                value,
            };
        },
        setMaxPoolPointsPerTx(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
                value,
            };
        },
        setMaxPoolPointsPerBlock(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
                value,
            };
        },
        setInfoByPoolType(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
                value,
            };
        },
        setBaseDenoms(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
                value,
            };
        },
    },
    fromPartial: {
        setHotRoutes(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetHotRoutes',
                value: tx_1.MsgSetHotRoutes.fromPartial(value),
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetDeveloperAccount',
                value: tx_1.MsgSetDeveloperAccount.fromPartial(value),
            };
        },
        setMaxPoolPointsPerTx(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx',
                value: tx_1.MsgSetMaxPoolPointsPerTx.fromPartial(value),
            };
        },
        setMaxPoolPointsPerBlock(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock',
                value: tx_1.MsgSetMaxPoolPointsPerBlock.fromPartial(value),
            };
        },
        setInfoByPoolType(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetInfoByPoolType',
                value: tx_1.MsgSetInfoByPoolType.fromPartial(value),
            };
        },
        setBaseDenoms(value) {
            return {
                typeUrl: '/osmosis.protorev.v1beta1.MsgSetBaseDenoms',
                value: tx_1.MsgSetBaseDenoms.fromPartial(value),
            };
        },
    },
};
