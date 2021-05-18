import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"


const LocationInfo = ({url}) => {
  const[resident, setResident] = useState("")

  useEffect(() =>{
    const getResidents = async () =>{
      const data = await axios(url);
      setResident(data.data)
    };
    getResidents()
  },[url,resident]);

  if(!resident) return null;
  return(
    <div className="card mb-3 mx-3" style={{maxWidth:400}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={resident.image} alt="rick and morty"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">Name: {resident.name}</h4>
            <p className="card-tex">Specie: {resident.species}</p>
            <p className="card-tex">Status: {resident.status}</p>
            <p className="card-tex">Origin: {resident.origin.name}</p>
            <p className="card-tex">Number of episodes: {resident.episode.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationInfo