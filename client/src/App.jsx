import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  let [cars,setCars] = useState([]);

  useEffect(()=>{
   getCars();
  },[]);

  const getCars = () => {
    axios.get('/api/getcars')
    .then(response =>{
      setCars(response.data)
    })
  }


  const onCarSubmit = () => {
    axios.post('/api/addcar',{
      brand: 'Ford',
      model:'Taurus',
      year: 2000,
      avail:false  
    })
    .then( response => {
      console.log(response.data);
    })
  }

  const onCarRemove = () => {
    axios.post('/api/removecar',{
      brand:'Ford'
    })
    .then(response=>{
      console.log(response.data)
      getCars();
    });
  }


  return(
    <>
      <div className='App'>
        <h1>Add car</h1>
        <button
          onClick={()=> onCarSubmit()}
        >
            Add car to DB
        </button>
        <hr/>
        { cars.map(car=>(
          <div key={car._id}>{car.brand}</div>
        ))}
        <hr/>
        <h2>Remove elements</h2>
        <button onClick={()=> onCarRemove()}>Delete !!!</button>
      </div>      
    </>
  )
}

export default App;