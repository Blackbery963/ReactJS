import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  // let counter = 10;


 let[counter, setCounter ] = useState(10)
  counter = counter + 1

  // let counter = 10;

  const addValue = () => {
    console.log("value added", counter);
//    counter = counter + 1
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("value removed", counter);
    setCounter(counter-1)
    
  }



  return (
    <>
      <h1>Hello React</h1>
      <h2>Print the value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
