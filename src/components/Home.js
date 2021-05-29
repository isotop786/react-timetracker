import React from 'react'

import TimeList from './TimeList'
import AddTime from './AddTime';

const Home = () =>{
    return(
        <div className="columns is-centered mt-4 p-3">
           <div className="column is-four-fifths is-desktop box p-2">
               

                <TimeList/>

                <AddTime/>

           </div>
        </div>
    )
}

export default Home;