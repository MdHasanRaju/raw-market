import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Login = () => {
 const handelLogin = event => {
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  const user ={email, password}
  console.log(user)
 }


  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container>
        <Typography sx={{ textAlign: 'center' }} variant='h4'>Plages Login</Typography>
        <Grid container >
          <Grid item xs={12} sm={6} md={6} >
            <Box onSubmit={handelLogin} sx={{width:'100%'}} component="form" action="" >
              <Box  sx={{ display: 'flex', flexWrap: 'wrap', flexFlow: 'column', gap: 1 }}>
               <Box>
               <TextField
                  required
                  id="outlined-required"
                  label="Your Email"
                  type="email"
                  name="email"
                />
               </Box>
              
                <Box>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
                </Box>
                <Box>
                <TextField
                  id="outlined-password-input"
                  label="Type"
                  type="text"
                  name="text"
                  autoComplete="current-password"
                />
                </Box>
                <Box>
                <TextField
                  id="outlined-password-input"
                  label="Type Her"
                  type="text"
                  name="text"
                  autoComplete="current-password"
                />
                </Box>
  
                 <Box>
                 <Button fullWidth type='submit'  variant="contained" color="success">
                  Login
                </Button>
                 </Box>

              </Box>
            </Box>
            <Typography sx={{ textAlign: 'center' }}>Forget password? Reset passwords</Typography>
            <Button sx={{width:'80%'}}  variant="contained" color="success">Google In SignUp</Button>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>Don't have an account? <Link to={'/register'}>Sign up</Link></Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}></Grid>

        </Grid>
      </Container>
    </Box>
  );
}


export default Login;




/* 


  <form action="">
        <Box sx={{display:'flex', flexWrap:'wrap', flexFlow:'column', gap:2}}>
        <TextField
          required
          id="outlined-required"
          label="Your Email"
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <Button sx={{}} variant="contained" color="success">
        Submit
      </Button>
      </Box>
        </form>
*/