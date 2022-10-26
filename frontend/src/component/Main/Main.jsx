import React from "react";
import video from "../../assets/home.mp4";
import "./Main.css";


const Main =() => {
    return (
        <div className="Main">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted/>
       
        {/* <div className="content">
        <h1>Welcome</h1>
        <p>To SHADI RENTALS.</p>
        </div> */}
        
        </div>
    )
}
export default Main;