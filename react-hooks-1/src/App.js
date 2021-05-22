import './App.css';
import React, { useState } from 'react'


function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const inputChange =(e)=>{
    console.log(e.target.value);
    setName(e.target.value)
  }
  const clickButton =()=>{
    setFullName(name)
  }
  return (
    <div>
      <marquee behavior="scroll" direction="left">
        <h1>Hoşgeldin! {fullName}</h1>
      </marquee>
      <input type="text" value={name} onChange={inputChange}/>
    <button onClick={clickButton}>Gönder</button>
    </div>
  );
}

export default App;
