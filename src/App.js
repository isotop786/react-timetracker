import React,{useState,useEffect} from 'react'
import firebase from './firebase'

import Header from './components/Header'
import Home from './components/Home'



const App = ()=>{
const [show, setShow] = useState(false)

useEffect(()=>{
  console.log(show)
})



  return(
    <div>
          <Header show={show} setShow={setShow}/>  
          <div className="container">
        
            <Home show={show} />
           
          </div>

    <style jsx>
    {`
      html,body,button,input,select,option{
        font-family: 'Ubuntu', sans-serif;
      }

    `}
    </style>

    </div>
  )
}

export default App;