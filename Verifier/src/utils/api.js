const BASE_URL = import.meta.env.VITE_API_URL;

// ISSUE CERTIFICATE
export const issueCertificate = async (formData) => {
  const res = await fetch(`${BASE_URL}/issue`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Issue failed");
  return res.json();
};

// VERIFY BY TXID
export const verifyTransaction = async (txId) => {
  const res = await fetch(`${BASE_URL}/verify/${txId}`);

  if (!res.ok) throw new Error("Verification failed");
  return res.json();
};

// LOAD BY WALLET
export const loadCertificates = async (wallet) => {
  const res = await fetch(`${BASE_URL}/verify/certificates/${wallet}`);

  if (!res.ok) throw new Error("Load failed");
  return res.json();
};