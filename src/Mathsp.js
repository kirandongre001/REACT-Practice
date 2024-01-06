
export default function Mathsp(props) {
    let num1 = props.n1;
    let num2 = props.n2;
    let op = props.op;

    let result

    switch (op) {
        case "+":
            result = num1 + num2; break
        case "-":
            result = num1 - num2; break
        case "*":
            result = num1 * num2; break
        case "/":
            result = num1 / num2; break
        default: break;

    }

    return (

        // {/* <p>{num1} + {num2}={num1+num2}</p> */}
        <p> {num1} {op} {num2} = {result} </p>

    )
}