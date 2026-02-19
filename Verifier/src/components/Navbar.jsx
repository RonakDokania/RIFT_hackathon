import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Verify</h2>

      <div>
        <Link to="/issuer">Issuer</Link>
        <Link to="/student">Student</Link>
        <Link to="/verifier">Verifier</Link>
      </div>
    </div>
  );
}
