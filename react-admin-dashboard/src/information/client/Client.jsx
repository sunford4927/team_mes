import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./client.css";
import axios from "axios";
import { Make_ID, make_div } from "../../make";
import ManageMent from "../../pages/management/ManageMent";
import Loading from "../../components/loading/Loading";

import {connect} from "react-redux"

function Client(props) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(props)
  // const element = document.createElement('div')
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

 

  const getdata = async () => {
    setLoading(true);
    try {
      const result = await axios.get("http://127.0.0.1:8000/mes/customers/");
      console.log(data);
      setData(Make_ID(result.data));
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let topdiv = document.querySelector('.management_container')
    topdiv.appendChild(make_div())
    getdata();
    return () => {
      make_div().remove()
    }
  }, []);
  return (
    <div className="client">
      <div className="inner">
        <div className="loading">
          {loading ? <Loading/> : null}
        </div>
      <ManageMent dummyData={data} title='고객정보 관리' row1='고객명' row2='고객코드' row3='등록일시'/>

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
  );
}

const MapStatetoProps=(state)=>{
  console.log(state)
  return {...state}
}

const MapDispatchtoProps=(dispatch)=>{
  return {
    ADD : (a,b) => dispatch({type : a, content: b})
  }
}



export default connect(MapStatetoProps,MapDispatchtoProps)(Client);