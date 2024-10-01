import { useState, useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const[length, setLength] = useState(8);
  const[number, setNumber] = useState(false);
  const[charector, setCharector] = useState(false);

  const passRef = useRef(null)

  const[password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789";
    if(charector) str += "~!@#$%^&*(){}[]?><?";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() *str.length + 1)

      pass +=str.charAt(char)
    }

    setPassword(pass)

  }, [ length, number, charector, setPassword])


  const copyToClipBoard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, 
  [password])

  useEffect(() => {
    passGenerator()
  }, [length, number,charector,passGenerator])

  return (
    <div className='container'
    style={{width: '40%'}}>
   <h1 className='head'>Password Generator</h1> 

      <div className="input-cont">
        <input type="text"
        value={password}
        className='input-pass' 
        placeholder='password'
        readOnly
        ref={passRef}
        />


        <button onClick={copyToClipBoard} 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value) }}
           />

           <label>Length: {length}</label>


        </div>
        <div className='flex items-center gap-x-1'>
         <input type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={() => {
            setNumber((prev) => !prev)
          }}
         />

         <label htmlFor="numberInput">Number</label>
        </div>
         
        <div className='flex items-center gap-x-1'>
         <input type="checkbox"
          defaultChecked={charector}
          id='charectorInput'
          onChange={() => {
            setCharector((prev) => !prev)
          }}
         />

         <label htmlFor="CharectorInput">Charector</label>
        </div>
      </div>
    </div>
  )
}


export default App
