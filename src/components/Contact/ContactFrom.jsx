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
          <Grid  item xs={12}  sm={6}  md={4} >
            <Box>
                <Typography></Typography>
           </Box>    
           
        </Grid>
          <Grid md={8} xs={12}
            sm={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae assumenda architecto, voluptates necessitatibus vitae expedita perferendis accusantium, in voluptatum temporibus dolor laborum nihil et consequuntur repellat hic eum consequatur!
          </Grid>
     </Grid>

          </Container>
        </Box>
    );
};

export default ContactFrom;