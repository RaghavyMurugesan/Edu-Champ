import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { sidebarData } from "../data";
import "../Styles/Sidebar.css";
import SchoolIcon from "@mui/icons-material/School";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
export const Sidebar = (index, item) => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Grid
      item
      sx={{
        overflowX: "hidden",
        height: "100vh",
        minWidth: 70,
        width: 70,
        bgcolor: "whitesmoke",
        color: "#808080",
        borderRadius: "2rem",
        transition: "all 0.5s ease",
        "&:hover": {
          minWidth: 220,
        },
      }}>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0 16px",
        }}>
        {" "}
        <SchoolIcon fontSize="large" sx={{ color: "#50c878" }} />
        <Typography color="#444" variant="h6" padding={3}>
          Edu<span className="span">C</span>hamp
        </Typography>
      </Box>
      <Divider />
      <List
        sx={{
          " & .MuiListItemButton-root:hover": {
            bgcolor: "#50c878",
            "&, & .MuiListItemIcon-root": {
              color: "white",
            },
          },
          "& .active.Mui-selected,& .active.Mui-selected:hover ": {
            bgcolor: "whitesmoke",
            transition: "all .5s ease",
            "&, & .MuiListItemIcon-root": {
              color: "#50c878",
            },
          },
        }}>
        {sidebarData.map((item, index) => (
          <ListItem key={index} sx={{ whiteSpace: "nowrap", paddingX: 0 }}>
            <ListItemButton
              className="active"
              selected={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                navigate(item.path);
              }}
              sx={{ paddingLeft: "24px" }}>
              <ListItemIcon fontSize="large">
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem sx={{ whiteSpace: "nowrap", paddingRight: 0, paddingLeft: 1 }}>
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log-Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Grid>
  );
};
