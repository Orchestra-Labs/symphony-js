import { getSigningOsmosisClient, osmosis } from '../src';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const mnemonic = '<mnemonic>';
const rpcEndpoint = 'https://symphony-rpc.kleomedes.network';
const prefix = 'symphony';

const { swapSend } = osmosis.market.v1beta1.MessageComposer.withTypeUrl;

async function getWalletFromMnemonic(): Promise<DirectSecp256k1HdWallet> {
  return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: prefix,
  });
}

async function run() {
  const wallet = await getWalletFromMnemonic();
  const client = await getSigningOsmosisClient({
    rpcEndpoint: rpcEndpoint,
    signer: wallet,
  });
  const [{ address: signerAddress }] = await wallet.getAccounts();
  const balance = await client.getBalance(signerAddress, 'note');

  console.log('note balance', balance);

  const msg = swapSend({
    fromAddress: signerAddress,
    toAddress: signerAddress,
    offerCoin: { denom: 'note', amount: '1000000' },
    askDenom: 'uusd',
  });

  const res = await client.signAndBroadcast(
    signerAddress, // string
    [msg], // EncodeObject[]
    {
      amount: [{ denom: 'note', amount: '1000000' }],
      gas: '100000',
    },
    'swap send note to uusd',
  );

  console.log('tx broadcasted', res);

  const balanceAfter = await client.getBalance(signerAddress, 'uusd');
  console.log('uusd balance after', balanceAfter);
}

run().catch(console.error);
