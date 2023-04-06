import React, { useEffect, useState } from "react";
import "./moniToring.css";
// import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import ProgressBar from "./chart/Chart";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Make_ID } from "../../make";

export default function MoniToring(props) {
  const [compostate, setCompostate] = useState(0)
  // setCompostate(compostate+1)
  console.log(compostate)
  // 1라인 실시간 생산량
  const [num1, setNum1] = useState(0);
  // const [indata1, setIndata1] = useState();
  const [valuecount1, setValuecount1] = useState("0");
  // 2라인 실시간 생산량
  const [num2, setNum2] = useState(0);
  // const [indata2, setIndata2] = useState();
  const [valuecount2, setValuecount2] = useState("0");
  // 3라인 실시간 생산량
  const [num3, setNum3] = useState(0);
  // const [indata3, setIndata3] = useState();
  // 3라인에 들어올 데이터의 개수
  const [valuecount3, setValuecount3] = useState("0");
  // 1라인 생산율
  const [percent1, setPercent1] = useState(0);
  // 2라인 생산율
  const [percent2, setPercent2] = useState(0);
  // 3라인 생산율
  const [percent3, setPercent3] = useState(0);
  function math1(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math2(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math3(num, valuecount) {
    return (num / valuecount) * 100;
  }
  // 차트에 들어갈 데이터 주머니
  const testData = [
    // completed : 현재생산율   num : 현재생산수량
    { completed: Math.floor(percent1), num: num1 },
    { completed: Math.floor(percent2), num: num2 },
    { completed: Math.floor(percent3), num: num3 },
    { completed: 100, num: 20000 },
    { completed: 100, num: 20000 },
    { completed: 100, num: 20000 },
    { completed: 100, num: 40000 },
    { completed: 100, num: 30000 },
    { completed: 100, num: 1500 },
    { completed: 100, num: 5000 },
  ];
  useEffect(() => {
    const outdata = async () => {
      try {
        const logdata = await axios.get(
          "http://127.0.0.1:8000/mes/TbProductionLog/"
        );
        const result = await axios.get("http://127.0.0.1:8000/mes/plans/");
        // 원하는정보만 모아서 딕셔너리 구축
        setData(Make_ID(result.data));
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
        setValuecount1(data_list1[data_list1.length - 1]["metalgoodcnt"]);
        setValuecount2(data_list2[data_list2.length - 1]["metalgoodcnt"]);
        setValuecount3(data_list3[data_list3.length - 1]["metalgoodcnt"]);
        // console.log(data_list3)
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
        }, 1000);
        // math(data_list)
      } catch (error) {
        console.error(error);
      }
    };
    outdata();
  }, []);
  useEffect(() => {
    setPercent1(math1(num1, valuecount1));
  }, [num1]);
  useEffect(() => {
    setPercent2(math2(num2, valuecount2));
  }, [num2]);
  useEffect(() => {
    setPercent3(math3(num3, valuecount3));
  }, [num3]);
  const [data, setData] = useState("");

  const columns = [
    // 데이터 그리드 내용삽입을위한 형식지정
    { field: "id", headerName: "ID", width: 40 },
    {
      headerAlign: "center",
      field: "lot_num",
      headerName: "LOT 번호",
      width: 100,
      align: "center",
    },
    {
      headerAlign: "center",
      field: "plan_name",
      headerName: "생산명",
      width: 150,
      align: "center",
    },
    {
      field: "quantity",
      headerName: "계획 수량",
      width: 100,
      align: "center",
    },
    {
      field: "due_date",
      headerName: "생산 등록 날짜",
      width: 170,
      align: "center",
      headerAlign: "center",
    },
    {
      headerAlign: "center",
      field: "reg_date",
      headerName: "생산 완료 날짜",
      width: 170,
      align: "center",
    },
    {
      headerAlign: "center",
      field: "spec",
      headerName: "생산 진행 상태",
      width: 400,

      renderCell: (props) => {
        return (
          <div id="bar">
            <ProgressBar
              key={0}
              completed={testData[props.row.id - 1].completed}
              num={testData[props.row.id - 1].num}
              count={props.row.quantity}
              id={props.row.id}
            />
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/mes/items/");
        result.data[0].spec = percent1 * 3;
        result.data[1].spec = percent2 * 3;
        result.data[2].spec = percent3 * 3;
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, [percent1]);
  return (
    <div className="monitoring">
      <div className="monitorem">
        <div className="inner">
        <div className="monitorTitleContainer">
          <h3 className="monitorTitle">생산 모니터링</h3>
        </div>
        <Box sx={{ height: 400, margin: -1, marginLeft: "13px" }}>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            sx={{ width: 1150, margin: "0 auto" }}
          ></DataGrid>
        </Box>
        </div>
      </div>
    </div>
  );
}
