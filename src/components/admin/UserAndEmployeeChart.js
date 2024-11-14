"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
} from "recharts";

const Example = () => {
  const [data, setData] = useState();
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const FetchData = () => {
    const token = localStorage.getItem("plesk_admin_access_token");
    axios
      .get(`${API_URL}/api/superadmin/user/yearly-count`, {
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
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Bar dataKey="userCount" fill="#39B6E8" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
