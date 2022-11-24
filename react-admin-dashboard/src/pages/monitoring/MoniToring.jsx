import React from "react";
import './moniToring.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function MoniToring() {
    return <div className="monitoring">
        <h1>생산모니터링</h1>

        
        <CircularProgressbar className="Chart" value={50} text={"50%"} />;
    
        
        
</div>
}