
import { useEffect } from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed, num1, num2, num3 } = props;
   useEffect(()=>{
     
   },[num2])
    const containerStyles = {
      height: 20,
      width: '200%',
      backgroundColor: "#CCFFFF",
      borderRadius: 50,
      margin: 50,
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#333399",
      borderRadius: 'inherit',
      textAlign: 'center'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
    // useEffect(()=>{
    //   switch(){
  
    //     case 
    //   }

    // },[])
  
    return (
      <div style={containerStyles}>
        <div className="chart" style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;