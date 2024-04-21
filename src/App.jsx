import Guest from "./lib/layouts/Guest";
import Main from "./lib/layouts/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

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
