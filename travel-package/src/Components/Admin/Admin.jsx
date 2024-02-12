import React, { useContext, useEffect, useState } from 'react'
import './Admin_styles.css'
import { Main_Context } from '../Context/Context_File'
import axios from 'axios'


const Admin = () => {
  const { TripBookings, setBookings, addItemInputValues, setAddItemInputValues } = useContext(Main_Context)
  // console.log("liiii", TripBookings)

  const [addItemModal, setAddItemModal] = useState(false)


  const acceptBooking = ( itemIndex) => {

    setBookings(prevBookings => {
      return prevBookings.map((booking, index) => {
        if (index === itemIndex) {
          return { ...booking, status: "Accepted" };
        }
        return booking;
      });
    });

  };

  const declineBooking = (itemIndex) => {

    setBookings(prevBookings => {
      return prevBookings.map((booking, index) => {
        if (index === itemIndex) {
          return { ...booking, status: "Declined" };
        }
        return booking;
      });
    });

  };



  // Adding Items from input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddItemInputValues((prev) => ({ ...prev, [name]: value }));
  };


  // Fetch Post Data function

  const postAddItemData = async () => {
    try {
      const postURL = await axios.post('http://localhost:4004/addPlaceItems', addItemInputValues)
      const postResponse = postURL.data
      console.log(postResponse);
    }
    catch {
      console.log('Post Data Error')
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
              <div key={index} className='admin-placeItem-div'>
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
                  {item.status === "Waiting" ? (
                    <>
                      <button className='accept-button' onClick={() => acceptBooking(item.id, index)}>Accept</button>
                      <button className='decline-button' onClick={() => declineBooking(index)}>Decline</button>
                    </>
                  ) : (
                    <span style={item.status === "Accepted" ? { color: "green" } :
                      item.status === "Declined" ? { color: "red" } :
                        { color: "yellow" }}>{item.status}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className='site-access-div'>
          <div className='acccess-items-div'>

            <h4 onClick={() => setAddItemModal(true)}>Add items</h4>
            <h4>Add Offers</h4>

          </div>
          {
            addItemModal &&
            <div className='addItem-modal'>
              <input type="text" placeholder='Destination' name='name' value={addItemInputValues.name} onChange={handleChange} />
              <input type="text" placeholder='Place' name='place' value={addItemInputValues.place} onChange={handleChange} />
              <input type="text" placeholder='Image Link' name='image' value={addItemInputValues.image} onChange={handleChange} />
              <input type="number" placeholder='Rate' name='rate' value={addItemInputValues.rate} onChange={handleChange} />
              <input type="text" placeholder='Triptype' name='triptype' value={addItemInputValues.triptype} onChange={handleChange} />

              <div className='addItem-button-div'>
                <button onClick={postAddItemData}>Add</button>
                <button onClick={() => setAddItemModal(false)}>close</button>
              </div>

            </div>
          }
        </div>

      </div>

    </>
  )
}

export default Admin