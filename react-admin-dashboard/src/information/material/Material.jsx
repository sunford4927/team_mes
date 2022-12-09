import "./material.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
export default function Material() {
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
      field: "material_code",
      headerName: "원자재 코드",
      width: 150,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "material_name",
      headerName: "원자재 명",
      width: 350,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "unit",
      headerName: "단위",
      width: 80,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "sort",
      headerName: "분류",
      width: 225,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "spec",
      headerName: "사양",
      width: 225,
      align: "center",
      headerAlign: 'center',
    },

  ];

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/materials/");
        console.log(data);
        setData(Make_ID(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, []);
  return (
    <div className="material">
      <div className="materialTitleContainer">
        <h3 className="materialTitle">원자재정보 관리</h3>
      </div>
      <div className="materialContainer">
        <div className="materialcode">
          <label>원재자재코드 </label>
          <input
            type="text"
            placeholder="원자재코드를 입력해주세요"
            className="materialcode1"
          />
        </div>
        <div className="materialname">
          <label>원자재명 </label>
          <input
            type="text"
            placeholder="원자재를 입력해주세요"
            className="materialname1"
          />
        </div>

        <div className="materialdate">
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
            className="search"
            aria-label="생산완료예정일 검색 종료 기간"
            value
          />
        </div>
        <Link>
          <button className="materialAddButton">검색</button>
        </Link>
        <button className="materialAddButton1">검색 초기화</button>
      </div>
      <Box sx={{ height: 475, width: "90%", margin: 0 }}>
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
