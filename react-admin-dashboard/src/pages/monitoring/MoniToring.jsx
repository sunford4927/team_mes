import React, { useEffect, useState } from "react";
import "./moniToring.css";
import ProgressBar from "./chart/Chart";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export default function MoniToring() {
  // 1라인 실시간 생산량
  const [num1, setNum1] = useState(0);
  const [valuecount1, setValuecount1] = useState("0");
  // 2라인 실시간 생산량
  const [num2, setNum2] = useState(0);
  const [valuecount2, setValuecount2] = useState("0");
  // 3라인 실시간 생산량
  const [num3, setNum3] = useState(0);
  // 3라인에 들어올 데이터의 개수
  const [valuecount3, setValuecount3] = useState("0");
  // 1라인 생산율
  const [percent1, setPercent1] = useState(0);
  // 2라인 생산율
  const [percent2, setPercent2] = useState(0);
  // 3라인 생산율
  const [percent3, setPercent3] = useState(0);

  const [data, setData] = useState("");

  const {line_one, line_two, line_three, plan} = useSelector(state => ({
    line_one : [...state.monitoringReducer.line1],
    line_two : [...state.monitoringReducer.line2],
    line_three : [...state.monitoringReducer.line3],
    plan : [...state.planReducer.plan]
  }));
  // console.log(line_one.length)
  useEffect(()=>{
    setValuecount1(line_one[line_one.length - 1]["metalgoodcnt"]);
    setValuecount2(line_two[line_two.length - 1]["metalgoodcnt"]);
    setValuecount3(line_three[line_three.length - 1]["metalgoodcnt"]);
    setData(plan)
  },[])

  useEffect(() => {
    outdata()
  }, []);


  function math1(num, valuecount) {
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
  const outdata = async () => {
    try {
      var j = 0;
      var timer = setInterval(function () {
        if (j < 42) {
          setNum1(line_one[j]["metalgoodcnt"]);
          setNum2(line_two[j]["metalgoodcnt"]);
          setNum3(line_three[j]["metalgoodcnt"]);
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

  useEffect(() => {
    setPercent1(math1(num1, valuecount1));
  }, [num1]);
  useEffect(() => {
    setPercent2(math1(num2, valuecount2));
  }, [num2]);
  useEffect(() => {
    setPercent3(math1(num3, valuecount3));
  }, [num3]);


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
              count={props.row.quantity/4}
              id={props.row.id}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="monitoring">
      <div className="monitorem">
        <div className="inner">
        <div className="monitorTitleContainer">
          <h3 className="monitorTitle">생산 모니터링</h3>
        </div>
        <Box sx={{ height:372, margin: -1, marginLeft: "13px" }}>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ width: 1150, margin: "0 auto" }}
          ></DataGrid>
        </Box>
        </div>
      </div>
    </div>
  );
}
