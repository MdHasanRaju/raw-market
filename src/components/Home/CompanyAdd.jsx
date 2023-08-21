import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/silder/product-1.jpg';
import img2 from '../../assets/silder/product-2.jpg';
import img3 from '../../assets/silder/product-3.jpg';
import { Box, Typography } from '@mui/material';


function CompanyAdd() {
  return (
     <Box>
      <Box style={{}}>
      <Box>
        <Typography sx={{textAlign:'center'}} variant='h3'>Our Technology Partner</Typography>
      </Box>

      <Box>
        <Marquee direction="right" speed={100} delay={5}>
          <Box>
          <Box
                component="img"
                sx={{
                  height: 300,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img1}
              ></Box>
          </Box>
          <Box >
          <Box
                component="img"
                sx={{
                  height: 300,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img2}
              ></Box>
          </Box>
          <Box >
          <Box
                component="img"
                sx={{
                  height: 300,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img3}
              ></Box>
          </Box>
  
        </Marquee>
      </Box>
    </Box>
     </Box>
  );
}

export default CompanyAdd;