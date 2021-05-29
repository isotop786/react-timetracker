import React,{useState,useEffect} from 'react'
import firebase  from '../firebase'



const AddTime = ()=>{

    const [title,setTitle] = useState('')
    const [time, setTime] = useState('')
    const [tik, setTik] = useState(false)

    const onSubmit =  (e)=>{
        e.preventDefault();
        
         setTik(true)
         firebase.firestore().collection('tasks')
        .add({
            title,
            time_seconds:parseInt(time)
        })
        .then(()=>{
          setTik(false)
          setTitle('')
          setTime('')
        })

       


    }

    return(
        <div className="columns  p-3">
        <div className="column notification  is-four-fifths">
            <h1 className="title is-6">Add Time Entry</h1>
           
            <div className="field">
                <label htmlFor="">Name of the task</label>
                <div className="control">
                <input className="input" type="text" value={title}  onChange={(evt)=>{
                    setTitle(evt.target.value)
                }}/>
                </div>
            </div>

            <div className="field">
                <label htmlFor="">Time required</label>
               <div className="control">
                <input  type="text" className="input" value={time} onChange={(e)=>{
                    setTime(e.target.value)
                }}/>
               </div>
            </div>

            <div className="field">
                <button 
                disabled={title==="" || time===""}
                className={`button  ${tik ? 'is-loading is-primary' : 'is-info'}`} onClick={onSubmit}>Add Time Entry</button>
            </div>
        </div>
        </div>
    )
}

export default AddTime;