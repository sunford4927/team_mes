import React, { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper"
import { noticeCheck } from '../../../reducer/notice_info';
import { useSelector, useDispatch } from 'react-redux';
import Parser from 'html-react-parser'
import axios from "axios"
import "swiper/css/autoplay"
import "swiper/css/navigation";
import "swiper/css"
import "./Notice.css"

// import 'swiper/swiper.scss'
SwiperCore.use([Autoplay, Navigation])

function Notice(){
    console.log(localStorage)
    const [noticelist, setNoticelist] = useState([])
    const notice = useSelector(state => state.noticeReducer.notice)
    const dispatch = useDispatch();
    const onNoticeCheck = (data) => dispatch(noticeCheck(data));
    // const resepon = async () => {
    //     try {
    //         const result = await axios.get("http://127.0.0.1:8000/mes/TbNotice/");
    //         setNoticelist(result.data)
    //         onNoticeCheck(result.data)
    //         console.log(result.data)
    //         } catch (error) {
    //         console.error(error);
    //         }
    //     };
    
    //     useEffect(() => {
    //     resepon()
    // },[])

    useEffect(() => {
        setNoticelist(notice)
        console.log('렌더링 됫습니다!', notice)
    },[notice])
      return (
        <>  
        <div className='notice'>
            <div className='notice_left'>
                <span className='notice_title'>공지사항 </span>
            </div>
            <div className='notice_right'>
                <Swiper
                    style={{
                        height: '70px',
                        width: '400px',
                    }}
                    direction={'vertical'}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={8} // 요소 사이 간격
                    initialSlide={0} // 처음보여줄 슬라이드
                    className='mySwiper'
                    >
                        
                    {noticelist.map((item,idx)=>{
                        return <SwiperSlide key={idx}><p>{item.notice_content}</p></SwiperSlide>
                    })} 
                </Swiper>
            </div>
        </div>
        </>
    );
}

export default Notice;

