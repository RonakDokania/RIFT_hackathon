import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { WalletProvider, NETWORKS } from "@txnlab/use-wallet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WalletProvider
    value={{
      networks: [NETWORKS.LOCALNET],
    }}
  >
    <App />
  </WalletProvider>
);
