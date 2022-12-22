import React from "react";
import "../Styles/Sidebar.css";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import TimelineIcon from "@mui/icons-material/Timeline";
import QueueIcon from "@mui/icons-material/Queue";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Groups3Icon from "@mui/icons-material/Groups3";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import BoltIcon from "@mui/icons-material/Bolt";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Sidebar() {
  return (
    <div>
      <Box className="Sidebar">
        <SchoolIcon fontSize="large" sx={{ color: "#50c878" }} />
        <h3>
          Edu<span>C</span>hamp
        </h3>
      </Box>
      <Box p={2} role="presentation" className="side-head">
        <Avatar>
          <PersonIcon sx={{ color: "#444" }} />
        </Avatar>
        <Typography component="h6">Admin Name</Typography>
      </Box>
      <Divider />
      <List>
        <ListItemButton
        // sx={[
        //   {
        //     borderRadius: "2rem",
        //     "&:hover": {
        //       color: "white",
        //       backgroundColor: "#50c878",
        //     },
        //   },]}
        >
          <ListItemIcon>
            <HomeIcon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BoltIcon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Quick Access" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <TimelineIcon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <FormatListBulletedIcon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Student List" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <QueueIcon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Add Student" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Groups3Icon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Teacher List" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PersonAddAlt1Icon sx={{ color: "#444" }} />
          </ListItemIcon>
          <ListItemText primary="Add Teacher" />
        </ListItemButton>
      </List>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppIcon sx={{ color: "#444" }} />
        </ListItemIcon>
        <ListItemText primary="Log-Out" />
      </ListItemButton>
    </div>
  );
}

export default Sidebar;
