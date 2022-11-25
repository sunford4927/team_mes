import React from "react";
import "./orders.css";

export default function Orders() {
  
  return (
    <div className="order">
      <div className="orderTitleContainer">
          <span className="O"> * </span>
          <label> 수주코드 </label> 
      </div>
      <div className="orderbar">
        <input
          type="text"
          required
          placeholder="찾기버튼을 통해 수주코드를 선택해주세요"
          className="orderNumbername"
        />
        <button
          className="orderNumberButton"
          type="button"
          onClick={() => alert("조심")}>
          찾기
        </button>
      </div>

      <div className="orderTitleContainer">
                <span className="O"> * </span>
                <label> LOT번호  </label>            
                <h6 className="ordernext"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
      </div>
      <div className="orderbar">
                <input
                    type="text"
                    required
                    placeholder="LOT번호를 입력해주세요"
                    className="orderNumbername"
                />
                <button 
                    className="orderNumberButton"
                    type="button"
                    onClick={()=>alert('조심')}>중복확인
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
          placeholder="찾기 버튼을 통해 제품을 선택해주세요"
          className="orderNumbername1"
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
          placeholder="수량을 입력해주세요"
          className="orderNumbername"
        />
        <button 
                    className="orderNumberButton"
                    type="button"
                    onClick={()=>alert('조심')}>찾기
        </button>
      </div>


      <div className="orderTitleContainer">
        <div className="ordermaterial">원자재
      </div>      
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("조심")}
        >
          원자재정보입력
        </button>
      </div>

      <div className="orderTitleContainer">
        <div className="orderPInfo">공정자재
        </div>
        <button
          className="orderNumberButton1"
          type="button"
          onClick={() => alert("조심")}
        >
          공정정보 입력
        </button>
      </div>

      <div className="orderTitleContainer">
        <div className="ordercompelte">생산완료예정일
        </div>
        <input 
        type="date" 
        required 
        className="orderNumbername1" />
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
    
    
  );
}
