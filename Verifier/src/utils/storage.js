
const KEY = "certificates";

export const getCertificates = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveCertificate = (data) => {
  const existing = getCertificates();
  localStorage.setItem(KEY, JSON.stringify([...existing, data]));
};

export const getCertificatesByWallet = (wallet) => {
  const all = getCertificates();
  return all.filter((cert) => cert.wallet === wallet);
};
