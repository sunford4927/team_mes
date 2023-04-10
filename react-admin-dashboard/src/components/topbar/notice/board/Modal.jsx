import React, {useState}  from 'react';
import axios from 'axios';

function Modal({ selectedData, handleCancel, onNoticeCheck}) {
    const [edited, setEdited] = useState(selectedData);

    const onCancel = () => {
      handleCancel();
    }
  
    const onEditChange = (e) => {
      setEdited({ //문법
        ...edited,
        [e.target.name]: e.target.value
      })
    }
  
    const onSubmitEdit = (e) => {
      e.preventDefault();
      axios.put(`http://127.0.0.1:8000/mes/TbNoticer/${edited.id}/`, edited)
      .then(()=> axios.get(`http://127.0.0.1:8000/mes/TbNotice/`).then((res)=>{
        onNoticeCheck(res.data)
        handleCancel()
      }))
      .catch(err=>console.log(err))

    }
  
    return (
      <div className="post_container modal">
        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">고객 정보 수정하기</h3>
            <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
          </div>
          <form onSubmit={onSubmitEdit}>
            <div class="p-3">
  
              <div>ID: {edited.id}</div>
              <div>Notice_content: <input className='border-2 border-gray-100' type='text' name='notice_content' 
              value={edited.notice_content} onChange={onEditChange} /></div>
              <div>Date: <input className='border-2 border-gray-100' type='text' name='reg_date' 
              value={edited.reg_date} onChange={onEditChange} /></div>
              <div>Reg_id: <input className='border-2 border-gray-100' type='text' name='reg_id' 
              value={edited.reg_id} onChange={onEditChange} /></div>

  
            </div>
            <div className="flex justify-end items-center w-100 border-t p-3">
              <button className="save_btn save_btn_esc" onClick={onCancel}>취소</button>
              <button type='submit' className="save_btn save_btn_input">수정</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Modal;