import React,{useState} from 'react'

const showBtn = ()=>{
    return(
        <template>
            <i className="fas fa-plus mr-2 has-text-info"></i> Add New Taska s
        </template>
    )
}

const Header = ({show,setShow})=>{
    // const [show, setShow] = useState(false)
   
    return(
        <div className="columns p-3 has-background-info">
           
            <div className="column is-full is-desktop is-flex is-flex-direction-row is-justify-content-space-between	">
                    <h1 className="title has-text-light ml-6">React Time Tracker{show}</h1>
                        <button
                        onClick={()=>{
                           setShow(!show)
                           
                        }}
                        className="button is-light">{show  ? 
                           "Hide Form"
                        : ("Add New Task")   }</button>
            </div>
        <style jsx> 
{`
    .dis{
        display:flex;
        margin:auto;
    }

`}
        </style>
        </div>
        
    )
}

export default Header;