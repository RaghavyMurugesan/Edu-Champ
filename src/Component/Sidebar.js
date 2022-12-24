import React, { useState } from "react";
import "../Styles/Sidebar.css";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { sidebarData } from "../data";

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="side">
      <Box>
        <div className="Sidebar">
          <SchoolIcon fontSize="large" sx={{ color: "#50c878" }} />
          <h3>
            Edu<span className="span">C</span>hamp
          </h3>
        </div>
        <Box p={2} role="presentation" className="side-head">
          <Avatar>
            <PersonIcon sx={{ color: "#50c878" }} />
          </Avatar>
          <Typography component="h6" sx={{ color: "#50c878" }}>
            Admin Name
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List
        sx={{
          "& .MuiListItemButton-root:hover": {
            borderRadius: "0.7rem",
            bgcolor: "#50c878",
            "&, & .MuiListItemIcon-root": {
              color: "white",
            },
          },
          "&& .Mui-selected": {
            borderRadius: "0.7rem",
            backgroundColor: "#50c878",
            "&, & .MuiListItemIcon-root": {
              color: "white",
            },
          },
        }}>
        {sidebarData.map((item, index) => {
          return (
            <ListItemButton selected={selectedIndex === index} key={index} onClick={() => setSelectedIndex(index)}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log-Out" />
      </ListItemButton>
    </div>
  );
}

export default Sidebar;
