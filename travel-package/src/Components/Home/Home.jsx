import React, { useContext } from 'react'
import './Home_style.css'
import { Main_Context } from '../Context/Context_File'
import Footer from '../Footer/Footer'


import downloadIcon  from './images/download/download.png'
import plstoreImg from './images/download/google.png'
import appstoreImg from './images/download/app.png'

import QRCodeImg from './images/download/QRCode.avif'


const Home = () => {

  const { travelDatasAll } = useContext(Main_Context)


  return (
    <>

      <div className='homePage-backDesign  backImage'>

      </div>

      <div className='homePage-AllContent-div'>

        <div className='ad-div'>
          <h1>Explore The World</h1>
          <h1>Riscover Yourself.</h1>
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae vero ipsum commodi asperiores adipisci perspiciatis quas! Repudiandae quod modi animi quidem! Quaerat incidunt hic qui officia magni ipsam, quia atque facere molestiae exercitationem placeat nostrum? Quas ipsa odio illum!</p>
          <button>Know More</button>
        </div>

        <div className='description-div'>
          <h1>Choose Your Destination Style</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, autem culpa! Beatae, debitis tenetur autem laborum alias quia impedit ut? Quasi doloremque, quam nesciunt  consectetur adipisicing elit. Veniam, autem culpa! Beatae, debitis tenetur autem laborum alias quia impedit ut? Quasi doloremque, quam nesciunt tempora suscipit minus minima possimus culpa?</p>

        </div>

        <div className='trip-categories-div'>
        

          <div className='adventure-div'>
            <h1>Adventure</h1>
            <div className='adventure-image-div'>
              <img src={require('./images/adventure/forest.jpg')} alt="" />
              <img src={require('./images/adventure/skydive.jpg')} alt="" />
              <img src={require('./images/adventure/Whitewater_Rafting.webp')} alt="" />
              <img src={require('./images/adventure/MountainTrekking Adventure.jpg')} alt="" />
            </div>
          </div>

          <div className='luxury-div'>
            <h1>Luxury</h1>
            <div className='luxury-image-div'>
              <img src={require('./images/luxury/boat.jpg')} alt="" />
              <img src={require('./images/luxury/pool.jpg')} alt="" />
              <img src={require('./images/luxury/res.webp')} alt="" />
              <img src={require('./images/luxury/goa.jpg')} alt="" />

            </div>
          </div>


        </div >


        <div className='downloadApp-main-div'>
          <div className="download-div">

            <div className='download-text-div'>
              <img src={downloadIcon} alt="" />
              <h1>Download App Now!</h1>
              {/* <span>Use code WELCOMEMMT and get FLAT 12% OFF* on your first domestic flight booking</span> */}
            </div>

            <div className='appStore-div'>
              <img src={plstoreImg} alt="" />
              <img src={appstoreImg} alt="" />

            </div>
            <div className='QR-div'>
            <img src={QRCodeImg} alt="" />

            </div>

          </div>

        </div>

        <Footer />


      </div>
    </>
  )
}

export default Home