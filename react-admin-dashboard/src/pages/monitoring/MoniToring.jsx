import React, { useEffect, useState } from "react";
import "./moniToring.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
function math(num, valuecount) {
  return (num / valuecount) * 100;
}
export default function MoniToring() {
  const [num, setNum] = useState();
  const [indata, setIndata] = useState();
  const [valuecount, setValuecount] = useState("0");
  const [percent, setPercent] = useState("0");
  useEffect(() => {
    console.log("Test1")
    const outdata = async () => {
      try {
        const logdata = await axios.get("http://127.0.0.1:8000/productionlog/");
        var data_list = [];
        for (var i = 324; i < 450; i += 3) {
          data_list.push(logdata.data[i]);
        }
        setIndata(data_list);
        setValuecount(data_list[data_list.length - 1]["metalgoodcnt"]);
        var j = 0;
        var timer = setInterval(function () {
          if (j < 42) {
            setNum(data_list[j]["metalgoodcnt"]);
            j++;
          } else {
            clearInterval(timer);
          }
          console.log(j);
        }, 1000);
        console.log(num)

        // math(data_list)
      } catch (error) {
        console.error(error);
      }


    };
    outdata();
  }, []);
  useEffect(() => {
    console.log("Test2")
    setPercent(math(num, valuecount));
    console.log(percent);
  }, [num]);
  console.log(valuecount);
  return (
    <div className="monitoring">
      <h1>생산모니터링</h1>
      <CircularProgressbar
        className="Chart"
        value={percent}
        text={percent}
      />
      ;
    </div>
  );
}

// {
//     "curdatetime": "20210506091500",
//     "linecode": 1,
//     "metalgoodcnt": 106,
//     "metalbadcnt": 0,
//     "weightgoodcnt": 99,
//     "weighthighcnt": 3,
//     "weightlowcnt": 3
// },
