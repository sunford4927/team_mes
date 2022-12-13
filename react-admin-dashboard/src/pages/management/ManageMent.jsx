import React from "react";
import './manageMent.css'
import {Link} from 'react-router-dom'

export default function ManageMent() {
    return (
        <div className="management">
            <div className= "managementTitleContainer">
                <h3 className="managementTitle">생산계획 관리</h3>                
            </div>
            <div className="managementContainer">
                <div className="managementnumber">
                    <label>LOT번호  </label>
                    <input
                        type="text"
                        placeholder="LoT번호를 입력해주세요"
                        className="managementnumber1" 
                    />
                </div>

                <div className="managementname">
                    <label>제품명  </label>
                    <input 
                        type="text"
                        placeholder="제품명을 입력해주세요"
                        className="managementname1"
                    />    
                </div>

                <div className="managementdate">
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
            <div className="managementContainer">
                
                <Link to="./Check">
                <button className="managementAddButton">검색</button>
                </Link>
                <button className="managementAddButton1">검색 초기화</button>
            </div>
            </div>
        </div>
    )
}