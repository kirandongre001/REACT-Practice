let s="kiran"
let s1="kiran"
let t=new String("kiran")
let t1=new String("kiran")
console.log("primitive==primitive")
if(s==s1)
console.log("same")
else
console.log("different")

console.log("obj==obj")//address is compared
if(t==t1)
console.log("same")
else
console.log("different")

console.log("obj==primitive")//object is converted to primitive
if(t==s)
console.log("same")
else
console.log("different")

console.log("primitive===primitive")
if(s===s1)
console.log("same")
else
console.log("different")

console.log("obj===obj")//address is compared
if(t===t1)
console.log("same")
else
console.log("different")


console.log("obj===primitive")//no comparison and different is the answer
if(t===s)
console.log("same")
else
console.log("different")
