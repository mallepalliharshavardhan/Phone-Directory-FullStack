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
      <div className="flex min-h-screen justify-center bg-slate-200 px-4 py-10">
        <main className="w-full max-w-md">
          <Contactform onSubmit={addNewcontact} />
        </main>
      </div>
    </>
  )
}

export default App
