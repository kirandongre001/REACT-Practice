function total(...nums)
{
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    return sum
}
console.log(total(1,2,3,4,5,6))
console.log()