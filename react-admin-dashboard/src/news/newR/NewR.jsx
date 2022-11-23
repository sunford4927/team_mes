import React, { useState, useEffect } from "react";
import "./newR.css";
import { Link } from "react-router-dom";
import Order from "../order/Orders";
import Plan from "../plan/Plan";
// import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

export default function NewR(props ) {
  const [event, setEvent] = useState("");

    const eventcatch=(e)=> {
      console.log(e.target.value);
      setEvent(e.target.value);

     
    }

  console.log(event);
  return (
    <div className="processPR">
      <div className="processPRWrapper">
        <div className="processMenu">
          <h3 className="processTitle">생산 계획 관리</h3>
          <h5 className="processR">생산 계획 등록 </h5>
          <h6 className="processnext">* 필수 항목</h6>
          <div className="proceeclassification">
            <span className="pp"> * </span>
            <label> 분류 </label>
          </div>
          {event =='O'? <Order event={event} eventcatch={eventcatch}/>: ''}

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
            className="processAddButton1"
            id="rd2"
            name="flag"
            value="O"
            onChange={eventcatch}
          />

          <label>수주</label>
        </div>
      </div>
    </div>
  );
}
