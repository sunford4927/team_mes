import React, { useState, useEffect } from "react";
import "./orders.css";
import axios from "axios";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function Orders({ order , event, item }) {
  const nav = useNavigate();
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
  const [plan, setPlan] = useState('')
  const [customer, setCustomer] = useState('')
  const [quantity,setQuantity] = useState('')

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
    // 뒤로가기 구현
    function back(e){
      if(e.target.value == 'end'){
        nav('/users')
      }
    }
    // function duplecation(plan, Lotnum){

    // }



  const [modalState, setModalState] = useState(false);
  const [proNames, setProNames] = useState([]);
  const [testname, settestname] = useState();
  async function openPro() {
    //모달창을 띄워서 제품 정보를 띄우는 기능
    const item_a = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/orders/");
    const item_b = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/plans/");
    const item_c = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/customers/");
    console.log(item_a.data);
    let proArray = item_a.data;
    let proNameArray = [];
    for (let i = 0; i < proArray.length; i++) {
      proNameArray.push(proArray[i].order_code);
    }
    setCustomer(item_c.data)
    setPlan(item_b.data)
    setOrders(proArray)
    console.log(proNameArray);
    setProNames(proNameArray);
    setModalState(!modalState);
  }
  useEffect(() => {
    console.log(testname);
    if(testname == '차전자피식이섬유'){
      setItemName(testname)
    }else{
      data(testname,order,plan,customer)
    }
    console.log(plan)
  }, [testname]);
  useEffect(() => {
    console.log(customername);
  }, [customername]);
  useEffect(() => {
    console.log(quantity);
  }, [quantity]);
  async function openPro2() {
    //모달창을 띄워서 제품 정보를 띄우는 기능
    const item_a = await axios.get("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/items/");
    console.log(item_a.data);
    let proArray = item_a.data;
    let proNameArray = [];
    for (let i = 0; i < proArray.length; i++) {
      proNameArray.push(proArray[i].item_name);
    }
    console.log(proNameArray);
    setProNames(proNameArray);
    setModalState(!modalState);
  }
  useEffect(() => {
    if(testname !== '차전자피식이섬유'){
      setOrder_code(testname)
    }
    console.log(testname);
  }, [testname]);
function data(testname, orders,plans, customers){
  
  for (var i = 0; i < plans.length; i++) {
    
    for (var j = 0; j < orders.length; j++) {
      if (plans[i]['order_code'] == orders[j]["order_code"]) {
        plans[i]["customer_code"] = orders[j]["customer_code"];
      }
      for (var k = 0; k < customers.length; k++) {
        if (plans[i]["customer_code"] == customers[k]["customer_code"]) {
          plans[i]["customer_name"] = customers[k]["customer_name"];
        }
      }
    }
  }
  console.log(plans)
  for(var y=0; y<plans.length; y++){
    if(testname == plans[y]['order_code']){
      setCustomerName(plans[y]['customer_name'])
      setQuantity(plans[y]['quantity'])
    }
  }
  

}

  useEffect(() => {
    const outdata = async () => {
      try {
        const code = item_code(item, itemname)
        console.log(code['item_code'])
        await axios.post("http://ec2-3-35-26-50.ap-northeast-2.compute.amazonaws.com:8080/create_order/", {
          flag: eventing,
          lot_num: Lotnum,
          order_code: order_code,
          item_code: code['item_code'],
          quantity: quantity,
          due_date: date,
          plan_name: productname,
        });
        alert(`등록이 완료되었습니다.`);
        nav("/users");
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
        <label> 수주코드 </label>
      </div>
      <div className="orderbar">
      {modalState ? (
          <Modal
            update={settestname}
            closeModal={() => setModalState(!modalState)}
            nameArray={proNames}
            item={item}
          ></Modal>
        ) : (
          ""
        )}
        <input
          type="text"
          value={order_code}
          required
          placeholder="찾기버튼을 통해 수주코드를 선택해주세요"
          className="orderNumbername"
          // onChange={(e)=>upload(testname)}
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={openPro}
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
          // onClick={}
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
          value={customername}
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
          value={itemname}
          type="text"
          required
          placeholder="찾기버튼을 통해 제품을 선택해 주세요"
          className="orderNumbername"
          onChange={(e) => setItemName(e.target.value)}
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={openPro2}
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
          value={quantity}
          type="text"
          required
          placeholder="수주코드를 선택하시면 해당제품의 수량이 입력됩니다"
          className="quantityNumbername"
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>

        <div className="ordermaterial">원자재</div>
      <div className="orderTitleContainer">
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("조심")}
        >
          원자재정보입력
        </button>
      </div>

        <div className="orderPInfo">공정자재</div>
      <div className="orderTitleContainer">
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("조심")}
        >
          공정정보 입력
        </button>

      </div>

        <div className="ordercompelte">생산완료예정일</div>
      <div className="orderTitleContainer">
        <input type="date" required className="orderNumbername1" onChange={(e) =>setdate(e.target.value)} />
      </div>
      <div className="planTitleContainer">
        <button className="orderNumberButton2" type="button" onClick={setSave}>
          저장
        </button>
        <button className="orderNumberButton3" type="button" value='end' onClick={back}>
          취소
        </button>
      </div>
    </div>
  );
}
