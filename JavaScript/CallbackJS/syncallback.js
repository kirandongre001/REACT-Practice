let arr=[2,1,8,4,6,5]
arr.forEach((ele)=>{console.log(ele)})

arr.forEach((Element,ind,arr)=>{console.log(ind,Element,arr)})

let sq= arr.map((ele)=>{return Math.pow(ele,2)})
console.log(sq)

let d4=arr.filter(function(ele){
    if(ele%4==0)
    return true
else
return false
})
console.log(d4)

let st=arr.sort((a,b)=>a-b)
console.log(st)