import React, { useState, useEffect } from "react";
import "./orders.css";
import axios from "axios";

export default function Orders({ order , event, item }) {
  //수주, 계획 value 값
  const [eventing, setEventing] = useState(event);
  //수주 테이블
  const [orders, setOrders] = useState("");
  //수주 코드
  const [order_code, setOrder_code] = useState('');
  //LOT 번호
  const [Lotnum, setLotNum] = useState('');
  //생산명
  const [productname, setProductName] = useState('');
  //고객명
  const [customername, setCustomerName] = useState('');
  //제품명
  const [itemname, setItemName] = useState('');
  //원자재
  const [materials_list, setMaterials_List] = useState('');
  //공정리스트
  const [process_list, setProcess_List] = useState('');
  //저장버튼
  const [save, setSave] = useState('');
  //등록날짜
  const [date, setdate]  = useState('');

  function item_code(itembox, itemname) {
    var list = [];
    for (var i = 0; i < itembox.length; i++) {
      if (itembox[i]["item_name"] == itemname) {
        list["item_code"] = itembox[i]["item_code"];
        break;
      }
    }
    console.log(list);
    return list;
  }




  const onclick = () => {
    // setEvent(event);
  };

  useEffect(() => {
    const outdata = async () => {
      try {
        const code = item_code(item, itemname)
        console.log(code['item_code'])
        await axios.post("http://127.0.0.1:8000/create_order/", {
          flag: eventing,
          lot_num: Lotnum,
          order_code: order_code,
          item_code: code['item_code'],
          quantity: 20000,
          due_date: date,
          plan_name: productname,
        });
      } catch (error) {
        console.error(error);
      }
    };

    outdata();
  }, [save]);
  return (
    <div className="order">
      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label className="ordercode"> 수주코드 </label>
      </div>
      <div className="orderbar">
        <input
          type="text"
          required
          placeholder="찾기버튼을 통해 수주코드를 선택해주세요"
          className="orderNumbername"
          onChange={(e)=>setOrder_code(e.target.value)}
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={() => alert("코드를 입력해주세요")}
        >
          찾기
        </button>
      </div>

      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> LOT번호 </label>
        <h6 className="ordernext"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
      </div>
      <div className="orderbar">
        <input
          type="text"
          required
          placeholder="LOT번호를 입력해주세요"
          className="orderNumbername"
          onChange={(e) => setLotNum(e.target.value)}
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={() => alert("조심")}
        >
          중복확인
        </button>
      </div>

      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> 생산명 </label>
      </div>
      <div className="orderbar1">
        <input
          type="text"
          required
          placeholder="생산명을 입력해주세요"
          className="orderNumbername1"
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> 고객명 </label>
      </div>
      <div className="orderbar1">
        <input
          type="text"
          required
          placeholder="수주코드를 선택하시면 해당 고객명이 입력됩니다"
          className="orderNumbername1"
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> 제품명 </label>
      </div>
      <div className="orderbar">
        <input
          type="text"
          required
          placeholder="찾기버튼을 통해 제품을 선택해 주세요"
          className="orderNumbername"
          onChange={(e) => setItemName(e.target.value)}
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={() => alert("제품을 찾아주세요")}
        >
          찾기
        </button>
      </div>
      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> 수량 </label>
      </div>
      <div className="orderbar">
        <input
          type="text"
          required
          placeholder="수주코드를 선택하시면 해당제품의 수량이 입력됩니다"
          className="quantityNumbername"
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>

      <div className="orderTitleContainer">
        <div className="ordermaterial">원자재정보입력</div>
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("조심")}
        >
          원자재정보 입력
        </button>
      </div>

      <div className="orderTitleContainer">
        <div className="orderPInfo">공정정보</div>
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("조심")}
        >
          공정정보 입력
        </button>
      </div>

      <div className="orderTitleContainer">
        <div className="ordercompelte">생산완료예정일</div>
        <input type="date" required className="orderNumbername1" onChange={(e) =>setdate(e.target.value)} />
      </div>
      <div className="planTitleContainer">
        <button className="orderNumberButton2" type="button" onClick={setSave}>
          저장
        </button>
        <button className="orderNumberButton3" type="button">
          취소
        </button>
      </div>
    </div>
  );
}
