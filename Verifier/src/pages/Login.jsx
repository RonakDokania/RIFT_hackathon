import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

export default function Login() {
  const [wallet, setWallet] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!wallet) return alert("Enter wallet address");

    localStorage.setItem("currentWallet", wallet);
    navigate("/student");
  };

  return (
    <div className="page-center">
      <div className="form-card">
        <h2>Student Login</h2>

        <input
          type="text"
          placeholder="Enter Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}