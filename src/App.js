import "./App.css";
import { studentList, teacherList } from "./data";
import { Sidebar } from "./Component/Sidebar";
import MainDash from "./Component/MainDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quick from "./Pages/Quick";
import Addstudent from "./Pages/Addstudent";
import Addteacher from "./Pages/Addteacher";
import Studentlist from "./Pages/Studentlist";
import Teacherlist from "./Pages/Teacherlist";
import EditStudent from "./Pages/EditStudent";
import StudentDetails from "./Pages/StudentDetails";

import { useState } from "react";
import { createTheme, colors, ThemeProvider, Grid } from "@mui/material";

function App() {
  const [student, setStudent] = useState(studentList);
  const [teacher, setTeacher] = useState(teacherList);

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    status: {
      danger: "#F13D45",
      secondary: "#ED5E93",
      glass: "rgba(255, 255, 255, 0.225)",
      shadow: "0px 10px 60px rgb(0 0 0 /8%)",
      gradient: "linear-gradient(to right top, #50c878, #00bb91, #00aca3, #009caa, #008aa6)",
    },
    palette: {
      primary: {
        main: "#05c878",
        secondary: "#c850a0",
      },
      secondary: {
        main: "#c850a0",
      },
      error: {
        main: "#FF3333",
      },
      neutral: {
        lighter: "#c8509f",
        main: colors.grey[500],
        darker: colors.grey[900],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid
          container
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              height: "97%",
              width: "97%",
              borderRadius: "2rem",
              overflow: "auto",
              backgroundImage: theme.status.glass,
              boxShadow: theme.status.shadow,
            }}>
            {" "}
            <Sidebar />
            <Grid
              item
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                bgcolor: theme.status.glass,
                width: "100%",
                height: "100vh",
              }}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/dashboard" exact element={<MainDash student={student} teacher={teacher} />} />
                <Route path="/quickaccess" exact element={<Quick />} />
                <Route path="/allstudent" exact element={<Studentlist student={student} setStudent={setStudent} />} />
                <Route
                  path="/allstudent/:index"
                  element={<StudentDetails student={student} setStudent={setStudent} />}
                />
                <Route path="/edit/:index" element={<EditStudent student={student} setStudent={setStudent} />} />
                <Route path="/addstudent" exact element={<Addstudent student={student} setStudent={setStudent} />} />
                <Route path="/allteacher" exact element={<Teacherlist teacher={teacher} setTeacher={setTeacher} />} />
                <Route path="/addteacher" exact element={<Addteacher />} />
                <Route element={<Home />} />
              </Routes>
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
