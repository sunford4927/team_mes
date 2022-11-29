import React, { useState} from "react";
import "./newR.css";

import Orders from "../order/Orders";
import Plan from "../plan/Plan";
// import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

    const NewR = (props) => {
      const [event, setEvent] = useState("");
      const [orders, setOrders] = useState(props.orders);
      const [customers, setCustomers] = useState(props.customers);
      const [items, setItems] = useState(props.items);
      const [plan, setPlan] = useState(props.plan);
      // console.log(items)
      const eventcatch = (e) => {
        console.log(e.target.value);
        setEvent(e.target.value);
        setOrders(orders);
        setCustomers(customers);
        setItems(items);
        setPlan(plan);
      };
      
  return (
    <div className="processPR">      
      <div className="processMenu">
          <h3 className="processTitle">생산 계획 관리</h3>
          <h5 className="processR">생산 계획 등록 </h5>
          <h6 className="processnext">* 필수 항목</h6>
          <div className="proceeclassification">
            <span className="pp"> * </span>
            <label> 분류 </label>
          </div>
          
      <div className="button">
          <input
            type="radio"
            className="processAddButton"
            id="rd1"
            name="flag"
            value="P"
            onChange={eventcatch}
            chechked
          />

          <label>계획</label>

          <input
            type="radio"
            className="processAddButton"
            id="rd2"
            name="flag"
            value="O"
            onChange={eventcatch}
          />      
          <label>수주</label>
          {event =='O'? <Orders/>: <Plan item = {items} event={event}/>}
      </div>    
      </div>      
      
    </div>
  );
}

export default NewR;