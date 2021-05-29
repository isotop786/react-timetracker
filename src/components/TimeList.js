import React,{useState,useEffect} from 'react'
import firebase from '../firebase';


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


const TimeList = ()=>{  
    
    const [sortBy,setSortBy] = useState('TIME_ASC')
    const time = useTime(sortBy)
    
    return(
        <div className="column">
           
            <h2 className="title is-5 ">Time List</h2>
       
            <div>
                <label for="">Sort By: </label>{' '}
                <div className="select is-rounded">
                <select value={sortBy} 
                onChange={e=> setSortBy(e.currentTarget.value) }
                
                >
                    <option value="TIME_ASC">Time (fastest first)</option>
                    <option value="TIME_DESC">Time (slowest first)</option>
                    <option disabled>-------</option>
                    <option value="TITLE_ASC">Title (a-z)</option>
                    <option value="TITLE_DESC">Title (z-a)</option>
                </select>
                </div>
                </div>
                <div className="p-2">
                    {time.length  ?  (
                        <ol>
                        {time.map(t=>(
                             <li style={{padding:5}} key={t.id}>
                             <div>
                                 <span style={{marginRight:20}}>{t.title} </span>
                                 <span>------</span>
                                 <span style={{marginLeft:20}}>{t.time_seconds}</span>
                             </div>
                           </li>
                        ))}
                      
                    </ol>
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