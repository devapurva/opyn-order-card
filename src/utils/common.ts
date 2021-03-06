export const cardDetails = {
  position: {
    current: 0,
    total: 0,
  },
  collateralRatio: 25,
  spotPercent: 25,
  collateralPercent: 25,
  liquidationPrice: 146.79,
  collateral: 100.0,
  txAction: [
    // icon: 1- toggle, 2 - check-cirle
    {
      id: 1,
      icon: 1,
      text: null,
      tooltip: "",
      active: 0,
      buttonText: "CONNECT TO METAMASK",
      buttonType: "danger",
    },
    {
      id: 2,
      icon: 1,
      text: "1. Enable WETH Wrapper",
      tooltip: "",
      active: 1,
      buttonText: "ENABLE WETH WRAPPER",
      buttonType: "success",
    },
    {
      id: 3,
      icon: 1,
      text: "2. Approve collateral to Opyn Contracts",
      tooltip: "",
      active: 0,
      buttonText: "APPROVE COLLATERAL",
      buttonType: "success",
    },
    {
      id: 4,
      icon: 1,
      text: "3. Permit oToken to wrapper contracts",
      tooltip: "",
      active: 0,
      buttonText: "PERMIT OTOKEN",
      buttonType: "success",
    },
    {
      id: 5,
      icon: 2,
      text: "4. Permit, deposit, mint & trade",
      tooltip: "",
      active: 0,
      buttonText: "SUBMIT TRADE",
      buttonType: "success",
    },
  ],
  txSummary: {
    title: "Premium/oToken",
    titleTooltip: "",
    value: "USDC",
    list: [
      {
        id: 1,
        text: "Est. Total Cost",
        tooltip: "",
        value: 103.937,
        currency: "USDC",
      },
      {
        id: 2,
        text: "Market Impact",
        tooltip: "",
        value: "0.02%",
        currency: null,
      },
      {
        id: 3,
        text: "0x Protocol Fee",
        tooltip: "",
        value: 0.0983,
        currency: "ETH",
      },
      {
        id: 4,
        text: "Collateral",
        tooltip: "",
        value: 0.00234,
        currency: "USDC",
      },
    ],
  },
  totalReceive: 113.532,
  totalReceiveAddOn: 0.0983,
  totalReceiveCurrency: "ETH",
};
