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
            <Typography variant="h6">Product</Typography>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="subtitle1">Product</Typography>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply <br/> dummy of the printing <br/> and typesetting
                industry <br/> lorem Ipsum
              </Typography>
        
            </Box>
          </Grid>

          <Grid item sx={{ textAlign: "center" }} md={9}>
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
                <Typography variant="subtitle1">Fresh fruits</Typography>
                <Typography variant="subtitle1">Fresh meat</Typography>
                <Typography variant="subtitle1">Cow milk</Typography>
                <Typography variant="subtitle1">Haldi powder</Typography>
                <Typography variant="subtitle1">Sea & fish</Typography>
              </Box>

              <Box>
                <Typography variant="h6">PRIVACY & TERMS</Typography>
                <Typography variant="subtitle1"> My cart</Typography>
                <Typography variant="subtitle1">Wishlist</Typography>
                <Typography variant="subtitle1">Sign in</Typography>
                <Typography variant="subtitle1">Shipping details</Typography>
                <Typography variant="subtitle1">Help center</Typography>
              </Box>
              <Box>
                <Typography variant="h6">MY ACCOUNT</Typography>
                <Typography variant="subtitle1"> About vegist</Typography>
                <Typography variant="subtitle1">Faq's</Typography>
                <Typography variant="subtitle1">Contact us</Typography>
                <Typography variant="subtitle1">News</Typography>
                <Typography variant="subtitle1">Store location</Typography>
              </Box>
              <Box>
                <Typography variant="h6">SUBSCRIBE LATEST DEAL</Typography>
                <Typography variant="subtitle1">
                  Subscribe to our newsletter <br /> to re ceive fashion store
                  news on new update.{" "}
                </Typography>
                <TextField sx={{border:'1px solid white', borderRadius:'5px'}} id="outlined-basic" label="Outlined" variant="outlined" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
