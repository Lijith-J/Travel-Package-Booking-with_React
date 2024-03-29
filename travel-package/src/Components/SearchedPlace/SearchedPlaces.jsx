import React, { useContext, useEffect, useState } from 'react'
import './SearchedPlace_style.css'
import { Main_Context } from '../Context/Context_File'
import closeBtn from './images/close (1).png'
import Footer from '../Footer/Footer'



// import offer1 from './images/offer1.webp'

const SearchedPlaces = () => {

  const { findPlace,
    TripBookings,
    setTripBookings,
    setBillModal,
    phoneNo, setPhoneNo,
  } = useContext(Main_Context)

  const [phoneNoModal, setPhoneNoModal] = useState(false)


  const [selectItem, setSelectItem] = useState(null) // Select an item when click book, 
  //the item will add to an array, when click submitItem  function


  const bookItem = (item) => {
    setSelectItem(item)
    setPhoneNoModal(true)
  }

  // console.log(selectItem);

  const submitItem = () => {
    if (selectItem) {
      setTripBookings((prev) => [...prev, selectItem])
      // setMyBookings((prev) => [...prev, selectItem])

    }
    setSelectItem(null)
    // console.log("bookings -- ", TripBookings);

    const closeModal = () => {
      setPhoneNoModal(false)
    }
    closeModal()

  }

  const cancelItem = (index) => {
    const updatedBookings = [...TripBookings]
    updatedBookings.splice(index, 1)
    setTripBookings(updatedBookings)
  }

  const closeModal = () => {
    setPhoneNoModal(false)
  }

  useEffect(() => {
    // console.log("tripBooking ----",TripBookings);
  }, [TripBookings]);


  // Get Phone Number

  const getPhoneNumber = (e) => {
    setPhoneNo(e.target.value)
  }



  return (
    <>

      <div className='searchPlace-headline-div'>
        <h2>BOOK YOUR TRIP</h2>
      </div>
      <div>
        
      </div>

      <div className='page-content-div'>
        <div className='search-Items-main'>

            {
              findPlace.map((item, index) => (
                <div key={item.id} className='placeItem-div'>
                  <div className='image-div'>
                    <img src={item.image} alt="" />
                  </div>
                  <div className='place-details-div'>
                    <h3>{item.name}</h3>
                    <h3>{item.place}</h3>
                    <h3>₹{item.rate}</h3>
                    <h4>{item.triptype}</h4>
                  </div>
                  <div className='button-div'>
                    <button onClick={() => bookItem(item, index)}>Book</button>
                    <button onClick={() => cancelItem(index)}>Cancel</button>
                  </div>
                </div>
              ))
            }

        </div>


        {
          phoneNoModal && (
            <div className='phoneNoModal-parent-div'>
              <div className='modal-div'>
                <img src={closeBtn} onClick={closeModal} className='modal-close-btn' />
                <div className='modal-form'>
                  <label htmlFor="">Phone </label>
                  <input type="text" value={phoneNo} onChange={getPhoneNumber} required minLength={10} placeholder=' Phone No' />
                  <div className='modal-buttons-div'>
                    <button type="submit" onClick={submitItem}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }


      </div>


      <Footer />

    </>
  )
}

export default SearchedPlaces
