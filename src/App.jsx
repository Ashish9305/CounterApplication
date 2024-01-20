import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks
  let [counter , setCounter] = useState(15);
  // let counter = 15 ;

  const addValue = () => {
    // console.log("Random Value" , Math.random()*10);
    
    if(counter<20 && counter>=0){
      setCounter(counter+1);
    }

  };

  const removevalue = () => {
    console.log("clicked " , counter);

    if(counter<=20 && counter>0){
      setCounter(counter-1);
    }
  }
  

  return (
    <>
      <h1>chai aur react</h1>
      <h2 className='cntr'>counter value : {counter}</h2>
      <button
      onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button
      onClick={removevalue} >remove Value : {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
