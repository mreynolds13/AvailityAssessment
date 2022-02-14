import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ProviderList from './ProviderList';
const { v4: uuidv4 } = require('uuid');



function App() {
  const LOCAL_STORAGE_KEY = "providerReg.providers"
  const storedProviders = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  const [providers, setProviders] = useState(storedProviders ? storedProviders : [])
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const npiNumberRef = useRef()
  const businessAddressRef = useRef()
  const telephoneNumberRef = useRef()
  const emailAddressRef = useRef()



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(providers))
  }, [providers])


  function handleAddProvider(e) {
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const npiNumber = npiNumberRef.current.value
    const businessAddress = businessAddressRef.current.value
    const telephoneNumber = telephoneNumberRef.current.value
    const emailAddress = emailAddressRef.current.value
    setProviders(prevProviders => {
      return [...prevProviders, { id: uuidv4(), firstName: firstName, lastName: lastName, npiNumber: npiNumber, businessAddress: businessAddress, telephoneNumber: telephoneNumber, emailAddress: emailAddress }]
    })
    firstNameRef.current.value = null
    lastNameRef.current.value = null
    npiNumberRef.current.value = null
    businessAddressRef.current.value = null
    telephoneNumberRef.current.value = null
    emailAddressRef.current.value = null
  }
  return (
    <div>
      <span>
        <h1 className='title'>
          Provider Registration
        </h1>
        <form onSubmit={handleAddProvider} >
          <input ref={firstNameRef} placeholder='First Name' required></input>
          <input ref={lastNameRef} placeholder='Last Name' required></input>
          <input ref={npiNumberRef} placeholder='NPI Number' required type='number' title='No Dashes'></input>
          <input ref={businessAddressRef} placeholder='Business Address' required></input>
          <input ref={telephoneNumberRef} placeholder='Telephone Number' required type='number' title='No Dashes'></input>
          <input ref={emailAddressRef} placeholder='Email Address' required type="email"></input>
          <input type="button" className='addProvider' required type='submit' value="Add Provider" />
        </form>
      </span>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>NPI Number</th>
            <th>Business Address</th>
            <th>Telephone Number</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          <ProviderList providers={providers}></ProviderList>
        </tbody>
      </table>
    </div >
  );
}

export default App;
