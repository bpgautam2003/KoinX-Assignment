import React from "react";
import { useState, useEffect } from "react";
import btc from "../Assets/btc.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TradingViewWidget from "./TradingViewWidget";

const Coin = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2C%20usd&include_24hr_change=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins([data]);
      });
  }, []);
  return (
    <>
      {coins.map((coin) => (
        <div className="coin-container">
          <div className="coin-name">
            <div className="coin-info">
              <img src={btc} alt=" " className="coin-logo" />
              <h1>Bitcoin</h1>
              <p>BTC</p>
            </div>
            <div className="rank">Rank #1</div>
          </div>
          <div className="coin-val">
            <div className="price-coin">
              <div className="usd">
                $ {Math.round((coin.bitcoin.inr * 100) / 82) / 100}{" "}
              </div>
              <div className="inr">
                <CurrencyRupeeIcon fontSize="small" />
                {coin.bitcoin.inr}{" "}
              </div>
            </div>
            <div className="coins-price1">
              {Math.round(coin.bitcoin.inr_24h_change * 100) / 100}%
            </div>
            <p>(24H)</p>
          </div>

          <div className="chart">
            <TradingViewWidget />
          </div>
        </div>
      ))}
    </>
  );
};

export default Coin;
