import axios from "axios";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserBarChart = () => {
  const [data, setData] = useState();
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const FetchData = () => {
    const token = localStorage.getItem("plesk_admin_access_token");
    axios
      .get(`${API_URL}/api/superadmin/cemployees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="company" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="employees"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserBarChart;
