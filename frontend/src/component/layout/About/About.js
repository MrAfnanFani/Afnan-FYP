import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitAfnanInstagram = () => {
    window.location = "https://instagram.com/fani_istic";
  };
  const visitWajihInstagram = () => {
    window.location = "https://instagram.com/wajih.ulhassan.794";
  };
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Contact Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dvpqqvwa2/image/upload/v1659335188/products/20210815_213635_squ7zo.jpg"
              alt="Founder"
            />
            <Typography>Afnan Mehmood 4004/BSCS/f18-A</Typography>
            <Button onClick={visitAfnanInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
           
            </span>
          </div>
        
          <div>
          <Avatar
            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            src="https://res.cloudinary.com/dvpqqvwa2/image/upload/v1659335442/products/WhatsApp_Image_2022-02-27_at_10.26.11_PM_apsqjw.jpg"
            alt="Founder"
          />
          <Typography>Wajih ul Hassan 4012/BSCS/f18-A</Typography>
          <Button onClick={visitWajihInstagram} color="primary">
            Visit Instagram
          </Button>
          <span>
          
          </span>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;