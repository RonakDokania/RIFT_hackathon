import { useState } from "react";
import "../styles/form.css";

export default function Issuer() {
  const [formData, setFormData] = useState({
    name: "",
    wallet: "",
    course: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const certificates =
      JSON.parse(localStorage.getItem("certificates")) || [];

    const walletOwner = certificates.find(
      (cert) => cert.studentWallet === formData.wallet
    );

    if (
      walletOwner &&
      walletOwner.studentName !== formData.name
    ) {
      alert("❌ User already registered with this wallet");
      return;
    }

    const duplicateCourse = certificates.find(
      (cert) =>
        cert.studentWallet === formData.wallet &&
        cert.course.toLowerCase() === formData.course.toLowerCase()
    );

    if (duplicateCourse) {
      alert("❌ Certificate for this course already issued!");
      return;
    }

    const newCertificate = {
      id: Date.now(),
      studentName: formData.name,
      studentWallet: formData.wallet,
      course: formData.course,
      issueDate: new Date().toLocaleDateString(),
      cid: "CID_" + Date.now(),
    };

    const updatedCertificates = [...certificates, newCertificate];

    localStorage.setItem(
      "certificates",
      JSON.stringify(updatedCertificates)
    );

    alert("✅ Certificate Issued Successfully");

    setFormData({
      name: "",
      wallet: "",
      course: "",
      file: null,
    });
  };

  return (
    <div className="form-container">
      <h2>Issue Certificate</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="wallet"
          placeholder="Wallet Address"
          value={formData.wallet}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <input type="file" name="file" onChange={handleChange} />

        <button type="submit">Issue Certificate</button>
      </form>
    </div>
  );
}
