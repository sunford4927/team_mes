import { getByTestId, getByText } from "@testing-library/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import './plan.css';
// import Modal from "Modal"




export default function Plan(props) {

    const nav = useNavigate();
    const [LotNum, setLotNum] = useState('')
    const [sangsan, setsangsan] = useState('')
    const [japum, setjapum] = useState('')
    const [quantity, setquantity] = useState('')
    const [onezazae, setonezazae] = useState('')
    const [gongjungzazae, setgongjungzazae] = useState('')
    const [date, setdate] = useState('')
    const event = props.event
    const num_quantity = Number(quantity)

    function item_con(itembox, japum) {
        var list = []
        for (var i = 0; i < itembox.length; i++) {
            if (itembox[i]["item_name"] == japum) {
                list["item_code"] = itembox[i]["item_code"]
                break;
            }
        }
        console.log(list)
        return (
            list
            )
        }


    const seedata = async () => {
        try {
            const item_a = await axios.get('http://127.0.0.1:8000/items/')
            
            const item_b = item_con(item_a.data, japum)
            console.log(item_b)
            await axios.post("http://127.0.0.1:8000/plans/", {
                flag: event,
                lot_num: LotNum,
                item_code: item_b['item_code'],
                quantity: num_quantity,
                due_date: date,
                plan_name: sangsan
            })
            
        } catch (error) {
            console.error(error);
           alert(`등록이 완료되었습니다.`);
           nav('/users')
           
        }
    };

    const [modalState, setModalState] = useState(false);
    const [proNames, setProNames] = useState([]);
    async function openPro(){
        //모달창을 띄워서 제품 정보를 띄우는 기능
        const item_a = await axios.get('http://127.0.0.1:8000/items/')
        console.log(item_a.data)
        let proArray = item_a.data
        let proNameArray =[]
        for(let i =0; i<proArray.length;i++){
            proNameArray.push(proArray[i].item_name);
        }
        
        console.log(proNameArray)
        setProNames(proNameArray);
        setModalState(!modalState);

    }
   


    
        
    return (

        <div className="plan">
            {modalState ? (
        <Modal
          closeModal={() => setModalState(!modalState)}
          nameArray = {proNames}
        ></Modal>
      ) : (
        ""
      )}
            <div className="planTitleContainer">
                <span className="P"> * </span>
                <label> LOT번호  </label>
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
                    className="processNumberButton1"
                    type="button"
                // onClick={}
                >중복확인
                </button>
            </div>

            <div className="planTitleContainer">
                <span className="P"> * </span>
                <label> 생산명  </label>
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
                <label> 제품명  </label>
            </div>
            <div className="planbar">
                <input
                    type="text"
                    required
                    placeholder="찾기 버튼을 통해 제품을 선택해주세요"
                    className="planNumbername"
                    onChange={(e) => setjapum(e.target.value)}

                />
                <button
                    className="processNumberButton1"
                    type="button"
                    onClick={openPro}
                >찾기
                </button>
            </div>

            <div className="planTitleContainer">
                <span className="P"> * </span>
                <label> 수량  </label>
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
                <div className="planmaterial">원자재
                </div>
            </div>
            <div className="planbar2">
                <button
                    className="processNumberButton"
                    type="button"
                    onChange={(e) => setonezazae(e.target.value)}

                >원자재정보입력
                </button>
            </div>



            <div className="planTitleContainer">
                <div className="planPInfo">공정자재
                </div>
            </div>
            <div className="planbar2">
                <button
                    className="processNumberButton"
                    type="button"
                    onChange={(e) => setgongjungzazae(e.target.value)}

                >공정정보 입력
                </button>
            </div>


            <div className="planTitleContainer">
                <div className="plancompelte">
                    생산완료예정일
                </div>
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
                <button
                    className="orderNumberButton2"
                    type="button"
                    onClick={seedata}
                    
                >  
                    저장
                </button>
                <button
                    className="orderNumberButton3"
                    type="button"
                >
                    취소
                </button>
            </div>


        </div>
    )

}