import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashbord/Dashboard";
import Login from "./views/auth_forms/Login";
import Signup from "./views/auth_forms/Signup";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      {/* <CssBaseline /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
