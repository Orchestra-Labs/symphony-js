//@ts-nocheck
import * as _74 from './accum/v1beta1/accum';
import * as _75 from './bridge/v1beta1/bridge';
import * as _76 from './bridge/v1beta1/events';
import * as _77 from './bridge/v1beta1/genesis';
import * as _78 from './bridge/v1beta1/query';
import * as _79 from './bridge/v1beta1/tx';
import * as _80 from './concentratedliquidity/params';
import * as _81 from './cosmwasmpool/v1beta1/genesis';
import * as _82 from './cosmwasmpool/v1beta1/gov';
import * as _83 from './cosmwasmpool/v1beta1/model/instantiate_msg';
import * as _84 from './cosmwasmpool/v1beta1/model/module_query_msg';
import * as _85 from './cosmwasmpool/v1beta1/model/module_sudo_msg';
import * as _86 from './cosmwasmpool/v1beta1/model/pool_query_msg';
import * as _87 from './cosmwasmpool/v1beta1/model/pool';
import * as _88 from './cosmwasmpool/v1beta1/model/transmuter_msgs';
import * as _89 from './cosmwasmpool/v1beta1/model/tx';
import * as _90 from './cosmwasmpool/v1beta1/params';
import * as _91 from './cosmwasmpool/v1beta1/query';
import * as _92 from './cosmwasmpool/v1beta1/tx';
import * as _93 from './downtimedetector/v1beta1/downtime_duration';
import * as _94 from './downtimedetector/v1beta1/genesis';
import * as _95 from './downtimedetector/v1beta1/query';
import * as _96 from './epochs/v1beta1/genesis';
import * as _97 from './epochs/v1beta1/query';
import * as _98 from './gamm/poolmodels/balancer/v1beta1/tx';
import * as _99 from './gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import * as _100 from './gamm/poolmodels/stableswap/v1beta1/tx';
import * as _101 from './gamm/v1beta1/balancerPool';
import * as _102 from './gamm/v1beta1/genesis';
import * as _103 from './gamm/v1beta1/gov';
import * as _104 from './gamm/v1beta1/query';
import * as _105 from './gamm/v1beta1/shared';
import * as _106 from './gamm/v1beta1/tx';
import * as _107 from './gamm/v2/query';
import * as _108 from './ibchooks/genesis';
import * as _109 from './ibchooks/params';
import * as _110 from './ibchooks/tx';
import * as _111 from './ibcratelimit/v1beta1/genesis';
import * as _112 from './ibcratelimit/v1beta1/params';
import * as _113 from './ibcratelimit/v1beta1/query';
import * as _114 from './incentives/gauge';
import * as _115 from './incentives/genesis';
import * as _116 from './incentives/gov';
import * as _117 from './incentives/group';
import * as _118 from './incentives/params';
import * as _119 from './incentives/query';
import * as _120 from './incentives/tx';
import * as _121 from './lockup/genesis';
import * as _122 from './lockup/lock';
import * as _123 from './lockup/params';
import * as _124 from './lockup/query';
import * as _125 from './lockup/tx';
import * as _126 from './market/v1beta1/genesis';
import * as _127 from './market/v1beta1/market';
import * as _128 from './market/v1beta1/query';
import * as _129 from './market/v1beta1/tx';
import * as _130 from './mint/v1beta1/genesis';
import * as _131 from './mint/v1beta1/mint';
import * as _132 from './mint/v1beta1/query';
import * as _133 from './poolincentives/v1beta1/genesis';
import * as _134 from './poolincentives/v1beta1/gov';
import * as _135 from './poolincentives/v1beta1/incentives';
import * as _136 from './poolincentives/v1beta1/query';
import * as _137 from './poolincentives/v1beta1/shared';
import * as _138 from './poolmanager/v1beta1/genesis';
import * as _139 from './poolmanager/v1beta1/gov';
import * as _140 from './poolmanager/v1beta1/module_route';
import * as _141 from './poolmanager/v1beta1/query';
import * as _142 from './poolmanager/v1beta1/swap_route';
import * as _143 from './poolmanager/v1beta1/tracked_volume';
import * as _144 from './poolmanager/v1beta1/tx';
import * as _145 from './poolmanager/v2/query';
import * as _146 from './protorev/v1beta1/genesis';
import * as _147 from './protorev/v1beta1/gov';
import * as _148 from './protorev/v1beta1/params';
import * as _149 from './protorev/v1beta1/protorev';
import * as _150 from './protorev/v1beta1/query';
import * as _151 from './protorev/v1beta1/tx';
import * as _152 from './store/v1beta1/tree';
import * as _153 from './superfluid/genesis';
import * as _154 from './superfluid/params';
import * as _155 from './superfluid/query';
import * as _156 from './superfluid/superfluid';
import * as _157 from './superfluid/tx';
import * as _158 from './tokenfactory/v1beta1/authorityMetadata';
import * as _159 from './tokenfactory/v1beta1/genesis';
import * as _160 from './tokenfactory/v1beta1/params';
import * as _161 from './tokenfactory/v1beta1/query';
import * as _162 from './tokenfactory/v1beta1/tx';
import * as _163 from './treasury/v1beta1/genesis';
import * as _164 from './treasury/v1beta1/query';
import * as _165 from './treasury/v1beta1/treasury';
import * as _166 from './twap/v1beta1/genesis';
import * as _167 from './twap/v1beta1/query';
import * as _168 from './twap/v1beta1/twap_record';
import * as _169 from './txfees/v1beta1/feetoken';
import * as _170 from './txfees/v1beta1/genesis';
import * as _171 from './txfees/v1beta1/gov';
import * as _172 from './txfees/v1beta1/query';
import * as _173 from './valsetpref/v1beta1/query';
import * as _174 from './valsetpref/v1beta1/state';
import * as _175 from './valsetpref/v1beta1/tx';
import * as _236 from './bridge/v1beta1/tx.amino';
import * as _237 from './concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino';
import * as _238 from './concentratedliquidity/v1beta1/tx.amino';
import * as _239 from './gamm/poolmodels/balancer/v1beta1/tx.amino';
import * as _240 from './gamm/poolmodels/stableswap/v1beta1/tx.amino';
import * as _241 from './gamm/v1beta1/tx.amino';
import * as _242 from './ibchooks/tx.amino';
import * as _243 from './incentives/tx.amino';
import * as _244 from './lockup/tx.amino';
import * as _245 from './market/v1beta1/tx.amino';
import * as _246 from './poolmanager/v1beta1/tx.amino';
import * as _247 from './protorev/v1beta1/tx.amino';
import * as _248 from './superfluid/tx.amino';
import * as _249 from './tokenfactory/v1beta1/tx.amino';
import * as _250 from './valsetpref/v1beta1/tx.amino';
import * as _251 from './bridge/v1beta1/tx.registry';
import * as _252 from './concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry';
import * as _253 from './concentratedliquidity/v1beta1/tx.registry';
import * as _254 from './gamm/poolmodels/balancer/v1beta1/tx.registry';
import * as _255 from './gamm/poolmodels/stableswap/v1beta1/tx.registry';
import * as _256 from './gamm/v1beta1/tx.registry';
import * as _257 from './ibchooks/tx.registry';
import * as _258 from './incentives/tx.registry';
import * as _259 from './lockup/tx.registry';
import * as _260 from './market/v1beta1/tx.registry';
import * as _261 from './poolmanager/v1beta1/tx.registry';
import * as _262 from './protorev/v1beta1/tx.registry';
import * as _263 from './superfluid/tx.registry';
import * as _264 from './tokenfactory/v1beta1/tx.registry';
import * as _265 from './valsetpref/v1beta1/tx.registry';
import * as _266 from './bridge/v1beta1/query.lcd';
import * as _267 from './concentratedliquidity/v1beta1/query.lcd';
import * as _268 from './cosmwasmpool/v1beta1/query.lcd';
import * as _269 from './downtimedetector/v1beta1/query.lcd';
import * as _270 from './epochs/v1beta1/query.lcd';
import * as _271 from './gamm/v1beta1/query.lcd';
import * as _272 from './gamm/v2/query.lcd';
import * as _273 from './ibcratelimit/v1beta1/query.lcd';
import * as _274 from './incentives/query.lcd';
import * as _275 from './lockup/query.lcd';
import * as _276 from './market/v1beta1/query.lcd';
import * as _277 from './mint/v1beta1/query.lcd';
import * as _278 from './poolincentives/v1beta1/query.lcd';
import * as _279 from './poolmanager/v1beta1/query.lcd';
import * as _280 from './poolmanager/v2/query.lcd';
import * as _281 from './protorev/v1beta1/query.lcd';
import * as _282 from './superfluid/query.lcd';
import * as _283 from './tokenfactory/v1beta1/query.lcd';
import * as _284 from './treasury/v1beta1/query.lcd';
import * as _285 from './twap/v1beta1/query.lcd';
import * as _286 from './txfees/v1beta1/query.lcd';
import * as _287 from './valsetpref/v1beta1/query.lcd';
import * as _288 from './bridge/v1beta1/query.rpc.Query';
import * as _289 from './concentratedliquidity/v1beta1/query.rpc.Query';
import * as _290 from './cosmwasmpool/v1beta1/query.rpc.Query';
import * as _291 from './downtimedetector/v1beta1/query.rpc.Query';
import * as _292 from './epochs/v1beta1/query.rpc.Query';
import * as _293 from './gamm/v1beta1/query.rpc.Query';
import * as _294 from './gamm/v2/query.rpc.Query';
import * as _295 from './ibcratelimit/v1beta1/query.rpc.Query';
import * as _296 from './incentives/query.rpc.Query';
import * as _297 from './lockup/query.rpc.Query';
import * as _298 from './market/v1beta1/query.rpc.Query';
import * as _299 from './mint/v1beta1/query.rpc.Query';
import * as _300 from './poolincentives/v1beta1/query.rpc.Query';
import * as _301 from './poolmanager/v1beta1/query.rpc.Query';
import * as _302 from './poolmanager/v2/query.rpc.Query';
import * as _303 from './protorev/v1beta1/query.rpc.Query';
import * as _304 from './superfluid/query.rpc.Query';
import * as _305 from './tokenfactory/v1beta1/query.rpc.Query';
import * as _306 from './treasury/v1beta1/query.rpc.Query';
import * as _307 from './twap/v1beta1/query.rpc.Query';
import * as _308 from './txfees/v1beta1/query.rpc.Query';
import * as _309 from './valsetpref/v1beta1/query.rpc.Query';
import * as _310 from './bridge/v1beta1/tx.rpc.msg';
import * as _311 from './concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg';
import * as _312 from './concentratedliquidity/v1beta1/tx.rpc.msg';
import * as _313 from './gamm/poolmodels/balancer/v1beta1/tx.rpc.msg';
import * as _314 from './gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg';
import * as _315 from './gamm/v1beta1/tx.rpc.msg';
import * as _316 from './ibchooks/tx.rpc.msg';
import * as _317 from './incentives/tx.rpc.msg';
import * as _318 from './lockup/tx.rpc.msg';
import * as _319 from './market/v1beta1/tx.rpc.msg';
import * as _320 from './poolmanager/v1beta1/tx.rpc.msg';
import * as _321 from './protorev/v1beta1/tx.rpc.msg';
import * as _322 from './superfluid/tx.rpc.msg';
import * as _323 from './tokenfactory/v1beta1/tx.rpc.msg';
import * as _324 from './valsetpref/v1beta1/tx.rpc.msg';
import * as _328 from './lcd';
import * as _329 from './rpc.query';
import * as _330 from './rpc.tx';
export var osmosis;
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
})(osmosis || (osmosis = {}));
