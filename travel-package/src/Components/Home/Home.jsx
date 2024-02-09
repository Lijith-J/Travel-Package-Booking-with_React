import React, { useContext } from 'react'
import './Home_style.css'
import { Main_Context } from '../Context/Context_File'
import Footer from '../Footer/Footer'


const Home = () => {

  const { travelDatasAll } = useContext(Main_Context)


  return (
    <>

      <div className='ad-div'>
        <h1>Explore The World</h1>
        <h1>Riscover Yourself.</h1>
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


      </div>

      <Footer/>

    </>
  )
}

export default Home