import { useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { noticeDelete, noticeCheck } from '../../../../reducer/notice_info';
import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import "./Board.css"

function Board() {
    // css 라이브러리 : https://tailwindcss.com/docs/guides/create-react-app

    const [selected, setSelected] = useState('')
    const [modalOn, setModalOn] = useState(false)

    const notice = useSelector(state => state.noticeReducer.notice)

    const dispatch = useDispatch();

    const onNoticeDelete = (id) => dispatch(noticeDelete(id));
    const onNoticeCheck = (data) => dispatch(noticeCheck(data));
    // 고유 값으로 사용 될 id
    // ref 를 사용하여 변수 달기
    const nextId = useRef(11);
    // data 호출


    // const handleSave = (data) => {
    //     // 데이터 수정하기
    //     if (data.id){
    //         setInfo(
    //             info.map(row => data.id === row.id ? {
    //                 id : data.id,
    //                 notice_subject : data.notice_subject,
    //                 notice_content : data.notice_content,
    //                 reg_date : data.reg_date,
    //                 reg_id : data.reg_id
    //             } : row))
    //         } else {
    //             setInfo(info => info.concat(
    //                 {
    //                     id : data.id,
    //                     notice_subject : data.notice_subject,
    //                     notice_content : data.notice_content,
    //                     reg_date : data.reg_date,
    //                     reg_id : data.reg_id
    //                 }
    //             ))
    //             nextId.current += 1;
    //         }
    //     }

    const handleRemove = (id) => {
        onNoticeDelete(id);
        axios.delete(`http://127.0.0.1:8000/mes/TbNoticer/${id}/`, id)
    }


    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id :item.id,
            notice_subject : item.notice_subject,
            notice_content : item.notice_content,
            reg_date : item.reg_date,
            reg_id : item.reg_id
        }
        console.log(selectedData);
        setSelected(selectedData);
    }

    const handleCancel = () => {
        setModalOn(false);
    }

    return (
        <div className='inner'>
            <div className="notice_table">
                <div className="table_info">
                <div><p className='table_name'>공지사항 리스트</p></div>
            <table >
                <thead className="justify-between">
                    <tr className="bg-gray-800">
                        <th className="text-gray-800 px-4 py-3">Id.</th>
                        <th className="text-gray-800 px-4 py-3">Notice_subject</th>
                        <th className="text-gray-800 px-4 py-3">Notice_content</th>
                        <th className="text-gray-800 px-4 py-3">Reg_date</th>
                        <th className="text-gray-800 px-4 py-3">Reg_id</th>
                        <th className="text-gray-800 px-4 py-3">Edit</th>
                        <th className="text-gray-800 px-4 py-3">Delete</th>
                    </tr>
                </thead>
                <Tr info={notice} handleRemove={handleRemove} handleEdit={handleEdit}/>
            </table>
            </div>
            <div className="sub_container">
            <Post />
            {modalOn && <Modal selectedData={selected} handleCancel = {handleCancel} onNoticeCheck={onNoticeCheck}/>}
            </div>
            </div>
        </div>
    );
}

export default Board;