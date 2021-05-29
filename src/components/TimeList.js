import React,{useState,useEffect} from 'react'
import firebase from '../firebase';

import Sort from './Sort'
import AddList from './AddTime'


const SORT_OPTIONS = {
    'TIME_ASC' : {column: 'time_seconds',direction:'asc'},
    'TIME_DESC' : {column: 'time_seconds',direction:'desc'},

    'TITLE_ASC': {column: 'title',direction:'asc'},
    'TITLE_DESC': {column:'title', direction:'desc'}
}


const useTime = (sort_by="TIME_ASC")=>{
    const [time,setTime] = useState([])
    // const times = useTime();
   
    useEffect(()=>{
      
        firebase.firestore()
        .collection('tasks')
        .orderBy(SORT_OPTIONS[sort_by].column,SORT_OPTIONS[sort_by].direction)
        .onSnapshot(sn=>{
            const newTime = sn.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }))

            setTime(newTime)
        })

        // console.log(time)
    },[sort_by])
    
  
    return time;
   
}


const TimeList = ({show})=>{  
    
    const [sortBy,setSortBy] = useState('TIME_ASC')
    const time = useTime(sortBy,show)
    
    return(
        <div className="column  is-desktop p-3 ">
            {show ? (
            <AddList/>
            )
            : ''
        }
            <h2 className="title is-5 has-text-centered">Time List {show}</h2>
      
           <Sort sort={sortBy} setSort={setSortBy}/>
                <div className="p-2 has-text-centered ">
                    
                    {time.length  ?  (
                        <table className="table is-fullwidth is-striped 
                        is-hoverable
                        ">
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Time to Complete Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {time.map(e=>(
                            <tr>
                                <td >{e.title}</td>
                                <td>{e.time_seconds} Seconds</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                    )
                    : (
                        <div className="is-loading has-background-light p-3 
                        has-text-info
                        has-text-centered">
                            Data loading.....
                            
                        </div>
                    )
                }
                    
                </div>
                <style jsx>{`
                    
                `}</style>
            </div>
       
    )
}

export default TimeList;    