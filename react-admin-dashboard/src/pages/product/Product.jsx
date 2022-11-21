import React from "react";
import './product.css';
import {Link} from 'react-router-dom'



export default function Product() {
    return (
        <div className="product">
            <div className= "productTitleContainer">
                <h4 className="productTitle">생산 계획 정보</h4> 
                <h6 className="productTitleNext" >총 9건의 검색 결과가 있습니다. </h6>
                <Link to="/NewR">
                <button className="productAddButton">신규등록</button>
                </Link>
                
            </div>
        </div>
    )
}