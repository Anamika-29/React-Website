import React,{Component} from "react";
import './App.css';
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
// import AktifoaBook from './font/aktifoa-book.otf';
export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    console.log(matches);

  
    
return (<div className={matches ?"banner-image-2" :"banner-image"}>
<div className={matches ?"title-2" :"title"}></div>


 <h4 className={matches ?"heading1small" :"heading1"}>Take your graphics protection<br/> to the next level with DOL<br/> Max overlaminates</h4>
 <p className= {matches?"heading2Mob":'heading2'} >Pair with MPI 1105 wrapping film<br/> for ramped up protection</p>
<br/>
 <div className="row">
 <div className="col-1"></div>

    <div className="col-1 m-3 "><div className={matches?"ellipse1Mob":"ellipse1"}><div className={matches?"ell1Mob":"ell1"}></div></div></div>
    

    <div className="col-1 m-3"><div className={matches?"ellipse1Mob":"ellipse1"}><div className={matches?"ell2Mob":"ell2"}></div></div></div>
    

    <div className="col-1 m-3 "><div className={matches?"ellipse1Mob":"ellipse1"}><div className={matches?"ell3Mob":"ell3"}></div></div></div>

</div>



</div>


);
}
