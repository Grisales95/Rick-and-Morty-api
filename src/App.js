import React from "react"
import axios from "axios"
import SearchBox from "./SearchBox"
import {useState} from "react"
import LocationInfo from "./LocationInfo"
import title from "./img/title.png"
import rick from "./img/rick.gif"
import intro from "./intro.mp3"

function App() {
  const [location, setLocation] = useState(1)
  const url = `https://rickandmortyapi.com/api/location/${location}`

  const [urls, setUrls] = useState()
  const [description, setDescription] = useState()
  const [total, setTotal] = useState()
  let [A, setA] = useState(0)
  let [B, setB] = useState(10)

  React.useEffect(()=>{
    if(location){
      const getData = async () =>{
        const data = await axios(url)
        const ubication = data.data
        const location = data.data.residents
        setDescription(ubication)
        setTotal(location.length)
        setUrls(location.slice(A,B))
      }
        getData()
    }  
  }, [url,location,description,total,A,B,urls])

  const handleNext1 = () =>{
    setA(A = 0)
    setB(B = 10)
  }

  const handleNext2 = () =>{
    setA(A = 10)
    setB(B = 20)
  }

  const handleNext3 = () => {
    setA(A = 20);
    setB(B = 30);
};

const handleNext4 = () => {
  setA(A = 30);
  setB(B = 40);
};

  return (
    <div className="container text-center">
      <div className="repro mt-3">
      <audio src={intro} autoPlay="autoplay" loop="loop"  controls ></audio>
      </div>
      <div className="title-logo">
      <img src={title} alt="logo-rick-morty" />
      </div>
      <SearchBox handleSearch = {setLocation} />
      <div>
      <div className="card py-3">
        <h2>Name: {description?.name}</h2>
        <p>Type: {description?.type}</p>
        <p>Dimension: {description?.dimension}</p>
      </div>
      <h1 className="color-white my-3">Residents</h1>
      <div className="container-residents">
      {urls ? (
          urls.map((url) => (
            <LocationInfo url={url}/>
          ))
        ) : (
            <h2>Cargando</h2>
        )}
      </div>
        </div> 
        <div>
        <button className="btn btn-sm btn-dark mx-1" onClick={handleNext1}>1</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={handleNext2}>2</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={handleNext3}>3</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={handleNext4}>4</button>
        </div>
        <div className="container mt-3 gif">
          <img src={rick} alt="portal"/>
        </div>
    </div>
  );
}

export default App;
