import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState([]);
  const addContactHandeler = (contact) => {
    console.log("from app : " + contact);
    setContact([...contacts, { id: uuid(), ...contacts }]);
  };

  //to save file in local storage and get.
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContact(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactList = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandeler={addContactHandeler} />
      <ContactList contacts={contacts} getContactId={removeContactList} />
    </div>
  );
}
export default App;
