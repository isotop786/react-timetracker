import React from 'react'

import TimeList from './TimeList'
import AddTime from './AddTime';

const Home = ({show}) =>{
    return(
        <div className="columns is-centered mt-4 p-3">
           <div className="column is-four-fifths is-desktop box p-2">
               

                <TimeList show={show}/>

                

           </div>
        </div>
    )
}

export default Home;