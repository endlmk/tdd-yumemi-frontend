import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Legend, ZAxis } from "recharts";

export type Point = {
  year: number;
  value: number;
};

export type Line = Point[];
export type PopulationOfPref = {
  code: number;
  name: string;
  line: Line;
};
export type PopulationChartData = PopulationOfPref[];

type PopulationChartProps = {
  data: PopulationChartData;
};

const PopulationChart = ({ data }: PopulationChartProps) => {
  const colors = [
    "#f39c12",
    "#45b39d",
    "#af7ac5",
    "#ec7063",
    "#cd6155",
    "#DAF7A6",
    "#2471a3",
    "#a569bd",
    "#f39c12",
    "#1976d2",
    "#FF00FF",
    "#d4e157",
  ];
  return (
    <ScatterChart
      width={400}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis dataKey="year" name="year" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" name="total" />
      <Legend />
      {data.map((p) => {
        return (
          <Scatter
            line
            name={p.name}
            data={p.line}
            fill={colors[(p.code - 1) % colors.length]}
            isAnimationActive={false}
          />
        );
      })}
    </ScatterChart>
  );
};

export default PopulationChart;
