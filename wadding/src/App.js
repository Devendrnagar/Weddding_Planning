import { Route, Routes } from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'
import Wadding from './routes/Wadding'
import Singup from "./routes/Sing";
import Register from "./Login/Register";
import Login from "./Login/Login";
function App() {
  return (
    <div className="App">
      
    <Routes>
        <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/wadding"element={<Wadding/>}/>
        <Route path="/sing"element={<Singup/>}/>
        <Route path="/"element={<Register/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/login"element={<Login/>}/>
      </Routes> 
      {/* <Navbar/> */}

       
      
       
    </div>
  );
}

export default App;
