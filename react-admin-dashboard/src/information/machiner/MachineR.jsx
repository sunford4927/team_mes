import './machineR.css'
import { Link } from "react-router-dom"


export default function MachineR() {   
    return(    <div className="client">
            <div className="clientTitleContainer">
                  <h3 className="clientTitle">설비정보 관리</h3>
                </div>
                <h5 className="processR">설비정보 등록</h5>
                <h6 className="MachineRnext">* 필수 항목</h6>
                <div className="clientContainer">
                  <div className="clientnumber">
                  <span className="pp"> * </span>
                    <label>설비명 </label>
                    <input
                      type="text"
                      placeholder="설비명을 입력해주세요"
                      className="clientnumber1"
                    />
                  </div>
            
                  <div className="clientcode">
                  <span className="pp"> * </span>
                    <label>설비코드 </label>
                    <input
                      type="text"
                      placeholder="설비코드를 입력해주세요"
                      className="clientcode1"
                    />
                  </div>
                  <div className="clientname">
                    <label>라인명 </label>
                    <input
                      type="text"
                      placeholder="1라인"
                      className="clientname1"
                    />
                  </div>
                  <div className="clientname">
                    <label>관리담당(정) </label>
                    <input
                      type="text"
                      placeholder="관리담당(정)을 입력해주세요"
                      className="clientname1"
                    />
                  </div>
                  <div className="clientname">
                    <label>관리담당(부) </label>
                    <input
                      type="text"
                      placeholder="관리담당(부)을 입력하세요"
                      className="clientname1"
                    />
                  </div>
            
                  
                  </div>        
                    <button className="MachineRRAddButton">저장</button>
                  <button className="MachineRRAddButton1">취소</button>
                  
                </div>
                )
            }
        