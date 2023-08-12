import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import React from "react";
import { Box, TextField } from "@mui/material";


const Footer = () => {
  return (
    <Box sx={{backgroundColor: "#000", color:'#fff' , p:10}}
     
    >
      <Container>
        <Grid container>
          <Grid
            item
            sx={{ textAlign: "start", justifyContent: "start" }}
            xs={12}
            sm={6}
            md={3}
          >
            <Typography  variant="h6">Product</Typography>
            <Box sx={{ textAlign: "left" }}>
  
              <Typography variant="subtitle1">
                Lorem Ipsum is simply <br/> dummy of the printing <br/> and typesetting
                industry <br/> lorem Ipsum
              </Typography>

              <Box sx={{py:10}} >
              <i style={{paddingRight:'10px', fontSize:'28px'}} class="fa-brands fa-facebook"></i>
              <i style={{paddingRight:'10px', fontSize:'28px'}} class="fa-brands fa-instagram"></i>
              <i style={{paddingRight:'10px', fontSize:'28px'}} class="fa-brands fa-youtube"></i>
              <i style={{paddingRight:'10px', fontSize:'28px'}} class="fa-brands fa-linkedin"></i>
              <i style={{paddingRight:'10px', fontSize:'28px'}} class="fa-brands fa-pinterest"></i>
              </Box>
        
            </Box>
          </Grid>

          <Grid item md={9}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box>
                <Typography variant="h6">SERVICES</Typography>
               <Box>
               <Typography  sx={{p:2}} variant="subtitle1">Fresh fruits</Typography>
                <Typography sx={{p:2}} variant="subtitle1">Fresh meat</Typography>
                <Typography sx={{p:2}} variant="subtitle1">Cow milk</Typography>
                <Typography sx={{p:2}} variant="subtitle1">Haldi powder</Typography>
                <Typography sx={{p:2}} variant="subtitle1">Sea & fish</Typography>
               </Box>
              </Box>

              <Box>
                <Typography variant="h6">PRIVACY & TERMS</Typography>
                 <Box>
                 <Typography sx={{p:2}} variant="subtitle1"> My cart</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Wishlist</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Sign in</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Shipping details</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Help center</Typography>
                 </Box>
              </Box>
              <Box>
                <Typography variant="h6" >MY ACCOUNT</Typography>
                 <Box>
                 <Typography sx={{p:2}} variant="subtitle1" > About vegist</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Faq's</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Contact us</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">News</Typography>
                <Typography  sx={{p:2}} variant="subtitle1">Store location</Typography>
                 </Box>
              </Box>
              <Box>
                <Typography sx={{mt:-21}} variant="h6">SUBSCRIBE LATEST DEAL</Typography>
                 <Box>
                 <Typography  variant="subtitle1">
                  Subscribe to our newsletter <br /> to re ceive fashion store
                  news on new update.{" "}
                </Typography>
                <Box sx={{border:'1px solid white', ml:'auto', borderRadius:'5px', display:'flex', alignItems:"center", justifyContent:'end'}}>
                <i style={{marginLeft:'90%', display:'flex', justifyContent:'end'}} class="fa-solid fa-arrow-right"></i>
                <TextField style={{outline:'none'}} sx={{ width:'100%', }} id="outlined-basic" label="Outlined" />
                </Box>
                 </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
