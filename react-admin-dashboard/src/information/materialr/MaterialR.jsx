import './materialR.css'



export default function MaterialR() {
    return(    <div className="client">
    <div className="clientTitleContainer">
          <h3 className="clientTitle">원자재정보 관리</h3>
        </div>
        <h5 className="processR">원자재 정보 등록 </h5>
        <h6 className="MaterialRnext">* 필수 항목</h6>
        <div className="clientContainer">
          <div className="clientnumber">
          <span className="pp"> * </span>
            <label>원자재명 </label>
            <input
              type="text"
              placeholder="원자재명을 입력해주세요"
              className="clientnumber1"
            />
          </div>
    
          <div className="clientcode">
          <span className="pp"> * </span>
            <label>원자재코드 </label>
            <input
              type="text"
              placeholder="원자재코드를 입력해주세요"
              className="clientcode1"
            />
          </div>
          <div className="clientname">
            <label>단위 </label>
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
            <button className="MaterialRRAddButton">저장</button>
          <button className="MaterialRRAddButton1">취소</button>
          
        </div>
        )
}