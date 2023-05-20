import { Grid } from '@mui/material'
import React from 'react'
import LoginForm from './Components/LoginForm'
import Footer from './Components/Footer'
import logo from '../../../src/Screens/LoginScreen/Components/assets/logo1.jpg'



const LoginScreen = () => {
  return (

    
<Grid  display="flex" flexDirection="column" width="100%">

<Grid item direction="row" display="flex" >
    <img src={logo} alt=''></img>
    <LoginForm/>

    </Grid>
    <Grid item  width="100%" sx={{position:"absolute", bottom:"0",}}>
    <Footer/>
    </Grid>
</Grid>
  )
}

export default LoginScreen
