import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './signup/Signup';
import Contact from './contact/Contact';
import {Toaster} from "react-hot-toast"; 
import { useAuth } from './context/AuthProvider';
import Admin from './admin/Admin';
import AddBooks from './components/AddBooks';
import Cart from './cart/Cart';
import { useAdminAuth } from './context/AuthAdminProvider';
import AdminLogin from './components/AdminLogin';

function App() {
  const [authUser,setAuthUser] = useAuth();
  const { isAdmin, login, logout } = useAdminAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin/login' element={<AdminLogin/>}/>
          <Route path='/admin' element={isAdmin?<Admin/>:<Navigate to="/admin/login"/>}/>
          <Route path='/admin/add-books' element={isAdmin?<AddBooks/>:<Navigate to="/admin/login"/>}/>
        </Routes> 
        <Toaster />
      </div>
    </>
  );
}

export default App;