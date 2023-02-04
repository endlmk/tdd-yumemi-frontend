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
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
    "#8c6d31",
    "#e7ba52",
    "#17a2b8",
    "#a52a2a",
    "#b5cf6b",
    "#c5c2c7",
    "#6bd2e7",
    "#52c817",
    "#b85217",
    "#2a52a5",
    "#6b5cf2",
    "#c2c7c5",
    "#e76bd2",
    "#1752c8",
    "#5217b8",
    "#a5152a",
    "#f26b5c",
    "#c7c5c2",
    "#d2e76b",
    "#c81752",
    "#2a5152",
    "#00a1ff",
    "#ffa100",
    "#0cff00",
    "#ff00a1",
    "#a100ff",
    "#00ffa1",
  ];
  return (
    <ScatterChart
      width={400}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis
        dataKey="year"
        name="year"
        ticks={data.length ? undefined : [""]}
        allowDuplicatedCategory={false}
      />
      <YAxis dataKey="value" name="total" />
      <Legend />
      {data.map((p) => {
        return (
          <Scatter
            line
            name={p.name}
            data={p.line}
            fill={colors[p.code - 1]}
            isAnimationActive={false}
          />
        );
      })}
    </ScatterChart>
  );
};

export default PopulationChart;
