import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Legend } from "recharts";

const CompositionChart = () => {
  const data = [
    { year: 1980, value: 200 },
    { year: 1990, value: 100 },
    { year: 2000, value: 300 },
    { year: 2010, value: 250 },
    { year: 2020, value: 400 },
    { year: 2030, value: 280 },
  ];

  return (
    <ScatterChart
      width={400}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis dataKey="year" name="年" />
      <YAxis dataKey="value" name="総人口" />
      <Scatter line name="テスト" data={data} fill="#ff7300" />
    </ScatterChart>
  );
};

export default CompositionChart;
