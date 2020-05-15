import React, { Component } from 'react'

class People extends Component{

  render() {
    const {name} = this.props
    return(
      <ul>
        <li>{name}</li>
      </ul>
    )
  }
}

export default People