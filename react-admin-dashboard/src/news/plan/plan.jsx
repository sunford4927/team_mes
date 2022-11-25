import React from "react";
import './plan.css';





export default function Plan() {
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


