import React from 'react'
import {useState} from "react"
import LocationInfo from "react"

const SearchBox = () =>{
  const [value, setValue] = useState(1)
  return(
    <div>
      <select>
        <option value="1">Earth</option>
        <option value="2">Unknow</option>
      </select>
      <div>
        <button>Search</button>
      </div>
    </div>
  )
}

export default SearchBox