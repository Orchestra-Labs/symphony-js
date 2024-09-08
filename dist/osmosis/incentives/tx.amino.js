"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    '/osmosis.incentives.MsgCreateGauge': {
        aminoType: 'osmosis/incentives/create-gauge',
        toAmino: tx_1.MsgCreateGauge.toAmino,
        fromAmino: tx_1.MsgCreateGauge.fromAmino,
    },
    '/osmosis.incentives.MsgAddToGauge': {
        aminoType: 'osmosis/incentives/add-to-gauge',
        toAmino: tx_1.MsgAddToGauge.toAmino,
        fromAmino: tx_1.MsgAddToGauge.fromAmino,
    },
    '/osmosis.incentives.MsgCreateGroup': {
        aminoType: 'osmosis/incentives/create-group',
        toAmino: tx_1.MsgCreateGroup.toAmino,
        fromAmino: tx_1.MsgCreateGroup.fromAmino,
    },
};
