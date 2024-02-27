import React from "react";
import { useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        const coins = data.coins || [];
        const sortedCoins = coins.sort(
          (a, b) => a.item.market_cap_rank - b.item.market_cap_rank
        );
        setTrendingCoins(sortedCoins.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="trending">
      <h1>Trending coins (24h) </h1>
      {trendingCoins.map((coin) => (
        <div className="trending-coins">
          <div className="coins-name">
            <img src={coin.item.thumb} alt={coin.item.name} />
            <h3>{coin.item.name}</h3>
          </div>
          <div
            className={
              coin.item.data.price_change_percentage_24h.inr < 0
                ? "loss"
                : "profit"
            }
          >
            {coin.item.data.price_change_percentage_24h.inr < 0
              ? <ArrowDropDownIcon/>
              : <ArrowDropUpIcon/>}
            {Math.round(coin.item.data.price_change_percentage_24h.inr * 100) /
              100}
            %
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
