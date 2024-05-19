import React, { useContext, useEffect, useState } from 'react'
import './Navbar_style.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import searchIcon from './images/search (1).png'
import { Main_Context } from '../Context/Context_File'


const Navbar = () => {

  const { TravelDatasAll, setFindPlace } = useContext(Main_Context)

  const [inputValue, setInputValue] = useState('')

  let goToPage = useNavigate()

 

  // console.log('placedatass', placeDatas);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transperant");
  const [navbarFont, setNavbarFont] = useState("white");



  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // Function for Take search Input Value
  const getValue = (e) => {
    let searchText = capitalizeFirstLetter(e.target.value)
    setInputValue(searchText)
  }
  
  // console.log('search value', inputValue);


  const searchPlace = (e) => {

    e.preventDefault()

    const searchItem = TravelDatasAll.filter((item) => item.place === inputValue)
    
    // console.log("itemmm", searchItem);

    if (inputValue === '') {
      alert("Please Enter Destination")
    }
    else if (!searchItem) {
      setInputValue("Enter Correctly !!!!")
    }
    else if (searchItem) {
      setFindPlace(searchItem)
      goToPage('/seachplace')
    }
  }


  // Navbar scrolling color

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Change background color after scrolling down
      if (position > 60) {
        setNavbarBackground("white"); // Change to whatever color you want
        setNavbarFont("black")
      } else {
        setNavbarBackground("transparent");
        setNavbarFont("white")
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className='nav-main' style={{ background: navbarBackground, transition: "0.3s ease-in-out" }}>
        <div className="logo-div">
          <img className='logo' alt="" />
        </div>


        <div className='searchbar-div'>
          <form action="" >
            <input type="text" value={inputValue} onChange={getValue} placeholder='Search Your Destination' />
            <button className='search-button' onClick={searchPlace}><img src={searchIcon} alt="" /></button>
          </form>
        </div>

        <div className='page-navigations-div' >
          <Link to={'/home'} style={{ color: navbarFont }} className='nav-links'>Home</Link>
          <Link to={'/mybookings'} style={{ color: navbarFont }} className='nav-links'>My Bookings</Link>
          <Link to={'/'} style={{ color: navbarFont }} className='nav-links'>Log In</Link>
        </div>



      </div>
      <Outlet />
    </>
  )
}

export default Navbar