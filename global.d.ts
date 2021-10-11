interface ICardDetails {
  position: {
    current: number;
    total: number;
  };
  collateralRatio: number;
  spotPercent: number;
  collateralPercent: number;
  liquidationPrice: number;
  collateral: number;
  txAction: ITXACTION[];
  txSummary: ITXSUMMARY;
  totalReceive: number;
  totalReceiveAddOn: number;
  totalReceiveCurrency: string;
}

interface ITXSUMMARY {
  title: string;
  titleTooltip: string;
  value: string;
  list: ITXSUMMARYLIST[];
}

interface ITXSUMMARYLIST {
  id: number;
  text: string;
  tooltip: string;
  value: number | string;
  currency: string | null;
}

interface ITXACTION {
  id: number;
  icon: number;
  text: string | null;
  tooltip: string;
  active: number;
  buttonText: string;
  buttonType: string;
}
