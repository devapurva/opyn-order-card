const OrderCard = () => {
  return (
    <div className="order-card">
      <div className="heading">
        Order Card <i className="ri-information-line info"></i>
      </div>
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
      <div className="market-limit-card">
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
          <div
            className="tab-pane fade show active"
            id="market"
            role="tabpanel"
            aria-labelledby="market-tab"
          >
            <div className="metrics">
              <div className="position">
                <div className="heading">
                  POSITION SIZE <i className="ri-information-line info"></i>
                </div>
                <div className="otoken">
                  <div className="balance">
                    <span className="text">oToken Balance:</span>
                    <span className="number">21.042</span>
                  </div>
                  <div className="token-input">
                    <input className="form-control" value="100.00"></input>
                    <span className="max-button">
                      <span className="button">max</span> <span>oTokens</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="collateral">
                <div className="heading">
                  COLLATERALIZATION RATIO{" "}
                  <i className="ri-information-line info"></i>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                    value="25"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    %
                  </span>
                </div>
              </div>
              <div className="spot">
                <div className="heading">
                  SPOT CHANGE <i className="ri-information-line info"></i>
                </div>
                <div className="spot-input">
                  <div className="action-button">
                    <div className="action active">
                      <i className="ri-subtract-fill minus"></i>
                    </div>
                    <div className="action">
                      <i className="ri-add-fill plus"></i>
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      aria-label=""
                      aria-describedby="basic-addon2"
                      value="25"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div className="collateral-range">
                <div className="split-heading">
                  <div className="safe"></div>
                  <div className="collateral"></div>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default OrderCard;
