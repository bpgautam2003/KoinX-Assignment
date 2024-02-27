// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1D|XTVCUSDT"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "Arial, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "fontColor": "rgba(67, 70, 81, 1)",
          "gridLineColor": "rgba(42, 46, 57, 0.09)",
          "lineWidth": 1,
          "lineType": 0,
          "dateRanges": [
            "1d|5",
            "1w|15",
            "1m|60",
            "3m|120",
            "6m|180",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(24, 72, 204, 1)",
          "topColor": "rgba(144, 191, 249, 0.09)",
          "bottomColor": "rgba(255, 255, 255, 1)",
          "dateFormat": "dd MMM",
          "timeHoursFormat": "24-hours"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="chart-name">BitCoin Price Chart (USD)</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
