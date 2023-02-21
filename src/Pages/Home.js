import React from "react";
import { Grid, Typography, Button } from "@mui/material";

import svg1 from "../images/svg1.svg";
function Home() {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ height: "100%" }}>
      <Grid item xs={10} md={8}>
        <Typography component="div" variant="h4">
          Let's Learn New Course & Gain More Skills
        </Typography>
        <Typography paragraph>
          A learning platform based on pratical knowledge with best & world class mentors.
        </Typography>
        <Button variant="contained" sx={{ borderRadius: "1.5rem" }}>
          Enroll Now
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(360 0.5 0.5)">
              <stop offset="0%" stop-color="#53e647"></stop>
              <stop offset="100%" stop-color="#75ef89"></stop>
            </linearGradient>
          </defs>
          <path
            d="M83,63.5Q72,77,57,81Q42,85,23.5,78.5Q5,72,14,54.5Q23,37,31.5,22.5Q40,8,57,14Q74,20,84,35Q94,50,83,63.5Z"
            stroke="none"
            stroke-width="0"
            fill="url(#fill)"></path>
          <img src={svg1} alt="student" width="inherit" />
        </svg> */}
        <svg width="auto" height="350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <image href={svg1} width="350" height="350" />
        </svg>
      </Grid>
    </Grid>
  );
}

export default Home;
