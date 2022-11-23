import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userList.css";
import { createUseGridApiEventHandler, DataGrid } from "@mui/x-data-grid";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { userRows } from "../../dummyData";
import ManageMent from "../management/ManageMent";
import Product from "../product/Product";
import axios from "axios";
// import { FormatListNumbered } from "@material-ui/icons";

const UserList = () => {
  const [dummyData, setDummyData] = useState("");
  const [orders, setOrders] = useState("");
  function Make_ID(dummyData) {
    for (var i = 0; i < dummyData.length; i++) {
      dummyData[i]["id"] = i;
    }
    // console.log(dummyData);
    return dummyData;
  }
  function Make_Table(plans, orders, customers) {
    var plans_order = [];
    var order_customer = [];
    var customer_name = [];
    console.log(plans)
    console.log(orders)
    console.log(customers.data)
    for (var i = 0; i < plans.length; i++) {
      plans_order.push(plans[i]["order_code"]);
    }
    // console.log(plans_order.includes("CC-001")==false);
    for (var j = 0; j < orders.length; j++) {
      if (plans_order.includes(orders[j]["order_code"]) == true) {
        order_customer.push(orders[j]);
      }
      // console.log(orders[j]["order_code"]);
    }
    console.log(order_customer);

    for (var k = 0; k < customers.length; k++) {
      if (order_customer.includes(customers[k]["customer_code"]) == true) {
        customer_name.push(customers[k]);
      }
    }
    console.log(customer_name);
    return customer_name;
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "lot_num",
      headerName: "LOT번호",
      width: 160,
    },
    { field: "order_code", headerName: "수주코드", width: 140 },
    // { field: "고객명", headerName: "고객명", width: 160 },
    // { field: "제품명", headerName: "제품명", width: 160 },
    { field: "quantity", headerName: "수량", width: 70 },
    { field: "due_date", headerName: "생산완료예정일", width: 150 },
    { field: "reg_date", headerName: "생산계획등록일", width: 150 },
  ];

  useEffect(() => {
    const Plansgetdata = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/plans/");
        const result_data1 = await axios.get("http://127.0.0.1:8000/orders/");
        const result_data2 = await axios.get("http://127.0.0.1:8000/customers/");
        setDummyData(Make_ID(result.data));
        setOrders(Make_Table(result.data, result_data1.data ,result_data2.data));
      } catch (error) {
        console.error(error);
      }
    };
Plansgetdata();
  }, []);
  // console.log(dummyData)
  //   console.log(dummyData);
  console.log(orders);
  return (
    <div className="userList">
      <ManageMent />
      <Product />
      <DataGrid
        rows={dummyData}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        // getRowId={(r) => r.id}
      ></DataGrid>
    </div>
  );
};
export default UserList;
