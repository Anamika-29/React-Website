import React,{Component} from "react";
import './App.css';
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";


  


export default function Banner2() {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    console.log(matches);
        const handleScrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };

    
return (<div style={matches?{marginTop:"300px"}:{marginTop:"0px"}} className={matches ?"banner-imagetwo2" :"banner-image2"}>
    <p className={matches ?"banner2HeadingMob":'banner2Heading'}>DOL Max Overlaminate Films</p>
    <p className={matches ?"oneMob":"one"} style={matches?{marginLeft:"60px"}: {marginLeft:"70px"}}>Printed graphics deserve maximum protection, DOL Max is the solution.</p>
    <p className={matches ?"twoMob":"two"} style={matches?{marginLeft:"60px"}: {marginLeft:"70px"}}><b>Features & Benefits:</b></p>
    <ul >
        <li style={matches?{marginLeft:"50px"}: {marginLeft:"60px"}} className={matches ?"threeMob":"three"}>Premium vertical durability of up to 7 years and up to 2 years horizontal{matches ?"":<br/>} durability protection.</li>
        <li style={matches?{marginLeft:"50px"}: {marginLeft:"60px"}} className={matches ?"threeMob":"three"}>The high gloss finish enhances the appearance of graphics and adds a{matches ?"":<br/>} special touch to help{matches ?<br/>:""} your graphics stand out.</li>
        <li style={matches?{marginLeft:"50px"}: {marginLeft:"60px"}} className={matches ?"threeMob":"three"}>Our digital overlaminates can be used on a {matches ?<br/>:""}variety of substrates,{matches ?"":<br/>} including banners, vehicle{matches ?<br/>:""} graphics, outdoor signage, and more.</li>
    </ul>


    <button onClick={handleScrollToTop} className={matches ?"inquireMob":"inquire"} style={matches?{marginLeft:"70px",marginTop:"40px",textAlign:"center",justifyContent:"center",paddingTop:"30px"}:{marginLeft:"70px",marginTop:"40px",textAlign:"center",justifyContent:"center",paddingTop:"20px"}}><p className={matches ?"inquireTextMob":"inquireText"} >Inquire Now  <i class="fa-solid fa-arrow-right" style={{marginLeft:"21px"}}></i></p></button>




</div>


);
}
