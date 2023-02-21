import React from "react";
import { Typography, Grid, Box, TextField, Button, Stack, Card } from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
function Addstudent() {
  return (
    <>
      <Typography variant="h4" paddingY={2}>
        Add Student
      </Typography>
      <Card padding={1} sx={{ borderRadius: "0.5rem", margin: "1rem" }}>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            bgcolor: "#50c878",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            paddingX: "0.5rem",
          }}>
          Student Details
        </Typography>
        <Grid container spacing={2} justifyContent="space-evenly" paddingY={2}>
          <Grid item xs={6} sm={4} md={2}>
            {" "}
            <Box
              sx={{
                maxWidth: "150px",
                height: "150px",
                border: "2px dashed black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <input accept="image/*" id="profile-image" type="file" hidden />
              <label htmlFor="profile-image">
                <Button component="span">
                  <PortraitIcon color="primary" fontSize="large" />
                </Button>
              </label>
            </Box>
          </Grid>
          <Grid item xs={11} sm={10} md={4} gap="12px">
            <Stack spacing={2}>
              <TextField fullWidth placeholder="John" label="First Name">
                First Name
              </TextField>
              <TextField fullWidth placeholder="Smith" label="Last Name">
                Last Name
              </TextField>
              <TextField fullWidth placeholder="JohnSmith@ymail.com" label="Email">
                Email
              </TextField>
              <TextField fullWidth placeholder="333XXXX97785" label="Phone">
                Phone Number
              </TextField>
            </Stack>
          </Grid>

          <Grid item xs={11} sm={10} md={4}>
            <Stack spacing={2}>
              <TextField fullWidth placeholder="HTML" label="Course">
                Course
              </TextField>
              <TextField fullWidth placeholder="Address" label="Address" multiline rows={4}></TextField>
              <Button>Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
      <Card padding={1} sx={{ borderRadius: "0.5rem", margin: "1rem" }}>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            bgcolor: "#50c878",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            paddingX: "0.5rem",
          }}>
          Parent Details
        </Typography>
        <Grid container spacing={2} justifyContent="space-evenly" paddingY={2}>
          <Grid item xs={11} sm={11} md={5} spacing={2}>
            <Stack spacing={2}>
              <TextField fullWidth placeholder="John" label="Father's Name">
                First Name
              </TextField>
              <TextField fullWidth placeholder="Mary" label="Mother's Name">
                Last Name
              </TextField>
              <TextField fullWidth placeholder="JohnSmith@ymail.com" label="Parents-Email">
                Email
              </TextField>
              <TextField fullWidth placeholder="333XXXX97785" label="Phone">
                Phone Number
              </TextField>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={11} md={5}>
            <Stack spacing={2}>
              <TextField fullWidth placeholder="HTML" label="City">
                City
              </TextField>
              <TextField fullWidth placeholder="HTML" label="Nationality">
                Nationality
              </TextField>
              <Button>Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default Addstudent;
