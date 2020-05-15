import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {

  return (
    <div>
      <header>
          <h1>PETFUL</h1>
      </header>
      
      <section className="description">
        This is an animal shelter for adoption of cats and dogs. The adoption process here works strictly on a "First-In, First-Out" basis. You can adopt a cat, or a dog, or both, but you may only adopt the animal that came to the shelter first. If you want to adopt a new pet, add your name to the list. When it is your turn, you will be able to adopt the currently available pet.
      </section>
      <main className="container">
      <section className="home-dog">
          <img src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="a smiling akita dog"></img>
          <p>Name: Fran</p>
          <p>Gender: Female</p>
          <p>Age: 3</p>
          <p>Breed: Akita</p>
          <p>Description: A great hunting dog</p>
          <p>Story: Found Downtown</p>
      </section>
      <section className="home-cat">
        <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="orange bengal cat laying on concrete"></img>
          <p>Name: Bogo</p>
          <p>Gender: Female</p>
          <p>Age: 2</p>
          <p>Breed: Bengal</p>
          <p>Description: Basically a wild animal</p>
          <p>Story: Found roaming the streets</p>
      </section>
      </main>
      <section className="button">
        <Link to="/Adoption">
          <button type='button'>ADOPT A PET!</button>
        </Link>
      </section>
    </div>
  )
  }
}

export default Home
