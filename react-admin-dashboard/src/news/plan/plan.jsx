import axios from "axios";
import React from "react";
import './plan.css';





export default function Plan() {

    function testData(){
        axios.post("http://127.0.0.1:8000/plans/",{
            flag: "p",
            lot_num: "LOT_ORDER333_SJ",
            order_code: "",
            item_code: "P0043A",
            quantity: 9999999,
            due_date: "2022-07-15",
            reg_date: "2022-11-23",
            reg_id: "",
            mod_date: "2022-11-23",
            mod_id: "",
            plan_name: "테스트생산SJ"
        })
        .then(function(resposne){
                console.log("성공")
        })
        .then(function(resposne){

        })
    }
    return(
        <div className="plan">
            <div className="planTitleContainer">
                <span className="P"> * </span>
                <label> LOT번호  </label>            
                <h6 className="plannext"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
            </div>
            <div className="planbar">
                <input
                    type="text"
                    required
                    placeholder="LOT번호를 입력해주세요"
                    className="planNumbername"
                />
                <button 
                    className="processNumberButton1"
                    type="button"
                    onClick={()=>alert('조심')}>중복확인
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
                />
                <button 
                    className="processNumberButton1"
                    type="button"
                    onClick={()=>alert('조심')}>찾기
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
                    onClick={()=>alert('조심')}>원자재정보입력
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
                    onClick={()=>alert('조심')}>공정정보 입력
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
                />
            </div>
            <div className="planTitleContainer">
                <button
                className="orderNumberButton2"
                type="button" 
                onClick={testData}              
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


