import './proCessR.css'



export default function ProCessR() {
    return(    <div className="client">
    <div className="clientTitleContainer">
          <h3 className="clientTitle">공정정보 관리</h3>
        </div>
        <h5 className="processR">공정정보 등록 </h5>
        <h6 className="processnext">* 필수 항목</h6>
        <div className="clientContainer">
          <div className="clientnumber">
          <span className="pp"> * </span>
            <label>공정명 </label>
            <input
              type="text"
              placeholder="공정명을 입력해주세요"
              className="clientnumber1"
            />
          </div>
    
          <div className="clientcode">
          <span className="pp"> * </span>
            <label>공정코드 </label>
            <input
              type="text"
              placeholder="공정코드를 입력해주세요"
              className="clientcode1"
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
    
          
          </div>        
            <button className="ProCessRRAddButton">저장</button>
          <button className="ProCessRRAddButton1">취소</button>
          
        </div>
        )
}