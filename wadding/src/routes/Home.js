
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Box1 from '../components/Box1'
// import AboutImg from "../assets/2.jpg"
import AboutImg from "../assets/1.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
     <Navbar/>
      <Box1/>
      <Hero 
      cName="hero"
      heroImg={AboutImg}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination"
      url="/home"
      buttonText="Wadding Plan"
      btnclassName="show"
      /> 
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
