import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Female from "./pages/Female";
import Boy from "./pages/Boy";
import Girl from "./pages/Girl";   
import Child from "./pages/Child";
import Users from "./pages/Users";
import Male from "./pages/Male";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import UsersPage from "./pages/UsersPage";  
import {useState} from "react"



function App() {  
  const [color, setColor] = useState(true);   

  return (
    <div className={color ? "App": "white"}>
      <Navbar  color={color} setColor={setColor} />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/male" element={<Male />} />
        <Route path="/female" element={<Female />} />
        <Route path="/boy" element={<Boy />} />
        <Route path="/girl" element={<Girl />} />
        <Route path="/child" element={<Child />} /> 
        <Route path="/login" element={<Login/> } /> 
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
