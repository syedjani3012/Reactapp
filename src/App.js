import { useState } from 'react'
import './App.css'

function App() {

  let [col,setcol]=useState('white')

  const changecolor=(e)=>{
    const color=e.target.innerText
    setcol(color)
    
  }

  return (

    <div className="body" style={{backgroundColor: col}}>
      <h1 className='mb-11'>Background Changer</h1>
      <h3>click the button and see magic</h3>
      <div className='but'> 
        <button className="blue" onClick={changecolor}>Blue</button>
        <button  className="red" onClick={changecolor}>Red</button>
        <button className="green" onClick={changecolor}>Green</button>
      </div>
    </div>
  )
}

export default App
