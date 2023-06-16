import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashbord/Dashboard";
import Login from "./views/auth_forms/Login";
import Signup from "./views/auth_forms/Signup";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
