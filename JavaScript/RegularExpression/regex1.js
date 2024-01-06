//let regex=/abc/
// let regex=/abc/i
// let regex=/[A-Z]/i
// let regex=/[a-sA-Z]/
let regex=/^[A-Z][a-z]/

let s="abc"
let s1="pqr"
let s2="pqrsabc"
let s3="ABC"
let s4="1234HKJ"
let s5="564hsgd"
let s6="zxERHU"
let r=s6.match(regex)
console.log(r)