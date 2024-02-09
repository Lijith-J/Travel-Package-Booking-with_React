import React, { useContext, useEffect, useState } from 'react'
import './SearchedPlace_style.css'
import { Main_Context } from '../Context/Context_File'
import closeBtn from './images/close (1).png'
import Invoice from '../Invoice/Invoice'
import Footer from '../Footer/Footer'

// import offer1 from './images/offer1.webp'

const SearchedPlaces = () => {

  const { findPlace,
    TripBookings,
    setBookings,
    BillModal, setBillModal,
    phoneNo, setPhoneNo,
    MyBookings,
    setMyBookings } = useContext(Main_Context)

  const [phoneNoModal, setPhoneNoModal] = useState(false)


  const [selectItem, setSelectItem] = useState(null) // Select an item when click book, 
  //the item will add to an array, when click submitItem  function


  console.log("trippppp ----", TripBookings);
  console.log("myy booking ----", MyBookings)

  const bookItem = (item) => {
    setSelectItem(item)
    setPhoneNoModal(true)
  }

  // console.log(selectItem);

  const submitItem = () => {
    if (selectItem) {
      setBookings((prev) => [...prev, selectItem])
      setMyBookings((prev) => [...prev, selectItem])

    }
    setSelectItem(null)
    console.log("bookings -- ", TripBookings);

    const closeModal = () => {
      setPhoneNoModal(false)
    }
    closeModal()

    openBillModal()
  }

  const cancelItem = (index) => {
    const updatedBookings = [...TripBookings]
    updatedBookings.splice(index, 1)
    setBookings(updatedBookings)
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

  // Bill Modal Functions

  const openBillModal = () => {
    setBillModal(true)
  }

  return (
    <>


      <div className='page-content-div'>
        <div className='search-Items-main'>
          <h2>BOOK YOUR TRIP</h2>

          <div className='place-items-div'>

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

        </div>

        {/* <div className='Ads-div'>
         
        </div> */}

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

      {/* Invoice bill Modal */}
      {/* {
        BillModal && <Invoice />
      } */}


     

    </>
  )
}

export default SearchedPlaces
