import React,{Component} from "react";
import './App.css';
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";


export default function Banner3() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    console.log(matches);

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    
return (<div className={matches ?"container2" :"container3"}>
    {matches ?"" :<div className="banner-image3"></div>}
    <p className={matches ?"whyMob" :"why"}>Why Us?</p>
    


    <div className={matches ?'circle1Mob' :'circle1'}><div className={matches ?'circle1ImgMob' :'circle1Img'}></div></div>


        <div className={matches ?'circle2Mob' :'circle2'}><div className={matches ?'circle2ImgMob' :'circle2Img'}></div></div>


        <div className={matches ?'circle3Mob' :'circle3'}><div className={matches ?'circle3ImgMob' :'circle3Img'}></div></div>


        <div className={matches ?'circle4Mob' :'circle4'}><div className={matches ?'circle4ImgMob' :'circle4Img'}></div></div>


        <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "-680px",
  marginLeft: "40px"}:{marginTop: "-400px",
  marginLeft: "650px"}}><b>Quality Products</b></div>
  
  <div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
  marginLeft: "40px"}:{marginTop: "-10px",
  marginLeft: "650px"}}> <br/>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</div>
  {matches?<React.Fragment><br/><br/><br/><br/></React.Fragment>  : <React.Fragment><br/></React.Fragment>}
  <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "-10px",
  marginLeft: "40px"}:{marginTop: "5px",
  marginLeft: "650px"}}><b>Multiple Options</b></div>
  
   <br/><div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
  marginLeft: "40px"}:{marginTop: "-10px",
  marginLeft: "650px"}}> We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</div>
  {matches?<React.Fragment><br/><br/><br/><br/><br/></React.Fragment>  : <React.Fragment><br/><br/></React.Fragment>}
  
  
  
  <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "-30px",
  marginLeft: "40px"}:{marginTop: "-30px",
  marginLeft: "650px"}}><b> Expertise and Support</b></div>
  
  <br/>
  
  <div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
  marginLeft: "40px"}:{marginTop: "-10px",
  marginLeft: "650px"}}> Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</div>
  
  {matches?<React.Fragment><br/><br/><br/><br/><br/></React.Fragment>  : <React.Fragment><br/></React.Fragment>}
  
  <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "0px",
  marginLeft: "40px"}:{marginTop: "0px",
  marginLeft: "650px"}}> <b>Durability Assurance</b></div>
  <br/>
  
  
  <div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
  marginLeft: "40px"}:{marginTop: "-10px",
  marginLeft: "650px"}}> Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.

</div>

<button className={matches? 'callBackMob':'callBack'} style={matches?{marginLeft:"40px",marginTop:"40px",marginBottom:"30px",textAlign:"center",justifyContent:"center",paddingTop:"25px"}:{marginLeft:"490px",marginTop:"40px",textAlign:"center",justifyContent:"center",paddingTop:"10px"}}><p className={matches?'callBackTextMob':'callBackText'} onClick={handleScrollToTop}>Request a call back  <i class="fa-solid fa-arrow-right" style={{marginLeft:"21px"}}></i></p></button>

//         {matches ?<div className="banner-image4"></div>:""}








</div>


);
}


// import React,{Component} from "react";
// import './App.css';
// import { Button, Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/system";


// export default function Banner3() {
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.down("md"));
//     console.log(matches);

    
// return (<div className={matches ?"container2" :"container3"}>
//     {matches ?"" :<div className="banner-image3"></div>}
//     <p className={matches ?"whyMob" :"why"}>Why Us?</p>
    


//     <div className={matches ?'circle1Mob' :'circle1'}><div className={matches ?'circle1ImgMob' :'circle1Img'}></div></div>


//         <div className={matches ?'circle2Mob' :'circle2'}><div className={matches ?'circle2ImgMob' :'circle2Img'}></div></div>


//         <div className={matches ?'circle3Mob' :'circle3'}><div className={matches ?'circle3ImgMob' :'circle3Img'}></div></div>


//         <div className={matches ?'circle4Mob' :'circle4'}><div className={matches ?'circle4ImgMob' :'circle4Img'}></div></div>


//         <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "-680px",
//   marginLeft: "40px"}:{marginTop: "-400px",
//   marginLeft: "650px"}}><b>Quality Products</b></div>
  
//   <div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
//   marginLeft: "40px"}:{marginTop: "-10px",
//   marginLeft: "650px"}}> <br/>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.<br/><br/></div>
  
//   <br/><br/><br/>
//   <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "-10px",
//   marginLeft: "40px"}:{marginTop: "5px",
//   marginLeft: "650px"}}><b>Multiple Options</b></div>
  
//    <br/><div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
//   marginLeft: "40px"}:{marginTop: "-10px",
//   marginLeft: "650px"}}> We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</div>
  
//   {matches?<React.Fragment><br/><br/><br/><br/><br/></React.Fragment>  : ""}
  
//   <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "-30px",
//   marginLeft: "40px"}:{marginTop: "-30px",
//   marginLeft: "650px"}}><b> Expertise and Support</b></div>
  
//   {matches?<React.Fragment><br/></React.Fragment>  : ""}
  
//   <div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
//   marginLeft: "40px"}:{marginTop: "-10px",
//   marginLeft: "650px"}}> Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</div>
  
//   {matches?<React.Fragment><br/><br/><br/><br/><br/></React.Fragment>  : ""}
  
//   <div className={matches?"tag2" :"tag"} style={matches?{marginTop: "0px",
//   marginLeft: "40px"}:{marginTop: "0px",
//   marginLeft: "650px"}}> <b>Durability Assurance</b></div>
//   {matches?<React.Fragment><br/></React.Fragment>  : ""}
  
  
//   <div className={matches?"content2":"content"} style={matches?{marginTop: "-10px",
//   marginLeft: "40px"}:{marginTop: "-10px",
//   marginLeft: "650px"}}> Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.

// </div>

//         <button className={matches? 'callBackMob':'callBack'} style={matches?{marginLeft:"40px",marginTop:"40px",marginBottom:"30px",textAlign:"center",justifyContent:"center",paddingTop:"25px"}:{marginLeft:"490px",marginTop:"40px",textAlign:"center",justifyContent:"center",paddingTop:"10px"}}><p className={matches?'callBackTextMob':'callBackText'} >Request a call back  <i class="fa-solid fa-arrow-right" style={{marginLeft:"21px"}}></i></p></button>

//         {matches ?<div className="banner-image4"></div>:""}






// </div>


// );
// }
