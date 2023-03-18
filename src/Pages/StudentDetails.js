import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Stack, Avatar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import NotFoundPage from "./NotFoundPage";
import { API } from "./global";

function StudentDetails() {
  const [student, setStudent] = useState({});
  const { index } = useParams();

  useEffect(() => {
    fetch(`${API}/student/${index}`, { method: "GET" })
      .then((data) => data.json())
      .then((stu) => setStudent(stu));
  }, []);
  console.log(student);
  if (!student) {
    return <NotFoundPage />;
  }
  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Student Details
      </Typography>
      <Card sx={{ borderRadius: " 5px", minWidth: "80%", padding: " 25px" }}>
        <Typography variant="h6">{student.name}</Typography>{" "}
        <Box>
          <Avatar
            src={student.profile}
            alt={student.name}
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
            Student ID: {student.id}
          </Typography>

          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-evenly">
            <Typography variant="body" component="span">
              Course:
              <Stack direction="row" spacing={1}>
                <AutoStoriesIcon color="secondary" />
                <Typography variant="body1"> {student.course}</Typography>
              </Stack>{" "}
            </Typography>
            <Typography variant="body">
              Rank:
              <Stack direction="row" spacing={1}>
                <WorkspacePremiumIcon color="secondary" />
                <Typography variant="body1"> {student.rank}</Typography>
              </Stack>
            </Typography>
            <Typography variant="body">
              {" "}
              Email:
              <Stack direction="row" spacing={1}>
                <EmailIcon color="secondary" />
                <Typography variant="body1"> {student.email}</Typography>
              </Stack>
            </Typography>
            <Typography variant="body">
              {" "}
              Phone:
              <Stack direction="row" spacing={1}>
                <CallIcon color="secondary" />
                <Typography variant="body1"> {student.phone}</Typography>
              </Stack>
            </Typography>
            {/* <Typography variant="body">
              {" "}
              Address:
              <Stack direction="row" spacing={1}>
                <ContactMailIcon color="secondary" />
                //{" "}
                <Typography variant="body1"> {JSON.parse(JSON.stringify(Object.values(student.address)))}</Typography>
              </Stack>
            </Typography> */}
          </Stack>
        </Box>
      </Card>
    </>
  );
}

export default StudentDetails;
