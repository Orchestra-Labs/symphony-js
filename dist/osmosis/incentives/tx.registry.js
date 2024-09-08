"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.incentives.MsgCreateGauge', tx_1.MsgCreateGauge],
    ['/osmosis.incentives.MsgAddToGauge', tx_1.MsgAddToGauge],
    ['/osmosis.incentives.MsgCreateGroup', tx_1.MsgCreateGroup],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGauge',
                value: tx_1.MsgCreateGauge.encode(value).finish(),
            };
        },
        addToGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgAddToGauge',
                value: tx_1.MsgAddToGauge.encode(value).finish(),
            };
        },
        createGroup(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGroup',
                value: tx_1.MsgCreateGroup.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        createGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGauge',
                value,
            };
        },
        addToGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgAddToGauge',
                value,
            };
        },
        createGroup(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGroup',
                value,
            };
        },
    },
    fromPartial: {
        createGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGauge',
                value: tx_1.MsgCreateGauge.fromPartial(value),
            };
        },
        addToGauge(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgAddToGauge',
                value: tx_1.MsgAddToGauge.fromPartial(value),
            };
        },
        createGroup(value) {
            return {
                typeUrl: '/osmosis.incentives.MsgCreateGroup',
                value: tx_1.MsgCreateGroup.fromPartial(value),
            };
        },
    },
};
