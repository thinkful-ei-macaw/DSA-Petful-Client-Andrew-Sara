import React, { Component } from 'react'
import config from './config';
import './Adoption.css';
import People from './People'

class Adoption extends Component {

  state = {
    typeOfPet: 'dog',
    dog: {},
    cat: {},
    people: []
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/people`)
    .then(person => {
      if(!person.ok) {
        return person.json().then((e) => Promise.reject(e))
      }
      return person.json()
    })
    .then(person => {
      this.setState({
        people: person
      })
    })
  

    fetch(`${config.API_ENDPOINT}/dog`)
      .then((dog) => ((!dog.ok)
          ? dog.json().then((e) => Promise.reject(e))
          : dog.json()))
      .then((dog) => {
        this.setState({
          dog: dog
        }) 
      })
    
    
    fetch(`${config.API_ENDPOINT}/cat`)
    .then(cat => {
      if(!cat.ok) {
        return cat.json().then((e) => Promise.reject(e))
      }
      return cat.json()
    })
    .then(cat => {
      this.setState({
        cat: cat
      })
    })
  }

  postUser = (name) => {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      })
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    let type = e.target['pet-type'].value
    let user = e.target['addName'].value
    this.postUser(user)
    this.setState({
      typeOfPet: type
    })
  }

  renderPeople = () => {
    let people = this.state.people
    return people.map((person) => (
      <People key={person} name={person} />
    ));
  }

  renderDog = () => {
    let {dog} = this.state
    return <section>
      <ul>
      <img src={dog.imageURL} alt={dog.description}></img>
      <li>Name: {dog.name}</li>
      <li>Gender: {dog.gender}</li>
      <li>Breed: {dog.breed}</li>
      <li>Description: {dog.description}</li>
      <li>Story of the Journey to the Shelter: {dog.story}</li>
    </ul>
    </section>
  }
  
  renderCat = () => {
    let {cat} = this.state
    return <section>
      <img src={cat.imageURL} alt={cat.description}></img>
      <ul>
        <li>NAME: {cat.name}</li>
        <li>GENDER: {cat.gender}</li>
        <li>BREED: {cat.breed}</li>
        <li>Physical Description: {cat.description}</li>
        <li>Story of the Journey to the Shelter: {cat.story}</li>
      </ul>
    </section>
  }

  render() {

  return <div>
    <header>
      <h1>Adoption</h1>
    </header>
    
    <main>
      <h3>PET ON STAGE</h3>
      <section>
      {this.state.typeOfPet === 'dog' ? this.renderDog() : this.renderCat()}
      <h3>PEOPLE IN QUEUE</h3>
      {this.renderPeople()}
  </section>

      <section id="form">
        <form onSubmit={this.handleSubmit} name="addNameToList" id="addNameToList">
        <label htmlFor="pet-type">What type of pet would you like to adopt?</label>
        <select name="pet-type">
            <option>-select your pet-</option>
            <option>dog</option>
            <option>cat</option>
          </select>
          <label htmlFor="addName">Your Name:</label>
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
