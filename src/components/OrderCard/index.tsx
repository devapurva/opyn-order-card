import { ToastContainer } from "react-toastify";
import useConnectMetamask from "../../hooks/connectMetamask";

const OrderCard = () => {
  const {
    details,
    loading,
    ethEnabled,
    setMax,
    setDetails,
    spotClass,
    setSpotClass,
    currentStep,
    incrementSteps,
  } = useConnectMetamask();

  return (
    <div className="order-card">
      {/* CARD HEADING */}
      <div className="heading title">
        Order Card <i className="ri-information-line info"></i>
      </div>

      {/* BUY/SELL CARD, ALONG WITH CURRENCY, DATE, SPREADSHEET */}
      <div className="action-card">
        <div className="button-group">
          <button className="buy">BUY</button>
          <button className="sell">SELL</button>
        </div>
        <div className="currency-date">
          <div className="currency-type">WETH</div>
          <div className="date">FRI, 30 APR 2021</div>
        </div>
        <div className="action-price">
          <i className="ri-arrow-left-right-line icon"></i>
          <div className="price">PUT -- $2080 STRIKE</div>
        </div>
        <div className="details">
          <div className="text">
            <i className="ri-information-line info"></i>
            <span>
              To create a spread, select another option.{" "}
              <a
                href="https://opyn.gitbook.io/opyn/#what-is-a-spread"
                target="_blank"
                rel="noreferrer"
              >
                Learn More.
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* MARKET/LIMIT TABS MAIN CARD */}
      <div className="market-limit-card">
        {/* TABS LIST */}
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li className="nav-item market" role="presentation">
            <button
              className="nav-link  active"
              id="market-tab"
              data-bs-toggle="tab"
              data-bs-target="#market"
              type="button"
              role="tab"
              aria-controls="market"
              aria-selected="true"
            >
              MARKET
            </button>
          </li>
          <li className="nav-item limit" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              LIMIT
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {/* MARKET TAB CONTENT */}
          <div
            className="tab-pane fade show active"
            id="market"
            role="tabpanel"
            aria-labelledby="market-tab"
          >
            <div className="metrics">
              {/* POSITION SIZE */}
              <div className="position">
                <div className="heading">
                  POSITION SIZE <i className="ri-information-line info"></i>
                </div>
                <div className="otoken">
                  <div className="balance">
                    <span className="text">oToken Balance:</span>
                    <span className="number">{details?.position?.total}</span>
                  </div>
                  <div className="token-input">
                    <input
                      type="number"
                      min="0"
                      max={details?.position?.total}
                      step="0.1"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          position: {
                            ...details.position,
                            current: parseFloat(e.target.value),
                          },
                        })
                      }
                      className="form-control"
                      value={details?.position?.current}
                    ></input>
                    <span className="max-button">
                      <span className="button" onClick={setMax}>
                        max
                      </span>{" "}
                      <span>oTokens</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* COLLATERALIZATION RATIO */}
              <div className="collateral">
                <div className="heading">
                  COLLATERALIZATION RATIO{" "}
                  <i className="ri-information-line info"></i>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder=""
                    aria-label="collaterization-ratio"
                    aria-describedby="basic-addon2"
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        spotPercent: parseInt(e.target.value),
                        collateralPercent: parseInt(e.target.value),
                      })
                    }
                    value={details?.collateralPercent}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    %
                  </span>
                </div>
              </div>
              {/* SPOT CHANGE */}
              <div className="spot">
                <div className="heading">
                  SPOT CHANGE <i className="ri-information-line info"></i>
                </div>
                <div className="spot-input">
                  <div className="action-button">
                    <div
                      className={
                        spotClass === "minus" ? "action active" : "action"
                      }
                      onClick={() => {
                        setSpotClass("minus");
                        setDetails({
                          ...details,
                          spotPercent: details.spotPercent - 1,
                          collateralPercent: details.spotPercent - 1,
                        });
                      }}
                    >
                      <i className="ri-subtract-fill minus"></i>
                    </div>
                    <div
                      className={
                        spotClass === "plus" ? "action active" : "action"
                      }
                      onClick={() => {
                        setSpotClass("plus");
                        setDetails({
                          ...details,
                          spotPercent: details.spotPercent + 1,
                          collateralPercent: details.spotPercent + 1,
                        });
                      }}
                    >
                      <i className="ri-add-fill plus"></i>
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="spot-change"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          spotPercent: parseInt(e.target.value),
                          collateralPercent: parseInt(e.target.value),
                        })
                      }
                      value={details?.spotPercent}
                    />
                    <span className="input-group-text" id="basic-addon2">
                      %
                    </span>
                  </div>
                </div>
              </div>
              {/* COLLATERAL RANGE SLIDER */}
              <div className="collateral-range">
                <div className="split-heading">
                  <div className="safe"></div>
                  <div className="collateral"></div>
                </div>
              </div>
              {/* LIQUIDATION PRICE*/}
              <div className="liquidation">
                <div className="heading">
                  Liquidation price <i className="ri-information-line info"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="liquidation-price"
                  aria-describedby="basic-addon2"
                  value={`~$${details?.liquidationPrice}`}
                  disabled
                />
              </div>
              {/* COLLATERAL PERCENT*/}
              <div className="liquidation">
                <div className="heading">
                  COLLATERAL <i className="ri-information-line info"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon2"
                  value={`~$${details?.collateral}`}
                  disabled
                />
              </div>
              {/* TX ACTION LIST*/}
              <div className="step-details">
                <div className="step-heading">TX ACTION</div>
                <div className="step-list">
                  {/* eslint-disable-next-line array-callback-return */}
                  {details?.txAction?.map((item, index) => {
                    if (item?.text) {
                      return (
                        <div
                          key={`txaction${item.id}`}
                          className={
                            item?.active === 1
                              ? "list-item active"
                              : "list-item"
                          }
                        >
                          {item?.icon === 1 ? (
                            <i className="ri-toggle-line right"></i>
                          ) : (
                            <i className="ri-checkbox-circle-line right"></i>
                          )}
                          <span className="text">{item?.text}</span>
                          <i className="ri-information-line info"></i>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              {/* TX SUMMARY LIST*/}
              <div className="action-summary">
                <div className="action-heading">TX Summary</div>
                <div className="sub-heading">
                  {details?.txSummary?.title}
                  <i className="ri-information-line info"></i>
                </div>
                <div className="currency">{details?.txSummary?.value}</div>
                <div className="action-list">
                  {details?.txSummary?.list?.map((item, index) => (
                    <div key={`txsummary${item.id}`} className="list-item">
                      <div className="name">
                        <span className="text">{item?.text}</span>
                        <i className="ri-information-line info"></i>
                      </div>
                      <div className="cost">
                        <span className="number">{item?.value}</span>
                        {item?.currency && (
                          <span className="text">{item?.currency}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>{" "}
              {/* TOTAL RECEIVED*/}
              <div className="action-footer">
                <div className="heading">
                  Total to Receive<i className="ri-information-line info"></i>
                </div>
                <div className="cost">
                  <span className="number">{details?.totalReceive}</span>
                  <span className="crypto">
                    +{details?.totalReceiveAddOn}{" "}
                    {details?.totalReceiveCurrency}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* LIMIT TAB CONTENT*/}
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            LIMIT
          </div>
        </div>
      </div>
      {/* FOOTER BUTTONS*/}
      <div className="footer">
        <button
          type="button"
          className={`btn btn-${currentStep?.buttonType}`}
          onClick={() => {
            if (currentStep?.id === 1) {
              ethEnabled();
            } else {
              incrementSteps();
            }
          }}
          disabled={loading}
        >
          {loading && (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}{" "}
          {currentStep?.buttonText}
        </button>
      </div>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default OrderCard;
