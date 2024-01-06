let obj={fname:"kiran",lastname:"Dongre",
         address:{
            area:"model Colony",
            city:"Pune",
            state:"Maharastra",
            pin:"411100"
         },
        skill:["cooking","eating","talking"]
        
    }

console.log(obj.fname)
console.log(obj.lastname)
console.log(obj.address)
console.log(obj.address.state)
console.log(obj.skill)
console.log(obj.skill[2])
console.log(obj)

console.log(obj["fname"])

console.log(obj["address"]["pin"])
console.log(obj["address"].city)

console.log(obj["skill"][1])


