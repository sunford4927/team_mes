import './process.css';
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Make_ID } from '../../make';
import ManageMent from '../../pages/management/ManageMent';

export default function Process() {
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
      field: "process_code",
      headerName: "공정 코드",
      width: 150,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "process_name",
      headerName: "공정 명",
      width: 150,
      align: "center",
      headerAlign: 'center',
    },
    {
      field: "sort",
      headerName: "분류",
      width: 150,
      align: "center",
      headerAlign: 'center',
    },

  ];

  useEffect(() => {
    const getdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/mes/process/");
        console.log(data);
        setData(Make_ID(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    getdata();
  }, []);
  return (
    <div className="process">

      <div className="inner">
      <ManageMent dummyData={data} title='공정정보 관리' row1='공정코드' row2='공정명' row3='등록일시'/>


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

  )
}