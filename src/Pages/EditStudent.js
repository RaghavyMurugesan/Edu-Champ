import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Grid, Box, Stack, Card } from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";

function EditStudent({ student, setStudent }) {
  const { index } = useParams();
  const selectedStudent = student[index];
  const [name, setName] = useState(selectedStudent.name);
  const [email, setEmail] = useState(selectedStudent.email);
  const [phone, setPhone] = useState(selectedStudent.phone);
  const [rank, setRank] = useState(selectedStudent.rank);
  const [course, setCourse] = useState(selectedStudent.course);
  const [address, setAddress] = useState(selectedStudent.address);
  const [profile, setProfile] = useState(selectedStudent.profile);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (index < student.length) {
  //     getData();
  //   } else {
  //     alert("Selected Student Id is Not Available");
  //     navigate("/allStudent");
  //   }
  // });
  // let getData = () => {
  //   // setName(selectedStudent.name);
  //   // setEmail(selectedStudent.email);
  //   setPhone(selectedStudent.phone);
  //   setRank(selectedStudent.rank);
  //   setId);
  //   setCourse();
  // };

  let handleEdit = () => {
    let newData = { name, email, phone, rank, address, course, profile };
    let newArray = [...student];
    newArray.splice(index, 1, newData);
    setStudent(newArray);
    navigate("/allStudent");
    console.log(newData);
  };
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
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Edit Student
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
          Student Registration Form
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
              <img
                id="preview-selected-image"
                alt="Addimage"
                maxwidth="150px"
                height="100px"
                onEmptiedCapture={handleChange}
              />
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
                Student Full Name
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
                label="Rank"
                required
                defaultValue={rank}
                onChange={(event) => setRank(event.target.value)}>
                Rank
              </TextField>
            </Stack>
          </Grid>

          <Grid item xs={11} sm={10} md={4}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="HTML"
                label="Course"
                defaultValue={selectedStudent.course}
                required
                onChange={(event) => setCourse(event.target.value)}>
                Course
              </TextField>
              <TextField
                fullWidth
                placeholder="Address"
                label="Address"
                multiline
                rows={4}
                required
                defaultValue={JSON.parse(JSON.stringify(Object.values(selectedStudent.address)))}
                onChange={(event) => setAddress(event.target.value)}></TextField>
              <Button onClick={handleEdit}>Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default EditStudent;
