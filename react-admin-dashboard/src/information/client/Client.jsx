import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import "./client.css";
import axios from "axios";

export default function DataGridDemo() {
  const [data, setData] = useState('');
  function Make_ID(dummyData) {
    for (var i = 0; i < dummyData.length; i++) {
      dummyData[i]["id"] = i + 1;
    }
    return dummyData;
  }
  const columns = [
    { 
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "customer_name",
      headerName: "고객 명",
      width: 180,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "customer_code",
      headerName: "고객 코드",
      width: 150,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "customer_phone",
      headerName: "전화번호",
      width: 180,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "representative_name",
      headerName: "담당자",
      width: 100,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "representative_phone",
      headerName: "담당자 번호",
      width: 180,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "representative_email",
      headerName: "담당자 이메일",
      width: 280,
      align: "center",
      headerAlign: 'center',
    },
  ];

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/customers/");
        console.log(data);
        setData(Make_ID(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, []);
  return (
    <div className="client">
      <div className="clientTitleContainer">
        <h3 className="clientTitle">고객정보 관리</h3>
      </div>
      <div className="clientContainer">
        <div className="clientnumber">
          <label>고객명 </label>
          <input
            type="text"
            placeholder="고객명을 입력해주세요"
            className="clientnumber1"
          />
        </div>

        <div className="clientcode">
          <label>고객코드 </label>
          <input
            type="text"
            placeholder="고객코드를 입력해주세요"
            className="clientcode1"
          />
        </div>
        <div className="clientname">
          <label>담당자 </label>
          <input
            type="text"
            placeholder="담당자 성함을 입력해주세요"
            className="clientname1"
          />
        </div>

        <div className="clientdate">
          <label>등록일시 </label>
          <input
            type="date"
            className="search"
            aria-label="생산완료예정일 검색 시작기간"
            value
          />
          <span className="control"> ~ </span>
          <input
            type="date"
            className="search1"
            aria-label="생산완료예정일 검색 종료 기간"
            value
          />
        </div>
        <Link>
          <button className="clientAddButton">검색</button>
        </Link>
        <button className="clientAddButton1">검색 초기화</button>
      </div>
      <Box sx={{ height: 490, width: "89%", marginLeft: "30px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
}
