// let call=()=>{console.log("hi")}
// call()
// setInterval(call,1000)// asynchronous callback fn
// console.log("program ends")

let call=()=>{console.log("hi")}
let  interval = setInterval(call,1000)// asynchronous callback fn
//setTimeout(()=>{console.log("timeout")},3000)
setTimeout(()=>{console.log("set timeout"),clearTimeout(interval)},3000)
console.log("program ends")
//clearInterval(interval)


