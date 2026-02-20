import { useState } from "react";
import { connectWallet } from "../utils/wallet";
import { issueCertificate } from "../utils/api";

export default function Issuer() {
  const [wallet, setWallet] = useState("");

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ connect only on button click
  const handleConnect = async () => {
    const acc = await connectWallet();
    setWallet(acc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!wallet) return alert("Connect wallet first");

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();
      formData.append("name", name);
      formData.append("course", course);
      formData.append("file", file);
      formData.append("wallet", wallet);

      await issueCertificate(formData);

      setMessage("✅ Certificate issued");
      setName("");
      setCourse("");
      setFile(null);
    } catch {
      setMessage("❌ Issue failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Issue Certificate</h2>

      {/* ✅ WALLET BUTTON */}
      <button onClick={handleConnect} className="btn">
        {wallet ? "Wallet Connected ✅" : "Connect Wallet"}
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn" disabled={loading}>
          {loading ? "Issuing..." : "Issue Certificate"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}