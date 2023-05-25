import React from 'react'
import './home.css'
import postImg from '../../../assets/images/store-img3.jpg'
import Slider from '../../Subcomponents/sliderHome/Slider'

export default function Home() {
  return (
    <>
        <div className='bg-home1'>
          <section className='section1-home'>
            <h2>Check the store</h2>
            <p>We use Fake Store API to get information from the database and 
              display this information includes a variety of home appliances
              with categories of electronics, jewelry, menswear and menswear 
              We use Fake Store API to get information from the database and
              display this information includes a variety of home appliances 
              with categories of electronics,jewelry, menswear and 
              menswear</p>
          </section>
        </div>
        <section className='Suggestions-home'>
          <Slider/>
        </section>
        <section className='how-to-post-home'>
          <div className='how-to-post-home-text'>
            <h3>How to post?</h3>
            <p>We put your products and orders in strong and shockproof 
              packages and we will mail them to you by post of the Islamic 
              Republic of Iran.We put your products and orders in strong and 
              shockproof packages and we will mail them to you by post of 
              the Islamic Republic of Iran.We put your products and orders 
              in strong and shockproof packages and we will mail them to you 
              by post of the Islamic Republic of Iran.We put your products 
              and orders in strong and shockproof packages and we will 
              mail them to you by post of the Islamic Republic of Iran</p>
          </div>
          <div className='how-to-post-home-img'>
            <img src={postImg} />
          </div>
        </section>
        <div className='bg-home2'>
          <section className='section2-home'>
            <h2>Product warranty!</h2>
            <p>All products in our store have a company warranty and have
              an 18-month warranty. We put our electronic products in 
              shockproof packages and we mail them to you.All products in 
              our store have a company warranty and have an 18-month 
              warranty. We put our electronic products in shockproof 
              packages and we mail them to you.</p>
          </section>
        </div>
    </>
  )
}

