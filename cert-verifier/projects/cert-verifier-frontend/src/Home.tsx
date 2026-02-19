import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import AppCalls from "./components/AppCalls";

export default function Home() {
  const [address, setAddress] = useState<string | null>(null);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Cert Verifier dApp 🚀</h1>

      {/* WALLET CONNECTION */}
      <ConnectWallet setAddress={setAddress} />

      {/* SHOW CONNECTED ADDRESS */}
      {address && <p>Connected: {address}</p>}

      {/* CONTRACT CALLS */}
      {address && <AppCalls />}
    </div>
  );
}
