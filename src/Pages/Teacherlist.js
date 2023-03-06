import React from "react";
// import ProfileCard from "../Component/Card";
import { Typography, Container } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { blue, yellow, deepOrange, purple } from "@mui/material/colors";

function Teacherlist({ teacher, setTeacher }) {
  const avatarBgColor = (teacher) => {
    if (teacher.course === "HTML") {
      return deepOrange[400];
    }
    if (teacher.course === "CSS") {
      return blue[400];
    }
    if (teacher.course === "JavaScript") {
      return yellow[400];
    } else {
      return purple[400];
    }
  };

  return (
    <>
      <Typography color="#50c878" variant="h4">
        Teacher List
      </Typography>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", gap: "2rem" }}>
        {teacher.map((teacher, index) => (
          <Card
            key={index}
            sx={{
              textAlign: "center",
              width: "250px",
              maxWidth: "300px",
              padding: "30px 0 0",
              backgroundColor: "#f7f5ec",

              "&:hover": {
                backgroundColor: "white",

                ".image.MuiCardMedia-root": {
                  transform: "scale(0.8)",
                  transition: "all 0.5s ease 0s",
                  boxShadow: "0 0 0 4px #9c27b0",
                },
                ".content.MuiCardActions-root": {
                  display: "block",
                  transition: "all 0.5s ease 0s",
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
                border: "4px",
                borderStyle: "solid",
                borderColor: avatarBgColor(teacher),
              }}
              component="img"
              alt="mentor-name"
              src={teacher.profile}
              className="image"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {teacher.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {teacher.course}
              </Typography>
            </CardContent>
            <CardActions className="content" sx={{ bgcolor: avatarBgColor(teacher) }}>
              <IconButton>
                <RemoveRedEyeIcon color="primary" />
              </IconButton>
              <IconButton>
                <EditIcon color="secondary" />
              </IconButton>
              <IconButton>
                <DeleteIcon color="error" />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default Teacherlist;
