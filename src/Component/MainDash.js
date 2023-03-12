import React from "react";
import { Typography, Container, Grid, Card } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Icon from "@mui/material/Icon";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Groups3Icon from "@mui/icons-material/Groups3";
import CssIcon from "@mui/icons-material/Css";
function MainDash({ student, teacher }) {
  var newHTML = student.filter(function (el) {
    return el.course === "HTML";
  });
  var newCss = student.filter(function (el) {
    return el.course === "CSS";
  });
  var newJS = student.filter(function (el) {
    return el.course === "JavaScript";
  });

  var teaHTML = teacher.filter(function (el) {
    return el.course === "HTML";
  });
  var teaCss = teacher.filter(function (el) {
    return el.course === "CSS";
  });
  var teaJS = teacher.filter(function (el) {
    return el.course === "JavaScript";
  });
  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg, #2ed8b6, #59e0c5)",
              }}>
              <Typography variant="h6">Total Students Enrolled</Typography> <PeopleAltIcon fontSize="large" />
              <Typography variant="h4" sx={{ float: "right" }}>
                {student.length}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg, #ff5370, #ff869a)",
              }}>
              <Typography variant="h6">Students Enrolled HTML</Typography> <HtmlIcon fontSize="large" />
              <Typography variant="h4" sx={{ float: "right" }}>
                {newHTML.length}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg, #ffb64d, #ffcb80)",
              }}>
              <Typography variant="h6">Students Enrolled JavaScript</Typography> <JavascriptIcon fontSize="large" />
              <Typography variant="h4" sx={{ float: "right" }}>
                {newJS.length}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg,#4099ff, #73b4ff)",
              }}>
              <Typography variant="h6">Students Enrolled CSS</Typography>{" "}
              <Icon fontSize="large">
                <CssIcon fontSize="large" />
              </Icon>
              <Typography variant="h4" sx={{ float: "right" }}>
                {newCss.length}
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg, #2ed8b6, #59e0c5)",
              }}>
              <Typography variant="h6">Total Teacher Appointed</Typography> <Groups3Icon fontSize="large" />
              <Typography variant="h4" sx={{ float: "right" }}>
                {teacher.length}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg, #ff5370, #ff869a)",
              }}>
              <Typography variant="h6">HTML Mentors</Typography>

              <HtmlIcon fontSize="large" />

              <Typography variant="h4" sx={{ float: "right" }}>
                {teaHTML.length}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg, #ffb64d, #ffcb80)",
              }}>
              <Typography variant="h6"> JavaScript Mentors</Typography> <JavascriptIcon fontSize="large" />
              <Typography variant="h4" sx={{ float: "right" }}>
                {teaJS.length}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6} md={6} xl={3}>
            <Card
              sx={{
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
                padding: "25px",
                background: "linear-gradient(45deg,#4099ff, #73b4ff)",
              }}>
              <Typography variant="h6"> CSS Mentors</Typography>{" "}
              <Icon fontSize="large">
                <CssIcon fontSize="large" />
              </Icon>
              <Typography variant="h4" sx={{ float: "right" }}>
                {teaCss.length}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MainDash;
