import React,{useState} from 'react';
import "./ContactFormStyles1.css";

function ContactForm1() {
    const [form,setForm]=useState()
    function handleChange(e){
      console.log(e.target.value,e.target.name)
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
    }
    async function handleSubmit(e){
      e.preventDefault()
  
      const response=await fetch("http://localhost:8080/demo",{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    }

  return (
    <div className="form-container">
      <h1>Send a Message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange={handleChange} 
        />
       
        <textarea 
          placeholder="Message" 
          rows="4" 
          name="message" 
          onChange={handleChange} 
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm1;

