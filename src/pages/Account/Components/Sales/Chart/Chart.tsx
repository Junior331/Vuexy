import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { data } from "../../../../../services/mocks/ChartData";
import { radarCharts } from "../../../../../services/mocks/RadarChart";
import { RadarType } from "./@types";
import * as S from "./ChartStyled";

export const ChartRadar = () => {

  const handleClick = (e: string) => {
    console.log("e ::",e)
  };

  return (
    <S.ChartRadarContainer>
      <RadarChart
        outerRadius={250}
        width={500}
        cx={248}
        cy={280}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        {radarCharts.map((item: RadarType) => (
          <Radar
            name={item.name}
            fill={item.fill}
            stroke={item.stroke}
            dataKey={item.dataKey}
            fillOpacity={item.fillOpacity}
          />
        ))}
        <Legend
          verticalAlign="top"
          height={36}
          align="left"
          onClick={(e) => handleClick(e)} 
        />
      </RadarChart>
    </S.ChartRadarContainer>
  );
};
