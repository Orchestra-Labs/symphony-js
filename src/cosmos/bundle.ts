//@ts-nocheck
import * as _2 from './app/runtime/v1alpha1/module';
import * as _3 from './auth/module/v1/module';
import * as _4 from './auth/v1beta1/auth';
import * as _5 from './auth/v1beta1/genesis';
import * as _6 from './auth/v1beta1/query';
import * as _7 from './auth/v1beta1/tx';
import * as _8 from './authz/module/v1/module';
import * as _9 from './authz/v1beta1/authz';
import * as _10 from './authz/v1beta1/event';
import * as _11 from './authz/v1beta1/genesis';
import * as _12 from './authz/v1beta1/query';
import * as _13 from './authz/v1beta1/tx';
import * as _14 from './bank/module/v1/module';
import * as _15 from './bank/v1beta1/authz';
import * as _16 from './bank/v1beta1/bank';
import * as _17 from './bank/v1beta1/genesis';
import * as _18 from './bank/v1beta1/query';
import * as _19 from './bank/v1beta1/tx';
import * as _20 from './base/abci/v1beta1/abci';
import * as _21 from './base/node/v1beta1/query';
import * as _22 from './base/query/v1beta1/pagination';
import * as _23 from './base/reflection/v2alpha1/reflection';
import * as _24 from './base/v1beta1/coin';
import * as _25 from './capability/module/v1/module';
import * as _26 from './consensus/module/v1/module';
import * as _27 from './consensus/v1/query';
import * as _28 from './consensus/v1/tx';
import * as _29 from './crisis/module/v1/module';
import * as _30 from './crypto/ed25519/keys';
import * as _31 from './crypto/hd/v1/hd';
import * as _32 from './crypto/keyring/v1/record';
import * as _33 from './crypto/multisig/keys';
import * as _34 from './crypto/secp256k1/keys';
import * as _35 from './crypto/secp256r1/keys';
import * as _36 from './distribution/module/v1/module';
import * as _37 from './distribution/v1beta1/distribution';
import * as _38 from './distribution/v1beta1/genesis';
import * as _39 from './distribution/v1beta1/query';
import * as _40 from './distribution/v1beta1/tx';
import * as _41 from './evidence/module/v1/module';
import * as _42 from './feegrant/module/v1/module';
import * as _43 from './genutil/module/v1/module';
import * as _44 from './gov/module/v1/module';
import * as _45 from './gov/v1beta1/genesis';
import * as _46 from './gov/v1beta1/gov';
import * as _47 from './gov/v1beta1/query';
import * as _48 from './gov/v1beta1/tx';
import * as _49 from './group/module/v1/module';
import * as _50 from './mint/module/v1/module';
import * as _51 from './nft/module/v1/module';
import * as _52 from './orm/module/v1alpha1/module';
import * as _53 from './orm/query/v1alpha1/query';
import * as _54 from './params/module/v1/module';
import * as _55 from './query/v1/query';
import * as _56 from './reflection/v1/reflection';
import * as _57 from './slashing/module/v1/module';
import * as _58 from './staking/module/v1/module';
import * as _59 from './staking/v1beta1/authz';
import * as _60 from './staking/v1beta1/genesis';
import * as _61 from './staking/v1beta1/query';
import * as _62 from './staking/v1beta1/staking';
import * as _63 from './staking/v1beta1/tx';
import * as _64 from './tx/config/v1/config';
import * as _65 from './tx/signing/v1beta1/signing';
import * as _66 from './tx/v1beta1/service';
import * as _67 from './tx/v1beta1/tx';
import * as _68 from './upgrade/module/v1/module';
import * as _69 from './upgrade/v1beta1/query';
import * as _70 from './upgrade/v1beta1/tx';
import * as _71 from './upgrade/v1beta1/upgrade';
import * as _72 from './vesting/module/v1/module';
import * as _191 from './auth/v1beta1/tx.amino';
import * as _192 from './authz/v1beta1/tx.amino';
import * as _193 from './bank/v1beta1/tx.amino';
import * as _194 from './consensus/v1/tx.amino';
import * as _195 from './distribution/v1beta1/tx.amino';
import * as _196 from './gov/v1beta1/tx.amino';
import * as _197 from './staking/v1beta1/tx.amino';
import * as _198 from './upgrade/v1beta1/tx.amino';
import * as _199 from './auth/v1beta1/tx.registry';
import * as _200 from './authz/v1beta1/tx.registry';
import * as _201 from './bank/v1beta1/tx.registry';
import * as _202 from './consensus/v1/tx.registry';
import * as _203 from './distribution/v1beta1/tx.registry';
import * as _204 from './gov/v1beta1/tx.registry';
import * as _205 from './staking/v1beta1/tx.registry';
import * as _206 from './upgrade/v1beta1/tx.registry';
import * as _207 from './auth/v1beta1/query.lcd';
import * as _208 from './authz/v1beta1/query.lcd';
import * as _209 from './bank/v1beta1/query.lcd';
import * as _210 from './base/node/v1beta1/query.lcd';
import * as _211 from './consensus/v1/query.lcd';
import * as _212 from './distribution/v1beta1/query.lcd';
import * as _213 from './gov/v1beta1/query.lcd';
import * as _214 from './staking/v1beta1/query.lcd';
import * as _215 from './tx/v1beta1/service.lcd';
import * as _216 from './upgrade/v1beta1/query.lcd';
import * as _217 from './auth/v1beta1/query.rpc.Query';
import * as _218 from './authz/v1beta1/query.rpc.Query';
import * as _219 from './bank/v1beta1/query.rpc.Query';
import * as _220 from './base/node/v1beta1/query.rpc.Service';
import * as _221 from './consensus/v1/query.rpc.Query';
import * as _222 from './distribution/v1beta1/query.rpc.Query';
import * as _223 from './gov/v1beta1/query.rpc.Query';
import * as _224 from './orm/query/v1alpha1/query.rpc.Query';
import * as _225 from './staking/v1beta1/query.rpc.Query';
import * as _226 from './tx/v1beta1/service.rpc.Service';
import * as _227 from './upgrade/v1beta1/query.rpc.Query';
import * as _228 from './auth/v1beta1/tx.rpc.msg';
import * as _229 from './authz/v1beta1/tx.rpc.msg';
import * as _230 from './bank/v1beta1/tx.rpc.msg';
import * as _231 from './consensus/v1/tx.rpc.msg';
import * as _232 from './distribution/v1beta1/tx.rpc.msg';
import * as _233 from './gov/v1beta1/tx.rpc.msg';
import * as _234 from './staking/v1beta1/tx.rpc.msg';
import * as _235 from './upgrade/v1beta1/tx.rpc.msg';
import * as _325 from './lcd';
import * as _326 from './rpc.query';
import * as _327 from './rpc.tx';
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2,
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3,
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._191,
      ..._199,
      ..._207,
      ..._217,
      ..._228,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8,
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._192,
      ..._200,
      ..._208,
      ..._218,
      ..._229,
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14,
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._193,
      ..._201,
      ..._209,
      ..._219,
      ..._230,
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._210,
        ..._220,
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22,
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23,
      };
    }
    export const v1beta1 = {
      ..._24,
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._25,
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._26,
      };
    }
    export const v1 = {
      ..._27,
      ..._28,
      ..._194,
      ..._202,
      ..._211,
      ..._221,
      ..._231,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._29,
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._30,
    };
    export namespace hd {
      export const v1 = {
        ..._31,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._32,
      };
    }
    export const multisig = {
      ..._33,
    };
    export const secp256k1 = {
      ..._34,
    };
    export const secp256r1 = {
      ..._35,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._36,
      };
    }
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._195,
      ..._203,
      ..._212,
      ..._222,
      ..._232,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._41,
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._42,
      };
    }
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._43,
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._44,
      };
    }
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._196,
      ..._204,
      ..._213,
      ..._223,
      ..._233,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._49,
      };
    }
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._50,
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._51,
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._52,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._53,
        ..._224,
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._54,
      };
    }
  }
  export namespace query {
    export const v1 = {
      ..._55,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._56,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._57,
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._58,
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._197,
      ..._205,
      ..._214,
      ..._225,
      ..._234,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._64,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._65,
      };
    }
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._215,
      ..._226,
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._68,
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._198,
      ..._206,
      ..._216,
      ..._227,
      ..._235,
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._72,
      };
    }
  }
  export const ClientFactory = {
    ..._325,
    ..._326,
    ..._327,
  };
}
