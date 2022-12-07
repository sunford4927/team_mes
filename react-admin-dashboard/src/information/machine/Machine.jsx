import './machine.css'
import { Link } from "react-router-dom"
export default function Machine(){
    return (
        <div className="machine">
            <div className= "machineTitleContainer">
                <h3 className="machineTitle">설비정보 관리</h3>                
            </div>
            <div className="machineContainer">    
                <div className="machinecode">
                    <label>설비코드  </label>
                    <input 
                        type="text"
                        placeholder="설비코드를 입력해주세요"
                        className="machinecode1"
                    />    
                </div>
                <div className="machinename">
                    <label>설비명  </label>
                    <input 
                        type="text"
                        placeholder="설비명을 입력해주세요"
                        className="machinename1"
                    />    
                </div>
    
                <div className="machinedate">
                    <label>등록일시  </label>
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
    
                </div>
                    <Link>
                    <button className="machineAddButton">검색</button>
                    
                    </Link>
                    <button className="machineAddButton1">검색 초기화</button>    
                
            
            </div>
        </div>
    )
}