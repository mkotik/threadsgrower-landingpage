"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jul",
    Followers: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug",
    Followers: 110,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep",
    Followers: 415,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Oct",
    Followers: 505,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov",
    Followers: 1221,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Dec",
    Followers: 1430,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jan",
    Followers: 2205,
    pv: 4300,
    amt: 2100,
  },
];

const DemoGraph = () => {
  return (
    <div className="mb-5">
      <h4 className="text-center text-white opacity-70">Follower Count</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={650}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="m-auto mb-5"
        >
          {/* <CartesianGrid strokeDasharray="5 5" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Followers"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DemoGraph;
