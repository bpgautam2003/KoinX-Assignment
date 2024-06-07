import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";

const TrendingCoins = () => {
  const [tCoins, setTCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        const coins = data.coins || [];
        const filteredCoins = coins.filter((coin) => coin.item.id !== "pepe");
        const sortedCoins = filteredCoins.sort(
          (a, b) => a.item.market_cap_rank - b.item.market_cap_rank
        );

        setTCoins(sortedCoins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const scrollLeft = () => {
    document.querySelector(".trending-cards-container1").scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".trending-cards-container1").scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="trendingcards">
      <h1>Trending Coins</h1>
      <div className="carousel">
        <IconButton sx={{ height: "40px" }} onClick={scrollLeft}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <div className="trending-cards-container1">
          {tCoins.map((coin, index) => (
            <div className="cards" key={index}>
              <div className="cards-name">
                <img src={coin.item.thumb} alt={coin.item.name} className="coin-logo" />
                <p>{coin.item.symbol}</p>
                <div
                  className={
                    coin.item.data.price_change_percentage_24h.inr < 0
                      ? "loss"
                      : "profit"
                  }
                >
                  {Math.round(
                    coin.item.data.price_change_percentage_24h.inr * 100
                  ) / 100}
                  %
                </div>
              </div>
              <div className="cards-price">
                <h2>{Math.round(coin.item.data.price * 100000) /
                  100000}</h2>
              </div>
              <div className="sparkline">
                <img src={coin.item.sparkline} alt="Sparkline" />
              </div>
            </div>
          ))}
        </div>
        <IconButton sx={{ height: "40px" }} onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TrendingCoins;
