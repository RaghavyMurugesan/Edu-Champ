import React, { useState, useEffect } from "react";
import { Typography, Card, Box, Avatar, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { API } from "./global";

function TeacherDetails() {
  const [teacher, setTeacher] = useState({});
  const { index } = useParams();
  console.log(index);
  useEffect(() => {
    fetch(`${API}/teachers/${index}`, { method: "GET" })
      .then((data) => data.json())
      .then((tea) => setTeacher(tea));
  }, [index]);
  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Teacher Details
      </Typography>
      <Card sx={{ borderRadius: " 5px", minWidth: "80%", padding: " 25px" }}>
        <Typography variant="h6">{teacher.name}</Typography>{" "}
        <Box>
          <Avatar
            src={teacher.profile}
            alt={teacher.name}
            sx={{
              width: 120,
              height: 120,
              "&:hover": {
                border: "5px solid white",
                outline: "3px solid #50c878",
                transition: "0.5s ease-in-out",
                transform: "scale(1.2)",
              },
            }}></Avatar>

          <Typography variant="h6" paddingY="1rem">
            Teacher ID: {teacher.id}
          </Typography>

          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-evenly">
            <Typography variant="body" component="span">
              Expertise:
              <Stack direction="row" spacing={1}>
                <AutoStoriesIcon color="warning" />
                <Typography variant="body1"> {teacher.course}</Typography>
              </Stack>{" "}
            </Typography>
            <Typography variant="body">
              Experience:
              <Stack direction="row" spacing={1}>
                <WorkspacePremiumIcon color="warning" />
                <Typography variant="body1"> {teacher.experience}</Typography>
              </Stack>
            </Typography>
            <Typography variant="body">
              {" "}
              Email:
              <Stack direction="row" spacing={1}>
                <EmailIcon color="warning" />
                <Typography variant="body1"> {teacher.email}</Typography>
              </Stack>
            </Typography>
            <Typography variant="body">
              {" "}
              Phone:
              <Stack direction="row" spacing={1}>
                <CallIcon color="warning" />
                <Typography variant="body1"> {teacher.phone}</Typography>
              </Stack>
            </Typography>
            {/* <Typography variant="body">
              {" "}
              Address:
              <Stack direction="row" spacing={1}>
                <ContactMailIcon color="warning" />
                //{" "}
                <Typography variant="body1"> {JSON.parse(JSON.stringify(Object.values(teacher.address)))}</Typography>
              </Stack>
            </Typography> */}
          </Stack>
        </Box>
      </Card>
    </>
  );
}

export default TeacherDetails;
