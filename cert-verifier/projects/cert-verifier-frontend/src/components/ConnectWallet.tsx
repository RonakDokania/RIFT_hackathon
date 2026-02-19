import { useWallet } from "@txnlab/use-wallet";

export default function ConnectWallet({ setAddress }: any) {
  const { wallets, activeAccount } = useWallet();

  return (
    <div>
      {!activeAccount ? (
        wallets.map((wallet) => (
          <button key={wallet.id} onClick={() => wallet.connect()}>
            Connect {wallet.metadata.name}
          </button>
        ))
      ) : (
        <button onClick={() => wallets[0].disconnect()}>
          Disconnect
        </button>
      )}
    </div>
  );
}
