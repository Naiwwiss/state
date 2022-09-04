import React,{useState} from 'react';
import './App.css';
import Card from './Component/Proflile'


function App() {
  const[show,setShow]=useState(true)

  function handleName(name){
    alert(`hello ${name}`)
  }
  
  return (
    <div className="App">
      {show?<Card handleName={handleName}/>:null}
      <button onClick={()=>setShow(!show)}>show</button>

    </div>
  );
}

export default App;
