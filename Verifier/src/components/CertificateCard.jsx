import "../styles/card.css";

export default function CertificateCard({ name, wallet, date }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Issued to: {wallet}</p>
      <p>Date: {date}</p>
      <button>View Certificate</button>
    </div>
  );
}