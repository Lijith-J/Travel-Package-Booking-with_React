import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './Components/Log_in/LogIn';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import SearchedPlaces from './Components/SearchedPlace/SearchedPlaces';
import Invoice from './Components/Invoice/Invoice';

import MyBookings from './Components/MyBookings/MyBookings';
import Footer from './Components/Footer/Footer';


function App() {

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
