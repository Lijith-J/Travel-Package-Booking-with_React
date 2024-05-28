import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './Components/Log_in/LogIn';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import SearchedPlaces from './Components/SearchedPlace/SearchedPlaces';
import Invoice from './Components/Invoice/Invoice';

import MyBookings from './Components/MyBookings/MyBookings';
import Footer from './Components/Footer/Footer';

import axios from 'axios';

function App() {

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const fetchProtectedData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4004/protected");
  //       setMessage(response.data.message);
  //     } catch (error) {
  //       alert("You are not authorized to view this page");
  //       window.location.href = "/login";
  //     }
  //   };

  //   fetchProtectedData();
  // }, []);

  console.log(message)

  return (

    <BrowserRouter>

      <Routes>

        <Route index element={<LogIn />} />

        <Route element={<Navbar />} >
          <Route path='/home' element={<Home />} />
          <Route path='/seachplace' element={<SearchedPlaces />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/mybookings' element={<MyBookings />} />
          <Route path='/footer' element={<Footer />} />
        </Route>

        <Route path='/admin' element={<Admin />} />

      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
