import React from "react";
import {
  Typography,
  Button,
  Box,
  Input,
  Grid,
  Container,
  FormControl,
  TextareaAutosize,
  Stack,
} from "@mui/material";
import {
  PhotoCamera,
  AcUnit,
  PlayCircleFilled,
  Mail,
  Phone,
} from "@mui/icons-material";
import "./footer.css";

const highlights = [
  " Divine rest is possible",
  "  Divine rest is possible",
  " Divine rest is possible",
  " Divine rest is possible",
];

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{ bgcolor: "#d50000" }}
        padding="normal"
        margin="normal"
        maxWidth="100%"
      >
        <Grid
          container
          spacing={2}
          padding="normal"
          gap={1}
          sx={{ bgcolor: "#d50000", padding: "20px" }}
          justifyContent="center"
          maxWidth="xl"
          margin="normal"
          direction="row"
        >
          {highlights.map((highlight) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                xl={2}
                zeroMinWidth
                paddingBottom={2}
                sx={{ border: 1, bgcolor: "white" }}
              >
                <AcUnit></AcUnit>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {highlight}
                </Typography>
                <Typography variant="body2">
                  A sermon by pastor Uzezi Atagbaza{" "}
                </Typography>
                <Typography paddingTop="20px">
                  Sunday message
                  <Button
                    sx={{
                      borderRadius: "100px",
                      height: "30px",
                      width: "30px",
                      alignSelf: "right",
                    }}
                    variant="outlined"
                    color="error"
                  >
                    <PlayCircleFilled color="red"></PlayCircleFilled>
                  </Button>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Container
        sx={{
          bgcolor: "text.disabled",
          padding: "20px",
          marginBottom: "20px",
        }}
        alignItems="center"
        maxWidth="100%"
      >
        <Stack width="100%" justifyContent="center" alignItems="center">
          <Typography sx={{ textAlign: "center" }} variant="h5">
            SUBSCRIBE TO OUR NEWSLETTER
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Recieve email updates from Hephzibah Word Apostolic Center.<br></br>
            We keep you in loop so you dont miss a thing
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{
              marginTop: "20px",
            }}
          >
            <Input
              required
              sx={{
                bgcolor: "#e0f7fa",
                padding: "10px",
                borderRadius: "5px",
                width: "400px",
              }}
              type="email"
              placeholder="Email Address"
            ></Input>

            <Button
              type="submit"
              sx={{
                borderRadius: "10px",
                width: "200px",
                marginLeft: "10px",
              }}
              variant="outlined"
              color="error"
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Container marginBottom={2}>
        <Grid container gap={3}>
          <Stack item xs={12} sm={12} md={6} lg={2}>
            <Typography>
              <Mail /> Hephzibahword@gmail.com
            </Typography>

            <Typography>
              <Phone />
              080123456789
            </Typography>
          </Stack>
          <Stack item xs={12} sm={12} md={6} lg={2}>
            <Typography variant="h5">Quick links</Typography>

            <a href="#">About Us</a>

            <a href="#">Our Location</a>

            <a href="#">E-store</a>

            <a href="#">Give</a>

            <a href="#">Blog</a>

            <a href="#">Testimony</a>
          </Stack>
          <Stack lineHeight={2} item xs={12} sm={12} md={6} lg={2}>
            <Typography variant="h5">Service Days</Typography>

            <a href="#">Sunday</a>

            <a href="#">Wednesdays</a>
          </Stack>

          <Grid item xs={12} sm={12} md={6} lg={4} justify="space-between">
            <Typography variant="h5">Contact Us</Typography>
            <FormControl lineHeight={2}>
              <Stack spacing={2}>
                <Input type="text" variant="outlined" placeholder="Fullname" />
                <Input
                  variant="outlined"
                  type="email"
                  placeholder="Email Address"
                />
                <TextareaAutosize
                  variant="outlined"
                  aria-label="empty textarea"
                  placeholder="Message"
                  style={{ width: 200, height: 50 }}
                />
                <Button
                  justifySelf="right"
                  variant="outlined"
                  sx={{ alignSelf: "right", width: "70%" }}
                >
                  Send Message
                </Button>
              </Stack>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
