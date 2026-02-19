import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import "../styles/card.css";

export default function Verifier() {
  const [wallet, setWallet] = useState("");
  const [certificates, setCertificates] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleVerify = () => {
    const data = JSON.parse(localStorage.getItem("certificates")) || [];

    const result = data.filter(
      (cert) => cert.studentWallet === wallet
    );

    setCertificates(result);
    setSearched(true);
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Verify Certificate</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Wallet Address"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
          <button onClick={handleVerify}>Verify</button>
        </div>

        {searched && certificates.length > 0 && (
          <h3 style={{ color: "green" }}>✅ Verified</h3>
        )}

        {searched && certificates.length === 0 && (
          <h3 style={{ color: "red" }}>❌ No Record Found</h3>
        )}

        <div className="card-container">
          {certificates.map((cert) => (
            <div className="card" key={cert.id}>
              <h3>{cert.course}</h3>
              <p><strong>Name:</strong> {cert.studentName}</p>
              <p><strong>Wallet:</strong> {cert.studentWallet}</p>
              <p><strong>Date:</strong> {cert.issueDate}</p>
              <p><strong>CID:</strong> {cert.cid}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
