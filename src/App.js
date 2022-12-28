import "./App.css";
import Sidebar from "./Component/Sidebar";
import MainDash from "./Component/MainDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quick from "./Pages/Quick";
import Addstudent from "./Pages/Addstudent";
import Addteacher from "./Pages/Addteacher";
import Studentlist from "./Pages/Studentlist";
import Teacherlist from "./Pages/Teacherlist";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="glass">
          <Sidebar />
          {/* <MainDash /> */}

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" exact element={<MainDash />} />
            <Route path="/quickaccess" exact element={<Quick />} />
            <Route path="/addstudent" exact element={<Addstudent />} />
            <Route path="/allstudent" exact element={<Studentlist />} />
            <Route path="/addteacher" exact element={<Addteacher />} />
            <Route path="/allteacher" exact element={<Teacherlist />} />
            <Route element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
