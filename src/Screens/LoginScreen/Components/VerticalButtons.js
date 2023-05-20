import * as React from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';



export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };



  return (

 

    


    <Grid xs={12} sx={{background:"", display:"flex" ,justifyContent:"end"}}>

      
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <AddCommentIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <SmartphoneIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <MailIcon />
      </ToggleButton>
    </ToggleButtonGroup>
   
    </Grid>

  );
}
