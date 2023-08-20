import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../assets/Products/vegist-image (1).webp'
const Store = () => {
    return (
        <Box  sx={{bgcolor:'#F4FFF0',py:10}}>
             <Container>
              <Grid container>
                  <Grid item xs={12} sm={6} md={6}>
                  <Box
                component="img"
                sx={{
                  height: 350,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img1}
              ></Box>
             </Grid>  

             <Grid item xs={12} sm={6} md={6}>
                    <Typography sx={{fontWeight:'bold', my:2}} variant='h6'>FRESH AND DELICIOUS</Typography>    
                    <Typography sx={{fontWeight:'bold',m:0, p:0, lineHeight:'40px',}} variant='h4'>FRESH ORGANIC</Typography>
                    <Typography variant='h4' sx={{fontSize:"42px",m:0, p:0,lineHeight:'40px',}} >grocery store</Typography>
                    <Typography variant='subtitle1' sx={{ my:4}}>There variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some by injected humour, randomised words which don't look even slightly believable.</Typography>
                   <Box sx={{my:4}}>
                   <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    outline: "none",
                    bgcolor: "green",
                    color: "white",
                  },
                }}
                color="success"
              >
                Shop Now
              </Button>
                   </Box>
            </Grid>  
              </Grid>
        </Container>
      </Box>
        
    );
};

export default Store;