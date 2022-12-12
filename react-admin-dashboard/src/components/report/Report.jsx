import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import './report.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const data = [
  { name: "Group A", value: 400 },
  
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
})=> {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Report() {
  return (
<div className="pip">
<div className="pipname">
                    <label>찾기  </label>
                    <input 
                        type="text"
                        placeholder="입력해주세요"
                        className="pipname1"
                    />    
                </div>

  <div className="pip1">
    <h1 className="pip1Title">생산율</h1>
    <PieChart width={400} height={400} >
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >        
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <h5 className="pip1SubTitle1"><CheckBoxOutlineBlankIcon/>생산 수량</h5>
    <h5 className="pip1SubTitle2"><CheckBoxOutlineBlankIcon/>남은 수량</h5>
    <div className="pipSubTitle">       
      <div className="pip1SubTitle3">생산계획</div>
      <div className="pip1SubTitle4">생산수량</div>      
      <div className="pip1SubTitle5">남은수량</div> 
    </div>

    </div>
    <div className="pip2">
    <h1 className="pip2Title">불량률</h1>

        <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
   
      <h5 className="pip2SubTitle1"><CheckBoxOutlineBlankIcon/>양품 수량</h5>
      <h5 className="pip2SubTitle2"><CheckBoxOutlineBlankIcon/>불량 수량</h5>
      <div className="pip2SubTitle">       
      <div className="pip2SubTitle3">생산계획</div>
      <div className="pip2SubTitle4">양품수량</div>      
      <div className="pip2SubTitle5">불량수량</div> 
      </div> 
    </div>
    </div>
  );
}

