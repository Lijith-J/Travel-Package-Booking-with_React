import React, { useContext, useRef } from 'react'
import './Invoice_style.css'
import { Main_Context } from '../Context/Context_File'
// import ToPDF from 'html2pdf.js'
import { useReactToPrint } from 'react-to-print'

const Invoice = () => {

  const { setBillModal, BillDetails, inputValue, phoneNo, TripBookings } = useContext(Main_Context)

  const clientName = localStorage.getItem("clientName")

  console.log("input value", inputValue);

  const closeBillModal = () => {
    setBillModal(false)
  }


  // Print Bill Function
  // const generatePDF = () => {
  //   const element = document.querySelector('.bill-div');

  //   ToPDF()
  //     .from(element)
  //     .save();
  // };

  const componentRef = useRef()

  const printBill = useReactToPrint({
    content: () => componentRef.current
  })



  return (
    <div className='invoice-main'>


      <div className='invoice-box'>
        <h2>Invoice</h2>
        <div className='bill-div' ref={componentRef}>

          <table>
            <tr className='table-main-head' >
              <th colSpan={4}>Tavel</th>
            </tr>
            <tr className='table-phone-Number'>
              <th colSpan={4}>Company Ph.No: +91 6090897654</th>
            </tr>
            <tr >
              <td colSpan={2}>Client Name:{clientName}</td>
              <td colSpan={2}>Ph.No:{phoneNo}</td>
            </tr>

            <tr className='table-items-row'>

              <td colSpan={3}>
                {BillDetails.name}
                <br />
              {BillDetails.place}
              </td>
             

            </tr>
            <tr className='table-total-row'>
              <td colSpan={4}>Rate : ₹ {BillDetails.rate}/-</td>
            </tr>

          </table>

        </div>

        <div className='bill-buttons-div'>
          <button onClick={printBill}>Print</button>
          <button onClick={closeBillModal}>Cancel</button>
        </div>

      </div>


    </div>
  )
}

export default Invoice
