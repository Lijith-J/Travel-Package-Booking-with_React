import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

import * as XLSX from 'xlsx';


export const Main_Context = createContext()

const Context_File = ({ children }) => {
    // Data from API
    const [travelDatasAll, setTravelDatasAll] = useState([]);
    localStorage.setItem("Travel All Datas", JSON.stringify(travelDatasAll))

    const TravelDatasAll = JSON.parse(localStorage.getItem("Travel All Datas"))

    // console.log("ujfffffffffffffffff",TravelDatasAll)

    // Sign In UserName Password Inputvalue
    const [inputValue, setInputValue] = useState('')

    // Search Place
    const [findPlace, setFindPlace] = useState([]);




    // Trip Booking Items{

    const getTravelBookingsFormStorage = () => {
        const LocalStorageBookings = localStorage.getItem("TripBookings")
        const temp = JSON.parse(LocalStorageBookings)

        if (temp) {
            try {
                return temp !== null && temp !== undefined ? temp : [];
            } catch (error) {
                console.error("Error JSON", error);

                return [];
            }
        } else {
            return []
        }

    }

    const [TripBookings, setTripBookings] = useState(getTravelBookingsFormStorage)

    localStorage.setItem("TripBookings", JSON.stringify(TripBookings))

    useEffect(() => {
        getTravelBookingsFormStorage()
    }, [])




    // console.log("booookings",TripBookings)

    // Phone Number InputValue
    const [phoneNo, setPhoneNo] = useState('')

    // Invoice Bitll Modal
    const [BillModal, setBillModal] = useState(false)

    // Invoice Bill
    const [BillDetails, setBillDetails] = useState()

    // MyOrder Status
    const [orderStatus, SetOrderStatus] = useState('Waiting')


    // Take input Values to Add items to API
    const [addItemInputValues, setAddItemInputValues] = useState({
        id: Date.now(),
        name: '',
        place: '',
        image: '',
        rate: '',
        triptype: '',
        status: "Waiting",
    });






    //   Fetching Datas from API to Get
    // const getData = async () => {

    //     try {
    //         const dataUrl = await axios.get("http://localhost:4004/traveldata")
    //         setTravelDatasAll(dataUrl.data)
    //     }
    //     catch {
    //         console.error("Data Didn't get from API");
    //     }
    // }

    // useEffect(() => {
    //     getData()
    // }, [addItemInputValues])

    // ________________________________________________________________________________



    return (
        <Main_Context.Provider value={{
            TravelDatasAll,
            findPlace, setFindPlace,
            TripBookings, setTripBookings,

            BillModal, setBillModal,
            BillDetails, setBillDetails,

            inputValue, setInputValue,
            phoneNo, setPhoneNo,
            orderStatus, SetOrderStatus,
            addItemInputValues, setAddItemInputValues,

        }}>

            {children}
        </Main_Context.Provider>
    )
}

export default Context_File