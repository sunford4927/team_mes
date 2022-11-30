import React, { useEffect, useState } from "react";
import "./moniToring.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

export default function MoniToring() {
    function roof_data(){
        setInterval(function(){
            // for(var i=0, i < production.length; i++){
                // if();
            // }
            // 3초마다 실행
        },3000)

    }

//   useEffect(() => {
//     const Plansgetdata = async () => {
//       try {
//         var production = await axios.get('http://127.0.0.1:8000/production_log');
        
        

//       } catch (error) {
//         console.error(error);
//       }
//     };
//     Plansgetdata();
//   }, []);

  return (
    <div className="monitoring">
      <h1>생산모니터링</h1>
      <CircularProgressbar className="Chart" value={100} text={"50%"} />;
    </div>
  );
}
