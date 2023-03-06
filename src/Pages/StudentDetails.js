import React from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Stack, Avatar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ContactMailIcon from "@mui/icons-material/ContactMail";
function StudentDetails({ student }) {
  const { index } = useParams();
  const selectedStudent = student[index];
  console.log(index);
  return (
    <>
      <Typography variant="h4" paddingY={2}>
        Student Details
      </Typography>
      <Card className=" details-container">
        {" "}
        <Box>
          <Avatar width="250px" height="250px">
            {" "}
            <img src={selectedStudent.profile} alt={selectedStudent.name} className="profile" />
          </Avatar>
          <Typography variant="h5">{selectedStudent.name}</Typography>
          <Typography variant="h6">Student ID: {selectedStudent.id}</Typography>

          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-evenly"
            className="info">
            <Typography variant="body">
              {" "}
              Course:
              <br /> <AutoStoriesIcon color="warning" /> {selectedStudent.course}{" "}
            </Typography>
            <Typography variant="body">
              {" "}
              Rank:
              <br /> <WorkspacePremiumIcon color="warning" size="large" /> &nbsp;{selectedStudent.rank}{" "}
            </Typography>
            <Typography variant="body">
              {" "}
              Email:
              <br /> <EmailIcon color="warning" /> &nbsp;
              {selectedStudent.email}{" "}
            </Typography>
            <Typography variant="body">
              {" "}
              Phone:
              <br /> <CallIcon color="warning" /> &nbsp; {selectedStudent.phone}
            </Typography>
            <Typography variant="body">
              {" "}
              Address:
              <br /> <ContactMailIcon color="warning" /> &nbsp;{" "}
              {JSON.parse(JSON.stringify(Object.values(selectedStudent.address)))}
            </Typography>
          </Stack>
        </Box>
      </Card>
    </>
  );
}

export default StudentDetails;
