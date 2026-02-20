import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <h2>Verify</h2>

      <div className="nav-links">
        <Link to="/issuer">Issuer</Link>
        <Link to="/student">Student</Link>
        <Link to="/verifier">Verifier</Link>
      </div>
    </div>
  );
}