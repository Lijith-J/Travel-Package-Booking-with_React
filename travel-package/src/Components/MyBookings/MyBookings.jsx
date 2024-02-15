import React, { useContext } from 'react'
import './MyBookings_style.css'

import { Main_Context } from '../Context/Context_File'
import Footer from '../Footer/Footer'

import pdfIcon from './images/pdf.png'
import Invoice from '../Invoice/Invoice'

const MyBookings = () => {

    const { TripBookings,  BillDetails, setBillDetails,BillModal, setBillModal, } = useContext(Main_Context)

    const getBill= (item)=>{
        setBillDetails(item)
        // console.log("billlllll",BillDetails);
        setBillModal(true)
    }

    return (
        <>
            <div className='booking-headline-div'>
                <h2>MY BOOKINGS</h2>
            </div>

            <div className='mybooking-contents-div'>
                <div className='Bookings-mainDiv'>

                    <div className='myBookings-div'>

                        {
                            TripBookings.map((item) => (
                                <div key={item.id} className='myBookings-item-div'>
                                    <div className='myBookings-item-image-div'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='myBookings-place-details-div '>
                                        <h3>{item.name}</h3>
                                        <h3>{item.place}</h3>
                                        <h3>₹ {item.rate}</h3>
                                        <h4>{item.triptype}</h4>
                                    </div>

                                    <div className='order-status-div'>

                                        <span style={item.status === "Accepted" ? { color: "green" } :
                                            item.status === "Declined" ? { color: "red" } : { color: "yellow" }}>{item.status}
                                        </span>
                                        {
                                            item.status === "Accepted" ?
                                                <img onClick={()=>getBill(item)} className='pdfIcon' src={pdfIcon} alt="" />
                                                : null
                                        }

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >


      {/* Invoice bill Modal */}
      {
        BillModal && <Invoice />
      }


            <Footer />
        </>
    )
}

export default MyBookings
