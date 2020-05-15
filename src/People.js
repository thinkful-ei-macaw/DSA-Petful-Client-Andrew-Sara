import React, { Component } from 'react'

class People extends Component{
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {name} = this.props
    console.log(this.props)
    return(
      <ul>
        <li>{name}</li>
      </ul>
    )
  }
}

export default People