import logo from './logo.svg';
import './App.css';

import Welcome from './welcome.js'

import Maths from './Maths.js'
import Mathsp from './Mathsp.js'
import HalfString from './HalfString.js';
import AddArray from './Array.js';
import ICard from './ICard.js';
import Hello from './Hello.js'

function App() {
  let arr=[10,20,30,40,50]

  let obj={
    name:"kiran",dob:"23-22-2023",phone:"9632574121"
  }
  return (
    <>
    {/* <p> Hello</p> */}
    
    {/* <Welcome></Welcome> */}
    
    {/* <Mathsp n1={20} n2={30} ></Mathsp> */}

    {/* <Mathsp n1={20} op={"+"} n2={30} ></Mathsp>
    <Mathsp n1={20} op={"-"} n2={30} ></Mathsp>
    <Mathsp n1={20} op={"*"} n2={30} ></Mathsp>
    <Mathsp n1={20} op={"/"} n2={30} ></Mathsp> */}

    {/* <AddArray nums={arr}></AddArray> */}

    {/* <ICard obj={obj}></ICard> */}
    
     <HalfString></HalfString> 
    {/* <Maths></Maths>  */}

  {/* <Hello></Hello> */}

    <ICard></ICard>
    </>
  );
}

export default App;
