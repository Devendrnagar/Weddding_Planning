import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutImg from "../assets/7.jpg"
import { Navbar } from 'react-bootstrap'

export default function Wadding() {
  return (
    <div>
        {/* <h1>hello</h1> */}
        <Hero 
      cName="hero-mid "
      heroImg={AboutImg}
      title="Wadding"
      // text="Choose Your Favourite Destination"
      // url="/"
      // buttonText="Travel Plan"
      btnclassName="hide"
      />
      <Link to='/wadding'></Link>
      <Footer/>
      <Navbar/>
    </div>
  )
}
