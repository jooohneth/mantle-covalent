import {
  GoldRushProvider,
  NFTWalletTokenListView,
  TokenBalancesListView,
  TokenTransfersListView,
  AddressActivityListView,
} from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";

function App() {
  const params = {
    networks: ["mantle-mainnet"],
    address: "0x94FEC56BBEcEaCC71c9e61623ACE9F8e1B1cf473",
    token: "0xcDA86A272531e8640cD7F1a92c01839911B90bb0",
  };

  return (
    <div className="App">
      <GoldRushProvider apikey={process.env.API_KEY}></GoldRushProvider>
    </div>
  );
}

export default App;
