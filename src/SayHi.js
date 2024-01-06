import {useState} from 'react'

export default function SayHi(){
    let [msg,setmsg]=useState("Enter text here")
    function handler(){
        setmsg("hi")
    }
    return(
        <>
         <input type="button" value="say Hi" onClick={handler}/>
         <p>{msg}</p>
        </>
    );
}