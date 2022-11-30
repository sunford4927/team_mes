import "./modal.css";
import { useEffect } from "react";

function Modal(props) {
  function closeModal() {
    props.closeModal();
  }

  useEffect(function(){
    console.log(props.nameArray)
  },[])

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>

        <h1>예약내역</h1>
        {props.nameArray.map(function(data){
            return <h1 style={{color:"black"}}>{data}</h1>
        })}
      </div>
    </div>
  );
}

export default Modal;

