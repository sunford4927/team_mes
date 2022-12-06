import React, { useState, useEffect } from "react";
import "./newR.css";

import Orders from "../order/Orders";
import Plan from "../plan/Plan";
// import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

export default function NewR({ orders, customers, items, plan }) {
  const [event, setEvent] = useState("");
  const [orders_a, setOrders] = useState('');
  const [customers_a, setCustomers] = useState('');
  const [items_a, setItems] = useState('');
  const [plan_a, setPlan] = useState('');
  console.log(items_a);
  const eventcatch = (e) => {
    console.log(e.target.value);
    setEvent(e.target.value);
  };

  useEffect(() => {
    setOrders(orders);
    setCustomers(customers);
    setItems(items);
    setPlan(plan);
  }, [event]);

  return (
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
          <input
            type="radio"
            className="processchangeButton"
            id="rd1"
            name="flag"
            value="P"
            onChange={eventcatch}
          />

          <label>계획</label>

          <input
            type="radio"
            className="processchangeButton"
            id="rd2"
            name="flag"
            value="O"
            onChange={eventcatch}
          />
          <label>수주</label>
          {event == "O" ? <Orders event={event} order={orders_a} item={items_a}/> : <Plan item={items_a} event={event} />}
        </div>
      </div>
    </div>
  );
}
