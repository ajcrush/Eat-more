// rafce
import { useState } from "react";
import contact from "../images/Contact-Us.png"
const Contact = ()=>{
 const [message,setMessage] = useState(false);
 const handleSubmit =(e)=>{
  e.preventDefault();
  setMessage(true);
 }
 return (
  <div className="contact-container flex flex-wrap  justify-evenly overflow-y-hidden ">
   <div className="contact-left w-3/5">
    <img src={contact}/>
   </div>
   <div className="contact-right flex flex-col content-center justify-center m-5 ">
    <h1 className="text-2xl text-center font-bold">Contact Us</h1>
    <form className="flex flex-col p-10 justify-center content-center" 
    onSubmit={handleSubmit}>
     <input 
     className="p-[10px] m-[10px] border-r-[5px] box-border w-[50vh] border-2 border-solid border-[#aabcca]"
     type="text" placeholder="Name" required/>
     <input className="p-[10px] m-[10px] border-r-[5px] box-border w-[50vh] border-2 border-solid border-[#aabcca]" 
     type="email" placeholder="Email" required/>
     <textarea className="p-[10px] m-[10px] border-r-[5px] box-border w-[50vh] border-2 border-solid border-[#aabcca]"
      placeholder="Type your Message Here..." required ></textarea>
     <button type="submit" className="  py-2 mr-8  bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 rounded w-[70px] ">submit</button>
     {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>}
    </form>
   </div>
  </div>
 );
} ;

export default Contact;