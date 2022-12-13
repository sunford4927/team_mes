import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./report.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import axios from "axios";
import Chart from "./chart/Chart";

export default function Report() {

  // props 넘길 state 값
  const [next1, setNext1] = useState([]);
  // props 넘길 state 값
  const [next2, setNext2] = useState([]);
  // props 넘길 state 값
  const [next3, setNext3] = useState([]);
  // 페이지 렌더링 기준state 값
  const [update, setUpdate] = useState("");
  // 페이지에 사용될 데이터 값
  const [main_data, setMain_data] = useState([]);
  // 검색값 저장
  const [search, setSearch] = useState("");
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
  // data 변수 안에 들어갈 생산량
  const [data_Cnt, setData_Cnt] = useState(0);
  // data에사용될 총생산량
  const [all_Cnt, setAll_Cnt] = useState(0);
  function math1(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math2(num, valuecount) {
    return (num / valuecount) * 100;
  }
  function math3(num, valuecount) {
    return (num / valuecount) * 100;
  }

  // 생상율 차트 색깔
  const COLORS = ["#FF8042", "#0088FE", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x + 10}
        y={y + 10}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  const data = [
    { name: "Group A", value: all_Cnt - data_Cnt },
    { name: "Group A", value: all_Cnt },
  ];

  useEffect(() => {
    console.log("Test1");
    const outdata = async () => {
      try {
        const logdata = await axios.get(
          "http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/productionlog2/"
        );
        const result = await axios.get(
          "http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/plans/"
        );
        // 원하는정보만 모아서 딕셔너리 구축
        setOneData(Make_ID(result.data));
        // 데이터 0라인별로 모아서 저장
        var data_list1 = [];
        for (var i = 324; i < 450; i += 3) {
          data_list1.push(logdata.data[i]);
        }setNext1(data_list1)
        // 데이터 1라인별로 모아서 저장
        var data_list2 = [];
        for (var i = 325; i < 451; i += 3) {
          data_list2.push(logdata.data[i]);
        }setNext2(data_list2)
        // 데이터 2라인별로 모아서 저장
        var data_list3 = [];
        for (var i = 326; i < 452; i += 3) {
          data_list3.push(logdata.data[i]);
        }setNext3(data_list3)
        setValuecount1(
          data_list2[data_list2.length - 1]["weighthighcnt"]
        );
        setValuecount2(data_list2[data_list2.length - 1]["weighthighcnt"]);
        // setValuecount3(data_list3[data_list3.length - 1]["weighthighcnt"]);
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
          console.log(j);
        }, 1000);
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
  }, [num2]);
  useEffect(() => {
    setPercent3(math3(num3, valuecount3));
  }, [num3]);
  const [Onedata, setOneData] = useState("");
  function Make_ID(dummyData) {
    for (var i = 0; i < dummyData.length; i++) {
      dummyData[i]["id"] = i + 1;
    }
    return dummyData;
  }

  // console.log(percent1,percent2,percent3)
  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get(
          "http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/items/"
        );
        result.data[0].spec = percent1 * 3;
        result.data[1].spec = percent2 * 3;
        result.data[2].spec = percent3 * 3;
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, [percent1]);

  useEffect(() => {
    for (var i = 0; i < Onedata.length; i++) {
      if (Onedata[i].lot_num == search) {
        Onedata[i].valuecount1 = valuecount1;

        setMain_data(Onedata[i]);
      }
    }
    let all_sum = 0
    for(var i=0; i <next1.length; i++){
      all_sum += next1[i].metalbadcnt
      all_sum += next1[i].weighthighcnt
      all_sum += next1[i].weightlowcnt
      all_sum += next2[i].metalbadcnt
      all_sum += next2[i].weighthighcnt
      all_sum += next2[i].weightlowcnt
      all_sum += next3[i].metalbadcnt
      all_sum += next3[i].weighthighcnt
      all_sum += next3[i].weightlowcnt
    }
    setValuecount3(all_sum);
  }, [update]);
  useEffect(() => {
    setAll_Cnt(Number(main_data.quantity) + valuecount3);
    setData_Cnt(main_data.quantity);

    console.log(main_data);
    console.log(all_Cnt);
  }, [main_data]);

  return (
    <div className="pip">
      <div className="pipname">

        <button
          value={search}
          onClick={() => {
            setUpdate("play");
          }}
        >
          {" "}
          찾기{" "}
        </button>
        <input
          type="text"
          placeholder=" Lot 번호를 입력해주세요"
          className="pipname1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="pip1">
        <h2 className="pip1Title">총생산율</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#0088FE"
            dataKey="value"
            
            >
            {data.map((entry, index) => (
              <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}

              
              />
            ))}
          </Pie>
        </PieChart>
        <h5 className="pip1SubTitle1">
          <CheckBoxOutlineBlankIcon />
          생산 수량
        </h5>
        <h5 className="pip1SubTitle2">
          <CheckBoxOutlineBlankIcon />
          남은 수량
        </h5>
        <div className="pipSubTitle">
          <div className="pip1SubTitle3">
            총 생산계획 <h4>{all_Cnt}</h4>
          </div>

          <div className="pip1SubTitle4">
            총 생산수량<h4>{data_Cnt}</h4>
          </div>
          <div className="pip2SubTitle5">
            총 불량수량<h4>{valuecount3}</h4>
          </div>
        </div>
      </div>
      <div className="pip2">

        <h2>0라인</h2>
        <Chart data={next1} update={update} />

        <h2>1라인</h2>
        <Chart data={next2} update={update} />
        <h2>2라인</h2>
        <Chart data={next3} update={update} />
      </div>
    </div>
  );
}
