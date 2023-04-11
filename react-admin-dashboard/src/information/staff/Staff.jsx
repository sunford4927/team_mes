import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ManageMent from "../../pages/management/ManageMent";
import { useSelector } from "react-redux";
import axios from "axios";



function Staff() {
  const [form, setForm] = useState({})

 

  const staff = useSelector((state) => state.staffReducer.staff);
  console.log(staff)


  const handleSearch = (form) =>{
    console.log(test)
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setForm({
        ...form,
        [name]: value,
    })
    console.log(form)
}
  const columns = [
    {
      field: "ido",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "사원 명",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "department",
      headerName: "담당부서",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "position",
      headerName: "직책",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone_num",
      headerName: "연락처",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email_addr",
      headerName: "이메일",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "reg_date",
      headerName: "등록 날짜",
      width: 280,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <div className="staff">
      <div className="inner">
        <div className="loading"></div>
        <ManageMent
          dummyData={staff}
          content={{
            title : "사원정보 관리",
            row1 : "사원 명",
            row2 : "직책",
            row3 : "등록일시",
            adress : "/staff/create",
          }}
          handleSearch={handleSearch}
          handleChange={handleChange}
          form = {form}
        />

        <div>
          <Box sx={{ height: 372, margin: -1, marginLeft: "13px" }}>
            <DataGrid
              rows={staff}
              disableSelectionOnClick
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              sx={{ width: 1150, margin: "0 auto" }}
              // getRowId={(r) => r.id}
            ></DataGrid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Staff;
