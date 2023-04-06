import Box from '@mui/material/Box';
import "./item.css"
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import ManageMent from '../../pages/management/ManageMent';
import { Make_ID } from '../../make';


export default function Item() {
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

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/mes/items/");
        setData(Make_ID(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, []);
  return (
    <div className="item" >
      <div className="inner">
      <div>
      <ManageMent dummyData={data} title='제품정보 관리' row1='제품코드' row2='제품명' row3='등록일시'/>
      </div>
      <div>
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
    </div>
  )
}