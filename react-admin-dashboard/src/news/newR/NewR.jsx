import React from "react";
import './newR.css';
import { Link } from "react-router-dom";





export default function NewR() {   
    return (
        <div className="processPR">
            <div className="processPRWrapper">
                <div className="processMenu">
                    <h3 className="processTitle">생산 계획 관리</h3>
                    <h5 className="processR">생산 계획 등록 </h5>
                    <h6 className="processnext">* 필수 항목</h6>                    
                <div className="proceeclassification">
                        <span className="pp"> * </span>
                        <label> 분류 </label>
                </div>
                
                    <input                                            
                        type="radio"
                        className="processAddButton"
                        id="rd1"
                        name="flag"
                        value="P"
                        chechked
                    />
                                        
                    <label>계획</label>
                    <Link to='/order'>               
                    <input 
                        type="radio"
                        className="processAddButton1"
                        id="rd2"
                        name="flag"
                        value="O"                        
                    />
                    </Link>
                    <label>수주</label>
                    
                       
                </div>
            </div>
        </div>
        

    )

};