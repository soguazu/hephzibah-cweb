import React from "react";
import {
  Typography,
  Button,
  Grid,
  Container,
  TextareaAutosize,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import { Mail, Phone } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container
        className="me__sub_footer_con"
        minWidth="100%"
        height="auto"
        minHeight="100vh"
      >
        <Grid className="me__footer-grid" container gap={10}>
          <Stack
            className=".me__flex-con"
            spacing="0.7em"
            xs={12}
            sm={12}
            md={6}
            lg={2}
          >
            <Typography>
              <Stack direction="row">
                <Mail />
                <Box component="span" sx={{ paddingLeft: "0.5em" }}>
                  Hephzibahword@gmail.com
                </Box>
              </Stack>
            </Typography>

            <Typography>
              <Stack direction="row">
                <Phone />
                <Box component="span" sx={{ paddingLeft: "0.5em" }}>
                  080123456789
                </Box>
              </Stack>
            </Typography>
          </Stack>
          <Stack className="me__flex-con" item xs={12} sm={12} md={6} lg={2}>
            <Typography variant="h5">Quick links</Typography>

            <a href="api.hephzibahworld.com">About Us</a>

            <a href="api.hephzibahworld.com">Our Location</a>

            <a href="api.hephzibahworld.com">E-store</a>

            <a href="api.hephzibahworld.com">Give</a>

            <a href="api.hephzibahworld.com">Blog</a>

            <a href="api.hephzibahworld.com">Testimony</a>
          </Stack>
          <Stack className="me__flex-con" item xs={12} sm={12} md={6} lg={2}>
            <Typography variant="h5">Service Days</Typography>

            <a href="api.hephzibahworld.com">Sunday</a>

            <a href="api.hephzibahworld.com">Wednesdays</a>
          </Stack>

          <Grid
            className="me__flex-con"
            minWidth="1em"
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            gap={4}
          >
            <Typography variant="h5">Contact Us</Typography>
            <Stack spacing={2}>
              <TextField
                minWidth="50%"
                type="text"
                id="outlined-basic"
                variant="outlined"
                placeholder="Fullname"
              />
              <TextField
                variant="outlined"
                type="email"
                placeholder="Email Address"
              />

              <TextareaAutosize
                className="me__contact_us_input"
                minRows={5}
                placeholder="Message"
              />

              <Button
                variant="outlined"
                sx={{ alignSelf: "end", width: "70%" }}
              >
                Send Message
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
