import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Sidebar.css";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { sidebarData } from "../data";

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
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
          <Avatar sx={{ width: 56, height: 56 }}>
            <PersonIcon sx={{ color: "#00b99c", width: 36, height: 36 }} />
          </Avatar>
          <Typography component="h6">Admin Name</Typography>
        </Box>
      </Box>
      <Divider />
      <List
        sx={{
          "& .MuiListItemButton-root:hover": {
            borderLeft: "6px solid  #008369 ",
            borderRadius: "0 0.7rem 0.7rem 0",
            bgcolor: "#00b99c",
            "&, & .MuiListItemIcon-root": {
              color: "white",
            },
          },
          "& .active.Mui-selected,& .active.Mui-selected:hover ": {
            borderRadius: "0 0.7rem 0.7rem 0",
            borderLeft: "6px solid green",
            bgcolor: "#50c878",
            left: "10px",
            // transition: "all 1s ease",
            "&, & .MuiListItemIcon-root": {
              color: "white",
            },
          },
        }}>
        {sidebarData.map((item, index) => {
          return (
            <ListItemButton
              selected={selectedIndex === index}
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="active">
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
