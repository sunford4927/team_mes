import "./Modal.css";
import { useEffect, useState } from "react";
// Order MODAL
function Modal(props) {

  function closeModal() {
    props.closeModal();
  }

function data_name(e){
  props.update(e.target.innerText)
  props.closeModal();
  // console.log(e.target.innerText)

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

        <h1 className="item_name">수주코드</h1>
        {props.nameArray.map(function(data){
            return <div className="item_data"><button name="abc" onClick={data_name}>{data}</button></div>
            
        })}
      </div>
    </div>
  );
}


export default Modal;

