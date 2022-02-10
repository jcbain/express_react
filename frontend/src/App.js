import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Dog from './components/Dog';

// const data = [
//   {name: 'Pippa', color: 'white'},
//   {name: 'Prairie', color: 'black'}
// ]

function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/dogs')
      .then(res => {
        console.log(res);
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const dogsList = data.map((dog, i) => {
    return (
      <Dog key={i} name={dog.name} color={dog.color}/>
    )
  })
  return (
    <div className="App">
      {dogsList}
      {/* <Dog name="Pippa" color="white"/> */}
      {/* Dog({ name: "Pippa", color: "white"}) */}
      {/* <Dog name="Prairie" color="tri-color"/> */}
    </div>
  );
}



export default App;
