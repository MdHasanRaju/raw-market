import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button, Container, Grid, Typography } from '@mui/material';
import { Link,  } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';


const Register = () => {
  const { register,handleSubmit, watch,formState: { errors }, } = useForm()

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <>
      <Helmet>
                <title>Bistro Boss | Login</title>
       </Helmet>
       <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container>
        <Typography sx={{ textAlign: 'center' }} variant='h4'>Register</Typography>
        <Grid container >
          <Grid item xs={12} sm={6} md={6} >
           
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          <Box onSubmit={handleSubmit(onSubmit)} sx={{width:'100%'}} component="form" action="" >
              <Box  sx={{ display: 'flex', flexWrap: 'wrap', flexFlow: 'column', gap: 1 }}>
               <Box>
                <Typography>Name</Typography>
               <TextField
                  type="text"
                  name="name"
                  {...register("name",{ required: true })}
                  placeholder='Please your name*'
                
                />
                
                
               </Box>
               {errors.name && <Typography sx={{color:'red'}}> name is required</Typography>}
               <Box>
                <Typography>Email</Typography>
               <TextField
                  type="email"
                  name="email"
                  {...register("email",{ required: true })}
                  placeholder='Please your email*'
                 
                />
               </Box>
               {errors.email && <Typography sx={{color:'red'}}> email is required</Typography>}
                <Box>
                <Typography>Password</Typography>
                <TextField
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength:6, maxLength: 20 })}
                  autoComplete="current-password"
                  placeholder='Please current password*'
               
                />
                </Box>
                {errors.password?.type === "required" && ( <Typography sx={{color:'red'}}>Password is required</Typography>  )}
                <Box><Typography >Forget password?</Typography></Box>
                  
                

               
                 <Box>
                 <Button sx={{width:'41%'}}  type='submit'  variant="contained" color="success">
                Register
                </Button>
                 </Box>
      
              </Box>
            </Box>
            <br />
            <Button  sx={{width:'41%'}}  variant="contained" color="success">Google In SignUp</Button>
            <Typography variant='subtitle1'>Don't have an account? <Link to={'/login'}>Login </Link></Typography>
          </Grid>
               
        </Grid>
      </Container>
    </Box>
     </>
  );
}


export default Register;




