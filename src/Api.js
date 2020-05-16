import config from './config'

const Api = {
  getDog() {
    return fetch(`${config.API_ENDPOINT}/dog`, {
      method: "DELETE",
    })
      .then((dog) => {
      if (!dog.ok) {
        throw new Error('no dogs here')
      }
      return dog.json();
    })
},

  getCat() {
    return fetch(`${config.API_ENDPOINT}/cat`)
    .then((cat) => {
      if (!cat.ok) {
        throw new Error('no cats here')
      }
      return cat.json();
    })
},


  getPeople() {
      return fetch(`${config.API_ENDPOINT}/people`, {
        method: "DELETE",
      })
        .then((people) => {
        if (!people.ok) {
          throw new Error('no peoples here')
        }
        return people.json();
      })
},

  addPerson(name) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        person: name,
      }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/dog`, {
      method: "DELETE",
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/cat`, {
      method: "DELETE",
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deletePerson(person) {
    return fetch(`${config.API_ENDPOINT}/people`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: person,
    }),
  })
    .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
}

export default Api