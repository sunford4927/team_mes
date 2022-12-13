import { Link } from "react-router-dom"
import './clientR.css'
export default function ClientReg(){
    return (
    <div className="ClientReg">
    <div className="ClientRegTitleContainer">
      <h3 className="ClientRegTitle">고객정보 관리</h3>
    </div>
    <h5 className="ClientRR">고객정보 등록 </h5>
    <h6 className="ClientRRnext">* 필수 항목</h6>
    <div className="ClientRContainer">
      <div className="ClientRnumber">
      <span className="pp"> * </span>
        <label>고객명 </label>
        <input
          type="text"
          placeholder="고객명을 입력해주세요"
          className="ClientRnumber1"
        />
      </div>
      <div className="ClientRcode">
      <span className="pp"> * </span>
      <label> 고객코드 </label>       
        <input
          type="text"
          placeholder="고객코드를 입력해주세요"
          className="ClientRcode1"
        />
        
      </div>
      <div className="phone">
        <label>전화번호 </label>
        <input
          type="text"
          placeholder="담당자 성함을 입력해주세요"
          className="phone1"
        />
      </div>
      <div className="ClientRname">
        <label>담당자 </label>
        <input
          type="text"
          placeholder="담당자 성함을 입력해주세요"
          className="ClientRname1"
        />
      </div>
      <div className="ClientRphone">
        <label>담당자 연락처 </label>
        <input
          type="text"
          placeholder="담당자 성함을 입력해주세요"
          className="ClientRphone1"
        />
      </div>

      
      </div>        
        <button className="ClientRAddButton">저장</button>
      <button className="ClientRAddButton1">취소</button>
      
    </div>
    )
}