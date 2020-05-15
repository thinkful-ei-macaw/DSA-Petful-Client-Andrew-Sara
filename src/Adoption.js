import React, { Component } from 'react'

class Adoption extends Component {
  render() {
  return <div>
    <h1>Adoption</h1>

    <h3>PET ON STAGE</h3>
    {/* <img>Good Pet Picture</img> */}
    <ul>
      <li>PET NAME: </li>
      <li>PET GENDER: </li>
      <li>PET BREED: </li>
      <li>Physical Description: </li>
      <li>Story of the Journey to the Shelter: </li>
    </ul>

    <h3>PEOPLE IN QUEUE</h3>
    <ul>
      <li>PERSON 1: </li>
      <li>PERSON 2: </li>
      <li>PERSON 3: </li>
      <li>PERSON 4: </li>
      <li>PERSON 5: </li>
    </ul>
    <form name="addNameToList" id="addNameToList">
      <label htmlFor="addName"></label>
      <input type="text" name="addName" id="addName"></input>
      <button type="submit">ADD ME TO THE QUEUE</button>
      <button type="submit">ADOPT THAT PET!</button>
    </form>
  </div>
  }
}

export default Adoption;
