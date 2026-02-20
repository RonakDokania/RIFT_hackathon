import { PeraWalletConnect } from "@perawallet/connect";

export const peraWallet = new PeraWalletConnect();

export const connectWallet = async () => {
  const accounts = await peraWallet.connect();
  return accounts[0];
};

export const reconnectSession = async () => {
  const accounts = await peraWallet.reconnectSession();
  return accounts.length ? accounts[0] : null;
};

export const disconnectWallet = async () => {
  await peraWallet.disconnect();
};