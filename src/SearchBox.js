import React from 'react'
import {useState} from "react"

const SearchBox = ({handleSearch, handleNext1}) =>{
  const [value, setValue] = useState(1)
  return(
    <div>
      <select  className="form-control" onChange={e=>setValue(e.target.value)}>
        <option value="1">Earth</option>
        <option value="2">Abadango</option>
        <option value="3">Citadel of Ricks</option>
        <option value="4">Worldender's lair</option>
        <option value="5">Anatomy Park</option>
        <option value="6">Interdimensional Cable</option>
        <option value="7">Immortality Field Resort</option>
        <option value="8">Post-Apocalyptic Earth</option>
        <option value="9">Purge Planet</option>
        <option value="10">Venzenulon 7</option>
        <option value="11">Bepis 9</option>
        <option value="13">Nuptia 4</option>
        <option value="14">Giant's Town</option>
        <option value="16">St. Gloopy Noops Hospital</option>
      </select>
      <div className="my-3">
        <button className="btn btn-dark"onClick={()=>handleSearch(value)-handleNext1()}>Search</button>
      </div>
    </div>
  )
}

export default SearchBox