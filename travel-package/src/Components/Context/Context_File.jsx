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


    // console.log(' ------', travelDatasAll)




    //   Fetching Datas from API to Get
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

    // ________________________________________________________________________________


    



    return (
        <Main_Context.Provider value={{
            travelDatasAll,
            findPlace, setFindPlace,
            TripBookings, setBookings,
            BillModal, setBillModal,
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