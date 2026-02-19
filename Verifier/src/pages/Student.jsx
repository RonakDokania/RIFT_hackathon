import { useState } from "react";
import "../styles/student.css";
import { getCertificatesByWallet } from "../utils/storage";

export default function Student() {
  const [wallet, setWallet] = useState("");
  const [certs, setCerts] = useState([]);

  const handleLogin = () => {
    const data = getCertificatesByWallet(wallet);
    setCerts(data);
  };

  return (
    <div className="student-container">

      <h2>Your Certificates</h2>

      <div className="student-search">
        <input
          type="text"
          placeholder="Enter Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <button onClick={handleLogin}>Load</button>
      </div>

      {certs.length === 0 ? (
        <p className="no-cert">No certificates found</p>
      ) : (
        <div className="cert-grid">
          {certs.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <h3>{cert.course}</h3>
              <p><b>Name:</b> {cert.studentName}</p>
              <p><b>Wallet:</b> {cert.studentWallet}</p>
              <p><b>Date:</b> {cert.issueDate}</p>
              <p><b>CID:</b> {cert.cid}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
