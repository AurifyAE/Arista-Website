import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();

    useEffect(() => {
        // Check if the script is already added
        if (document.getElementById("tradingview-widget-script")) return;

        // Create the script element
        const script = document.createElement("script");
        script.id = "tradingview-widget-script";
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      {
        "width": "800",
        "height": "410",
        "symbol": "CAPITALCOM:GOLD",
        "interval": "15",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "2",
        "locale": "en",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "allow_symbol_change": false,
        "save_image": false,
        "hide_volume": true,
        "border_color": "transparent",
        "support_host": "https://www.tradingview.com"
      }`;

        // Append the script to the container only once
        container.current.appendChild(script);
    }, []); // The empty dependency array ensures this effect runs only once on mount

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
    );
}

export default memo(TradingViewWidget);
