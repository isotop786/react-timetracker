import React from 'react'

import TimeList from './TimeList'
import AddTime from './AddTime';

const Home = () =>{
    return(
        <div className="columns is-centered mt-4 p-3">
           <div className="column is-half box p-2">
                <h1 className="title has-text-centered mb-3">
                    Just Do it
                </h1>

                <TimeList/>

                <AddTime/>

           </div>
        </div>
    )
}

export default Home;