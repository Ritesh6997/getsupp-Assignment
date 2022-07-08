import React, { useContext } from 'react'
import { SearchContext } from './Context/Searchcontext'
import "./searchbar.css"
export default function SearchBar() {
    const { handlechange } = useContext(SearchContext);
  return (
    <div>
          <input className='inpbar' placeholder={"Search for Contact"} onChange={(e) => {
              handlechange(e.target.value);
      }} type="text" />
    </div>
  )
}
