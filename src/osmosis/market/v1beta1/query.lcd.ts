//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QuerySwapRequest, QuerySwapResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryExchangeRequirementsRequest, QueryExchangeRequirementsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.swap = this.swap.bind(this);
    this.params = this.params.bind(this);
    this.exchangeRequirements = this.exchangeRequirements.bind(this);
  }
  /* Swap returns simulated swap amount. */
  async swap(params: QuerySwapRequest): Promise<QuerySwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.offerCoin !== "undefined") {
      options.params.offer_coin = params.offerCoin;
    }
    if (typeof params?.askDenom !== "undefined") {
      options.params.ask_denom = params.askDenom;
    }
    const endpoint = `osmosis/market/v1beta1/swap`;
    return await this.req.get<QuerySwapResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/market/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ExchangeRequirements */
  async exchangeRequirements(_params: QueryExchangeRequirementsRequest = {}): Promise<QueryExchangeRequirementsResponseSDKType> {
    const endpoint = `osmosis/market/v1beta1/exchange_requirements`;
    return await this.req.get<QueryExchangeRequirementsResponseSDKType>(endpoint);
  }
}