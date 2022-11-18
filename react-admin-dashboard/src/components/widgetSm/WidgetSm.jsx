import React from 'react';
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
    <div className="widgetSm">
        <span className="widgetSmTitle"> 새로 가입</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img
                src="https://img.lovepik.com/free-png/20211231/lovepik-business-people-png-image_401096208_wh860.png" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Choi yu sol</span>
                    <span className="widgetSmUserTitle">Software Engineer</span> 
                </div>    
                <button className='widgetSmButton'>
                    <VisibilityIcon/>
                    Display
                </button>
            </li>
        </ul>
    </div>
    )
}