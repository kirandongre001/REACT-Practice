let arr=[0,1,2,3,4]
console.log(arr)
let l2=arr.length
console.log("length="+l2)


arr.push(5,6,7)
let l1=arr.length
console.log("length="+l1)
console.log(arr)
console.log("----------------------------")


arr.pop()
arr.pop()
let x=arr.pop()
console.log(x)
let l=arr.length
console.log("length="+l)


// arr.splice(0)
// console.log(arr)

arr.splice(2,4)
console.log(arr)

arr.splice(0,0,40,50)
console.log(arr)