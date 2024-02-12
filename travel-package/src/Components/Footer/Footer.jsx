import React from 'react'
import './Footer_style.css'
import whatsappIcon from './image/whatsapp.png'
import facebookIcon from './image/facebook.png'
import instagramIcon from './image/instagram.png'
import twitterIcon from './image/twitter.png'

const Footer = () => {

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <>
    <div className='to-topPage-div' onClick={scrollToTop}>
      Back To Top
    </div>
      <div className='footer-main-div'>
        <div className='footer-description-div'>
          <h3>Who we Are ?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea ipsam ex assumenda ullam. Quibusdam blanditiis fuga maxime saepe excepturi tempora, nobis repellendus doloribus possimus repellat neque impedit quo minima.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nobis expedita illum doloribus dolores obcaecati quam deserunt sint dignissimos quo?
          </p>
        </div>
        <div className='contact-main-div'>

          <div className='contactUs-div'>
            <h4>Contact Us</h4>
            <span>Ph:987898765, 8765456788</span>
            <span>Address: Somwhere, Somwhere Street<br />
            Somewher Building, Near Somehwhere, <br />
            PIN: 6765456
            </span>
      
          </div>

          <div className='socialMedia-div'> 
          <img src={whatsappIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />

          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
