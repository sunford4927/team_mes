import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { customerWrite } from "../../reducer/customer_info";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewCreate() {
  const [form, setForm] = useState({
    reg_id : "0",
    mod_id : "0",
    customer_name: "",
    customer_code: "",
    homepage: null,
    customer_phone: null,
    representative_name: null,
    representative_phone: null,
    reg_date: "",
    mod_date: "",
  });
  const dispatch = useDispatch();
  const onCreate = (data) => dispatch(customerWrite(data));

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  axios
    .post("http://127.0.0.1:8000/mes/customers/",  {
          customer_name: form.customer_name,
          customer_code: form.customer_code,
          homepage: form.homepage,
          customer_phone: form.customer_phone,
          representative_name: form.representative_name,
          representative_phone: form.representative_phone,
          reg_date: form.reg_date,
          mod_date: form.reg_date,
          reg_id: "0",
          mod_id: "0",
        })
        .then(()=>{
          onCreate(form)
          alert('저장되었습니다.')
          nav('/info/Client')
        })
        .catch((err) => alert(err.message));
        setForm({
            reg_id : "0",
            mod_id : "0",
            customer_name: "",
            customer_code: "",
            homepage: null,
            customer_phone: null,
            representative_name: null,
            representative_phone: null,
            reg_date: "",
            mod_date: "",
        })
  };
  // // input-date 오늘날짜로 설정
  // document.getElementById("today").value = new Date()
  //   .toISOString()
  //   .substring(0, 10);
  return (
    <div className="inner">
      <div className="customer_box">
        <h3 className="prcessPR">고객 정보 관리</h3>
        <h5 className="processR">고객 정보 등록</h5>
        <h6 className="processnext">* 필수 항목</h6>
        <div>
        </div>
        <div className="input_container">
          <form onSubmit={handleSubmit}>
            <span className="pp">*</span>
            <label htmlFor="customer_name">고객 명</label>
            <input
              required
              type="text"
              name="customer_name"
              placeholder="고객 명을 입력하세요."
              value={form.customer_name}
              onChange={handleChange}
            />
            <span className="pp">*</span>
            <label htmlFor="customer_code">고객 코드</label>
            <button className="planNumberButton1 btn-r btn-under">
              중복확인
            </button>
            <input
              required
              type="text"
              name="customer_code"
              placeholder="고객 코드를 입력하세요"
              value={form.customer_code}
              onChange={handleChange}
            />
            <label htmlFor="homepage">홈페이지 주소</label>
            <input
              type="text"
              name="homepage"
              placeholder="홈페이지 주소를 입력하세요"
              value={form.homepage}
              onChange={handleChange}
            />
            <label htmlFor="representative_name">대표 명</label>
            <input
              type="text"
              name="representative_name"
              placeholder="대표자 이름을 입력하세요"
              value={form.representative_name}
              onChange={handleChange}
            />
            <label htmlFor="representative_phone">대표 번호</label>
            <input
              type="text"
              name="representative_phone"
              placeholder="대표자 번호를 입력하세요"
              value={form.representative_phone}
              onChange={handleChange}
            />
            <label htmlFor="date">날짜</label>
            <input
              type="date"
              name="reg_date"
              id="today"
              onChange={handleChange}
            />
            <button className="planNumberButton1 btn-r">취소</button>
            <button className="planNumberButton1 btn-r" type="submit">
              저장
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NewCreate;
