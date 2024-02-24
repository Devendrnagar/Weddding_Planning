import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/7.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";



function Contact() {
  return (
    <>
     <Navbar/>
     <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Contact"
      // text="Choose Your Favourite Destination"
      // url="/"
      // buttonText="Travel Plan"
      btnclassName="hide"
      />
     <ContactForm/>
    <Footer/>   
    </>
  );
}

export default Contact;
