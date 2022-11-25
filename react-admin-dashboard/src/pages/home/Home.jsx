import React from "react"; 
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";




const Home = () => {
    return (
        
            <div className="home">
                <FeaturedInfo />
                
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
            </div>
        
    );
};

export default Home;