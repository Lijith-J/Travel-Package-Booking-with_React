import React, { useContext, useEffect, useState } from 'react'
import './Navbar_style.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import searchIcon from './images/search (1).png'
import { Main_Context } from '../Context/Context_File'


const Navbar = () => {

  const { travelDatasAll, setFindPlace } = useContext(Main_Context)

  const [inputValue, setInputValue] = useState('')

  let goToPage = useNavigate()

  const placeDatas = travelDatasAll.placeDatas

  // console.log('placedatass', placeDatas);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transperant");



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

    const searchItem = placeDatas.filter((item) => item.place === inputValue)
    // console.log("itemmm", searchItem);

    if (inputValue === '') {
      alert("Please Enter Destination")
    }
    else if (!searchItem) {
      setInputValue(" Enter Correctly!!!!")
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
      if (position > 100) {
        setNavbarBackground("white"); // Change to whatever color you want
      } else {
        setNavbarBackground("transparent");
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
      <div className='nav-main' style={{ background: navbarBackground, color: "black" , transition:"0.5s ease-in-out"}}>
        <div className="logo-div">
          <img className='logo' alt="" />
        </div>


        <div className='searchbar-div'>
          <form action="" >
            <input type="text" value={inputValue} onChange={getValue} placeholder='Search Your Destination' />
            <button className='search-button' onClick={searchPlace}><img src={searchIcon} alt="" /></button>
          </form>
        </div>

        <div className='page-navigations-div'>
          <Link to={'/home'} className='nav-links'>Home</Link>
          <Link to={'/admin'} className='nav-links'>Admin</Link>
          <Link to={'/mybookings'} className='nav-links'>My Bookings</Link>
          <Link to={'/'} className='nav-links'>Log In</Link>
        </div>



      </div>
      <Outlet />
    </>
  )
}

export default Navbar