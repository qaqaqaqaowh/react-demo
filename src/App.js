import { Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from './containers/NavBar'
import UserProfile from './containers/UserProfile'

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={() => <h1>Homepage</h1>} />
      <Route path="/users/:id" component={UserProfile} />
    </div>
  )
}

export default App;



