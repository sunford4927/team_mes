import "./Chart.css";
import React from "react";

import {
  BarChart,
  Label,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
import { useState, useEffect } from "react";
import { margin } from "@mui/system";
import { red } from "@mui/material/colors";

export default function Chart({ data, update }) {
    // 원하는 타이밍에 데이터 입력을 위한 state값 선언
  const [bigdata, setbigdata] = useState();
  let lee = [];
  for (var i = 0; i < data.length; i++) {
      lee.push(data[i]);
    }
    useEffect(() => {
        setbigdata(lee);
    }, [update]);

  return (
      <div>
    <BarChart
      barSize={20}      
      width={650}
      height={300}
      data={bigdata}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="linecode" /> 
      <YAxis label={{value:'불량개수', angle:90, position:"left",}}/> 
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
      <Brush dataKey="curdatetime" height={30} stroke="#8884d8" />
      <Bar dataKey="metalbadcnt" stackId="b" name="금속불량" fill="#8884d8" />
      <Bar dataKey="weightlowcnt" name="중량미달" fill="#82ca9d" />
      <Bar dataKey="weighthighcnt" name="중량초과" fill="#ffc658" />
    </BarChart>
    </div>
  );
}
