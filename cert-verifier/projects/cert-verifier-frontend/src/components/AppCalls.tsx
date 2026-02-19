import { useWallet } from "@txnlab/use-wallet";
import { CertVerifierClient } from "../contracts/CertVerifierClient";

export default function AppCalls() {
  const { activeAccount, algodClient } = useWallet();

  const callHello = async () => {
    const appClient = new CertVerifierClient(
      {
        resolveBy: "id",
        id: Number(import.meta.env.VITE_APP_ID),
      },
      algodClient
    );

    const response = await appClient.hello({
      name: "Sakshi",
      sender: activeAccount!.address,
    });

    alert(response.return);
  };

  return <button onClick={callHello}>Call Contract</button>;
}
