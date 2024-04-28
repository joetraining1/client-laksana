import Guest from "./lib/layouts/Guest";
import Main from "./lib/layouts/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Employee/Profile";
import { Routes, Route } from "react-router-dom";
import Absen from "./pages/Employee/Absen";
import Payroll from "./pages/Employee/Payroll";
import Relative from "./pages/Employee/Relative";
import Admin from "./lib/layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import Employees from "./pages/Admin/Employees";
import Gajian from "./pages/Admin/Gajian";
import Records from "./pages/Admin/Records";
import Kazoku from "./pages/Admin/Kazoku";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<Guest />}>
          <Route path="login" element={<Login hero={"pegawai"} />}>
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="admin" element={<Login hero={"administrator"} />} />
        </Route>
        <Route element={<Main />}>
          <Route index element={<Home />} />
          <Route path="profile/:email" element={<Profile />} />
          <Route path="absensi" element={<Absen />} />
          <Route path="gaji" element={<Payroll />} />
          <Route path="keluarga" element={<Relative />} />
        </Route>
        <Route path="dashboard" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="payrolls" element={<Gajian />} />
          <Route path="records" element={<Records />} />
          <Route path="relatives" element={<Kazoku />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
