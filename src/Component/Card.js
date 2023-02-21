import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material";

function ProfileCard() {
  return (
    <>
      {" "}
      <Card
        sx={{
          textAlign: "center",
          width: "250px",
          maxWidth: "300px",
          padding: "30px 0 0",

          "&:hover": {
            backgroundColor: "beige",
            transition: "all 0.9s ease 0s",
            ".image.MuiCardMedia-root": {
              transform: "scale(0.7)",
              transition: "all 0.9s ease 0s",
              boxShadow: "0 0 0 7px #00b99c, 0 0 0 14px orange  ",
            },
            ".content.MuiCardActions-root": {
              display: "block",
            },
          },
          ".content.MuiCardActions-root": {
            display: "none",
          },
        }}>
        <CardMedia
          sx={{
            display: "inline-block",
            width: "130px",
            height: "130px",
            borderRadius: "50%",
          }}
          component="img"
          alt="mentor-name"
          src="https://picsum.photos/130/130?image=1027"
          className="image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Michele Miller
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingBottom={1}>
            Web Developer
          </Typography>
        </CardContent>
        <CardActions className="content" sx={{ backgroundColor: "orangered" }}>
          <IconButton>
            <RemoveRedEyeIcon color="warning" />
          </IconButton>
          <IconButton>
            <EditIcon color="info" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default ProfileCard;
