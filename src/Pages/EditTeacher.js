import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Grid, Box, Stack, Card } from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
import { API } from "./global";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
function EditTeacher() {
  const [teacher, setTeacher] = useState();
  const { index } = useParams();
  //const selectedTeacher = teacher[index];

  useEffect(() => {
    fetch(`${API}/teachers/${index}`, { method: "GET" })
      .then((data) => data.json())
      .then((tea) => setTeacher(tea));
  }, []);
  console.log(teacher);
  // useEffect(() => {
  //   if (index < teacher.length) {
  //     getData();
  //   } else {
  //     alert("Selected Teacher Id is Not Available");
  //     navigate("/allTeacher");
  //   }
  // });
  // let getData = () => {
  //   // setName(selectedTeacher.name);
  //   // setEmail(selectedTeacher.email);
  //   setPhone(selectedTeacher.phone);
  //   setExperience(selectedTeacher.Experience);
  //   setId);
  //   setCourse();
  // };

  return teacher ? (
    <EditTeacherForm teacher={teacher} index={index} />
  ) : (
    <Alert variant="filled" severity="success">
      <CircularProgress color="primary" />
      <AlertTitle>Fetching Data</AlertTitle>
    </Alert>
  );
  //return <EditTeacherForm teacher={teacher} index={index} />;
}

export default EditTeacher;

export function EditTeacherForm({ teacher, setTeacher, index }) {
  console.log(teacher);
  const [name, setName] = useState(teacher.name);
  const [email, setEmail] = useState(teacher.email);
  const [phone, setPhone] = useState(teacher.phone);
  const [experience, setExperience] = useState(teacher.experience);
  const [course, setCourse] = useState(teacher.course);
  const [address, setAddress] = useState(teacher.address);
  const [profile, setProfile] = useState(teacher.profile);
  const navigate = useNavigate();

  // let handleEdit = () => {
  //   let newData = { name, email, phone, experience, address, course, profile };
  //   let newArray = [...teacher];
  //   newArray.splice(index, 1, newData);
  //   setTeacher(newArray);
  //   navigate("/allTeacher");
  //   console.log(teacher);
  // };

  function handleChange(e) {
    console.log(e);
    const imageSrc = URL.createObjectURL(e.target.files[0]);
    const imagePreviewElement = document.querySelector("#preview-selected-image");
    imagePreviewElement.src = imageSrc;
    imagePreviewElement.style.display = "block";
    setProfile(imageSrc);
  }
  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Edit Teacher
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
          Teacher Edit Form
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
              <img id="preview-selected-image" alt="Addimage" maxwidth="150px" height="100px" />
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
              <TextField
                fullWidth
                placeholder="John"
                label=" Name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}>
                Teacher Full Name
              </TextField>

              <TextField
                fullWidth
                placeholder="JohnSmith@ymail.com"
                label="Email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}>
                Email
              </TextField>
              <TextField
                fullWidth
                placeholder="333XXXX97785"
                label="Phone"
                required
                defaultValue={phone}
                onChange={(event) => setPhone(event.target.value)}>
                Phone Number
              </TextField>
              <TextField
                fullWidth
                placeholder="12"
                label="Experience"
                required
                defaultValue={experience}
                onChange={(event) => setExperience(event.target.value)}>
                Experience
              </TextField>
            </Stack>
          </Grid>

          <Grid item xs={11} sm={10} md={4}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="HTML"
                label="Course"
                defaultValue={course}
                required
                onChange={(event) => setCourse(event.target.value)}>
                Course
              </TextField>
              {/* <TextField
                fullWidth
                placeholder="Address"
                label="Address"
                multiline
                rows={4}
                required
                defaultValue={JSON.parse(JSON.stringify(Object.values(address)))}
                onChange={(event) => setAddress(event.target.value)}></TextField> */}
              <Button
                onClick={() => {
                  const updatedTeacher = {
                    name: name,
                    email: email,
                    phone: phone,
                    experience: experience,
                    course: course,
                    address: address,
                    profile: profile,
                  };
                  fetch(`${API}/teachers/${index}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedTeacher),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((data) => data.json())
                    .then(() => navigate("/allteacher"))
                    .catch((error) => console.error("Error:", error));
                }}>
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
