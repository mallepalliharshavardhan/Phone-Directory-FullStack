import { useState } from "react";

const Contactform = ({ onSubmit }) => {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");

  const handleAdd=(e)=>{
   e.preventDefault();
   onSubmit({name,phone,email});
  }
   
    return(

        <>
         <h2> Contact form </h2>
        <form onSubmit={handleAdd}>
   
         <input type="text" placeholder="Enter name" required onChange={(e)=> {setName(e.target.value)}} value={name}/>
          <input type="text" placeholder="Enter phone" required onChange={(e)=> {setPhone(e.target.value)}} value={phone}/>
           <input type="email" placeholder="Enter email" required onChange={(e)=> {setEmail(e.target.value)}} value={email} />
           <button type="submit">Add</button>
        </form>

        </>
       
    )
} ;

export default Contactform ;