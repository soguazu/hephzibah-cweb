import React from "react";
import {
  Typography,
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Mail, Phone } from "@mui/icons-material";
import {Logo} from "../../assets"
import "./footer.css";


const Footer = () => {

  return (
      <Grid className="me__footer section__padding" container gap={5} >
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Stack>
             <Typography variant="h5" sx={{fontFamily: "monster", mb: 2}}>
                Quick Links
             </Typography>
             <List >
                <ListItem disablePadding sx={{mb:1, fontFamily: "monster"}}>
                  <ListItemText
                    primary="About us"
                  />
                </ListItem>
                <ListItem disablePadding sx={{mb:1}}>
                  <ListItemText
                    primary="Our location"
                  />
                </ListItem>
                <ListItem disablePadding sx={{mb:1}}>
                  <ListItemText
                    primary="E-store"
                  />
                </ListItem>
                <ListItem disablePadding sx={{mb:1}}>
                  <ListItemText
                    primary="Give"
                  />
                </ListItem>
                <ListItem disablePadding sx={{mb:1}}>
                  <ListItemText
                    primary="Galary"
                  />
                </ListItem>
            </List>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Stack>
             <Typography variant="h5" sx={{fontFamily: "monster", mb: 2}}>
                Service days
             </Typography>
             <List >
                <ListItem disablePadding sx={{mb:2}}>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1" >Sunday (Believers class):</Typography>
                    <ListItemText
                      primary="7:20am - 9am"
                    />
                  </Stack>
                </ListItem>
                <ListItem disablePadding sx={{mb:2}}>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1" >Sunday (Discipleship class):</Typography>
                    <ListItemText
                      primary="9am - 10pm"
                    />
                  </Stack>
                </ListItem>
                <ListItem disablePadding sx={{mb:2}}>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1" >Sunday (Service):</Typography>
                    <ListItemText
                      primary="10am - 12pm"
                    />
                  </Stack>
                </ListItem>
                <ListItem disablePadding sx={{mb:2}}>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1" >Monday (Bible study):</Typography>
                    <ListItemText
                      primary="6pm - 8pm"
                    />
                  </Stack>
                </ListItem>
                <ListItem disablePadding sx={{mb:2}}>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1" >Wednesday (Bible study):</Typography>
                    <ListItemText
                      primary="6pm - 8pm"
                    />
                  </Stack>
                </ListItem>
            </List>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={5}>
          <Typography variant="h6" sx={{fontFamily: "monster", mb: 2}} >We look forward to hearing from you!</Typography>
          <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Name"
              placeholder="Enter name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter email"
              variant="outlined"
              color="primary"
            />
            <TextField
              id="outlined-basic"
              label="Subject"
              placeholder="Enter subject"
              variant="outlined"
              color="primary"
            />
            <TextField
              id="outlined-basic"
              label="Message"
              placeholder="Enter message"
              variant="outlined"
              color="primary"
              multiline
              rows={8}
            />
            <Button 
            type="button"
            variant="contained"
            size="large"
            >Submit</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Stack >
              <div className="me__footer-logo"> 
                <img src={Logo} alt="logo"/>
              </div>
              <Stack direction="row" spacing={1} sx={{mb:3}}>
                <Mail />
                <Typography sx={{fontFamily: "monster"}} >
                  Hephzibahword@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Phone />
                <Typography sx={{fontFamily: "monster"}}>
                  080123456789
                </Typography>
              </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={5} >
          
        </Grid>
      </Grid>
  );
};

export default Footer;
