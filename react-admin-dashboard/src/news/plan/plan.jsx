import { getByTestId, getByText } from "@testing-library/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./plan.css";

export default function Plan({ item, event }) {
  //Lot 번호
  const [LotNum, setLotNum] = useState("");
  //생산명
  const [sangsan, setsangsan] = useState("");
  //제품명
  const [japum, setjapum] = useState("");
  //수량
  const [quantity, setquantity] = useState("");
  //원자재
  const [onezazae, setonezazae] = useState("");
  //공정관리
  const [gongjungzazae, setgongjungzazae] = useState("");
  //등록일
  const [date, setdate] = useState("");
  //저장버튼
  const [save, setSave] = useState(false);
  const event_a = event;
  const num_quantity = Number(quantity);
  const item_list = item;
  const nav = useNavigate();
  // 뒤로가기 구현
  function back(e){
    if(e.target.value == 'end'){
      nav('/users')
    }
  }
  function item_con(itembox, japum) {
    let list = [];
    for (var i = 0; i < itembox.length; i++) {
      if (itembox[i]["item_name"] == japum) {
        list["item_code"] = itembox[i]["item_code"];
        break;
      }
    }
    console.log(list);
    return list;
  }

  useEffect(() => {
    const seedata = async () => {
      try {
        const item_b = item_con(item_list, japum);
        console.log(item_b)
        await axios.post("http://127.0.0.1:8000/mes/plans/", {
          flag: event_a,
          lot_num: LotNum,
          item_code: item_b["item_code"],
          quantity: num_quantity,
          due_date: date,
          plan_name: sangsan,
        });
        alert(`등록이 완료되었습니다.`);
        nav("/users");
      } catch (error) {
        console.error(error);
      }
    };

    seedata();
  }, [save]);
  const [modalState, setModalState] = useState(false);
  const [proNames, setProNames] = useState([]);
  const [testname, settestname] = useState();
  async function openPro() {
    //모달창을 띄워서 제품 정보를 띄우는 기능
    const item_a = await axios.get("http://127.0.0.1:8000/mes/items/");
    console.log(item_a.data);
    let proArray = item_a.data;
    let proNameArray = [];
    for (let i = 0; i < proArray.length; i++) {
      proNameArray.push(proArray[i].item_name);
    }
    setProNames(proNameArray);
    setModalState(!modalState);
  }
  useEffect(() => {
    console.log(testname);
  }, [testname]);
  function tell() {
    alert("아이디 또는 비밀번호가 일치하지 않습니다");
  }
  return (

    <div className="plan">
      <div className="planTitleContainer">
        <span className="P"> * </span>
        <label> LOT번호 </label>
        <h6 className="plannext"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
      </div>
      <div className="planbar">
        <input
          id="same"
          type="text"
          required
          placeholder="LOT번호를 입력해주세요"
          className="planNumbername"
          onChange={(e) => setLotNum(e.target.value)}
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
            update={settestname}
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
          onChange={(e) => setsangsan(e.target.value)}
        />
      </div>

      <div className="planTitleContainer">
        <span className="P"> * </span>
        <label> 제품명 </label>
      </div>
      <div className="planbar">
        <input
          value={testname}
          type="text"
          required
          placeholder="찾기 버튼을 통해 제품을 선택해주세요"
          className="planNumbername"
          onChange={(e) => setjapum(testname)}
        />
        <button
          className="planNumberButton1"
          type="button"
          onClick={openPro}
        >
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
          required
          placeholder="수량을 입력해주세요"
          className="planNumbername1"
          onChange={(e) => setquantity(e.target.value)}
        />
      </div>

      <div className="planTitleContainer">
        <div className="planmaterial">원자재</div>
      </div>
      <div className="planbar2">
        <button
          className="planNumberButton"
          type="button"
          onChange={(e) => setonezazae(e.target.value)}
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
          onChange={(e) => setgongjungzazae(e.target.value)}
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
          required
          className="planNumbername1"
          onChange={(e) => setdate(e.target.value)}
        />
      </div>
      <div className="planTitleContainer">
        <button className="planNumberButton2" type="button" onClick={() =>setSave(!save)}>
          저장
        </button>
        <button className="planNumberButton3" type="button" onClick={back} value='end'>
          취소
        </button>
      </div>
    </div>

  );
}

Plan.defaultProps = {
  item: {},
  event: "",
};
