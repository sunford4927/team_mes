import './topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonPinIcon from '@mui/icons-material/PersonPin';



export default function Topbar() {
    

    return (
        
        <div className="topbar">
            
            
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