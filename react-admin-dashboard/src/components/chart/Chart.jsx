import React from "react";
import './chart.css';
import {
    LineChart, 
    Line, 
    XAxis,     
    CartesianGrid,
    Tooltip,    
    ResponsiveContainer 
} from 'recharts';

export default function Chart ({title, data, dataKey,grid}) {
    return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 /1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="5550bd"/>
                <Line type="monotone" dataKey={dataKey}/>
                <Tooltip/>
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
}
// 그리드 추가 CartesianGrid
// 마우스를 그래프로 움지이면 상세 정보 화면 확인하는 것 Tooltip
// rechart를 이용해서 그래프를 그리는 것까지 완료하였다. 챠트같은 경우는 여러곳에서 재사용 될 것을 고려해서 데이터(title, data, dataKey, grid)를 props 으로 처리하도록 수정할 수 있다. 