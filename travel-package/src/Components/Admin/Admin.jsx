import React, { useContext } from 'react'
import './Admin_styles.css'
import { Main_Context } from '../Context/Context_File'


const Admin = () => {
  const { TripBookings, setBookings, MyBookings, SetOrderStatus, setFindItem } = useContext(Main_Context)
  // console.log("liiii", TripBookings)


  const acceptBooking = (item, index) => {
    const tripItem = item
    const findItem = MyBookings.find((bookingItem) => bookingItem.id === tripItem.id)

    if (findItem) {
      setFindItem(findItem)
      SetOrderStatus("Accepted")

      const removeItem = () => {
        const updateTripBookings = [...TripBookings]
        updateTripBookings.splice(index, 1)
        setBookings(updateTripBookings)
      }

      removeItem()

    }
  }

  const declineBooking = (item, index) => {
    const tripItem = item
    const findItem = MyBookings.find((bookingItem) => bookingItem.id === tripItem.id)

    if (findItem) {
      setFindItem(findItem)
      SetOrderStatus("Declined")

      const removeItem = () => {
        const updateTripBookings = [...TripBookings]
        updateTripBookings.splice(index, 1)
        setBookings(updateTripBookings)
      }
      removeItem()
    }

  }


  return (
    <>

      {/* <div className='admin-headline'>
        <h1>Bookings</h1>
      </div> */}

      <div className='admin-content-div'>
        <div className='book-orders-main-div'>
          <h1>Booking Orders</h1>

          <div className='orders-div'>
            {TripBookings.map((item, index) => (
              <div key={item.id} className='admin-placeItem-div'>
                <div className='admin-placeitem-image-div'>
                  <img src={item.image} alt="" />
                </div>
                <div className='admin-place-details-div'>
                  <h3>{item.name}</h3>
                  <h3>{item.place}</h3>
                  <h3>₹ {item.rate}</h3>
                  <h4>{item.triptype}</h4>
                </div>
                <div className='admin-placeitem-button-div'>
                  <button onClick={() => acceptBooking(item, index)}>Accept</button>
                  <button onClick={() => declineBooking(item, index)}>Decline</button>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className='site-access-div'>
          <div className='acccess-items-div'>

            <h4>Add items</h4>
            <h4>Add Offers</h4>
            <h4>Handle Users</h4>
          </div>
        </div>

      </div>

    </>
  )
}

export default Admin