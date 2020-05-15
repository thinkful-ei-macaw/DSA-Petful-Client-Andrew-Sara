import React from 'react'
import Home from '../Home'
import  { Route, Switch } from 'react-router-dom'
import Adoption from '../Adoption'

function Root() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Adoption" component={Adoption} />
      </Switch>
    </div>
  )
}

export default Root
