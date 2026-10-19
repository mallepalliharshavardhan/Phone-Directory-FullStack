import Contactform from './Contactform'
import API from './api'
import { useState } from 'react'
import './App.css'

function App() {

  // add  contact

  const addNewcontact = async (data)=>{
    await API.post("/",data);
    console.log("Sucessfull added contact")
  } ;
  

  return (
    <>
       <Contactform onSubmit={addNewcontact}/>
    </>
  )
}

export default App
