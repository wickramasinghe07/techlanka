import { Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import  YouTubeIcon  from "@mui/icons-material/YouTube";


// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 
const Footer = () => {
  return (

    
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
      <Grid item xs={3}>
      <div className='box'>
             <h2>Our Web Site</h2>
             <ul>
               <li>Mission & Purpose</li>
               <li>Career Opportunities</li>
               <li>Leadership</li>

             </ul>
           </div>
          
     </Grid>
      <Grid item xs={3}>
      <div className='box'>
             <h2>Policies & Disclosures</h2>
             <ul>
               <li>Safety </li>
               <li>Accessibility</li>

             </ul>
           </div>
      </Grid>
      <Grid item xs={2}>
      <div className='box'>
             <h2>Support</h2>
             <ul>
               <li>Contact Us</li>
              <li>Disability Services</li>

            </ul>
           </div>
        
      </Grid>
      <Grid item xs={2}>
      <div className='box'>
           <h2>Give us a call</h2>             <ul>
              <li>Phone: (844) 123-4564</li>
              <li>Mon-Fri 5am to 7pm MST </li>
              <li>Saturday 6am to 5pm MST </li>
              <li>Email: uilib.help@gmail.com</li>

             </ul>
          </div>
       
      </Grid>
      <Grid item xs={2}>
      <Stack  direction="row">
      <IconButton aria-label="instagramIcon">
        <InstagramIcon />
      </IconButton>

      <IconButton aria-label="twitterIconn">
        <TwitterIcon />
      </IconButton>

      <IconButton aria-label="facebookIcon">
        <FacebookIcon />
      </IconButton>

      <IconButton aria-label="youTubeIcon">
        <YouTubeIcon />
      </IconButton>
      
      </Stack>
      </Grid>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider> */}
    </Grid>
  );
};

export default Footer;
