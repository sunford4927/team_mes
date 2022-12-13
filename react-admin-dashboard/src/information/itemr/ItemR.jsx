import './itemR.css'
import { Link } from "react-router-dom"



export default function ItemR() {
    return(
    <div className="client">
        <div className="clientTitleContainer">
              <h3 className="clientTitle">제품정보 관리</h3>
            </div>
            <h5 className="processR">제품정보 등록 </h5>
            <h6 className="processnext">* 필수 항목</h6>
            <div className="clientContainer">
              <div className="clientnumber">
              <span className="pp"> * </span>
                <label>제품명 </label>
                <input
                  type="text"
                  placeholder="제품명을 입력해주세요"
                  className="clientnumber1"
                />
              </div>
        
              <div className="clientcode">
              <span className="pp"> * </span>
                <label>제품코드 </label>
                <input
                  type="text"
                  placeholder="제품코드를 입력해주세요"
                  className="clientcode1"
                />
              </div>
              <div className="clientname">
                <label> 단위 </label>
                <input
                  type="text"
                  placeholder="단위를 입력해주세요"
                  className="clientname1"
                />
              </div>
              <div className="clientname">
                <label>분류 </label>
                <input
                  type="text"
                  placeholder="분류를 입력해주세요"
                  className="clientname1"
                />
              </div>
              <div className="clientname">
                <label>사양 </label>
                <input
                  type="text"
                  placeholder="사양을 입력해주세요"
                  className="clientname1"
                />
              </div>
        
              
              </div>        
                <button className="ItemRAddButton">저장</button>
              <button className="ItemRAddButton1">취소</button>
              
            </div>
            )
        }
    