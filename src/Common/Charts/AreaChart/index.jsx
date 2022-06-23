import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


const AreChart = ({data}) => {
  return (
    <div>
      <AreaChart
        width={680}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='10%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='90%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' tick={false} />
        <YAxis tick={false} axisLine={false} />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='value'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </div>
  );
};

export default AreChart;
