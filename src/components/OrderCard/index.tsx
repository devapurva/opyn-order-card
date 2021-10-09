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
              <a href="/#">Learn More.</a>
            </span>
          </div>
        </div>
      </div>
      <div className="action-card">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="market nav-link  active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              MARKET
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="limit nav-link"
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
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            MARKET
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
