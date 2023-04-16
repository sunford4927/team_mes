import React, { useState, useEffect } from "react";
import "./orders.css";
import axios from "axios";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Orders({event}) {
  const [form, setForm] = useState({
    flag: event,
  });
  const {item, customer, order} = useSelector((state) => ({
    item : state.itemReducer.item,
    customer : state.customerReducer.customer,
    order : state.orderReducer.order
  })
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    item.reduce((acc, cur) => {
      if (cur.item_name === value) {
        setForm({
          ...form,
          item_code: cur.item_code,
          [name]: value
        });
      }
    }, []);

    order.reduce((acc, cur) => {
      if (cur.order_code === value) {
        customer.reduce((arr, data) => {
          // console.log(cur.order_code)
          if(cur.customer_code === data.customer_code){
            setForm({
              ...form,
              customer_name : data.customer_name,
              quantity : cur.quantity,
              order_code : value
            })
          }
        } )
      }
    },[])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    axios.post("http://127.0.0.1:8000/mes/create_order/", {
          flag: form.flag,
          lot_num: form.lot_num,
          order_code: form.order_code,
          item_code: form.item_code,
          quantity: Number(form.quantity),
          due_date: form.due_date,
          plan_name: form.plan_name,
        }).then((response) => {
          alert(`등록이 완료되었습니다.`);
          nav("/users");
        }).catch ((error)=> {
          console.log(error);
        })
    
      } 

  const nav = useNavigate();
    // 뒤로가기 구현
    function back(e){
      if(e.target.value == 'end'){
        nav('/users')
      }
    }

  const [modalState, setModalState] = useState(false);
  const [proNames, setProNames] = useState([]);
  const [testname, settestname] = useState();

  async function openPro2(e) {
    //모달창을 띄워서 제품 정보를 띄우는 기능
    if(e.target.value === "제품명"){
      const data =item.reduce((acc, cur) => {
        acc.push(cur.item_name)
        return acc
    },[])
      setProNames(data)
      settestname("item_name")
    }else{
      const code_data =order.reduce((acc, cur) => {
        acc.push(cur.order_code)
        return acc
    },[])
      setProNames(code_data)
      settestname("order_code")
    }
    setModalState(!modalState);
  }

  return (
    <div className="order">
      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label className="ordercode"> 수주코드 </label>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="orderbar">
      {modalState ? (
          <Modal
            update={handleChange}
            closeModal={() => setModalState(!modalState)}
            nameArray={proNames}
            item={item}
            category = {testname}
          ></Modal>
        ) : (
          ""
        )}
        <input
          disabled
          type="text"
          value={form.order_code}
          name="order_code"
          required
          placeholder="찾기버튼을 통해 수주코드를 선택해주세요"
          className="orderNumbername"
          // onChange={(e)=>upload(testname)}
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
        <label> LOT번호 </label>
        <h6 className="ordernext"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
      </div>
      <div className="orderbar">
        <input
          type="text"
          required
          placeholder="LOT번호를 입력해주세요"
          className="orderNumbername"
          onChange={handleChange}
          value={form.lot_num}
          name="lot_num"

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
          onChange={handleChange}
          value={form.plan_name}
          name="plan_name"
        />
      </div>

      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> 고객명 </label>
      </div>
      <div className="orderbar1">
        <input
          type="text"
          value={form.customer_name}
          required
          placeholder="수주코드를 선택하시면 해당 고객명이 입력됩니다"
          className="orderNumbername1"
          onChange={handleChange}
          disabled
          name="customer_name"
        />
      </div>

      <div className="orderTitleContainer">
        <span className="O"> * </span>
        <label> 제품명 </label>
      </div>
      <div className="orderbar">
        <input
          value={form.item_name}
          name="item_name"
          type="text"
          required
          placeholder="찾기버튼을 통해 제품을 선택해 주세요"
          className="orderNumbername"
          onChange={handleChange}
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={openPro2}
          value="제품명"
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
          value={form.quantity}
          type="text"
          required
          placeholder="수주코드를 선택하시면 해당제품의 수량이 입력됩니다"
          className="quantityNumbername"
          onChange={handleChange}
          disabled
        />
      </div>

      <div className="orderTitleContainer">
        <div className="ordermaterial">원자재정보입력</div>
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("원자재 정보 입력해주세요")}
        >
          원자재정보 입력
        </button>
      </div>

      <div className="orderTitleContainer">
        <div className="orderPInfo">공정정보</div>
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("공정정보를 입력해주세요")}
        >
          공정정보 입력
        </button>

      </div>

        <div className="ordercompelte">생산완료예정일</div>
      <div className="orderTitleContainer">
        <input type="date" required className="orderNumbername1" name="due_date" onChange={handleChange} />
      </div>
      <div className="orderTitleContainer">
        <button className="orderNumberButton2" type="submit" >
          저장
        </button>
        <button className="orderNumberButton3" type="button" value='end' onClick={back}>
          취소
        </button>
      </div>
      </form>
    </div>
  );
}
