import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';


import Footer from './Footer';
import { TextField } from '@mui/material';

import Paper from '@mui/material/Paper';
import ResponsiveAppBarStudent from './ResponsiveAppBarStudent'
import Pagination from '@mui/material/Pagination';

import VerticalButtons from './VerticalButtons';


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



export default function StudentAnswerUploadPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Grid container spacing={2}>
        

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    <ResponsiveAppBarStudent></ResponsiveAppBarStudent>
  </Grid>

  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
   S T U D E N T
  </Grid>

  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
   
<Avatar
  alt="Remy Sharp"
  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
  sx={{ width: 200, height: 200 }}
/>
  </Grid>

  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    P A R A N G A_W I C K R A M A S I N G H E
  </Grid>
  
  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
  parangapmr@gmail.com
  </Grid>

  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    +94 76 727 3762
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
  <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    
                  }
                >
          
             
                  <ListItemAvatar>
                    <Avatar>
                      <PictureAsPdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Answer Submission.pdf"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
  </Grid>

  <Grid item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    
      <Pagination count={10} />
      
  </Grid>
  
  
</Grid>

      
      <Footer></Footer>
      </Grid>
      
    
      
      
      
  
  );
  
}
