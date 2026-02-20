import { useState, useEffect } from "react";
import { verifyTransaction } from "../utils/api";
import { connectWallet, reconnectSession } from "../utils/wallet";

export default function Verifier() {
  const [wallet, setWallet] = useState("");
  const [txId, setTxId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    reconnectSession().then((acc) => acc && setWallet(acc));
  }, []);

  const handleConnect = async () => {
    const acc = await connectWallet();
    setWallet(acc);
  };

  const handleVerify = async () => {
    if (!txId) return;

    try {
      setLoading(true);
      setError("");
      const res = await verifyTransaction(txId);
      setData(res.certificate);
    } catch {
      setError("Transaction not found ❌");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Verify Certificate</h2>

      <button onClick={handleConnect} className="btn">
        {wallet ? "Wallet Connected ✅" : "Connect Wallet"}
      </button>

      <input
        placeholder="Enter TxID"
        value={txId}
        onChange={(e) => setTxId(e.target.value)}
      />

      <button onClick={handleVerify} className="btn" disabled={!txId || loading}>
        {loading ? "Verifying..." : "Verify"}
      </button>

      {error && <p className="error">{error}</p>}

      {data && (
        <>
          <div className="card">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Course:</strong> {data.course}</p>
            <p><strong>Wallet:</strong> {data.wallet}</p>
          </div>

          <a
            href={`https://testnet.algoexplorer.io/tx/${data.txId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Explorer 🔗
          </a>
        </>
      )}
    </div>
  );
}