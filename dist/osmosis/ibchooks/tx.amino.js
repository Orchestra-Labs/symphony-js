"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.ibchooks.MsgEmitIBCAck': {
        aminoType: 'osmosis/ibchooks/emit-ibc-ack',
        toAmino: tx_1.MsgEmitIBCAck.toAmino,
        fromAmino: tx_1.MsgEmitIBCAck.fromAmino,
    },
};
