import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //without state note note change name
  // let data="sonu";
  // const handle=()=>{
  //   data="kushwh";
  //   alert("welcome");
  //   console.log("hi");
  // }

  //state using
  const [data,setData]=useState("Sonu");
  const handle=()=>{
    setData("Jaiprakash");
  }
  return (
   <>
   <h4>{data}</h4>
   <button onClick={handle}>update State</button>
   </>
  );
}

export default App;
