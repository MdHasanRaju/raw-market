
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, TextareaAutosize } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactFrom = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7fw8tc",
        "template_y10yfz7",
        form.current,
        "0AGx-yacdwuJYI7go"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Thanks for you')
    
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box sx={{bgcolor:'#F9FFF7'}}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={5}>
            <Box>
              <Box sx={{ py: 6 }}>
                <Typography variant="h5" sx={{ color: "#d71c5c;" }}>
                  CONTACT US
                </Typography>
              </Box>
              <Box sx={{ py: 1 }}>
                <Typography variant="h6">
                  We value our relationship and are keen to <Box component="br"/> serve you.
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
           
              <Box sx={{ fontSize: "50px", mt: 4 }}>
                {" "}
                <i class="fa-solid fa-location-dot"></i>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Registered Address:
                </Typography>
                <Typography variant="subtitle2">
                  Highway Homes, KA-38/6, <br /> Bir Uttam Rafiqul Islam Ave,
                  Dhaka – 1212.
                </Typography>
              </Box>
              <Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Business Address:
                  </Typography>
                  <Typography variant="subtitle2">
                    Uday Tower, Level 12, <br />
                    54 & 56/A, Gulshan Avenue, Dhaka-1212.
                  </Typography>
                </Box>
                <Box sx={{ py: 4 }}>
                  <Typography variant="h5">
                    Write in:raw@.market.com.bd
                  </Typography>
                  <Typography variant="subtitle2">Call us: 01573347472 </Typography>
                  <Typography variant="subtitle2">Call us: 01573347472</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid md={7} xs={12} sm={6}>
            <Box sx={{ py: 6 }}>
            <form ref={form} onSubmit={sendEmail} >
              <TextField
                sx={{ p: 1 }}
                fullWidth
                placeholder="Your Name*"
                name="user_name}"
                id="fullWidth"
                required
              />
              <TextField
                sx={{ p: 1 }}
                fullWidth
                placeholder=" Email Address*"
                name="user_email"
                id="fullWidth"
                required
              />
              <TextField
                sx={{ p: 1 }}
                fullWidth
                placeholder="Subject*"
                name="from_name"
                id="fullWidth"
                required
              />
              <Box sx={{ p: 1 , }}>
                <TextareaAutosize
                  name="message"
                  placeholder="Your Message type her.....*"
                  defaultValue=""
                  required
                  style={{ width: "100%", height: "200px", padding: "10px", backgroundColor:'#F9FFF7' }}
                />
                <br/>
                 <Button variant="contained" color="success" type="Submit" value="send" fullWidth id="fullWidth">
                 Submit
              </Button>
              </Box>
             </form>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFrom;
