import React from "react";
import './sidebar.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom'
import { FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi";
import { useState,useEffect,useRef, useN } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const nav = useNavigate();
    const [menuCollapse, setMenuCollapse] = useState(false)   
    const menuIconClick = () => {    
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    function home(){
        nav('/info/Client')
    }
    
  

  

    return (
        
    <div className="sidebar">
      
        <div className="sidebarWrapper">
        <div className="logo">
                    
                    <p onClick ={home}   > {menuCollapse? <img 
                    style={{left:"100px", zIndex:999999}}
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
            <div className="sidebarMenu">

                <Link to ={"/info"}>
                    <h3 className="sidebarTitle"> <HomeWorkIcon /> 기준정보관리</h3>                                      
                </Link>

                <ul className="sidebarList"> 
                    <Link to ="/info/Client">
                    <li className="sidebarListItem">
                        고객정보 관리                    
                    </li>
                    </Link>
                    <Link to ="/info/Material">
                    <li className="sidebarListItem">
                        원자재정보관리
                    </li>
                    </Link>
                    <Link to ="/info/Item">
                    <li className="sidebarListItem">
                        제품정보 관리
                    </li>
                    </Link>
                    <Link to ="/info/Process">
                    <li className="sidebarListItem">
                        공정정보 관리
                    </li>
                    </Link>
                    <Link to ="/info/Machine">

                    <li className="sidebarListItem">
                        설비정보 관리
                    </li>
                    </Link>
                </ul>

            </div>

            <div className="sidebarMenu">
                
                <h3 className="sidebarTitle1"> <Person2SharpIcon />생산관리</h3>
                
                <ul className="sidebarList">
                    <Link to='/users'>
                    <li className="sidebarListItem">                        
                        생산계획 관리
                    </li>
                    </Link>
                    
                    <Link to='/monitoring'>
                    <li className="sidebarListItem">                       
                        생산 모니터링
                    </li>
                    </Link>
                    
                    <li className="sidebarListItem">                       
                        생산보고서
                    </li>
                </ul>
            </div>           
            
            
        </div>
    </div>
    )           
}

