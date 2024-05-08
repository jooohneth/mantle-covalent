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

fetchBalances();
