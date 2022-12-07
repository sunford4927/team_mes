import React, { useEffect, useState } from "react";
import "./moniToring.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import Chart from "./chart/Chart";
////////////////////////////////////////////////////////
// import 'bootstrap.css';
//

// function Title() {
//   return (
//     <div>
//       <h1>공정별 생산진행율 현황</h1>
//     </div>
//   )
// }

function math1(num, valuecount) {
  return (num / valuecount) * 100;
}
function math2(num, valuecount) {
  return (num / valuecount) * 100;
}
function math3(num, valuecount) {
  return (num / valuecount) * 100;
}

export default function MoniToring() {
  const [num1, setNum1] = useState();
  // const [indata1, setIndata1] = useState();
  const [valuecount1, setValuecount1] = useState("0");
  const [num2, setNum2] = useState(0);
  // const [indata2, setIndata2] = useState();
  const [valuecount2, setValuecount2] = useState("0");
  const [num3, setNum3] = useState(0);
  // const [indata3, setIndata3] = useState();
  const [valuecount3, setValuecount3] = useState("0");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const [percent3, setPercent3] = useState(0);

  useEffect(() => {
    console.log("Test1");
    const outdata = async () => {
      try {
        const logdata = await axios.get("http://127.0.0.1:8000/productionlog/");
        var data_list1 = [];
        for (var i = 324; i < 450; i += 3) {
          data_list1.push(logdata.data[i]);
        }
        var data_list2 = [];
        for (var i = 325; i < 451; i += 3) {
          data_list2.push(logdata.data[i]);
        }
        var data_list3 = [];
        for (var i = 326; i < 452; i += 3) {
          data_list3.push(logdata.data[i]);
        }
        console.log(data_list1[data_list1.length - 1]["metalgoodcnt"]);
        console.log(data_list2[data_list2.length - 1]["metalgoodcnt"]);
        // console.log(data_list3)
        setValuecount1(data_list1[data_list1.length - 1]["metalgoodcnt"]);
        setValuecount2(data_list2[data_list2.length - 1]["metalgoodcnt"]);
        setValuecount3(data_list3[data_list3.length - 1]["metalgoodcnt"]);
        var j = 0;
        var timer = setInterval(function () {
          if (j < 42) {
            setNum1(data_list1[j]["metalgoodcnt"]);
            setNum2(data_list2[j]["metalgoodcnt"]);
            setNum3(data_list3[j]["metalgoodcnt"]);
            j++;
          } else {
            clearInterval(timer);
          }
          console.log(j);
        }, 1000);
        console.log(num2);

        // math(data_list)
      } catch (error) {
        console.error(error);
      }
    };
    outdata();
  }, []);
  useEffect(() => {
    // console.log("Test2");
    setPercent1(math1(num1, valuecount1));
    // console.log(percent1);
  }, [num1]);
  useEffect(() => {
    setPercent2(math2(num2, valuecount2));
    console.log(percent2);
  }, [num2]);
  useEffect(() => {
    setPercent3(math3(num3, valuecount3));
    console.log(percent3);
  }, [num3]);
  
  return (
    <div>
    <div className="monitoring">
      <div className="bar">
      </div>
        <div className="chart_one">
          <CircularProgressbar
            className="Chart1"
            value={percent1}
            text={Math.floor(percent1) + "%"}
          />
        </div>
        <div className="chart_two">
          <CircularProgressbar
            className="Chart2"
            value={percent2}
            text={Math.floor(percent2) + "%"}
          />
        </div>
        <div className="chart_thr">
          <CircularProgressbar
            className="Chart3"
            value={percent3}
            text={Math.floor(percent3) + "%"}
          />
        </div>
    </div>
        <div>
        <Chart num1={num1} num2={num2} num3={num3}/>
        </div>
    </div>
  );
}
