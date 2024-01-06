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

console.log(obj.fname)
console.log(obj.lastname)
console.log(obj.address)
console.log(obj.address.state)
console.log(obj.skill)
console.log(obj)
obj.show()
console.log(typeof(obj))
console.log(typeof(obj.show))



