import React from 'react';
import './App.css';
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);

  return (
    <div className={matches?'footerMob':'footer'}>
      {matches ?<div className='container'>
        <div className='row'>
          <div className='col-6'><p className='dolMob'>DOL Max Overlaminate Films</p>
          <p className='dolMob'>Why us</p>
          <p className='dolMob'>Enquire now</p>
          <div className='footerImg' style={{marginLeft:"30px"}}></div></div>
          <div className='col-6'><p className='column5'>
            Avery Dennison Overlaminate<br /> Avery Dennison Overlaminate Films<br /> Avery Dennison Digital Overlaminate Films <br />Avery Dennison DOL Max
           <br/>Overlaminate<br /> Overlaminate Films <br />Digital Overlaminate Films</p>
</div>
          


        </div>
        </div> :
      <div className='row text-center'>
        <div className='col-2 m-5'>
          <div className='best'>Best solutions from</div>
          <div className='footerImg'></div>
        </div>
        <div className='col-2 m-5'>
          <p className='dol'>DOL Max Overlaminate Films</p>
          <p className='dol'>Why us</p>
          <p className='dol'>Enquire now</p>
        </div>
        <div className='col-2 m-5'>
          <p className='column3'>
            Avery Dennison Overlaminate<br /> Avery Dennison Overlaminate Films<br /> Avery Dennison Digital Overlaminate Films <br />Avery Dennison DOL Max
          </p>
        </div>
        <div className='col-2 m-5'>
          <p className='column4'>Overlaminate<br /> Overlaminate Films <br />Digital Overlaminate Films</p>
        </div>
      </div>}
    </div>
  );
}
