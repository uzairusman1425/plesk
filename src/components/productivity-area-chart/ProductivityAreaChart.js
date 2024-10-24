import { AreaChart, Legend, ResponsiveContainer, Area } from "recharts";
import PropTypes from "prop-types";

export default function ProductivityAreaChart({
  email,
  totalTime,
  productivity,
}) {
  //   const productivity = [
  //     {
  //       productive: 0.030262154722222222,
  //       unidentified: 0.007255397222222223,
  //       unproductive: 0.03478236472222222,
  //     },
  //     {
  //       productive: 0.0302621547222222,
  //       unidentified: 0.0072553972222223,
  //       unproductive: 0.03478236472222222,
  //     },
  //     {
  //       productive: 0.0302621547222222,
  //       unidentified: 0.0072553972222223,
  //       unproductive: 0.034782364722222,
  //     },
  //   ];

  return (
    <div className="size-full flex flex-col items-center gap-3">
      <div className="size-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={productivity}>
            <Area
              type="bump"
              dataKey="productive"
              stroke="#2D9CDB"
              fill="#2D9CDB"
            />
            <Area
              type="bump"
              dataKey="unproductive"
              stroke="#FF0004"
              fill="#FF0004"
            />
            <Area
              type="bump"
              dataKey="unidentified"
              stroke="#000000"
              fill="#000000"
            />
            <Legend iconType="circle" iconSize={10} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-row items-center justify-center gap-10 w-full">
        <p className="text-gray- truncate">{email}</p>
        <p className="h-7 w-20 flex items-center justify-center rounded bg-gray-500 text-white font-semibold text-xs">
          {totalTime}
        </p>
      </div>
    </div>
  );
}

ProductivityAreaChart.propTypes = {
  productivity: PropTypes.array.isRequired,
  email: PropTypes.string.isRequired,
  totalTime: PropTypes.string.isRequired,
};
