import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Login />}/>
      <Route path = "/dashboard" element = {<DashboardLayout />}>
        <Route index element={<Dashboard/>}/>
        <Route path="users" element={<Users/>}/>
      </Route>
    </Routes>
  )
}

export default App;
