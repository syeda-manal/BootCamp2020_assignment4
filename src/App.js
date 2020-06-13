import React, {useState} from 'react';
import day from './day.jpg';
import night from './night.jpeg';
import './App.css';

function App() {
  let [isNight, setNight]= useState(false);
  let [image, setImage]= useState(day);
  let[counter, setCounter]= useState(1);
  let [temp, setTemp] = useState(25)
  let alterDN = isNight ? 'Night': 'Day';
  return (
    <div className= {`App ${alterDN}`}>
     
      <center>
      <h2>Have a Good {isNight ? "Night" : "Morning"}</h2>
      <img src = {image} height = "300" width = "300" alt = ""/>
      <br />
      <button onClick =  {()=>{setNight(!isNight); isNight ? setImage(day): setImage(night)} }> update Day </button>
      <p>Value of Counter: {counter}</p>
      <button onClick = {()=> setCounter(++counter)}>Count</button>
      <p>Temperature is : {temp} Celsuis  </p>

      <button class = "block" onClick = {()=> setTemp(--temp)}> - </button>
      <span>       </span>
      <button class = "block" onClick = {()=> setTemp(++temp)}>+</button>
      <br />
      </center>
    </div>
  );
}

export default App;
