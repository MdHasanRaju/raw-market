import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../assets/Products/vegist-image (1).webp'
const AddCompany = () => {
    return (
        <section  style={{backgroundColor:'#fff3ed'}}>
             <Container>
            <Typography sx={{textAlign:'center', my:4}} variant='h4'>Add Services AddCompany name</Typography>
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
                        
            </Grid>  
              </Grid>
        </Container>
        </section>
        
    );
};

export default AddCompany;