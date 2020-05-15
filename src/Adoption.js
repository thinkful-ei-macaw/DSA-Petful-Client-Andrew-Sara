import React, { Component } from 'react'
import './Adoption.css'

class Adoption extends Component {
  render() {
  return <div>
    <header>
      <h1>Adoption</h1>
    </header>
    
    <main>
      <section>
      <h3>PET ON STAGE</h3>
      <img src="https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pug doin work"></img>
      <ul>
        <li>PET NAME: </li>
        <li>PET GENDER: </li>
        <li>PET BREED: </li>
        <li>Physical Description: </li>
        <li>Story of the Journey to the Shelter: </li>
      </ul>
      </section>
      <section>
      <h3>PEOPLE IN QUEUE</h3>
      <ul>
        <li>PERSON 1: </li>
        <li>PERSON 2: </li>
        <li>PERSON 3: </li>
        <li>PERSON 4: </li>
        <li>PERSON 5: </li>
      </ul>
      </section>
      <section>
      <form name="addNameToList" id="addNameToList">
        <label htmlFor="addName"></label>
        <input type="text" name="addName" id="addName"></input>
        <button type="submit">ADD ME TO THE QUEUE</button>
        <button type="submit">ADOPT THAT PET!</button>
      </form>
      </section>
    </main>
  </div>
  }
}

export default Adoption;
