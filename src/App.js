import './App.css';
import {useState} from 'react';

function App() {

  let [state, setstate] = useState("");
  const message=()=>{
    setstate("login succesful")
  }

  return (
    <div id="login">
    <h1> Login with OTP </h1>
    <p>Mobile number: <input></input></p>
    <button onClick={message}> Login</button>
    <p>{state}</p>
    </div>
  );
}
export default App;
