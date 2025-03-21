import React, { useState, useEffect } from "react";
import { useSpotRate } from "../context/SpotRateContext";
import Gold from "./Gold";
import Silver from "./Silver";

const ChartSection = () => {
  const { goldData, silverData } = useSpotRate();

  const [chartData, setChartData] = useState({
    gold: [{ time: "06:00", value: goldData.bid }],
    silver: [{ time: "06:00", value: silverData.bid }],
  });

  const [selectedChart, setSelectedChart] = useState("gold");

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newGoldValue = goldData.bid;
        const newSilverValue = silverData.bid;
        const newTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const newGoldData = [
          ...prevData.gold.slice(1),
          { time: newTime, value: newGoldValue },
        ];
        const newSilverData = [
          ...prevData.silver.slice(1),
          { time: newTime, value: newSilverValue },
        ];

        return {
          gold: newGoldData,
          silver: newSilverData,
        };
      });
    }, 5000); // Update every 5 seconds

    // Cleanup interval
    return () => clearInterval(interval);
  }, [goldData.bid, silverData.bid]);

  // Prepare the chart data for recharts
  const goldChartData = chartData.gold.map((item) => ({
    time: item.time,
    value: item.value,
  }));

  const silverChartData = chartData.silver.map((item) => ({
    time: item.time,
    value: item.value,
  }));

  const handleChartToggle = (chartType) => {
    setSelectedChart(chartType);
  };

  return (
    <section className="relative px-10 py-0 mt-16 max-md:px-5 max-md:py-0 max-md:mt-10 max-sm:overflow-x-auto max-sm:p-0 max-sm:mt-8">
      <div className="flex flex-row justify-start items-center gap-10 mb-16">
        <h1 className="text-4xl font-semibold text-zinc-800 max-sm:text-3xl">Live Rates</h1>
        <div className="flex gap-12 items-center max-md:flex-col max-md:gap-5">
          <article
            onClick={() => handleChartToggle("gold")}
            className={`pt-5 pr-9 pb-3.5 pl-8 rounded-3xl min-w-[247px] bg-[#F8EDD0] max-md:w-full max-md:max-w-[400px] max-sm:p-4 cursor-pointer ${selectedChart === "gold" ? "shadow-lg" : ""}`}
          >
            <div className="flex flex-col gap-1.5">
              <h2 className="text-base font-semibold text-[#BA8A54]">Gold</h2>
              <div className="flex gap-2.5 items-center">
                <span className="text-xl font-medium text-black font-poppins">{goldData.bid}</span>
                <span className="text-xs text-black ml-5">USD/APZ</span>
              </div>
            </div>
          </article>
          <article
            onClick={() => handleChartToggle("silver")}
            className={`pt-5 pr-9 pb-3.5 pl-8 rounded-3xl min-w-[247px] bg-[#FBFAFA] max-md:w-full max-md:max-w-[400px] max-sm:p-4 cursor-pointer ${selectedChart === "silver" ? "shadow-lg" : ""}`}
          >
            <div className="flex flex-col gap-1.5">
              <h2 className="text-base font-semibold text-[#796868]">Silver</h2>
              <div className="flex gap-2.5 items-center">
                <span className="text-xl font-medium text-black font-poppins">{silverData.bid}</span>
                <span className="text-xs text-black font-inter ml-5">USD/APZ</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Conditional rendering of the chart based on selected chart */}
      <div className="relative mx-0 my-5">
        {selectedChart === "gold" ? (
          <Gold goldChartData={goldChartData} />
        ) : (
          <Silver silverChartData={silverChartData} />
        )}
      </div>
    </section>
  );
};

export default ChartSection;
