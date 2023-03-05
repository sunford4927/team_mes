import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {Link} from 'react-router-dom'
import "./client.css";
import axios from "axios";
import { Make_ID } from "../../make";
import ManageMent from "../../pages/management/ManageMent";

export default function DataGridDemo() {
  const [data, setData] = useState('');
  const element = document.createElement('div')
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
        const result = await axios.get("http://127.0.0.1:8000/mes/customers/");
        console.log(data);
        setData(Make_ID(result.data));
      } catch (error) {
        console.error(error);
      }
    };
    let topdiv = document.querySelector('.management_container')
    let div = document.createElement('div')
    let span = document.createElement('span')
    let input = document.createElement('input')
    let br = document.createElement('br')
    div.className = 'clientname'
    span.innerText ='담당자'
    input.className = 'managementname1'
    input.type = 'text'
    input.placeholder = `담당자 입력`
    div.appendChild(span)
    div.appendChild(br)
    div.appendChild(input)
    topdiv.appendChild(div)
    getdata();
    return () => {
      div.remove()
    }
  }, []);
  return (
    <div className="client">

      <ManageMent dummyData={data} title='고객정보 관리' row1='고객명' row2='고객코드' row3='등록일시'/>

       <Box sx={{ height: 400, width: 1150, margin: -1, marginLeft: '13px', }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          sx={{width:1150,position: 'absolute', left: 0 , right:0,top: 470,margin : '0 auto'}}
        ></DataGrid>
      </Box>
    </div>
  );
}
