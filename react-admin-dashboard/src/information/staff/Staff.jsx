import React from "react";
import './staff.css'
import { Link } from "@mui/material";


export default function Staff() {
    return (
        <div className="staff">
            <div className= "staffTitleContainer">
                <h3 className="staffTitle">사원정보 관리</h3>                
            </div>
            <div className="staffContainer">
                <div className="staffnumber">
                    <label>성명 </label>
                    <input
                        type="text"
                        placeholder="LoT번호를 입력해주세요"
                        className="staffnumber1" 
                    />
                </div>

                <div className="staffname">
                    <label>사원번호  </label>
                    <input 
                        type="text"
                        placeholder="제품명을 입력해주세요"
                        className="staffname1"
                    />    
                </div>
                <div className="staffname">
                    <label>부서  </label>
                    <input 
                        type="text"
                        placeholder="제품명을 입력해주세요"
                        className="staffname1"
                    />    
                </div>

                <div className="staffdate">
                    <label>생산완료예정일  </label>
                    <input 
                        type="date"
                        className="search"
                        aria-label="생산완료예정일 검색 시작기간"
                        value
                    />
                    <span className="control"> ~ </span>
                    <input
                        type="date"
                        className="search"
                        aria-label="생산완료예정일 검색 종료 기간"
                        value
                    />

                </div>
            <div className="staffContainer">
                
                <Link to="/Check">
                <button className="staffAddButton">검색</button>
                </Link>
                <button className="staffAddButton1">검색 초기화</button>
            </div>
            </div>
        </div>
    )
}