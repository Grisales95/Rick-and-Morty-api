import React from 'react';
import axios from "axios"
import SearchBox from "./SearchBox"
import {useState} from "react"
import LocationInfo from "./LocationInfo"

function App() {
  const [location, setLocation] = useState(1)
  const url = `https://rickandmortyapi.com/api/location/${location}`

  const [urls, setUrls] = useState()
  const [total, setTotal] = useState()

  React.useEffect(()=>{
    if(location){
      const getData = async () =>{
        const data = await axios(url)
        const location = data.data.residents
        setTotal(location.length)
        setUrls(location.slice(0,10))
      }
        getData()
    }  
  }, [url,location])
  return (
    <div className="App">
      <SearchBox handleSearch = {setLocation} />
      <div>
        {urls ? (
          urls.map((url) => (
            <LocationInfo url={url}/>
          ))
        ) : (
            <h2>Cargando</h2>
        )}
        </div> 
    </div>
  );
}

export default App;
