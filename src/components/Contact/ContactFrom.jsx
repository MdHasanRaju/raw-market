import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import mapIcon from "../../assets/icon/icon-location-marker.svg";
import TextField from "@mui/material/TextField";
import { Button, TextareaAutosize } from "@mui/material";
import emailjs from '@emailjs/browser';
const ContactFrom = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


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
              <Box sx={{ py: 1 }}>
                <Typography variant="h5">
                  We value our relationship and are keen to serve you.
                </Typography>
              </Box>
              <Typography variant="subtitle1">
                If you are interested to any of our plans or if you have any{" "}
                <br />
                queries, kindly share your details below. <br /> We will get
                back to you soon.
                <a href="www.facebook.com">Click</a>
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
              <Box sx={{ fontSize: "60px", mt: 4 }}>
                {" "}
                <i class="fa-solid fa-location-dot"></i>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Registered Address:
                </Typography>
                <Typography>
                  Highway Homes, KA-38/6, <br /> Bir Uttam Rafiqul Islam Ave,
                  Dhaka – 1212.
                </Typography>
              </Box>
              <Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Business Address:
                  </Typography>
                  <Typography>
                    Uday Tower, Level 12, <br />
                    54 & 56/A, Gulshan Avenue, Dhaka-1212.
                  </Typography>
                </Box>
                <Box sx={{ py: 4 }}>
                  <Typography variant="h4">
                    Write in:raw@.market.com.bd
                  </Typography>
                  <Typography>Call us: 01573347472 </Typography>
                  <Typography>Call us: 01573347472</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid md={7} xs={12} sm={6}>
            <Box sx={{ py: 6 }}>
              <TextField
                sx={{ p: 1 }}
                fullWidth
                placeholder="Your Name"
                id="fullWidth"
              />
              <TextField
                sx={{ p: 1 }}
                fullWidth
                placeholder=" Email Address"
                id="fullWidth"
              />
              <TextField
                sx={{ p: 1 }}
                fullWidth
                placeholder="Phone Number"
                id="fullWidth"
              />
              <Box sx={{ p: 1 }}>
                <TextareaAutosize
        
                  placeholder="Your Message type her....."
                  defaultValue=""
                  style={{ width: "100%", height: "200px", padding: "10px", }}
                />
                <br/>
                 <Button variant="contained" color="success"   fullWidth id="fullWidth">
                 Submit
              </Button>
              </Box>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFrom;
