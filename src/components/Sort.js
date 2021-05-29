import React from 'react'

const Sort = ({sort,setSort})=>{
  return (
    <div className="">
         <div className="has-text-centered">
                <label>Sort Tasks By: </label>{' '}
                <div className="select is-rounded">
                <select value={sort} 
                onChange={e=> setSort(e.currentTarget.value) }
                
                >
                    <option value="TIME_ASC">Time (fastest first)</option>
                    <option value="TIME_DESC">Time (slowest first)</option>
                    <option disabled>-------</option>
                    <option value="TITLE_ASC">Title (a-z)</option>
                    <option value="TITLE_DESC">Title (z-a)</option>
                </select>
                </div>
                </div>
    </div>
   )
}


export default Sort