import './App.less';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './ProtectedRoute';
import Admin from './components/Admin';
import User from './components/User';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState()
  const getrole = (role)=>{
    setRole(role)
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User getrole = {getrole}/>} />
        <Route element={<ProtectedRoute role = {role} />}>
          <Route path="/admin" element={<Admin />} />
        </Route> 

      </Routes>
    </div>
  );
}

export default App;
