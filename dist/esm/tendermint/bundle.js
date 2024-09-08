//@ts-nocheck
import * as _176 from './abci/types';
import * as _177 from './crypto/keys';
import * as _178 from './crypto/proof';
import * as _179 from './libs/bits/types';
import * as _180 from './p2p/types';
import * as _181 from './types/block';
import * as _182 from './types/evidence';
import * as _183 from './types/params';
import * as _184 from './types/types';
import * as _185 from './types/validator';
import * as _186 from './version/types';
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._176,
    };
    tendermint.crypto = {
        ..._177,
        ..._178,
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._179,
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._180,
    };
    tendermint.types = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._185,
    };
    tendermint.version = {
        ..._186,
    };
})(tendermint || (tendermint = {}));
