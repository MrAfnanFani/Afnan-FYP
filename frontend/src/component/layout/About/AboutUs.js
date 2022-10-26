import React from "react";
import "./aboutSection.css";
import {  Typography } from "@material-ui/core";
import images from "../../../images/about.webp";
const AboutUs = () => {
 
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Our Story</Typography>

        <div>
         
        <div>
            <img className="girls" src={images} alt="about" />
        </div>
        <div class="vl"></div>
        <div  className="story"> 
            It has always been a firm believe of fashion for all. But somewhere in the
midst of bringing luxury Jewelry and Clothing to every Bride and Every Groom, we
forget that there are those in the world who don’t even have the luxury of
comfortable clothing.
SHADI RENTALS is Delivering Bridal Clothing for Both
Bride and Groom on RENT BASIS for their Wedding days.
<br/>
<br/>
        There’s always been a trend in Pakistani Weddings to opt for Heavy Bridal
Dresses which everyone can not afford to Purchase to wear only once in their
lifetime. The Offline Market Rentals are not reliable in terms of their policies or they
charge the rent heavily. Customers themselves have to visit the markets to check
for the availability on rent basis and also shop owners have very less variety to
choose from. There’s always been a conflict of trust issues in between the
customers and shop owners specifically for rent purposes.
<br/>
<br/>
Over consumption is one of the major challenges facing sustainability in the world today. Our preferences are changing with a blink of an eye, and we move on to the next best trend quick! Especially in today’s culture with the rise in social media, once something is photographed it’s deemed a big social no-no to wear or use the item again… Okay, that might be a bit over exaggerated, but we are living in a world that is rapidly evolving and we’re constantly trying to play catch up. This endless evolution of preferences come at a high cost, both environmentally and monetarily. So… what’s the solution to looking fly but not breaking the bank and the environment?
<br/>
That’s the million-dollar question.


        </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;