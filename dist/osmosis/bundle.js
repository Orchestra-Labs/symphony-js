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
exports.osmosis = void 0;
//@ts-nocheck
const _74 = __importStar(require("./accum/v1beta1/accum"));
const _75 = __importStar(require("./bridge/v1beta1/bridge"));
const _76 = __importStar(require("./bridge/v1beta1/events"));
const _77 = __importStar(require("./bridge/v1beta1/genesis"));
const _78 = __importStar(require("./bridge/v1beta1/query"));
const _79 = __importStar(require("./bridge/v1beta1/tx"));
const _80 = __importStar(require("./concentratedliquidity/params"));
const _81 = __importStar(require("./cosmwasmpool/v1beta1/genesis"));
const _82 = __importStar(require("./cosmwasmpool/v1beta1/gov"));
const _83 = __importStar(require("./cosmwasmpool/v1beta1/model/instantiate_msg"));
const _84 = __importStar(require("./cosmwasmpool/v1beta1/model/module_query_msg"));
const _85 = __importStar(require("./cosmwasmpool/v1beta1/model/module_sudo_msg"));
const _86 = __importStar(require("./cosmwasmpool/v1beta1/model/pool_query_msg"));
const _87 = __importStar(require("./cosmwasmpool/v1beta1/model/pool"));
const _88 = __importStar(require("./cosmwasmpool/v1beta1/model/transmuter_msgs"));
const _89 = __importStar(require("./cosmwasmpool/v1beta1/model/tx"));
const _90 = __importStar(require("./cosmwasmpool/v1beta1/params"));
const _91 = __importStar(require("./cosmwasmpool/v1beta1/query"));
const _92 = __importStar(require("./cosmwasmpool/v1beta1/tx"));
const _93 = __importStar(require("./downtimedetector/v1beta1/downtime_duration"));
const _94 = __importStar(require("./downtimedetector/v1beta1/genesis"));
const _95 = __importStar(require("./downtimedetector/v1beta1/query"));
const _96 = __importStar(require("./epochs/v1beta1/genesis"));
const _97 = __importStar(require("./epochs/v1beta1/query"));
const _98 = __importStar(require("./gamm/poolmodels/balancer/v1beta1/tx"));
const _99 = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/stableswap_pool"));
const _100 = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/tx"));
const _101 = __importStar(require("./gamm/v1beta1/balancerPool"));
const _102 = __importStar(require("./gamm/v1beta1/genesis"));
const _103 = __importStar(require("./gamm/v1beta1/gov"));
const _104 = __importStar(require("./gamm/v1beta1/query"));
const _105 = __importStar(require("./gamm/v1beta1/shared"));
const _106 = __importStar(require("./gamm/v1beta1/tx"));
const _107 = __importStar(require("./gamm/v2/query"));
const _108 = __importStar(require("./ibchooks/genesis"));
const _109 = __importStar(require("./ibchooks/params"));
const _110 = __importStar(require("./ibchooks/tx"));
const _111 = __importStar(require("./ibcratelimit/v1beta1/genesis"));
const _112 = __importStar(require("./ibcratelimit/v1beta1/params"));
const _113 = __importStar(require("./ibcratelimit/v1beta1/query"));
const _114 = __importStar(require("./incentives/gauge"));
const _115 = __importStar(require("./incentives/genesis"));
const _116 = __importStar(require("./incentives/gov"));
const _117 = __importStar(require("./incentives/group"));
const _118 = __importStar(require("./incentives/params"));
const _119 = __importStar(require("./incentives/query"));
const _120 = __importStar(require("./incentives/tx"));
const _121 = __importStar(require("./lockup/genesis"));
const _122 = __importStar(require("./lockup/lock"));
const _123 = __importStar(require("./lockup/params"));
const _124 = __importStar(require("./lockup/query"));
const _125 = __importStar(require("./lockup/tx"));
const _126 = __importStar(require("./market/v1beta1/genesis"));
const _127 = __importStar(require("./market/v1beta1/market"));
const _128 = __importStar(require("./market/v1beta1/query"));
const _129 = __importStar(require("./market/v1beta1/tx"));
const _130 = __importStar(require("./mint/v1beta1/genesis"));
const _131 = __importStar(require("./mint/v1beta1/mint"));
const _132 = __importStar(require("./mint/v1beta1/query"));
const _133 = __importStar(require("./poolincentives/v1beta1/genesis"));
const _134 = __importStar(require("./poolincentives/v1beta1/gov"));
const _135 = __importStar(require("./poolincentives/v1beta1/incentives"));
const _136 = __importStar(require("./poolincentives/v1beta1/query"));
const _137 = __importStar(require("./poolincentives/v1beta1/shared"));
const _138 = __importStar(require("./poolmanager/v1beta1/genesis"));
const _139 = __importStar(require("./poolmanager/v1beta1/gov"));
const _140 = __importStar(require("./poolmanager/v1beta1/module_route"));
const _141 = __importStar(require("./poolmanager/v1beta1/query"));
const _142 = __importStar(require("./poolmanager/v1beta1/swap_route"));
const _143 = __importStar(require("./poolmanager/v1beta1/tracked_volume"));
const _144 = __importStar(require("./poolmanager/v1beta1/tx"));
const _145 = __importStar(require("./poolmanager/v2/query"));
const _146 = __importStar(require("./protorev/v1beta1/genesis"));
const _147 = __importStar(require("./protorev/v1beta1/gov"));
const _148 = __importStar(require("./protorev/v1beta1/params"));
const _149 = __importStar(require("./protorev/v1beta1/protorev"));
const _150 = __importStar(require("./protorev/v1beta1/query"));
const _151 = __importStar(require("./protorev/v1beta1/tx"));
const _152 = __importStar(require("./store/v1beta1/tree"));
const _153 = __importStar(require("./superfluid/genesis"));
const _154 = __importStar(require("./superfluid/params"));
const _155 = __importStar(require("./superfluid/query"));
const _156 = __importStar(require("./superfluid/superfluid"));
const _157 = __importStar(require("./superfluid/tx"));
const _158 = __importStar(require("./tokenfactory/v1beta1/authorityMetadata"));
const _159 = __importStar(require("./tokenfactory/v1beta1/genesis"));
const _160 = __importStar(require("./tokenfactory/v1beta1/params"));
const _161 = __importStar(require("./tokenfactory/v1beta1/query"));
const _162 = __importStar(require("./tokenfactory/v1beta1/tx"));
const _163 = __importStar(require("./treasury/v1beta1/genesis"));
const _164 = __importStar(require("./treasury/v1beta1/query"));
const _165 = __importStar(require("./treasury/v1beta1/treasury"));
const _166 = __importStar(require("./twap/v1beta1/genesis"));
const _167 = __importStar(require("./twap/v1beta1/query"));
const _168 = __importStar(require("./twap/v1beta1/twap_record"));
const _169 = __importStar(require("./txfees/v1beta1/feetoken"));
const _170 = __importStar(require("./txfees/v1beta1/genesis"));
const _171 = __importStar(require("./txfees/v1beta1/gov"));
const _172 = __importStar(require("./txfees/v1beta1/query"));
const _173 = __importStar(require("./valsetpref/v1beta1/query"));
const _174 = __importStar(require("./valsetpref/v1beta1/state"));
const _175 = __importStar(require("./valsetpref/v1beta1/tx"));
const _236 = __importStar(require("./bridge/v1beta1/tx.amino"));
const _237 = __importStar(require("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino"));
const _238 = __importStar(require("./concentratedliquidity/v1beta1/tx.amino"));
const _239 = __importStar(require("./gamm/poolmodels/balancer/v1beta1/tx.amino"));
const _240 = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/tx.amino"));
const _241 = __importStar(require("./gamm/v1beta1/tx.amino"));
const _242 = __importStar(require("./ibchooks/tx.amino"));
const _243 = __importStar(require("./incentives/tx.amino"));
const _244 = __importStar(require("./lockup/tx.amino"));
const _245 = __importStar(require("./market/v1beta1/tx.amino"));
const _246 = __importStar(require("./poolmanager/v1beta1/tx.amino"));
const _247 = __importStar(require("./protorev/v1beta1/tx.amino"));
const _248 = __importStar(require("./superfluid/tx.amino"));
const _249 = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const _250 = __importStar(require("./valsetpref/v1beta1/tx.amino"));
const _251 = __importStar(require("./bridge/v1beta1/tx.registry"));
const _252 = __importStar(require("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry"));
const _253 = __importStar(require("./concentratedliquidity/v1beta1/tx.registry"));
const _254 = __importStar(require("./gamm/poolmodels/balancer/v1beta1/tx.registry"));
const _255 = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/tx.registry"));
const _256 = __importStar(require("./gamm/v1beta1/tx.registry"));
const _257 = __importStar(require("./ibchooks/tx.registry"));
const _258 = __importStar(require("./incentives/tx.registry"));
const _259 = __importStar(require("./lockup/tx.registry"));
const _260 = __importStar(require("./market/v1beta1/tx.registry"));
const _261 = __importStar(require("./poolmanager/v1beta1/tx.registry"));
const _262 = __importStar(require("./protorev/v1beta1/tx.registry"));
const _263 = __importStar(require("./superfluid/tx.registry"));
const _264 = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const _265 = __importStar(require("./valsetpref/v1beta1/tx.registry"));
const _266 = __importStar(require("./bridge/v1beta1/query.lcd"));
const _267 = __importStar(require("./concentratedliquidity/v1beta1/query.lcd"));
const _268 = __importStar(require("./cosmwasmpool/v1beta1/query.lcd"));
const _269 = __importStar(require("./downtimedetector/v1beta1/query.lcd"));
const _270 = __importStar(require("./epochs/v1beta1/query.lcd"));
const _271 = __importStar(require("./gamm/v1beta1/query.lcd"));
const _272 = __importStar(require("./gamm/v2/query.lcd"));
const _273 = __importStar(require("./ibcratelimit/v1beta1/query.lcd"));
const _274 = __importStar(require("./incentives/query.lcd"));
const _275 = __importStar(require("./lockup/query.lcd"));
const _276 = __importStar(require("./market/v1beta1/query.lcd"));
const _277 = __importStar(require("./mint/v1beta1/query.lcd"));
const _278 = __importStar(require("./poolincentives/v1beta1/query.lcd"));
const _279 = __importStar(require("./poolmanager/v1beta1/query.lcd"));
const _280 = __importStar(require("./poolmanager/v2/query.lcd"));
const _281 = __importStar(require("./protorev/v1beta1/query.lcd"));
const _282 = __importStar(require("./superfluid/query.lcd"));
const _283 = __importStar(require("./tokenfactory/v1beta1/query.lcd"));
const _284 = __importStar(require("./treasury/v1beta1/query.lcd"));
const _285 = __importStar(require("./twap/v1beta1/query.lcd"));
const _286 = __importStar(require("./txfees/v1beta1/query.lcd"));
const _287 = __importStar(require("./valsetpref/v1beta1/query.lcd"));
const _288 = __importStar(require("./bridge/v1beta1/query.rpc.Query"));
const _289 = __importStar(require("./concentratedliquidity/v1beta1/query.rpc.Query"));
const _290 = __importStar(require("./cosmwasmpool/v1beta1/query.rpc.Query"));
const _291 = __importStar(require("./downtimedetector/v1beta1/query.rpc.Query"));
const _292 = __importStar(require("./epochs/v1beta1/query.rpc.Query"));
const _293 = __importStar(require("./gamm/v1beta1/query.rpc.Query"));
const _294 = __importStar(require("./gamm/v2/query.rpc.Query"));
const _295 = __importStar(require("./ibcratelimit/v1beta1/query.rpc.Query"));
const _296 = __importStar(require("./incentives/query.rpc.Query"));
const _297 = __importStar(require("./lockup/query.rpc.Query"));
const _298 = __importStar(require("./market/v1beta1/query.rpc.Query"));
const _299 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _300 = __importStar(require("./poolincentives/v1beta1/query.rpc.Query"));
const _301 = __importStar(require("./poolmanager/v1beta1/query.rpc.Query"));
const _302 = __importStar(require("./poolmanager/v2/query.rpc.Query"));
const _303 = __importStar(require("./protorev/v1beta1/query.rpc.Query"));
const _304 = __importStar(require("./superfluid/query.rpc.Query"));
const _305 = __importStar(require("./tokenfactory/v1beta1/query.rpc.Query"));
const _306 = __importStar(require("./treasury/v1beta1/query.rpc.Query"));
const _307 = __importStar(require("./twap/v1beta1/query.rpc.Query"));
const _308 = __importStar(require("./txfees/v1beta1/query.rpc.Query"));
const _309 = __importStar(require("./valsetpref/v1beta1/query.rpc.Query"));
const _310 = __importStar(require("./bridge/v1beta1/tx.rpc.msg"));
const _311 = __importStar(require("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg"));
const _312 = __importStar(require("./concentratedliquidity/v1beta1/tx.rpc.msg"));
const _313 = __importStar(require("./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg"));
const _314 = __importStar(require("./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg"));
const _315 = __importStar(require("./gamm/v1beta1/tx.rpc.msg"));
const _316 = __importStar(require("./ibchooks/tx.rpc.msg"));
const _317 = __importStar(require("./incentives/tx.rpc.msg"));
const _318 = __importStar(require("./lockup/tx.rpc.msg"));
const _319 = __importStar(require("./market/v1beta1/tx.rpc.msg"));
const _320 = __importStar(require("./poolmanager/v1beta1/tx.rpc.msg"));
const _321 = __importStar(require("./protorev/v1beta1/tx.rpc.msg"));
const _322 = __importStar(require("./superfluid/tx.rpc.msg"));
const _323 = __importStar(require("./tokenfactory/v1beta1/tx.rpc.msg"));
const _324 = __importStar(require("./valsetpref/v1beta1/tx.rpc.msg"));
const _328 = __importStar(require("./lcd"));
const _329 = __importStar(require("./rpc.query"));
const _330 = __importStar(require("./rpc.tx"));
var osmosis;
(function (osmosis) {
    let accum;
    (function (accum) {
        accum.v1beta1 = {
            ..._74,
        };
    })(accum = osmosis.accum || (osmosis.accum = {}));
    let bridge;
    (function (bridge) {
        bridge.v1beta1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._236,
            ..._251,
            ..._266,
            ..._288,
            ..._310,
        };
    })(bridge = osmosis.bridge || (osmosis.bridge = {}));
    osmosis.concentratedliquidity = {
        ..._80,
        poolmodel: {
            concentrated: {
                v1beta1: {
                    ..._237,
                    ..._252,
                    ..._311,
                },
            },
        },
        v1beta1: {
            ..._238,
            ..._253,
            ..._267,
            ..._289,
            ..._312,
        },
    };
    let cosmwasmpool;
    (function (cosmwasmpool) {
        cosmwasmpool.v1beta1 = {
            ..._81,
            ..._82,
            ..._83,
            ..._84,
            ..._85,
            ..._86,
            ..._87,
            ..._88,
            ..._89,
            ..._90,
            ..._91,
            ..._92,
            ..._268,
            ..._290,
        };
    })(cosmwasmpool = osmosis.cosmwasmpool || (osmosis.cosmwasmpool = {}));
    let downtimedetector;
    (function (downtimedetector) {
        downtimedetector.v1beta1 = {
            ..._93,
            ..._94,
            ..._95,
            ..._269,
            ..._291,
        };
    })(downtimedetector = osmosis.downtimedetector || (osmosis.downtimedetector = {}));
    let epochs;
    (function (epochs) {
        epochs.v1beta1 = {
            ..._96,
            ..._97,
            ..._270,
            ..._292,
        };
    })(epochs = osmosis.epochs || (osmosis.epochs = {}));
    let gamm;
    (function (gamm) {
        let poolmodels;
        (function (poolmodels) {
            let balancer;
            (function (balancer) {
                balancer.v1beta1 = {
                    ..._98,
                    ..._239,
                    ..._254,
                    ..._313,
                };
            })(balancer = poolmodels.balancer || (poolmodels.balancer = {}));
            let stableswap;
            (function (stableswap) {
                stableswap.v1beta1 = {
                    ..._99,
                    ..._100,
                    ..._240,
                    ..._255,
                    ..._314,
                };
            })(stableswap = poolmodels.stableswap || (poolmodels.stableswap = {}));
        })(poolmodels = gamm.poolmodels || (gamm.poolmodels = {}));
        gamm.v1beta1 = {
            ..._101,
            ..._102,
            ..._103,
            ..._104,
            ..._105,
            ..._106,
            ..._241,
            ..._256,
            ..._271,
            ..._293,
            ..._315,
        };
        gamm.v2 = {
            ..._107,
            ..._272,
            ..._294,
        };
    })(gamm = osmosis.gamm || (osmosis.gamm = {}));
    osmosis.ibchooks = {
        ..._108,
        ..._109,
        ..._110,
        ..._242,
        ..._257,
        ..._316,
    };
    let ibcratelimit;
    (function (ibcratelimit) {
        ibcratelimit.v1beta1 = {
            ..._111,
            ..._112,
            ..._113,
            ..._273,
            ..._295,
        };
    })(ibcratelimit = osmosis.ibcratelimit || (osmosis.ibcratelimit = {}));
    osmosis.incentives = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._243,
        ..._258,
        ..._274,
        ..._296,
        ..._317,
    };
    osmosis.lockup = {
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._244,
        ..._259,
        ..._275,
        ..._297,
        ..._318,
    };
    let market;
    (function (market) {
        market.v1beta1 = {
            ..._126,
            ..._127,
            ..._128,
            ..._129,
            ..._245,
            ..._260,
            ..._276,
            ..._298,
            ..._319,
        };
    })(market = osmosis.market || (osmosis.market = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._130,
            ..._131,
            ..._132,
            ..._277,
            ..._299,
        };
    })(mint = osmosis.mint || (osmosis.mint = {}));
    let poolincentives;
    (function (poolincentives) {
        poolincentives.v1beta1 = {
            ..._133,
            ..._134,
            ..._135,
            ..._136,
            ..._137,
            ..._278,
            ..._300,
        };
    })(poolincentives = osmosis.poolincentives || (osmosis.poolincentives = {}));
    let poolmanager;
    (function (poolmanager) {
        poolmanager.v1beta1 = {
            ..._138,
            ..._139,
            ..._140,
            ..._141,
            ..._142,
            ..._143,
            ..._144,
            ..._246,
            ..._261,
            ..._279,
            ..._301,
            ..._320,
        };
        poolmanager.v2 = {
            ..._145,
            ..._280,
            ..._302,
        };
    })(poolmanager = osmosis.poolmanager || (osmosis.poolmanager = {}));
    let protorev;
    (function (protorev) {
        protorev.v1beta1 = {
            ..._146,
            ..._147,
            ..._148,
            ..._149,
            ..._150,
            ..._151,
            ..._247,
            ..._262,
            ..._281,
            ..._303,
            ..._321,
        };
    })(protorev = osmosis.protorev || (osmosis.protorev = {}));
    let store;
    (function (store) {
        store.v1beta1 = {
            ..._152,
        };
    })(store = osmosis.store || (osmosis.store = {}));
    osmosis.superfluid = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._248,
        ..._263,
        ..._282,
        ..._304,
        ..._322,
    };
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
            ..._158,
            ..._159,
            ..._160,
            ..._161,
            ..._162,
            ..._249,
            ..._264,
            ..._283,
            ..._305,
            ..._323,
        };
    })(tokenfactory = osmosis.tokenfactory || (osmosis.tokenfactory = {}));
    let treasury;
    (function (treasury) {
        treasury.v1beta1 = {
            ..._163,
            ..._164,
            ..._165,
            ..._284,
            ..._306,
        };
    })(treasury = osmosis.treasury || (osmosis.treasury = {}));
    let twap;
    (function (twap) {
        twap.v1beta1 = {
            ..._166,
            ..._167,
            ..._168,
            ..._285,
            ..._307,
        };
    })(twap = osmosis.twap || (osmosis.twap = {}));
    let txfees;
    (function (txfees) {
        txfees.v1beta1 = {
            ..._169,
            ..._170,
            ..._171,
            ..._172,
            ..._286,
            ..._308,
        };
    })(txfees = osmosis.txfees || (osmosis.txfees = {}));
    let valsetpref;
    (function (valsetpref) {
        valsetpref.v1beta1 = {
            ..._173,
            ..._174,
            ..._175,
            ..._250,
            ..._265,
            ..._287,
            ..._309,
            ..._324,
        };
    })(valsetpref = osmosis.valsetpref || (osmosis.valsetpref = {}));
    osmosis.ClientFactory = {
        ..._328,
        ..._329,
        ..._330,
    };
})(osmosis || (exports.osmosis = osmosis = {}));
