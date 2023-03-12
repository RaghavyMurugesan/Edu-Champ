import React, { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Box, TextField, Button, Stack, Card, Input } from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useFormik } from "formik";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const formValidationSchema = yup.object({
  name: yup.string("Enter your Name").min(3, "Name must be atleast 3 Characters").required("Required!"),
  email: yup
    .string("Enter your Email")
    .email("Invalid email format")
    .min(5, "Email must be atleast 5 Characters")
    .required("Email is required"),
  phone: yup.number("Enter your Phone Number").min(10, "Invalid Phone Number").required("Required!"),
  rank: yup.number("Enter Rank").required("Required!").positive(),
  course: yup.string().min(3).max(10).required("Required!").oneOf(["HTML", "JavaScript", "CSS"]).defined(),
  address: yup.string("Enter Address").min(20).max(50).required("Required!"),
  profile: yup.mixed("Upload Image").required("Required Profile!!!!"),
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Addstudent({ student, setStudent }) {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      rank: "",
      course: "",
      address: "",
      profile: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(open);
      setStudent([...student, values]);
      setOpen(true);
      setTimeout(() => {
        return navigate("/allStudent");
      }, 3000);

      console.log(open);
    },
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
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

        <form onSubmit={formik.handleSubmit}>
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
                <img id="preview-selected-image" src={profile} alt="" maxwidth="150px" height="150px" />
                <Input
                  accept="image/*"
                  id="profile"
                  name="profile"
                  type="file"
                  hidden
                  onChange={(e) => {
                    let reader = new FileReader();
                    console.log(reader);
                    reader.onload = () => {
                      if (reader.readyState === 2) {
                        formik.setFieldValue("profile", reader.result);
                        setProfile(reader.result);
                      }
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }}
                />
                <label htmlFor="profile">
                  <Button component="span">
                    <PortraitIcon color="primary" fontSize="large" />
                  </Button>
                </label>
              </Box>
              <p className="error"> {formik.touched.profile && formik.errors.profile ? formik.errors.profile : ""}</p>
            </Grid>
            <Grid item xs={11} sm={10} md={4} gap="12px">
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  id="name"
                  type="text"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}>
                  Student Full Name
                </TextField>

                <TextField
                  fullWidth
                  placeholder="JohnSmith@ymail.com"
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}>
                  Email
                </TextField>

                <TextField
                  fullWidth
                  placeholder="333XXXX97785"
                  label="Phone"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}>
                  Phone Number
                </TextField>

                <TextField
                  fullWidth
                  placeholder="12"
                  label="Rank"
                  id="rank"
                  name="rank"
                  value={formik.values.rank}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.rank && Boolean(formik.errors.rank)}
                  helperText={formik.touched.rank && formik.errors.rank}>
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
                  id="course"
                  name="course"
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.course && Boolean(formik.errors.course)}
                  helperText={formik.touched.course && formik.errors.course}>
                  Course
                </TextField>

                <TextField
                  fullWidth
                  placeholder="Address"
                  label="Address"
                  multiline
                  rows={4}
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}></TextField>

                {/* <Button
                  type="submit"
                  onClick={() => {
                    const newStudent = {
                      // name: name,
                    // email: email,
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
                </Button> */}

                <Button type="submit" variant="contained" sx={{ width: "45px" }} onClick={formik.handleSubmit}>
                  {" "}
                  Submit
                </Button>
                <Snackbar
                  anchorOrigin={{ horizontal: "center", vertical: "top" }}
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}>
                  <Alert onClose={handleClose} severity="primary" sx={{ width: "100%" }}>
                    Form Submitted Successfully!
                  </Alert>
                </Snackbar>
              </Stack>
            </Grid>
          </Grid>
        </form>
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
