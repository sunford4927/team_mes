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
                        className="processNumberButton"
                        type="button"
                        onClick={()=>alert('조심')}>중복확인
                        </button>
            </div>
        </div>
    ) 
       
}


