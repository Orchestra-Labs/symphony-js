import { HttpEndpoint } from '@cosmjs/tendermint-rpc';
export declare const createRPCQueryClient: ({ rpcEndpoint, }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                };
            };
        };
        consensus: {
            v1: {
                params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        gov: {
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        orm: {
            query: {
                v1alpha1: {
                    get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                    list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                };
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
    osmosis: {
        bridge: {
            v1beta1: {
                params(request?: import("./bridge/v1beta1/query").QueryParamsRequest): Promise<import("./bridge/v1beta1/query").QueryParamsResponse>;
            };
        };
        concentratedliquidity: {
            v1beta1: {
                pools(request?: import("./concentratedliquidity/v1beta1/query").PoolsRequest): Promise<import("./concentratedliquidity/v1beta1/query").PoolsResponse>;
                params(request?: import("./concentratedliquidity/v1beta1/query").ParamsRequest): Promise<import("./concentratedliquidity/v1beta1/query").ParamsResponse>;
                userPositions(request: import("./concentratedliquidity/v1beta1/query").UserPositionsRequest): Promise<import("./concentratedliquidity/v1beta1/query").UserPositionsResponse>;
                liquidityPerTickRange(request: import("./concentratedliquidity/v1beta1/query").LiquidityPerTickRangeRequest): Promise<import("./concentratedliquidity/v1beta1/query").LiquidityPerTickRangeResponse>;
                liquidityNetInDirection(request: import("./concentratedliquidity/v1beta1/query").LiquidityNetInDirectionRequest): Promise<import("./concentratedliquidity/v1beta1/query").LiquidityNetInDirectionResponse>;
                claimableSpreadRewards(request: import("./concentratedliquidity/v1beta1/query").ClaimableSpreadRewardsRequest): Promise<import("./concentratedliquidity/v1beta1/query").ClaimableSpreadRewardsResponse>;
                claimableIncentives(request: import("./concentratedliquidity/v1beta1/query").ClaimableIncentivesRequest): Promise<import("./concentratedliquidity/v1beta1/query").ClaimableIncentivesResponse>;
                positionById(request: import("./concentratedliquidity/v1beta1/query").PositionByIdRequest): Promise<import("./concentratedliquidity/v1beta1/query").PositionByIdResponse>;
                poolAccumulatorRewards(request: import("./concentratedliquidity/v1beta1/query").PoolAccumulatorRewardsRequest): Promise<import("./concentratedliquidity/v1beta1/query").PoolAccumulatorRewardsResponse>;
                incentiveRecords(request: import("./concentratedliquidity/v1beta1/query").IncentiveRecordsRequest): Promise<import("./concentratedliquidity/v1beta1/query").IncentiveRecordsResponse>;
                tickAccumulatorTrackers(request: import("./concentratedliquidity/v1beta1/query").TickAccumulatorTrackersRequest): Promise<import("./concentratedliquidity/v1beta1/query").TickAccumulatorTrackersResponse>;
                cFMMPoolIdLinkFromConcentratedPoolId(request: import("./concentratedliquidity/v1beta1/query").CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<import("./concentratedliquidity/v1beta1/query").CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
                userUnbondingPositions(request: import("./concentratedliquidity/v1beta1/query").UserUnbondingPositionsRequest): Promise<import("./concentratedliquidity/v1beta1/query").UserUnbondingPositionsResponse>;
                getTotalLiquidity(request?: import("./concentratedliquidity/v1beta1/query").GetTotalLiquidityRequest): Promise<import("./concentratedliquidity/v1beta1/query").GetTotalLiquidityResponse>;
                numNextInitializedTicks(request: import("./concentratedliquidity/v1beta1/query").NumNextInitializedTicksRequest): Promise<import("./concentratedliquidity/v1beta1/query").NumNextInitializedTicksResponse>;
            };
        };
        cosmwasmpool: {
            v1beta1: {
                pools(request?: import("./cosmwasmpool/v1beta1/query").PoolsRequest): Promise<import("./cosmwasmpool/v1beta1/query").PoolsResponse>;
                params(request?: import("./cosmwasmpool/v1beta1/query").ParamsRequest): Promise<import("./cosmwasmpool/v1beta1/query").ParamsResponse>;
                contractInfoByPoolId(request: import("./cosmwasmpool/v1beta1/query").ContractInfoByPoolIdRequest): Promise<import("./cosmwasmpool/v1beta1/query").ContractInfoByPoolIdResponse>;
            };
        };
        downtimedetector: {
            v1beta1: {
                recoveredSinceDowntimeOfLength(request: import("./downtimedetector/v1beta1/query").RecoveredSinceDowntimeOfLengthRequest): Promise<import("./downtimedetector/v1beta1/query").RecoveredSinceDowntimeOfLengthResponse>;
            };
        };
        epochs: {
            v1beta1: {
                epochInfos(request?: import("./epochs/v1beta1/query").QueryEpochsInfoRequest): Promise<import("./epochs/v1beta1/query").QueryEpochsInfoResponse>;
                currentEpoch(request: import("./epochs/v1beta1/query").QueryCurrentEpochRequest): Promise<import("./epochs/v1beta1/query").QueryCurrentEpochResponse>;
            };
        };
        gamm: {
            v1beta1: {
                pools(request?: import("./gamm/v1beta1/query").QueryPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolsResponse>;
                numPools(request?: import("./gamm/v1beta1/query").QueryNumPoolsRequest): Promise<import("./gamm/v1beta1/query").QueryNumPoolsResponse>;
                totalLiquidity(request?: import("./gamm/v1beta1/query").QueryTotalLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalLiquidityResponse>;
                poolsWithFilter(request: import("./gamm/v1beta1/query").QueryPoolsWithFilterRequest): Promise<import("./gamm/v1beta1/query").QueryPoolsWithFilterResponse>;
                pool(request: import("./gamm/v1beta1/query").QueryPoolRequest): Promise<import("./gamm/v1beta1/query").QueryPoolResponse>;
                poolType(request: import("./gamm/v1beta1/query").QueryPoolTypeRequest): Promise<import("./gamm/v1beta1/query").QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: import("./gamm/v1beta1/query").QueryCalcJoinPoolNoSwapSharesRequest): Promise<import("./gamm/v1beta1/query").QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: import("./gamm/v1beta1/query").QueryCalcJoinPoolSharesRequest): Promise<import("./gamm/v1beta1/query").QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: import("./gamm/v1beta1/query").QueryCalcExitPoolCoinsFromSharesRequest): Promise<import("./gamm/v1beta1/query").QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: import("./gamm/v1beta1/query").QueryPoolParamsRequest): Promise<import("./gamm/v1beta1/query").QueryPoolParamsResponse>;
                totalPoolLiquidity(request: import("./gamm/v1beta1/query").QueryTotalPoolLiquidityRequest): Promise<import("./gamm/v1beta1/query").QueryTotalPoolLiquidityResponse>;
                totalShares(request: import("./gamm/v1beta1/query").QueryTotalSharesRequest): Promise<import("./gamm/v1beta1/query").QueryTotalSharesResponse>;
                spotPrice(request: import("./gamm/v1beta1/query").QuerySpotPriceRequest): Promise<import("./gamm/v1beta1/query").QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: import("./gamm/v1beta1/query").QuerySwapExactAmountInRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: import("./gamm/v1beta1/query").QuerySwapExactAmountOutRequest): Promise<import("./gamm/v1beta1/query").QuerySwapExactAmountOutResponse>;
                concentratedPoolIdLinkFromCFMM(request: import("./gamm/v1beta1/query").QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<import("./gamm/v1beta1/query").QueryConcentratedPoolIdLinkFromCFMMResponse>;
                cFMMConcentratedPoolLinks(request?: import("./gamm/v1beta1/query").QueryCFMMConcentratedPoolLinksRequest): Promise<import("./gamm/v1beta1/query").QueryCFMMConcentratedPoolLinksResponse>;
            };
            v2: {
                spotPrice(request: import("./gamm/v2/query").QuerySpotPriceRequest): Promise<import("./gamm/v2/query").QuerySpotPriceResponse>;
            };
        };
        ibcratelimit: {
            v1beta1: {
                params(request?: import("./ibcratelimit/v1beta1/query").ParamsRequest): Promise<import("./ibcratelimit/v1beta1/query").ParamsResponse>;
            };
        };
        incentives: {
            moduleToDistributeCoins(request?: import("./incentives/query").ModuleToDistributeCoinsRequest): Promise<import("./incentives/query").ModuleToDistributeCoinsResponse>;
            gaugeByID(request: import("./incentives/query").GaugeByIDRequest): Promise<import("./incentives/query").GaugeByIDResponse>;
            gauges(request?: import("./incentives/query").GaugesRequest): Promise<import("./incentives/query").GaugesResponse>;
            activeGauges(request?: import("./incentives/query").ActiveGaugesRequest): Promise<import("./incentives/query").ActiveGaugesResponse>;
            activeGaugesPerDenom(request: import("./incentives/query").ActiveGaugesPerDenomRequest): Promise<import("./incentives/query").ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: import("./incentives/query").UpcomingGaugesRequest): Promise<import("./incentives/query").UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: import("./incentives/query").UpcomingGaugesPerDenomRequest): Promise<import("./incentives/query").UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: import("./incentives/query").RewardsEstRequest): Promise<import("./incentives/query").RewardsEstResponse>;
            lockableDurations(request?: import("./incentives/query").QueryLockableDurationsRequest): Promise<import("./incentives/query").QueryLockableDurationsResponse>;
            allGroups(request?: import("./incentives/query").QueryAllGroupsRequest): Promise<import("./incentives/query").QueryAllGroupsResponse>;
            allGroupsGauges(request?: import("./incentives/query").QueryAllGroupsGaugesRequest): Promise<import("./incentives/query").QueryAllGroupsGaugesResponse>;
            allGroupsWithGauge(request?: import("./incentives/query").QueryAllGroupsWithGaugeRequest): Promise<import("./incentives/query").QueryAllGroupsWithGaugeResponse>;
            groupByGroupGaugeID(request: import("./incentives/query").QueryGroupByGroupGaugeIDRequest): Promise<import("./incentives/query").QueryGroupByGroupGaugeIDResponse>;
            currentWeightByGroupGaugeID(request: import("./incentives/query").QueryCurrentWeightByGroupGaugeIDRequest): Promise<import("./incentives/query").QueryCurrentWeightByGroupGaugeIDResponse>;
        };
        lockup: {
            moduleBalance(request?: import("./lockup/query").ModuleBalanceRequest): Promise<import("./lockup/query").ModuleBalanceResponse>;
            moduleLockedAmount(request?: import("./lockup/query").ModuleLockedAmountRequest): Promise<import("./lockup/query").ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: import("./lockup/query").AccountUnlockableCoinsRequest): Promise<import("./lockup/query").AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: import("./lockup/query").AccountUnlockingCoinsRequest): Promise<import("./lockup/query").AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: import("./lockup/query").AccountLockedCoinsRequest): Promise<import("./lockup/query").AccountLockedCoinsResponse>;
            accountLockedPastTime(request: import("./lockup/query").AccountLockedPastTimeRequest): Promise<import("./lockup/query").AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: import("./lockup/query").AccountUnlockedBeforeTimeRequest): Promise<import("./lockup/query").AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: import("./lockup/query").AccountLockedPastTimeDenomRequest): Promise<import("./lockup/query").AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: import("./lockup/query").LockedDenomRequest): Promise<import("./lockup/query").LockedDenomResponse>;
            lockedByID(request: import("./lockup/query").LockedRequest): Promise<import("./lockup/query").LockedResponse>;
            lockRewardReceiver(request: import("./lockup/query").LockRewardReceiverRequest): Promise<import("./lockup/query").LockRewardReceiverResponse>;
            nextLockID(request?: import("./lockup/query").NextLockIDRequest): Promise<import("./lockup/query").NextLockIDResponse>;
            syntheticLockupsByLockupID(request: import("./lockup/query").SyntheticLockupsByLockupIDRequest): Promise<import("./lockup/query").SyntheticLockupsByLockupIDResponse>;
            syntheticLockupByLockupID(request: import("./lockup/query").SyntheticLockupByLockupIDRequest): Promise<import("./lockup/query").SyntheticLockupByLockupIDResponse>;
            accountLockedLongerDuration(request: import("./lockup/query").AccountLockedLongerDurationRequest): Promise<import("./lockup/query").AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: import("./lockup/query").AccountLockedDurationRequest): Promise<import("./lockup/query").AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<import("./lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: import("./lockup/query").AccountLockedLongerDurationDenomRequest): Promise<import("./lockup/query").AccountLockedLongerDurationDenomResponse>;
            params(request?: import("./lockup/query").QueryParamsRequest): Promise<import("./lockup/query").QueryParamsResponse>;
        };
        market: {
            v1beta1: {
                swap(request: import("./market/v1beta1/query").QuerySwapRequest): Promise<import("./market/v1beta1/query").QuerySwapResponse>;
                params(request?: import("./market/v1beta1/query").QueryParamsRequest): Promise<import("./market/v1beta1/query").QueryParamsResponse>;
                exchangeRequirements(request?: import("./market/v1beta1/query").QueryExchangeRequirementsRequest): Promise<import("./market/v1beta1/query").QueryExchangeRequirementsResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                epochProvisions(request?: import("./mint/v1beta1/query").QueryEpochProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryEpochProvisionsResponse>;
            };
        };
        poolincentives: {
            v1beta1: {
                gaugeIds(request: import("./poolincentives/v1beta1/query").QueryGaugeIdsRequest): Promise<import("./poolincentives/v1beta1/query").QueryGaugeIdsResponse>;
                distrInfo(request?: import("./poolincentives/v1beta1/query").QueryDistrInfoRequest): Promise<import("./poolincentives/v1beta1/query").QueryDistrInfoResponse>;
                params(request?: import("./poolincentives/v1beta1/query").QueryParamsRequest): Promise<import("./poolincentives/v1beta1/query").QueryParamsResponse>;
                lockableDurations(request?: import("./poolincentives/v1beta1/query").QueryLockableDurationsRequest): Promise<import("./poolincentives/v1beta1/query").QueryLockableDurationsResponse>;
                incentivizedPools(request?: import("./poolincentives/v1beta1/query").QueryIncentivizedPoolsRequest): Promise<import("./poolincentives/v1beta1/query").QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: import("./poolincentives/v1beta1/query").QueryExternalIncentiveGaugesRequest): Promise<import("./poolincentives/v1beta1/query").QueryExternalIncentiveGaugesResponse>;
            };
        };
        poolmanager: {
            v1beta1: {
                params(request?: import("./poolmanager/v1beta1/query").ParamsRequest): Promise<import("./poolmanager/v1beta1/query").ParamsResponse>;
                estimateSwapExactAmountIn(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountInWithPrimitiveTypes(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInWithPrimitiveTypesRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: import("./poolmanager/v1beta1/query").EstimateSinglePoolSwapExactAmountInRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutResponse>;
                estimateSwapExactAmountOutWithPrimitiveTypes(request: import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: import("./poolmanager/v1beta1/query").EstimateSinglePoolSwapExactAmountOutRequest): Promise<import("./poolmanager/v1beta1/query").EstimateSwapExactAmountOutResponse>;
                numPools(request?: import("./poolmanager/v1beta1/query").NumPoolsRequest): Promise<import("./poolmanager/v1beta1/query").NumPoolsResponse>;
                pool(request: import("./poolmanager/v1beta1/query").PoolRequest): Promise<import("./poolmanager/v1beta1/query").PoolResponse>;
                allPools(request?: import("./poolmanager/v1beta1/query").AllPoolsRequest): Promise<import("./poolmanager/v1beta1/query").AllPoolsResponse>;
                listPoolsByDenom(request: import("./poolmanager/v1beta1/query").ListPoolsByDenomRequest): Promise<import("./poolmanager/v1beta1/query").ListPoolsByDenomResponse>;
                spotPrice(request: import("./poolmanager/v1beta1/query").SpotPriceRequest): Promise<import("./poolmanager/v1beta1/query").SpotPriceResponse>;
                totalPoolLiquidity(request: import("./poolmanager/v1beta1/query").TotalPoolLiquidityRequest): Promise<import("./poolmanager/v1beta1/query").TotalPoolLiquidityResponse>;
                totalLiquidity(request?: import("./poolmanager/v1beta1/query").TotalLiquidityRequest): Promise<import("./poolmanager/v1beta1/query").TotalLiquidityResponse>;
                totalVolumeForPool(request: import("./poolmanager/v1beta1/query").TotalVolumeForPoolRequest): Promise<import("./poolmanager/v1beta1/query").TotalVolumeForPoolResponse>;
                tradingPairTakerFee(request: import("./poolmanager/v1beta1/query").TradingPairTakerFeeRequest): Promise<import("./poolmanager/v1beta1/query").TradingPairTakerFeeResponse>;
                estimateTradeBasedOnPriceImpact(request: import("./poolmanager/v1beta1/query").EstimateTradeBasedOnPriceImpactRequest): Promise<import("./poolmanager/v1beta1/query").EstimateTradeBasedOnPriceImpactResponse>;
            };
            v2: {
                spotPriceV2(request: import("./poolmanager/v2/query").SpotPriceRequest): Promise<import("./poolmanager/v2/query").SpotPriceResponse>;
            };
        };
        protorev: {
            v1beta1: {
                params(request?: import("./protorev/v1beta1/query").QueryParamsRequest): Promise<import("./protorev/v1beta1/query").QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: import("./protorev/v1beta1/query").QueryGetProtoRevNumberOfTradesRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: import("./protorev/v1beta1/query").QueryGetProtoRevProfitsByDenomRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: import("./protorev/v1beta1/query").QueryGetProtoRevAllProfitsRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: import("./protorev/v1beta1/query").QueryGetProtoRevStatisticsByRouteRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: import("./protorev/v1beta1/query").QueryGetProtoRevAllRouteStatisticsRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: import("./protorev/v1beta1/query").QueryGetProtoRevTokenPairArbRoutesRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: import("./protorev/v1beta1/query").QueryGetProtoRevAdminAccountRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: import("./protorev/v1beta1/query").QueryGetProtoRevDeveloperAccountRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevInfoByPoolType(request?: import("./protorev/v1beta1/query").QueryGetProtoRevInfoByPoolTypeRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevInfoByPoolTypeResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: import("./protorev/v1beta1/query").QueryGetProtoRevBaseDenomsRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: import("./protorev/v1beta1/query").QueryGetProtoRevEnabledRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevEnabledResponse>;
                getProtoRevPool(request: import("./protorev/v1beta1/query").QueryGetProtoRevPoolRequest): Promise<import("./protorev/v1beta1/query").QueryGetProtoRevPoolResponse>;
                getAllProtocolRevenue(request?: import("./protorev/v1beta1/query").QueryGetAllProtocolRevenueRequest): Promise<import("./protorev/v1beta1/query").QueryGetAllProtocolRevenueResponse>;
            };
        };
        superfluid: {
            params(request?: import("./superfluid/query").QueryParamsRequest): Promise<import("./superfluid/query").QueryParamsResponse>;
            assetType(request: import("./superfluid/query").AssetTypeRequest): Promise<import("./superfluid/query").AssetTypeResponse>;
            allAssets(request?: import("./superfluid/query").AllAssetsRequest): Promise<import("./superfluid/query").AllAssetsResponse>;
            assetMultiplier(request: import("./superfluid/query").AssetMultiplierRequest): Promise<import("./superfluid/query").AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: import("./superfluid/query").AllIntermediaryAccountsRequest): Promise<import("./superfluid/query").AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: import("./superfluid/query").ConnectedIntermediaryAccountRequest): Promise<import("./superfluid/query").ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: import("./superfluid/query").QueryTotalDelegationByValidatorForDenomRequest): Promise<import("./superfluid/query").QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: import("./superfluid/query").TotalSuperfluidDelegationsRequest): Promise<import("./superfluid/query").TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: import("./superfluid/query").SuperfluidDelegationAmountRequest): Promise<import("./superfluid/query").SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: import("./superfluid/query").SuperfluidDelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: import("./superfluid/query").SuperfluidUndelegationsByDelegatorRequest): Promise<import("./superfluid/query").SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: import("./superfluid/query").SuperfluidDelegationsByValidatorDenomRequest): Promise<import("./superfluid/query").SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<import("./superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: import("./superfluid/query").QueryTotalDelegationByDelegatorRequest): Promise<import("./superfluid/query").QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: import("./superfluid/query").QueryUnpoolWhitelistRequest): Promise<import("./superfluid/query").QueryUnpoolWhitelistResponse>;
            userConcentratedSuperfluidPositionsDelegated(request: import("./superfluid/query").UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<import("./superfluid/query").UserConcentratedSuperfluidPositionsDelegatedResponse>;
            userConcentratedSuperfluidPositionsUndelegating(request: import("./superfluid/query").UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<import("./superfluid/query").UserConcentratedSuperfluidPositionsUndelegatingResponse>;
            restSupply(request: import("./superfluid/query").QueryRestSupplyRequest): Promise<import("./superfluid/query").QueryRestSupplyResponse>;
        };
        tokenfactory: {
            v1beta1: {
                params(request?: import("./tokenfactory/v1beta1/query").QueryParamsRequest): Promise<import("./tokenfactory/v1beta1/query").QueryParamsResponse>;
                denomAuthorityMetadata(request: import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): Promise<import("./tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: import("./tokenfactory/v1beta1/query").QueryBeforeSendHookAddressRequest): Promise<import("./tokenfactory/v1beta1/query").QueryBeforeSendHookAddressResponse>;
                allBeforeSendHooksAddresses(request?: import("./tokenfactory/v1beta1/query").QueryAllBeforeSendHooksAddressesRequest): Promise<import("./tokenfactory/v1beta1/query").QueryAllBeforeSendHooksAddressesResponse>;
            };
        };
        treasury: {
            v1beta1: {
                taxRate(request?: import("./treasury/v1beta1/query").QueryTaxRateRequest): Promise<import("./treasury/v1beta1/query").QueryTaxRateResponse>;
                params(request?: import("./treasury/v1beta1/query").QueryParamsRequest): Promise<import("./treasury/v1beta1/query").QueryParamsResponse>;
            };
        };
        twap: {
            v1beta1: {
                params(request?: import("./twap/v1beta1/query").ParamsRequest): Promise<import("./twap/v1beta1/query").ParamsResponse>;
                arithmeticTwap(request: import("./twap/v1beta1/query").ArithmeticTwapRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: import("./twap/v1beta1/query").ArithmeticTwapToNowRequest): Promise<import("./twap/v1beta1/query").ArithmeticTwapToNowResponse>;
                geometricTwap(request: import("./twap/v1beta1/query").GeometricTwapRequest): Promise<import("./twap/v1beta1/query").GeometricTwapResponse>;
                geometricTwapToNow(request: import("./twap/v1beta1/query").GeometricTwapToNowRequest): Promise<import("./twap/v1beta1/query").GeometricTwapToNowResponse>;
            };
        };
        txfees: {
            v1beta1: {
                feeTokens(request?: import("./txfees/v1beta1/query").QueryFeeTokensRequest): Promise<import("./txfees/v1beta1/query").QueryFeeTokensResponse>;
                denomSpotPrice(request: import("./txfees/v1beta1/query").QueryDenomSpotPriceRequest): Promise<import("./txfees/v1beta1/query").QueryDenomSpotPriceResponse>;
                denomPoolId(request: import("./txfees/v1beta1/query").QueryDenomPoolIdRequest): Promise<import("./txfees/v1beta1/query").QueryDenomPoolIdResponse>;
                baseDenom(request?: import("./txfees/v1beta1/query").QueryBaseDenomRequest): Promise<import("./txfees/v1beta1/query").QueryBaseDenomResponse>;
                getEipBaseFee(request?: import("./txfees/v1beta1/query").QueryEipBaseFeeRequest): Promise<import("./txfees/v1beta1/query").QueryEipBaseFeeResponse>;
            };
        };
        valsetpref: {
            v1beta1: {
                userValidatorPreferences(request: import("./valsetpref/v1beta1/query").UserValidatorPreferencesRequest): Promise<import("./valsetpref/v1beta1/query").UserValidatorPreferencesResponse>;
            };
        };
    };
}>;
