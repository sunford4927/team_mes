import React from "react";
import './orders.css';
import { Link } from "react-router-dom";




export default function Orders() {
    return(
        <div className="order">
            <div className="orderPR">
                <div className="orderPRWrapper">
                    <div className="orderMenu">
                        <h3 className="orderTitle">생산 계획 관리</h3>
                        <h5 className="orderR">생산 계획 등록 </h5>
                        <h6 className="ordernext">* 필수 항목</h6>                    
                    <div className="orderclassification">
                            <span className="pp"> * </span>
                            <label> 분류 </label>
                    </div>
                    <Link to='/NewR'>
                        <input                                            
                            type="radio"
                            className="orderAddButton"
                            id="rd1"
                            name="flag"
                            value="P"
                            chechked
                        />
                        </Link>                    
                        <label>계획</label>
                                
                        <input 
                            type="radio"
                            className="orderAddButton1"
                            id="rd2"
                            name="flag"
                            value="O"                        
                        />
                        <label>수주</label>
                        
                        
                    </div>
                </div>
            </div>
                <div className="orderTitleContainer">
                    <span className="P"> * </span>
                    <label> LOT번호  </label>            
                    <h6 className="ordernext1"> * 중복되지 않는 LOT번호를 작성해 주세요.</h6>
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
                    <span className="P"> * </span>
                    <label> 생산명  </label>            
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
                    <span className="P"> * </span>
                    <label> 제품명  </label>            
                </div>             
                <div className="orderbar2">
                    <input
                        type="text"
                        required
                        placeholder="찾기 버튼을 통해 제품을 선택해주세요"
                        className="orderNumbername2"
                    />
                    <button 
                        className="orderNumberButton1"
                        type="button"
                        onClick={()=>alert('조심')}>찾기
                    </button>
                </div>

                <div className="orderbar3">
                    <span className="P"> * </span>
                    <label> 수량  </label>                
                </div>
                <div>
                    <input
                        type="text"
                        required
                        placeholder="수량을 입력해주세요"
                        className="orderNumbername1"
                    />
                </div>

                <div className="orderbar4">
                    <div className="ordermaterial">원자재</div>
                        <button 
                        className="orderNumberButton1"
                        type="button"
                        onClick={()=>alert('조심')}>원자재정보입력
                        </button>


                        <div className="orderPInfo">공정자재</div>
                        <button 
                        className="orderNumberButton1"
                        type="button"
                        onClick={()=>alert('조심')}>공정정보 입력
                        </button>
                        <div className="orderbar5">
                            생산완료예정일
                        </div>
                            <input
                            type="date"
                            required
                                className="orderNumbername1"
                            />
                        </div>
                </div>
                


                
            )

    }