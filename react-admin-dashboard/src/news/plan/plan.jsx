import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./plan.css";
import { useSelector } from "react-redux";

export default function Plan({ event }) {
  const [form, setForm] = useState({
    flag: event,
  });
  const item = useSelector((state) => state.itemReducer.item);
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
  };

  const nav = useNavigate();
  // 뒤로가기 구현
  function back(e) {
    if (e.target.value == "end") {
      nav("/users");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/mes/plans/", {
        flag: form.flag,
        lot_num: form.lot_num,
        item_code: form.item_code,
        quantity: Number(form.quantity),
        due_date: form.due_date,
        plan_name: form.plan_name,
      })
      .then(() => {
        alert(`등록이 완료되었습니다.`);
        nav("/users");
      })
      .catch((error) => console.log(error));
  };

  const [modalState, setModalState] = useState(false);
  const [proNames, setProNames] = useState([]);
  async function openPro() {
    //모달창을 띄워서 제품 정보를 띄우는 기능
    let proArray = item;
    let proNameArray = [];
    for (let i = 0; i < proArray.length; i++) {
      proNameArray.push(proArray[i].item_name);
    }
    setProNames(proNameArray);
    setModalState(!modalState);
  }

  return (
    <div className="plan">
      <div className="planTitleContainer">
        <span className="P"> * </span>
        <label> LOT번호 </label>
        <h6 className="plannext"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="planbar">
          <input
            id="same"
            type="text"
            required
            placeholder="LOT번호를 입력해주세요"
            className="planNumbername"
            onChange={handleChange}
            value={form.lot_num}
            name="lot_num"
          />
          <button
            className="planNumberButton1"
            type="button"
            // onClick={}
          >
            중복확인
          </button>
        </div>

        <div className="planTitleContainer">
          {modalState ? (
            <Modal
              update={handleChange}
              closeModal={() => setModalState(!modalState)}
              nameArray={proNames}
            ></Modal>
          ) : (
            ""
          )}
          <span className="P"> * </span>
          <label> 생산명 </label>
        </div>
        <div className="planbar1">
          <input
            type="text"
            required
            placeholder="생산명을 입력해주세요"
            className="planNumbername1"
            onChange={handleChange}
            value={form.plan_name}
            name="plan_name"
          />
        </div>

        <div className="planTitleContainer">
          <span className="P"> * </span>
          <label> 제품명 </label>
        </div>
        <div className="planbar">
          <input
            value={form.item_name}
            name="item_name"
            type="text"
            required
            placeholder="찾기 버튼을 통해 제품을 선택해주세요"
            className="planNumbername"
            // onChange={handleChange}
          />
          <button className="planNumberButton1" type="button" onClick={openPro}>
            찾기
          </button>
        </div>

        <div className="planTitleContainer">
          <span className="P"> * </span>
          <label> 수량 </label>
        </div>
        <div className="planbar1">
          <input
            type="text"
            value={form.quantity}
            name="quantity"
            required
            placeholder="수량을 입력해주세요"
            className="planNumbername1"
            onChange={handleChange}
          />
        </div>

        <div className="planTitleContainer">
          <div className="planmaterial">원자재</div>
        </div>
        <div className="planbar2">
          <button
            className="planNumberButton"
            type="button"
            onChange={handleChange}
          >
            원자재정보입력
          </button>
        </div>

        <div className="planTitleContainer">
          <div className="planPInfo">공정자재</div>
        </div>
        <div className="planbar2">
          <button
            className="planNumberButton"
            type="button"
            onChange={handleChange}
          >
            공정정보 입력
          </button>
        </div>

        <div className="planTitleContainer">
          <div className="plancompelte">생산완료예정일</div>
        </div>
        <div className="planbar1">
          <input
            type="date"
            value={form.due_date}
            name="due_date"
            required
            className="planNumbername1"
            onChange={handleChange}
          />
        </div>
        <div className="planTitleContainer">
          <button
            className="planNumberButton2"
            type="submit"

          >
            저장
          </button>
          <button
            className="planNumberButton3"
            type="button"
            onClick={back}
            value="end"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

Plan.defaultProps = {
  item: {},
  event: "",
};
