import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"


const LocationInfo = ({url}) => {
  const[resident, setResident] = useState("")

  useEffect(() =>{
    const getResidents = async () =>{
      const data = await axios(url);
      setResident(data.data)
      console.log(data)
    };
    getResidents()
  },[url]);

  if(!resident) return null;
  return(
    <div>
      <p>{resident.name}</p>
      <img src={resident.image} alt="rick and morty" />
      <p>{resident.species}</p>
      <p>{resident.status}</p>
      <p>{resident.origin.name}</p>
      <p>Number of episodes: {resident.episode.length}</p>
    </div>
  )
}

export default LocationInfo