
import {useState} from "react";

export default function Maths()
{
    // let num1=10;
    // let num2=20;

    // let num1=props.n1;
    // let num2=props.n2;
    const [num,setnum]=useState(0)
    
    function handler(event)
    {

        let n1=parseInt(document.getElementById("id1").value)

        let n2=parseInt(document.getElementById("id2").value)
        
       let select=event.target.value

       switch(select){
        case "+":
            setnum(n1+n2);break
        case "-":
            setnum(n1-n2);break
        case "*":
            setnum(n1*n2);break
        case "/":
            setnum(n1/n2);break
        default:
                break
       }
    }
    return(

        <>
            {/* <p style={{backgroundColor:"grey"}}>sum:{num1}+{num2}={num1 +num2}</p> */}
            <div name="div1">
                number1:<input type="number" name="num1" id="id1"  />
                number2:<input type="number" name="num2" id="id2" />
            </div>
            <div name="div2">
                sum:<select onChange={handler}>
                    <option>select</option>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
             <p >Result: {num}</p>
            </div>
        
        </>
    )
}