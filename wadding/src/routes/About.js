
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      
      
      <Navbar/>
      <div className="container-fluid">
        <h1 className="h1">
Get to Know Happly!
</h1>
      </div>
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      // text="Choose Your Favourite Destination"
      // url="/"
      // buttonText="Travel Plan"
      btnclassName="hide"
      />
    <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
