import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../assets/Products/vegist-image (1).webp'
const AddCompany = () => {
    return (
        <Box  sx={{bgcolor:'#fff3ed',py:10}}>
             <Container>
              <Grid container>
                  <Grid item xs={12} sm={6} md={6}>
                  <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img1}
              ></Box>
             </Grid>  

             <Grid item xs={12} sm={6} md={6}>
                    <Typography sx={{fontWeight:'bold'}} variant='h6'>FRESH AND DELICIOUS</Typography>    
                    <Typography sx={{fontWeight:'bold'}} variant='h4'>FRESH ORGANIC</Typography>
                    <Typography  variant='subtitle1'>grocery store</Typography>
            </Grid>  
              </Grid>
        </Container>
      </Box>
        
    );
};

export default AddCompany;