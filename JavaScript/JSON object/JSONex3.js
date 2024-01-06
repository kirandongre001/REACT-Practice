let obj={fname:"kiran",lastname:"Dongre",
         address:{
            area:"model Colony",
            city:"Pune",
            state:"Maharastra",
            pin:"411100"
         },
        skill:["cooking","eating","talking"],
        show:function(){
            console.log(this.address)
        }
    }

console.log(obj)
console.log(JSON.stringify(obj))

//converts object into string
let rv=JSON.stringify(obj)
console.log(rv)
console.log(typeof(rv))
console.log(rv.fname)

//convert stringified obj into object
let o=JSON.parse(rv)
console.log(o)
console.log(typeof(o))
console.log(o.address.area)



