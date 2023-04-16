import "./modal.css";
import { useEffect, useState } from "react";

function Modal(props) {

  function closeModal() {
    props.closeModal();
  }

function data_name(e){
  // props.update(e.target.innerText)
  console.log(e.target)
  props.update(e)
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

        <h1 className="item_name">제품명</h1>
        {props.nameArray.map(function(data){
            return <div className="item_data"><button name="item_name" onClick={data_name} value={data}>{data}</button></div>
            
        })}
      </div>
    </div>
  );
}


export default Modal;

