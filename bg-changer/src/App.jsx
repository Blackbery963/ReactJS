import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")


  return (
   <div className="h-screen w-full duration-200"
   style={{backgroundColor: color}}
   >

    <div className='bottom-container'>
      <div className="botton">
      <button
      onClick={() => setColor("red")} 
      className='no1'
      >Red</button>

    <button
      onClick={() => setColor("green")} 
      className='no1'
      style={{backgroundColor: 'green'}}
      >green</button>

<button
      onClick={() => setColor("black")} 
      className='no1'
      style={{backgroundColor: 'black'}}
      >Black</button>

<button
      onClick={() => setColor("pink")} 
      className='no1'
      style={{backgroundColor: 'pink', color: 'black'}}
      >Pink</button>

<button
      onClick={() => setColor("lavender")} 
      className='no1'
      style={{backgroundColor: 'lavender', color: 'black'}}
      >Lavender</button>

<button
      onClick={() => setColor("crimson")} 
      className='no1'
      style={{backgroundColor: 'crimson', color: 'black'}}
      >Crimson</button>

<button
      onClick={() => setColor("blue")} 
      className='no1'
      style={{backgroundColor: 'blue', color: 'white'}}
      >Blue</button>

<button
      onClick={() => setColor("white")} 
      className='no1'
      style={{backgroundColor: 'white', color: 'black'}}
      >White</button>

<button
      onClick={() => setColor("orange")} 
      className='no1'
      style={{backgroundColor: 'orange', color: 'white'}}
      >Orange</button>

<button
      onClick={() => setColor("Yellow")} 
      className='no1'
      style={{backgroundColor: 'yellow', color: 'black'}}
      >Yellow</button>
      </div>
    </div>

   </div>
  )
}

export default App
