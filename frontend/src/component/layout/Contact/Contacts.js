import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";




const Contact = () => {
        // const [click, setClick] = useState(false);

//  const handleClick = () => setClick(!click);

const visitAfnanInstagram = () => {
    window.location = "https://sr-virtual-try-room.herokuapp.com/";
  };
  return (
 <>
 <div className="contactContainer"> 
 
  
<div class="getmarriage">
          <h2>GETTING MARRIED ?</h2>
            <p>
              Wanna Try your Dream Wedding Look, We Got You Covered. <span className="vtr"> TRY OUR VIRTUAL DRESSING ROOM </span>
            </p>
            <div className="trybtn">
                 <Button onClick={visitAfnanInstagram}  >
             Try Virtually
           </Button> 
            </div>
        
           
        </div>

   
    



      {/* <a href="https://shadi-rentals.herokuapp.com/">
        <Button>Try Virtually</Button>
      </a> */}
     </div>
     </>
  );

};

export default Contact;

