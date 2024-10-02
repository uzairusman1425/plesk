import { useState, useEffect } from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default function ProductivityChart({ productivity }) {
  const [productivityTab, setProductivityTab] = useState("day");
  const [displayData, setDisplayData] = useState([]);

  const convertData = (data, tab) => {
    return data.map((item) => {
      const convertedData = { ...item };
      switch (tab) {
        case "week":
          convertedData.productive = item.productive * 7;
          convertedData.unproductive = item.unproductive * 7;
          convertedData.unidentified = item.unidentified * 7;
          break;
        case "month":
          convertedData.productive = item.productive * 30;
          convertedData.unproductive = item.unproductive * 30;
          convertedData.unidentified = item.unidentified * 30;
          break;
        case "year":
          convertedData.productive = item.productive * 365;
          convertedData.unproductive = item.unproductive * 365;
          convertedData.unidentified = item.unidentified * 365;
          break;
        default:
          break;
      }
      return convertedData;
    });
  };

  useEffect(() => {
    // Update display data whenever the tab changes
    const updatedData = convertData(productivity, productivityTab);
    setDisplayData(updatedData);
  }, [productivityTab, productivity]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center gap-3">
        <Image
          src={"/icons/productivity.png"}
          alt="icon"
          height={17.5}
          width={17.5}
        />
        <p className="font-medium uppercase text-sm">Productivity</p>
      </div>
      <div className="flex flex-row items-center pl-5 text-xs">
        <button
          className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
            productivityTab === "day"
              ? "bg-primary text-white"
              : "text-gray-500"
          }`}
          onClick={() => setProductivityTab("day")}
        >
          Day
        </button>
        <button
          className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
            productivityTab === "week"
              ? "bg-primary text-white"
              : "text-gray-500"
          }`}
          onClick={() => setProductivityTab("week")}
        >
          Week
        </button>
        <button
          className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
            productivityTab === "month"
              ? "bg-primary text-white"
              : "text-gray-500"
          }`}
          onClick={() => setProductivityTab("month")}
        >
          Month
        </button>
        <button
          className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
            productivityTab === "year"
              ? "bg-primary text-white"
              : "text-gray-500"
          }`}
          onClick={() => setProductivityTab("year")}
        >
          Year
        </button>
      </div>
      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={displayData}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis unit={"hrs"} width={75} />
            <Legend iconType="circle" iconSize={10} />
            <Bar dataKey="productive" fill="#2D9CDB" barSize={10} />
            <Bar dataKey="unproductive" fill="#FF0004" barSize={10} />
            <Bar dataKey="unidentified" fill="#000000" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

ProductivityChart.propTypes = {
  productivity: PropTypes.array.isRequired,
};
