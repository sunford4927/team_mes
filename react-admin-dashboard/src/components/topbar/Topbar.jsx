import React, { useState,useEffect } from "react";
import './topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonPinIcon from '@mui/icons-material/PersonPin';



export default function Topbar() {
    const[imgLeft,setimgLeft]=useState(0);

    useEffect(function(){
        if(imgLeft<1300){
         setTimeout(()=>  setimgLeft(imgLeft+50),1300);          
        }else{
            setimgLeft(0)
        }
     },[imgLeft])

    return (
        
        <div className="topbar">
            <img 
                    style={{position:"sticky",left:imgLeft}}
                                            className="turtle"
                                            src="images/turtle_log.png" 
                                            alt ="log"/>
            
            <div className="topbarWrapper">
                
                <div className="topRight">
                    {/* tobarIcon */}
                    <div className="topbarIconContainer">
                    <NotificationsActiveIcon/>
                    <span className="topIconBadge">2</span>
                    </div>
                    {/* tobarIcon */}
                    <div className="topbarIconContainer">
                    <SettingsIcon/>                    
                    </div>
                    {/* tobarIcon */}
                    <div className="topbarIconContainer">
                    <PersonPinIcon/>                    
                    </div>

                </div>
                
            </div>
                        
        </div>
    )
}