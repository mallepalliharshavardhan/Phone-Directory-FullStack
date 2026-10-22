import Contactform from './Contactform'
import ContactList from './ContactList'
import API from './api'
import { useState,useEffect } from 'react'
import './App.css'
import backgroundImage from './assets/backgroundImage.jpg'

function App() {

  const [contacts,setContacts] = useState([]);
  const [editContact,setEditcontact] = useState(null);

//Load contacts

console.log(contacts)

  const fetchContacts = async()=>{
    const res = await API.get("/")
    setContacts(res.data)
  };

  useEffect(()=>{
    API.get("/")
      .then((res) => setContacts(res.data))
      .catch((error) => console.error("Failed to load contacts:", error));
  },[])

  const saveContact = async (data) => {
    if (editContact) {
      await API.put(`/${editContact._id}`, data);
      setEditcontact(null);
    } else {
      await API.post("/", data);
    }
    await fetchContacts();
  };
  // delete contact
 const deleteContact= async(id)=>{
  await API.delete(`/${id}`);
   fetchContacts();
 }
 
 //update contact 

 const updateContact =async(id,data)=>{
  await API.put(`/${id}`);
  setEditcontact(null);
  fetchContacts();
 }
  

  return (
    <>
      <div className="flex min-h-screen justify-center   px-4 py-10 bg-center bg-no-repeat " 
      style={{backgroundImage: `url(${backgroundImage})`}}>
        <main className="w-full max-w-lg">
          <Contactform key={editContact?._id ?? "new"} onSubmit={saveContact} existing={editContact}/>
          <ContactList contacts={contacts} onDelete={deleteContact} onEdit={setEditcontact}/>
        </main>
      </div>
    </>
  )
}

export default App
