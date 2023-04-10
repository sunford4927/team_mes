import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ManageMent from "../../pages/management/ManageMent";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";
import axios from "axios";

import { connect, useDispatch } from "react-redux";
import { customerCheck } from "../../reducer/customer_info";
import { machineCheck } from "../../reducer/machine_info";
import { itemCheck } from "../../reducer/item_info";
import { orderCheck } from "../../reducer/order_management";
import { planCheck } from "../../reducer/plan_management";
import { staffCheck } from "../../reducer/staff_info";
import { materialsCheck } from "../../reducer/materials_info";
import { monitoringCheck } from "../../reducer/monitoring_info";



function Staff() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const oncustomerCheck = (data) => dispatch(customerCheck(data));
  const onmachineCheck = (data) => dispatch(machineCheck(data));
  const onitemCheck = (data) => dispatch(itemCheck(data));
  const onorderCheck = (data) => dispatch(orderCheck(data));
  const onplanCheck = (data) => dispatch(planCheck(data));
  const onstaffCheck = (data) => dispatch(staffCheck(data));
  const onmaterialsCheck = (data) => dispatch(materialsCheck(data));
  const onmonitorCheck = (data) => dispatch(monitoringCheck(data));

  const staff  = useSelector(state =>(
        state.staffReducer.staff
  ))

  useEffect(() => {
    setLoading(true)
    axios
      .all([
        axios.get("http://127.0.0.1:8000/mes/orders/"),
        axios.get("http://127.0.0.1:8000/mes/items/"),
        axios.get("http://127.0.0.1:8000/mes/plans/"),
        axios.get("http://127.0.0.1:8000/mes/materials/"),
        axios.get("http://127.0.0.1:8000/mes/customers/"),
        axios.get("http://127.0.0.1:8000/mes/TbMachine/"),
        axios.get("http://127.0.0.1:8000/mes/TbStaff/"),
        axios.get("http://127.0.0.1:8000/mes/TbProductionLog/")
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5, res6, res7, res8) => {
          onorderCheck(res1.data);
          onitemCheck(res2.data);
          onplanCheck(res3.data);
          onmaterialsCheck(res4.data);
          oncustomerCheck(res5.data);
          onmachineCheck(res6.data);
          onstaffCheck(res7.data);
          onmonitorCheck(res8.data);
        })
      );
      setLoading(false)
  },[]);
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

      {loading ? <Loading /> :      
       <div className="inner">
        <div className="loading"></div>
        <ManageMent
          dummyData={staff}
          title="사원정보 관리"
          row1="사원 명"
          row2="직책"
          row3="등록일시"
          adress="/staff/create"
        />

        <div>
          <Box sx={{ height: 400, margin: -1, marginLeft: "13px" }}>
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
      </div>}
    </div>
  );
}

export default Staff;
