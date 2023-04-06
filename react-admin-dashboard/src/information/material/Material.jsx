import "./material.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Make_ID } from "../../make";
import ManageMent from "../../pages/management/ManageMent";
export default function Material() {
  const [data, setData] = useState('');
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "item_code",
      headerName: "원자재 코드",
      width: 150,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "item_name",
      headerName: "원자재 명",
      width: 350,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "sort",
      headerName: "분류",
      width: 285,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "spec",
      headerName: "사양",
      width: 285,
      align: "center",
      headerAlign: 'center',
    },
  ];

  // const columns = [
  //   {
  //     field: "id",
  //     headerName: "ID",
  //     width: 50,
  //     align: "center",
  //     headerAlign: 'center',
  //   },
  //   {
  //     field: "material_code",
  //     headerName: "원자재 코드",
  //     width: 150,
  //     align: "center",
  //     headerAlign: 'center',
  //   },
  //   {
  //     field: "material_name",
  //     headerName: "원자재 명",
  //     width: 350,
  //     align: "center",
  //     headerAlign: 'center',
  //   },
  //   {
  //     field: "unit",
  //     headerName: "단위",
  //     width: 80,
  //     align: "center",
  //     headerAlign: 'center',
  //   },
  //   {
  //     field: "sort",
  //     headerName: "분류",
  //     width: 225,
  //     align: "center",
  //     headerAlign: 'center',
  //   },
  //   {
  //     field: "spec",
  //     headerName: "사양",
  //     width: 225,
  //     align: "center",
  //     headerAlign: 'center',
  //   },

  // ];

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/mes/items/");
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
          <div className="inner">
          <ManageMent dummyData={data} title="원자재정보 관리" row1="원자재 코드" row2="원자재" row3="등록일시"/> 
       <Box sx={{ height: 400, margin: -1, marginLeft: '13px', }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          sx={{width:1150, margin : '0 auto'}}
        // getRowId={(r) => r.id}
        ></DataGrid>
      </Box>
      </div>
    </div>
  );
}
