import React, { Component } from "react";
import "./Adoption.css";
import People from "./People";
import Api from './Api'

class Adoption extends Component {
  state = {
    typeOfPet: "dog",
    dog: {},
    cat: {},
    people: [],
    first: false,
    removeTimer: null,
  };

  componentDidMount() {

    Api.getPeople()
      .then((person) => {
        this.setState({
          people: person,
        });
      });

    Api.getDog()
      .then((dog) => {
        this.setState({
          dog: dog,
        });
      });

    Api.getCat()
      .then((cat) => {
        this.setState({
          cat: cat,
        });
      });
  }

  postUser = (name) => {
    Api.addPerson(name)
      .then((people) => {
        console.log('hello')
        this.setState({
          people
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let type = e.target["pet-type"].value;
    let user = e.target["addName"].value;
    this.postUser(user);

    let removeTimer = setInterval(() => {
      this.handleTimerFuncs();
    }, 5000);

    this.setState({
      typeOfPet: type,
      removeTimer,
    });
  };

  handleTimerFuncs = () => {
    let newPeople = [
      "Karen Whosyerboss",
      "Jim Lahey",
      "Linda Pierogie",
      "Madeline McCain",
    ];

    if (this.state.people.length > 1) {
      Api.deletePerson(this.state.people[0])
        .then((people) => {
          this.setState({
            people,
          });
        });
      Api.deleteDog()
        .then((dog) => {
          this.setState({
            dog: dog,
          });
        });
      Api.deleteCat()
        .then((cat) => {
          this.setState({
            cat: cat,
          });
        });
    } else {

      clearInterval(this.state.removeTimer);
      let i = 0;
      let addInterval = setInterval(() => {
        this.postUser(newPeople[i]);
        i++;
      }, 5000);

      this.setState({
        first: true,
      });

      setTimeout(() => {
        clearInterval(addInterval);
      }, 20000);
    }
  };

  renderPeople = () => {
    let people = this.state.people;
    if (people.length > 1) {
      return people.map((person, index) => (
        <People key={index} name={person} />
      ));
    }
    return <People key="0" name={people[0]} />;
  };

  renderDog = () => {
    let { dog } = this.state;
    return (
      <section>
        <ul>
          <img src={dog.imageURL} alt={dog.description}></img>
          <li>Name: {dog.name}</li>
          <li>Gender: {dog.gender}</li>
          <li>Breed: {dog.breed}</li>
          <li>Description: {dog.description}</li>
          <li>Story of the Journey to the Shelter: {dog.story}</li>
        </ul>
      </section>
    );
  };

  renderCat = () => {
    let { cat } = this.state;
    return (
      <section>
        <img src={cat.imageURL} alt={cat.description}></img>
        <ul>
          <li>NAME: {cat.name}</li>
          <li>GENDER: {cat.gender}</li>
          <li>BREED: {cat.breed}</li>
          <li>Physical Description: {cat.description}</li>
          <li>Story of the Journey to the Shelter: {cat.story}</li>
        </ul>
      </section>
    );
  };

  handleAdopt = () => {
    Api.deletePerson(this.state.people[0])
      .then((people) => {
        this.setState({
          people,
          first: false,
        });
      });
    if (this.state.typeOfPet === 'dog') {
      Api.deleteDog()
        .then((dog) => {
          this.setState({
            dog: dog,
          });
        });
    } else {
      Api.deleteCat()
      .then((cat) => {
        this.setState({
          cat: cat,
        });
      });
    }
    alert(`Congrats, on your new pet ${this.state.typeOfPet}!!`)
  };

  render() {
    return (
      <div>
        <header>
          <h1>Adoption</h1>
        </header>

        <main>
          <section>
            <h3>PET ON STAGE</h3>
            {this.state.typeOfPet === "dog"
              ? this.renderDog()
              : this.renderCat()}
            <h3>PEOPLE IN QUEUE</h3>
            {this.renderPeople()}
          </section>

          <section id="form">
            <form
              onSubmit={this.handleSubmit}
              name="addNameToList"
              id="addNameToList"
            >
              <label htmlFor="pet-type">
                What type of pet would you like to adopt?
              </label>
              <select name="pet-type" defaultValue="dog">
                <option>-select your pet-</option>
                <option>dog</option>
                <option>cat</option>
              </select>
              <label htmlFor="addName">Your Name:</label>
              <input type="text" name="addName" id="addName"></input>
              <button type="submit">ADD ME TO THE QUEUE</button>
              {this.state.first ? (
                <button onClick={this.handleAdopt} type="button">
                  ADOPT THAT PET!
                </button>
              ) : (
                ""
              )}
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default Adoption;
