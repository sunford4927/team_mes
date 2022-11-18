import React from "react";
import './featuredInfo.css'
import GetAppIcon from '@mui/icons-material/GetApp';
import UploadIcon from '@mui/icons-material/Upload';
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">수입</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <GetAppIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">판매</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,234</span>
                    <span className="featuredMoneyRate">-3.4 <GetAppIcon className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
                <span className="featuredTitle">비용</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,213</span>
                    <span className="featuredMoneyRate">+11.4<UploadIcon className="featuredIcon"/> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>            
        </div>        
    )
}