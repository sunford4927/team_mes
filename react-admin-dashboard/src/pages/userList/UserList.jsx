import React, { useEffect, useState } from "react";
import "./userList.css";
import { createUseGridApiEventHandler, DataGrid } from "@mui/x-data-grid";
import ManageMent from "../management/ManageMent";
import axios from "axios";
import { Box } from "@mui/system";
import { Make_ID, Make_Table } from "../../make";
import { colors } from "@mui/material";
const UserList = () => {
  const [dummyData, setDummyData] = useState("");
  const [orders, setOrders] = useState("");

  // 생산계획정보 표
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "lot_num",
      headerName: "LOT 번호",
      width: 145,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "order_code",
      headerName: "수주 코드",
      width: 145,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "customer_name",
      headerName: "고객 명",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "item_name",
      headerName: "제품 명",
      width: 240,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "수량",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "due_date",
      headerName: "생산 완료 예정일",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "reg_date",
      headerName: "생산 계획 등록일",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    // 기존 생산계획정보 및, 신규등록에 관한 데이터를 가져옴
    const Plansgetdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/mes/plans/");
        const result_data1 = await axios.get(
          "http://127.0.0.1:8000/mes/orders/"
        );
        const result_data2 = await axios.get(
          "http://127.0.0.1:8000/mes/customers/"
        );
        const result_data3 = await axios.get(
          "http://127.0.0.1:8000/mes/items/"
        );
        // console.log(result_data1)
        setDummyData(Make_ID(result.data));
        setOrders(
          Make_Table(
            result.data,
            result_data1.data,
            result_data2.data,
            result_data3.data
          )
        );
      } catch (error) {
        console.error(error);
      }
    };
    Plansgetdata();
  }, []);
  return (
    <div className="userList">
      <div className="inner">
        <div>
          <ManageMent
            dummyData={dummyData}
            title="생산계획 관리"
            row1="LOT 번호"
            row2="제품명"
            row3="생산완료 예정일"
          />
          </div>
      <div>
       <Box sx={{ height: 400, margin: -1, marginLeft: '13px', }}>
        <DataGrid
          rows={dummyData}
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
};
export default UserList;
