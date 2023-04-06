import React, { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper"
import Parser from 'html-react-parser'
import axios from "axios"
import "swiper/css/autoplay"
import "swiper/css/navigation";
import "swiper/css"
import "./Notice.css"

// import 'swiper/swiper.scss'
SwiperCore.use([Autoplay, Navigation])

function Notice(){
    const [noticelist, setNoticelist] = useState([])
    const resepon = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/mes/TbNotice/");
            setNoticelist(result.data)
            } catch (error) {
            console.error(error);
            }
        };
    
    useEffect(() => {
        resepon()
    },[])

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
                        // position: 'absolute',
                        // top: 0,
                        // right: 150,
                        margin : '20px 0 0 30px',
                        // border : '1px solid red',
                        // height :  '100%',
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
                        return <SwiperSlide key={idx}>{Parser(item.notice_content)}</SwiperSlide>
                    })} 
                </Swiper>
            </div>
        </div>
        </>
    );
}

export default Notice;