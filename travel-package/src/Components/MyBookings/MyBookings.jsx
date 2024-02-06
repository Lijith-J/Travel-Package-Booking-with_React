import React, { useContext } from 'react'
import './MyBookings_style.css'

import { Main_Context } from '../Context/Context_File'

const MyBookings = () => {

    const { orderStatus, MyBookings, setMyBookings, findItem } = useContext(Main_Context)

    const clearHistory = () => {
        setMyBookings([])
    }

    return (
        <>
            <div className='myOrders-page-headline-div'>
                <h1>My Orders</h1>

            </div>

            <div className='clearHistory-button-div'>
                <h4 onClick={clearHistory}>Clear all</h4>
            </div>

            <div>
                {
                    MyBookings.map((item) => (
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
                            <div className='order-status-div'>

                                {findItem.id === item.id && orderStatus === "Accepted" ? <h6 style={{ color: "green" }}>{orderStatus}</h6>
                                    :
                                    findItem.id === item.id && orderStatus === "Declined"
                                        ?
                                        <h6 style={{ color: "red" }}>{orderStatus}</h6>
                                        :
                                        <h6 style={{ color: "yellow" }}>{item.status}</h6>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MyBookings
