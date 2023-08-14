import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import  Box  from '@mui/material/Box';
import { Typography } from '@mui/material';
const ContactFrom = () => {
    return (
        <Box>
             <Container>
          <Grid container>
          <Grid  item xs={12}  sm={6}  md={5} >
            <Box>
                <Box sx={{py:6}}>
                <Typography  variant='h3' sx={{color:'#d71c5c;'}}>CONTACT US</Typography>
                </Box>
                 <Box sx={{py:2}}>
                 <Typography variant='h5'>We value our relationship and are keen to serve you.</Typography>
                 </Box>
                <Typography variant='subtitle1'>If you are interested to any of our plans or if you have any queries, kindly share your details below.
                          We will get back to you soon.
                          {/* <a href="https://carnival.com.bd/carnival-contact/">Click</a> */}
                </Typography>
           </Box>   
           
            
           
        </Grid>
          <Grid md={7} xs={12}
            sm={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae assumenda architecto, voluptates necessitatibus vitae expedita perferendis accusantium, in voluptatum temporibus dolor laborum nihil et consequuntur repellat hic eum consequatur!
          </Grid>
     </Grid>

          </Container>
        </Box>
    );
};

export default ContactFrom;