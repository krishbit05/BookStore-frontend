import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './signup/Signup';
import Contact from './contact/Contact';
import {Toaster} from "react-hot-toast"; 
import { useAuth } from './context/AuthProvider';
import Purchases from './purchases/Purchases';

function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Purchases' element={<Purchases/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;