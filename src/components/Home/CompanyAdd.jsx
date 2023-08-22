import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/silder/one.png';
import img2 from '../../assets/silder/two.png';
import img3 from '../../assets/silder/three.png';
import img4 from '../../assets/silder/four.png';
import img5 from '../../assets/silder/five.png';
import img6 from '../../assets/silder/six.png';
import img7 from '../../assets/silder/seven.png';
import img8 from '../../assets/silder/eight.png';
import img9 from '../../assets/silder/nine.png';
import img10 from '../../assets/silder/ten.png';


import { Box, Typography } from '@mui/material';


function CompanyAdd() {
  return (
     <Box sx={{bgcolor:'#F4FFF0', p:1}}>
      <Box>
      <Box>
        <Typography sx={{textAlign:'center', mt:4}} variant='h3'>Our Technology Partner</Typography>
        <Typography sx={{textAlign:'center', my:1}} variant='subtitle1'>A 2023 GoTo study says that <Box sx={{color:'#45553E'}}  component="span">95%</Box> of companies plan to consolidate <Box component="br"/>  their tech tools in the next year. One way to respond to this downscaling is to seek out technology partnerships..</Typography>
      </Box>

      <Box sx={{py:8}}>
        <Marquee direction="left" speed={100} delay={1}>
          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img1}
              ></Box>
          </Box>
          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
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
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img3}
              ></Box>
          </Box>
          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img4}
              ></Box>
          </Box>


          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img5}
              ></Box>
          </Box>
  
          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img6}
              ></Box>
          </Box>

          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img7}
              ></Box>
          </Box>

          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img8}
              ></Box>
          </Box>
          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img9}
              ></Box>
          </Box>
          <Box sx={{mr:8}}>
          <Box
                component="img"
                sx={{
                  height: 50,
               /*    width: 312, */
                  //   maxHeight: { xs: 233, md: 167 },
                  //   maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={img10}
              ></Box>
          </Box>
        </Marquee>
      </Box>
    </Box>
     </Box>
  );
}

export default CompanyAdd;