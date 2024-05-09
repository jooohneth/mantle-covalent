import "dotenv/config";
import { CovalentClient } from "@covalenthq/client-sdk";

const client = new CovalentClient(process.env.API_KEY);

// BALANCES
const fetchBalances = async () => {
  const response = await client.BalanceService.getTokenBalancesForWalletAddress(
    "mantle-mainnet",
    "0x40FEfD52714f298b9EaD6760753aAA720438D4bB",
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

//fetchBalances();

// APPROVALS
const fetchApprovals = async () => {
  const response = await client.SecurityService.getApprovals(
    "mantle-mainnet",
    "0x40FEfD52714f298b9EaD6760753aAA720438D4bB"
  );
  console.log(response.data);
};

//fetchApprovals();

// BLOCK
const fetchBlock = async () => {
  const response = await client.BaseService.getBlock(
    "mantle-mainnet",
    "latest"
  );
  console.log(response.data);
};

//fetchBlock();

// TRANSACTION
const fetchTransaction = async () => {
  const response = await client.TransactionService.getTransaction(
    "mantle-mainnet",
    "0x93ca28fc94d2e8d061d81a69663f237e02c5e16f849df93cfcd6deae2f4b9e42",
    {
      quoteCurrency: "USD",
      noLogs: false,
      withSafe: true,
    }
  );
  console.log(response.data);
};

fetchTransaction();
