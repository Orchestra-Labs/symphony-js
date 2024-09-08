"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    [
        '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
        tx_1.MsgCreateConcentratedPool,
    ],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createConcentratedPool(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
                value: tx_1.MsgCreateConcentratedPool.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        createConcentratedPool(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
                value,
            };
        },
    },
    fromPartial: {
        createConcentratedPool(value) {
            return {
                typeUrl: '/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool',
                value: tx_1.MsgCreateConcentratedPool.fromPartial(value),
            };
        },
    },
};
