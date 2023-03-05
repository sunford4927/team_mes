import "./topbar.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import './sidebar.css';

import { Link } from "react-router-dom";

export default function Topbar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const nav = useNavigate();
  const home = () => {
    nav("/info/Client");
  };
  return (
    <div className="topbar">
      <p className="logo_menu">
        <span class="material-symbols-outlined" onClick={onClick}>
          menu
        </span>
        <span onClick={home} className="home_name">
          거북이
        </span>
      </p>
      <div className="menu-container"></div>

      <div className="topbarWrapper">
        <div className="topRight">
          {/* tobarIcon */}
          <div className="topbarIconContainer">
            <NotificationsActiveIcon />
            <span className="topIconBadge">2</span>
          </div>
          {/* tobarIcon */}
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          {/* tobarIcon */}
          <div className="topbarIconContainer">
            <PersonPinIcon />
          </div>
        </div>
      </div>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
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
}
