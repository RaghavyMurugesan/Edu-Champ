import React, { useState, useEffect } from "react";
// import ProfileCard from "../Component/Card";
import { Typography, Container } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { blue, yellow, deepOrange, purple } from "@mui/material/colors";
import { API } from "./global";
import { useNavigate } from "react-router-dom";

function Teacherlist() {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState([]);
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

  const getTeachers = () => {
    fetch(`${API}/teachers`)
      .then((data) => data.json())
      .then((tea) => setTeacher(tea));
  };
  useEffect(() => {
    getTeachers();
  }, []);
  // let handleRemove = (index) => {
  //   let newList = [...teacher];
  //   newList.splice(index, 1);
  //   console.log(index);
  //   setTeacher(newList);
  // };
  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
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
              <IconButton onClick={() => navigate(`/teachers/${teacher.id}`)}>
                <RemoveRedEyeIcon color="primary" />
              </IconButton>
              <IconButton>
                <EditIcon color="secondary" />
              </IconButton>
              <IconButton
                key={index}
                onClick={() => {
                  fetch(`${API}/teachers/${teacher.id}`, { method: "DELETE" }).then(() => getTeachers());
                }}>
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
