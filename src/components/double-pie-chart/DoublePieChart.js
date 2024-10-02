import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import { colors } from "@/utils/constants";
import ChartLegend from "../chart-legend/ChartLegend";

export default function DoublePieChart({ list }) {
  console.log(list);
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="size-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={list?.slice(0, 4)}
              dataKey="hours"
              cx="50%"
              cy="50%"
              innerRadius={115}
              outerRadius={150}
            >
              {list?.slice(0, 4)?.map((_, key) => (
                <Cell key={key} fill={colors[key % colors?.length]} />
              ))}
            </Pie>
            <Pie
              data={list?.slice(4, -1)}
              dataKey="hours"
              cx="50%"
              cy="50%"
              outerRadius={115}
              innerRadius={90}
            >
              {list?.slice(4, -1)?.map((_, key) => (
                <Cell key={key} fill={colors[(key + 4) % colors?.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend list={list} />
    </div>
  );
}

DoublePieChart.propTypes = {
  list: PropTypes.array.isRequired,
};
