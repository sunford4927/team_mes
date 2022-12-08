import React, { useEffect, useState } from "react";
import "./moniToring.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import ProgressBar from "./chart/Chart";
import { Card, CardBody, CardTitle, Table, FormGroup, Input } from "reactstrap"
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
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


  function math1(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math2(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math3(num, valuecount) {
    return (num / valuecount) * 100;
  }

  function cheel(){
    const testData = [
      { bgcolor: "#6a1b9a", completed: Math.floor(percent1) },
    ];
    return <ProgressBar key={0} bgcolor={testData[0]['bgcolor']} completed={testData[0]['completed']}/>
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
    const [data, setData] = useState('');
    function Make_ID(dummyData) {
      for (var i =0; i < dummyData.length; i++) {
        dummyData[i]["id"] = i+1;
      }
      return dummyData;
    }
    const ProgressBar = (props) => {
      const { bgcolor, completed } = props;
      return (
        <div>
          <div>
            <span>{`${completed}%`}</span>
          </div>
        </div>
      );
    };
    const columns = [
      {field: "id", headerName: "ID", width: 120 },
      {
        field: "item_code",
        headerName: "LOT번호",
        width: 150,
      },
      {
        field: "item_name",
        headerName: "생산명",
        width: 150,
      },
      {
        field: "sort",
        headerName: "계획수량",
        width: 150,
      },
      {
        field: "spec",
        headerName: "생산진행상태",
        width: 500,
        renderCell : (props)=>{
            console.log(props)
         return(
          <div id='bar' style={{backgroundColor:"red", width:props.row.spec}}>{cheel()}</div>
         )
        }
        //ProgressBar
      },
    ];
    useEffect(() => {
      const getdata = async() => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/items/");
            const result1 = await axios.get("http://127.0.0.1:8000/plans/");
            //console.log(data);
            console.log(result)
            result.data[0].spec = 100;
             setData(Make_ID(result.data, result1.data));
        } catch (error) {
          console.error(error);
        }
      };
      getdata();
    },[]);
  return (
    
      <div className="monitoring">


        <div className="item">
            <div className= "itemTitleContainer">
                <h3 className="itemTitle">생산 모니터링</h3>
            </div>
            <div className="itemContainer">
                <div className="itemcode">
                    <label>생산 모니터링  </label>
                </div>
            </div>
            <Box sx={{ height: 700, width: "650%", margin: 0 }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        >
        </DataGrid>
      </Box>
        </div>


      </div>
  
  );
}
