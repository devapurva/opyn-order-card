import { useEffect, useState } from "react";
import Web3 from "web3";
import { toast } from "react-toastify";
import { cardDetails } from "utils/common";

declare let window: any;

const useConnectMetamask = () => {
  let web3: Web3;
  const [accounts, setAccounts] = useState<string[]>([]);
  const [accountBalance, setAccountBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<ICardDetails>(cardDetails);

  useEffect(() => {
    if (accounts?.length > 0 && !accountBalance) {
      getBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts, accountBalance]);

  const setMax = () => {
    setDetails({
      ...details,
      position: {
        ...details.position,
        current: details.position.total,
      },
    });
  };

  const ethEnabled = async () => {
    if (window.ethereum) {
      setLoading(true);
      web3 = new Web3(window.ethereum);
      await web3.eth
        .requestAccounts()
        .then((response: Array<string>) => {
          toast.success("Connected to Metamask!", {
            autoClose: 5000,
          });
          setAccounts(response);
        })
        .catch(() =>
          toast.error("Failed to connect!", {
            autoClose: 5000,
          })
        );
      return true;
    } else {
      setLoading(false);
      toast.error("Couldnt find 'window.ethereum", {
        autoClose: 5000,
      });
    }
    return false;
  };

  const getBalance = () => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      if (accounts?.[0]) {
        toast.info("Fetching account balance..", {
          autoClose: 5000,
        });
        web3.eth
          .getBalance(`${accounts?.[0]}`)
          .then((response: string | null) => {
            const bal = web3.utils.fromWei(`${response}`, "ether");
            setAccountBalance(bal);
            setDetails({
              ...details,
              position: {
                ...details.position,
                total: parseInt(bal),
              },
            });
          })
          .catch(() =>
            toast.error("Failed to fetch balance.", {
              autoClose: 5000,
            })
          );
        setLoading(false);
      } else {
        setLoading(false);
        toast.error("No accounts found!", {
          autoClose: 5000,
        });
      }
    }
  };

  return {
    accounts,
    accountBalance,
    loading,
    details,
    setAccounts,
    setAccountBalance,
    setLoading,
    setDetails,
    ethEnabled,
    getBalance,
    setMax,
  };
};

export default useConnectMetamask;
