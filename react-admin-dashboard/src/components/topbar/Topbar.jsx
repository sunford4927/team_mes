import React, { useState } from "react";
import './topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi";


export default function Topbar() {
    const [menuCollapse, setMenuCollapse] = useState(false)   
const menuIconClick = () => {    
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};
    return (
        
        <div className="topbar">
            
            <div className="topbarWrapper">
                <div className="logo">
                    
                    <p> {menuCollapse? <img 
                                            className="turtle"
                                            src="images/turtle_log.png" 
                                            alt ="log"/> : "거북이"}
                                            </p>
                </div>
                <div className="closemenu" onClick={menuIconClick}>
                    {menuCollapse?(
                        <FiArrowRightCircle/>) :(
                            <FiArrowLeftCircle/>
                        )
                        }                    
                </div>
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