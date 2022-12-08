import React, { useEffect, useState } from "react";
import "./userList.css";
import { createUseGridApiEventHandler, DataGrid } from "@mui/x-data-grid";
import ManageMent from "../management/ManageMent";
import Product from "../product/Product";
import axios from "axios";
import { Box } from "@mui/system";
const UserList = () => {
  const [dummyData, setDummyData] = useState("");
  const [orders, setOrders] = useState("");
  function Make_ID(dummyData) {
    for (var i = 0; i < dummyData.length; i++) {
      dummyData[i]["id"] = i+1;
    }
    return dummyData;
  }
  function Make_Table(plans, orders, customers, items) {
    for (var i = 0; i < plans.length; i++) {
      for (var j = 0; j < orders.length; j++) {
        if (plans[i]["order_code"] == orders[j]["order_code"]) {
          plans[i]["customer_code"] = orders[j]["customer_code"];
        }
        for (var k = 0; k < customers.length; k++) {
          if (plans[i]["customer_code"] == customers[k]["customer_code"]) {
            plans[i]["customer_name"] = customers[k]["customer_name"];
          }
        }
      }
      // console.log(plans[i]["item_code"])
    }
      for (var u = 0; u < plans.length; u++) {
        for (var y = 0; y < items.length; y++) {
          if (plans[u]["item_code"] == items[y]["item_code"]) {
            plans[u]["item_name"] = items[y]["item_name"];
          }
        }
      }
      // console.log(plans)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "lot_num", headerName: "LOT번호", width: 160, },
    { field: "order_code", headerName: "수주코드", width: 140 },
    { field: "customer_name", headerName: "고객명", width: 160 },
    { field: "item_name", headerName: "제품명", width: 160 },
    { field: "quantity", headerName: "수량", width: 70 },
    { field: "due_date", headerName: "생산완료예정일", width: 150 },
    { field: "reg_date", headerName: "생산계획등록일", width: 150 },
  ];

  useEffect(() => {
    const Plansgetdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/plans/");
        const result_data1 = await axios.get("http://127.0.0.1:8000/orders/");
        const result_data2 = await axios.get(
          "http://127.0.0.1:8000/customers/"
        );
        const result_data3 = await axios.get("http://127.0.0.1:8000/items/");
        // console.log(result_data1)
        setDummyData(Make_ID(result.data));
        setOrders(
          Make_Table(result.data, result_data1.data, result_data2.data, result_data3.data)
        );
      } catch (error) {
        console.error(error);
      }
    };
    Plansgetdata();
  }, []);
  return (
    <div className="userList">
      <ManageMent />
      <Box sx={{ height: 600, width: "104%", margin: -1  }}>
      <Product list= {dummyData} />
      <DataGrid
        rows={dummyData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // getRowId={(r) => r.id}
      ></DataGrid>
      </Box>
    </div>
  );
};
export default UserList;
