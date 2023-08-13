import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import mapIcon from "../../assets/icon/icon-location-marker.svg";
const ContactFrom = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={5}>
            <Box>
              <Box sx={{ py: 6 }}>
                <Typography variant="h3" sx={{ color: "#d71c5c;" }}>
                  CONTACT US
                </Typography>
              </Box>
              <Box sx={{ py: 2 }}>
                <Typography variant="h5">
                  We value our relationship and are keen to serve you.
                </Typography>
              </Box>
              <Typography variant="subtitle1">
                If you are interested to any of our plans or if you have any <br/>
                queries, kindly share your details below. <br/> We will get back to
                you soon.
                <a href="https://carnival.com.bd/carnival-contact/">Click</a>
              </Typography>
            </Box>
            <Box>
              {/*  <Box
                component="img"
                sx={{
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={mapIcon}
              /> */}
              <Box sx={{ fontSize: "70px" }}>
                {" "}
                <i class="fa-solid fa-location-dot"></i>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Registered Address:
              </Typography>
              <Typography>
                Highway Homes, KA-32/6, <br/> Bir Uttam Rafiqul Islam Ave, Dhaka –
                1212.
              </Typography>
            </Box>
          </Grid>
          <Grid md={7} xs={12} sm={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            beatae assumenda architecto, voluptates necessitatibus vitae
            expedita perferendis accusantium, in voluptatum temporibus dolor
            laborum nihil et consequuntur repellat hic eum consequatur!
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFrom;
