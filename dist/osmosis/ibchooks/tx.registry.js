"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [
    ['/osmosis.ibchooks.MsgEmitIBCAck', tx_1.MsgEmitIBCAck],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        emitIBCAck(value) {
            return {
                typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
                value: tx_1.MsgEmitIBCAck.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        emitIBCAck(value) {
            return {
                typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
                value,
            };
        },
    },
    fromPartial: {
        emitIBCAck(value) {
            return {
                typeUrl: '/osmosis.ibchooks.MsgEmitIBCAck',
                value: tx_1.MsgEmitIBCAck.fromPartial(value),
            };
        },
    },
};
