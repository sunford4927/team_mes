import { useRef, useState} from 'react';
import './Dropdown.css'
import React from "react";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import { Link } from "react-router-dom";


export default function DropdownMenu  ()  {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

  
    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <div className="sidebarWrapper">


        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            {" "}
            <HomeWorkIcon /> 기준정보관리
          </h3>

          <ul className="sidebarList">
            <Link to="/info/Client">
              <li className="sidebarListItem">고객정보 관리</li>
            </Link>
            <Link to="/info/Material">
              <li className="sidebarListItem">원자재정보관리</li>
            </Link>
            <Link to="/info/Item">
              <li className="sidebarListItem">제품정보 관리</li>
            </Link>
            <Link to="/info/Process">
              <li className="sidebarListItem">공정정보 관리</li>
            </Link>
            <Link to="/info/Machine">
              <li className="sidebarListItem">설비정보 관리</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle1">
          {" "}
          <FactCheckIcon /> 생산관리
        </h3>

        <ul className="sidebarList">
          <Link to="/users">
            <li className="sidebarListItem">생산계획 관리</li>
          </Link>

          <Link to="/monitoring">
            <li className="sidebarListItem">생산 모니터링</li>
          </Link>
          <Link to="report">
            <li className="sidebarListItem">생산보고서</li>
          </Link>
        </ul>
      </div>
        </nav>
      </div>
    );
  };