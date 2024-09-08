import { BinaryReader } from '../../../binary';
import { createProtobufRpcClient } from '@cosmjs/stargate';
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse, GeometricTwapRequest, GeometricTwapResponse, GeometricTwapToNowRequest, GeometricTwapToNowResponse, } from './query';
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.arithmeticTwap = this.arithmeticTwap.bind(this);
        this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
        this.geometricTwap = this.geometricTwap.bind(this);
        this.geometricTwapToNow = this.geometricTwapToNow.bind(this);
    }
    params(request = {}) {
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.twap.v1beta1.Query', 'Params', data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
    arithmeticTwap(request) {
        const data = ArithmeticTwapRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.twap.v1beta1.Query', 'ArithmeticTwap', data);
        return promise.then(data => ArithmeticTwapResponse.decode(new BinaryReader(data)));
    }
    arithmeticTwapToNow(request) {
        const data = ArithmeticTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.twap.v1beta1.Query', 'ArithmeticTwapToNow', data);
        return promise.then(data => ArithmeticTwapToNowResponse.decode(new BinaryReader(data)));
    }
    geometricTwap(request) {
        const data = GeometricTwapRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.twap.v1beta1.Query', 'GeometricTwap', data);
        return promise.then(data => GeometricTwapResponse.decode(new BinaryReader(data)));
    }
    geometricTwapToNow(request) {
        const data = GeometricTwapToNowRequest.encode(request).finish();
        const promise = this.rpc.request('osmosis.twap.v1beta1.Query', 'GeometricTwapToNow', data);
        return promise.then(data => GeometricTwapToNowResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        arithmeticTwap(request) {
            return queryService.arithmeticTwap(request);
        },
        arithmeticTwapToNow(request) {
            return queryService.arithmeticTwapToNow(request);
        },
        geometricTwap(request) {
            return queryService.geometricTwap(request);
        },
        geometricTwapToNow(request) {
            return queryService.geometricTwapToNow(request);
        },
    };
};
