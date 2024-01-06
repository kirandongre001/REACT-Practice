
import './App.css';
//import Hello from './Hello.js'
import Hello from "./Hello"
import SayHi from "./SayHi"
import ShowMonth from './showMonth';

export default function App1(){
    return(
        <>
        <Hello name="kiran"></Hello>
        <SayHi></SayHi>
        <ShowMonth></ShowMonth>
        </>
    );
}