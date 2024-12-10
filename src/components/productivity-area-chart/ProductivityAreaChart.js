import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProductivityChart = ({ data }) => {
  const transformedData = data.map((entry) => {
    const aggregated = entry.productivity.reduce(
      (acc, curr) => ({
        productive: acc.productive + curr.productive,
        unproductive: acc.unproductive + curr.unproductive,
        unidentified: acc.unidentified + curr.unidentified,
      }),
      { productive: 0, unproductive: 0, unidentified: 0 }
    );

    return {
      name: `${entry.name}`, // Use just the name without totalTime
      ...aggregated,
      totalTime: entry.totalTime, // Store totalTime for easy access in tooltip
    };
  });

  // Custom Tooltip with totalTime included
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, totalTime } = payload[0].payload; // Access totalTime directly from payload

      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#f4f4f4",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
            {name} ({totalTime})
          </p>
          <p style={{ color: "#091057" }}>
            {`Productive: ${(
              payload.find((p) => p.dataKey === "productive")?.value * 100
            ).toFixed(2)}%`}
          </p>
          <p style={{ color: "#024CAA" }}>
            {`Unproductive: ${(
              payload.find((p) => p.dataKey === "unproductive")?.value * 100
            ).toFixed(2)}%`}
          </p>
          <p style={{ color: "#EC8305" }}>
            {`Unidentified: ${(
              payload.find((p) => p.dataKey === "unidentified")?.value * 100
            ).toFixed(2)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  // Function to truncate names if too long
  const truncateName = (name) =>
    name.length > 15 ? `${name.substring(0, 12)}...` : name;
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Employee Productivity Chart
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transformedData.map((d) => ({
            ...d,
            name: truncateName(d.name),
          }))}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#333", fontSize: 10 }}
            interval={0}
            angle={-15}
            textAnchor="end"
          />
          <YAxis tick={{ fill: "#333" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              marginTop: "10px",
              textAlign: "center",
            }}
          />
          <Bar
            dataKey="productive"
            stackId="a"
            fill="#091057"
            name="Productive"
            barSize={30}
          />
          <Bar
            dataKey="unproductive"
            stackId="a"
            fill="#024CAA"
            name="Unproductive"
            barSize={30}
          />
          <Bar
            dataKey="unidentified"
            fill="#EC8305"
            name="Unidentified"
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;
