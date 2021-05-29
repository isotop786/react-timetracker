import React from 'react'
import firebase from './firebase'

import Header from './components/Header'
import Home from './components/Home'



const App = ()=>{

  return(
    <div>
          <Header/>  
          <div className="container">
            <Home/>
          </div>

    </div>
  )
}

export default App;