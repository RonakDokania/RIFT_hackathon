import { useState, useEffect } from "react";
import { connectWallet, reconnectSession } from "../utils/wallet";
import { loadCertificates } from "../utils/api";

export default function Student() {
  const [wallet, setWallet] = useState("");
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    reconnectSession().then((acc) => acc && setWallet(acc));
  }, []);

  const handleLoad = async () => {
    if (!wallet) return;

    try {
      const data = await loadCertificates(wallet);
      setCerts(data);
    } catch (err) {
      alert("Failed to load certificates");
    }
  };

  const handleConnect = async () => {
    const acc = await connectWallet();
    setWallet(acc);
  };

  return (
    <div className="form-container">
      <h2>Your Certificates</h2>

      <button onClick={handleConnect} className="btn">
        {wallet ? "Wallet Connected ✅" : "Connect Wallet"}
      </button>

      <button onClick={handleLoad} className="btn" disabled={!wallet}>
        Load
      </button>

      {certs.map((c) => (
        <div key={c.txId} className="card">
          <p><b>Name:</b> {c.name}</p>
          <p><b>Course:</b> {c.course}</p>
          <p><b>TxID:</b> {c.txId}</p>
        </div>
      ))}
    </div>
  );
}