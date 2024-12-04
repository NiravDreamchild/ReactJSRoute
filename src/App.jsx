import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import User from "./screens/User";
import About from "./screens/About";
import Admin from "./screens/Admin";
import PrivateRoute from "./components/PrivateRoute";
import UnAuthorized from "./screens/UnAuthorized";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route element={<PrivateRoute allowedRoles={["admin", "user"]} />}>
        <Route path="/user" element={<User />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/unauthorized" element={<UnAuthorized />} />
    </Routes>
  );
}

export default App;
