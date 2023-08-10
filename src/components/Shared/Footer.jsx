import Typography  from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import  Container  from '@mui/system/Container';
import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundColor:'black', color:'white'}}>
        <Container>
             <Grid container >
                <Grid item  sx={{textAlign:'center'}} xs={12} sm={6} md={3}>
                  <Typography variant='h2'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                </Grid>
                <Grid item sx={{textAlign:'center'}} xs={12} sm={6} md={3}>
                  <Typography variant='h2'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                </Grid>
                <Grid item sx={{textAlign:'center'}} xs={12} sm={6} md={3}>
                  <Typography variant='h2'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                </Grid>
                <Grid item sx={{textAlign:'center'}} xs={12} sm={6} md={3}>
                  <Typography variant='h2'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                  <Typography variant='h5'>Product</Typography>
                </Grid>
             </Grid>
        </Container>
    </div>
  );
};

export default Footer;