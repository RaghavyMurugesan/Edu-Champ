import React, { useEffect, useState } from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { Stack, TextField, Avatar, IconButton, InputAdornment, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import TablePagination from "@mui/material/TablePagination";
import { FormControlLabel } from "@mui/material";

function Studentlist() {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [dense, setDense] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [searchParam] = useState(["name", "course"]);

  const getStudents = () => {
    fetch(`${API}/student`)
      .then((data) => data.json())
      .then((stu) => setStudent(stu));
  };
  useEffect(() => {
    getStudents();
  }, []);

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // let handleRemove = (index) => {
  //   let newList = [...student];
  //   newList.splice(index, 1);
  //   console.log(index);
  //   setStudent(newList);
  // };

  function search(student) {
    return student.filter((item) => {
      return searchParam.some((newItem) => {
        return item[newItem].toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
      });
    });
  }

  return (
    <>
      {/* <Paper sx={{ overflow: "auto", padding: "1rem" }}></Paper> */}
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Student List
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center" padding={1}>
        <TextField
          type="search"
          id="input-with-icon-textfield"
          size="small"
          color="success"
          placeholder="Search by Name or Course"
          sx={{ width: "250px" }}
          variant="standard"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "#50c878" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => navigate(`/addstudent`)}>
          <Typography>Add Student</Typography>
        </Button>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650, height: "max-content" }} size={dense ? "small" : "medium"} stickyHeader>
          <TableHead>
            <TableRow hover>
              <TableCell>ID</TableCell>
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
            {search(student)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
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
                    <IconButton onClick={() => navigate(`/student/${student.id}`)}>
                      <RemoveRedEyeIcon color="success" />
                    </IconButton>
                    <IconButton onClick={() => navigate(`/student/edit/${student.id}`)}>
                      <EditIcon color="secondary" />
                    </IconButton>
                    <IconButton
                      key={index}
                      onClick={() => {
                        fetch(`${API}/student/${student.id}`, { method: "DELETE" }).then(() => getStudents());
                      }}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={student.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
    </>
  );
}

export default Studentlist;
