import React from 'react';
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
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const DarkBarChart = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#1e1e1e', padding: 16, borderRadius: 12 }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: '#2e2e2e', border: 'none' }} itemStyle={{ color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#ccc' }} />
          <Bar dataKey="pv" fill="#5f67d3" activeBar={<Rectangle fill="#aa77ff" stroke="#666" />} />
          <Bar dataKey="uv" fill="#4caf89" activeBar={<Rectangle fill="#88ff88" stroke="#666" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DarkBarChart;
