import React from 'react'
import Hero from "../components/Hero";
// import Navbar from './components/Navbar'
import AboutImg from "../assets/7.jpg"
import Footer from "../components/Footer";
import ContactForm1 from "../components/ContactForm1";
export default function Singup() {
  return (
    <div>
      
      {/* <h1>hello</h1> */}
      {/* <Navbar/> */}
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Contact"
      // text="Choose Your Favourite Destination"
      // url="/"
      // buttonText="Travel Plan"
      btnclassName="hide"
      />
      <br/>
     <ContactForm1/>
     <br/>
    <Footer/>  

    </div>
  )
}
