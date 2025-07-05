import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './signup/Signup';
import Contact from './contact/Contact';
import {Toaster} from "react-hot-toast"; 
import { useAuth } from './context/AuthProvider';
import Purchases from './purchases/Purchases';
import Admin from './admin/Admin';
import AddBooks from './components/AddBooks';
import BuyPage from './buyPage/BuyPage';

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
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/add-books' element={<AddBooks/>}/>
          <Route path='/buy' element={<BuyPage/>}/>
        </Routes> 
        <Toaster />
      </div>
    </>
  );
}

export default App;