import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const Main_Context = createContext()

const Context_File = ({ children }) => {
    // Data from API
    const [travelDatasAll, setTravelDatasAll] = useState([]);

    // Sign In UserName Password Inputvalue
    const [inputValue, setInputValue] = useState('')

    // Search Place
    const [findPlace, setFindPlace] = useState([]);

    // Trip Booking Items
    const [TripBookings, setBookings] = useState([])

    // Phone Number InputValue
    const [phoneNo, setPhoneNo] = useState('')

    // Invoice Bitll Modal
    const [BillModal, setBillModal] = useState(false)

    // My Orders Array
    const [MyBookings, setMyBookings] = useState([])

    // MyOrder Status
    const [orderStatus, SetOrderStatus] = useState('')


    // a state to set findItem ,from admin and myBooking arrays
    const [findItem, setFindItem] = useState([])



    // console.log('findplace ------', findPlace)



    

    //   Fetching Datas from API
    const getData = async () => {
        try {

            const dataUrl = await axios.get("http://localhost:4004/traveldata")
            setTravelDatasAll(dataUrl.data)

        }
        catch {
            console.error("Data Didn't get from API");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log("all Data", travelDatasAll);

    return (
        <Main_Context.Provider value={{
            travelDatasAll,
            findPlace, setFindPlace,
            TripBookings, setBookings,
            BillModal, setBillModal,
            inputValue, setInputValue,
            phoneNo, setPhoneNo,
            MyBookings, setMyBookings,
            orderStatus, SetOrderStatus,
            findItem, setFindItem
        }}>

            {children}
        </Main_Context.Provider>
    )
}

export default Context_File