import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import Adoption from './Adoption'

class Home extends Component {
  render() {

  return (
    <div>
      <h1>Petful</h1>
      <p>site description</p>
      <div className="home-dog">
        <img src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="a smiling akita dog"></img>
        <p>Name: Fran</p>
        <p>Gender: Female</p>
        <p>Age: 3</p>
        <p>Breed: Akita</p>
        <p>Description: A great hunting dog</p>
        <p>Story: Found Downtown</p>
      </div>
      <div className="home-cat">
        <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="orange bengal cat laying on concrete"></img>
          <p>Name: Steve French</p>
          <p>Gender: Female</p>
          <p>Age: 2</p>
          <p>Breed: Bengal</p>
          <p>Description: Basically a wild animal</p>
          <p>Story: Found roaming the streets</p>
      </div>
      <Link to="/Adoption">
        <button type='button'>Adopt a pet</button>
      </Link>
    </div>
  )
  }
}

export default Home
