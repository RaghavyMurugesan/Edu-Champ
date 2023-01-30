import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { Stack, TextField, Paper, Avatar, IconButton, InputAdornment, MenuItem, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Studentlist({ student, setStudent }) {
  const course = [
    {
      value: "HTML",
      label: "HTML",
    },
    {
      value: "CSS",
      label: "CSS",
    },
    {
      value: "JavaScript",
      label: "JavaScript",
    },
  ];
  return (
    <Paper sx={{ overflow: "auto", padding: "2rem" }}>
      <Typography color="#50c878" variant="h4">
        Student List
      </Typography>
      <Stack direction="row" justifyContent="space-evenly" alignItems="center" padding={1}>
        <TextField
          id="input-with-icon-textfield"
          size="small"
          color="success"
          placeholder="Search..."
          sx={{ width: "250px" }}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <SearchIcon sx={{ color: "#50c878" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="Course"
          placeholder="Course"
          select
          variant="standard"
          sx={{ width: "200px" }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <FilterAltIcon sx={{ color: "#50c878" }} />
              </InputAdornment>
            ),
          }}>
          {course.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Rank</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((student, index) => (
              <TableRow>
                <TableCell>
                  {" "}
                  <Avatar alt={student.name} src={student.profile} align="center" />
                </TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.rank}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>
                  <IconButton>
                    <RemoveRedEyeIcon color="success" />
                  </IconButton>
                  <IconButton>
                    <EditIcon color="secondary" />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Studentlist;
