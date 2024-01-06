export default function AddArray({nums}) {
    let add=0
    // let n1 = props.num
    for(let i = 0;i<nums.length; i++)
    {
        add+=nums[i]
    }
    return (
        <p>total={add}</p>
    )
}
