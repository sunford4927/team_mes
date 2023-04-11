import React, { useState } from "react";
import './manageMent.css'
import Product from "../product/Product";

export default function ManageMent({dummyData, content, handleChange, form, handleReset}) {
    // const [form, setForm] = useState({})

    return (
        <div className="management">
            <div className="management_all">
            <div className= "managementTitleContainer">
                <h3 className="managementTitle">{content.title}</h3>                
            </div>
                <div className="management_container">
                <div className="managementnumber">
                    <span>{content.row1}</span><br/>
                    <input
                        name="input1"
                        type="text"
                        placeholder={`${content.row1} 입력`}
                        className="managementnumber1"
                        value={form.input1}
                        onChange={handleChange}
                    />
                </div>

                <div className="managementname">
                    <label>{content.row2}</label>
                    <input 
                        name="input2"
                        type="text"
                        placeholder={`${content.row2} 입력`}
                        className="managementname1"
                        value={form.input2}
                        onChange={handleChange}
                    />    
                </div>
                </div>

                <p className="managementdate">
                    <label>{content.row3}</label>
                    <input
                        name="startdate" 
                        type="date"
                        className="search"
                        // aria-label="생산완료예정일 검색 시작기간"
                        value={form.startdate}
                        onChange = {handleChange}
                    />
                    <span className="control"> ~ </span>
                    <input
                        name="enddate"
                        type="date"
                        className="search"
                        // aria-label="생산완료예정일 검색 종료 기간"
                        onChange={handleChange}
                        value={form.enddate}
                    />

                </p>
                <br/>
            <div className="managementContainer">
                
                <button className="managementAddButton1" onClick={handleReset}>검색 초기화</button>
                <br/>
            </div>
                <Product list={dummyData} ads = {content.adress} />
            </div>
        </div>
    )
}