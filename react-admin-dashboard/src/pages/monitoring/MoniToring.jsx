import React, { useEffect, useState } from "react";
import "./moniToring.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import ProgressBar from "./chart/Chart";
import { Card, CardBody, CardTitle, Table, FormGroup, Input } from "reactstrap"
////////////////////////////////////////////////////////
// import 'bootstrap.css';

// function dic(result){
//   var dic_list = []
//   var moniter_dic = {}
//   for(var u=0; u<result.length; u++){
//     moniter_dic[u]['lot_num'] = result[u]['lot_num'];
//     moniter_dic[u]['plan_name'] = result[u]['plan_name'];
//     moniter_dic[u]['quantity'] = result[u]['quantity'];
//     dic_list.push(moniter_dic)
//     var moniter_dic = {}
//   }
// }

export default function MoniToring(props) {
  
  const [num1, setNum1] = useState(0);
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
  const [result, setResult] = useState([]);
  const testData = [
    { bgcolor: "#6a1b9a", completed: Math.floor(percent1) },
  ];

  function math1(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math2(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math3(num, valuecount) {
    return (num / valuecount) * 100;
  }


  useEffect(() => {
    console.log("Test1");
    const outdata = async () => {
      try {
        const logdata = await axios.get("http://127.0.0.1:8000/productionlog/");
        const result = await axios.get("http://127.0.0.1:8000/plans/");
        // 원하는정보만 모아서 딕셔너리 구축
        setResult(result.data)

        // 데이터 0라인별로 모아서 저장
        var data_list1 = [];
        for (var i = 324; i < 450; i += 3) {
          data_list1.push(logdata.data[i]);
        }
        // 데이터 1라인별로 모아서 저장        
        var data_list2 = [];
        for (var i = 325; i < 451; i += 3) {
          data_list2.push(logdata.data[i]);
        }
        // 데이터 2라인별로 모아서 저장
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
console.log(testData[0]['completed'])
  return (
    
      <div className="monitoring">


        <Table  className="no-wrap mt-3 align-middle table-table" responsive borderless striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>NO</th>
                <th>LOT번호</th>
                <th className="table-score">생산명</th>
                <th>계획수량</th>
                <th>생산완료예정일</th>
                <th>생산계획등록일</th>
                <th>생산진행상태</th>
              </tr>
            </thead>
            <tbody>
              {result.map((tdata, index) => (
                <tr key={index} className="border-top table-tr">
                  <td>
                    <div className="d-flex align-items-center p-2">
                        <h6 className="mb-0">{index}</h6>
                    </div>
                  </td>
                  <td>{tdata.lot_num}</td>
                  <td>
                    {tdata.plan_name}
                  </td>
                  <td>{tdata.quantity}</td>
                  <td>{tdata.reg_date}</td>
                  <td>{tdata.due_date}</td>
                  <td>
                    <ProgressBar key={index} bgcolor={testData[0]['bgcolor']} completed={testData[0]['completed']}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>


      </div>
  
  );
}
