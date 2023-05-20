import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import Footer from './Footer';


import Paper from '@mui/material/Paper';
import ResponsiveAppBarStudent from './ResponsiveAppBarStudent'


import VerticalButtons from './VerticalButtons';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Link from '@mui/material/Link';

import CssBaseline from '@mui/material/CssBaseline';





function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Course at a time
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      <Typography variant="body2">
       
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      
    </CardActions>
  </React.Fragment>
);



export default function StudentAnswerUploadPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Grid  spacing={2}>
        

        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    <ResponsiveAppBarStudent></ResponsiveAppBarStudent>
  </Grid>

  <Grid container spacing={12}>
  <Grid item xs 
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
><Item>T E C H L N K A</Item>
   
  </Grid>


 

  <Grid item xs={12}>
    <Item><Grid item  container  sx={{background:"", display:"flex" ,justifyContent:"center"}}
  >
                  <Link href="/StaffSignUP" variant="body2">
                  Apply as Instructor 
                  </Link>
                  
                </Grid></Item>
  </Grid>

  <Grid item xs={12}>
    <Item><Grid item xs  container sx={{background:"", display:"flex" ,justifyContent:"center"}}>
                  <Link href="/StudentSignUP" variant="body2">
                  Apply as Student 
                  </Link>
                  
                </Grid></Item>
  </Grid>

</Grid>
 



  

  <Grid xs={12} sx={{background:"", display:"flex" ,justifyContent:"end"}}
  >
  <VerticalButtons></VerticalButtons>
  </Grid>

  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
 
  </Grid>

  <Grid item xs={2}>
    <Item> <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box></Item>
  </Grid>
  <Grid item xs={2}>
    <Item> <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box></Item>
  </Grid>

  <Grid item xs={2}>
    <Item> <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box></Item>
  </Grid>

  
  
</Grid>

      
      <Footer></Footer>
      </Grid>
    
    
      
      
      
  
  );
  
}