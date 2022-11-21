import React from "react";
import { Link } from "react-router-dom";
import './newR.css';
import InputIcon from '@mui/icons-material/Input';



export default function NewR() {
    return (
        <div className="processPR">
            <div className="processPRWrapper">
                <div className="processMenu">
                    <h3 className="processTitle">생산 계획 관리</h3>
                    <h5 className="processR">생산 계획 등록 </h5>
                    <h6 className="processnext">*필수 항목</h6>
                    
                <div className="proceeclassification">
                        <span className="pp"> * </span>
                        <label> 분류 </label>
                        </div>
                        <Link to="/NewR">
                            <button className="processAddButton"><InputIcon/>계획</button>
                        </Link>
                        <Link to="users">
                            <button
                            className="processAddButton1"><InputIcon/>수주</button>
                        </Link>                    
                </div>
                                              
            </div>
        </div>
        

    )

};