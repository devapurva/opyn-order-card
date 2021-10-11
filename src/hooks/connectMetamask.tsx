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
  const [details, setDetails] = useState<ICardDetails>({ ...cardDetails });
  const [spotClass, setSpotClass] = useState<string>("plus");
  const [currentStep, setCurrentStep] = useState<ITXACTION>({
    ...cardDetails.txAction?.[0],
  });

  useEffect(() => {
    if (accounts?.length > 0 && !accountBalance) {
      getBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts, accountBalance]);

  const resetStates = () => {
    const resetCard = { ...cardDetails };
    resetCard.txAction[1].active = 1;
    resetCard.txAction[4].active = 0;
    setDetails(resetCard);
    setCurrentStep(resetCard.txAction[0]);
    setSpotClass("plus");
    setAccounts([]);
    setAccountBalance(null);
  };

  const incrementSteps = () => {
    if (currentStep.id === 4) {
      if (details?.position?.current === 0) {
        return toast.error("oTokens cannot be Zero", { autoClose: 5000 });
      } else if (details?.position?.current > details?.position?.total) {
        return toast.error("oTokens cannot be more than total balance", {
          autoClose: 5000,
        });
      }
    }
    if (currentStep.id === 5) {
      toast.success("Trade Submitted", { autoClose: 2000 });
      setTimeout(() => {
        toast.info("Generating new order card..", { autoClose: 5000 });
        resetStates();
      }, 3000);
    }

    setLoading(true);
    const txActionTemp = [...details.txAction];
    const activeStep = (item: ITXACTION) => item.active === 1;
    const activeIndex = txActionTemp.findIndex(activeStep);
    if (activeIndex + 1 < txActionTemp.length) {
      txActionTemp[activeIndex].active = 0;
      txActionTemp[activeIndex + 1].active = 1;
      setCurrentStep(txActionTemp[activeIndex + 1]);
    }
    setTimeout(() => {
      setDetails({
        ...details,
        txAction: txActionTemp,
      });
      setLoading(false);
    }, 500);
  };

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
          setCurrentStep(cardDetails.txAction?.[1]);
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
                total: parseFloat(bal),
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
    loading,
    details,
    spotClass,
    currentStep,
    setDetails,
    ethEnabled,
    setMax,
    setSpotClass,
    incrementSteps,
  };
};

export default useConnectMetamask;
