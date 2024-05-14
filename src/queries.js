import "dotenv/config";
import { CovalentClient } from "@covalenthq/client-sdk";

const client = new CovalentClient(process.env.API_KEY);

const params = {
  network: "mantle-mainnet",
  address: "0x94FEC56BBEcEaCC71c9e61623ACE9F8e1B1cf473",
  tx: "0x93ca28fc94d2e8d061d81a69663f237e02c5e16f849df93cfcd6deae2f4b9e42",
  token: "0xcDA86A272531e8640cD7F1a92c01839911B90bb0"
}


// BALANCES
const fetchBalances = async ({network, address}) => {
  const response = await client.BalanceService.getTokenBalancesForWalletAddress(
    network,
    address,
    {
      nft: true,
      quoteCurrency: "USD",
      noNftFetch: true,
      noSpam: true,
      noNftAssetMetada2a: false,
    }
  );
  console.log(response.data);
};

fetchBalances(params);

// APPROVALS
const fetchApprovals = async ({network, address}) => {
  const response = await client.SecurityService.getApprovals(
    network,
    address
  );
  console.log(response.data);
};

fetchApprovals(params);

// BLOCK
const fetchBlock = async ({network}) => {
  const response = await client.BaseService.getBlock(
    network,
    "latest"
  );
  console.log(response.data);
};

fetchBlock(params);

// TRANSACTION
const fetchTransaction = async ({network, tx}) => {
  const response = await client.TransactionService.getTransaction(
    network,
    tx,
    {
      quoteCurrency: "USD",
      noLogs: false,
      withSafe: true,
    }
  );
  console.log(response.data);
};

fetchTransaction(params);

//HISTORICAL TOKEN PRICE
const fetchTokenPrice = async ({network, token}) => {
  const response = await client.PricingService.getTokenPrices(
    network,
    "USD",
    token,
    {
      from: "2024-05-01",
      to: "2024-05-09",
      pricesAtAsc: true,
    }
  );
  console.log(response.data);
};

fetchTokenPrice(params);

// GAS PRICES
const fetchGasPrice = async ({network}) => {
  const response = await client.BaseService.getGasPrices(network, "erc20", {quoteCurrency: "USD"})
  console.log(response.data.items[0]);
}

fetchGasPrice(params)
