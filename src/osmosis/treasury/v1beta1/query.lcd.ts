//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryTaxRateRequest, QueryTaxRateResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.taxRate = this.taxRate.bind(this);
    this.params = this.params.bind(this);
  }
  /* TaxRate return the current tax rate */
  async taxRate(_params: QueryTaxRateRequest = {}): Promise<QueryTaxRateResponseSDKType> {
    const endpoint = `osmosis/treasury/v1beta1/tax_rate`;
    return await this.req.get<QueryTaxRateResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/treasury/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}