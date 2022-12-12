import React from "react";
import './sidebar.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import FactCheckIcon from '@mui/icons-material/FactCheck';

import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const nav = useNavigate();
   
    function home() {
        nav('/info/Client')
    }





    return (

        <div className="sidebar">

            <div className="sidebarWrapper">
                <div className="logo">

                    <p onClick={home}> 거북이</p>
                </div>
                
                <div className="sidebarMenu">

                    
                        <h3 className="sidebarTitle"> <HomeWorkIcon /> 기준정보관리</h3>


                    <ul className="sidebarList">
                        <Link to="/info/Client">
                            <li className="sidebarListItem">
                                고객정보 관리
                            </li>
                        </Link>
                        <Link to="/info/Material">
                            <li className="sidebarListItem">
                                원자재정보관리
                            </li>
                        </Link>
                        <Link to="/info/Item">
                            <li className="sidebarListItem">
                                제품정보 관리
                            </li>
                        </Link>
                        <Link to="/info/Process">
                            <li className="sidebarListItem">
                                공정정보 관리
                            </li>
                        </Link>
                        <Link to="/info/Machine">

                            <li className="sidebarListItem">
                                설비정보 관리
                            </li>
                        </Link>
                    </ul>

                </div>
            </div>

            <div className="sidebarMenu">
                
                <h3 className="sidebarTitle1"> <FactCheckIcon /> 생산관리</h3>
                
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
                    <Link to= 'report'>
                    <li 
                    className="sidebarListItem"> 
                        생산보고서
                    </li>
                    </Link>
                </ul>
            </div>            
        </div>
    )
}

