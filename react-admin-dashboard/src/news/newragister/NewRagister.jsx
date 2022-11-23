import React, { useState } from "react";
import NewR from "../newR/NewR";
import Order from "../order/Orders"
import Plan from "../plan/Plan"




const NRagiser = () =>{
    // const [event,setEvent] = useState('')
    // function eventcatch (e){
    //     console.log(e.target.value);
    //     setEvent(e.target.value);
    // }
    // function choice(){
    //     return (
    //         <div>
    //     <input                                            
    //     type="radio"
    //     className="processAddButton"
    //     id="rd1"
    //     name="flag"
    //     value="P"
    //     onChange={eventcatch}
    //     chechked
    // />
                        
    // <label>계획</label>
    
    // <input 
    //     type="radio"
    //     className="processAddButton1"
    //     id="rd2"
    //     name="flag"
    //     value="O"
    //     onChange={eventcatch}                        
    // />
    
    // <label>수주</label>
    // </div> )
    // }
    // switch (event){
    //     case 'O' : return <Order/>;
    //     case 'P' : return <Plan/>;
    // }
    
    return (

    <div className="Nragiser">
        <NewR  />
        <Plan/>
    </div>
    )
};


export default NRagiser;