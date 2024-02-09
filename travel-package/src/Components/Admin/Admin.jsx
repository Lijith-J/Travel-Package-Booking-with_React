import React, { useContext, useEffect, useState } from 'react'
import './Admin_styles.css'
import { Main_Context } from '../Context/Context_File'
import axios from 'axios'


const Admin = () => {
  const { TripBookings, setBookings, MyBookings, orderStatus, SetOrderStatus, setFindItem, addItemInputValues, setAddItemInputValues } = useContext(Main_Context)
  // console.log("liiii", TripBookings)

  const [addItemModal, setAddItemModal] = useState(false)




  const acceptBooking = (item, index) => {
    const tripItem = item
    const findItem = MyBookings.find((bookingItem) => bookingItem.id === tripItem.id)

    if (findItem) {
      setFindItem(findItem)
      SetOrderStatus("Accepted")

    }
  }

  const declineBooking = (item, index) => {
    const tripItem = item
    const findItem = MyBookings.find((bookingItem) => bookingItem.id === tripItem.id)

    if (findItem) {
      setFindItem(findItem)
      SetOrderStatus("Declined")


    }

  }

  // const removeItem = () => {
  //   const updateTripBookings = [...TripBookings]
  //   updateTripBookings.splice(index, 1)
  //   setBookings(updateTripBookings)
  // }
  // removeItem()


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
                  {/* {
                    orderStatus === "Accepted" ? <span>Accept</span>
                      :
                      orderStatus === "Declined" ? <span>Declined</span>
                        :
                        <> */}
                          <button onClick={() => acceptBooking(item, index)}>Accept</button>
                          <button onClick={() => declineBooking(item, index)}>Decline</button>
                        {/* </>
                  } */}
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