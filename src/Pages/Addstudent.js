import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Box, TextField, Button, Stack, Card } from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useFormik } from "formik";
function Addstudent({ student, setStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rank, setRank] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState();
  const navigate = useNavigate();
  useFormik({});
  function handleChange(e) {
    console.log(e.target.files);
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    const imagePreviewElement = document.querySelector("#preview-selected-image");
    imagePreviewElement.src = imageSrc;
    imagePreviewElement.style.display = "block";
    setProfile(imageSrc);
  }
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
            backgroundImage: "linear-gradient(to left, #50c878, #00bb91, #00aca3, #009caa, #008aa6)",
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
              className="image-preview-container"
              sx={{
                maxWidth: "150px",
                height: "150px",
                border: "2px dashed black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <img id="preview-selected-image" alt="Addimage" maxWidth="150px" height="100px" />

              <input accept="image/*" id="profile-image" type="file" hidden onChange={handleChange} />
              <label htmlFor="profile-image">
                <Button component="span">
                  <PortraitIcon color="primary" fontSize="large" />
                </Button>
              </label>
            </Box>
          </Grid>
          <Grid item xs={11} sm={10} md={4} gap="12px">
            <Stack spacing={2}>
              <TextField fullWidth placeholder="John" label=" Name" onchange={(event) => setName(event.target.value)}>
                Student Full Name
              </TextField>

              <TextField
                fullWidth
                placeholder="JohnSmith@ymail.com"
                label="Email"
                onchange={(event) => setEmail(event.target.value)}>
                Email
              </TextField>
              <TextField
                fullWidth
                placeholder="333XXXX97785"
                label="Phone"
                onchange={(event) => setPhone(event.target.value)}>
                Phone Number
              </TextField>
              <TextField fullWidth placeholder="12" label="Rank" onchange={(event) => setRank(event.target.value)}>
                Student Full Name
              </TextField>
            </Stack>
          </Grid>

          <Grid item xs={11} sm={10} md={4}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="HTML"
                label="Course"
                onchange={(event) => setCourse(event.target.value)}>
                Course
              </TextField>
              <TextField
                fullWidth
                placeholder="Address"
                label="Address"
                multiline
                rows={4}
                onchange={(event) => setAddress(event.target.value)}></TextField>
              <Button
                onClick={() => {
                  const newStudent = {
                    name: name,
                    email: email,
                    phone: phone,
                    rank: rank,
                    profile: profile,
                    address: address,
                    course: course,
                  };
                  setStudent([...student, newStudent]);
                  navigate("/allStudent");
                }}>
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
      {/* <Card padding={1} sx={{ borderRadius: "0.5rem", margin: "1rem" }}>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            // bgcolor: "#50a0c8",
            backgroundImage: "linear-gradient(to left, #50c878, #00bb91, #00aca3, #009caa, #008aa6)",
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
              <TextField fullWidth placeholder="Chennai" label="City">
                City
              </TextField>
              <TextField fullWidth placeholder="India" label="Nationality">
                Nationality
              </TextField>
              <Button>Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card> */}
    </>
  );
}

export default Addstudent;
