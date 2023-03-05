import React from "react";
import './manageMent.css'
import {Link} from 'react-router-dom'
import Product from "../product/Product";

export default function ManageMent({dummyData, title, row1, row2,row3}) {
    return (
        <div className="management">
            <div className="management_all">
            <div className= "managementTitleContainer">
                <h3 className="managementTitle">{title}</h3>                
            </div>
                <div className="management_container">
                <div className="managementnumber">
                    <span>{row1}</span><br/>
                    <input
                        type="text"
                        placeholder={`${row1} 입력`}
                        className="managementnumber1" 
                    />
                </div>

                <div className="managementname">
                    <label>{row2}</label>
                    <input 
                        type="text"
                        placeholder={`${row2} 입력`}
                        className="managementname1"
                    />    
                </div>
                </div>

                <p className="managementdate">
                    <label>{row3}</label>
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

                </p>
                <br/>
            <div className="managementContainer">
                
                <button className="managementAddButton">검색</button>
                <button className="managementAddButton1">검색 초기화</button>
                <br/>
            </div>
                <Product list={dummyData} />
            </div>
        </div>
    )
}