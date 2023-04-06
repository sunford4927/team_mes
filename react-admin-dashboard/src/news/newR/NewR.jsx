import React, { useState, useEffect } from "react";
import "./newR.css";

import Orders from "../order/Orders";
import Plan from "../plan/Plan";

// import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

export default function NewR({ orders, customers, items, plan }) {
  const [event, setEvent] = useState("P");
  const [orders_a, setOrders] = useState('');
  const [customers_a, setCustomers] = useState('');
  const [items_a, setItems] = useState('');
  const [plan_a, setPlan] = useState('');
  // 뒤로가기 기능 구현
  console.log(items_a);
  const eventcatch = (e) => {
    console.log(e.target.value);
    setEvent(e.target.value);
  };
  useEffect(()=>{
    let inputBtn = document.getElementById("rd1")
    inputBtn.checked = true;
  },[])
  useEffect(() => {
    setOrders(orders);
    setCustomers(customers);
    setItems(items);
    setPlan(plan);
    setEvent(event)
  }, [event]);

  return (
    <div className="inner">
    <div className="processPR">
        <h3 className="processTitle">생산 계획 관리</h3>
    <div className="processMenu">
        <h5 className="processR">생산 계획 등록 </h5>
        <h6 className="processnext">* 필수 항목</h6>
        <div className="proceeclassification">
          <span className="pp"> * </span>
          <label> 분류 </label>
        </div>

        <div className="button">
          <form action="">
        <label>
          <input
            type="radio"
            className="processchangeButton"
            id="rd1"
            name="flag"
            value="P"
            onChange={eventcatch}
          />

          계획</label>
          <label>
          <input
            type="radio"
            className="processchangeButton"
            id="rd2"
            name="flag"
            value="O"
            onChange={eventcatch}
          />
          수주</label>
          </form>
          {event == "O" ? <Orders event={event} order={orders_a} item={items_a} /> : <Plan item={items_a} event={event} />}
        </div>
      </div>
    </div>
    </div>
  );
}
