import Guest from "./lib/layouts/Guest";
import Main from "./lib/layouts/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Employee/Profile"; './pages/Employee/Profile'
import { Routes, Route } from "react-router-dom";
import Absen from "./pages/Employee/Absen";
import Payroll from "./pages/Employee/Payroll";
import Relative from "./pages/Employee/Relative";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<Guest />}>
          <Route path="login" element={<Login />}>
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<Main />}>
          <Route index element={<Home />} />
          <Route path="profile/:email" element={<Profile />}/>
          <Route path="absensi" element={<Absen />}/>
          <Route path="gaji" element={<Payroll />}/>
          <Route path="keluarga" element={<Relative />}/>
          {/*possible of adding gatekeeping to filter management previledge
          add gatekeeper by copying main layout to a new layout and filter through
          their rank, if satisfied gave access if not go to home
        */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
